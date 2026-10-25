import express from 'express';
import cors from 'cors';
import { ALL_SUBJECTS, getSubjectById, getSubjectSummary } from '../src/data/index';

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

// In-memory store for demo progress, notes, and bookmarks
interface ProgressStore {
  completedLessons: string[];
  completedExperiments: string[];
  quizScores: Record<string, { score: number; total: number; timestamp: number }>;
  bookmarks: string[];
  notes: Record<string, string>;
  recentSubjects: string[];
}

let userProgress: ProgressStore = {
  completedLessons: ['phy-u1-l1', 'c-u1-l1'],
  completedExperiments: ['phy-lab-exp-1'],
  quizScores: {
    'phy-u1-l1': { score: 2, total: 2, timestamp: Date.now() - 3600000 }
  },
  bookmarks: ['phy-u1-l2', 'beee-u1-l1'],
  notes: {
    'phy-u1-l1': 'Remember: In thin-film interference, extra phase change of pi occurs upon reflection from a denser medium.'
  },
  recentSubjects: ['applied-physics', 'programming-c', 'beee']
};

// API Routes

// 1. List all 11 subjects (summary metadata)
app.get('/api/subjects', (req, res) => {
  const summaries = getSubjectSummary();
  res.json({
    success: true,
    count: summaries.length,
    data: summaries
  });
});

// 2. Get full details of a specific subject
app.get('/api/subjects/:id', (req, res) => {
  const { id } = req.params;
  const subject = getSubjectById(id);
  if (!subject) {
    return res.status(404).json({
      success: false,
      error: `Subject with ID '${id}' not found.`
    });
  }
  res.json({
    success: true,
    data: subject
  });
});

// 3. User progress endpoints
app.get('/api/progress', (req, res) => {
  res.json({
    success: true,
    data: userProgress
  });
});

app.post('/api/progress/complete-lesson', (req, res) => {
  const { lessonId, subjectId } = req.body;
  if (!lessonId) {
    return res.status(400).json({ success: false, error: 'lessonId is required' });
  }
  if (!userProgress.completedLessons.includes(lessonId)) {
    userProgress.completedLessons.push(lessonId);
  }
  if (subjectId && !userProgress.recentSubjects.includes(subjectId)) {
    userProgress.recentSubjects.unshift(subjectId);
    userProgress.recentSubjects = userProgress.recentSubjects.slice(0, 5);
  }
  res.json({ success: true, data: userProgress });
});

app.post('/api/progress/complete-experiment', (req, res) => {
  const { experimentId } = req.body;
  if (!experimentId) {
    return res.status(400).json({ success: false, error: 'experimentId is required' });
  }
  if (!userProgress.completedExperiments.includes(experimentId)) {
    userProgress.completedExperiments.push(experimentId);
  }
  res.json({ success: true, data: userProgress });
});

app.post('/api/progress/toggle-bookmark', (req, res) => {
  const { itemId } = req.body;
  if (!itemId) {
    return res.status(400).json({ success: false, error: 'itemId is required' });
  }
  const idx = userProgress.bookmarks.indexOf(itemId);
  if (idx > -1) {
    userProgress.bookmarks.splice(idx, 1);
  } else {
    userProgress.bookmarks.push(itemId);
  }
  res.json({ success: true, bookmarks: userProgress.bookmarks });
});

// 4. Notes endpoints
app.get('/api/notes', (req, res) => {
  res.json({ success: true, data: userProgress.notes });
});

app.post('/api/notes', (req, res) => {
  const { key, content } = req.body;
  if (!key) {
    return res.status(400).json({ success: false, error: 'Note key/id is required' });
  }
  userProgress.notes[key] = content || '';
  res.json({ success: true, notes: userProgress.notes });
});

// 5. Quiz submission & evaluation endpoint
app.post('/api/quiz/submit', (req, res) => {
  const { quizId, answers, questions } = req.body;
  // answers: { [questionId: string]: number }
  if (!answers || !questions || !Array.isArray(questions)) {
    return res.status(400).json({ success: false, error: 'Invalid payload' });
  }

  let score = 0;
  const review = questions.map((q: any) => {
    const selected = answers[q.id];
    const correct = q.correctIndex !== undefined ? q.correctIndex : q.correctAnswer;
    const isCorrect = selected === correct;
    if (isCorrect) score++;
    return {
      id: q.id,
      selected,
      correct,
      isCorrect,
      explanation: q.explanation,
      hint: q.hint
    };
  });

  if (quizId) {
    userProgress.quizScores[quizId] = {
      score,
      total: questions.length,
      timestamp: Date.now()
    };
  }

  res.json({
    success: true,
    score,
    total: questions.length,
    percentage: Math.round((score / questions.length) * 100),
    review
  });
});

