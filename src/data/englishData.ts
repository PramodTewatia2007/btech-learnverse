import { Subject } from '../types';

export const ENGLISH_SUBJECT: Subject = {
  id: 'english',
  title: 'English',
  category: 'Theory',
  description: 'Master functional engineering communication: communication theory, grammar & vocabulary, active listening, technical reports, business letters, emails, resumes, group discussions, and job interviews.',
  icon: 'BookOpen',
  color: 'from-rose-600 to-pink-700',
  isOfficial: true,
  syllabusSource: 'Official University Syllabus (B.Tech 1st Year)',
  unitsCount: 5,
  units: [
    {
      id: 'eng-u1',
      unitNumber: 'Unit I',
      title: 'Communication Skills',
      description: 'Meaning of communication, process of communication (Sender, Message, Encoding, Channel, Receiver, Decoding, Feedback, Noise), types of communication (Verbal, Nonverbal, Written, Visual), and principles of effective communication.',
      topics: [
        'Meaning and definition of communication',
        'The communication process model: Sender, Encoding, Message, Channel, Receiver, Decoding, Feedback',
        'The role of Noise and psychological/physical/semantic barriers',
        'Types of communication: Verbal, Nonverbal, Written, and Visual',
        'Principles of effective communication: The 7 Cs (Clarity, Conciseness, Concreteness, Correctness, Coherence, Completeness, Courtesy)',
        'Techniques for overcoming communication barriers in engineering contexts'
      ],
      lessons: [
        {
          id: 'eng-u1-l1',
          unitId: 'eng-u1',
          subjectId: 'english',
          title: 'The Process & Meaning of Communication',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic sentence reading'],
          realLifeQuestion: {
            en: 'Why do software projects and lab experiments often fail not because the code was wrong, but because the team members misunderstood what was needed?',
            hinglish: 'Engineering projects me code ya machine sahi hone ke baad bhi kaam kyu bigad jata hai sirf aapsi baat-cheet ki galat-fehmi se?',
            hi: 'इंजीनियरिंग परियोजनाओं में अक्सर कोड या मशीन सही होने के बावजूद टीम के सदस्यों के बीच गलतफहमी के कारण विफलता क्यों होती है?'
          },
          simpleExplanation: {
            en: 'Communication is the two-way exchange of facts, ideas, and emotions between individuals to achieve mutual understanding. It is NOT simply speaking or broadcasting; communication only succeeds when the receiver interprets the message in the exact same sense that the sender intended, verified through feedback.',
            hinglish: 'Communication sirf bolna ya message bhej dena nahi hai! Yeh do-tarfa (two-way) process hai jisme Sender ke dimaag ka idea, Receiver ke dimaag tak bina kisi distortion ke pahuche aur Feedback se verify ho ki baat sahi samajh aayi.',
            hi: 'संचार (Communication) दो या दो से अधिक व्यक्तियों के बीच सूचना, विचारों और भावनाओं का द्विमार्गी (Two-way) आदान-प्रदान है, जो फीडबैक द्वारा सत्यापित होता है।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'Think of digital packet transmission in computer networking: A transmitter encodes binary bits into electrical pulses, sends them over an Ethernet cable where noise might drop packets, and the receiver must reconstruct the file and send an ACK (acknowledgement) packet back.',
              hinglish: 'Computer network me TCP packet bhejne jaisa: Sender data encode karta hai, cable se bhejta hai, aur receiver jab tak ACK (acknowledgement / feedback) na bheje, transfer complete nahi maana jata.',
              hi: 'जैसे कंप्यूटर नेटवर्क में डेटा पैकेट भेजने के बाद जब तक रिसीवर पावती (ACK/Feedback) नहीं भेजता, तब तक संचार पूर्ण नहीं माना जाता।'
            },
            limitations: {
              en: 'Computer packets are purely mathematical, while human communication involves emotions, cultural biases, tone, and subconscious body language.',
              hinglish: 'Insaani communication me emotions, chehre ke bhaav aur tone of voice bhi asar daalte hain.',
              hi: 'मानवीय संचार में भावनाओं और शारीरिक भाषा (Body Language) का भी गहरा प्रभाव होता है।'
            }
          },
          terminology: [
            {
              term: 'Encoding',
              definition: {
                en: 'The mental process of converting abstract thoughts or data into symbolic form (words, diagrams, code, body gestures).',
                hinglish: 'Dimaag ke vichaar ko shabdon ya chitron me convert karna.',
                hi: 'विचारों को प्रतीकों, शब्दों या चित्रों में परिवर्तित करना।'
              }
            },
            {
              term: 'Feedback',
              definition: {
                en: 'The receiver’s observable reaction transmitted back to the sender, confirming whether the message was accurately decoded.',
                hinglish: 'Receiver ka response jo batata hai ki message sahi samjha ya nahi.',
                hi: 'प्राप्तकर्ता की प्रतिक्रिया जो संचार की सफलता की पुष्टि करती है।'
              }
            },
            {
              term: 'Noise (Barriers)',
              definition: {
                en: 'Any physical, psychological, semantic, or environmental interference that distorts or obstructs the message.',
                hinglish: 'Aawaz, bhasha ki kathinai ya dhyan bhatakna jo message ko kharab kare.',
                hi: 'कोई भी बाधा जो संदेश के प्रवाह को विकृत करती है।'
              }
            }
          ],
          visualType: 'communication-process',
          underlyingPrinciple: {
            en: 'Shannon-Weaver and Berlo’s SMCR communication models demonstrate that communication is a dynamic cyclical loop. Without feedback, the sender cannot determine if the communication succeeded or suffered semantic breakdown.',
            hinglish: 'Communication ek dynamic loop hai. Feedback ke bina sender ko pata hi nahi chal sakta ki receiver ne kya samjha.',
            hi: 'संचार एक गतिशील चक्र है जिसमें बिना फीडबैक के संदेश की स्पष्टता सिद्ध नहीं हो सकती।'
          },
          workedExample: {
            problem: {
              en: 'Identify the Sender, Message, Channel, Noise, and Feedback in: "During a loud workshop session, the instructor gestures to the lathe operator to turn off the power switch; the operator nods and cuts the supply."',
              hinglish: 'Is scenario me Sender, Message, Channel, Noise aur Feedback identify karein: Workshop me shor ke dauran teacher ne lathe operator ko haath ke ishare se machine band karne ko kaha, operator ne sar hilakar switch off kar diya.',
              hi: 'इस परिस्थिति में प्रेषक, संदेश, माध्यम, शोर और फीडबैक की पहचान करें।'
            },
            steps: [
              { stepNumber: 1, title: 'Sender', explanation: { en: 'Workshop Instructor (originator of the directive).', hinglish: 'Workshop Instructor.', hi: 'कार्यशाला अनुदेशक।' } },
              { stepNumber: 2, title: 'Message & Encoding', explanation: { en: 'Instruction to cut power, encoded via nonverbal hand gesture.', hinglish: 'Power cut karne ka nirdesh (haath ka ishara).', hi: 'मशीन बंद करने का निर्देश (शारीरिक संकेत)।' } },
              { stepNumber: 3, title: 'Channel & Noise', explanation: { en: 'Visual channel through ambient light. Noise is high acoustic clatter from lathe machines.', hinglish: 'Visual channel (dekhna). Noise machine ka bhari shor hai.', hi: 'दृश्य माध्यम और मशीनों का कानफोड़ू शोर।' } },
              { stepNumber: 4, title: 'Receiver & Feedback', explanation: { en: 'Lathe Operator is the receiver. His nod and immediate act of flipping the switch is the positive feedback.', hinglish: 'Operator receiver hai aur uska nod karke switch band karna feedback hai.', hi: 'ऑपरेटर और उसका सिर हिलाकर स्विच बंद करना फीडबैक है।' } }
            ],
            finalAnswer: 'All 5 elements identified correctly: Visual nonverbal channel effectively overcame loud acoustic workshop noise.'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Assuming that because you sent an email or spoke aloud, communication has automatically occurred.',
                hinglish: 'Yeh sochna ki maine bol diya ya email bhej diya toh communication poora ho gaya.',
                hi: 'यह मान लेना कि केवल ईमेल भेजने या बोल देने से संचार पूरा हो गया।'
              },
              correction: {
                en: 'Transmission is only half the process; communication requires receiver comprehension verified by feedback.',
                hinglish: 'Jab tak receiver samajh kar response na de, communication complete nahi hota.',
                hi: 'संचार तभी पूर्ण होता है जब प्राप्तकर्ता समझकर प्रतिक्रिया (फीडबैक) दे।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'eng-u1-p1',
              level: 'Beginner',
              question: {
                en: 'Which component of the communication process validates whether the receiver accurately understood the message?',
                hinglish: 'Communication me kaun sa element yeh confirm karta hai ki message sahi samjha gaya?',
                hi: 'संचार प्रक्रिया में कौन सा घटक यह सिद्ध करता है कि संदेश सही समझा गया?'
              },
              options: ['Encoding', 'Feedback', 'Channel', 'Noise'],
              correctIndex: 1,
              explanation: {
                en: 'Feedback is the return response from the receiver that allows the sender to verify mutual understanding.',
                hinglish: 'Feedback se hi confirm hota hai ki baat samajh aayi.',
                hi: 'फीडबैक से ही प्राप्तकर्ता की समझ की पुष्टि होती है।'
              },
              hint: { en: 'Think of the loop back to the sender.', hinglish: 'Sender ko wapas aane wala response.', hi: 'प्रेषक को मिलने वाला उत्तर।' }
            }
          ],
          summary: {
            en: [
              'Communication is a dynamic two-way process of sharing facts, instructions, and concepts.',
              'The 7 elements are Sender, Encoding, Message, Channel, Receiver, Decoding, and Feedback.',
              'Noise encompasses physical, semantic (jargon), and psychological barriers.',
              'Feedback closes the communication loop and ensures mutual clarity.'
            ],
            hinglish: [
              'Communication do-tarfa process hai jisme Feedback sabse zaroori hai.',
              '7 elements: Sender, Encoding, Message, Channel, Receiver, Decoding, Feedback.',
              'Noise me shor, language barrier aur dhyan bhatakna shamil hai.'
            ],
            hi: [
              'संचार विचारों और सूचनाओं का एक द्विमार्गी आदान-प्रदान है।',
              'इसके मुख्य तत्व प्रेषक, संकेतन, संदेश, माध्यम, प्राप्तकर्ता, विसंकेतन और फीडबैक हैं।',
              'फीडबैक संचार चक्र को पूरा करता है।'
            ]
          },
          quiz: [
            {
              id: 'eng-u1-q1',
              question: {
                en: 'Semantic noise in engineering communication refers to:',
                hinglish: 'Engineering communication me "Semantic Noise" ka kya matlab hai?',
                hi: 'तकनीकी संचार में "सीमेंटिक शोर" का क्या अर्थ है?'
              },
              options: [
                'Loud motor noise in a workshop',
                'Misunderstanding caused by ambiguous words, acronyms, or unfamiliar technical jargon',
                'Static interference on a telephone cable',
                'Fatigue or lack of sleep in the listener'
              ],
              correctIndex: 1,
              explanation: {
                en: 'Semantic noise occurs when sender and receiver attach different meanings to words, symbols, or technical terms.',
                hinglish: 'Shabdon ya technical terms ke galat arth nikalne ko Semantic Noise kehte hain.',
                hi: 'शब्दों या तकनीकी शब्दावली के अस्पष्ट अर्थ से उत्पन्न बाधा।'
              },
              hint: { en: 'Relates to meaning of words.', hinglish: 'Shabdon ke meaning se related.', hi: 'अर्थ से संबंधित।' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'Communication is the two-way transmission of facts and ideas from sender to receiver. Effective communication requires mastering the 7 Cs (Clarity, Conciseness, Concreteness, Correctness, Coherence, Completeness, Courtesy) and mitigating physical, semantic, and psychological noise.',
          hinglish: 'Communication two-way process hai. Effective communication ke liye 7 Cs zaroori hain aur noise ko door karna padta hai.',
          hi: 'संचार विचारों का द्विमार्गी आदान-प्रदान है। प्रभावी संचार 7 Cs के सिद्धांतों और बाधाओं के निवारण पर निर्भर करता है।'
        },
        shortNotes: [
          { topic: 'The 7 Cs of Communication', content: { en: 'Clarity, Conciseness, Concreteness, Correctness, Coherence, Completeness, and Courtesy.', hinglish: '7 Cs: Clarity, Conciseness, Concreteness, Correctness, Coherence, Completeness, Courtesy.', hi: 'स्पष्टता, संक्षिप्तता, तथ्यात्मकता, शुद्धता, सुसंगतता, पूर्णता और विनम्रता।' } }
        ],
        keyFormulas: [],
        mindMap: [{ node: 'Communication', children: ['Sender & Encoding', 'Channel & Noise', 'Receiver & Decoding', 'Feedback Loop', '7 Cs of Communication'] }],
        differences: [
          {
            conceptA: 'Verbal Communication',
            conceptB: 'Nonverbal Communication',
            comparisonPoints: [
              { feature: 'Medium', a: 'Spoken or written words', b: 'Body language, gestures, eye contact, facial expressions' },
              { feature: 'Consciousness', a: 'Largely conscious and structured', b: 'Often subconscious and intuitive' },
              { feature: 'Impact', a: 'Transmits literal facts and data', b: 'Transmits emotional state and confidence (~55% of impression)' }
            ]
          }
        ],
        flashcards: [
          { front: 'What are the 7 Cs of Effective Communication?', back: 'Clarity, Conciseness, Concreteness, Correctness, Coherence, Completeness, Courtesy.' },
          { front: 'What is semantic noise?', back: 'Communication barriers arising from ambiguous words, differing cultural meanings, or unexplained technical jargon.' }
        ],
        shortAnswerQuestions: [
          { question: 'Define communication and explain why feedback is indispensable.', answer: 'Communication is the two-way exchange of ideas to reach mutual understanding. Feedback is indispensable because it proves to the sender whether the message was decoded accurately or corrupted by noise.' }
        ],
        longAnswerQuestions: [
          { question: 'Explain the Shannon-Weaver communication process model with a neat labeled block diagram and discuss four common barriers.', outline: '1. Diagram showing Sender → Encoding → Channel (Noise) → Receiver → Decoding → Feedback.\n2. Detailed role of each element.\n3. Physical barriers (ambient noise, distance).\n4. Semantic barriers (technical acronyms, ambiguous terminology).\n5. Psychological barriers (anger, confirmation bias, closed mindset).' }
        ],
        numericalPractice: []
      }
    },
    {
      id: 'eng-u2',
      unitNumber: 'Unit II',
      title: 'Grammar and Vocabulary',
      description: 'Use of tenses, articles, prepositions, conjunctions, subject-verb concord, word formation (bases, prefixes, suffixes), synonyms, antonyms, and one-word substitutes.',
      topics: [
        'Use of Tenses: Present, Past, and Future (Simple, Continuous, Perfect)',
        'Articles: Indefinite (a, an), Definite (the), and zero article rules',
        'Prepositions of time, place, direction, and prepositional phrases',
        'Conjunctions: Coordinating, subordinating, and correlative conjunctions',
        'Subject-Verb Concord (Agreement rules and collective nouns)',
        'Word Formation: Base words, prefixes, and suffixes (Greek/Latin roots)',
        'Technical Synonyms and Antonyms in engineering writing',
        'One-Word Substitutes for concise academic expression'
      ],
      lessons: [
        {
          id: 'eng-u2-l1',
          unitId: 'eng-u2',
          subjectId: 'english',
          title: 'Tenses, Concord & Core Functional Syntax',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic sentence reading'],
          realLifeQuestion: {
            en: 'Why do interviewers and research paper editors immediately notice sentences like "Neither the professor nor the students was present" versus "were present"?',
            hinglish: 'Grammar test aur interviews me "Subject-Verb Concord" ke tricky questions sabse zyada kyu puche jaate hain?',
            hi: 'साक्षात्कार और तकनीकी परीक्षाओं में सब्जेक्ट-वर्ब कॉनकॉर्ड के प्रश्न इतने महत्वपूर्ण क्यों होते हैं?'
          },
          simpleExplanation: {
            en: 'Subject-Verb Concord is the golden rule of syntax: a singular subject requires a singular verb, and a plural subject requires a plural verb. For correlative conjunctions like "Neither... nor" or "Either... or", the verb always agrees with the subject closest to it. Tenses govern time relationships: use Simple Past for completed experiments and Present Simple for universal scientific laws.',
            hinglish: 'Subject-Verb Concord ka niyam: Singular subject ke sath singular verb, plural ke sath plural verb. "Neither... nor" me verb hamesha apne paas wale subject ke hisaab se lagti hai. Vigyan ke niyam Present Simple me likhe jaate hain, aur experiment Simple Past me.',
            hi: 'सब्जेक्ट-वर्ब कॉनकॉर्ड का नियम है कि क्रिया अपने कर्ता के वचन के अनुरूप होनी चाहिए। सार्वभौमिक वैज्ञानिक नियम हमेशा सामान्य वर्तमान काल (Present Simple) में लिखे जाते हैं।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'Think of plumbing pipe couplings. An M10 threaded pipe must screw into an M10 fitting. If you attach an M10 pipe into an M20 socket (plural verb with singular noun), the joint leaks immediately.',
              hinglish: 'Sahi pipe me sahi fitting: Singular bolt me singular nut lagega, warna connection loose ho jayega.',
              hi: 'जैसे सही आकार के बोल्ट पर सही नट बैठता है, वैसे ही कर्ता के अनुसार क्रिया प्रयुक्त होती है।'
            },
            limitations: {
              en: 'Plumbing fittings are rigid metal, while English collective nouns (team, committee) can take singular or plural depending on whether members act united or divided.',
              hinglish: 'Collective nouns (team, committee) me context dekhna padta hai.',
              hi: 'सामूहिक संज्ञाओं में संदर्भ के अनुसार एकवचन या बहुवचन का प्रयोग होता है।'
            }
          },
          terminology: [
            {
              term: 'Subject-Verb Concord',
              definition: {
                en: 'The grammatical agreement in number (singular/plural) and person between subject and finite verb.',
                hinglish: 'Karta aur kriya ke beech vachan ka samanjasya.',
                hi: 'कर्ता और क्रिया के मध्य वचन और पुरुष का सामंजस्य।'
              }
            },
            {
              term: 'Zero Article',
              definition: {
                en: 'The omission of articles before proper nouns, uncountable substances, and abstract qualities in general statements (e.g. "Silicon is a semiconductor", NOT "The silicon").',
                hinglish: 'Jab noun se pehle a, an, the nahi lagta.',
                hi: 'संज्ञा से पूर्व आर्टिकल का लोप।'
              }
            }
          ],
          visualType: 'english-trainer',
          underlyingPrinciple: {
            en: 'Engineering writing demands clarity, precision, and consistency. Accurate concord and correct tense usage eliminate ambiguity in technical documentation and operational safety manuals.',
            hinglish: 'Technical reports me sahi tense aur concord se baat bilkul clear rehti hai.',
            hi: 'सटीक व्याकरण तकनीकी दस्तावेजीकरण में किसी भी भ्रम को समाप्त करता है।'
          },
          workedExample: {
            problem: {
              en: 'Correct the errors: "The list of experimental parameters were updated yesterday by the team who have submitted their report."',
              hinglish: 'Is sentence ko correct karein: "The list of experimental parameters were updated yesterday by the team who have submitted their report."',
              hi: 'इस वाक्य की व्याकरणिक त्रुटियाँ सुधारें।'
            },
            steps: [
              { stepNumber: 1, title: 'Analyze Subject', explanation: { en: 'The true subject is "The list" (singular), NOT the plural prepositional modifier "of experimental parameters".', hinglish: 'Asli subject "The list" singular hai.', hi: 'मुख्य कर्ता "The list" एकवचन है।' } },
              { stepNumber: 2, title: 'Fix Concord', explanation: { en: '"The list... were" must become "The list... was updated".', hinglish: 'were ki jagah was aayega.', hi: 'were के स्थान पर was होगा।' } },
              { stepNumber: 3, title: 'Collective Noun Concord', explanation: { en: '"The team" acting as a single unit takes singular "has submitted its report".', hinglish: 'Team ek unit ki tarah has submitted its report legi.', hi: 'टीम एकवचन है अतः has submitted its report होगा।' } }
            ],
            finalAnswer: 'Corrected: "The list of experimental parameters was updated yesterday by the team who has submitted its report."'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Assuming the word immediately before the verb is the subject.',
                hinglish: 'Verb ke theek pehle aane wale word ko subject maan lena.',
                hi: 'क्रिया के ठीक पहले वाले शब्द को कर्ता मान लेना।'
              },
              correction: {
                en: 'Ignore intervening prepositional phrases (e.g., "The quality [of these microchips] is high", NOT "are high").',
                hinglish: 'Preposition ke baad aane wale noun ko subject mat maano.',
                hi: 'प्रीपोजिशनल वाक्यांश को छोड़कर मुख्य कर्ता को देखें।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'eng-u2-p1',
              level: 'Beginner',
              question: {
                en: 'Choose the correct form: "Neither the engineer nor the technicians ________ able to locate the short circuit."',
                hinglish: 'Sahi verb chunein: "Neither the engineer nor the technicians ________ able to locate the short circuit."',
                hi: 'सही क्रिया चुनें।'
              },
              options: ['was', 'were', 'is', 'has'],
              correctIndex: 1,
              explanation: {
                en: 'Under proximity rule with "Neither... nor", the verb agrees with the nearer subject ("the technicians", which is plural), hence "were".',
                hinglish: 'Neither... nor me verb paas wale subject (technicians - plural) ke hisaab se were legi.',
                hi: 'निकटवर्ती कर्ता technicians बहुवचन है, अतः were आएगा।'
              },
              hint: { en: 'Look at the subject closest to the blank.', hinglish: 'Blank ke sabse paas wala word dekho.', hi: 'रिक्त स्थान के निकटतम कर्ता को देखें।' }
            }
          ],
          summary: {
            en: [
              'Subject-verb agreement requires matching singular with singular and plural with plural.',
              'In "Either/Neither... nor", the verb agrees with the nearer subject.',
              'Use Simple Past for historical experiments and Simple Present for scientific axioms.',
              'Word formation utilizes Latin and Greek prefixes (micro-, nano-, omni-) and suffixes (-tion, -ize).'
            ],
            hinglish: [
              'Subject-verb agreement me singular ke sath singular, plural ke sath plural.',
              'Neither... nor me paas wale subject se verb tay hoti hai.',
              'Scientific principles hamesha Present Simple me likhe jaate hain.'
            ],
            hi: [
              'कर्ता और क्रिया के वचन का मिलान आवश्यक है।',
              'Neither... nor में निकटतम कर्ता के अनुसार क्रिया आती है।',
              'वैज्ञानिक सिद्धांत हमेशा सामान्य वर्तमान में लिखे जाते हैं।'
            ]
          },
          quiz: [
            {
              id: 'eng-u2-q1',
              question: {
                en: 'Select the sentence with zero grammatical error:',
                hinglish: 'Sahi sentence select karein:',
                hi: 'शुद्ध वाक्य का चयन करें:'
              },
              options: [
                'Every student and faculty member have received the circular.',
                'The number of defective diodes is surprisingly low.',
                'A variety of sensors was tested by the team members.',
                'The data shows that voltage decrease as resistance rise.'
              ],
              correctIndex: 1,
              explanation: {
                en: '"The number of..." takes a singular verb ("is"), unlike "A number of..." which takes a plural verb.',
                hinglish: '"The number of" ke sath singular verb "is" aati hai.',
                hi: '"The number of" के साथ एकवचन क्रिया (is) आती है।'
              },
              hint: { en: 'Distinguish "The number of" from "A number of".', hinglish: 'The number of singular hota hai.', hi: 'The number of एकवचन होता है।' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'Mastery over tenses, subject-verb concord, prepositional precision, and vocabulary affixes (prefixes/suffixes) provides the structural foundation for engineering writing, conference abstracts, and job interviews.',
          hinglish: 'Grammar aur vocabulary engineering documentation ki neev hai.',
          hi: 'व्याकरण और शब्दावली तकनीकी लेखन की मजबूत नींव है।'
        },
        shortNotes: [
          { topic: 'Prefixes & Suffixes', content: { en: 'Prefixes alter meaning (anti-, sub-, trans-, hyper-); Suffixes alter part of speech (-ize converts to verb, -tion to noun, -able to adjective).', hinglish: 'Prefix meaning badalta hai, Suffix part of speech badalta hai.', hi: 'उपसर्ग अर्थ बदलते हैं और प्रत्यय शब्द भेद बदलते हैं।' } }
        ],
        keyFormulas: [],
        mindMap: [{ node: 'Grammar & Vocab', children: ['Tenses (Past/Present/Future)', 'Concord Rules', 'Articles & Prepositions', 'Prefixes & Suffixes', 'Synonyms/Antonyms'] }],
        differences: [
          {
            conceptA: '"The number of"',
            conceptB: '"A number of"',
            comparisonPoints: [
              { feature: 'Grammatical Number', a: 'Strictly singular', b: 'Strictly plural' },
              { feature: 'Example', a: 'The number of defective chips is 5.', b: 'A number of chips are defective.' }
            ]
          }
        ],
        flashcards: [
          { front: 'What is the rule of proximity in subject-verb concord?', back: 'In correlative conjunctions (either... or, neither... nor), the verb agrees with the subject closest to it.' },
          { front: 'What is a one-word substitute for "one who compiles dictionaries"?', back: 'Lexicographer.' }
        ],
        shortAnswerQuestions: [
          { question: 'Explain the difference between transitive and intransitive verbs with engineering examples.', answer: 'A transitive verb requires a direct object to complete its meaning (e.g., "The engineer calibrated the sensor"). An intransitive verb does not take a direct object (e.g., "The turbine rotated smoothly").' }
        ],
        longAnswerQuestions: [
          { question: 'Discuss five major rules of subject-verb concord with illustrative correct and incorrect sentences.', outline: '1. Singular subject taking singular verb.\n2. Compound subjects joined by "and".\n3. Correlative conjunctions (either/or, neither/nor) and proximity rule.\n4. Collective nouns acting as a whole vs individuals.\n5. Indefinite pronouns (each, every, none, either).' }
        ],
        numericalPractice: []
      }
    },
    {
      id: 'eng-u3',
      unitNumber: 'Unit III',
      title: 'Listening Skills',
      description: 'Process and types of listening, deterrents to the listening process, essentials of good listening, listening comprehension, and note-taking techniques.',
      topics: [
        'Process of listening: Hearing vs. Listening, Receiving, Interpreting, Remembering, Evaluating, Responding',
        'Types of listening: Active, Passive, Critical/Analytical, Empathetic, Informational',
        'Deterrents and barriers to listening: Environmental noise, physiological fatigue, psychological prejudice, cognitive information overload',
        'Essentials of good listening: Maintaining eye contact, avoiding premature evaluation, active empathy',
        'Listening comprehension strategies: Identifying thesis statements, transitional signposts, and distinguishing facts from opinions',
        'Note-taking methodologies: The Cornell Note-taking System, Outline method, Mind-mapping spoken lectures'
      ],
      lessons: [
        {
          id: 'eng-u3-l1',
          unitId: 'eng-u3',
          subjectId: 'english',
          title: 'Active Listening & Note-Taking Systems',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic listening skills'],
          realLifeQuestion: {
            en: 'Why do students often walk out of an hour-long engineering lecture remembering less than 20% of what the professor explained?',
            hinglish: '1 ghante ke lecture ke baad students ko sirf 20% kyu yaad rehta hai?',
            hi: 'एक घंटे के व्याख्यान के बाद छात्रों को केवल 20% ही क्यों याद रहता है?'
          },
          simpleExplanation: {
            en: 'Hearing is purely a physiological process where soundwaves vibrate the eardrum. Listening is a conscious cognitive process requiring active attention, mental decoding, evaluation, and note-taking. Without active listening strategies like the Cornell Note-Taking method, information fades from short-term memory within 24 hours.',
            hinglish: 'Hearing sirf kaan me aawaz aana hai (physical). Listening ek conscious mental process hai jisme aap dhyan se samajhte hain aur note karte hain. Agar active note-taking na ho toh 24 ghante me 80% baatein bhool jaati hain.',
            hi: 'सुनना (Hearing) एक शारीरिक क्रिया है, जबकि ध्यानपूर्वक श्रवण (Listening) एक संज्ञानात्मक मानसिक प्रक्रिया है जिसमें एकाग्रता और विचार मंथन आवश्यक है।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'Hearing is like a microphone receiving ambient noise; listening is like an AI speech-to-text algorithm transcribing, parsing, and storing the keywords into an indexed database.',
              hinglish: 'Hearing jaise microphone ka on rehna, aur Listening jaise speech recognition software ka har word ko decode karke database me save karna.',
              hi: 'हियरिंग केवल माइक्रोफोन की तरह ध्वनि ग्रहण करना है, जबकि लिसनिंग उसे समझकर डेटाबेस में सुरक्षित करना है।'
            },
            limitations: {
              en: 'Computer databases record blindly, whereas human listeners must actively filter trivial chatter from critical exam principles.',
              hinglish: 'Insaan ko zaroori aur gair-zaroori baaton me fark karna padta hai.',
              hi: 'मनुष्य को महत्वपूर्ण और अनावश्यक बातों में भेद करना होता है।'
            }
          },
          terminology: [
            {
              term: 'Active Listening',
              definition: {
                en: 'Fully concentrating, understanding, responding, and remembering what is being said rather than passively hearing the speaker.',
                hinglish: 'Puri tarah dhyan lagakar samajhna aur response dena.',
                hi: 'वक्ता की बात को पूरी एकाग्रता और समझ के साथ ग्रहण करना।'
              }
            },
            {
              term: 'Cornell Note-Taking System',
              definition: {
                en: 'A structured note format dividing a page into Cues/Keywords (left 2.5 inches), Lecture Notes (right 6 inches), and Summary (bottom 2 inches).',
                hinglish: 'Notes lene ka world-famous system jisme Cues, Notes aur Summary hoti hai.',
                hi: 'नोट्स लेने की कॉर्नेल प्रणाली (संकेत, मुख्य नोट्स और सारांश)।'
              }
            }
          ],
          visualType: 'english-trainer',
          underlyingPrinciple: {
            en: 'The human brain processes speech at ~400–500 words per minute, while speakers speak at ~120–150 words per minute. Active note-taking utilizes this cognitive gap to synthesize, summarize, and prevent mind-wandering.',
            hinglish: 'Dimaag tez sochta hai jabki bolne ki speed dheemi hoti hai. Is beech ke time me notes lene se dhyan bhatakne se bachta hai.',
            hi: 'मस्तिष्क के तीव्र सोचने की गति और वक्ता के बोलने की गति के अंतर को सक्रिय नोट-टेकिंग से संतुलित किया जाता है।'
          },
          workedExample: {
            problem: {
              en: 'Convert the spoken sentence into a Cornell note cue: "In three-phase induction motors, the rotor speed must always be strictly less than the synchronous speed, because if both speeds were equal, no relative motion would cut the flux lines, resulting in zero induced EMF and zero torque."',
              hinglish: 'Is spoken lecture ko short Cornell cue me badle:',
              hi: 'इस व्याख्यान अंश को कॉर्नेल नोट्स में बदलें।'
            },
            steps: [
              { stepNumber: 1, title: 'Identify Key Concept', explanation: { en: 'Induction motor rotor speed (Nr) vs Synchronous speed (Ns).', hinglish: 'Rotor speed aur Synchronous speed ka relation.', hi: 'रोटर गति और तुल्यकालिक गति का संबंध।' } },
              { stepNumber: 2, title: 'Formula / Shorthand', explanation: { en: 'Nr < Ns always. If Nr = Ns -> relative motion = 0 -> EMF = 0 -> Torque = 0.', hinglish: 'Nr < Ns hamesha. Agar barabar hua toh Torque = 0.', hi: 'Nr < Ns सदैव। यदि बराबर तो टॉर्क शून्य।' } },
              { stepNumber: 3, title: 'Left Cue Word', explanation: { en: 'Cue: "Why Nr < Ns?"', hinglish: 'Cue: "Nr < Ns kyu?"', hi: 'संकेत: "Nr < Ns क्यों?"' } }
            ],
            finalAnswer: 'Cornell Format: Cue: "Why Nr < Ns?" | Note: "Nr must be < Ns; if equal -> no flux cut -> zero EMF -> zero torque."'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Trying to write down every single word the lecturer speaks like a courtroom stenographer.',
                hinglish: 'Sir ka bola har ek word likhne ki koshish karna.',
                hi: 'व्याख्याता का बोला हर एक शब्द लिखने का प्रयास करना।'
              },
              correction: {
                en: 'Record concepts, diagrams, formulas, and causal links using abbreviations; verbatim writing prevents mental comprehension.',
                hinglish: 'Sirf main concepts, formulas aur keywords likhein.',
                hi: 'केवल मुख्य अवधारणाएं, सूत्र और संबंध लिखें।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'eng-u3-p1',
              level: 'Beginner',
              question: {
                en: 'What is the fundamental difference between hearing and listening?',
                hinglish: 'Hearing aur Listening me mukhya antar kya hai?',
                hi: 'हियरिंग और लिसनिंग में मुख्य अंतर क्या है?'
              },
              options: [
                'Hearing is cognitive; listening is biological',
                'Hearing is involuntary and physiological; listening is voluntary and requires conscious cognitive processing',
                'Hearing requires notes; listening does not',
                'There is no difference'
              ],
              correctIndex: 1,
              explanation: {
                en: 'Hearing is physiological reception of sound waves; listening is intentional mental decoding and comprehension.',
                hinglish: 'Hearing physical process hai jabki Listening deliberate mental focus hai.',
                hi: 'हियरिंग शारीरिक क्रिया है और लिसनिंग मानसिक एकाग्रता है।'
              },
              hint: { en: 'One is natural; the other requires effort.', hinglish: 'Ek aadat hai ek prayas.', hi: 'एक शारीरिक है, दूसरा मानसिक।' }
            }
          ],
          summary: {
            en: [
              'Hearing is passive and physiological; listening is active, conscious, and interpretive.',
              'Types of listening include active, critical/evaluative, and empathetic listening.',
              'Barriers include physical environmental noise, cognitive overload, and psychological bias.',
              'The Cornell note-taking method synthesizes spoken content into Cues, Notes, and Summary.'
            ],
            hinglish: [
              'Hearing passive hai, Listening active hai.',
              'Cornell note-taking method se long-term memory improve hoti hai.',
              'Verbatim likhne ke bajaye keywords aur formulas note karein.'
            ],
            hi: [
              'सुनना शारीरिक है, ध्यानपूर्वक श्रवण संज्ञानात्मक है।',
              'कॉर्नेल नोट-टेकिंग विधि दीर्घकालिक स्मरण में सहायक है।'
            ]
          },
          quiz: [
            {
              id: 'eng-u3-q1',
              question: {
                en: 'In the Cornell Note-Taking System, the bottom 2 inches of the page are reserved for:',
                hinglish: 'Cornell Note-Taking system me page ke neeche ka hissa kiske liye hota hai?',
                hi: 'कॉर्नेल नोट-टेकिंग प्रणाली में पृष्ठ का निचला भाग किसके लिए आरक्षित होता है?'
              },
              options: ['Detailed transcriptions', 'Brief summary of the entire page in 2-3 sentences', 'Drawings only', 'Questions for the teacher'],
              correctIndex: 1,
              explanation: {
                en: 'The bottom summary section synthesizes the key takeaways of the lecture page for rapid exam review.',
                hinglish: 'Neeche ka hissa 2-3 line ke summary ke liye hota hai.',
                hi: 'निचला भाग संक्षिप्त सारांश के लिए होता है।'
              },
              hint: { en: 'For quick review.', hinglish: 'Summary ke liye.', hi: 'सारांश के लिए।' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'Listening is an active cognitive discipline. Engineering professionals must master critical listening to interpret technical instructions without error and utilize structured note-taking systems like the Cornell method.',
          hinglish: 'Listening active process hai jo engineering me instructions follow karne ke liye sabse zaroori hai.',
          hi: 'लिसनिंग एक सक्रिय मानसिक प्रक्रिया है जो निर्देशों के सटीक पालन के लिए आवश्यक है।'
        },
        shortNotes: [
          { topic: 'Hearing vs Listening', content: { en: 'Hearing = involuntary sound perception; Listening = deliberate decoding, evaluation, and response.', hinglish: 'Hearing involuntary hai, Listening deliberate focus hai.', hi: 'हियरिंग अनैच्छिक है, लिसनिंग सचेत प्रयास है।' } }
        ],
        keyFormulas: [],
        mindMap: [{ node: 'Listening Skills', children: ['Hearing vs Listening', '5-Stage Process', 'Barriers to Listening', 'Cornell Notes Method', 'Critical Evaluation'] }],
        differences: [
          {
            conceptA: 'Hearing',
            conceptB: 'Listening',
            comparisonPoints: [
              { feature: 'Nature', a: 'Physiological and involuntary', b: 'Cognitive, active, and intentional' },
              { feature: 'Effort', a: 'Zero mental effort required', b: 'Requires concentration and analysis' },
              { feature: 'Outcome', a: 'Sound perception only', b: 'Understanding, retention, and feedback' }
            ]
          }
        ],
        flashcards: [
          { front: 'What are the three sections of a Cornell note sheet?', back: 'Cue Column (left), Note-taking Area (right), and Summary Area (bottom).' },
          { front: 'What is critical listening?', back: 'Listening to evaluate, analyze, and logically judge the quality, truth, or feasibility of an argument.' }
        ],
        shortAnswerQuestions: [
          { question: 'List four major deterrents to effective listening in an engineering classroom.', answer: '1. Ambient physical noise (machinery, construction, fans).\n2. Information overload from rapid slide presentations.\n3. Prejudgment and lack of interest in the topic.\n4. Cognitive daydreaming due to the speed gap between speech and thought.' }
        ],
        longAnswerQuestions: [
          { question: 'Describe the five stages of the listening process and explain how the Cornell Note-Taking system enhances retention.', outline: '1. Stage 1: Receiving (hearing acoustic signal).\n2. Stage 2: Understanding (decoding meaning).\n3. Stage 3: Evaluating (assessing validity and importance).\n4. Stage 4: Remembering (storing into memory).\n5. Stage 5: Responding (providing verbal/nonverbal feedback).\n6. Cornell Note-Taking layout, application, and revision efficiency.' }
        ],
        numericalPractice: []
      }
    },
    {
      id: 'eng-u4',
      unitNumber: 'Unit IV',
      title: 'Writing Skills',
      description: 'Report writing, agenda and minutes of meetings, letter writing, business letters, cover letters, electronic mail, and resume writing.',
      topics: [
        'Technical Report Writing: Types of reports, formal structure (Title, Abstract, Table of Contents, Introduction, Methodology, Results, Discussion, Conclusions, Recommendations, References)',
        'Meeting Documentation: Drafting effective Agendas and recording official Minutes of Meetings (MoM)',
        'Formal Letter Writing: Block format, layout conventions, and formal salutations',
        'Business Letters: Letters of inquiry, quotation requests, complaint letters, and purchase orders',
        'Job Application Cover Letters: Tailoring skills to job descriptions and employer needs',
        'Professional Electronic Mail (E-mail): Subject line engineering, formal greetings, tone calibration, attachment etiquette, and netiquette',
        'Resume Writing: Chronological vs. Functional formats, ATS keyword optimization, crafting achievement-oriented bullet points'
      ],
      lessons: [
        {
          id: 'eng-u4-l1',
          unitId: 'eng-u4',
          subjectId: 'english',
          title: 'Professional Correspondence: Letters, Emails & Resumes',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic sentence construction'],
          realLifeQuestion: {
            en: 'Why do two engineering graduates with identical GPA scores receive vastly different interview callbacks simply because of their email etiquette and resume layout?',
            hinglish: 'Same marks hone ke baad bhi ek student ka resume shortlist ho jata hai aur doosre ka reject kyu ho jata hai?',
            hi: 'समान अंकों के बावजूद एक छात्र का रिज्यूमे शॉर्टलिस्ट हो जाता है और दूसरे का क्यों खारिज हो जाता है?'
          },
          simpleExplanation: {
            en: 'Professional writing is the ambassador of your competence. Recruiters spend an average of 6 seconds scanning a resume and use automated Applicant Tracking Systems (ATS) that parse keywords. A professional email with a clear subject line, polite salutation, concise purpose, and formal sign-off demonstrates engineering discipline and communication readiness.',
            hinglish: 'Recruiters sirf 6 seconds me resume scan karte hain aur ATS software keywords check karta hai. Clear subject line, professional salutation aur bullet points batate hain ki student corporate environment ke liye ready hai.',
            hi: 'व्यावसायिक लेखन आपकी योग्यता का परिचायक है। रिक्रूटर्स और एटीएस सॉफ्टवेयर कीवर्ड्स और स्पष्ट प्रारूप को देखकर ही रिज्यूमे का चयन करते हैं।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'A resume is like an engineering datasheet of a microcontroller. A client won’t read a 50-page novel; they want a crisp 1-page spec sheet highlighting clock frequency, memory, pinouts, and benchmark tests.',
              hinglish: 'Resume kisi microcontroller ke datasheet jaisa hai: recruiter ko 1 page me saare specs, skills aur benchmark projects saaf dikhne chahiye.',
              hi: 'रिज्यूमे किसी माइक्रोचिप की डेटाशीट की तरह है जिसमें स्पष्ट और संक्षिप्त रूप में सभी मुख्य विशेषताएं होनी चाहिए।'
            },
            limitations: {
              en: 'Datasheets list fixed silicon specs, whereas resumes describe growing human professionals capable of learning, teamwork, and innovation.',
              hinglish: 'Datasheet fixed hoti hai, jabki resume aapki seekhne aur collaborate karne ki capability batata hai.',
              hi: 'रिज्यूमे केवल तकनीकी आंकड़े नहीं बल्कि सीखने और सहयोग करने की क्षमता भी दर्शाता है।'
            }
          },
          terminology: [
            {
              term: 'Applicant Tracking System (ATS)',
              definition: {
                en: 'Recruitment software that scans, parses, and ranks resumes based on keyword matches with the job description.',
                hinglish: 'Software jo resume me keywords search karke shortlist karta hai.',
                hi: 'सॉफ्टवेयर जो रिज्यूमे में आवश्यक कीवर्ड्स की जांच करके चयन करता है।'
              }
            },
            {
              term: 'Minutes of Meeting (MoM)',
              definition: {
                en: 'The official written record of discussions, decisions, and action items agreed upon during a formal meeting.',
                hinglish: 'Meeting me liye gaye decisions aur action points ka official record.',
                hi: 'बैठक में लिए गए निर्णयों और कार्ययोजनाओं का आधिकारिक लिखित रिकॉर्ड।'
              }
            }
          ],
          visualType: 'english-trainer',
          underlyingPrinciple: {
            en: 'Professional documents prioritize clarity, brevity, and reader-centricity. Using active verbs (e.g., "Designed", "Optimized", "Calculated") establishes agency and measurable business impact.',
            hinglish: 'Action verbs (Designed, Optimized, Implemented) se resume me impact dikhta hai.',
            hi: 'सक्रिय क्रियाओं के प्रयोग से तकनीकी उपलब्धियां अधिक प्रभावशाली दिखाई देती हैं।'
          },
          workedExample: {
            problem: {
              en: 'Improve this weak resume bullet: "Worked on an IoT project with sensors and got good results."',
              hinglish: 'Is weak resume bullet ko professional engineering bullet me badlein.',
              hi: 'इस सामान्य वाक्य को प्रभावशाली तकनीकी बुलेट पॉइंट में बदलें।'
            },
            steps: [
              { stepNumber: 1, title: 'Add Strong Action Verb', explanation: { en: 'Replace "Worked on" with "Engineered" or "Architected".', hinglish: 'Engineered ya Designed use karein.', hi: 'Engineered या Designed जैसी सक्रिय क्रिया लगाएं।' } },
              { stepNumber: 2, title: 'Specify Technologies', explanation: { en: 'Identify specific hardware and protocols (ESP32, MQTT, C++).', hinglish: 'Exact hardware aur protocol ka naam likhein.', hi: 'विशिष्ट हार्डवेयर और प्रोटोकॉल बताएं।' } },
              { stepNumber: 3, title: 'Quantify Results', explanation: { en: 'Add measurable metric (e.g. reduced latency by 35%).', hinglish: 'Measurable metric jodein.', hi: 'मापने योग्य परिणाम जोड़ें।' } }
            ],
            finalAnswer: 'Improved: "Architected an ESP32-based industrial IoT telemetry node using MQTT protocol, reducing packet latency by 35% across 50 simulated sensor streams."'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Using fancy multi-column graphics, tables, or photo headers in technical resumes.',
                hinglish: 'Resume me tables, graphics aur fancy icons lagana.',
                hi: 'रिज्यूमे में जटिल ग्राफिक्स और टेबल का प्रयोग करना।'
              },
              correction: {
                en: 'ATS software often fails to parse tables and graphics, discarding the candidate. Use clean, single-column text with standard headers.',
                hinglish: 'ATS software tables ko read nahi kar pata. Clean single-column format use karein.',
                hi: 'एटीएस टेबल को नहीं पढ़ पाता, अतः साफ सिंगल-कॉलम टेक्स्ट फॉर्मेट प्रयोग करें।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'eng-u4-p1',
              level: 'Beginner',
              question: {
                en: 'Which of the following is the most professional email subject line?',
                hinglish: 'Inme se sabse professional email subject line kaun si hai?',
                hi: 'सबसे पेशेवर ईमेल विषय पंक्ति कौन सी है?'
              },
              options: [
                'Help needed urgent!!',
                'Internship Application — Rahul Sharma — B.Tech Computer Science',
                'Hey Professor check this out',
                'My Resume'
              ],
              correctIndex: 1,
              explanation: {
                en: 'An effective subject line is specific, professional, and includes the candidate’s name and purpose.',
                hinglish: 'Subject line me purpose, candidate name aur branch saaf honi chahiye.',
                hi: 'विषय पंक्ति में स्पष्ट उद्देश्य और प्रेषक का नाम होना चाहिए।'
              },
              hint: { en: 'Specific and identifiable.', hinglish: 'Saaf aur formal.', hi: 'स्पष्ट और औपचारिक।' }
            }
          ],
          summary: {
            en: [
              'Technical reports follow formal structures: Title, Abstract, Body, Results, and Recommendations.',
              'Minutes of Meetings (MoM) record decisions, responsible persons, and target deadlines.',
              'Professional emails require descriptive subject lines, formal greetings, concise paragraphs, and polite sign-offs.',
              'Resumes must be single-page, ATS-optimized, and driven by strong action verbs and metrics.'
            ],
            hinglish: [
              'Reports me Abstract, Results aur Conclusion zaroori hain.',
              'Email me clear subject line aur professional tone honi chahiye.',
              'Resume me action verbs aur measurable numbers daalein.'
            ],
            hi: [
              'रिपोर्ट लेखन में सार संक्षेप और परिणाम मुख्य होते हैं।',
              'ईमेल में स्पष्ट विषय और औपचारिक भाषा आवश्यक है।',
              'रिज्यूमे एटीएस-अनुकूल और सक्रिय क्रियाओं से युक्त होना चाहिए।'
            ]
          },
          quiz: [
            {
              id: 'eng-u4-q1',
              question: {
                en: 'In technical report writing, the "Abstract" should be written:',
                hinglish: 'Technical report me "Abstract" kab likhna chahiye?',
                hi: 'तकनीकी रिपोर्ट में "एब्सट्रैक्ट" (सार) कब लिखा जाना चाहिए?'
              },
              options: [
                'Before starting the project',
                'After completing the entire report, so that it accurately summarizes findings and conclusions',
                'Only if the report exceeds 100 pages',
                'By the client rather than the author'
              ],
              correctIndex: 1,
              explanation: {
                en: 'Although the abstract appears at the beginning of the report, it must be written last because it summarizes the completed research, results, and recommendations.',
                hinglish: 'Abstract sabse aakhri me likha jata hai kyunki yeh poori report ka nichod hota hai.',
                hi: 'एब्सट्रैक्ट अंत में लिखा जाता है ताकि वह पूरी रिपोर्ट के निष्कर्षों को संक्षेप में प्रस्तुत कर सके।'
              },
              hint: { en: 'You cannot summarize what has not yet been written.', hinglish: 'Report poori hone ke baad hi summary banti hai.', hi: 'पूरी रिपोर्ट तैयार होने के बाद।' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'Engineering writing encompasses formal technical reports, meeting minutes, business correspondence, and resumes. Success depends on audience awareness, logical organization, active verbs, and concise formatting.',
          hinglish: 'Technical writing me reports, emails, letters aur resumes shamil hain.',
          hi: 'तकनीकी लेखन में रिपोर्ट, ईमेल, पत्र और रिज्यूमे शामिल हैं।'
        },
        shortNotes: [
          { topic: 'Structure of a Formal Report', content: { en: 'Title page, Executive Summary/Abstract, Introduction, Technical Body/Methodology, Results & Discussion, Conclusions, Recommendations, References.', hinglish: 'Report structure: Title, Abstract, Body, Results, Conclusion, References.', hi: 'शीर्षक, सार, परिचय, कार्यप्रणाली, परिणाम, निष्कर्ष और संदर्भ।' } }
        ],
        keyFormulas: [],
        mindMap: [{ node: 'Writing Skills', children: ['Technical Reports', 'Agendas & Minutes (MoM)', 'Formal Business Letters', 'Professional Emails', 'ATS Resumes & Cover Letters'] }],
        differences: [
          {
            conceptA: 'Meeting Agenda',
            conceptB: 'Meeting Minutes (MoM)',
            comparisonPoints: [
              { feature: 'Timeline', a: 'Prepared and circulated BEFORE the meeting', b: 'Drafted and distributed AFTER the meeting' },
              { feature: 'Purpose', a: 'Outlines topics to be discussed and time limits', b: 'Records decisions made, actions assigned, and deadlines' }
            ]
          }
        ],
        flashcards: [
          { front: 'What is the full form of MoM in corporate communication?', back: 'Minutes of Meeting — the official record of discussions and decisions.' },
          { front: 'What should be the length of an entry-level engineering graduate resume?', back: 'Strictly one single page.' }
        ],
        shortAnswerQuestions: [
          { question: 'What is the difference between a chronological resume and a functional resume?', answer: 'A chronological resume lists work experience and education in reverse chronological order (most common and ATS-friendly). A functional resume organizes content by skill categories regardless of employment dates.' }
        ],
        longAnswerQuestions: [
          { question: 'Draft a formal cover letter applying for a Graduate Engineer Trainee (GET) position in response to a campus placement advertisement.', outline: '1. Applicant contact info and date.\n2. Employer designation and company address.\n3. Salutation: "Dear Hiring Manager,".\n4. Opening paragraph: Target role and academic background.\n5. Body paragraph: Core technical competencies, projects, and domain skills.\n6. Closing paragraph: Value proposition and interview request.\n7. Formal closing: "Sincerely, [Name]".' }
        ],
        numericalPractice: []
      }
    },
    {
      id: 'eng-u5',
      unitNumber: 'Unit V',
      title: 'Speaking Skills',
      description: 'Preparing for interviews, types of interviews, group discussion (GD), effective ways of performing well in interviews, and public speaking.',
      topics: [
        'Preparing for Interviews: Company research, self-introduction structuring, dress code, and nonverbal poise',
        'Types of Interviews: HR screening, technical panel interviews, behavioral interviews, stress interviews, and remote video interviews',
        'Group Discussion (GD): Objectives, dynamics, roles (Initiator, Moderator, Contributor, Summarizer), and evaluation parameters',
        'Effective Interview Performance: The STAR technique (Situation, Task, Action, Result), handling behavioral questions, asking questions to the panel',
        'Public Speaking & Technical Presentations: Speech structuring (Hook, Body, Conclusion), vocal modulation, managing speech anxiety, audience engagement'
      ],
      lessons: [
        {
          id: 'eng-u5-l1',
          unitId: 'eng-u5',
          subjectId: 'english',
          title: 'Job Interviews, GD & Public Speaking Mastery',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic verbal speaking'],
          realLifeQuestion: {
            en: 'Why do technically brilliant students sometimes fail campus interviews or freeze up when asked a simple question like "Tell me about yourself"?',
            hinglish: 'Bohot saare topper students bhi interview me "Tell me about yourself" sunkar ghabra kyu jaate hain?',
            hi: 'तकनीकी रूप से मेधावी छात्र भी "अपने बारे में बताएं" जैसे सीधे प्रश्न पर असहज क्यों हो जाते हैं?'
          },
          simpleExplanation: {
            en: '"Tell me about yourself" is not an invitation to recount your life history; it is a 90-second elevator pitch connecting your education, key technical projects, core strengths, and passion for the target role. In behavioral interviews, structure answers using the STAR method (Situation, Task, Action, Result). In Group Discussions, focus on collaboration, active listening, and logical synthesis rather than shouting over others.',
            hinglish: '"Tell me about yourself" me bachpan se kahani nahi sunani hoti! Yeh 90-second ki elevator pitch hai: Current degree, 1-2 major technical projects, core skills, aur aap is company me kyu aana chahte hain. Behavioral sawalon me STAR method (Situation, Task, Action, Result) follow karein.',
            hi: 'साक्षात्कार में अपने बारे में बताना 90 सेकंड की संक्षिप्त तकनीकी प्रस्तुति है जिसमें आपकी शिक्षा, मुख्य प्रोजेक्ट और कौशल का उल्लेख होना चाहिए। व्यवहारिक प्रश्नों में STAR पद्धति का प्रयोग करें।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'A Group Discussion is not a fish market shouting match or a debate. It is like an engineering design sprint meeting: five engineers sitting around a whiteboard to collectively solve a technical challenge with respectful collaboration.',
              hinglish: 'Group Discussion koi debate ya ladai nahi hai. Yeh ek meeting jaisi hai jahan 5 engineers milkar kisi problem ka solution dhoondhte hain.',
              hi: 'ग्रुप डिस्कशन कोई वाद-विवाद या चिल्लाने की जगह नहीं है, बल्कि एक सहयोगी तकनीकी बैठक की तरह है जहां सब मिलकर समाधान खोजते हैं।'
            },
            limitations: {
              en: 'In real design sprints everyone knows each other, whereas GD candidates are strangers competing for the same few job slots.',
              hinglish: 'GD me candidates ek doosre ko nahi jaante par unhe team player ki tarah act karna hota hai.',
              hi: 'जीडी में सभी उम्मीदवार एक दूसरे से अपरिचित होते हुए भी टीम भावना का प्रदर्शन करते हैं।'
            }
          },
          terminology: [
            {
              term: 'STAR Technique',
              definition: {
                en: 'A structured method of responding to behavioral interview questions by outlining the Situation, Task, Action, and Result.',
                hinglish: 'Interview sawalon ka jawab dene ka formula: Situation, Task, Action, Result.',
                hi: 'साक्षात्कार प्रश्नों के उत्तर देने की STAR पद्धति (स्थिति, कार्य, कार्रवाई, परिणाम)।'
              }
            },
            {
              term: 'Vocal Modulation',
              definition: {
                en: 'Varying pitch, tone, pace, and volume while speaking to maintain listener engagement and emphasize key points.',
                hinglish: 'Aawaz me utaar-chadhaav taaki baat sunne me dilchasp lage.',
                hi: 'आवाज में उचित उतार-चढ़ाव और गति का नियंत्रण।'
              }
            }
          ],
          visualType: 'english-trainer',
          underlyingPrinciple: {
            en: 'Employers hire for technical skill but fire for poor attitude and lack of communication. Professional poise, active listening, and structured spoken articulation demonstrate high Emotional Intelligence (EQ).',
            hinglish: 'Technical skills ke sath attitude aur communication team me kaam karne ke liye zaroori hai.',
            hi: 'तकनीकी कौशल के साथ संवाद क्षमता और टीम भावना रोजगार के लिए अत्यंत आवश्यक है।'
          },
          workedExample: {
            problem: {
              en: 'Structure a response using the STAR method for: "Tell me about a time you faced a tight project deadline."',
              hinglish: 'STAR method se is question ka model answer banayein: "Tight deadline ka samna kaise kiya?"',
              hi: 'STAR पद्धति द्वारा समय सीमा के दबाव से निपटने का उत्तर तैयार करें।'
            },
            steps: [
              { stepNumber: 1, title: 'Situation', explanation: { en: 'Our 4-person robotics team had 48 hours left before the university project expo.', hinglish: 'Expo se 48 ghante pehle humari robotics team ka hardware fail hua.', hi: 'प्रोजेक्ट प्रदर्शनी से 48 घंटे पूर्व की स्थिति।' } },
              { stepNumber: 2, title: 'Task', explanation: { en: 'I had to rewrite the motor control algorithm while ensuring sensors calibrated without glitching.', hinglish: 'Mujhe motor control algorithm rewrite karna tha.', hi: 'मोटर नियंत्रण एल्गोरिदम को पुनः लिखना।' } },
              { stepNumber: 3, title: 'Action', explanation: { en: 'I divided the remaining tasks, isolated the motor PWM timers in C, and tested unit test cases iteratively.', hinglish: 'Maine kaam baanta aur C me timer code fix kiya.', hi: 'कार्य विभाजन और सी में कोड का परीक्षण।' } },
              { stepNumber: 4, title: 'Result', explanation: { en: 'We successfully demonstrated the obstacle avoidance robot and secured 2nd place out of 40 teams.', hinglish: 'Robot time par chal gaya aur humne 2nd prize jeeta.', hi: 'रोबोट समय पर तैयार हुआ और दूसरा स्थान प्राप्त किया।' } }
            ],
            finalAnswer: 'STAR Structure successfully deployed: Situation (48h deadline) -> Task (rewrite code) -> Action (isolate timers) -> Result (2nd place out of 40 teams).'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Believing that in a Group Discussion, whoever speaks the loudest and interrupts the most will score the highest.',
                hinglish: 'Yeh sochna ki jo GD me sabse tez chillayega wahi select hoga.',
                hi: 'यह मानना कि ग्रुप डिस्कशन में सबसे तेज चिल्लाने वाला ही चयनित होता है।'
              },
              correction: {
                en: 'Recruiters penalize aggressive interrupters. Evaluators reward candidates who bring structure, invite quieter peers, and synthesize consensus.',
                hinglish: 'Chillane wale reject ho jaate hain; jo point add karta hai aur sabko sath leke chalta hai wo select hota hai.',
                hi: 'आक्रामक व्यवहार पर अंक काटे जाते हैं; सहयोग और तार्किक विचार को प्राथमिकता मिलती है।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'eng-u5-p1',
              level: 'Beginner',
              question: {
                en: 'What does the "A" stand for in the STAR interview technique?',
                hinglish: 'STAR interview technique me "A" ka kya matlab hai?',
                hi: 'STAR पद्धति में "A" का क्या अर्थ है?'
              },
              options: ['Application', 'Action', 'Attitude', 'Achievement'],
              correctIndex: 1,
              explanation: {
                en: 'In STAR, "A" stands for Action — the specific steps and technical solutions you implemented.',
                hinglish: 'A = Action (Aapne kya kadam uthaye).',
                hi: 'A = Action (आपने क्या कार्रवाई की)।'
              },
              hint: { en: 'What you did.', hinglish: 'Aapka kaam.', hi: 'आपकी कार्रवाई।' }
            }
          ],
          summary: {
            en: [
              'Interview self-introductions should be structured 90-second professional elevator pitches.',
              'Use the STAR method (Situation, Task, Action, Result) for behavioral questions.',
              'In Group Discussions, contribute logical points, listen actively, and avoid aggressive interruptions.',
              'Public speaking requires strong opening hooks, vocal modulation, and audience eye contact.'
            ],
            hinglish: [
              '"Tell me about yourself" me 90 second ka focused pitch dein.',
              'STAR method se project aur behavioral answers dein.',
              'GD me doosro ki baat sunein aur constructive points add karein.'
            ],
            hi: [
              'साक्षात्कार में 90 सेकंड का संक्षिप्त परिचय दें।',
              'व्यवहारिक प्रश्नों में STAR पद्धति का प्रयोग करें।',
              'जीडी में दूसरों की सुनें और तार्किक विचार रखें।'
            ]
          },
          quiz: [
            {
              id: 'eng-u5-q1',
              question: {
                en: 'When disagreeing with another participant in a Group Discussion, the most professional phrase is:',
                hinglish: 'GD me kisi se asahmati jatane ke liye sabse behtar phrase kaun si hai?',
                hi: 'जीडी में किसी से असहमति जताने के लिए सबसे विनम्र वाक्य कौन सा है?'
              },
              options: [
                '"You are completely wrong about this technology."',
                '"I take your point regarding initial cost, however, we must also consider long-term operational efficiency."',
                '"Stop speaking, let me speak now."',
                '"That idea makes no sense in engineering."'
              ],
              correctIndex: 1,
              explanation: {
                en: 'Respectful disagreement acknowledges the other speaker’s perspective before introducing a logical counter-argument.',
                hinglish: 'Doosre ke point ki respect karte hue apna alag logic dena sabse professional hai.',
                hi: 'दूसरों के दृष्टिकोण का सम्मान करते हुए तार्किक असहमति प्रकट करना ही पेशेवर तरीका है।'
              },
              hint: { en: 'Courteous and constructive.', hinglish: 'Vinamra aur logical.', hi: 'विनम्र और तार्किक।' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'Speaking skills encompass campus job interviews, group discussions, and technical public presentations. Excellence relies on structured answer delivery (STAR technique), vocal modulation, nonverbal composure, and respectful peer collaboration.',
          hinglish: 'Speaking skills me interviews, GD aur public speaking shamil hain.',
          hi: 'मौखिक संवाद में साक्षात्कार, समूह चर्चा और सार्वजनिक भाषण शामिल हैं।'
        },
        shortNotes: [
          { topic: 'STAR Technique Breakdown', content: { en: 'S = Situation (Context), T = Task (Objective), A = Action (Steps taken), R = Result (Quantified outcome).', hinglish: 'STAR: Situation, Task, Action, Result.', hi: 'स्थिति, कार्य, कार्रवाई, परिणाम।' } }
        ],
        keyFormulas: [],
        mindMap: [{ node: 'Speaking Skills', children: ['Interview Preparation', 'STAR Method', 'Group Discussion Dynamics', 'Vocal Modulation', 'Stage Fear Management'] }],
        differences: [
          {
            conceptA: 'Group Discussion',
            conceptB: 'Debate',
            comparisonPoints: [
              { feature: 'Objective', a: 'Collaborative consensus and cooperative problem-solving', b: 'Competitive winning against an opposing speaker' },
              { feature: 'Stance', a: 'Flexible, open to other viewpoints and synthesis', b: 'Rigidly fixed in favor of or against the motion' },
              { feature: 'Tone', a: 'Conversational, cooperative, and polite', b: 'Persuasive, argumentative, and assertive' }
            ]
          }
        ],
        flashcards: [
          { front: 'What is the ideal speaking pace in an interview or technical presentation?', back: '120 to 150 words per minute with purposeful pauses.' },
          { front: 'What are the key roles in a Group Discussion?', back: 'Initiator (opens discussion), Moderator/Facilitator (keeps topic on track), and Summarizer (synthesizes consensus).' }
        ],
        shortAnswerQuestions: [
          { question: 'What is the role of body language and eye contact in a job interview?', answer: 'Body language conveys confidence and honesty. Upright posture, open hand gestures, firm handshakes, and steady eye contact indicate attentiveness, credibility, and emotional composure.' }
        ],
        longAnswerQuestions: [
          { question: 'Explain the evaluation parameters used by corporate recruiters to assess candidates in a Group Discussion.', outline: '1. Subject Knowledge and analytical reasoning.\n2. Communication ability (clarity, voice modulation, diction).\n3. Team skills (listening, encouraging quieter members, handling interruptions).\n4. Leadership qualities (initiating, guiding discussion, summarizing).\n5. Emotional balance and respectful conduct under disagreement.' }
        ],
        numericalPractice: []
      }
    }
  ],
  examQuestions: [
    {
      id: 'eng-eq1',
      unitNumber: 'Unit I',
      type: 'Long',
      marks: 10,
      question: 'Explain the Shannon-Weaver communication process model with a neat labeled block diagram. Discuss the seven primary elements and explain how feedback mitigates semantic noise.',
      solution: '1. Communication Model Diagram: Sender -> Encoding -> Message -> Channel (Noise) -> Receiver -> Decoding -> Feedback loop returning to Sender.\n2. Definition of Sender as originator and Encoding as symbolization into language/diagrams.\n3. Message as physical manifestation (audio/written).\n4. Channel as propagation medium.\n5. Receiver as target decoder.\n6. Decoding as cognitive interpretation.\n7. Feedback as the return response verifying mutual understanding.\n8. Semantic Noise mitigation: When feedback is returned, the sender immediately detects if acronyms or technical terms were misinterpreted, enabling instant rephrasing.'
    },
    {
      id: 'eng-eq2',
      unitNumber: 'Unit II',
      type: 'Short',
      marks: 5,
      question: 'Correct the grammatical errors and explain the applicable concord rules: "Neither the circuit diagrams nor the oscilloscope were present in the lab yesterday."',
      solution: 'Rule: When subjects are connected by "Neither... nor", the verb agrees with the subject closest to it (proximity rule).\nHere, the nearer subject is "the oscilloscope" (singular).\nCorrected: "Neither the circuit diagrams nor the oscilloscope was present in the lab yesterday."'
    },
    {
      id: 'eng-eq3',
      unitNumber: 'Unit IV',
      type: 'Long',
      marks: 10,
      question: 'Draft a formal letter of complaint to a scientific equipment supplier regarding a shipment of defective digital multimeters received with broken LCD screens.',
      solution: 'Format:\n1. Sender Address & Date.\n2. Supplier Address (Sales Manager, Apex Instruments Ltd).\n3. Subject: Formal Complaint: Defective Digital Multimeters (Invoice #APX-4192).\n4. Reference: Purchase Order PO/ENG/2026/88 dated 10th October 2026.\n5. Body Paragraph 1: Details of delivery received and unpacking inspection.\n6. Body Paragraph 2: Specific defects (5 out of 20 units have shattered LCD displays and calibration drift).\n7. Body Paragraph 3: Request for immediate free replacement under 1-year manufacturer warranty within 7 working days.\n8. Professional sign-off: Sincerely, Lab In-charge, Department of Electrical Engineering.'
    }
  ]
};

export const ENGLISH_LAB: Subject = {
  id: 'english-lab',
  title: 'English Lab',
  category: 'Laboratory',
  description: 'Official 9 practical communication activities: Situational Conversations, Listening Skills, Resume Writing, Mock Interviews, Group Discussion, Presentation Skills, Negotiation Skills, Email Writing, and Public Speaking.',
  icon: 'Headphones',
  color: 'from-fuchsia-600 to-pink-700',
  isOfficial: true,
  syllabusSource: 'Official University Lab Syllabus (B.Tech 1st Year)',
  unitsCount: 9,
  units: [],
  experiments: [
    {
      id: 'eng-lab-1',
      expNumber: 1,
      title: 'Situational Conversations',
      aim: 'To practice realistic verbal and nonverbal conversational dialogues across academic, professional, and everyday campus scenarios.',
      learningObjectives: [
        'Demonstrate polite conversational openings, inquiries, and closings',
        'Handle misunderstandings gracefully in classroom and office situations',
        'Adopt appropriate register and tone when speaking to professors, peers, and industry mentors'
      ],
      apparatus: ['Language laboratory audio workstation, interactive dialogue headset simulator'],
      theory: {
        en: 'Situational conversations require adapting communicative register (formal, semi-formal, informal) based on the social hierarchy, context, and objective of the dialogue.',
        hinglish: 'Alag-alag scenarios (Teacher se baat, classmate se baat, job interview) me sahi tone aur formal/informal language choose karna.',
        hi: 'विभिन्न परिस्थितियों में सामाजिक संदर्भ और औपचारिकता के स्तर के अनुसार संवाद स्थापित करना।'
      },
      equations: [{ formula: '\\text{Conversational Competence} = \\text{Linguistic Accuracy} + \\text{Sociolinguistic Appropriateness} + \\text{Active Politeness}', symbolDefs: 'Pragmatic communication formula' }],
      diagramDescription: 'Conversational Turn-taking Model: Initiating -> Listening -> Paraphrasing -> Responding -> Closing.',
      safetyPrecautions: ['Maintain safe listening levels (<70 dB) on multimedia headsets.'],
      procedure: [
        '1. Select a scenario: Talking to a Professor, Peer Collaboration, or Office Inquiry.',
        '2. Listen to the opening dialogue prompt via audio playback.',
        '3. Evaluate alternative response options and select the most professional choice.',
        '4. Record verbal response and review clarity and tone.'
      ],
      simulationType: 'english-lab-rig',
      defaultParams: { activity: 1 },
      observationColumns: [
        { key: 'scenario', label: 'Scenario Context', unit: '' },
        { key: 'choice', label: 'Selected Response Type', unit: '' },
        { key: 'feedback', label: 'Evaluation Feedback', unit: '' }
      ],
      sampleObservations: [
        { scenario: 'Addressing a Teacher', choice: 'Formal & Polite', feedback: 'Appropriate title and polite apology for delayed submission.' },
        { scenario: 'Classroom Disagreement', choice: 'Constructive Disagreement', feedback: 'Acknowledged peer viewpoint before introducing counter-example.' }
      ],
      calculationGuide: 'Score conversational appropriateness: 5 marks for polite register, 5 marks for logical relevance.',
      resultInterpretation: 'Effective situational communication demonstrated without aggressive tone or excessive informality.',
      sourcesOfError: ['Mother Tongue Influence (MTI) and using overly casual slang in formal academic environments.'],
      vivaQuestions: [
        { question: 'What is "register" in spoken English?', answer: 'The variety of language (formal, consultative, casual, intimate) chosen based on the social context and relationship between speakers.' }
      ],
      revisionQuiz: [
        {
          id: 'eng-lab-q1',
          question: {
            en: 'When greeting a professor in an academic setting in the afternoon, the most appropriate greeting is:',
            hinglish: 'Dopahar me teacher se milte waqt sabse sahi greeting kya hai?',
            hi: 'दोपहर में प्रोफेसर से मिलने पर सबसे उपयुक्त अभिवादन क्या है?'
          },
          options: ['"Hey Professor!"', '"Good afternoon, Professor [Last Name]."', '"What’s up sir?"', '"Hi there!"'],
          correctIndex: 1,
          explanation: { en: 'Formal academic protocol requires "Good afternoon, Professor [Last Name]".', hinglish: 'Formal setting me "Good afternoon Professor" hi bolna chahiye.', hi: 'औपचारिक वातावरण में "Good afternoon, Professor" सही है।' },
          hint: { en: 'Polite and respectful.', hinglish: 'Formal and respectful.', hi: 'औपचारिक और आदरपूर्ण।' }
        }
      ]
    },
    {
      id: 'eng-lab-2',
      expNumber: 2,
      title: 'Listening Skills',
      aim: 'To develop active listening comprehension, extract key technical arguments from spoken audio, and practice the Cornell Note-Taking method.',
      learningObjectives: [
        'Differentiate between auditory hearing and cognitive active listening',
        'Extract specific technical data, constants, and principles from recorded lectures',
        'Organize lecture notes into Cues, Notes, and Summaries'
      ],
      apparatus: ['Headphones, audio passage player, Cornell note-taking sheet'],
      theory: {
        en: 'Active listening is a structured discipline requiring selective attention, mental synthesis, and systematic note-taking to prevent rapid memory decay.',
        hinglish: 'Active listening me audio dhyan se sunkar keywords aur main formulas note kiye jaate hain.',
        hi: 'सक्रिय श्रवण द्वारा व्याख्यान से मुख्य बिंदुओं को समझकर व्यवस्थित रूप से दर्ज किया जाता है।'
      },
      equations: [{ formula: '\\text{Retention Rate} = \\text{Active Note-Taking} \\times \\text{Immediate Review within 24 Hours}', symbolDefs: 'Ebbinghaus memory curve mitigation' }],
      diagramDescription: 'Cornell note sheet layout: 2.5" Cue column on left, 6" notes area on right, 2" summary bar at base.',
      safetyPrecautions: ['Keep audio volume moderate to avoid hearing strain.'],
      procedure: [
        '1. Play the 90-second technical lecture audio passage.',
        '2. Take real-time notes in the right-hand column using abbreviations.',
        '3. Formulate review cue questions in the left-hand column.',
        '4. Write a 2-sentence summary at the bottom.'
      ],
      simulationType: 'english-lab-rig',
      defaultParams: { activity: 2 },
      observationColumns: [
        { key: 'topic', label: 'Audio Topic', unit: '' },
        { key: 'keywords', label: 'Extracted Keywords', unit: '' },
        { key: 'summary', label: 'Cornell Summary', unit: '' }
      ],
      sampleObservations: [
        { topic: 'Kirchhoff’s Laws', keywords: 'KCL, node, charge, KVL, closed mesh, energy', summary: 'KCL conserves charge at nodes; KVL conserves energy across closed loops.' }
      ],
      calculationGuide: 'Evaluate comprehension accuracy: 1 mark per correctly identified key principle.',
      resultInterpretation: 'Active listening enabled full retention of technical details without information overload.',
      sourcesOfError: ['Distraction by ambient background noise or attempting verbatim transcription.'],
      vivaQuestions: [
        { question: 'Why is verbatim note-taking discouraged in lectures?', answer: 'Verbatim writing forces the brain to focus mechanically on writing speed rather than cognitively understanding concepts.' }
      ],
      revisionQuiz: [
        {
          id: 'eng-lab-q2',
          question: {
            en: 'In the Cornell Note-Taking System, the left-hand column is reserved for:',
            hinglish: 'Cornell notes me left column kiske liye hota hai?',
            hi: 'कॉर्नेल नोट्स में बायां कॉलम किसके लिए होता है?'
          },
          options: ['Verbatim transcriptions', 'Keywords and cue questions', 'Unrelated drawings', 'Teacher signatures'],
          correctIndex: 1,
          explanation: { en: 'The left column contains keywords and review questions that stimulate active recall.', hinglish: 'Left column me keywords aur cue questions aate hain.', hi: 'बाएं कॉलम में मुख्य शब्द और संकेत प्रश्न आते हैं।' },
          hint: { en: 'Keywords for revision.', hinglish: 'Keywords ke liye.', hi: 'मुख्य शब्दों के लिए।' }
        }
      ]
    },
    {
      id: 'eng-lab-3',
      expNumber: 3,
      title: 'Resume Writing',
      aim: 'To engineer an ATS-friendly, single-page professional resume emphasizing technical skills, engineering projects, and academic achievements.',
      learningObjectives: [
        'Format a clean, single-column resume free of parsing errors',
        'Write achievement-oriented bullet points using the Action Verb + Context + Result formula',
        'Select relevant keywords aligned with target software and core engineering job descriptions'
      ],
      apparatus: ['Computer workstation, resume layout editor'],
      theory: {
        en: 'A resume is a concise marketing document. Modern corporate recruiters use Applicant Tracking Systems (ATS) that parse text into databases. Multi-column tables, photos, and graphics should be avoided in favor of clean semantic text.',
        hinglish: 'Resume corporate world me entry ticket hai. Single-column format aur strong action verbs ATS me pass hone ke liye zaroori hain.',
        hi: 'रिज्यूमे एक संक्षिप्त विवरण है जो आवेदक के कौशल और परियोजनाओं को एटीएस-अनुकूल प्रारूप में प्रस्तुत करता है।'
      },
      equations: [{ formula: '\\text{Effective Resume Bullet} = \\text{Strong Action Verb} + \\text{Technical Context} + \\text{Measurable Quantified Metric}', symbolDefs: 'XYZ formula' }],
      diagramDescription: 'Standard ATS resume hierarchy: Header -> Education -> Technical Skills -> Projects -> Experience -> Certifications.',
      safetyPrecautions: ['Never include sensitive personal data like Aadhaar numbers, religious beliefs, or passwords.'],
      procedure: [
        '1. Enter contact details: Name, Professional Email, LinkedIn URL, GitHub profile.',
        '2. Add Education details in reverse chronological order.',
        '3. List categorised Technical Skills (Languages, Tools, Platforms).',
        '4. Detail 2 major projects using action verbs (e.g. "Engineered", "Implemented", "Simulated").'
      ],
      simulationType: 'english-lab-rig',
      defaultParams: { activity: 3 },
      observationColumns: [
        { key: 'section', label: 'Resume Section', unit: '' },
        { key: 'status', label: 'Completeness', unit: '' },
        { key: 'atsScore', label: 'ATS Compatibility', unit: '%' }
      ],
      sampleObservations: [
        { section: 'Technical Skills', status: 'Completed', atsScore: '95%' },
        { section: 'Projects', status: 'Quantified with Metrics', atsScore: '90%' }
      ],
      calculationGuide: 'Assess ATS score based on clean typography (no tables), standard headings, and quantified metrics.',
      resultInterpretation: 'Clean single-page resume generated with strong action verbs and high ATS readability.',
      sourcesOfError: ['Spelling errors, passive voice ("was responsible for"), or two-column graphic templates.'],
      vivaQuestions: [
        { question: 'What is an Applicant Tracking System (ATS)?', answer: 'A software application that scans, parses, and ranks resumes based on relevance to the employer’s job description keywords.' }
      ],
      revisionQuiz: [
        {
          id: 'eng-lab-q3',
          question: {
            en: 'Which of the following makes a resume difficult for an ATS system to parse?',
            hinglish: 'Inme se kis cheez se ATS resume ko read nahi kar pata?',
            hi: 'इनमें से किसके कारण एटीएस रिज्यूमे को ठीक से नहीं पढ़ पाता?'
          },
          options: ['Clear font like Arial or Calibri', 'Complex multi-column tables and embedded graphics', 'Bullet points starting with action verbs', 'One-page layout'],
          correctIndex: 1,
          explanation: { en: 'Tables and graphics break ATS text flow, causing candidate rejection.', hinglish: 'Tables aur graphics se ATS crash ya confuse ho jata hai.', hi: 'टेबल और ग्राफिक्स से एटीएस में पार्सिंग त्रुटि होती है।' },
          hint: { en: 'Graphic elements.', hinglish: 'Tables and graphics.', hi: 'टेबल्स और ग्राफिक्स।' }
        }
      ]
    },
    {
      id: 'eng-lab-4',
      expNumber: 4,
      title: 'Mock Interviews',
      aim: 'To simulate campus placement technical and HR interviews, practice the STAR answer framework, and master nonverbal executive presence.',
      learningObjectives: [
        'Deliver a confident 90-second self-introduction',
        'Structure behavioral answers using the STAR (Situation, Task, Action, Result) methodology',
        'Demonstrate positive body language, steady eye contact, and active listening'
      ],
      apparatus: ['Interview simulator workstation, video/audio recorder, timer'],
      theory: {
        en: 'Interviews evaluate both technical aptitude and behavioral competence. Using the STAR framework ensures answers remain structured, concise, and focused on tangible personal contributions.',
        hinglish: 'Interview me STAR method (Situation, Task, Action, Result) se jawab dene se answer clear aur focused rehta hai.',
        hi: 'साक्षात्कार में STAR पद्धति द्वारा उत्तर देने से तकनीकी और व्यावहारिक क्षमता स्पष्ट रूप से प्रदर्शित होती है।'
      },
      equations: [{ formula: '\\text{STAR Framework} = \\text{Situation (Context)} + \\text{Task (Challenge)} + \\text{Action (Your Steps)} + \\text{Result (Metric Outcome)}', symbolDefs: 'Behavioral interview formula' }],
      diagramDescription: 'Interview Flow: Warmup / Elevator Pitch -> Core Technical Questions -> Behavioral Scenarios -> Candidate Question to Panel.',
      safetyPrecautions: ['Maintain a professional, quiet testing environment free of interruptions.'],
      procedure: [
        '1. Step into virtual interview room and present 90-second elevator pitch.',
        '2. Receive a behavioral question (e.g. handling a team conflict or deadline crisis).',
        '3. Structure the response strictly using Situation -> Task -> Action -> Result.',
        '4. Conclude by asking a relevant question about the company’s engineering culture.'
      ],
      simulationType: 'english-lab-rig',
      defaultParams: { activity: 4 },
      observationColumns: [
        { key: 'question', label: 'Interview Question', unit: '' },
        { key: 'method', label: 'Framework Applied', unit: '' },
        { key: 'rating', label: 'Evaluation Rating', unit: '/10' }
      ],
      sampleObservations: [
        { question: 'Tell me about yourself', method: '90-sec Elevator Pitch', rating: '9/10' },
        { question: 'Conflict Resolution', method: 'STAR Methodology', rating: '8.5/10' }
      ],
      calculationGuide: 'Score 2.5 marks each for Situation, Task, Action, and Result completeness.',
      resultInterpretation: 'Structured responses delivered with confident pacing, clear diction, and measurable outcomes.',
      sourcesOfError: ['Rambling without clear structure, failing to quantify the result, or blaming team members.'],
      vivaQuestions: [
        { question: 'Why should a candidate prepare questions to ask the interviewer at the end?', answer: 'Asking insightful questions proves that you have researched the company and are genuinely engaged in the role.' }
      ],
      revisionQuiz: [
        {
          id: 'eng-lab-q4',
          question: {
            en: 'In the STAR technique, which component should occupy the largest portion of your speaking time?',
            hinglish: 'STAR technique me sabse zyada time kisme lagana chahiye?',
            hi: 'STAR पद्धति में सबसे अधिक समय किस भाग पर देना चाहिए?'
          },
          options: ['Situation (Background story)', 'Task (The problem statement)', 'Action (What you specifically did)', 'Small talk'],
          correctIndex: 2,
          explanation: { en: 'The Action section showcases your technical and problem-solving skills, hence requiring ~60% of the answer.', hinglish: 'Action me aapne kya kiya yeh dikhta hai, isliye yeh sabse zaroori hai.', hi: 'एक्शन आपके तकनीकी कौशल और समस्या निवारण को दर्शाता है।' },
          hint: { en: 'What YOU did.', hinglish: 'Aapka kaam.', hi: 'आपकी कार्रवाई।' }
        }
      ]
    },
    {
      id: 'eng-lab-5',
      expNumber: 5,
      title: 'Group Discussion',
      aim: 'To practice structured group discussion dynamics, master cooperative turn-taking, support arguments with evidence, and disagree respectfully.',
      learningObjectives: [
        'Initiate or summarize a technical or social discussion effectively',
        'Use respectful phrases to counter opposing viewpoints without aggression',
        'Exhibit team-player dynamics by actively encouraging quieter members'
      ],
      apparatus: ['Round-table discussion setup or virtual conference simulator'],
      theory: {
        en: 'Group Discussion assesses team-working skills, leadership, logical reasoning, and communication agility under peer dynamics. Evaluators look for collaborative facilitators rather than aggressive talkers.',
        hinglish: 'GD ladai ya debate nahi hai; yeh ek collaborative team discussion hai jahan logical points aur team play par marks milte hain.',
        hi: 'ग्रुप डिस्कशन सहयोग, तार्किक विचार और नेतृत्व क्षमता का सामूहिक परीक्षण है।'
      },
      equations: [{ formula: '\\text{GD Evaluation} = \\text{Content Knowledge} + \\text{Communication Skill} + \\text{Team Spirit} + \\text{Active Listening}', symbolDefs: 'Corporate GD assessment metrics' }],
      diagramDescription: 'GD Seating & Flow: Initiator opens with scope -> Core brainstorming -> Moderation & Turn-taking -> Consensus summary.',
      safetyPrecautions: ['Maintain respectful decorum; avoid derogatory remarks or personal attacks.'],
      procedure: [
        '1. Receive the assigned GD topic (e.g. "Will AI Replace Entry-Level Software Engineers?").',
        '2. Take 1 minute to outline 3 logical points with real-world examples.',
        '3. Enter the discussion with a structured opening or follow-up point.',
        '4. Practice respectful disagreement: "I appreciate that point on automation, however...".',
        '5. Summarize the consolidated consensus.'
      ],
      simulationType: 'english-lab-rig',
      defaultParams: { activity: 5 },
      observationColumns: [
        { key: 'role', label: 'Participant Role', unit: '' },
        { key: 'phrase', label: 'Key Articulated Phrase', unit: '' },
        { key: 'score', label: 'Contribution Score', unit: '/10' }
      ],
      sampleObservations: [
        { role: 'Contributor', phrase: '"I appreciate that point, however...', score: '8.5/10' },
        { role: 'Summarizer', phrase: '"To synthesize our findings...', score: '9/10' }
      ],
      calculationGuide: 'Assess based on Content (3 marks), Delivery (3 marks), Teamwork (2 marks), and Listening (2 marks).',
      resultInterpretation: 'Active, balanced participation maintained without interruptions or aggressive speech.',
      sourcesOfError: ['Interrupting others, speaking off-topic, or remaining completely silent.'],
      vivaQuestions: [
        { question: 'What is the role of a summarizer in a Group Discussion?', answer: 'To neutrally synthesize all major viewpoints and conclusions without introducing new personal opinions.' }
      ],
      revisionQuiz: [
        {
          id: 'eng-lab-q5',
          question: {
            en: 'If two candidates are talking simultaneously in a GD, the best response is to:',
            hinglish: 'Agar GD me do log ek sath bol rahe ho toh kya karna chahiye?',
            hi: 'यदि जीडी में दो प्रतिभागी एक साथ बोल रहे हों तो क्या करना चाहिए?'
          },
          options: [
            'Shout louder than both of them',
            'Politely intervene: "Let us hear Member A first, and then proceed to Member B."',
            'Leave the room in protest',
            'Start clapping'
          ],
          correctIndex: 1,
          explanation: { en: 'Facilitating order showcases leadership and collaborative maturity.', hinglish: 'Order maintain karwana leadership dikhata hai.', hi: 'शांति और व्यवस्था बनाना नेतृत्व का परिचायक है।' },
          hint: { en: 'Facilitate order.', hinglish: 'Leader ki tarah handle karo.', hi: 'नेतृत्व का परिचय दें।' }
        }
      ]
    },
    {
      id: 'eng-lab-6',
      expNumber: 6,
      title: 'Presentation Skills',
      aim: 'To master technical presentation planning, slide organization (10-20-30 rule), visual storytelling, vocal modulation, and confident audience delivery.',
      learningObjectives: [
        'Design high-contrast, uncluttered presentation slides',
        'Structure a technical talk into Hook, Problem, Solution, and Impact',
        'Maintain purposeful eye contact and manage Q&A sessions professionally'
      ],
      apparatus: ['Digital presentation screen, slide clicker, multimedia workstation'],
      theory: {
        en: 'A presentation is visual communication supported by spoken explanation. Slides should carry minimal text; the speaker must carry the narrative through eye contact, storytelling, and vocal modulation.',
        hinglish: 'Presentation me slides sirf visual support ke liye hoti hain. Saari baatein slide se padhke nahi sunani hoti.',
        hi: 'प्रस्तुति में स्लाइड केवल दृश्य सहायता के लिए होती है, मुख्य संदेश वक्ता की वाणी और भाव से प्रवाहित होता है।'
      },
      equations: [{ formula: '\\text{Guy Kawasaki 10/20/30 Rule} = 10 \\text{ Slides} + 20 \\text{ Minutes} + 30 \\text{ pt Minimum Font}', symbolDefs: 'Effective slide design standard' }],
      diagramDescription: 'Presentation 3-Tier Architecture: 10% Engaging Hook -> 70% Core Technical Body -> 20% Conclusion & Q&A.',
      safetyPrecautions: ['Ensure cables are tucked safely to prevent tripping hazards during physical delivery.'],
      procedure: [
        '1. Select a technical topic and apply the 10/20/30 slide design rule.',
        '2. Craft an engaging opening hook (question or provocative statistic).',
        '3. Rehearse delivery using vocal modulation and open arm gestures.',
        '4. Field simulated audience technical questions with composure.'
      ],
      simulationType: 'english-lab-rig',
      defaultParams: { activity: 6 },
      observationColumns: [
        { key: 'element', label: 'Evaluation Element', unit: '' },
        { key: 'status', label: 'Execution', unit: '' },
        { key: 'score', label: 'Score', unit: '/10' }
      ],
      sampleObservations: [
        { element: 'Slide Typography', status: 'Clean >30pt sans-serif font', score: '9/10' },
        { element: 'Eye Contact', status: 'Maintained across all quadrants', score: '8.5/10' }
      ],
      calculationGuide: 'Score Structure (3), Visuals (3), Delivery (2), Q&A Handling (2).',
      resultInterpretation: 'Engaging, professional technical presentation delivered within allotted time limits.',
      sourcesOfError: ['Reading verbatim from slides, turning your back to the audience, or speaking in a monotonous drone.'],
      vivaQuestions: [
        { question: 'What is the 10/20/30 rule of presentations?', answer: 'A guideline recommending no more than 10 slides, lasting under 20 minutes, with no font smaller than 30 points.' }
      ],
      revisionQuiz: [
        {
          id: 'eng-lab-q6',
          question: {
            en: 'What is the primary flaw of reading text verbatim from presentation slides?',
            hinglish: 'Presentation me slide se dekh kar word-by-word padhne ka sabse bada nuksan kya hai?',
            hi: 'स्लाइड से हूबहू देखकर पढ़ने की मुख्य खामी क्या है?'
          },
          options: [
            'It saves time',
            'It alienates the audience, breaks eye contact, and signals a lack of preparation',
            'It improves vocal modulation',
            'It makes slides look more professional'
          ],
          correctIndex: 1,
          explanation: { en: 'Verbatim slide reading disengages the audience and undermines credibility.', hinglish: 'Audience bore ho jaati hai aur eye contact toot jata hai.', hi: 'श्रोताओं का ध्यान भंग होता है और विश्वसनीयता कम होती है।' },
          hint: { en: 'Breaks engagement.', hinglish: 'Engagement kharab hota hai.', hi: 'सहभागिता टूटती है।' }
        }
      ]
    },
    {
      id: 'eng-lab-7',
      expNumber: 7,
      title: 'Negotiation Skills',
      aim: 'To study principled negotiation techniques, identify underlying interests, propose win-win solutions, and achieve constructive compromise in workplace scenarios.',
      learningObjectives: [
        'Distinguish positional bargaining from principled win-win negotiation',
        'Identify BATNA (Best Alternative to a Negotiated Agreement)',
        'Maintain respectful professional tone during dispute resolution'
      ],
      apparatus: ['Negotiation case simulator, dispute roleplay sheets'],
      theory: {
        en: 'Principled negotiation (developed by the Harvard Negotiation Project) separates the people from the problem, focuses on underlying interests rather than rigid positions, and seeks mutual objective gain.',
        hinglish: 'Negotiation me ladai kiye bina dono parties ke faayde (win-win) ka solution nikaalna hota hai.',
        hi: 'पारस्परिक लाभ के सिद्धांत पर आधारित बातचीत जिससे दोनों पक्षों के हितों की पूर्ति हो सके।'
      },
      equations: [{ formula: '\\text{Negotiation Zone} = \\text{ZOPA (Zone of Possible Agreement between Seller Minimum & Buyer Maximum)}', symbolDefs: 'Bargaining range' }],
      diagramDescription: 'ZOPA Diagram: Seller reservation price <---- Mutual Agreement Zone ----> Buyer reservation limit.',
      safetyPrecautions: ['Keep negotiation arguments strictly objective and professional.'],
      procedure: [
        '1. Analyze the scenario: Project scope expansion with constrained deadline.',
        '2. Identify each party’s underlying core interest (Quality vs Delivery Speed).',
        '3. Propose multi-option package trade-offs (e.g. deliver core module now, secondary feature in sprint 2).',
        '4. Reach and formalize mutually beneficial agreement.'
      ],
      simulationType: 'english-lab-rig',
      defaultParams: { activity: 7 },
      observationColumns: [
        { key: 'scenario', label: 'Dispute Scenario', unit: '' },
        { key: 'technique', label: 'Negotiation Strategy', unit: '' },
        { key: 'outcome', label: 'Resolved Outcome', unit: '' }
      ],
      sampleObservations: [
        { scenario: 'Project Scope Extension', technique: 'Principled Trade-off', outcome: 'Core features delivered on date; bonus module in Sprint 2.' }
      ],
      calculationGuide: 'Score Objective Reasoning (5), Emotional Poise (3), Agreement Feasibility (2).',
      resultInterpretation: 'Constructive win-win compromise achieved without personal hostility or concession of core standards.',
      sourcesOfError: ['Stubborn positional rigidity or emotional defensiveness.'],
      vivaQuestions: [
        { question: 'What does BATNA stand for in negotiation theory?', answer: 'Best Alternative to a Negotiated Agreement — your backup option if negotiations fall through.' }
      ],
      revisionQuiz: [
        {
          id: 'eng-lab-q7',
          question: {
            en: 'Principled negotiation advises that negotiators should:',
            hinglish: 'Principled negotiation me kya advice di jaati hai?',
            hi: 'सैद्धांतिक वार्ता (Principled Negotiation) में क्या सलाह दी जाती है?'
          },
          options: [
            'Insist on winning at all costs',
            'Focus on underlying interests rather than stubborn positional demands',
            'Always yield to the other party immediately',
            'Avoid writing down agreements'
          ],
          correctIndex: 1,
          explanation: { en: 'Focusing on interests allows creative win-win solutions that satisfy both sides.', hinglish: 'Positions ke bajaye asali interests par dhyan dena chahiye.', hi: 'हठधर्मिता के स्थान पर मूलभूत हितों पर ध्यान देना चाहिए।' },
          hint: { en: 'Interests over positions.', hinglish: 'Interests par focus.', hi: 'हितों पर ध्यान।' }
        }
      ]
    },
    {
      id: 'eng-lab-8',
      expNumber: 8,
      title: 'Email Writing',
      aim: 'To engineer professional electronic mail correspondence with precise subject lines, appropriate salutations, calibrated tone, and proper corporate netiquette.',
      learningObjectives: [
        'Draft actionable, unambiguous email subject lines',
        'Adopt appropriate formality and tone when writing to superiors and peers',
        'Apply corporate email etiquette regarding CC, BCC, and attachment management'
      ],
      apparatus: ['Workstation, email client simulator'],
      theory: {
        en: 'Email is the primary digital communication medium in engineering workplaces. A well-crafted email has an explicit subject line, respectful greeting, clear 3-part body, and professional signature block.',
        hinglish: 'Corporate me email sabse main medium hai. Clear subject line aur formal tone professional impression banati hai.',
        hi: 'ईमेल व्यावसायिक संचार का मुख्य साधन है जिसमें स्पष्ट विषय, औपचारिक अभिवादन और सटीक संदेश आवश्यक है।'
      },
      equations: [{ formula: '\\text{Effective Email} = \\text{Actionable Subject} + \\text{Formal Salutation} + \\text{Concise Purpose} + \\text{Clear Next Action} + \\text{Sign-off}', symbolDefs: 'Corporate email architecture' }],
      diagramDescription: 'Email Structure: To/CC/BCC -> Subject Line -> Formal Salutation -> Purpose/Context -> Call to Action -> Signature.',
      safetyPrecautions: ['Never send confidential source code or unencrypted credentials over unverified email channels.'],
      procedure: [
        '1. Compose an email requesting a research internship with a professor.',
        '2. Formulate a 5-8 word specific subject line.',
        '3. Structure the message into Purpose, Qualifications, and Next Steps.',
        '4. Review tone using the formal/informal calibration tool.'
      ],
      simulationType: 'english-lab-rig',
      defaultParams: { activity: 8 },
      observationColumns: [
        { key: 'emailType', label: 'Email Context', unit: '' },
        { key: 'subjectLine', label: 'Subject Line Formulated', unit: '' },
        { key: 'etiquetteCheck', label: 'Netiquette Audit', unit: '' }
      ],
      sampleObservations: [
        { emailType: 'Internship Application', subjectLine: 'Application: Summer Research Trainee - [Name]', etiquetteCheck: 'Pass: Formal & Concise' }
      ],
      calculationGuide: 'Assess Clarity of Subject (3), Professional Tone (3), Structure (2), Correctness (2).',
      resultInterpretation: 'Corporate-standard email generated with proper formality and actionable intent.',
      sourcesOfError: ['Vague subject lines ("Hello"), slang, or using all-caps text which implies shouting.'],
      vivaQuestions: [
        { question: 'What is the functional difference between CC and BCC in email?', answer: 'CC (Carbon Copy) sends visible copies to secondary stakeholders; BCC (Blind Carbon Copy) sends copies without revealing their email addresses to other recipients.' }
      ],
      revisionQuiz: [
        {
          id: 'eng-lab-q8',
          question: {
            en: 'Which of the following is considered poor email netiquette?',
            hinglish: 'Email likhte waqt inme se kya karna galat mana jata hai?',
            hi: 'ईमेल लिखते समय इनमें से किसे अशोभनीय माना जाता है?'
          },
          options: [
            'Using a descriptive subject line',
            'Writing the entire message in CAPITAL LETTERS',
            'Adding a professional signature block',
            'Checking spelling before sending'
          ],
          correctIndex: 1,
          explanation: { en: 'Typing in ALL CAPS is universally interpreted in digital netiquette as shouting.', hinglish: 'ALL CAPS me likhne ka matlab digital netiquette me chillana mana jata hai.', hi: 'कैपिटल अक्षरों में लिखना चिल्लाने के समान माना जाता है।' },
          hint: { en: 'Digital shouting.', hinglish: 'Capital letters me chillana.', hi: 'कैपिटल अक्षरों का प्रयोग।' }
        }
      ]
    },
    {
      id: 'eng-lab-9',
      expNumber: 9,
      title: 'Public Speaking',
      aim: 'To develop stage confidence, organize a 2-minute public speech using a compelling hook and 3-point structure, and master speech anxiety management.',
      learningObjectives: [
        'Organize a 2-minute spoken address into Hook, 3-Point Body, and Memorable Conclusion',
        'Employ deep diaphragmatic breathing to regulate stage fright and heart rate',
        'Practice vocal modulation, dynamic pacing, and purposeful pauses'
      ],
      apparatus: ['Podium setup, speech countdown timer, audio-video recorder'],
      theory: {
        en: 'Public speaking anxiety (glossophobia) is a physiological adrenaline response. Channeling this energy into vocal modulation, physical movement, and deep breathing turns nervousness into dynamic stage presence.',
        hinglish: 'Public speaking me stage dar (glossophobia) ko breathing aur practice se control karke confident speech di jaati hai.',
        hi: 'सार्वजनिक भाषण में मंच के भय को नियंत्रित करके स्पष्ट वाणी और आत्मविश्वास से संदेश प्रस्तुत किया जाता है।'
      },
      equations: [{ formula: '\\text{Speech Impact} = \\text{Compelling Hook (15s)} + \\text{3 Core Insights (90s)} + \\text{Call to Action (15s)}', symbolDefs: '2-minute speech template' }],
      diagramDescription: 'Speech Arc: Attention Hook -> Point 1 -> Point 2 -> Point 3 -> Call to Action / Powerful Quote.',
      safetyPrecautions: ['Stay hydrated and perform gentle vocal warmups before extended speaking.'],
      procedure: [
        '1. Select a speech prompt: "The Ethics of Artificial Intelligence in Engineering".',
        '2. Outline a 3-point speech on an index card using keywords only.',
        '3. Start the 2-minute countdown practice timer.',
        '4. Deliver the speech maintaining upright posture and vocal modulation.',
        '5. Complete self-assessment checklist.'
      ],
      simulationType: 'english-lab-rig',
      defaultParams: { activity: 9 },
      observationColumns: [
        { key: 'metric', label: 'Delivery Metric', unit: '' },
        { key: 'target', label: 'Target Benchmark', unit: '' },
        { key: 'achieved', label: 'Observed Performance', unit: '' }
      ],
      sampleObservations: [
        { metric: 'Duration', target: '120 seconds', achieved: '118 seconds' },
        { metric: 'Pacing', target: '130 words/min', achieved: '128 words/min' }
      ],
      calculationGuide: 'Score Organization (3), Vocal Modulation (3), Body Poise (2), Time Adherence (2).',
      resultInterpretation: 'Speech delivered within allotted time with steady vocal modulation and zero disruptive pauses.',
      sourcesOfError: ['Speaking too fast due to nervousness or reading verbatim from notes.'],
      vivaQuestions: [
        { question: 'What is an "attention hook" in public speaking?', answer: 'A compelling opening question, quote, surprising fact, or anecdote used within the first 15 seconds to captivate audience interest.' }
      ],
      revisionQuiz: [
        {
          id: 'eng-lab-q9',
          question: {
            en: 'What is the most effective physiological technique to manage public speaking anxiety right before walking onto the stage?',
            hinglish: 'Stage par jaane se theek pehle ghabrahat door karne ke liye kya karna chahiye?',
            hi: 'मंच पर जाने से ठीक पहले घबराहट दूर करने का सबसे प्रभावी तरीका क्या है?'
          },
          options: [
            'Drinking high amounts of caffeinated energy drinks',
            'Deep diaphragmatic breathing with slow extended exhales',
            'Speaking as fast as possible to finish quickly',
            'Looking strictly at the floor'
          ],
          correctIndex: 1,
          explanation: { en: 'Deep diaphragmatic breathing activates the parasympathetic nervous system, lowering heart rate and calming vocal cords.', hinglish: 'Deep breathing se heart rate normal hota hai aur nervousness kam hoti hai.', hi: 'गहरी सांस लेने से हृदय गति नियंत्रित होती है और तनाव कम होता है।' },
          hint: { en: 'Breath control.', hinglish: 'Deep breathing.', hi: 'गहरी सांस लेना।' }
        }
      ]
    }
  ],
  examQuestions: [
    {
      id: 'eng-lab-eq1',
      unitNumber: 'Experiment 3',
      type: 'Code',
      marks: 10,
      question: 'Explain the key components of an ATS-compliant resume and write an achievement-oriented bullet point for a B.Tech robotics project.',
      solution: '1. ATS Layout: Single-column semantic text without tables, columns, text boxes, or embedded images.\n2. Sections: Contact Info, Education (degree, GPA, university), Technical Skills (categorized by language, tools, frameworks), Projects, Experience/Internships, Achievements.\n3. Formula for Project Bullet Point: Action Verb + Context + Tool Used + Quantified Metric.\nExample: "Engineered an autonomous path-planning algorithm for an omnidirectional robot using ROS2 and C++, reducing obstacle traversal time by 28% across 40 bench test trials."'
    },
    {
      id: 'eng-lab-eq2',
      unitNumber: 'Experiment 4',
      type: 'Viva',
      marks: 5,
      question: 'What is the STAR framework in job interview preparation? Illustrate with a brief example.',
      solution: 'STAR stands for:\nS - Situation: Setting the context and background challenge.\nT - Task: Stating your specific technical responsibility.\nA - Action: Describing the precise engineering steps you personally executed.\nR - Result: Quantifying the final outcome or business impact.\nExample: When our microgrid simulator failed 2 days before deadline (Situation), I had to debug the voltage drop logic (Task). I refactored the nodal matrix algorithm in Python (Action), resolving the bug and securing top marks in the department review (Result).'
    }
  ]
};
