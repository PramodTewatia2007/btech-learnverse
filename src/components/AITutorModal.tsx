import React, { useState } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Lightbulb, 
  AlertTriangle, 
  RotateCcw,
  User,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { Language } from '../types';

interface AITutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentContext?: {
    subjectId?: string;
    unitId?: string;
    lessonId?: string;
    topic?: string;
  };
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  analogy?: string;
  mistakeWarning?: string;
  timestamp: number;
}

export const AITutorModal: React.FC<AITutorModalProps> = ({
  isOpen,
  onClose,
  currentContext,
  language,
  onLanguageChange
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'tutor',
      text: language === 'hi' 
        ? 'नमस्ते! मैं आपका पर्सनल B.Tech AI ट्यूटर हूँ। इंजीनियरिंग का कोई भी सिद्धांत, फ़ॉर्मूला, प्रयोगशाला प्रयोग या C कोड समझने में कोई परेशानी हो तो बेझिझक पूछें!'
        : language === 'hinglish'
        ? 'Namaste! Main aapka personal B.Tech AI Tutor hoon. Koi bhi concept, derivation, C program ya lab viva question puchho — zero level se step-by-step explain karunga!'
        : 'Hello! I am your personal B.Tech Engineering AI Tutor. Ask me any doubt about physical concepts, mathematical formulas, C programming logic, or lab vivas!',
      timestamp: Date.now()
    }
  ]);
  const [inputQuestion, setInputQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSend = async (questionText?: string) => {
    const q = questionText || inputQuestion;
    if (!q.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: q,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuestion('');
    setIsLoading(true);

    try {
      // Attempt backend API call
      const res = await fetch('http://127.0.0.1:5000/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          context: currentContext,
          language
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success && data.data) {
          const tutorMsg: ChatMessage = {
            id: `tutor-${Date.now()}`,
            sender: 'tutor',
            text: data.data.answer,
            analogy: data.data.analogy,
            mistakeWarning: data.data.mistakeWarning,
            timestamp: Date.now()
          };
          setMessages(prev => [...prev, tutorMsg]);
          setIsLoading(false);
          return;
        }
      }
    } catch (e) {
      // Fallback to client-side rule-based pedagogical response
    }

    // Client-side fallback generator
    setTimeout(() => {
      let answer = '';
      let analogy = '';
      let mistake = '';

      const qLower = q.toLowerCase();
      if (qLower.includes('newton') || qLower.includes('ring')) {
        answer = language === 'hi'
          ? `न्यूटन रिंग्स (Newton's Rings) एक वृत्ताकार इंटरफेरेंस फ्रिंज पैटर्न है। इसका केंद्र हमेशा 'अदीप्त' (Dark) होता है क्योंकि संपर्क बिंदु पर ग्लास प्लेट से परावर्तन के दौरान पाई (π) का फेज अंतर जुड़ जाता है!`
          : language === 'hinglish'
          ? `Newton's rings me center hamesha Dark hota hai kyunki lens aur plate ke contact point par air film thickness t=0 hoti hai aur reflection par π ka phase shift hota hai.`
          : `Newton's rings have a pitch dark central fringe because light reflected from the optical flat glass plate suffers an abrupt phase shift of π (equivalent to path difference of λ/2).`;
        analogy = `Think of water ripples or soap bubble colors: wave cancellation at zero thickness causes destructive interference!`;
        mistake = `Never write that the center is bright! The Stokes reflection rule guarantees destructive interference at t = 0.`;
      } else if (qLower.includes('pointer') || qLower.includes('c ')) {
        answer = language === 'hi'
          ? `C में पॉइंटर एक वेरिएबल है जो किसी अन्य वेरिएबल का मेमोरी एड्रेस स्टोर करता है। '&' से एड्रेस प्राप्त होता है और '*' से उस एड्रेस की वैल्यू पढ़ी जाती है।`
          : language === 'hinglish'
          ? `Pointer bas ek memory address store karta hai. '&x' address deta hai aur '*ptr' us address ki value nikalta hai.`
          : `A pointer in C is a variable that holds the RAM memory address of another variable. '&' is address-of, and '*' is dereference.`;
        analogy = `Like a home address written on an envelope: the envelope isn't the house, it just points you there.`;
        mistake = `Never dereference an uninitialized pointer (wild pointer)! Always assign it NULL or a valid address.`;
      } else {
        answer = language === 'hi'
          ? `आपने पूछा: "${q}"। इंजीनियरिंग का नियम है कि बड़े फॉर्मूले याद करने से पहले मूलभूत सिद्धांत को विजुअलाइज करें।`
          : language === 'hinglish'
          ? `Aapka question: "${q}" standard university pattern me aata hai. Pehle physical diagram samjhein, fir formula lagayein.`
          : `Regarding "${q}": In engineering, break the problem into physical causes, diagrammatic representation, and mathematical laws.`;
        analogy = `Like constructing a skyscraper: formulas are the steel frame, but physical understanding is the solid foundation.`;
        mistake = `Always check SI units (convert cm to m, mA to A) before solving numerical equations!`;
      }

      const tutorMsg: ChatMessage = {
        id: `tutor-${Date.now()}`,
        sender: 'tutor',
        text: answer,
        analogy,
        mistakeWarning: mistake,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, tutorMsg]);
      setIsLoading(false);
    }, 600);
  };

  const quickQuestions = [
    "Why is the center of Newton's rings dark?",
    "Explain Kirchhoff's Voltage Law with an analogy.",
    "What is the difference between *ptr and &ptr in C?",
    "How does light propagate inside an optical fiber?"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl h-[85vh] max-h-[700px] flex flex-col shadow-2xl overflow-hidden text-white">
        {/* Modal Top Bar */}
        <div className="bg-slate-800/90 px-5 py-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-md">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base text-white flex items-center gap-2">
                <span>Personal Engineering AI Tutor</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-[11px] text-indigo-300">
                Patient, step-by-step doubt resolution in 3 languages
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switch */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              {(['en', 'hinglish', 'hi'] as Language[]).map(lang => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2 py-0.5 rounded-lg transition-all font-semibold ${
                    language === lang ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang === 'en' ? 'EN' : lang === 'hinglish' ? 'Hinglish' : 'हिंदी'}
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-950/60">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'tutor' && (
                <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[85%] space-y-2.5 rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-indigo-600 text-white rounded-tr-none shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none shadow'
              }`}>
                <div className="whitespace-pre-line">{m.text}</div>

                {/* Optional Analogy Box */}
                {m.analogy && (
                  <div className="bg-amber-950/20 border border-amber-900/40 rounded-xl p-3 text-amber-200 text-xs flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-amber-300">Everyday Analogy: </strong>
                      {m.analogy}
                    </div>
                  </div>
                )}

                {/* Optional Common Mistake Warning */}
                {m.mistakeWarning && (
                  <div className="bg-rose-950/20 border border-rose-900/40 rounded-xl p-3 text-rose-200 text-xs flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-rose-300">Exam Watch-out: </strong>
                      {m.mistakeWarning}
                    </div>
                  </div>
                )}
              </div>

              {m.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-2 text-xs text-indigo-300">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 text-slate-400">Thinking through engineering principles...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {quickQuestions.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(chip)}
              className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[11px] text-slate-300 whitespace-nowrap transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            placeholder={
              language === 'hi' 
                ? 'अपना सवाल यहाँ टाइप करें...' 
                : language === 'hinglish' 
                ? 'Apna doubt yahan type karein...' 
                : 'Type your doubt, formula, or exam question...'
            }
            value={inputQuestion}
            onChange={(e) => setInputQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-slate-950 text-xs sm:text-sm text-slate-100 placeholder-slate-500 px-4 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputQuestion.trim() || isLoading}
            className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