// 6. Intelligent Pedagogical AI Tutor Endpoint
// Supports Simple English, Hinglish, and Hindi modes with step-by-step doubt resolution
app.post('/api/ai-tutor', (req, res) => {
  const { question, context, language = 'en' } = req.body;

  if (!question || typeof question !== 'string') {
    return res.status(400).json({ success: false, error: 'Question string is required' });
  }

  const qLower = question.toLowerCase();

  // Pedagogical doubt resolution generator
  let responseText = '';
  let analogy = '';
  let mistakeWarning = '';

  if (qLower.includes('newton') || qLower.includes('ring') || qLower.includes('interference')) {
    if (language === 'hi') {
      responseText = `न्यूटन रिंग्स (Newton's Rings) एक गोलाकार व्यतिकरण (Interference) पैटर्न है जो तब बनता है जब एक उत्तल लेंस को समतल कांच की प्लेट पर रखा जाता है। केंद्र हमेशा 'डार्क' (अदीप्त) होता है क्योंकि लेंस और प्लेट के संपर्क बिंदु पर परावर्तित प्रकाश में \\(\\pi\\) का फेज परिवर्तन (Phase change) हो जाता है।`;
      analogy = `जैसे जब आप साबुन के बुलबुले या पानी पर तेल की पतली परत देखते हैं तो विभिन्न रंगों के छल्ले बनते हैं, वही वेव इंटरफेरेंस यहाँ एयर-फिल्म के साथ होता है।`;
      mistakeWarning = `याद रखें: केंद्र अदीप्त (Dark) होता है, ब्राइट नहीं! यह परीक्षा में बार-बार पूछा जाने वाला ट्रिकी सवाल है।`;
    } else if (language === 'hinglish') {
      responseText = `Newton's rings ek circular interference fringe pattern hai jo banta hai jab plano-convex lens ko flat glass plate pe rakhte hain. Center hamesha Dark hota hai kyunki contact point par air-film thickness \\(t = 0\\) hoti hai aur denser glass plate se reflection ke dauran \\(\\lambda/2\\) ya \\(\\pi\\) ka extra path difference introduce ho jata hai!`;
      analogy = `Jaise soap bubble ya oil droplet paani par colorful rings banata hai thin film interference se, waise hi yahan lens aur glass ke beech trapped air-film interference karti hai.`;
      mistakeWarning = `Common Mistake: Students assume karte hain ki center bright hoga kyunki path difference zero hai, lekin reflection phase shift ki wajah se destructive interference hota hai!`;
    } else {
      responseText = `Newton's Rings are circular interference fringes formed when a plano-convex lens of large radius of curvature rests on an optical flat glass plate. The center spot is always DARK in reflected light due to an abrupt phase change of \\(\\pi\\) (path difference of \\(\\lambda/2\\)) upon reflection at the denser medium.`;
      analogy = `Think of it like looking through two glass microscope slides with a wedge of air in between: concentric dark and bright rings appear corresponding to equal optical thickness contours.`;
      mistakeWarning = `Critical Exam Tip: The central fringe is dark, NOT bright! Always mention the Stokes phase shift of \\(\\pi\\) on reflection from the glass plate.`;
    }
  } else if (qLower.includes('pointer') || qLower.includes('c program') || qLower.includes('memory') || qLower.includes('array')) {
    if (language === 'hi') {
      responseText = `C प्रोग्रामिंग में पॉइंटर (Pointer) एक विशेष वेरिएबल है जो किसी अन्य वेरिएबल का मेमोरी एड्रेस (Hexadecimal RAM location) स्टोर करता है। \\('*'\\) डिरेफरेंस ऑपरेटर है और \\('&'\\) एड्रेस-ऑफ ऑपरेटर है।`;
      analogy = `पॉइंटर को एक चिट्ठी के लिफाफे की तरह समझें: लिफाफा खुद घर नहीं है, लेकिन उस पर घर का पता (Address) लिखा होता है जिससे डाकिया सही घर तक पहुँच जाता है।`;
      mistakeWarning = `सावधानी: बिना इनिशियलाइज़ किए पॉइंटर (Wild Pointer) को कभी डिरेफरेंस न करें, इससे प्रोग्राम क्रैश (Segmentation Fault) हो जाता है।`;
    } else if (language === 'hinglish') {
      responseText = `Pointer ek normal variable jaisa hi hota hai, bas value store karne ke bajaye kisi doosre variable ka memory address (&x) store karta hai. Agar address pe stored value chahiye toh dereference operator (*ptr) use karte hain.`;
      analogy = `Pointer bilkul GPS coordinates ya Ghar ke address jaisa hai. Variable khud makaan hai, aur pointer us makaan ka address plate!`;
      mistakeWarning = `Uninitialized pointer (garbage address) ko dereference karne se Segmentation Fault / Crash hota hai. Hamesha NULL ya valid address assign karo.`;
    } else {
      responseText = `In C, a pointer is a variable that stores the memory address of another variable. The address-of operator \\('&'\\) retrieves the location, while the dereference operator \\('*'\\) accesses or modifies the value at that stored location.`;
      analogy = `A pointer is like a bookmark in a book: it isn't the page content itself, but it points directly to the exact page number in RAM.`;
      mistakeWarning = `Common Mistake: Dereferencing an uninitialized or NULL pointer causes undefined behavior and segmentation faults! Always initialize pointers before use.`;
    }
  } else if (qLower.includes('kirchhoff') || qLower.includes('kcl') || qLower.includes('kvl') || qLower.includes('circuit')) {
    if (language === 'hi') {
      responseText = `किरचॉफ का धारा नियम (KCL) आवेश संरक्षण (Conservation of Charge) पर आधारित है: किसी नोड में प्रवेश करने वाली धाराओं का योग बाहर जाने वाली धाराओं के योग के बराबर होता है (\\(\\sum I = 0\\))। KVL ऊर्जा संरक्षण (Conservation of Energy) पर आधारित है (\\(\\sum V = 0\\))।`;
      analogy = `पानी के पाइप का जंक्शन: जितना लीटर पानी जंक्शन में घुसेगा, उतना ही बाहर निकलेगा, पाइप में पानी गायब नहीं हो सकता।`;
      mistakeWarning = `KVL लगाते समय लूप की दिशा और वोल्टेज ड्रॉप/राइज के चिन्ह (+ / -) का विशेष ध्यान रखें।`;
    } else if (language === 'hinglish') {
      responseText = `Kirchhoff's Current Law (KCL) kehta hai ki kisi bhi junction ya node par total incoming current hamesha outgoing current ke barabar hota hai (\\(\\sum I = 0\\)). Yeh Conservation of Charge par based hai. KVL closed loop ke liye hai (\\(\\sum V = 0\\)) aur Conservation of Energy par based hai.`;
      analogy = `Water pipe T-joint analogy: jitna paani input se aayega, utna hi do pipes se bahar niklega. Junction par koi paani gayab nahi hota.`;
      mistakeWarning = `Sign Convention Mistake: Resistor me current high potential (+) se low potential (-) flow karta hai, isliye current ke direction me voltage drop (-IR) lena zaroori hai.`;
    } else {
      responseText = `Kirchhoff's Current Law (KCL) states that the algebraic sum of currents meeting at any node is zero (\\(\\sum I_{in} = \\sum I_{out}\\)), founded on the Conservation of Electric Charge. Kirchhoff's Voltage Law (KVL) states that the algebraic sum of voltages in any closed mesh is zero (\\(\\sum V = 0\\)), founded on Conservation of Energy.`;
      analogy = `Think of water piping: a pipe splitter never stores or creates water. Exactly as much flow enters the junction as leaves it.`;
      mistakeWarning = `Watch your signs! When tracing a loop in the direction of current through a resistor, the potential decreases (-I*R drop).`;
    }
  } else {
    // General adaptive pedagogical response
    if (language === 'hi') {
      responseText = `आपका सवाल: "${question}"।\n\nइंजीनियरिंग में हर जटिल समस्या को छोटे मूलभूत सिद्धांतों (First Principles) में तोड़कर समझा जा सकता है। संदर्भ: ${context?.topic || 'इंजीनियरिंग फंडामेंटल्स'}। मुख्य बात यह है कि अवधारणा को रटने के बजाय उसके भौतिक या तार्किक कारण को समझें।`;
      analogy = `जैसे एक विशाल इमारत मजबूत ईंटों की नींव पर खड़ी होती है, वैसे ही B.Tech के सभी एडवांस्ड कॉन्सेप्ट्स बेसिक डेफिनिशन और फॉर्मूले पर टिके हैं।`;
      mistakeWarning = `फॉर्मूले को सीधे अप्लाई करने से पहले SI यूनिट्स और मान्यताओं (Assumptions) को अवश्य जांचें।`;
    } else if (language === 'hinglish') {
      responseText = `Aapka question: "${question}" bahut hi relevant hai!\n\n${context?.topic ? `Topic (${context.topic}) ke perspective se: ` : ''}Concept ko step-by-step approach karein: pehle real-life scenario samjhein, fir physical principle aur formula apply karein.`;
      analogy = `Ek recipe ki tarah: Har step ka apna logic hota hai. Agar step miss karenge toh final answer galat aayega.`;
      mistakeWarning = `Step-by-step units aur sign conventions check karna mat bhoolna!`;
    } else {
      responseText = `Regarding your question: "${question}".\n\n${context?.topic ? `In the context of ${context.topic}: ` : ''}Engineering concepts are best mastered through first principles: observe the physical phenomenon, relate it to an intuitive analogy, and then formulate the mathematical or algorithmic model.`;
      analogy = `Like building a bridge: the mathematical equations are simply structural descriptions of real physical forces in equilibrium.`;
      mistakeWarning = `Always verify boundary conditions, dimensional units, and initial assumptions before finalizing your calculation or code.`;
    }
  }

  res.json({
    success: true,
    data: {
      answer: responseText,
      analogy,
      mistakeWarning,
      followUpQuestions: [
        'Can you show me a numerical example?',
        'What are the typical university exam questions from this topic?',
        'How does this work in a practical laboratory setting?'
      ]
    }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`BTech LearnVerse API Server running on port ${PORT}`);
});
