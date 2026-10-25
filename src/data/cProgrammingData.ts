import { Subject } from '../types';

export const C_PROGRAMMING: Subject = {
  "id": "c-programming",
  "title": "Programming with C",
  "category": "Theory",
  "description": "Official 5-Unit B.Tech C Programming syllabus: computer architecture, number systems, control flow, functions, storage classes, preprocessors, arrays, pointers, memory allocation, strings, structures, unions, and file I/O.",
  "icon": "Code2",
  "color": "from-emerald-600 to-teal-700",
  "isOfficial": true,
  "syllabusSource": "Official University Syllabus (B.Tech 1st Year)",
  "unitsCount": 5,
  "units": [
    {
      "id": "c-u1",
      "unitNumber": "Unit I",
      "title": "Introduction to Computers and C Language",
      "description": "Computer systems, computing environments, languages, program execution pipeline, software development, flowcharts, number systems (Binary, Octal, Decimal, Hexadecimal), C background, identifiers, data types, variables, constants, I/O, operators, precedence, and type conversions.",
      "topics": [
        "Computer systems, hardware architecture, and computing environments",
        "Computer languages (Machine, Assembly, High-level) and execution pipeline (Preprocessor → Compiler → Assembler → Linker)",
        "Software development lifecycle and algorithm design with Flowcharts",
        "Number Systems: Binary, Octal, Decimal, and Hexadecimal conversion rules",
        "Background of C, basic C program structure, and main() entry point",
        "Identifiers, Keywords, Data Types (int, float, double, char, void), Variables, and Constants",
        "Standard input/output statements: printf, scanf, format specifiers",
        "Arithmetic operators and expressions, evaluating arithmetic expressions",
        "Operator precedence and associativity rules",
        "Type conversions: Implicit type promotion and Explicit type casting"
      ],
      "lessons": [
        {
          "id": "c-u1-l1",
          "unitId": "c-u1",
          "subjectId": "c-programming",
          "title": "Computing Pipeline, Architecture & Compilation Stages",
          "durationMinutes": 25,
          "difficulty": "Beginner",
          "prerequisites": [
            "Basic computer familiarity",
            "Basic arithmetic"
          ],
          "realLifeQuestion": {
            "en": "How does a machine built from silicon switches execute English-like code, and what happens between saving code.c and seeing output on your screen?",
            "hinglish": "Silicon switches se bana computer hamare English jaisi code ko kaise run karta hai, aur code.c save karne aur screen pe output aane ke beech CPU kya karta hai?",
            "hi": "सिलिकॉन स्विच से बना कंप्यूटर हमारे कोड को कैसे निष्पादित करता है, और code.c फ़ाइल को सहेजने से लेकर स्क्रीन पर आउटपुट आने तक क्या प्रक्रिया होती है?"
          },
          "simpleExplanation": {
            "en": "Inside every computer CPU are billions of microscopic transistors that act as electronic switches with only two states: 0V (OFF, 0) and positive voltage (ON, 1). To bridge the gap between human thought and binary pulses, C code undergoes a 4-stage pipeline: (1) Preprocessor handles # directives and strips comments, (2) Compiler translates preprocessed C into machine-specific Assembly mnemonics, (3) Assembler converts assembly into binary machine object code (.o/.obj), and (4) Linker joins object code with C runtime libraries (like printf) to produce a standalone executable (.exe/a.out).",
            "hinglish": "CPU ke transistors sirf 0V (0) ya positive voltage (1) samajhte hain. C code ko machine me run karne ke liye 4 stages hoti hain: Preprocessor (# directives expand karta hai), Compiler (C code ko Assembly me badalta hai), Assembler (Assembly ko 0s aur 1s binary object file me badalta hai), aur Linker (standard libraries jaise printf ko link karke final .exe banata hai).",
            "hi": "कंप्यूटर केवल 0 और 1 की भाषा समझता है। सी कोड को निष्पादित करने के लिए चार चरण होते हैं: प्रीप्रोसेसर, कंपाइलर, असेंबलर, और लिंकर जो मिलकर अंतिम निष्पादन योग्य (.exe) फ़ाइल बनाते हैं।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of C source code as a gourmet recipe written in English. The Preprocessor is the kitchen assistant who washes vegetables and fetches spices. The Compiler is a master chef who writes instructions in kitchen slang (assembly). The Assembler converts that slang into precise robotic servo movements. The Linker grabs pre-baked bread and bottled sauces from the store room (libraries) to serve the final plate.",
              "hinglish": "C code ek recipe book ki tarah hai. Preprocessor assistant hai jo saari samagri (#include) tayyar karta hai. Compiler chef hai jo technical recipe likhta hai. Assembler use robot ke motor signals me badalta hai, aur Linker dukan se ready-made sauces (printf library) leke final dish serve karta hai.",
              "hi": "सी प्रोग्राम एक व्यंजन विधि की तरह है जिसे अनुवादित करके रोबोटिक रसोई मशीन द्वारा अंतिम भोजन के रूप में तैयार किया जाता है।"
            },
            "limitations": {
              "en": "A human chef can tolerate spelling mistakes or adjust missing salt by guessing; compiler and linker tools are strictly deterministic and will immediately halt on any missing punctuation or undeclared symbol.",
              "hinglish": "Insaan thodi galti maaf kar deta hai, par compiler ek missing semicolon (;) par pura compilation abort kar deta hai.",
              "hi": "इंसान छोटी गलतियां सुधार लेता है, परंतु कंपाइलर एक अल्पविराम छूटने पर भी रुक जाता है।"
            }
          },
          "terminology": [
            {
              "term": "Source Code",
              "definition": {
                "en": "Human-readable instructions written in .c text file.",
                "hinglish": "Aam insaan dwara likha gaya readable C code jo .c file me save hota hai.",
                "hi": "सी भाषा में लिखा गया मानव-पठनीय प्रोग्राम।"
              }
            },
            {
              "term": "Object Code",
              "definition": {
                "en": "Relocatable binary machine code generated by the assembler before linking.",
                "hinglish": "Assembler dwara banaya gaya binary machine code (.o/.obj).",
                "hi": "असेंबलर द्वारा उत्पन्न बाइनरी मशीन कोड।"
              }
            },
            {
              "term": "Linker",
              "definition": {
                "en": "System utility that binds object modules and static libraries into an executable.",
                "hinglish": "Object files aur libraries ko jodkar runnable executable (.exe) banane wala tool.",
                "hi": "ऑब्जेक्ट कोड और लाइब्रेरी को जोड़ने वाला टूल।"
              }
            },
            {
              "term": "Loader",
              "definition": {
                "en": "Operating system component that copies an executable from disk into RAM for CPU execution.",
                "hinglish": "OS ka hissa jo .exe file ko hard drive se RAM me load karke CPU ko start address deta hai.",
                "hi": "ऑपरेटिंग सिस्टम का घटक जो प्रोग्राम को रैम में लोड करता है।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "pipeline",
            "sourceCode": "#include <stdio.h>\n\nint main() {\n    printf(\"Hello BTech LearnVerse!\\n\");\n    return 0;\n}",
            "pipelineStages": [
              "Source Code (.c)",
              "Preprocessor (.i)",
              "Compiler (.s)",
              "Assembler (.o)",
              "Linker (.exe)"
            ]
          },
          "underlyingPrinciple": {
            "en": "Von Neumann Architecture: Instructions and data both reside in memory (RAM). The CPU executes an endless Fetch-Decode-Execute cycle guided by the Program Counter (PC).",
            "hinglish": "Von Neumann Architecture: Data aur program instructions dono RAM me rehte hain. CPU Program Counter ke hisaab se har instruction ko Fetch, Decode aur Execute karta hai.",
            "hi": "वॉन न्यूमैन आर्किटेक्चर: निर्देश और डेटा दोनों मेमोरी में रहते हैं। सीपीयू उन्हें बारी-बारी से निष्पादित करता है।"
          },
          "formulaLogic": {
            "formula": "Source (.c) \\xrightarrow{\\text{cpp}} Preprocessed (.i) \\xrightarrow{\\text{c1}} Assembly (.s) \\xrightarrow{\\text{as}} Object (.o) \\xrightarrow{\\text{ld}} Executable (.exe)",
            "description": {
              "en": "Standard GNU C compilation and linking pipeline stages.",
              "hinglish": "C language ki compilation pipeline ke char mukhya charan.",
              "hi": "सी प्रोग्राम संकलन और लिंकिंग पाइपलाइन के मुख्य चरण।"
            },
            "symbols": [
              {
                "symbol": "cpp",
                "meaning": "C Preprocessor",
                "unit": "Software tool"
              },
              {
                "symbol": "c1/gcc",
                "meaning": "Core C Compiler generating assembly",
                "unit": "Software tool"
              },
              {
                "symbol": "as",
                "meaning": "Assembler translating mnemonic to opcodes",
                "unit": "Software tool"
              },
              {
                "symbol": "ld",
                "meaning": "Linker joining standard C library (libc)",
                "unit": "Software tool"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Trace the lifecycle of a basic \"Hello World\" C program. What role does #include <stdio.h> play, why is main() mandatory, and what does return 0 indicate?",
              "hinglish": "Hello World C program ka lifecycle samjhao: #include <stdio.h> kya karta hai, main() kyu zaroori hai, aur return 0 ka kya matlab hai?",
              "hi": "हेलो वर्ल्ड सी प्रोग्राम के जीवनचक्र को समझाइए: #include <stdio.h> का क्या कार्य है, main() क्यों आवश्यक है, और return 0 का क्या अर्थ है?"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Preprocessing directive",
                "explanation": {
                  "en": "The line #include <stdio.h> instructs the preprocessor to find the standard input/output header file and copy its function prototypes (like printf declaration) directly into our file before compilation starts.",
                  "hinglish": "Preprocessor stdio.h file ko kholta hai aur printf ki declaration hamare code me paste kar deta hai.",
                  "hi": "प्रीप्रोसेसर stdio.h फ़ाइल से printf के प्रोटोटाइप को प्रोग्राम में जोड़ता है।"
                },
                "math": "\\text{Preprocessed output contains declarations from } \\langle\\text{stdio.h}\\rangle"
              },
              {
                "stepNumber": 2,
                "title": "The main() entry point",
                "explanation": {
                  "en": "Operating systems cannot guess where code starts. The C language standard mandates that execution must commence exactly at the function named main(). The int return type signifies that main will return an integer status code to the OS.",
                  "hinglish": "OS ko pata hona chahiye ki pehla command kahan se shuru karna hai. Isliye execution hamesha main() function se shuru hoti hai.",
                  "hi": "ऑपरेटिंग सिस्टम हमेशा main() फंक्शन से प्रोग्राम का निष्पादन शुरू करता है।"
                },
                "math": "\\text{Entry Point: } \\text{int main(void)}"
              },
              {
                "stepNumber": 3,
                "title": "Calling printf and returning status",
                "explanation": {
                  "en": "printf writes the characters to standard output (STDOUT). return 0 communicates to the operating system shell that the program completed its execution with zero errors (non-zero indicates an error code).",
                  "hinglish": "printf screen par text print karta hai aur return 0 operating system ko batata hai ki program safalta-purvak bina kisi error ke khatam ho gaya.",
                  "hi": "printf स्क्रीन पर टेक्स्ट प्रदर्शित करता है और return 0 ऑपरेटिंग सिस्टम को सूचित करता है कि प्रोग्राम त्रुटिहीन समाप्त हुआ।"
                },
                "math": "\\text{Exit Code: } 0 = \\text{EXIT\\_SUCCESS}"
              }
            ],
            "finalAnswer": "Compilation converts the C source into an executable binary; main() starts execution, printf prints to terminal buffer, and return 0 signals successful termination to the OS."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Believing that #include <stdio.h> contains the compiled machine code for printf.",
                "hinglish": "Ye sochna ki stdio.h ke andar printf ka compiled machine code hota hai.",
                "hi": "यह सोचना कि stdio.h के भीतर printf का मशीन कोड होता है।"
              },
              "correction": {
                "en": "Header files (.h) only contain function prototypes and type declarations. The actual compiled machine code for printf resides in the standard C library (libc.a or libc.so), which is linked by the linker in the final step.",
                "hinglish": "stdio.h me sirf function ka declaration hota hai. Asli machine code standard C library file me hota hai jo Linker dwara joda jata hai.",
                "hi": "हेडर फ़ाइल में केवल घोषणाएं होती हैं; वास्तविक मशीन कोड लिंकर द्वारा लाइब्रेरी से जोड़ा जाता है।"
              }
            },
            {
              "misconception": {
                "en": "Omitting the semicolon at the end of statements.",
                "hinglish": "Statements ke aakhiri me semicolon (;) lagana bhool jana.",
                "hi": "स्टेटमेंट के अंत में सेमीकोलन (;) लगाना भूल जाना।"
              },
              "correction": {
                "en": "C uses semicolons as statement terminators, not newlines. Without a semicolon, the compiler reads the next line as part of the current statement, resulting in a syntax error.",
                "hinglish": "C language me newlines se statement khatam nahi hoti, semicolon (;) hi compiler ko batata hai ki statement yahan samapt hui.",
                "hi": "सी में प्रत्येक स्टेटमेंट का अंत सेमीकोलन द्वारा होता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u1-l1-p1",
              "question": {
                "en": "Which stage of compilation removes comments and replaces #define macros with their literal definitions?",
                "hinglish": "Compilation ka kaun sa stage comments ko remove karta hai aur #define macros ko replace karta hai?",
                "hi": "संकलन का कौन सा चरण टिप्पणियों को हटाता है और मैक्रोज़ को प्रतिस्थापित करता है?"
              },
              "hint": {
                "en": "It runs before the actual C compiler and handles all lines starting with #.",
                "hinglish": "Ye # se shuru hone wali sabhi lines ko compile hone se pehle process karta hai.",
                "hi": "यह # से शुरू होने वाले निर्देशों को प्रोसेस करता है।"
              },
              "explanation": {
                "en": "The Preprocessor (cpp) scans the source file, strips all single-line and multi-line comments, performs file inclusions (#include), and expands text substitution macros (#define).",
                "hinglish": "Preprocessor comments ko hatata hai aur macros ko expand karta hai.",
                "hi": "प्रीप्रोसेसर टिप्पणियों को हटाता है तथा मैक्रोज़ का विस्तार करता है।"
              },
              "correctAnswer": 2,
              "level": "Beginner",
              "options": [
                "Linker",
                "Compiler front-end",
                "Preprocessor",
                "Assembler"
              ],
              "correctIndex": 2
            }
          ],
          "summary": {
            "en": [
              "Computers run on binary logic (0s and 1s) implemented through silicon transistor gates.",
              "Compilation pipeline: Preprocessor (.i) → Compiler (.s) → Assembler (.o) → Linker (.exe).",
              "main() is the mandated entry point for program execution in C.",
              "Header files contain function prototypes, while libraries contain precompiled binary code."
            ],
            "hinglish": [
              "Computers binary 0 aur 1 par chalte hain jo electronic transistors se bante hain.",
              "Pipeline: Preprocessor (.i) → Compiler (.s) → Assembler (.o) → Linker (.exe).",
              "Har C program execution main() se shuru karta hai.",
              "Header files me function prototypes hote hain aur libraries me unka compiled machine code."
            ],
            "hi": [
              "कंप्यूटर बाइनरी संकेतों (0 और 1) पर कार्य करते हैं।",
              "संकलन पाइपलाइन: प्रीप्रोसेसर → कंपाइलर → असेंबलर → लिंकर।",
              "सी में प्रोग्राम निष्पादन का आरंभ सदैव main() से होता है।",
              "हेडर फ़ाइलें प्रोटोटाइप प्रदान करती हैं और लाइब्रेरी मशीन कोड जोड़ती हैं।"
            ]
          },
          "quiz": [
            {
              "id": "c-u1-l1-q1",
              "question": {
                "en": "What is the extension of the object file generated by the GNU assembler before linking?",
                "hinglish": "GNU assembler dwara generate ki gayi object file ka extension kya hota hai?",
                "hi": "असेंबलर द्वारा उत्पन्न ऑब्जेक्ट फ़ाइल का एक्सटेंशन क्या होता है?"
              },
              "options": [
                ".c",
                ".i",
                ".s",
                ".o"
              ],
              "correctIndex": 3,
              "hint": {
                "en": "Stands for \"object\" file.",
                "hinglish": "O se shuru hota hai.",
                "hi": "ऑब्जेक्ट फ़ाइल।"
              },
              "explanation": {
                "en": "The assembler produces a relocatable object file with extension .o (or .obj on Windows).",
                "hinglish": "Assembler .o extension wali relocatable object file banata hai.",
                "hi": "असेंबलर .o एक्सटेंशन वाली ऑब्जेक्ट फ़ाइल बनाता है।"
              }
            }
          ]
        },
        {
          "id": "c-u1-l2",
          "unitId": "c-u1",
          "subjectId": "c-programming",
          "title": "Number Systems (Binary, Octal, Hex) & Radix Conversions",
          "durationMinutes": 30,
          "difficulty": "Beginner",
          "prerequisites": [
            "Basic integer division and remainders"
          ],
          "realLifeQuestion": {
            "en": "Why do software engineers use Hexadecimal (Base-16) instead of Binary when describing memory addresses like 0x7ffd98b4?",
            "hinglish": "Software engineers memory addresses jaise 0x7ffd98b4 ko Decimal ya Binary ke bajaye Hexadecimal (Base-16) me kyu likhte hain?",
            "hi": "सॉफ्टवेयर इंजीनियर मेमोरी एड्रेस को बाइनरी के बजाय हेक्साडेसिमल में क्यों लिखते हैं?"
          },
          "simpleExplanation": {
            "en": "A 64-bit binary address requires 64 ones and zeros, which is completely unreadable to humans (e.g., 01111111111111011001100010110100). Because 16 is exactly 2^4, each hexadecimal digit (0-9, A-F) perfectly matches exactly 4 binary bits (one nibble). Thus, 64 bits shrinks into just 16 compact hex characters. Similarly, Octal (Base-8) groups bits in 3s (2^3 = 8), and Decimal (Base-10) is our human counting system.",
            "hinglish": "Binary me 64-bit ka address padhna bohot mushkil hota hai. Par kyunki 16 = 2^4 hota hai, isliye har 1 Hexadecimal digit (0-9 aur A-F) theek 4 binary bits (nibble) ko represent karti hai. Isse lamba binary number bohot chota aur clean ban jata hai.",
            "hi": "हेक्साडेसिमल में 16 = 2^4 होता है, अतः प्रत्येक हेक्साडेसिमल अंक ठीक 4 बाइनरी बिट्स का प्रतिनिधित्व करता है, जिससे बड़े पते संक्षिप्त हो जाते हैं।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of Binary as single 1-rupee coins. Octal is like packing coins in small rolls of 8. Hexadecimal is like packing coins in neat standard boxes of 16. It is the exact same amount of money, but counting boxes is 4 times faster than counting individual coins.",
              "hinglish": "Binary 1-1 rupaye ke sikke hain. Hexadecimal 16-16 sikko ke packets hain. Total paise wahi hain, bas Hexadecimal me ginna aur likhna 4 guna aasan aur chota hota hai.",
              "hi": "बाइनरी एक-एक सिक्के की तरह है और हेक्साडेसिमल 16-16 सिक्कों के पैकेट की तरह है।"
            },
            "limitations": {
              "en": "While 4 binary bits map cleanly to 1 hex digit, decimal numbers do not align to powers of 2, requiring repeated division/multiplication to convert.",
              "hinglish": "Hex to binary sidhe 4-bit grouping se hota hai, lekin decimal me convert karne ke liye powers of 2 se multiply karna padta hai.",
              "hi": "दशमलव संख्याएं 2 की घात में सीधे संरेखित नहीं होतीं।"
            }
          },
          "terminology": [
            {
              "term": "Radix (Base)",
              "definition": {
                "en": "The number of unique digits used in a positional numeral system (Base 2, 8, 10, 16).",
                "hinglish": "Number system me kitne alag digits use hote hain (e.g. Base 2 me 0 aur 1).",
                "hi": "संख्या प्रणाली का आधार।"
              }
            },
            {
              "term": "Nibble",
              "definition": {
                "en": "A group of exactly 4 binary bits, represented by 1 hex digit.",
                "hinglish": "4 binary bits ka group jo ek Hex digit ke barabar hota hai.",
                "hi": "4 बिट्स का समूह।"
              }
            },
            {
              "term": "Byte",
              "definition": {
                "en": "A group of 8 binary bits (2 nibbles), the fundamental addressable unit of computer memory.",
                "hinglish": "8 bits ka group jo computer memory ki standard addressable unit hai.",
                "hi": "8 बिट्स का समूह।"
              }
            },
            {
              "term": "Two’s Complement",
              "definition": {
                "en": "The standard binary representation for signed integers: invert all bits and add 1.",
                "hinglish": "Negative numbers ko binary me represent karne ka rule: bits ko flip karke 1 add karo.",
                "hi": "ऋणात्मक पूर्णांकों को बाइनरी में दर्शाने की मानक विधि।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "radix-converter",
            "decimal": 255,
            "binary": "11111111",
            "octal": "377",
            "hexadecimal": "0xFF"
          },
          "underlyingPrinciple": {
            "en": "Positional Notation: Any number N in base b is evaluated as N = ∑ (d_i × b^i), where d_i are digits from 0 to b-1.",
            "hinglish": "Positional Notation: Kisi bhi base b me number ka value = har digit × b ki power i.",
            "hi": "स्थानिक मान सिद्धांत: N = ∑ (d_i × b^i)।"
          },
          "formulaLogic": {
            "formula": "N_{10} = \\sum_{i=-m}^{n-1} d_i \\cdot b^i \\quad \\text{and} \\quad \\text{Two's Complement: } -X = \\sim X + 1",
            "description": {
              "en": "Positional radix expansion and two’s complement signed integer negation.",
              "hinglish": "Base b se decimal me conversion aur negative numbers ka 2s complement formula.",
              "hi": "आधार रूपांतरण और टूज़ कॉम्प्लिमेंट का सूत्र।"
            },
            "symbols": [
              {
                "symbol": "b",
                "meaning": "Base/Radix (2 for binary, 8 for octal, 16 for hex)",
                "unit": "integer"
              },
              {
                "symbol": "d_i",
                "meaning": "Digit coefficient at position i",
                "unit": "digit"
              },
              {
                "symbol": "\\sim X",
                "meaning": "One’s complement (bit-wise bit flip)",
                "unit": "binary"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Convert the decimal integer 156 into (a) Binary, (b) Octal, and (c) Hexadecimal using successive division.",
              "hinglish": "Decimal number 156 ko Binary, Octal, aur Hexadecimal me convert karo.",
              "hi": "दशमलव संख्या 156 को बाइनरी, अष्टाधारी (ऑक्टल) और हेक्साडेसिमल में परिवर्तित कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Decimal to Binary conversion",
                "explanation": {
                  "en": "Successively divide 156 by 2 and collect remainders from bottom to top: 156/2 = 78 (rem 0); 78/2 = 39 (rem 0); 39/2 = 19 (rem 1); 19/2 = 9 (rem 1); 9/2 = 4 (rem 1); 4/2 = 2 (rem 0); 2/2 = 1 (rem 0); 1/2 = 0 (rem 1). Reading upward: 10011100_2.",
                  "hinglish": "156 ko 2 se divide karte jao aur remainders ko neeche se upar padho: 10011100_2.",
                  "hi": "156 को 2 से भाग देकर शेषफलों को नीचे से ऊपर पढ़ने पर: 10011100_2 प्राप्त होता है।"
                },
                "math": "156_{10} = 10011100_2"
              },
              {
                "stepNumber": 2,
                "title": "Binary to Hexadecimal via 4-bit grouping",
                "explanation": {
                  "en": "Group the 8 binary bits into two 4-bit nibbles from right to left: [1001] [1100]. [1001] = 8 + 1 = 9. [1100] = 8 + 4 = 12, which is letter C in Hex. So 156_{10} = 0x9C.",
                  "hinglish": "Bits ko 4-4 ke group me baanto: 1001 = 9, aur 1100 = 12 = C. Toh Hex me bana 0x9C.",
                  "hi": "4-4 बिट्स के समूह बनाने पर: [1001]=9 तथा [1100]=12 (C)। परिणाम = 0x9C।"
                },
                "math": "1001_2 = 9_{16}, \\quad 1100_2 = C_{16} \\implies 156_{10} = 9C_{16}"
              },
              {
                "stepNumber": 3,
                "title": "Binary to Octal via 3-bit grouping",
                "explanation": {
                  "en": "Group the binary bits into 3-bit triplets from right to left (padding the leftmost with zero): [010] [011] [100]. [010] = 2; [011] = 3; [100] = 4. Hence in Octal: 234_8.",
                  "hinglish": "Right se 3-3 bits ke group banao: [010]=2, [011]=3, [100]=4. Octal bana 234_8.",
                  "hi": "3-3 बिट्स के समूह बनाने पर: [010]=2, [011]=3, [100]=4। ऑक्टल = 234_8।"
                },
                "math": "156_{10} = 234_8"
              }
            ],
            "finalAnswer": "156 in Decimal = 10011100 in Binary = 234 in Octal = 0x9C in Hexadecimal."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Reading remainders from top-to-bottom instead of bottom-to-top after successive divisions.",
                "hinglish": "Division ke baad remainders ko upar se neeche padhna.",
                "hi": "भाग विधि के बाद शेषफलों को ऊपर से नीचे पढ़ना।"
              },
              "correction": {
                "en": "The first remainder obtained is the Least Significant Bit (LSB). The last remainder obtained is the Most Significant Bit (MSB). You must always read from bottom to top.",
                "hinglish": "Pehla remainder LSB hota hai aur aakhiri MSB. Hamesha neeche se upar padha jata hai.",
                "hi": "पहला शेषफल सबसे कम महत्वपूर्ण बिट (LSB) होता है; हमेशा नीचे से ऊपर पढ़ें।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u1-l2-p1",
              "question": {
                "en": "What is the hexadecimal representation of the binary string 10111111?",
                "hinglish": "Binary number 10111111 ka Hexadecimal kya hoga?",
                "hi": "बाइनरी स्ट्रिंग 10111111 का हेक्साडेसिमल क्या होगा?"
              },
              "hint": {
                "en": "Split into two 4-bit nibbles: 1011 and 1111.",
                "hinglish": "1011 (11) aur 1111 (15) ko Hex letters me likho.",
                "hi": "1011 और 1111 के मान देखें।"
              },
              "explanation": {
                "en": "1011 = 8 + 2 + 1 = 11 = B. 1111 = 8 + 4 + 2 + 1 = 15 = F. Thus 10111111_2 = 0xBF.",
                "hinglish": "1011 = B, 1111 = F. Result = 0xBF.",
                "hi": "1011 = B और 1111 = F, अतः उत्तर 0xBF है।"
              },
              "correctAnswer": 2,
              "level": "Beginner",
              "options": [
                "0x41",
                "0x7E",
                "0xBF",
                "0x101"
              ],
              "correctIndex": 2
            }
          ],
          "summary": {
            "en": [
              "Base 2 (Binary): digits 0, 1. Fundamental language of CPU registers and memory.",
              "Base 8 (Octal): digits 0-7. Each digit maps to 3 binary bits.",
              "Base 16 (Hexadecimal): digits 0-9 and A-F. Each digit maps to 4 binary bits (one nibble).",
              "Two’s complement inverts all bits and adds 1 to represent negative signed integers."
            ],
            "hinglish": [
              "Binary (Base 2) sirf 0 aur 1 use karta hai.",
              "Octal (Base 8) 3 binary bits ko ek digit me compress karta hai.",
              "Hexadecimal (Base 16) 4 binary bits (nibble) ko ek character (0-9, A-F) me compress karta hai.",
              "Negative numbers ko binary me store karne ke liye 2s Complement use hota hai."
            ],
            "hi": [
              "बाइनरी (आधार 2) केवल 0 और 1 का उपयोग करता है।",
              "ऑक्टल 3 बिट्स को समूहित करता है और हेक्साडेसिमल 4 बिट्स को समूहित करता है।",
              "हेक्साडेसिमल में 10 से 15 तक के अंकों को A से F द्वारा दर्शाया जाता है।",
              "ऋणात्मक संख्याओं के लिए टूज़ कॉम्प्लिमेंट का प्रयोग किया जाता है।"
            ]
          },
          "quiz": [
            {
              "id": "c-u1-l2-q1",
              "question": {
                "en": "How many bits are represented by a single hexadecimal digit?",
                "hinglish": "Ek Hexadecimal digit me kitne binary bits hote hain?",
                "hi": "एक हेक्साडेसिमल अंक कितने बाइनरी बिट्स का प्रतिनिधित्व करता है?"
              },
              "options": [
                "2 bits",
                "3 bits",
                "4 bits",
                "8 bits"
              ],
              "correctIndex": 2,
              "hint": {
                "en": "Since 2^4 = 16, each hex digit corresponds to 4 bits.",
                "hinglish": "16 = 2 ki power 4.",
                "hi": "2^4 = 16।"
              },
              "explanation": {
                "en": "Because 2^4 = 16, exactly 4 binary bits (one nibble) are represented by one hexadecimal character.",
                "hinglish": "Har hex character 4 bits ko represent karta hai.",
                "hi": "प्रत्येक हेक्साडेसिमल अंक ठीक 4 बिट्स का प्रतिनिधित्व करता है।"
              }
            }
          ]
        },
        {
          "id": "c-u1-l3",
          "unitId": "c-u1",
          "subjectId": "c-programming",
          "title": "Data Types, I/O Format Specifiers, Operators & Precedence",
          "durationMinutes": 30,
          "difficulty": "Beginner",
          "prerequisites": [
            "Basic variables and algebra"
          ],
          "realLifeQuestion": {
            "en": "Why does 5 / 2 evaluate to 2 in C instead of 2.5, and why does a bank balance calculation crash if you choose the wrong data type?",
            "hinglish": "C language me 5 / 2 ka answer 2 kyu aata hai 2.5 kyu nahi, aur galat data type chunne se bank software crash kyu ho sakta hai?",
            "hi": "सी में 5 / 2 का मान 2.5 के बजाय 2 क्यों आता है, और गलत डेटा प्रकार से गणना त्रुटि क्यों होती है?"
          },
          "simpleExplanation": {
            "en": "C is a statically and strongly typed language. When both operands of the division operator / are integers, C performs integer division and silently discards the fractional part (truncation toward zero). To obtain 2.5, at least one operand must be a floating-point type: (float)5 / 2 or 5.0 / 2. Each data type has a fixed size in RAM (char=1 byte, int=4 bytes, float=4 bytes, double=8 bytes), setting strict limits on range. Exceeding those limits causes integer overflow.",
            "hinglish": "C me jab do integers divide hote hain (5 / 2), toh C fractional part ko drop kar deta hai aur answer 2 deta hai. Agar decimals chahiye toh 5.0 / 2 ya (float)5 / 2 likhna padta hai. Har data type ki RAM me fixed size hoti hai: char (1 byte), int (4 bytes), double (8 bytes). Agar limit se bada number store karoge toh overflow ho jayega.",
            "hi": "सी में दो पूर्णांकों का भागफल भी पूर्णांक होता है तथा दशमलव भाग हट जाता है। सही मान हेतु (float)5/2 या 5.0/2 लिखना आवश्यक है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of data types as measuring containers of different sizes. A char is a shot glass (1 byte, max 255). An int is a 2-liter bottle. A double is an industrial storage tank. If you pour a gallon of water into a shot glass, it overflows everywhere (integer overflow), ruining the calculation.",
              "hinglish": "Data types alag-alag size ke bartan hain. char ek chota cup hai (1 byte), int ek 2-liter ki bottle hai (4 bytes), aur double ek bada tanker hai. Chote bartan me bada number daaloge toh data gir ke kharab ho jayega (overflow).",
              "hi": "डेटा प्रकार विभिन्न आकारों के बर्तनों की तरह हैं; छोटे बर्तन में बड़ा मान भरने पर डेटा नष्ट हो जाता है।"
            },
            "limitations": {
              "en": "Physical cups spill on the table; in a computer, overflowing bits wrap around into negative numbers due to two’s complement, turning +2,147,483,647 into -2,147,483,648 silently.",
              "hinglish": "Computer me overflow bahar nahi girta, balki 2s complement ki wajah se positive number achanak negative ban jata hai bina kisi warning ke.",
              "hi": "कंप्यूटर में ओवरफ्लो होने पर धनात्मक संख्या अचानक ऋणात्मक में बदल जाती है।"
            }
          },
          "terminology": [
            {
              "term": "Format Specifier",
              "definition": {
                "en": "Placeholders in printf/scanf telling C what data type to format (%d=int, %f=float, %lf=double, %c=char, %s=string).",
                "hinglish": "printf aur scanf me use hone wale symbols jo compiler ko data ka type batate hain.",
                "hi": "डेटा प्रकार को प्रारूपित करने वाले प्रतीक।"
              }
            },
            {
              "term": "Operator Precedence",
              "definition": {
                "en": "The priority order determining which operator is evaluated first in a complex expression (e.g. * before +).",
                "hinglish": "Complex expression me kaun sa operator pehle calculate hoga uski priority.",
                "hi": "ऑपरेटरों के मूल्यांकन की प्राथमिकता का क्रम।"
              }
            },
            {
              "term": "Associativity",
              "definition": {
                "en": "The evaluation direction (Left-to-Right or Right-to-Left) when operators share identical precedence.",
                "hinglish": "Jab do operators ki precedence barabar ho toh unhe Left-se-Right ya Right-se-Left solve karne ka niyam.",
                "hi": "समान प्राथमिकता वाले ऑपरेटरों के मूल्यांकन की दिशा।"
              }
            },
            {
              "term": "Type Casting",
              "definition": {
                "en": "Explicit conversion of a variable from one data type to another using (target_type) expression.",
                "hinglish": "Ek data type ko zabardasti dusre type me badalna jaise (float)sum / n.",
                "hi": "डेटा प्रकार का स्पष्ट रूपांतरण।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "operator-precedence",
            "expression": "a + b * c / d - e",
            "precedenceTable": [
              {
                "rank": 1,
                "ops": "() [] -> .",
                "assoc": "Left-to-Right"
              },
              {
                "rank": 2,
                "ops": "! ~ ++ -- + - (type) * & sizeof",
                "assoc": "Right-to-Left"
              },
              {
                "rank": 3,
                "ops": "* / %",
                "assoc": "Left-to-Right"
              },
              {
                "rank": 4,
                "ops": "+ -",
                "assoc": "Left-to-Right"
              },
              {
                "rank": 5,
                "ops": "<< >>",
                "assoc": "Left-to-Right"
              },
              {
                "rank": 6,
                "ops": "< <= > >=",
                "assoc": "Left-to-Right"
              },
              {
                "rank": 7,
                "ops": "== !=",
                "assoc": "Left-to-Right"
              },
              {
                "rank": 14,
                "ops": "= += -= *= /=",
                "assoc": "Right-to-Left"
              }
            ]
          },
          "underlyingPrinciple": {
            "en": "Static Typing & Implicit Promotion: In binary arithmetic operations, lower rank types (char, short) are automatically promoted to int, and integers are promoted to floating-point if mixed with floats.",
            "hinglish": "Type Promotion: Calculation ke waqt chote types (char, short) automatically int me promote ho jaate hain aur mixed arithmetic me int float ban jata hai.",
            "hi": "गणना के समय छोटे प्रकार स्वतः बड़े प्रकार में पदोन्नत हो जाते हैं।"
          },
          "formulaLogic": {
            "formula": "\\text{Precedence Order: } () \\gg \\{++, --\\} \\gg \\{*, /, \\%\\} \\gg \\{+, -\\} \\gg \\{<, \\le, >, \\ge\\} \\gg \\{==, !=\\} \\gg \\{=\\}",
            "description": {
              "en": "Evaluation priority from highest precedence to lowest assignment operators.",
              "hinglish": "C language me operators ki evaluation priority table.",
              "hi": "ऑपरेटरों की प्राथमिकता का क्रम।"
            },
            "symbols": [
              {
                "symbol": "()",
                "meaning": "Parentheses (highest precedence)",
                "unit": "grouping"
              },
              {
                "symbol": "*",
                "meaning": "Multiplication",
                "unit": "arithmetic"
              },
              {
                "symbol": "%",
                "meaning": "Modulus remainder operator (integers only)",
                "unit": "arithmetic"
              },
              {
                "symbol": "=",
                "meaning": "Assignment operator (lowest, right-to-left)",
                "unit": "assignment"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Evaluate the C expression: int result = 10 + 20 * 3 / 2 - 5 % 2; Explain each step according to operator precedence and associativity.",
              "hinglish": "Expression solve karo: int result = 10 + 20 * 3 / 2 - 5 % 2; Har step ki precedence explain karo.",
              "hi": "व्यंजक का मूल्यांकन कीजिए: 10 + 20 * 3 / 2 - 5 % 2; प्रत्येक चरण को स्पष्ट कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Identify highest precedence operators (*, /, %)",
                "explanation": {
                  "en": "Operators *, /, and % share equal precedence (Rank 3), which is higher than + and - (Rank 4). Their associativity is Left-to-Right. We evaluate 20 * 3 first.",
                  "hinglish": "*, /, aur % ki priority sabse high hai aur Left-to-Right chalti hai. Pehle 20 * 3 = 60 hoga.",
                  "hi": "*, /, और % की प्राथमिकता समान है और मूल्यांकन बाएं से दाएं होता है। 20 * 3 = 60।"
                },
                "math": "10 + (20 \\times 3) / 2 - 5 \\% 2 = 10 + 60 / 2 - 5 \\% 2"
              },
              {
                "stepNumber": 2,
                "title": "Evaluate remaining high-precedence operators left-to-right",
                "explanation": {
                  "en": "Next in left-to-right order is division: 60 / 2 = 30. Then modulus: 5 % 2 = 1 (remainder when 5 is divided by 2).",
                  "hinglish": "Next division hoga: 60 / 2 = 30. Fir remainder: 5 % 2 = 1.",
                  "hi": "अगला विभाजन: 60 / 2 = 30, फिर शेषफल 5 % 2 = 1 प्राप्त होता है।"
                },
                "math": "10 + 30 - 1"
              },
              {
                "stepNumber": 3,
                "title": "Evaluate addition and subtraction left-to-right",
                "explanation": {
                  "en": "+ and - share equal precedence (Rank 4) with Left-to-Right associativity. First addition: 10 + 30 = 40. Then subtraction: 40 - 1 = 39.",
                  "hinglish": "+ aur - Left-to-Right solve honge: 10 + 30 = 40, aur 40 - 1 = 39.",
                  "hi": "जोड़ और घटाव बाएं से दाएं: 10 + 30 = 40; 40 - 1 = 39।"
                },
                "math": "40 - 1 = 39"
              }
            ],
            "finalAnswer": "The expression evaluates strictly to 39."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Using the modulus operator % on floating-point numbers like 5.5 % 2.0.",
                "hinglish": "Decimals (float/double) par modulus % lagane ki koshish karna.",
                "hi": "फ्लोटिंग-पॉइंट संख्याओं पर % ऑपरेटर का उपयोग करना।"
              },
              "correction": {
                "en": "The % operator in C is strictly defined for integer types only. Applying % to float or double produces a compilation error. For floating-point remainder, use fmod() from <math.h>.",
                "hinglish": "C me % operator sirf integers ke liye valid hai. Floats ke liye fmod() function use hota hai.",
                "hi": "सी में % केवल पूर्णांकों के लिए मान्य है; फ्लोट के लिए fmod() का उपयोग करें।"
              }
            },
            {
              "misconception": {
                "en": "Writing scanf(\"%d\", x) instead of passing the address scanf(\"%d\", &x).",
                "hinglish": "scanf me variable ke aage & lagana bhool jana.",
                "hi": "scanf में चर के आगे & न लगाना।"
              },
              "correction": {
                "en": "scanf requires the memory address of the variable where it should store user input. Passing x passes the value (often 0 or garbage), causing a segmentation fault crash. Always pass &x.",
                "hinglish": "scanf ko memory address chahiye hota hai jahan data save karna hai. Bina & ke program crash ho jata hai.",
                "hi": "scanf को मेमोरी पता चाहिए होता है, अतः हमेशा &x का उपयोग करें।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u1-l3-p1",
              "question": {
                "en": "What will be the output of printf(\"%d\", 7 / 2); in C?",
                "hinglish": "printf(\"%d\", 7 / 2); ka output kya aayega?",
                "hi": "printf(\"%d\", 7 / 2); का आउटपुट क्या होगा?"
              },
              "hint": {
                "en": "Both 7 and 2 are integers, so integer division truncates.",
                "hinglish": "Integer division me decimal part drop ho jata hai.",
                "hi": "पूर्णांक भागफल दशमलव भाग छोड़ देता है।"
              },
              "explanation": {
                "en": "7 / 2 performs integer division, yielding 3 with remainder 1. The fractional part is discarded.",
                "hinglish": "Integer division hone ke karan answer 3 aayega.",
                "hi": "पूर्णांक विभाजन के कारण परिणाम 3 होगा।"
              },
              "correctAnswer": 2,
              "level": "Beginner",
              "options": [
                "3.5",
                "3.0",
                "3",
                "Runtime error"
              ],
              "correctIndex": 2
            }
          ],
          "summary": {
            "en": [
              "Fundamental data types: char (1B), int (4B), float (4B), double (8B).",
              "Format specifiers: %d for int, %f for float, %lf for double, %c for char, %s for string.",
              "Integer division truncates fractional components: 5 / 2 = 2, whereas 5.0 / 2 = 2.5.",
              "scanf requires the address-of operator & to store user input directly into variable memory."
            ],
            "hinglish": [
              "Basic types: char (1B), int (4B), float (4B), double (8B).",
              "Format specifiers: %d (int), %f (float), %lf (double), %c (char).",
              "Integer division me decimal part gayab ho jata hai: 5 / 2 = 2.",
              "scanf me memory address dene ke liye variable ke aage & lagana zaroori hai."
            ],
            "hi": [
              "मूल प्रकार: char (1B), int (4B), float (4B), double (8B)।",
              "प्रारूप विनिर्देशक: %d (int), %f (float), %lf (double), %c (char)।",
              "पूर्णांक विभाजन दशमलव भाग को छोड़ देता है: 5 / 2 = 2।",
              "scanf में मान सहेजने के लिए & का उपयोग अनिवार्य है।"
            ]
          },
          "quiz": [
            {
              "id": "c-u1-l3-q1",
              "question": {
                "en": "What is the correct format specifier to scan a double precision floating point number using scanf?",
                "hinglish": "scanf me double type ka number read karne ke liye kaun sa format specifier use hota hai?",
                "hi": "scanf में double संख्या को पढ़ने के लिए सही प्रारूप विनिर्देशक कौन सा है?"
              },
              "options": [
                "%d",
                "%f",
                "%lf",
                "%s"
              ],
              "correctIndex": 2,
              "hint": {
                "en": "Stands for \"long float\".",
                "hinglish": "Long float ke liye lf hota hai.",
                "hi": "लॉन्ग फ्लोट।"
              },
              "explanation": {
                "en": "In scanf, %f reads a 32-bit float, while %lf is required to read a 64-bit double precision float into memory.",
                "hinglish": "scanf me double ke liye %lf lagana mandatory hota hai.",
                "hi": "scanf में double के लिए %lf का उपयोग किया जाता है।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Computer systems, computing environments, languages, program execution pipeline, software development, flowcharts, number systems (Binary, Octal, Decimal, Hexadecimal), C background, identifiers, data types, variables, constants, I/O, operators, precedence, and type conversions.",
          "hinglish": "Introduction to Computers and C Language ka poora one-page revision summary jisme saare core formulas, theorems aur exam problems shamil hain.",
          "hi": "Introduction to Computers and C Language का संपूर्ण एक-पृष्ठीय पुनरावलोकन सारांश जिसमें सभी प्रमुख सूत्र और प्रमेय सम्मिलित हैं।"
        },
        "shortNotes": [
          {
            "topic": "Compiler",
            "content": {
              "en": "Program that translates high-level source code into low-level machine code.",
              "hinglish": "Program that translates high-level source code into low-level machine code.",
              "hi": "Program that translates high-level source code into low-level machine code."
            }
          },
          {
            "topic": "Linker",
            "content": {
              "en": "System utility linking object files with libraries to produce an executable binary.",
              "hinglish": "System utility linking object files with libraries to produce an executable binary.",
              "hi": "System utility linking object files with libraries to produce an executable binary."
            }
          },
          {
            "topic": "Format Specifier",
            "content": {
              "en": "Placeholder tokens in printf/scanf designating how bits are interpreted.",
              "hinglish": "Placeholder tokens in printf/scanf designating how bits are interpreted.",
              "hi": "Placeholder tokens in printf/scanf designating how bits are interpreted."
            }
          },
          {
            "topic": "Operator Associativity",
            "content": {
              "en": "The direction (L-to-R or R-to-L) in which operators of equal precedence are evaluated.",
              "hinglish": "The direction (L-to-R or R-to-L) in which operators of equal precedence are evaluated.",
              "hi": "The direction (L-to-R or R-to-L) in which operators of equal precedence are evaluated."
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Binary to Hexadecimal",
            "formula": "Group binary bits into nibbles of 4 from right to left (2^4 = 16)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Binary to Octal",
            "formula": "Group binary bits into triplets of 3 from right to left (2^3 = 8)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Two’s Complement",
            "formula": "-N = ~N + 1",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Integer Division Rule",
            "formula": "int / int = int (truncated towards zero)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Size of Types",
            "formula": "sizeof(char) = 1, sizeof(int) = 4, sizeof(float) = 4, sizeof(double) = 8",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          }
        ],
        "mindMap": [
          {
            "node": "Introduction to Computers and C Language",
            "children": [
              "Computer systems, hardware architecture, and computing environments",
              "Computer languages (Machine, Assembly, High-level) and execution pipeline (Preprocessor → Compiler → Assembler → Linker)",
              "Software development lifecycle and algorithm design with Flowcharts",
              "Number Systems: Binary, Octal, Decimal, and Hexadecimal conversion rules",
              "Background of C, basic C program structure, and main() entry point",
              "Identifiers, Keywords, Data Types (int, float, double, char, void), Variables, and Constants",
              "Standard input/output statements: printf, scanf, format specifiers",
              "Arithmetic operators and expressions, evaluating arithmetic expressions",
              "Operator precedence and associativity rules",
              "Type conversions: Implicit type promotion and Explicit type casting"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Correct Understanding #1",
            "conceptB": "Common Student Pitfall #1",
            "comparisonPoints": [
              {
                "feature": "Key Concept",
                "a": "Follow established laws strictly",
                "b": "Writing scanf(\"%d\", var) instead of scanf(\"%d\", &var) (causes memory fault)."
              }
            ]
          },
          {
            "conceptA": "Correct Understanding #2",
            "conceptB": "Common Student Pitfall #2",
            "comparisonPoints": [
              {
                "feature": "Key Concept",
                "a": "Follow established laws strictly",
                "b": "Forgetting that integer division truncates fractions (e.g. 1/2 evaluates to 0)."
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "Compilation Pipeline",
            "back": "Please Call All Leaders (Preprocessor -> Compiler -> Assembler -> Linker)"
          },
          {
            "front": "Operator Precedence",
            "back": "P-U-M-A-R-E-A (Parentheses, Unary, Multiplicative, Additive, Relational, Equality, Assignment)"
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "What is the role of the linker in C compilation?",
            "answer": "The linker binds relocatable object files (.o) with precompiled library functions (like printf from libc) to create a standalone runnable executable file."
          },
          {
            "question": "Why does 1 / 4 evaluate to 0 in C?",
            "answer": "Both 1 and 4 are integer literals. In C, integer division discards any fractional part (truncation), producing 0 instead of 0.25."
          }
        ]
      }
    },
    {
      "id": "c-u2",
      "unitNumber": "Unit II",
      "title": "Control Structures, Functions and Storage Classes",
      "description": "Selection and branching statements (if, if-else, nested if, switch-case), iteration structures (while, do-while, for loops, break, continue, goto), user-defined functions, function prototypes, parameter passing (call by value), recursion mechanics, and storage classes (auto, register, static, extern).",
      "topics": [
        "Selection statements: Simple if, if-else, nested if, and else-if ladder",
        "Multi-way decision making: switch statement, case labels, break statement, and default",
        "Ternary conditional operator (? :) syntax and evaluation",
        "Iteration structures: entry-controlled loops (while, for) vs exit-controlled loops (do-while)",
        "Loop control jumps: break, continue, and goto (and why goto is discouraged)",
        "Functions: Modularity, function declaration (prototype), definition, and function call",
        "Parameter passing: Call by value and actual vs formal parameters",
        "Recursion: Recursive function structure, base case termination, and call stack frames",
        "Storage Classes: auto, register, static, and extern (scope, lifetime, default initial value, and storage location)"
      ],
      "lessons": [
        {
          "id": "c-u2-l1",
          "unitId": "c-u2",
          "subjectId": "c-programming",
          "title": "Decision Making: if-else Ladders, switch-case & Ternary Operator",
          "durationMinutes": 30,
          "difficulty": "Beginner",
          "prerequisites": [
            "Relational and Logical operators",
            "Boolean expressions"
          ],
          "realLifeQuestion": {
            "en": "How does an ATM decide whether to dispense cash, prompt for another PIN attempt, or swallow your card after 3 failed tries?",
            "hinglish": "ATM machine kaise decide karti hai ki cash nikalna hai, dobara PIN maangna hai, ya 3 baar galat PIN ke baad card block karna hai?",
            "hi": "एटीएम मशीन कैसे निर्णय लेती है कि नकद देना है या कार्ड ब्लॉक करना है?"
          },
          "simpleExplanation": {
            "en": "Computer programs execute sequentially line by line unless redirected by control structures. Decision-making statements test a boolean condition. If true (non-zero in C), the CPU branches down one block of instructions; if false (zero), it skips to the else block. For testing a single variable against multiple discrete constant values (like a menu choice 1, 2, 3), the switch statement provides cleaner execution and jump-table optimization compared to long if-else-if ladders.",
            "hinglish": "Normal program line-by-line chalta hai. Decision statements condition test karti hain: agar condition true hai (C me non-zero), toh if block execute hota hai; false (0) hone par else block chalta hai. Menu-driven programs (jaise 1 press karo deposit ke liye, 2 withdrawal ke liye) me switch-case statement code ko fast aur neat banata hai.",
            "hi": "निर्णय लेने वाले निर्देश शर्त की जांच करते हैं: यदि शर्त सत्य है तो if ब्लॉक और असत्य होने पर else ब्लॉक निष्पादित होता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of an if-else statement as a railway track switch. The oncoming train (instruction pointer) is diverted onto Track A if the green signal (condition) is active, or diverted onto Track B if red.",
              "hinglish": "Railway track ke switch ki tarah: green signal mila toh train sidhe platform 1 par jayegi, warna platform 2 par divert ho jayegi.",
              "hi": "रेलवे ट्रैक स्विच की तरह जो सिग्नल के आधार पर ट्रेन को सही पटरी पर मोड़ता है।"
            },
            "limitations": {
              "en": "A train can only be on one track at a time; in a switch statement without break statements, execution \"falls through\" into subsequent cases sequentially, running multiple tracks at once!",
              "hinglish": "Train ek hi track par chalti hai, lekin C ke switch me agar break na lagao toh execution neeche ke saare cases me girta chala jata hai (fall-through).",
              "hi": "स्विच में break न लगाने पर नियंत्रण नीचे के सभी मामलों में प्रवेश कर जाता है।"
            }
          },
          "terminology": [
            {
              "term": "Branching",
              "definition": {
                "en": "Diverting execution flow to a non-sequential instruction based on a condition.",
                "hinglish": "Condition ke hisaab se code ke flow ko kisi doosre block me bhejna.",
                "hi": "शर्त के आधार पर निष्पादन प्रवाह को मोड़ना।"
              }
            },
            {
              "term": "Fall-through",
              "definition": {
                "en": "Unintended sequential execution of subsequent switch cases when break is omitted.",
                "hinglish": "switch statement me break na lagane par agle cases ka apne aap chal jana.",
                "hi": "स्विच केस में break छूटने पर अगले केस का निष्पादन।"
              }
            },
            {
              "term": "Ternary Operator",
              "definition": {
                "en": "Compact inline conditional operator: (condition) ? value_if_true : value_if_false.",
                "hinglish": "Ek line ka if-else jo ? aur : use karta hai.",
                "hi": "एक-पंक्ति सशर्त ऑपरेटर (? :)।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "control-flow",
            "code": "switch (choice) {\n    case 1: printf(\"Deposit\\n\"); break;\n    case 2: printf(\"Withdraw\\n\"); break;\n    default: printf(\"Invalid Choice\\n\");\n}"
          },
          "underlyingPrinciple": {
            "en": "Branch Prediction and Jump Instructions: At the CPU level, if/else compiles into conditional branch opcodes (JZ, JNZ) that inspect the CPU Zero Flag (ZF).",
            "hinglish": "CPU level par if/else JNZ (Jump if Not Zero) aur JZ (Jump if Zero) machine instructions me convert hote hain.",
            "hi": "सीपीयू स्तर पर सशर्त कूद (Conditional Jump) निर्देश निष्पादित होते हैं।"
          },
          "formulaLogic": {
            "formula": "\\text{Ternary: } \\text{result} = (\\text{condition}) \\ ? \\ \\text{expr}_1 : \\text{expr}_2",
            "description": {
              "en": "Inline conditional expression evaluating expr1 if true, else expr2.",
              "hinglish": "Ek line me condition check karke value assign karne ka formula.",
              "hi": "सशर्त व्यंजक का मूल्यांकन सूत्र।"
            },
            "symbols": [
              {
                "symbol": "condition",
                "meaning": "Boolean test (0 = false, non-zero = true)",
                "unit": "boolean"
              },
              {
                "symbol": "expr_1",
                "meaning": "Evaluated only when condition is true",
                "unit": "expression"
              },
              {
                "symbol": "expr_2",
                "meaning": "Evaluated only when condition is false",
                "unit": "expression"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Write a C snippet to classify student grades: >=90 (A), >=80 (B), >=70 (C), >=60 (D), else (Fail). What happens if someone passes marks = 85?",
              "hinglish": "Student marks classification ka code likho aur marks = 85 par execution trace karo.",
              "hi": "छात्र के अंकों का वर्गीकरण करने वाले कोड का निष्पादन समझाइए यदि अंक 85 हों।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Test first condition (marks >= 90)",
                "explanation": {
                  "en": "Condition 85 >= 90 evaluates to 0 (false). The CPU skips the body of if and advances to the first else if.",
                  "hinglish": "Pehle 85 >= 90 check hua jo false (0) hai, isliye CPU pehle block ko skip karta hai.",
                  "hi": "85 >= 90 असत्य है, अतः नियंत्रण अगले else if पर जाता है।"
                },
                "math": "85 \\ge 90 \\implies \\text{False (0)}"
              },
              {
                "stepNumber": 2,
                "title": "Test second condition (marks >= 80)",
                "explanation": {
                  "en": "Condition 85 >= 80 evaluates to 1 (true). The CPU enters this block and assigns Grade = B.",
                  "hinglish": "85 >= 80 true (1) nikalta hai, isliye Grade B assign ho jata hai.",
                  "hi": "85 >= 80 सत्य है, अतः ग्रेड बी निर्धारित होता है।"
                },
                "math": "85 \\ge 80 \\implies \\text{True (1)}"
              },
              {
                "stepNumber": 3,
                "title": "Bypassing remaining else-if branches",
                "explanation": {
                  "en": "Because an else-if ladder is mutually exclusive, once a branch executes, all subsequent else if and else blocks are immediately bypassed.",
                  "hinglish": "Jaise hi ek condition match ho jati hai, baaki ke saare else if blocks skip ho jaate hain.",
                  "hi": "एक शर्त पूरी होते ही शेष सभी ब्लॉक छोड़ दिए जाते हैं।"
                },
                "math": "\\text{Skip remaining branches and exit ladder}"
              }
            ],
            "finalAnswer": "Marks = 85 evaluates to Grade B; subsequent tests are skipped."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Writing if (x = 5) instead of if (x == 5).",
                "hinglish": "if condition me == ki jagah single = likh dena.",
                "hi": "समानता जांचने के लिए == के स्थान पर = लिखना।"
              },
              "correction": {
                "en": "Single = is assignment, not comparison! if (x = 5) assigns 5 to x, and because 5 is non-zero, the condition is ALWAYS TRUE, regardless of what x was before. Comparison requires double equals ==.",
                "hinglish": "Single = assignment karta hai comparison nahi. if (x = 5) hamesha true ho jayega kyunki 5 non-zero hai. Comparison ke liye hamesha == lagao.",
                "hi": "सिंगल = मान असाइन करता है; तुलना के लिए == अनिवार्य है।"
              }
            },
            {
              "misconception": {
                "en": "Forgetting the break statement inside switch cases.",
                "hinglish": "switch case ke andar break statement lagana bhool jana.",
                "hi": "स्विच केस में break लगाना भूलना।"
              },
              "correction": {
                "en": "Without break, execution falls through and executes all subsequent case statements until the end of the switch block.",
                "hinglish": "Bina break ke C agle saare cases ko bina condition check kiye execute kar deta hai.",
                "hi": "break के बिना नियंत्रण नीचे के सभी केस निष्पादित कर देता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u2-l1-p1",
              "question": {
                "en": "What will be printed by: int x = 2; switch(x) { case 1: printf(\"A\"); case 2: printf(\"B\"); case 3: printf(\"C\"); break; default: printf(\"D\"); }",
                "hinglish": "Is code ka output kya aayega: int x = 2; switch(x) { case 1: printf(\"A\"); case 2: printf(\"B\"); case 3: printf(\"C\"); break; }",
                "hi": "दिए गए कोड का आउटपुट क्या होगा?"
              },
              "hint": {
                "en": "Notice there is no break statement after case 2!",
                "hinglish": "Case 2 ke baad break nahi hai, isliye fall-through hoga.",
                "hi": "केस 2 के बाद break नहीं है।"
              },
              "explanation": {
                "en": "x matches case 2, printing \"B\". Because case 2 lacks a break, execution falls through into case 3, printing \"C\". Case 3 has a break, halting the switch. Final output: \"BC\".",
                "hinglish": "Case 2 match hua aur B print hua. Break na hone se Case 3 bhi chal gaya aur C print hua. Output: BC.",
                "hi": "केस 2 में break न होने से फॉल-थ्रू होकर आउटपुट BC मिलता है।"
              },
              "correctAnswer": 2,
              "level": "Beginner",
              "options": [
                "A",
                "B",
                "BC",
                "ABC"
              ],
              "correctIndex": 2
            }
          ],
          "summary": {
            "en": [
              "if-else statements evaluate boolean expressions (0 = false, non-zero = true).",
              "switch statements test a discrete integer or char expression against constant case labels.",
              "break is required in switch cases to prevent unintended fall-through execution.",
              "Ternary operator ?: provides compact conditional value assignment."
            ],
            "hinglish": [
              "if-else boolean check karta hai (0 false, non-zero true).",
              "switch statements sirf constant int ya char values par kaam karti hain.",
              "switch me fall-through rokne ke liye break lagana zaroori hai.",
              "Ternary operator ?: ek line me if-else likhne ka shortcut hai."
            ],
            "hi": [
              "if-else बूलियन व्यंजक का परीक्षण करता है।",
              "switch केवल पूर्णांक या वर्ण स्थिरांक पर कार्य करता है।",
              "फॉल-थ्रू रोकने के लिए break आवश्यक है।",
              "टर्नरी ऑपरेटर एक-पंक्ति सशर्त असाइनमेंट प्रदान करता है।"
            ]
          },
          "quiz": [
            {
              "id": "c-u2-l1-q1",
              "question": {
                "en": "What data types are strictly NOT permitted as the switch expression in standard C?",
                "hinglish": "C language me switch expression me kaun sa data type allowed nahi hai?",
                "hi": "सी में स्विच व्यंजक के रूप में कौन सा डेटा प्रकार मान्य नहीं है?"
              },
              "options": [
                "int",
                "char",
                "float and double",
                "short"
              ],
              "correctIndex": 2,
              "hint": {
                "en": "Floating point numbers cannot be compared for exact bitwise equality reliably in a jump table.",
                "hinglish": "Decimals ko switch me use nahi kar sakte.",
                "hi": "दशमलव संख्याएं मान्य नहीं हैं।"
              },
              "explanation": {
                "en": "Standard C restricts switch controlling expressions strictly to integral types (int, char, enum, short, long). Floating point types (float, double) are not allowed.",
                "hinglish": "switch sirf integral types (int, char) support karta hai, float aur double allowed nahi hain.",
                "hi": "स्विच में float और double का प्रयोग प्रतिबंधित है।"
              }
            }
          ]
        },
        {
          "id": "c-u2-l2",
          "unitId": "c-u2",
          "subjectId": "c-programming",
          "title": "Loops and Iteration: while, do-while, for & Jump Statements",
          "durationMinutes": 30,
          "difficulty": "Beginner",
          "prerequisites": [
            "Increment/decrement operators",
            "Boolean relational logic"
          ],
          "realLifeQuestion": {
            "en": "How does an MP3 music player repeat a playlist of 500 songs without writing 500 duplicate blocks of audio code?",
            "hinglish": "Music player 500 gaano ki playlist ko bina 500 baar code copy-paste kiye baar-baar kaise play karta hai?",
            "hi": "म्यूजिक प्लेयर 500 गानों की प्लेलिस्ट को बार-बार कैसे चलाता है?"
          },
          "simpleExplanation": {
            "en": "Iteration structures (loops) repeat a block of code until a terminating condition evaluates to false. C provides three loops: (1) while loop tests condition at the entry (may execute 0 times), (2) for loop packages initialization, test condition, and step increment in a single compact line, and (3) do-while loop tests the condition at the exit, guaranteeing the loop body runs AT LEAST ONCE regardless of the initial condition. The break statement immediately aborts the loop, while continue skips the remainder of the current iteration and jumps directly to the next loop step.",
            "hinglish": "Loops ek hi code ko tab tak baar-baar chalate hain jab tak condition false na ho jaye. (1) while loop pehle condition check karta hai (agar shuru me hi false ho toh 0 baar chalega), (2) for loop initialization, condition aur increment ko ek hi line me compact kar deta hai, aur (3) do-while loop condition aakhiri me check karta hai, isliye ye KAM SE KAM EK BAAR zaroor chalta hai.",
            "hi": "लूप किसी कोड को बार-बार निष्पादित करते हैं। while पहले शर्त जांचता है; do-while अंत में जांचता है और कम से कम एक बार अवश्य चलता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of a while loop as entering a movie theater: the security guard checks your ticket BEFORE letting you in (entry-controlled). A do-while loop is like an all-you-can-eat restaurant that bills you when you leave: you get to eat at least one meal before anyone checks your payment.",
              "hinglish": "while loop cinema hall ki tarah hai: pehle ticket check hogi fir entry milegi. do-while restaurant ki tarah hai: pehle khana khao, bill aakhiri me check hoga (ek baar khana pakka milega).",
              "hi": "while सिनेमा हॉल की तरह है (प्रवेश पर टिकट जांच) और do-while रेस्तरां की तरह (निकास पर बिल)।"
            },
            "limitations": {
              "en": "If you never want to eat, you shouldn't enter the restaurant; using do-while when input validation might already be valid can cause unnecessary executions.",
              "hinglish": "do-while hamesha ek baar chalega chahe condition shuru me hi galat kyu na ho.",
              "hi": "do-while शर्त गलत होने पर भी एक बार अवश्य चलेगा।"
            }
          },
          "terminology": [
            {
              "term": "Entry-Controlled Loop",
              "definition": {
                "en": "A loop where the condition is tested before executing the body (while, for).",
                "hinglish": "Aisa loop jisme pehle condition check hoti hai.",
                "hi": "प्रवेश-नियंत्रित लूप।"
              }
            },
            {
              "term": "Exit-Controlled Loop",
              "definition": {
                "en": "A loop where the body is executed first and the condition is tested at the end (do-while).",
                "hinglish": "Aisa loop jisme pehle code chalta hai aur aakhiri me condition check hoti hai.",
                "hi": "निकास-नियंत्रित लूप।"
              }
            },
            {
              "term": "Infinite Loop",
              "definition": {
                "en": "A loop whose termination condition never becomes false, consuming CPU endlessly.",
                "hinglish": "Aisa loop jo kabhi rukta nahi aur continuously chalta rehta hai.",
                "hi": "अनंत लूप जिसका अंत नहीं होता।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "loop-animation",
            "forLoop": "for (int i = 0; i < 5; i++) { printf(\"%d \", i); }"
          },
          "underlyingPrinciple": {
            "en": "Register Counters and Conditional Jumps: The for loop counter is maintained in a CPU register (like ECX or EDX) and decremented/incremented with a single assembly instruction.",
            "hinglish": "for loop counter ko CPU ek hardware register me rakhta hai aur INC/DEC instructions se update karta hai.",
            "hi": "लूप काउंटर को सीपीयू रजिस्टर में रखकर तेजी से अपडेट किया जाता है।"
          },
          "formulaLogic": {
            "formula": "\\text{for (init; condition; update)} \\quad \\iff \\quad \\text{init; while(condition) \\{ body; update; \\}}",
            "description": {
              "en": "Equivalence between the standard for-loop and while-loop structures.",
              "hinglish": "for loop aur while loop ka aapsi equivalence.",
              "hi": "for और while लूप की तुल्यता।"
            },
            "symbols": [
              {
                "symbol": "init",
                "meaning": "Executed exactly once before loop begins",
                "unit": "statement"
              },
              {
                "symbol": "condition",
                "meaning": "Tested before each iteration",
                "unit": "boolean"
              },
              {
                "symbol": "update",
                "meaning": "Executed after each iteration body completes",
                "unit": "statement"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Trace the value of sum and i in the loop: int sum = 0; for (int i = 1; i <= 4; i++) { if (i == 3) continue; sum += i; }",
              "hinglish": "Loop trace karo: i=3 par continue aane par sum aur i ki value kya hogi?",
              "hi": "दिए गए लूप में sum और i के मान का प्रत्येक चरण में अनुरेखण कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Iteration i = 1",
                "explanation": {
                  "en": "i = 1 <= 4 (true). i == 3 is false. sum += 1 => sum = 1. Update i++ => i = 2.",
                  "hinglish": "i=1: condition true, sum = 0 + 1 = 1. i badh kar 2 ho gaya.",
                  "hi": "i=1: sum = 1; i का मान 2 हो गया।"
                },
                "math": "i = 1: \\quad \\text{sum} = 0 + 1 = 1"
              },
              {
                "stepNumber": 2,
                "title": "Iteration i = 2",
                "explanation": {
                  "en": "i = 2 <= 4 (true). i == 3 is false. sum += 2 => sum = 1 + 2 = 3. Update i++ => i = 3.",
                  "hinglish": "i=2: condition true, sum = 1 + 2 = 3. i badh kar 3 ho gaya.",
                  "hi": "i=2: sum = 1 + 2 = 3; i का मान 3 हो गया।"
                },
                "math": "i = 2: \\quad \\text{sum} = 1 + 2 = 3"
              },
              {
                "stepNumber": 3,
                "title": "Iteration i = 3 (continue triggered)",
                "explanation": {
                  "en": "i = 3 <= 4 (true). i == 3 is TRUE! The continue statement triggers immediately, SKIPPING sum += i. Control jumps directly to update step i++ => i = 4. sum remains 3.",
                  "hinglish": "i=3: continue chal gaya! sum += i skip ho gaya, sum 3 hi raha aur i badh kar 4 ho gaya.",
                  "hi": "i=3: continue के कारण जोड़ छोड़ दिया गया; sum = 3 ही रहा और i = 4 हुआ।"
                },
                "math": "i = 3: \\quad \\text{continue skips sum; sum remains 3, } i \\to 4"
              },
              {
                "stepNumber": 4,
                "title": "Iteration i = 4 and loop termination",
                "explanation": {
                  "en": "i = 4 <= 4 (true). i == 3 is false. sum += 4 => sum = 3 + 4 = 7. Update i++ => i = 5. Now 5 <= 4 is FALSE. Loop terminates.",
                  "hinglish": "i=4: sum = 3 + 4 = 7. i=5 hone par loop band ho gaya.",
                  "hi": "i=4: sum = 3 + 4 = 7; i=5 पर लूप समाप्त हो गया।"
                },
                "math": "i = 4: \\quad \\text{sum} = 3 + 4 = 7. \\quad i = 5 \\implies \\text{terminate}"
              }
            ],
            "finalAnswer": "Final sum = 7, and final i = 5 outside the loop (iteration 3 was skipped)."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Putting a semicolon right after a for or while header: for (int i=0; i<10; i++);",
                "hinglish": "for loop ya while ke aage galti se semicolon lagana: for (int i=0; i<10; i++);",
                "hi": "लूप हेडर के तुरंत बाद सेमीकोलन लगाना।"
              },
              "correction": {
                "en": "A semicolon immediately after the loop header creates an empty loop body. The loop spins 10 times doing nothing, and then the following curly block executes only ONCE.",
                "hinglish": "Semicolon lagane se loop ka body khali ban jata hai. Loop 10 baar hawa me chal kar khatam ho jayega aur bracket wala code sirf 1 baar chalega.",
                "hi": "सेमीकोलन लगाने से लूप का शरीर रिक्त हो जाता है और ब्लॉक केवल एक बार चलता है।"
              }
            },
            {
              "misconception": {
                "en": "Confusing break with continue.",
                "hinglish": "break aur continue ko ek jaisa samajhna.",
                "hi": "break और continue में भ्रमित होना।"
              },
              "correction": {
                "en": "break completely exits and terminates the entire loop forever. continue only skips the remaining lines of the CURRENT iteration and advances to the next loop cycle.",
                "hinglish": "break pure loop ko hamesha ke liye band kar deta hai. continue sirf current chakkar ko skip karke agle chakkar par jump karta hai.",
                "hi": "break पूरे लूप को समाप्त करता है जबकि continue केवल वर्तमान पुनरावृत्ति को छोड़ता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u2-l2-p1",
              "question": {
                "en": "What is the minimum number of times the body of a do-while loop will execute?",
                "hinglish": "do-while loop ka body kam se kam kitni baar chalega?",
                "hi": "do-while लूप का शरीर न्यूनतम कितनी बार निष्पादित होगा?"
              },
              "hint": {
                "en": "It is an exit-controlled loop, testing the condition at the bottom.",
                "hinglish": "Condition aakhiri me check hoti hai.",
                "hi": "शर्त अंत में जांची जाती है।"
              },
              "explanation": {
                "en": "Because do-while checks its boolean condition at the exit point, the loop body is guaranteed to execute at least 1 time, even if the condition is false initially.",
                "hinglish": "do-while kam se kam 1 baar zaroor chalta hai kyunki condition aakhiri me check hoti hai.",
                "hi": "do-while शर्त असत्य होने पर भी कम से कम 1 बार अवश्य चलता है।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "0",
                "1",
                "Infinite loop",
                "Compilation error"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "while is an entry-controlled loop (can execute 0 times).",
              "for loop organizes initialization, condition, and increment in one clean statement.",
              "do-while is an exit-controlled loop guaranteed to execute at least once.",
              "break exits the entire loop immediately; continue skips to the next iteration."
            ],
            "hinglish": [
              "while loop pehle condition check karta hai (0 baar bhi chal sakta hai).",
              "for loop init, condition aur update ko ek saath rakhta hai.",
              "do-while kam se kam 1 baar zaroor chalta hai.",
              "break loop ko khatam karta hai; continue agle chakkar par le jata hai."
            ],
            "hi": [
              "while प्रवेश-नियंत्रित लूप है (0 बार भी चल सकता है)।",
              "for लूप सभी नियंत्रणों को एक ही पंक्ति में व्यवस्थित करता है।",
              "do-while कम से कम 1 बार निष्पादित होता है।",
              "break लूप समाप्त करता है और continue अगली पुनरावृत्ति पर जाता है।"
            ]
          },
          "quiz": [
            {
              "id": "c-u2-l2-q1",
              "question": {
                "en": "What is the effect of writing for ( ; ; ) in C?",
                "hinglish": "C language me for ( ; ; ) likhne se kya hota hai?",
                "hi": "सी में for ( ; ; ) लिखने का क्या परिणाम होता है?"
              },
              "options": [
                "Syntax error",
                "Executes 0 times",
                "Creates an infinite loop",
                "Terminates the program"
              ],
              "correctIndex": 2,
              "hint": {
                "en": "An omitted test condition in a for loop defaults to true.",
                "hinglish": "Khali condition hamesha true maani jaati hai.",
                "hi": "खाली शर्त को सत्य माना जाता है।"
              },
              "explanation": {
                "en": "In C, omitting the condition in a for loop defaults to non-zero (true), resulting in a standard idiom for an intentional infinite loop.",
                "hinglish": "for (;;) ka matlab hota hai infinite loop chalana.",
                "hi": "for ( ; ; ) एक अनंत लूप का निर्माण करता है।"
              }
            }
          ]
        },
        {
          "id": "c-u2-l3",
          "unitId": "c-u2",
          "subjectId": "c-programming",
          "title": "Functions, Pass-by-Value, Recursion & Storage Classes",
          "durationMinutes": 35,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Basic loops and variables",
            "Memory call stack concept"
          ],
          "realLifeQuestion": {
            "en": "Why doesn’t a swap(a, b) function swap the original numbers in main(), and how does factorial(n) calculate without using any loops?",
            "hinglish": "swap(a, b) function main() ke asli variables ko swap kyu nahi kar pata, aur factorial(n) bina kisi loop ke answer kaise nikal leta hai?",
            "hi": "swap(a, b) फंक्शन मूल चरों को क्यों नहीं बदल पाता, और रिकर्शन बिना लूप के कैसे कार्य करता है?"
          },
          "simpleExplanation": {
            "en": "Functions divide large programs into modular, reusable blocks. In C, all arguments are passed strictly by value: the calling function copies the values into brand new local variables in the called function stack frame. Modifying formal parameters inside the function has zero effect on the original variables in main(). To modify originals, we must pass memory addresses (pointers). Recursion occurs when a function calls itself, breaking a problem into smaller identical sub-problems until reaching a base case. Storage classes (auto, register, static, extern) govern where a variable is stored in RAM, its initial default value, scope (visibility), and lifetime across function calls.",
            "hinglish": "Functions program ko chote reusable hisso me baante hain. C me parameter passing Call by Value hoti hai: main() se bheje gaye numbers ki ek copy ban kar function ke stack me jati hai. Function ke andar change karne par main() ke variables par koi asar nahi hota. Recursion me function khud ko baar-baar call karta hai jab tak Base Case na aa jaye. Storage classes (auto, register, static, extern) tay karti hain ki variable RAM me kahan rahega aur kitni der tak zinda rahega.",
            "hi": "सी में सभी तर्क मान द्वारा (Call by Value) भेजे जाते हैं जिससे मूल चर सुरक्षित रहते हैं। रिकर्शन में फंक्शन स्वयं को कॉल करता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Passing by value is like photocopying your homework and giving the copy to a classmate. If they scribble or erase something on their copy, your original homework sheet at home remains completely untouched!",
              "hinglish": "Call by value photocopy ki tarah hai: aapne dost ko assignment ki photocopy di. Wo us photocopy par kuch bhi likhe ya kaate, aapke ghar rakhi original notebook safe rehti hai.",
              "hi": "कॉल बाई वैल्यू फोटोकॉपी देने की तरह है; कॉपी पर कुछ बदलने से मूल प्रति नहीं बदलती।"
            },
            "limitations": {
              "en": "Photocopying is cheap for a few integers, but copying large arrays or structures wastes memory; that is why C passes arrays by pointer address instead.",
              "hinglish": "Chote numbers ki copy banana aasan hai, par bade data ko copy karne se memory waste hoti hai.",
              "hi": "बड़ी संरचनाओं की प्रतिलिपि बनाने से मेमोरी व्यर्थ होती है।"
            }
          },
          "terminology": [
            {
              "term": "Call by Value",
              "definition": {
                "en": "Parameter passing mechanism where a copy of actual argument values is passed into formal parameters.",
                "hinglish": "Asli variables ki copy bana kar function ko bhejna.",
                "hi": "मान द्वारा कॉल विधि।"
              }
            },
            {
              "term": "Recursion",
              "definition": {
                "en": "A programming technique where a function calls itself to solve smaller subproblems.",
                "hinglish": "Function ka khud ko call karna.",
                "hi": "फंक्शन द्वारा स्वयं को कॉल करना।"
              }
            },
            {
              "term": "Base Case",
              "definition": {
                "en": "The terminating condition in a recursive function that halts further recursion without making another call.",
                "hinglish": "Recursion ko rokne wali aakhiri condition.",
                "hi": "रिकर्शन को रोकने वाली आधार शर्त।"
              }
            },
            {
              "term": "Static Variable",
              "definition": {
                "en": "A local variable that retains its value across multiple function calls throughout program lifetime.",
                "hinglish": "Aisa local variable jo function khatam hone ke baad bhi apni value yaad rakhta hai.",
                "hi": "स्थिर चर जो प्रोग्राम समाप्ति तक मान बनाए रखता है।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "call-stack",
            "function": "factorial(3)",
            "stackFrames": [
              "factorial(1) -> 1",
              "factorial(2) -> 2 * 1",
              "factorial(3) -> 3 * 2",
              "main()"
            ]
          },
          "underlyingPrinciple": {
            "en": "Call Stack Frame Allocation: Each function invocation pushes an activation record (stack frame) containing return address, local variables, and parameters onto the CPU call stack.",
            "hinglish": "Jab bhi function call hota hai, RAM ke Stack section me ek naya frame banta hai jisme uske local variables store hote hain.",
            "hi": "प्रत्येक फंक्शन कॉल के लिए स्टैक पर एक सक्रियण रिकॉर्ड बनता है।"
          },
          "formulaLogic": {
            "formula": "n! = \\begin{cases} 1 & \\text{if } n = 0 \\text{ or } 1 \\\\ n \\times (n-1)! & \\text{if } n > 1 \\end{cases}",
            "description": {
              "en": "Mathematical recurrence relation for the recursive factorial algorithm.",
              "hinglish": "Factorial function ka recurrence relation formula.",
              "hi": "क्रमगुणित (फ़ैक्टोरियल) का पुनरावर्ती सूत्र।"
            },
            "symbols": [
              {
                "symbol": "n!",
                "meaning": "Factorial of non-negative integer n",
                "unit": "integer"
              },
              {
                "symbol": "n=0, 1",
                "meaning": "Base case preventing infinite stack overflow",
                "unit": "boundary"
              },
              {
                "symbol": "n \\times (n-1)!",
                "meaning": "Recursive leap of faith subproblem",
                "unit": "recurrence"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Trace the stack frames during the recursive evaluation of factorial(3). Show push and pop operations.",
              "hinglish": "factorial(3) ke execution me stack frames kaise push aur pop hote hain step-by-step dikhao.",
              "hi": "factorial(3) के निष्पादन के दौरान स्टैक फ़्रेम के बनने और हटने का अनुरेखण कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Pushing stack frames (Winding phase)",
                "explanation": {
                  "en": "main() calls factorial(3). Frame for factorial(3) pushed (n=3). It calls factorial(2). Frame pushed (n=2). It calls factorial(1). Frame pushed (n=1). Stack depth is now 3.",
                  "hinglish": "main() ne factorial(3) call kiya -> usne factorial(2) call kiya -> usne factorial(1) call kiya. Stack par 3 frames jama ho gaye.",
                  "hi": "स्टैक पर क्रम से factorial(3), factorial(2), और factorial(1) के फ़्रेम जुड़ते हैं।"
                },
                "math": "\\text{Stack: } [\\text{fact}(3) \\to \\text{fact}(2) \\to \\text{fact}(1)]"
              },
              {
                "stepNumber": 2,
                "title": "Base case reached",
                "explanation": {
                  "en": "In factorial(1), n <= 1 is TRUE. It does not make any further calls; it immediately returns 1 and its frame is popped from the stack.",
                  "hinglish": "n=1 par base case hit hua aur usne 1 return kiya. factorial(1) ka frame stack se hat gaya.",
                  "hi": "n=1 पर आधार शर्त पूरी हुई और 1 वापस लौटकर फ़्रेम समाप्त हुआ।"
                },
                "math": "\\text{fact}(1) = 1 \\implies \\text{pop frame}"
              },
              {
                "stepNumber": 3,
                "title": "Unwinding and popping stack frames",
                "explanation": {
                  "en": "factorial(2) receives 1, calculates 2 * 1 = 2, returns 2 and pops. factorial(3) receives 2, calculates 3 * 2 = 6, returns 6 to main() and pops.",
                  "hinglish": "factorial(2) ne 2*1=2 return kiya, fir factorial(3) ne 3*2=6 return kiya main() ko.",
                  "hi": "factorial(2) ने 2 और factorial(3) ने 6 का मान लौटाया।"
                },
                "math": "\\text{fact}(2) = 2 \\times 1 = 2, \\quad \\text{fact}(3) = 3 \\times 2 = 6"
              }
            ],
            "finalAnswer": "factorial(3) computes strictly to 6 after 3 recursive push operations and 3 unwind pop operations."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Omitting the base case in a recursive function.",
                "hinglish": "Recursive function me base condition lagana bhool jana.",
                "hi": "रिकर्सिव फंक्शन में आधार शर्त न लगाना।"
              },
              "correction": {
                "en": "Without a base case, the function calls itself indefinitely until all RAM allocated for the call stack is consumed, causing a fatal Stack Overflow crash (Segmentation Fault).",
                "hinglish": "Bina base case ke function chalta hi jayega jab tak RAM ka stack bhar na jaye, jisse Stack Overflow crash ho jayega.",
                "hi": "आधार शर्त के बिना स्टैक ओवरफ्लो त्रुटि उत्पन्न होकर प्रोग्राम क्रैश हो जाता है।"
              }
            },
            {
              "misconception": {
                "en": "Assuming a local static variable is re-initialized every time the function is called.",
                "hinglish": "Ye sochna ki static variable har baar function call hone par reset ho jata hai.",
                "hi": "यह सोचना कि static चर प्रत्येक फंक्शन कॉल पर पुनः प्रारंभ होता है।"
              },
              "correction": {
                "en": "A static local variable is initialized exactly ONCE when program loading occurs. Across subsequent function calls, the initialization line is skipped and the variable retains its previous value.",
                "hinglish": "static variable sirf ek baar shuruat me banta hai. Har agle call par wo purani value yaad rakhta hai.",
                "hi": "static चर केवल एक बार प्रारंभ होता है और कॉल के मध्य मान बनाए रखता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u2-l3-p1",
              "question": {
                "en": "Where are local variables declared with the default auto storage class physically stored?",
                "hinglish": "Default auto local variables computer ki memory me kahan store hote hain?",
                "hi": "डिफ़ॉल्ट auto स्थानीय चर मेमोरी में कहाँ संग्रहीत होते हैं?"
              },
              "hint": {
                "en": "They live in temporary function activation frames.",
                "hinglish": "Stack memory me.",
                "hi": "स्टैक मेमोरी।"
              },
              "explanation": {
                "en": "auto variables are allocated on the runtime Stack memory and are automatically destroyed when their enclosing function returns.",
                "hinglish": "auto variables Stack memory me store hote hain aur function khatam hote hi destroy ho jaate hain.",
                "hi": "auto चर स्टैक मेमोरी में संग्रहीत होते हैं।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "Heap",
                "Stack",
                "Data Segment",
                "BSS Segment"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "C parameters are passed strictly by value: copies are created in the local stack frame.",
              "Recursion requires a base condition to terminate and unwind stack frames safely.",
              "Storage classes dictate scope, lifetime, default values, and memory placement.",
              "static local variables retain values between consecutive calls; extern enables cross-file variables."
            ],
            "hinglish": [
              "C me parameters Call by Value se pass hote hain (copies banti hain).",
              "Recursion me Stack Overflow se bachne ke liye Base Case zaroori hai.",
              "Storage classes: auto (stack), register (CPU), static (data segment), extern (global).",
              "static variables function call khatam hone ke baad bhi destroy nahi hote."
            ],
            "hi": [
              "सी में तर्क मान द्वारा भेजे जाते हैं।",
              "रिकर्शन के लिए आधार शर्त अनिवार्य है।",
              "स्टोरेज क्लास चर के कार्यक्षेत्र और जीवनकाल को निर्धारित करते हैं।",
              "static चर फंक्शन कॉल के बाद भी अपना मान सुरक्षित रखते हैं।"
            ]
          },
          "quiz": [
            {
              "id": "c-u2-l3-q1",
              "question": {
                "en": "What is the default initial value of an uninitialized static variable in C?",
                "hinglish": "C me uninitialized static variable ki default initial value kya hoti hai?",
                "hi": "सी में अ-प्रारंभीकृत static चर का डिफ़ॉल्ट मान क्या होता है?"
              },
              "options": [
                "Garbage value",
                "0 (Zero)",
                "-1",
                "NULL"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "Unlike auto variables which have garbage values, static variables reside in BSS segment.",
                "hinglish": "Static variables zero se initialize hote hain.",
                "hi": "यह 0 से प्रारंभ होता है।"
              },
              "explanation": {
                "en": "Variables with static or extern storage duration are placed in the BSS/Data segment and are automatically initialized to zero by the runtime loader.",
                "hinglish": "static variables default roop se 0 se initialize hote hain.",
                "hi": "static चरों का डिफ़ॉल्ट प्रारंभिक मान सदैव 0 होता है।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Selection and branching statements (if, if-else, nested if, switch-case), iteration structures (while, do-while, for loops, break, continue, goto), user-defined functions, function prototypes, parameter passing (call by value), recursion mechanics, and storage classes (auto, register, static, extern).",
          "hinglish": "Control Structures, Functions and Storage Classes ka poora one-page revision summary jisme saare core formulas, theorems aur exam problems shamil hain.",
          "hi": "Control Structures, Functions and Storage Classes का संपूर्ण एक-पृष्ठीय पुनरावलोकन सारांश जिसमें सभी प्रमुख सूत्र और प्रमेय सम्मिलित हैं।"
        },
        "shortNotes": [
          {
            "topic": "Pass by Value",
            "content": {
              "en": "Caller passes copies of actual arguments; formal parameters receive copies.",
              "hinglish": "Caller passes copies of actual arguments; formal parameters receive copies.",
              "hi": "Caller passes copies of actual arguments; formal parameters receive copies."
            }
          },
          {
            "topic": "Recursion",
            "content": {
              "en": "Algorithmic technique where a function invokes itself to reduce problem size.",
              "hinglish": "Algorithmic technique where a function invokes itself to reduce problem size.",
              "hi": "Algorithmic technique where a function invokes itself to reduce problem size."
            }
          },
          {
            "topic": "Stack Frame",
            "content": {
              "en": "A block of memory pushed onto the stack containing function arguments and locals.",
              "hinglish": "A block of memory pushed onto the stack containing function arguments and locals.",
              "hi": "A block of memory pushed onto the stack containing function arguments and locals."
            }
          },
          {
            "topic": "Storage Class",
            "content": {
              "en": "A specifier defining the scope, visibility, initial value, and lifetime of a variable.",
              "hinglish": "A specifier defining the scope, visibility, initial value, and lifetime of a variable.",
              "hi": "A specifier defining the scope, visibility, initial value, and lifetime of a variable."
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Ternary conditional",
            "formula": "result = (cond) ? val1 : val2",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Switch constraint",
            "formula": "controlling expression must evaluate to integer or character",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Recursive relation",
            "formula": "T(n) = a T(n/b) + f(n)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Storage classes matrix",
            "formula": "auto (Stack, Garbage, Local, Block), static (Data Segment, 0, Local, Program), extern (Data Segment, 0, Global, Program)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          }
        ],
        "mindMap": [
          {
            "node": "Control Structures, Functions and Storage Classes",
            "children": [
              "Selection statements: Simple if, if-else, nested if, and else-if ladder",
              "Multi-way decision making: switch statement, case labels, break statement, and default",
              "Ternary conditional operator (? :) syntax and evaluation",
              "Iteration structures: entry-controlled loops (while, for) vs exit-controlled loops (do-while)",
              "Loop control jumps: break, continue, and goto (and why goto is discouraged)",
              "Functions: Modularity, function declaration (prototype), definition, and function call",
              "Parameter passing: Call by value and actual vs formal parameters",
              "Recursion: Recursive function structure, base case termination, and call stack frames",
              "Storage Classes: auto, register, static, and extern (scope, lifetime, default initial value, and storage location)"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Correct Understanding #1",
            "conceptB": "Common Student Pitfall #1",
            "comparisonPoints": [
              {
                "feature": "Key Concept",
                "a": "Follow established laws strictly",
                "b": "Forgetting break in switch statements causing fall-through."
              }
            ]
          },
          {
            "conceptA": "Correct Understanding #2",
            "conceptB": "Common Student Pitfall #2",
            "comparisonPoints": [
              {
                "feature": "Key Concept",
                "a": "Follow established laws strictly",
                "b": "Missing base case in recursion causing stack overflow crashes."
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "Storage Classes",
            "back": "ARSE (Auto, Register, Static, Extern)"
          },
          {
            "front": "Loop Components",
            "back": "ICU (Initialization, Condition, Update)"
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Why does pass-by-value fail to swap two numbers in a void swap(int a, int b) function?",
            "answer": "The function receives independent copies of the caller arguments in its own stack frame. Swapping the copies modifies only the local frame and leaves the caller variables in main() unchanged."
          },
          {
            "question": "What is the fundamental difference between while and do-while loops?",
            "answer": "while is an entry-controlled loop that tests its condition before executing (minimum executions = 0), whereas do-while is an exit-controlled loop that tests at the bottom (guaranteeing at least 1 execution)."
          }
        ]
      }
    },
    {
      "id": "c-u3",
      "unitNumber": "Unit III",
      "title": "Arrays, Searching, Sorting and Preprocessors",
      "description": "Preprocessor directives, macro expansion (#define, #include, conditional compilation), 1D and 2D array memory representation (Row-major order), array passing to functions, matrix arithmetic, linear search, binary search, bubble sort, selection sort, and insertion sort.",
      "topics": [
        "Preprocessor Directives: #include, #define (macros with and without arguments), and macro hazards",
        "Conditional compilation directives: #if, #else, #elif, #ifdef, #ifndef, #endif",
        "One-dimensional arrays: Declaration, initialization, memory mapping, and subscript indexing",
        "Array traversal and bounds safety in C",
        "Passing arrays to functions: Decay to pointer and passing array size",
        "Two-dimensional arrays: Declaration, row-major memory layout, and 2D index calculation formula",
        "Matrix operations: Matrix addition, subtraction, and matrix multiplication algorithms",
        "Linear Search algorithm: Mechanism, best case O(1), and worst case O(n)",
        "Binary Search algorithm: Divide-and-conquer strategy, prerequisites, and logarithmic complexity O(log n)",
        "Sorting algorithms: Bubble Sort, Selection Sort, and Insertion Sort tracing"
      ],
      "lessons": [
        {
          "id": "c-u3-l1",
          "unitId": "c-u3",
          "subjectId": "c-programming",
          "title": "Preprocessor Directives, Macro Traps & Conditional Compilation",
          "durationMinutes": 25,
          "difficulty": "Beginner",
          "prerequisites": [
            "Basic C compilation knowledge",
            "Functions"
          ],
          "realLifeQuestion": {
            "en": "Why does #define SQUARE(x) x * x produce 11 when you write SQUARE(3 + 2) instead of 25, and how does game code adapt between Windows and Android automatically?",
            "hinglish": "#define SQUARE(x) x * x likhne par SQUARE(3 + 2) ka answer 25 ke badle 11 kyu aata hai, aur game engine ka ek hi C code Windows aur Android dono ke liye alag-alag kaise compile ho jata hai?",
            "hi": "SQUARE(3 + 2) का मान 25 के स्थान पर 11 क्यों आता है, और कंडीशनल कंपाइलेशन विभिन्न ओएस हेतु कोड कैसे अनुकूलित करता है?"
          },
          "simpleExplanation": {
            "en": "The C preprocessor is a text-replacement tool that operates before compilation starts. It does not parse syntax or understand types; it performs literal string substitutions. When you write #define SQUARE(x) x * x, calling SQUARE(3 + 2) literally expands to 3 + 2 * 3 + 2. Because multiplication * has higher precedence than +, it evaluates as 3 + 6 + 2 = 11! To make it safe, you must always wrap parameters in parentheses: #define SQUARE(x) ((x) * (x)). Conditional compilation (#ifdef, #ifndef, #endif) allows sections of code to be compiled or omitted based on build flags, enabling cross-platform portability and header-guard protection.",
            "hinglish": "Preprocessor compiler se pehle chalne wala plain text replacement tool hai. Ye maths ya data types nahi samajhta, bas text copy-paste karta hai. #define SQUARE(x) x * x likhne par SQUARE(3 + 2) text ban jata hai 3 + 2 * 3 + 2, jisme 2*3=6 pehle calculate ho jata hai aur answer 11 ban jata hai! Isliye hamesha parentheses lagane chahiye: ((x) * (x)). Conditional compilation (#ifdef) se hum ek hi code me alag platforms (Windows/Linux) ke hisaab se specific code compile karwa sakte hain.",
            "hi": "प्रीप्रोसेसर संकलन से पूर्व टेक्स्ट प्रतिस्थापन करता है। मैक्रोज़ में कोष्ठक न लगाने पर ऑपरेटर प्राथमिकता के कारण अप्रत्याशित परिणाम मिलते हैं।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "A macro is like using Microsoft Word's \"Find and Replace\" before handing an essay to a teacher. If you find \"cat\" and replace with \"dog\", the word \"catalog\" becomes \"dogalog\" without warning! The preprocessor blindly substitutes text without checking context.",
              "hinglish": "Macro MS Word ke \"Find and Replace All\" jaisa hai. Agar aapne \"cat\" ko \"dog\" se replace kiya toh \"catalog\" apne aap \"dogalog\" ban jayega. Preprocessor bina soche samjhe text replace kar deta hai.",
              "hi": "मैक्रो फाइंड और रिप्लेस की तरह है जो संदर्भ समझे बिना टेक्स्ट बदल देता है।"
            },
            "limitations": {
              "en": "Word replaces text visually; the preprocessor also generates symbol tokens, strips comments, and handles include files recursively.",
              "hinglish": "Word sirf text badalta hai, par preprocessor files ko include bhi karta hai aur comments ko bhi hatata hai.",
              "hi": "प्रीप्रोसेसर टिप्पणियों को भी हटाता है और हेडर फाइलों को शामिल करता है।"
            }
          },
          "terminology": [
            {
              "term": "Macro",
              "definition": {
                "en": "A fragment of code defined by #define that is substituted literally by the preprocessor.",
                "hinglish": "#define se banaya gaya text identifier jo preprocessor dwara replace hota hai.",
                "hi": "प्रीप्रोसेसर द्वारा प्रतिस्थापित कोड खंड।"
              }
            },
            {
              "term": "Header Guard",
              "definition": {
                "en": "A preprocessor pattern (#ifndef HEADER_H, #define HEADER_H, #endif) preventing multiple inclusion.",
                "hinglish": "Ek hi header file ko do baar include hone se rokne wali technique.",
                "hi": "हेडर फ़ाइल को दोहराव से बचाने वाली तकनीक।"
              }
            },
            {
              "term": "Conditional Compilation",
              "definition": {
                "en": "Compiling specific code blocks only when designated preprocessor flags are defined (#ifdef).",
                "hinglish": "Kisi specific condition ya OS flag par hi code ko compile karne ka niyam.",
                "hi": "सशर्त संकलन विधि।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "macro-expansion",
            "macroDef": "#define SQUARE(x) ((x) * (x))",
            "expansion": "SQUARE(3 + 2) -> ((3 + 2) * (3 + 2)) -> (5 * 5) = 25"
          },
          "underlyingPrinciple": {
            "en": "Lexical Text Substitution: Preprocessor directives are executed purely at token level without type checking or scope awareness.",
            "hinglish": "Preprocessor bina kisi type checking ke text tokens ko direct replace karta hai.",
            "hi": "लेक्सिकल प्रतिस्थापन: बिना डेटा प्रकार की जांच के सीधे टेक्स्ट बदलना।"
          },
          "formulaLogic": {
            "formula": "\\text{Safe Macro Rule: } \\#\\text{define } M(x) \\quad ((x) \\text{ op } (x))",
            "description": {
              "en": "Parenthesizing every occurrence of argument x and the overall macro expression to prevent precedence leakage.",
              "hinglish": "Macro parameters aur pure expression ko parentheses me wrap karne ka golden rule.",
              "hi": "ऑपरेटर प्राथमिकता से बचाव हेतु कोष्ठक का उपयोग।"
            },
            "symbols": [
              {
                "symbol": "M(x)",
                "meaning": "Function-like macro with argument x",
                "unit": "identifier"
              },
              {
                "symbol": "(x)",
                "meaning": "Isolated argument token",
                "unit": "parentheses"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Demonstrate how Header Guards prevent duplicate type definition errors when math_utils.h is included by multiple source files.",
              "hinglish": "Header Guards kaise duplicate struct/type declaration errors ko rokte hain code ke zariye dikhao.",
              "hi": "हेडर गार्ड्स किस प्रकार हेडर फ़ाइल के एकाधिक समावेशन से होने वाली त्रुटियों को रोकते हैं?"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Write standard Header Guard boilerplate",
                "explanation": {
                  "en": "At the very top of math_utils.h, write: #ifndef MATH_UTILS_H, followed immediately by #define MATH_UTILS_H.",
                  "hinglish": "File ke sabse upar likho: #ifndef MATH_UTILS_H aur uske turant baad #define MATH_UTILS_H.",
                  "hi": "फ़ाइल के शीर्ष पर #ifndef और #define का उपयोग करें।"
                },
                "math": "\\#\\text{ifndef MATH\\_UTILS\\_H} \\implies \\#\\text{define MATH\\_UTILS\\_H}"
              },
              {
                "stepNumber": 2,
                "title": "First inclusion behavior",
                "explanation": {
                  "en": "When file A includes math_utils.h, MATH_UTILS_H is not yet defined. #ifndef evaluates to true, MATH_UTILS_H gets defined, and all types/functions are declared.",
                  "hinglish": "Pehli baar file include hone par MATH_UTILS_H defined nahi hota, isliye pura code compile ho jata hai.",
                  "hi": "प्रथम बार समावेशन पर कोड संकलित हो जाता है।"
                },
                "math": "\\text{First Include: Macro is defined, header body processed}"
              },
              {
                "stepNumber": 3,
                "title": "Second inclusion behavior",
                "explanation": {
                  "en": "When file B also includes math_utils.h in the same compilation unit, MATH_UTILS_H is ALREADY defined. #ifndef evaluates to false, skipping everything until #endif, preventing duplicate definition errors.",
                  "hinglish": "Doosri baar aane par #ifndef false ho jata hai aur file ka saara content skip ho jata hai.",
                  "hi": "द्वितीय समावेशन पर #ifndef असत्य होकर कोड छोड़ दिया जाता है।"
                },
                "math": "\\text{Second Include: Skipped entirely until } \\#\\text{endif}"
              }
            ],
            "finalAnswer": "Header guards ensure header contents are processed exactly once per translation unit."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Putting a semicolon at the end of a #define line: #define PI 3.14159;",
                "hinglish": "#define ke aakhiri me semicolon (;) laga dena: #define PI 3.14159;",
                "hi": "#define के अंत में सेमीकोलन लगाना।"
              },
              "correction": {
                "en": "The preprocessor copies everything literally! Writing #define PI 3.14159; causes float area = PI * r * r; to expand to float area = 3.14159; * r * r;, triggering a syntax error on the stray semicolon.",
                "hinglish": "#define me semicolon lagane se code me float area = 3.14159; * r * r; ban jayega jo compilation error dega.",
                "hi": "सेमीकोलन भी कोड में स्थानांतरित होकर सिंटैक्स त्रुटि उत्पन्न करता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u3-l1-p1",
              "question": {
                "en": "What is the expansion of DOUBLE(5 + 1) if #define DOUBLE(x) x + x?",
                "hinglish": "#define DOUBLE(x) x + x me DOUBLE(5 + 1) kaise expand hoga?",
                "hi": "#define DOUBLE(x) x + x में DOUBLE(5 + 1) का मान क्या होगा?"
              },
              "hint": {
                "en": "Substitute literally: (5 + 1) is not grouped.",
                "hinglish": "5 + 1 + 5 + 1 banega.",
                "hi": "सीधे 5 + 1 + 5 + 1।"
              },
              "explanation": {
                "en": "It expands literally to 5 + 1 + 5 + 1 = 12. If written with parentheses ((x) + (x)), it would evaluate to ((5 + 1) + (5 + 1)) = 12.",
                "hinglish": "Literal expansion: 5 + 1 + 5 + 1 = 12.",
                "hi": "शाब्दिक प्रतिस्थापन: 5 + 1 + 5 + 1 = 12।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "25",
                "12",
                "16",
                "Compilation error"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "#define performs literal textual replacement without types or syntax checking.",
              "Always wrap macro parameters and macro expressions in parentheses: ((x) * (y)).",
              "Header guards (#ifndef, #define, #endif) prevent duplicate type redefinition errors.",
              "Conditional compilation (#ifdef) tailors code for specific hardware platforms."
            ],
            "hinglish": [
              "#define plain text replacement karta hai bina kisi syntax checking ke.",
              "Macro me hamesha parentheses lagao taaki operator precedence na bigde.",
              "Header guards header files ko duplicate include hone se bachate hain.",
              "Conditional compilation se multi-platform code likha jata hai."
            ],
            "hi": [
              "#define टेक्स्ट प्रतिस्थापन करता है।",
              "मैक्रो में सदैव कोष्ठक का उपयोग करें।",
              "हेडर गार्ड्स दोहराव से बचाते हैं।",
              "कंडीशनल कंपाइलेशन विभिन्न प्लेटफॉर्म हेतु उपयोगी है।"
            ]
          },
          "quiz": [
            {
              "id": "c-u3-l1-q1",
              "question": {
                "en": "Which preprocessor directive checks if a macro has NOT been defined previously?",
                "hinglish": "Pehle se macro define na hone ko check karne ke liye kaun si directive use hoti hai?",
                "hi": "यह जांचने के लिए कि मैक्रो पहले परिभाषित नहीं है, किसका उपयोग होता है?"
              },
              "options": [
                "#ifdef",
                "#ifndef",
                "#if",
                "#undef"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "Stands for \"if not defined\".",
                "hinglish": "if not defined.",
                "hi": "इफ़ नॉट डिफ़ाइन्ड।"
              },
              "explanation": {
                "en": "#ifndef stands for \"if not defined\" and is standard for header guards.",
                "hinglish": "#ifndef ka matlab if not defined hota hai.",
                "hi": "#ifndef का अर्थ \"यदि परिभाषित नहीं है\" होता है।"
              }
            }
          ]
        },
        {
          "id": "c-u3-l2",
          "unitId": "c-u3",
          "subjectId": "c-programming",
          "title": "1D & 2D Arrays: Contiguous Memory, Row-Major Order & Matrices",
          "durationMinutes": 35,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Nested loops",
            "Variables and data types"
          ],
          "realLifeQuestion": {
            "en": "How does an image file with 1920x1080 pixels fit into a computer’s single, flat, one-dimensional RAM stick without losing rows and columns?",
            "hinglish": "1920x1080 pixels ki 2D photo computer ki flat 1D RAM me row aur columns khoye bina kaise store hoti hai?",
            "hi": "1920x1080 पिक्सेल की 2D छवि कंप्यूटर की 1D मेमोरी में किस प्रकार संग्रहीत होती है?"
          },
          "simpleExplanation": {
            "en": "Computer memory (RAM) is physically a one-dimensional array of consecutive bytes indexed from 0 to N. To store a multidimensional 2D array matrix[R][C] in flat RAM, C strictly employs Row-Major Order: all elements of Row 0 are stored contiguously in memory, followed immediately by all elements of Row 1, Row 2, and so on. The memory address of any element at row i and column j is computed using the formula: Address = Base_Address + (i * Total_Columns + j) * sizeof(Element). In C, arrays are 0-indexed, and C performs NO bounds checking; accessing arr[10] on a 10-element array reads garbage memory or crashes.",
            "hinglish": "Computer ki RAM physically ek single lambi line (1D) hoti hai. 2D array matrix[R][C] ko RAM me store karne ke liye C Row-Major Order use karta hai: pehle Row 0 ke saare elements aate hain, fir unke theek aage Row 1 ke elements, fir Row 2 ke. Element ka memory address is formula se nikalta hai: Base Address + (i * Total Columns + j) * sizeof(type). C me array indices 0 se shuru hote hain aur C me koi bounds checking nahi hoti; galat index dene par garbage value aayegi ya program crash ho jayega.",
            "hi": "सी में 2D ऐरे को मेमोरी में सहेजने के लिए रो-मेजर क्रम का उपयोग होता है: एड्रेस = बेस एड्रेस + (i * कुल कॉलम + j) * आकार।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of an egg carton with 2 rows and 6 columns (12 eggs). If you lay all 12 eggs out in a single straight line on your kitchen counter, you place the first 6 eggs (Row 0) end to end, and then place the second 6 eggs (Row 1) right after them. That straight line is Row-Major order in RAM.",
              "hinglish": "Jaise 2 rows aur 6 columns wale egg tray ke ando ko table par ek lambi seedhi line me lagana: pehle row 1 ke 6 ande, fir unke theek aage row 2 ke 6 ande. Yahi Row-Major order hai.",
              "hi": "पंक्तियों को एक सीधी रेखा में क्रमबद्ध रखने की तरह रो-मेजर क्रम कार्य करता है।"
            },
            "limitations": {
              "en": "Eggs take identical space; in C, each element takes a specific number of bytes depending on type (int=4B, double=8B).",
              "hinglish": "Har element ka type ke hisaab se memory size alag hota hai.",
              "hi": "प्रत्येक डेटा प्रकार का आकार भिन्न होता है।"
            }
          },
          "terminology": [
            {
              "term": "Row-Major Order",
              "definition": {
                "en": "Memory arrangement where consecutive elements of a row are stored contiguously.",
                "hinglish": "RAM me pehle puri row store karna fir agli row store karna.",
                "hi": "पंक्ति-प्रमुख क्रम।"
              }
            },
            {
              "term": "Base Address",
              "definition": {
                "en": "The physical memory address of the very first element arr[0] or arr[0][0].",
                "hinglish": "Array ke sabse pehle element ka memory address.",
                "hi": "ऐरे के प्रथम तत्व का पता।"
              }
            },
            {
              "term": "Array Decay",
              "definition": {
                "en": "When an array name is passed to a function, it automatically decays into a pointer to its first element.",
                "hinglish": "Function me array pass karne par uska pointer ban jana.",
                "hi": "ऐरे का पॉइंटर में रूपांतरण।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "matrix-memory",
            "rows": 2,
            "cols": 3,
            "matrix": [
              [
                10,
                20,
                30
              ],
              [
                40,
                50,
                60
              ]
            ],
            "flatLayout": [
              "10 (0,0)",
              "20 (0,1)",
              "30 (0,2)",
              "40 (1,0)",
              "50 (1,1)",
              "60 (1,2)"
            ]
          },
          "underlyingPrinciple": {
            "en": "Contiguous Physical Memory Allocation: Elements of an array occupy adjacent physical memory locations, enabling O(1) random access via arithmetic index scaling.",
            "hinglish": "Array ke saare elements RAM me ek dusre se chipak kar rehte hain, jisse index ke formula se kisi bhi element tak instant O(1) time me pahocha ja sakta hai.",
            "hi": "सन्निहित मेमोरी आवंटन: लगातार मेमोरी होने से O(1) समय में सीधा अभिगमन संभव होता है।"
          },
          "formulaLogic": {
            "formula": "\\text{Address}(A[i][j]) = \\text{Base} + (i \\times C + j) \\times S",
            "description": {
              "en": "Address calculation formula for element (i, j) in a 2D array with C columns and element size S.",
              "hinglish": "2D array ke element (i, j) ka physical memory address calculate karne ka formula.",
              "hi": "2D ऐरे के अवयव का भौतिक पता ज्ञात करने का सूत्र।"
            },
            "symbols": [
              {
                "symbol": "Base",
                "meaning": "Memory address of A[0][0]",
                "unit": "bytes (hex address)"
              },
              {
                "symbol": "i",
                "meaning": "Row index (0 to R-1)",
                "unit": "integer"
              },
              {
                "symbol": "C",
                "meaning": "Total number of columns in array",
                "unit": "integer"
              },
              {
                "symbol": "j",
                "meaning": "Column index (0 to C-1)",
                "unit": "integer"
              },
              {
                "symbol": "S",
                "meaning": "sizeof(data_type) in bytes",
                "unit": "bytes"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "An integer array int matrix[3][4] starts at Base Address 2000. Assuming each int takes 4 bytes, find the physical memory address of matrix[2][3].",
              "hinglish": "int matrix[3][4] ka Base Address 2000 hai. int ka size 4 bytes hai. matrix[2][3] ka memory address calculate karo.",
              "hi": "यदि Base = 2000, कुल कॉलम = 4, और int का आकार 4 बाइट्स है, तो matrix[2][3] का पता ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Identify parameters from declaration",
                "explanation": {
                  "en": "Base = 2000, Total columns C = 4, target row i = 2, target column j = 3, element size S = sizeof(int) = 4 bytes.",
                  "hinglish": "Base = 2000, C = 4, i = 2, j = 3, S = 4 bytes.",
                  "hi": "पैरामीटर: Base = 2000, C = 4, i = 2, j = 3, S = 4 बाइट्स।"
                },
                "math": "\\text{Base} = 2000, \\quad C = 4, \\quad i = 2, \\quad j = 3, \\quad S = 4"
              },
              {
                "stepNumber": 2,
                "title": "Calculate offset in elements",
                "explanation": {
                  "en": "Offset = (i * C + j) = (2 * 4 + 3) = 8 + 3 = 11 elements precede matrix[2][3].",
                  "hinglish": "Offset = 2 * 4 + 3 = 11 elements.",
                  "hi": "अवयव ऑफसेट = 2 * 4 + 3 = 11।"
                },
                "math": "\\text{Offset} = (2 \\times 4 + 3) = 11 \\text{ elements}"
              },
              {
                "stepNumber": 3,
                "title": "Compute final byte address",
                "explanation": {
                  "en": "Address = Base + Offset * S = 2000 + 11 * 4 = 2000 + 44 = 2044.",
                  "hinglish": "Address = 2000 + 11 * 4 = 2044.",
                  "hi": "अंतिम पता = 2000 + 11 * 4 = 2044।"
                },
                "math": "\\text{Address} = 2000 + (11 \\times 4) = 2044"
              }
            ],
            "finalAnswer": "The physical memory address of matrix[2][3] is 2044."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Assuming int arr[10]; indices run from 1 to 10.",
                "hinglish": "int arr[10] ke indices 1 se 10 tak maanna.",
                "hi": "ऐरे के इंडेक्स 1 से 10 तक मानना।"
              },
              "correction": {
                "en": "C arrays are strictly 0-indexed. An array of size 10 has valid indices from 0 to 9. Accessing arr[10] is an off-by-one buffer overflow error.",
                "hinglish": "C me array hamesha 0 se 9 tak chalta hai. arr[10] invalid memory access hota hai.",
                "hi": "सी में इंडेक्स 0 से 9 तक होते हैं; arr[10] अमान्य है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u3-l2-p1",
              "question": {
                "en": "How many bytes are allocated in total for double table[4][5] on a system where sizeof(double) = 8?",
                "hinglish": "double table[4][5] kitni total bytes RAM consume karega agar sizeof(double)=8 hai?",
                "hi": "double table[4][5] के लिए कुल कितने बाइट्स आवंटित होंगे?"
              },
              "hint": {
                "en": "Total elements = 4 * 5 = 20 elements. Multiply by 8 bytes.",
                "hinglish": "4 * 5 = 20 elements * 8 bytes.",
                "hi": "20 * 8 बाइट्स।"
              },
              "explanation": {
                "en": "Total elements = 4 * 5 = 20. Total bytes = 20 * 8 = 160 bytes.",
                "hinglish": "Total size = 4 * 5 * 8 = 160 bytes.",
                "hi": "कुल आकार = 4 * 5 * 8 = 160 बाइट्स।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "40",
                "160",
                "80",
                "20"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "Arrays allocate contiguous memory blocks of homogeneous data types.",
              "C strictly uses 0-based indexing and performs NO automated bounds checking.",
              "2D arrays are flattened in RAM using Row-Major Order: Address = Base + (i * C + j) * S.",
              "Passing arrays to functions passes the pointer to the first element (array decay)."
            ],
            "hinglish": [
              "Array contiguous memory me same data type ke elements store karta hai.",
              "C me array index 0 se shuru hota hai aur bounds check nahi hota.",
              "2D array Row-Major order me store hota hai: Address = Base + (i * C + j) * size.",
              "Function me array pass karne par wo pointer ban jata hai."
            ],
            "hi": [
              "ऐरे सन्निहित मेमोरी में समरूप डेटा संग्रहीत करता है।",
              "सी में इंडेक्स 0 से प्रारंभ होता है।",
              "2D ऐरे रो-मेजर क्रम में संग्रहीत होता है।",
              "फंक्शन में ऐरे भेजने पर वह पॉइंटर में बदल जाता है।"
            ]
          },
          "quiz": [
            {
              "id": "c-u3-l2-q1",
              "question": {
                "en": "In C, what is stored at index 0 of an array named arr?",
                "hinglish": "Array arr ke index 0 par kya store hota hai?",
                "hi": "ऐरे arr के इंडेक्स 0 पर क्या होता है?"
              },
              "options": [
                "Size of the array",
                "First element of the array",
                "Address of the array",
                "Null terminator"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "arr[0] accesses the very first value in the array.",
                "hinglish": "Pehla element.",
                "hi": "प्रथम अवयव।"
              },
              "explanation": {
                "en": "arr[0] accesses the first value stored in the array. arr without brackets represents the base memory address.",
                "hinglish": "arr[0] array ka pehla data element hota hai.",
                "hi": "arr[0] ऐरे के पहले तत्व को दर्शाता है।"
              }
            }
          ]
        },
        {
          "id": "c-u3-l3",
          "unitId": "c-u3",
          "subjectId": "c-programming",
          "title": "Searching & Sorting Algorithms: Linear, Binary, Bubble & Insertion",
          "durationMinutes": 40,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Arrays",
            "Loops and swap logic"
          ],
          "realLifeQuestion": {
            "en": "How can a search engine find one word among 1,000,000 dictionary entries in just 20 checks instead of checking all 1,000,000 words one by one?",
            "hinglish": "Ek dictionary me 10,00,000 words me se ek word sirf 20 baar check karke kaise dhoonda ja sakta hai bina 10 lakh words padhe?",
            "hi": "शब्दकोश में 10 लाख शब्दों में से एक शब्द केवल 20 चरणों में कैसे खोजा जा सकता है?"
          },
          "simpleExplanation": {
            "en": "Searching is the algorithmic process of locating a key element in an array. Linear Search scans elements one by one from start to end; it works on unsorted data but requires O(n) time in the worst case. Binary Search requires the array to be SORTED beforehand; by comparing the key with the middle element, it eliminates half the remaining array in every step (Divide and Conquer), finding any item among 1,000,000 in at most log2(1,000,000) ≈ 20 comparisons! Sorting arranges elements in ascending or descending order. Bubble Sort repeatedly swaps adjacent out-of-order elements (sinking the largest to the end), Selection Sort repeatedly finds the minimum element and places it at the front, and Insertion Sort builds the sorted array one element at a time like sorting playing cards in hand.",
            "hinglish": "Searching array me element dhoondna hai. Linear Search ek-ek karke check karta hai (unsorted data par chalta hai, time O(n)). Binary Search ke liye array ka SORTED hona zaroori hai: ye har step me middle element check karke bache hue aade array ko discard kar deta hai (Divide & Conquer), isliye 10 lakh elements me bhi sirf 20 checks me answer nikal leta hai (O(log n)). Sorting data ko chote se bada lagana hai: Bubble Sort bagal wale elements ko swap karta hai, Selection Sort sabse chota number dhoond kar aage lata hai, aur Insertion Sort taash ke patto ki tarah naye element ko sahi jagah insert karta hai.",
            "hi": "लीनियर सर्च O(n) समय लेता है जबकि बाइनरी सर्च छांटे गए (Sorted) डेटा पर केवल O(log n) समय लेता है। बबल, सिलेक्शन और इन्सर्शन सॉर्टिंग के आधारभूत तरीके हैं।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Linear search is like searching for a lost key in an unorganized messy room: you inspect every single corner one by one. Binary search is like looking up a word in a printed dictionary: you open directly to the middle, see whether your word comes before or after, and tear away the other half of the book!",
              "hinglish": "Linear Search bikhre kamre me chabi dhoondne jaisa hai jahan har kona dekhna padta hai. Binary Search dictionary kholne jaisa hai: beech me kholo, dekho aage aayega ya peeche, aur bacha aadha hissa fek do.",
              "hi": "लीनियर सर्च कमरे में बिखरी चाबी खोजने जैसा है और बाइनरी सर्च शब्दकोश में शब्द खोजने जैसा है।"
            },
            "limitations": {
              "en": "If pages in a dictionary were jumbled at random, binary search would fail completely; data must be rigorously sorted first.",
              "hinglish": "Agar dictionary ke pages ult-pult honge toh binary search fail ho jayegi; pehle sort hona zaroori hai.",
              "hi": "डेटा का पहले से क्रमबद्ध होना अनिवार्य है।"
            }
          },
          "terminology": [
            {
              "term": "Linear Search",
              "definition": {
                "en": "Sequential search inspecting elements one by one; Time complexity O(n).",
                "hinglish": "Ek-ek karke shuruat se aakhir tak dhoondna.",
                "hi": "रैखिक खोज (Linear Search)।"
              }
            },
            {
              "term": "Binary Search",
              "definition": {
                "en": "Divide-and-conquer search on sorted array halving search space; Time complexity O(log n).",
                "hinglish": "Sorted data par beech se check karke aadha hissa hatane wali fast search.",
                "hi": "द्वि-आधारी खोज (Binary Search)।"
              }
            },
            {
              "term": "Time Complexity",
              "definition": {
                "en": "Mathematical metric describing how execution steps grow as input size n increases.",
                "hinglish": "Input n badhne par steps kitni tezi se badhte hain uska measure (Big-O).",
                "hi": "समय जटिलता।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "binary-search",
            "sortedArray": [
              2,
              5,
              8,
              12,
              16,
              23,
              38,
              56,
              72,
              91
            ],
            "target": 23,
            "steps": [
              "mid = 16 (23 > 16, search right)",
              "mid = 56 (23 < 56, search left)",
              "mid = 23 (Match found at index 5!)"
            ]
          },
          "underlyingPrinciple": {
            "en": "Divide and Conquer: By testing the median element of a monotonically ordered set, the problem size is halved at each step: n, n/2, n/4, ..., 1.",
            "hinglish": "Divide and Conquer: Sorted array ke beech ke element ko check karke har step me data aadha ho jata hai.",
            "hi": "विभाजन और विजय सिद्धांत: प्रत्येक चरण में खोज क्षेत्र आधा हो जाता है।"
          },
          "formulaLogic": {
            "formula": "\\text{Mid Index: } \\text{mid} = \\text{low} + \\frac{\\text{high} - \\text{low}}{2} \\quad \\text{Max Steps: } \\lfloor \\log_2(n) \\rfloor + 1",
            "description": {
              "en": "Binary search middle index formula avoiding integer overflow, and maximum required comparisons.",
              "hinglish": "Binary search ka mid formula aur max comparisons nikalne ka rule.",
              "hi": "मध्य इंडेक्स और अधिकतम चरणों का सूत्र।"
            },
            "symbols": [
              {
                "symbol": "low",
                "meaning": "Start index of active subarray",
                "unit": "index"
              },
              {
                "symbol": "high",
                "meaning": "End index of active subarray",
                "unit": "index"
              },
              {
                "symbol": "\\log_2(n)",
                "meaning": "Base-2 logarithm of element count",
                "unit": "comparisons"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Trace Binary Search for key = 23 in sorted array: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]. Show low, high, mid, and comparisons at each step.",
              "hinglish": "Array [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] me key = 23 ko Binary Search se trace karo.",
              "hi": "दिए गए क्रमबद्ध ऐरे में 23 की बाइनरी खोज का प्रत्येक चरण में अनुरेखण कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Iteration 1",
                "explanation": {
                  "en": "low = 0, high = 9. mid = 0 + (9-0)/2 = 4. arr[4] = 16. Compare key 23 with 16: since 23 > 16, key must be in the right half. Set low = mid + 1 = 5.",
                  "hinglish": "low = 0, high = 9, mid = 4 (value 16). 23 > 16 hai, isliye right side jao: low = 5.",
                  "hi": "low=0, high=9, mid=4 (मान 16)। 23 > 16 होने से low = 5 किया।"
                },
                "math": "\\text{low}=0, \\text{high}=9 \\implies \\text{mid}=4 \\ (\\text{arr}[4]=16) < 23 \\implies \\text{low}=5"
              },
              {
                "stepNumber": 2,
                "title": "Iteration 2",
                "explanation": {
                  "en": "low = 5, high = 9. mid = 5 + (9-5)/2 = 5 + 2 = 7. arr[7] = 56. Compare key 23 with 56: since 23 < 56, key must be in the left half. Set high = mid - 1 = 6.",
                  "hinglish": "low = 5, high = 9, mid = 7 (value 56). 23 < 56 hai, isliye left side jao: high = 6.",
                  "hi": "low=5, high=9, mid=7 (मान 56)। 23 < 56 होने से high = 6 किया।"
                },
                "math": "\\text{low}=5, \\text{high}=9 \\implies \\text{mid}=7 \\ (\\text{arr}[7]=56) > 23 \\implies \\text{high}=6"
              },
              {
                "stepNumber": 3,
                "title": "Iteration 3 (Match found)",
                "explanation": {
                  "en": "low = 5, high = 6. mid = 5 + (6-5)/2 = 5 + 0 = 5. arr[5] = 23. Compare key 23 with arr[5]: 23 == 23! Target located at index 5 in just 3 comparisons!",
                  "hinglish": "low = 5, high = 6, mid = 5 (value 23). 23 == 23 match ho gaya! Index 5 par target mil gaya sirf 3 checks me!",
                  "hi": "low=5, high=6, mid=5 (मान 23)। 23 == 23 मिल गया! इंडेक्स 5 पर तत्व पाया गया।"
                },
                "math": "\\text{low}=5, \\text{high}=6 \\implies \\text{mid}=5 \\ (\\text{arr}[5]=23) == 23 \\implies \\text{FOUND at index 5}"
              }
            ],
            "finalAnswer": "Key 23 found at index 5 after exactly 3 comparisons."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Attempting to run Binary Search on an unsorted array.",
                "hinglish": "Unsorted array par Binary Search chala dena.",
                "hi": "अक्रमबद्ध (Unsorted) ऐरे पर बाइनरी सर्च चलाना।"
              },
              "correction": {
                "en": "Binary search fundamentally relies on monotonic order to discard half the search space. If the array is unsorted, it will make wrong decisions and falsely report elements as missing. Unsorted data requires Linear Search or must be sorted first.",
                "hinglish": "Bina sort kiye binary search galat disha me chali jayegi aur element nahi milega. Unsorted me Linear Search hi kaam karta hai.",
                "hi": "बाइनरी सर्च केवल क्रमबद्ध ऐरे पर ही सही कार्य करता है।"
              }
            },
            {
              "misconception": {
                "en": "Calculating mid as (low + high) / 2 in systems with large arrays.",
                "hinglish": "mid = (low + high) / 2 likhna.",
                "hi": "mid = (low + high) / 2 से पूर्णांक ओवरफ्लो होना।"
              },
              "correction": {
                "en": "If low + high exceeds 2,147,483,647 (INT_MAX), it causes integer overflow and turns into a negative number, crashing with an out-of-bounds error. Always write mid = low + (high - low) / 2.",
                "hinglish": "Agar low + high bada ho jaye toh overflow ho kar negative ban jata hai. Hamesha mid = low + (high - low) / 2 likhna chahiye.",
                "hi": "ओवरफ्लो से बचने हेतु mid = low + (high - low) / 2 लिखें।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u3-l3-p1",
              "question": {
                "en": "What is the maximum number of comparisons required by Binary Search to find an element in a sorted array of 1024 elements?",
                "hinglish": "1024 elements ke sorted array me Binary Search ko maximum kitne comparisons lag sakte hain?",
                "hi": "1024 अवयवों वाले ऐरे में बाइनरी सर्च को अधिकतम कितने परीक्षण लगेंगे?"
              },
              "hint": {
                "en": "2^10 = 1024.",
                "hinglish": "log2(1024) + 1.",
                "hi": "2 की घात 10 = 1024।"
              },
              "explanation": {
                "en": "Since 2^10 = 1024, log2(1024) = 10. The maximum number of comparisons is 10 + 1 = 11.",
                "hinglish": "2^10 = 1024, isliye maximum 11 comparisons lagenge.",
                "hi": "2^10 = 1024, अतः अधिकतम 11 तुलनाएं आवश्यक हैं।"
              },
              "correctAnswer": 0,
              "level": "Beginner",
              "options": [
                "11",
                "10",
                "12",
                "Cannot be determined"
              ],
              "correctIndex": 0
            }
          ],
          "summary": {
            "en": [
              "Linear Search works on any array in O(n) sequential steps.",
              "Binary Search requires pre-sorted data and achieves fast O(log n) performance.",
              "Bubble Sort repeatedly swaps adjacent pairs in O(n^2) time.",
              "Selection Sort finds the minimum element and places it at the front in O(n^2) time.",
              "Insertion Sort shifts larger elements right to insert the current item in sorted position."
            ],
            "hinglish": [
              "Linear Search kisi bhi array par O(n) me dhoondta hai.",
              "Binary Search sirf sorted array par O(log n) fast search karta hai.",
              "Bubble Sort bagal ke numbers swap karke sabse bada number aakhiri me bhejta hai.",
              "Selection Sort sabse chota number dhoond kar aage lata hai.",
              "Insertion Sort cards ki tarah naye element ko sahi jagah insert karta hai."
            ],
            "hi": [
              "लीनियर सर्च किसी भी ऐरे पर O(n) में कार्य करता है।",
              "बाइनरी सर्च केवल सॉर्टेड ऐरे पर O(log n) में कार्य करता है।",
              "बबल सॉर्ट निकटवर्ती अवयवों की अदला-बदली करता है।",
              "सिलेक्शन सॉर्ट न्यूनतम मान को चुनकर आगे लाता है।",
              "इन्सर्शन सॉर्ट ताश के पत्तों की भांति मान सम्मिलित करता है।"
            ]
          },
          "quiz": [
            {
              "id": "c-u3-l3-q1",
              "question": {
                "en": "What is the best-case time complexity of Linear Search when the target element is at index 0?",
                "hinglish": "Agar dhoonda gaya element index 0 par hi mil jaye toh Linear Search ka best-case time kya hoga?",
                "hi": "यदि खोजा गया तत्व इंडेक्स 0 पर ही हो तो लीनियर सर्च की सर्वोत्तम समय जटिलता क्या होगी?"
              },
              "options": [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n^2)"
              ],
              "correctIndex": 0,
              "hint": {
                "en": "The very first check succeeds immediately.",
                "hinglish": "Pehle check me hi mil gaya.",
                "hi": "प्रथम चरण में ही सफलता।"
              },
              "explanation": {
                "en": "In the best case, the target is located at the first index inspected, requiring only 1 comparison: O(1).",
                "hinglish": "Pehle hi step me milne par best case O(1) hota hai.",
                "hi": "पहले ही स्थान पर मिलने से सर्वोत्तम समय O(1) होता है।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Preprocessor directives, macro expansion (#define, #include, conditional compilation), 1D and 2D array memory representation (Row-major order), array passing to functions, matrix arithmetic, linear search, binary search, bubble sort, selection sort, and insertion sort.",
          "hinglish": "Arrays, Searching, Sorting and Preprocessors ka poora one-page revision summary jisme saare core formulas, theorems aur exam problems shamil hain.",
          "hi": "Arrays, Searching, Sorting and Preprocessors का संपूर्ण एक-पृष्ठीय पुनरावलोकन सारांश जिसमें सभी प्रमुख सूत्र और प्रमेय सम्मिलित हैं।"
        },
        "shortNotes": [
          {
            "topic": "Row-Major Order",
            "content": {
              "en": "Storing multidimensional array elements row by consecutive row in memory.",
              "hinglish": "Storing multidimensional array elements row by consecutive row in memory.",
              "hi": "Storing multidimensional array elements row by consecutive row in memory."
            }
          },
          {
            "topic": "Binary Search",
            "content": {
              "en": "Divide-and-conquer algorithm halving sorted search space iteratively.",
              "hinglish": "Divide-and-conquer algorithm halving sorted search space iteratively.",
              "hi": "Divide-and-conquer algorithm halving sorted search space iteratively."
            }
          },
          {
            "topic": "Bubble Sort",
            "content": {
              "en": "Simple sorting algorithm repeatedly swapping adjacent inverted elements.",
              "hinglish": "Simple sorting algorithm repeatedly swapping adjacent inverted elements.",
              "hi": "Simple sorting algorithm repeatedly swapping adjacent inverted elements."
            }
          },
          {
            "topic": "Header Guard",
            "content": {
              "en": "Preprocessor construct (#ifndef, #define, #endif) preventing header duplication.",
              "hinglish": "Preprocessor construct (#ifndef, #define, #endif) preventing header duplication.",
              "hi": "Preprocessor construct (#ifndef, #define, #endif) preventing header duplication."
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "2D Array Row-Major Address",
            "formula": "Address = Base + (i * C + j) * sizeof(type)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Binary Search Mid",
            "formula": "mid = low + (high - low) / 2",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Binary Search Complexity",
            "formula": "Best O(1), Worst O(log2 n)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Bubble Sort Total Comparisons",
            "formula": "n(n - 1) / 2 = O(n^2)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Safe Macro",
            "formula": "#define MACRO(x) ((x) * (x))",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          }
        ],
        "mindMap": [
          {
            "node": "Arrays, Searching, Sorting and Preprocessors",
            "children": [
              "Preprocessor Directives: #include, #define (macros with and without arguments), and macro hazards",
              "Conditional compilation directives: #if, #else, #elif, #ifdef, #ifndef, #endif",
              "One-dimensional arrays: Declaration, initialization, memory mapping, and subscript indexing",
              "Array traversal and bounds safety in C",
              "Passing arrays to functions: Decay to pointer and passing array size",
              "Two-dimensional arrays: Declaration, row-major memory layout, and 2D index calculation formula",
              "Matrix operations: Matrix addition, subtraction, and matrix multiplication algorithms",
              "Linear Search algorithm: Mechanism, best case O(1), and worst case O(n)",
              "Binary Search algorithm: Divide-and-conquer strategy, prerequisites, and logarithmic complexity O(log n)",
              "Sorting algorithms: Bubble Sort, Selection Sort, and Insertion Sort tracing"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Correct Understanding #1",
            "conceptB": "Common Student Pitfall #1",
            "comparisonPoints": [
              {
                "feature": "Key Concept",
                "a": "Follow established laws strictly",
                "b": "Omitting parentheses around macro arguments (e.g. #define SQR(x) x*x)."
              }
            ]
          },
          {
            "conceptA": "Correct Understanding #2",
            "conceptB": "Common Student Pitfall #2",
            "comparisonPoints": [
              {
                "feature": "Key Concept",
                "a": "Follow established laws strictly",
                "b": "Running binary search on an unsorted array (causes incorrect negative results)."
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "Binary Search Order",
            "back": "Low, Mid, High, Halve (LMHH)"
          },
          {
            "front": "Row Major Formula",
            "back": "In Flat Memory, Row Comes First (i * C + j)"
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Why must macro arguments be parenthesized in #define directives?",
            "answer": "Without parentheses, expressions passed as arguments can interact with adjacent operators due to operator precedence, producing incorrect mathematical results (e.g., 3 + 2 * 3 + 2 instead of (3 + 2) * (3 + 2))."
          },
          {
            "question": "Why is Binary Search faster than Linear Search?",
            "answer": "Binary Search halves the search space at every step using divide-and-conquer (O(log n)), whereas Linear Search checks elements sequentially one by one (O(n)). For 1,000,000 elements, Binary Search takes ~20 comparisons vs 1,000,000 for Linear Search."
          }
        ]
      }
    },
    {
      "id": "c-u4",
      "unitNumber": "Unit IV",
      "title": "Pointers, Dynamic Memory and String Manipulation",
      "description": "Pointer fundamentals, address-of (&) and dereference (*) operators, pointer arithmetic, pointers and arrays, dynamic memory allocation (malloc, calloc, realloc, free), memory leak prevention, strings as null-terminated character arrays, string I/O, and string library functions.",
      "topics": [
        "Pointer concept: Memory addresses, pointer variable declaration, and initialization with NULL",
        "Pointer operators: Address-of (&) and dereferencing / indirection (*)",
        "Pointer arithmetic: Incrementation, decrementation, and scaling by sizeof(data_type)",
        "Pointers and arrays: Equivalence of *(arr + i) and arr[i]",
        "Pointers to pointers (Double pointers: **ptr)",
        "Dynamic Memory Allocation: Stack vs Heap memory layout",
        "Allocation functions: malloc(), calloc() (zero-initialization), realloc(), and free()",
        "Common dynamic memory hazards: Memory leaks, dangling pointers, and wild pointers",
        "Character arrays and Strings: The null terminator '\\0' character requirement",
        "String handling functions from <string.h>: strlen, strcpy, strcat, strcmp, strncpy, and strchr"
      ],
      "lessons": [
        {
          "id": "c-u4-l1",
          "unitId": "c-u4",
          "subjectId": "c-programming",
          "title": "Pointers Fundamentals, Memory Addresses & Pointer Arithmetic",
          "durationMinutes": 35,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Variables and memory types",
            "Arithmetic operators"
          ],
          "realLifeQuestion": {
            "en": "Instead of shipping a 500-page printed physical book to every friend, why do you just send them a web link (URL), and how is a C pointer identical to a web hyperlink?",
            "hinglish": "500 page ki kitaab sab dosto ko courier karne ke bajaye aap unhe website ka link (URL) kyu bhejte ho, aur C language ka Pointer bilkul ek web link ki tarah kaise kaam karta hai?",
            "hi": "पूरी पुस्तक भेजने के बजाय केवल उसका वेब लिंक क्यों भेजा जाता है, और सी में पॉइंटर किस प्रकार वेब लिंक की तरह कार्य करता है?"
          },
          "simpleExplanation": {
            "en": "Every variable in C lives at a specific physical byte address in RAM (e.g., 0x7ffd98b4). A Pointer is simply a special variable that stores another variable's memory address as its value! The address-of operator & fetches a variable's address, while the dereference (indirection) operator * visits that address and reads or modifies the value stored there. When you perform pointer arithmetic (ptr + 1), C does NOT add 1 raw byte; it scales by the size of the underlying type: ptr + 1 advances by sizeof(type) bytes (4 bytes for int, 8 bytes for double). This scaling is why arr[i] is syntactically identical to *(arr + i) in C.",
            "hinglish": "RAM ke andar har variable ka ek unique ghar ka pata (memory address) hota hai jaise 0x7ffd98b4. Pointer ek aisa special variable hai jo kisi doosre variable ka address store karta hai! & operator address nikalta hai, aur * operator us address par jaakar andar rakhi value ko padhta ya badalta hai. Pointer arithmetic (ptr + 1) me computer 1 byte aage nahi badhta, balki type ke size ke barabar aage jump karta hai (int ke liye 4 bytes, double ke liye 8 bytes). Isliye C me arr[i] aur *(arr + i) bilkul ek hi cheez hain.",
            "hi": "पॉइंटर एक चर है जो दूसरे चर का मेमोरी पता रखता है। & पते को प्राप्त करता है और * पते पर स्थित मान को पढ़ता या बदलता है। ptr + 1 डेटा प्रकार के आकार के अनुपात में आगे बढ़ता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "A regular variable is a locker containing cash. A pointer variable is a slip of paper with the locker number written on it. Writing &locker gives you the paper with the number. Writing *paper means walking up to the locker, unlocking it, and touching the cash inside.",
              "hinglish": "Normal variable ek locker hai jisme paise rakhe hain. Pointer ek kora kagaz hai jispe us locker ka number likha hai. & lagane se locker number milta hai, aur * lagane se us locker ko khol kar andar ke paise milte hain.",
              "hi": "चर एक लॉकर की तरह है जिसमें धन है; पॉइंटर एक पर्ची है जिस पर लॉकर का नंबर लिखा है।"
            },
            "limitations": {
              "en": "If the paper has a nonexistent locker number or the locker was demolished (unallocated memory), unlocking it with * causes the security guards to arrest you (Segmentation Fault).",
              "hinglish": "Agar kagaz par galat ya band ho chuka locker number likha ho, toh kholte hi security pakad legi (Segmentation Fault crash).",
              "hi": "अवैध पते पर जाने से सेगमेंटेशन फॉल्ट त्रुटि उत्पन्न होती है।"
            }
          },
          "terminology": [
            {
              "term": "Pointer",
              "definition": {
                "en": "A variable that stores the memory address of another variable.",
                "hinglish": "Aisa variable jo kisi doosre variable ka address rakhta hai.",
                "hi": "वह चर जो किसी अन्य चर का पता संग्रहीत करता है।"
              }
            },
            {
              "term": "Dereferencing (*)",
              "definition": {
                "en": "Accessing or mutating the value stored at the memory address held by a pointer.",
                "hinglish": "Pointer ke address par jaakar uski value nikalna ya badalna.",
                "hi": "पते पर जाकर मान को पढ़ना या बदलना।"
              }
            },
            {
              "term": "Pointer Scaling",
              "definition": {
                "en": "Advancing pointer address by sizeof(T) bytes during arithmetic ptr + 1.",
                "hinglish": "ptr + 1 karne par data type ke size ke barabar bytes aage badhna.",
                "hi": "पॉइंटर अंकगणित में डेटा प्रकार के आकार अनुसार वृद्धि।"
              }
            },
            {
              "term": "NULL Pointer",
              "definition": {
                "en": "A pointer pointing to address 0, explicitly indicating that it points to nothing valid.",
                "hinglish": "Aisa pointer jo 0 address par point karta hai (kahi nahi point kar raha).",
                "hi": "शून्य (0) पते को इंगित करने वाला पॉइंटर।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "pointer-memory",
            "varName": "x = 42",
            "varAddress": "0x1000",
            "ptrName": "p = &x",
            "ptrValue": "0x1000",
            "dereference": "*p -> 42"
          },
          "underlyingPrinciple": {
            "en": "Indirection via Memory Addressing: The CPU uses register-indirect addressing mode (e.g., MOV EAX, [EBX]), allowing dynamic data structures and pass-by-reference simulation.",
            "hinglish": "CPU register-indirect addressing use karke pointer ke address se data fetch karta hai.",
            "hi": "मेमोरी पता प्रणाली के माध्यम से अप्रत्यक्ष अभिगमन।"
          },
          "formulaLogic": {
            "formula": "\\text{Address}(\\text{ptr} + k) = \\text{Address}(\\text{ptr}) + (k \\times \\text{sizeof}(T)) \\quad \\text{and} \\quad \\text{arr}[i] \\equiv *(arr + i)",
            "description": {
              "en": "Pointer arithmetic scaling formula and equivalence with array bracket notation.",
              "hinglish": "Pointer arithmetic scaling aur array bracket notation ki barabari.",
              "hi": "पॉइंटर अंकगणित और ऐरे सिंटैक्स की तुल्यता।"
            },
            "symbols": [
              {
                "symbol": "ptr",
                "meaning": "Pointer to type T",
                "unit": "address"
              },
              {
                "symbol": "k",
                "meaning": "Integer offset to add",
                "unit": "integer"
              },
              {
                "symbol": "\\text{sizeof}(T)",
                "meaning": "Size of data type in bytes",
                "unit": "bytes"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "If int *ptr points to address 0x2000 on a 32/64-bit system where sizeof(int) = 4, what address is produced by ptr + 3? What happens if ptr is declared as double *ptr (sizeof(double) = 8)?",
              "hinglish": "Agar int *ptr ka address 0x2000 hai aur sizeof(int)=4 hai, toh ptr + 3 ka address kya hoga? Agar double *ptr ho toh kya hoga?",
              "hi": "यदि ptr = 0x2000 है तो int और double के लिए ptr + 3 का मान क्या होगा?"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Apply scaling for int pointer",
                "explanation": {
                  "en": "For int *ptr, each step scales by sizeof(int) = 4 bytes. Offset = 3 * 4 = 12 bytes = 0x0C in hex. New address = 0x2000 + 0x0C = 0x200C.",
                  "hinglish": "int ke liye: 3 * 4 = 12 bytes (hex me 0x0C). Address bana 0x2000 + 0x0C = 0x200C.",
                  "hi": "int हेतु: 3 * 4 = 12 बाइट्स = 0x200C।"
                },
                "math": "\\text{int *ptr: } 0x2000 + (3 \\times 4) = 0x2000 + 12_{10} = 0x200C"
              },
              {
                "stepNumber": 2,
                "title": "Apply scaling for double pointer",
                "explanation": {
                  "en": "For double *ptr, each step scales by sizeof(double) = 8 bytes. Offset = 3 * 8 = 24 bytes = 0x18 in hex. New address = 0x2000 + 0x18 = 0x2018.",
                  "hinglish": "double ke liye: 3 * 8 = 24 bytes (hex me 0x18). Address bana 0x2000 + 0x18 = 0x2018.",
                  "hi": "double हेतु: 3 * 8 = 24 बाइट्स = 0x2018।"
                },
                "math": "\\text{double *ptr: } 0x2000 + (3 \\times 8) = 0x2000 + 24_{10} = 0x2018"
              }
            ],
            "finalAnswer": "ptr + 3 gives 0x200C for int* (advances 12 bytes) and 0x2018 for double* (advances 24 bytes)."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Believing ptr + 1 adds 1 literal byte to the memory address.",
                "hinglish": "Ye sochna ki ptr + 1 karne se sirf 1 byte aage badhte hain.",
                "hi": "यह सोचना कि ptr + 1 केवल 1 बाइट आगे बढ़ाता है।"
              },
              "correction": {
                "en": "Pointer arithmetic is always type-scaled. Incrementing ptr advances by sizeof(*ptr) bytes. Only char* (where sizeof(char) = 1) advances by 1 literal byte.",
                "hinglish": "Pointer arithmetic me hamesha type ke size se multiply hota hai. Sirf char* me 1 byte badhta hai.",
                "hi": "पॉइंटर अंकगणित सदैव डेटा प्रकार के आकार द्वारा गुणा होकर बढ़ता है।"
              }
            },
            {
              "misconception": {
                "en": "Dereferencing an uninitialized or NULL pointer: int *p; *p = 50;",
                "hinglish": "Bina address dale pointer ko dereference karna: int *p; *p = 50;",
                "hi": "अ-प्रारंभीकृत पॉइंटर को डीरेफ़रेंस करना।"
              },
              "correction": {
                "en": "An uninitialized pointer holds a random garbage address. Assigning *p = 50 attempts to write to an arbitrary RAM address, triggering an immediate crash (Segmentation Fault). Always point p to a valid variable before dereferencing: p = &x; *p = 50;",
                "hinglish": "Uninitialized pointer me kachra address hota hai. *p = 50 likhte hi program crash ho jayega. Pehle p = &x likhna zaroori hai.",
                "hi": "पॉइंटर को मान्य पता देने से पहले डीरेफ़रेंस करने पर सेगमेंटेशन फॉल्ट होता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u4-l1-p1",
              "question": {
                "en": "If arr is an integer array, what does *(arr + 2) evaluate to?",
                "hinglish": "Agar arr ek int array hai, toh *(arr + 2) ka matlab kya hota hai?",
                "hi": "*(arr + 2) का समतुल्य मान क्या है?"
              },
              "hint": {
                "en": "Recall the array-pointer equivalence rule arr[i] == *(arr + i).",
                "hinglish": "arr[2] ke barabar hota hai.",
                "hi": "arr[2] के समान।"
              },
              "explanation": {
                "en": "In C, *(arr + 2) is identical to arr[2], accessing the element at index 2 (the 3rd element).",
                "hinglish": "*(arr + 2) ka matlab arr[2] hota hai.",
                "hi": "*(arr + 2) का अर्थ arr[2] है।"
              },
              "correctAnswer": 2,
              "level": "Beginner",
              "options": [
                "arr[0]",
                "arr[1]",
                "arr[2]",
                "Compilation error"
              ],
              "correctIndex": 2
            }
          ],
          "summary": {
            "en": [
              "& fetches a variable's physical memory address (address-of operator).",
              "* accesses or mutates the value located at an address (dereference operator).",
              "Pointer arithmetic ptr + k scales automatically by k * sizeof(type).",
              "arr[i] is syntactically identical to *(arr + i)."
            ],
            "hinglish": [
              "& operator variable ka address deta hai.",
              "* operator us address par jakar value ko access karta hai.",
              "ptr + k karne par k * sizeof(type) bytes add hoti hain.",
              "arr[i] aur *(arr + i) dono ek hi cheez hain."
            ],
            "hi": [
              "& ऑपरेटर पता प्रदान करता है।",
              "* ऑपरेटर पते पर स्थित मान तक पहुंचता है।",
              "पॉइंटर अंकगणित डेटा प्रकार के अनुसार स्केल होता है।",
              "arr[i] और *(arr + i) पूरी तरह समतुल्य हैं।"
            ]
          },
          "quiz": [
            {
              "id": "c-u4-l1-q1",
              "question": {
                "en": "What is the size of a pointer variable on a standard 64-bit operating system architecture?",
                "hinglish": "64-bit operating system par kisi bhi pointer variable ka size kitna hota hai?",
                "hi": "64-बिट ऑपरेटिंग सिस्टम पर पॉइंटर चर का आकार क्या होता है?"
              },
              "options": [
                "2 bytes",
                "4 bytes",
                "8 bytes",
                "Depends on pointed data type"
              ],
              "correctIndex": 2,
              "hint": {
                "en": "A 64-bit CPU uses 64-bit memory addresses.",
                "hinglish": "64 bits = 8 bytes.",
                "hi": "64 बिट्स = 8 बाइट्स।"
              },
              "explanation": {
                "en": "On a 64-bit architecture, all memory addresses are 64 bits (8 bytes) wide, so every pointer occupies exactly 8 bytes, regardless of whether it points to char, int, or double.",
                "hinglish": "64-bit system par saare pointers ka size exactly 8 bytes hota hai.",
                "hi": "64-बिट प्रणाली पर सभी पॉइंटर्स का आकार ठीक 8 बाइट्स होता है।"
              }
            }
          ]
        },
        {
          "id": "c-u4-l2",
          "unitId": "c-u4",
          "subjectId": "c-programming",
          "title": "Dynamic Memory Allocation: malloc, calloc, realloc, free & Memory Leaks",
          "durationMinutes": 35,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Pointers",
            "NULL pointer checks"
          ],
          "realLifeQuestion": {
            "en": "How does an app like Instagram adapt if you have 10 followers today but 1,000,000 next month, without reserving space for 1,000,000 users when the app first launches?",
            "hinglish": "Instagram jaise apps kaise handle karte hain jab shuru me 10 followers ho aur baad me 10 lakh ho jayein, bina shuru me hi 10 lakh users ki RAM block kiye?",
            "hi": "डायनेमिक मेमोरी आवंटन रनटाइम पर आवश्यकतानुसार मेमोरी कैसे प्रबंधित करता है?"
          },
          "simpleExplanation": {
            "en": "Static and automatic arrays require their size to be fixed at compile time (like int arr[100];), which either wastes massive RAM if unused or overflows if input exceeds 100. Dynamic Memory Allocation allows programs to request exact amounts of memory from the system Heap at RUNTIME using functions from <stdlib.h>: (1) malloc(size) allocates raw uninitialized bytes (contains garbage), (2) calloc(n, size) allocates memory and clears all bytes to zero, (3) realloc(ptr, new_size) resizes an existing heap block dynamically, and (4) free(ptr) returns the allocated block back to the operating system. If you allocate heap memory and lose the pointer without calling free(), that RAM remains blocked forever until system reboot, creating a Memory Leak.",
            "hinglish": "Normal array int arr[100]; ka size pehle se fix hota hai jo ya toh memory waste karta hai ya kam pad jata hai. Dynamic Memory Allocation se hum program chalte waqt (Runtime) par Heap memory se zaroorat ke hisaab se space mangte hain: (1) malloc(size) memory allocate karta hai jisme garbage value hoti hai, (2) calloc(n, size) memory allocate karke sabko 0 bana deta hai, (3) realloc(ptr, new_size) purani memory ko chota ya bada karta hai, aur (4) free(ptr) kaam hone ke baad memory OS ko wapas lauta deta hai. Agar free() nahi kiya toh RAM block reh jayegi jise Memory Leak kehte hain.",
            "hi": "हीप से रनटाइम पर मेमोरी प्राप्त करने हेतु malloc और calloc का उपयोग होता है। realloc आकार बदलता है और free मेमोरी मुक्त करता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Stack memory is like staying at a hotel where check-out is automatic the second your meeting ends. Heap memory is like renting a commercial storage unit: you sign a lease (malloc), store your boxes, and you MUST explicitly hand in the keys (free) when you leave. If you walk away and throw the keys into the river, the landlord cannot rent it to anyone else (memory leak)!",
              "hinglish": "Stack automatic hotel room hai jo meeting khatam hote hi khali ho jata hai. Heap rent par liya gaya godown hai: aapne chabi li (malloc), samaan rakha, aur jaate waqt chabi wapas deni hogi (free). Agar chabi fek ke bhaag gaye toh godown block ho jayega (Memory Leak).",
              "hi": "स्टैक स्वतः खाली होता है; हीप को स्पष्ट रूप से free() द्वारा खाली करना अनिवार्य है।"
            },
            "limitations": {
              "en": "A landlord eventually evicts an abandoned locker; the operating system only reclaims leaked heap memory when the entire process terminates.",
              "hinglish": "OS tabhi memory reclaim karta hai jab pura program band ho jata hai.",
              "hi": "प्रोग्राम बंद होने पर ही ऑपरेटिंग सिस्टम अनमुक्त मेमोरी पुनः प्राप्त करता है।"
            }
          },
          "terminology": [
            {
              "term": "Heap Memory",
              "definition": {
                "en": "A large pool of memory used for dynamic runtime allocation, managed explicitly by the programmer.",
                "hinglish": "Programmer dwara runtime par allocate aur free ki jaane wali RAM.",
                "hi": "डायनामिक मेमोरी हेतु हीप क्षेत्र।"
              }
            },
            {
              "term": "malloc()",
              "definition": {
                "en": "Memory allocate function: allocates n bytes of uninitialized garbage memory.",
                "hinglish": "Raw memory allocate karta hai jisme garbage values hoti hain.",
                "hi": "कचरा मान सहित मेमोरी आवंटित करने वाला फंक्शन।"
              }
            },
            {
              "term": "calloc()",
              "definition": {
                "en": "Contiguous allocate: allocates and initializes all bytes to zero.",
                "hinglish": "Memory allocate karke saare bytes ko 0 se initialize karta hai.",
                "hi": "शून्य से प्रारंभीकृत मेमोरी आवंटित करने वाला फंक्शन।"
              }
            },
            {
              "term": "Memory Leak",
              "definition": {
                "en": "Failure to free allocated heap memory before losing all pointer references to it.",
                "hinglish": "malloc ki gayi memory ko free kiye bina pointer kho dena.",
                "hi": "मेमोरी लीक: आवंटित मेमोरी को मुक्त न करना।"
              }
            },
            {
              "term": "Dangling Pointer",
              "definition": {
                "en": "A pointer still holding the address of a memory block that has already been freed.",
                "hinglish": "Aisa pointer jo free ho chuki memory ko point kar raha ho.",
                "hi": "मुक्त हो चुकी मेमोरी को इंगित करने वाला पॉइंटर।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "dynamic-allocation",
            "codeSnippet": "int *arr = (int *)malloc(5 * sizeof(int));\\nif (arr == NULL) { exit(1); }\\n// use arr\\nfree(arr);\\narr = NULL;"
          },
          "underlyingPrinciple": {
            "en": "Heap Management: System calls (brk, sbrk, mmap) expand the process data segment to allocate blocks with header metadata tracking chunk sizes.",
            "hinglish": "OS runtime par process ka data segment expand karke Heap memory provide karta hai.",
            "hi": "प्रक्रिया के डेटा सेगमेंट का विस्तार करके हीप आवंटित किया जाता है।"
          },
          "formulaLogic": {
            "formula": "\\text{int *ptr} = (\\text{int *})\\text{malloc}(n \\times \\text{sizeof}(\\text{int})) \\quad \\text{and} \\quad \\text{calloc}(n, \\text{size})",
            "description": {
              "en": "Standard allocation syntax for n elements of a given data type with safe byte sizing.",
              "hinglish": "n elements ke liye memory allocate karne ka standard syntax.",
              "hi": "n तत्वों हेतु मेमोरी आवंटन का मानक सिंटैक्स।"
            },
            "symbols": [
              {
                "symbol": "n",
                "meaning": "Number of elements requested",
                "unit": "integer"
              },
              {
                "symbol": "sizeof(type)",
                "meaning": "Byte size per element",
                "unit": "bytes"
              },
              {
                "symbol": "free(ptr)",
                "meaning": "Deallocates heap block",
                "unit": "function call"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Write the complete safe pattern to dynamically allocate an array of n integers from user input, populate it, free it, and prevent a dangling pointer.",
              "hinglish": "User se n lekar safely dynamic array allocate, use, free aur dangling pointer prevent karne ka code likho.",
              "hi": "n पूर्णांकों हेतु सुरक्षित डायनामिक ऐरे आवंटन, उपयोग और डैंगलिंग पॉइंटर से बचाव का कोड लिखिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Request allocation and test for NULL",
                "explanation": {
                  "en": "int *arr = (int *)malloc(n * sizeof(int)); Always check if (arr == NULL) because malloc returns NULL if system RAM is exhausted.",
                  "hinglish": "malloc se memory maango aur hamesha check karo if (arr == NULL) taaki out-of-memory crash na ho.",
                  "hi": "malloc से आवंटन करें और NULL की जांच अवश्य करें।"
                },
                "math": "\\text{int *arr} = (\\text{int *})\\text{malloc}(n \\times \\text{sizeof}(\\text{int})); \\quad \\text{if (arr == NULL) abort;}"
              },
              {
                "stepNumber": 2,
                "title": "Use memory as a regular array",
                "explanation": {
                  "en": "Access dynamically allocated elements using standard subscript syntax: arr[i] = value.",
                  "hinglish": "Normal array ki tarah arr[i] use karo.",
                  "hi": "सामान्य ऐरे की भांति arr[i] का प्रयोग करें।"
                },
                "math": "\\text{for (i = 0; i < n; i++) arr}[i] = i \\times 10;"
              },
              {
                "stepNumber": 3,
                "title": "Deallocate and neutralize pointer",
                "explanation": {
                  "en": "Call free(arr) to release memory, then immediately set arr = NULL. Setting arr to NULL prevents accidental dangling pointer dereferencing.",
                  "hinglish": "free(arr) karke memory lauta do aur turant arr = NULL likh do taaki dangling pointer na bane.",
                  "hi": "free(arr) करें और डैंगलिंग पॉइंटर से बचने हेतु arr = NULL लिखें।"
                },
                "math": "\\text{free(arr); } arr = \\text{NULL;}"
              }
            ],
            "finalAnswer": "Dynamic memory allocated, verified, utilized, freed, and neutralized."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Forgetting to check if malloc returned NULL before using the pointer.",
                "hinglish": "malloc ke baad NULL check na karna.",
                "hi": "malloc के बाद NULL की जांच न करना।"
              },
              "correction": {
                "en": "If RAM is full, malloc fails and returns NULL (address 0). Dereferencing NULL causes an instant crash. Always verify if (ptr != NULL).",
                "hinglish": "Agar RAM bhar gayi toh malloc NULL deta hai. Bina check kiye use karoge toh crash ho jayega.",
                "hi": "RAM समाप्त होने पर malloc शून्य लौटाता है; जांच अनिवार्य है।"
              }
            },
            {
              "misconception": {
                "en": "Using memory after freeing it (Use-After-Free).",
                "hinglish": "free(ptr) karne ke baad bhi uske data ko access karna.",
                "hi": "मेमोरी मुक्त करने के बाद उसका उपयोग करना।"
              },
              "correction": {
                "en": "After free(ptr), the memory is surrendered to the OS heap allocator and may be reassigned to other programs. Accessing it corrupts memory. Always assign ptr = NULL immediately after free.",
                "hinglish": "free karne ke baad memory kisi aur program ko mil sakti hai. Isliye free ke baad ptr = NULL assign karo.",
                "hi": "free के तुरंत बाद पॉइंटर को NULL असाइन करें।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u4-l2-p1",
              "question": {
                "en": "What is the primary difference between malloc() and calloc()?",
                "hinglish": "malloc aur calloc ke beech mukhya antar kya hai?",
                "hi": "malloc और calloc में मुख्य अंतर क्या है?"
              },
              "hint": {
                "en": "One clears memory to zero, the other leaves garbage.",
                "hinglish": "Ek 0 se initialize karta hai, doosra garbage chhodta hai.",
                "hi": "एक शून्य से प्रारंभीकृत करता है।"
              },
              "explanation": {
                "en": "malloc() allocates raw uninitialized memory containing garbage values, whereas calloc() zeroes out all allocated memory bytes.",
                "hinglish": "malloc me garbage value hoti hai jabki calloc saare bytes ko 0 bana deta hai.",
                "hi": "malloc कचरा मान छोड़ता है जबकि calloc सभी बाइट्स को शून्य कर देता है।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "malloc is faster and clears memory",
                "calloc initializes memory to zero while malloc leaves garbage values",
                "malloc allocates on stack while calloc allocates on heap",
                "There is no functional difference"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "malloc(size) requests uninitialized heap memory.",
              "calloc(n, size) allocates and zeroes out all allocated bytes.",
              "realloc(ptr, new_size) expands or contracts an existing allocated block.",
              "free(ptr) returns heap memory to the OS; set ptr = NULL to prevent dangling pointers."
            ],
            "hinglish": [
              "malloc(size) raw heap memory deta hai jisme garbage values hoti hain.",
              "calloc(n, size) saari memory ko zero kar deta hai.",
              "realloc(ptr, new_size) purane block ka size badal deta hai.",
              "free(ptr) memory lauta deta hai; ptr = NULL karna dangling pointer rokta hai."
            ],
            "hi": [
              "malloc हीप से अ-प्रारंभीकृत मेमोरी देता है।",
              "calloc मेमोरी को शून्य से प्रारंभीकृत करता है।",
              "realloc मेमोरी ब्लॉक का आकार बदलता है।",
              "free मेमोरी मुक्त करता है; डैंगलिंग से बचाव हेतु NULL असाइन करें।"
            ]
          },
          "quiz": [
            {
              "id": "c-u4-l2-q1",
              "question": {
                "en": "What occurs when a program continuously allocates heap memory without calling free()?",
                "hinglish": "Jab koi program lagataar memory allocate karta jaye aur free() na kare toh kya hota hai?",
                "hi": "जब प्रोग्राम मेमोरी आवंटित करता रहे और free न करे तो क्या होता है?"
              },
              "options": [
                "Stack Overflow",
                "Memory Leak",
                "Segmentation fault on compile",
                "Bus Error"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "RAM gets slowly drained until system resources run out.",
                "hinglish": "Memory drain ho jati hai.",
                "hi": "मेमोरी लीक।"
              },
              "explanation": {
                "en": "Failing to deallocate dynamically allocated heap memory before losing pointer references results in a Memory Leak, steadily consuming available system RAM.",
                "hinglish": "Memory free na karne se Memory Leak ho jata hai aur system slow/crash ho jata hai.",
                "hi": "आवंटित मेमोरी मुक्त न करने से मेमोरी लीक होता है।"
              }
            }
          ]
        },
        {
          "id": "c-u4-l3",
          "unitId": "c-u4",
          "subjectId": "c-programming",
          "title": "Characters, Strings, Null Terminator ('\\0') & string.h Library",
          "durationMinutes": 30,
          "difficulty": "Beginner",
          "prerequisites": [
            "1D Arrays",
            "Pointers"
          ],
          "realLifeQuestion": {
            "en": "Why does printing a string in C without a null terminator '\\0' print random gibberish and weird symbols before crashing your terminal?",
            "hinglish": "C language me agar string ke aakhiri me '\\0' (null character) na ho toh printf ajeeb-o-gareeb symbols kyu print karta hai?",
            "hi": "सी में यदि स्ट्रिंग के अंत में नल वर्ण '\\0' न हो तो निरर्थक प्रतीक क्यों छपते हैं?"
          },
          "simpleExplanation": {
            "en": "C has no native \"string\" data type. In C, a string is simply a one-dimensional array of characters terminated by a special invisible sentinel byte called the Null Terminator ('\\0', ASCII value 0). Functions like printf(\"%s\"), strlen(), and strcpy() do NOT know how long an array is; they blindly read byte after byte in RAM until they encounter a '\\0' byte. If you declare char str[5] = \"HELLO\";, there is no room for the null terminator (HELLO needs 5 chars + 1 null = 6 bytes!). printf will read past the array boundary into adjacent memory, printing random memory bytes until it accidentally hits a zero byte elsewhere in RAM.",
            "hinglish": "C language me alag se koi \"string\" type nahi hota. String asal me characters ka array hota hai jiske aakhiri me ek special Null Terminator '\\0' (ASCII 0) laga hota hai. printf(\"%s\") aur strlen() ko array ka size nahi pata hota; wo RAM me tab tak aage badhte rehte hain jab tak unhe '\\0' na mil jaye. Agar \"HELLO\" store karna hai toh kam se kam 6 bytes chahiye (5 letters + 1 null byte). Agar '\\0' nahi hoga toh printf aage ki RAM ka kachra print karne lagega.",
            "hi": "सी में स्ट्रिंग नल वर्ण '\\0' द्वारा समाप्त होने वाला वर्णों का ऐरे है। इसके बिना फ़ंक्शन मेमोरी में आगे पढ़कर निरर्थक मान प्रदर्शित करते हैं।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of a string as a freight train of cargo wagons carrying letters. The null terminator '\\0' is the red caboose at the very end. The station master (printf) counts wagons until he sees the red caboose. If someone unhooks the red caboose, the station master keeps counting other trains on adjacent tracks endlessly!",
              "hinglish": "String ek train ki tarah hai jisme har dabbe me ek letter hai. Null terminator '\\0' train ka red guard dabba hai. printf guard dabbe ko dekh kar ruk jata hai. Agar red dabba gayab ho gaya toh station master doosri train ke dabbe bhi ginne lagega.",
              "hi": "स्ट्रिंग एक ट्रेन की तरह है और '\\0' उसका अंतिम गार्ड डिब्बा है; इसके बिना नियंत्रण आगे बढ़ता रहता है।"
            },
            "limitations": {
              "en": "A train caboose is physically large; the null terminator is just a single byte of value zero (0x00).",
              "hinglish": "'\\0' sirf 1 byte ka hota hai jiska ASCII value 0 hota hai.",
              "hi": "'\\0' केवल 1 बाइट का होता है जिसका मान 0 है।"
            }
          },
          "terminology": [
            {
              "term": "Null Terminator ('\\0')",
              "definition": {
                "en": "The character with ASCII value 0 marking the end of a string in memory.",
                "hinglish": "String ke ant ko darshane wala character (ASCII 0).",
                "hi": "स्ट्रिंग की समाप्ति दर्शाने वाला शून्य मान वर्ण।"
              }
            },
            {
              "term": "strlen()",
              "definition": {
                "en": "Returns number of characters in a string excluding the null terminator.",
                "hinglish": "String me kitne letters hain (bina \\0 ke) wo count karta hai.",
                "hi": "स्ट्रिंग की लंबाई ज्ञात करने वाला फ़ंक्शन।"
              }
            },
            {
              "term": "strcmp()",
              "definition": {
                "en": "Compares two strings lexicographically; returns 0 if strings are identical.",
                "hinglish": "Do strings ko compare karta hai; barabar hone par 0 deta hai.",
                "hi": "दो स्ट्रिंग्स की तुलना करने वाला फ़ंक्शन।"
              }
            },
            {
              "term": "strcpy()",
              "definition": {
                "en": "Copies source string including null terminator into destination buffer.",
                "hinglish": "Ek string ko doosre me copy karta hai.",
                "hi": "स्ट्रिंग की प्रतिलिपि बनाने वाला फ़ंक्शन।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "string-memory",
            "str": "HELLO",
            "cells": [
              "H (0)",
              "E (1)",
              "L (2)",
              "L (3)",
              "O (4)",
              "\\0 (5)"
            ]
          },
          "underlyingPrinciple": {
            "en": "Sentinel-Terminated Sequences: C strings trade length tracking overhead for a sentinel terminator byte, saving a length field at the expense of O(n) strlen traversal.",
            "hinglish": "C me string ki length store nahi hoti, balki aakhiri me sentinel byte \\0 laga kar ant pehchana jata hai.",
            "hi": "सेंटिनल टर्मिनेटेड सीक्वेंस: समाप्ति दर्शाने हेतु विशेष वर्ण का उपयोग।"
          },
          "formulaLogic": {
            "formula": "\\text{Buffer Size Required: } \\text{Capacity} \\ge \\text{strlen}(\\text{str}) + 1",
            "description": {
              "en": "Mandatory buffer capacity formula allocating space for text plus the null terminator.",
              "hinglish": "String buffer me letters ke alawa +1 byte null terminator ke liye zaroori hoti hai.",
              "hi": "स्ट्रिंग बफर क्षमता सूत्र: लंबाई + 1।"
            },
            "symbols": [
              {
                "symbol": "strlen(str)",
                "meaning": "Number of visible characters",
                "unit": "characters"
              },
              {
                "symbol": "+ 1",
                "meaning": "Space for '\\0' null terminator byte",
                "unit": "byte"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Demonstrate the difference between assigning strings with char str[] = \"CODE\"; vs char *p = \"CODE\";. Can you modify str[0] and p[0]?",
              "hinglish": "char str[] = \"CODE\"; aur char *p = \"CODE\"; me kya antar hai? Kya str[0] aur p[0] ko badla ja sakta hai?",
              "hi": "char str[] और char *p द्वारा स्ट्रिंग निर्माण में क्या अंतर है? क्या दोनों में संशोधन संभव है?"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Analyze char str[] = \"CODE\"",
                "explanation": {
                  "en": "char str[] creates a mutable 5-byte array on the Stack (C, O, D, E, \\0). Modifying str[0] = 'M' is completely valid and turns it into \"MODE\".",
                  "hinglish": "char str[] Stack memory me array banata hai jise aasaani se modify kiya ja sakta hai: str[0] = 'M' allowed hai.",
                  "hi": "char str[] स्टैक पर परिवर्तनीय ऐरे बनाता है; str[0] बदला जा सकता है।"
                },
                "math": "\\text{str is mutable Stack array: } str[0] = 'M' \\implies \\text{\"MODE\" (Allowed)}"
              },
              {
                "stepNumber": 2,
                "title": "Analyze char *p = \"CODE\"",
                "explanation": {
                  "en": "char *p points to a String Literal stored in the read-only Text/Data segment. Attempting to write p[0] = 'M' triggers a Segmentation Fault (bus error) because the OS write-protects string literals.",
                  "hinglish": "char *p Read-Only memory me point karta hai. p[0] = 'M' likhne par program crash (Segmentation Fault) ho jayega.",
                  "hi": "char *p केवल-पठनीय मेमोरी में इंगित करता है; इसमें संशोधन से क्रैश होता है।"
                },
                "math": "p[0] = 'M' \\implies \\text{Segmentation Fault (Writing to Read-Only Memory)}"
              }
            ],
            "finalAnswer": "Array strings on stack are mutable; pointer-assigned string literals are read-only constants."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Allocating char name[5] to hold a 5-letter word like \"PRAMOD\" or \"HELLO\".",
                "hinglish": "5 letters ke word ke liye size 5 ka array banana.",
                "hi": "5 अक्षरों के शब्द हेतु आकार 5 का ऐरे बनाना।"
              },
              "correction": {
                "en": "Every C string requires space for the terminating '\\0'. A 5-letter word requires at least char name[6]. Forgetting the +1 causes buffer overflow.",
                "hinglish": "5 letters ke word ke liye kam se kam size 6 hona chahiye taaki \\0 fit ho sake.",
                "hi": "नल वर्ण हेतु सदैव लंबाई से 1 अधिक आकार का ऐरे बनाएं।"
              }
            },
            {
              "misconception": {
                "en": "Comparing strings with if (str1 == str2).",
                "hinglish": "Strings ko compare karne ke liye if (str1 == str2) likhna.",
                "hi": "स्ट्रिंग्स की तुलना हेतु == ऑपरेटर का प्रयोग करना।"
              },
              "correction": {
                "en": "Using == compares memory addresses of the two arrays, NOT their text contents! To compare string contents, you must use if (strcmp(str1, str2) == 0).",
                "hinglish": "== sirf memory address compare karta hai text nahi. Text compare karne ke liye strcmp(str1, str2) == 0 likhna padta hai.",
                "hi": "== केवल पते की तुलना करता है; विषय-वस्तु की तुलना हेतु strcmp का उपयोग करें।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u4-l3-p1",
              "question": {
                "en": "What does strcmp(\"apple\", \"banana\") return?",
                "hinglish": "strcmp(\"apple\", \"banana\") ka result kya aayega?",
                "hi": "strcmp(\"apple\", \"banana\") क्या मान लौटाएगा?"
              },
              "hint": {
                "en": "'a' (ASCII 97) is less than 'b' (ASCII 98).",
                "hinglish": "'a' 'b' se chota hota hai.",
                "hi": "'a' का मान 'b' से कम है।"
              },
              "explanation": {
                "en": "strcmp compares characters alphabetically. Since 'a' (97) < 'b' (98), it returns a negative integer (< 0).",
                "hinglish": "'a' pehle aata hai isliye negative number return hoga.",
                "hi": "'a' का मान कम होने से ऋणात्मक मान प्राप्त होता है।"
              },
              "correctAnswer": 0,
              "level": "Beginner",
              "options": [
                "A negative integer (< 0)",
                "A positive integer (> 0)",
                "0",
                "1"
              ],
              "correctIndex": 0
            }
          ],
          "summary": {
            "en": [
              "C strings are arrays of characters ending with the null terminator '\\0' (ASCII 0).",
              "Always allocate space for strlen(s) + 1 bytes to accommodate '\\0'.",
              "Use strcmp() to compare text content; == only compares pointer addresses.",
              "String literals assigned to char* are stored in read-only memory and cannot be modified."
            ],
            "hinglish": [
              "C me string character array hoti hai jo \\0 par khatam hoti hai.",
              "Hamesha size + 1 allocate karo taaki \\0 fit ho sake.",
              "String compare karne ke liye strcmp() use karo, == nahi.",
              "char *p = \"TEXT\" read-only hota hai, use modify nahi kar sakte."
            ],
            "hi": [
              "सी स्ट्रिंग '\\0' द्वारा समाप्त होती है।",
              "बफर आकार सदैव लंबाई + 1 होना चाहिए।",
              "तुलना हेतु strcmp() का उपयोग करें।",
              "पॉइंटर स्ट्रिंग स्थिरांक केवल-पठनीय होते हैं।"
            ]
          },
          "quiz": [
            {
              "id": "c-u4-l3-q1",
              "question": {
                "en": "What does the function strlen(\"BTech\\0Learn\") return?",
                "hinglish": "strlen(\"BTech\\0Learn\") ka output kya hoga?",
                "hi": "strlen(\"BTech\\0Learn\") का आउटपुट क्या होगा?"
              },
              "options": [
                "5",
                "10",
                "11",
                "Compilation error"
              ],
              "correctIndex": 0,
              "hint": {
                "en": "strlen stops counting the moment it encounters the first \\0 character.",
                "hinglish": "\\0 aate hi strlen counting rok deta hai.",
                "hi": "\\0 मिलते ही गणना रुक जाती है।"
              },
              "explanation": {
                "en": "strlen scans characters sequentially until it reaches the first null terminator '\\0'. \"BTech\" has 5 characters, so it immediately returns 5.",
                "hinglish": "strlen pehle \\0 par hi ruk jata hai, isliye answer 5 aayega.",
                "hi": "प्रथम \\0 पर गणना समाप्त होने से उत्तर 5 आता है।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Pointer fundamentals, address-of (&) and dereference (*) operators, pointer arithmetic, pointers and arrays, dynamic memory allocation (malloc, calloc, realloc, free), memory leak prevention, strings as null-terminated character arrays, string I/O, and string library functions.",
          "hinglish": "Pointers, Dynamic Memory and String Manipulation ka poora one-page revision summary jisme saare core formulas, theorems aur exam problems shamil hain.",
          "hi": "Pointers, Dynamic Memory and String Manipulation का संपूर्ण एक-पृष्ठीय पुनरावलोकन सारांश जिसमें सभी प्रमुख सूत्र और प्रमेय सम्मिलित हैं।"
        },
        "shortNotes": [
          {
            "topic": "Pointer",
            "content": {
              "en": "A variable holding the memory address of another variable.",
              "hinglish": "A variable holding the memory address of another variable.",
              "hi": "A variable holding the memory address of another variable."
            }
          },
          {
            "topic": "Memory Leak",
            "content": {
              "en": "Allocated heap memory that is no longer accessible because all pointers were lost.",
              "hinglish": "Allocated heap memory that is no longer accessible because all pointers were lost.",
              "hi": "Allocated heap memory that is no longer accessible because all pointers were lost."
            }
          },
          {
            "topic": "Dangling Pointer",
            "content": {
              "en": "A pointer that references a memory block after it has already been freed.",
              "hinglish": "A pointer that references a memory block after it has already been freed.",
              "hi": "A pointer that references a memory block after it has already been freed."
            }
          },
          {
            "topic": "Null Terminator",
            "content": {
              "en": "Byte value 0x00 ('\\0') signifying the logical end of a string.",
              "hinglish": "Byte value 0x00 ('\\0') signifying the logical end of a string.",
              "hi": "Byte value 0x00 ('\\0') signifying the logical end of a string."
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Pointer Scaling",
            "formula": "Address(ptr + k) = Address(ptr) + k * sizeof(*ptr)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Array Pointer Equivalence",
            "formula": "arr[i] == *(arr + i) == *(i + arr) == i[arr]",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Dynamic Allocation",
            "formula": "ptr = (type *)malloc(n * sizeof(type))",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "String Buffer Capacity",
            "formula": "sizeof(buffer) >= strlen(str) + 1",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          }
        ],
        "mindMap": [
          {
            "node": "Pointers, Dynamic Memory and String Manipulation",
            "children": [
              "Pointer concept: Memory addresses, pointer variable declaration, and initialization with NULL",
              "Pointer operators: Address-of (&) and dereferencing / indirection (*)",
              "Pointer arithmetic: Incrementation, decrementation, and scaling by sizeof(data_type)",
              "Pointers and arrays: Equivalence of *(arr + i) and arr[i]",
              "Pointers to pointers (Double pointers: **ptr)",
              "Dynamic Memory Allocation: Stack vs Heap memory layout",
              "Allocation functions: malloc(), calloc() (zero-initialization), realloc(), and free()",
              "Common dynamic memory hazards: Memory leaks, dangling pointers, and wild pointers",
              "Character arrays and Strings: The null terminator '\\0' character requirement",
              "String handling functions from <string.h>: strlen, strcpy, strcat, strcmp, strncpy, and strchr"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Correct Understanding #1",
            "conceptB": "Common Student Pitfall #1",
            "comparisonPoints": [
              {
                "feature": "Key Concept",
                "a": "Follow established laws strictly",
                "b": "Dereferencing uninitialized or NULL pointers (causes instant segmentation fault)."
              }
            ]
          },
          {
            "conceptA": "Correct Understanding #2",
            "conceptB": "Common Student Pitfall #2",
            "comparisonPoints": [
              {
                "feature": "Key Concept",
                "a": "Follow established laws strictly",
                "b": "Forgetting to free() heap memory allocated by malloc/calloc."
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "Pointer Operators",
            "back": "& Gives Address, * Gets Value (AGV)"
          },
          {
            "front": "String Rule",
            "back": "Count Characters Plus One For Null (CCPON)"
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "What is a memory leak and how do you prevent it in C?",
            "answer": "A memory leak occurs when dynamically allocated heap memory is not released with free() before the pointer variable goes out of scope or is overwritten. It is prevented by always pairing every malloc/calloc with a corresponding free() call when the memory is no longer needed."
          },
          {
            "question": "Why does arr[i] equal i[arr] in C?",
            "answer": "In C, array subscript notation arr[i] is defined as *(arr + i). Because addition is commutative, *(arr + i) is identical to *(i + arr), which by definition evaluates to i[arr]."
          }
        ]
      }
    },
    {
      "id": "c-u5",
      "unitNumber": "Unit V",
      "title": "Structures, Unions, Enumerations and File Streams",
      "description": "User-defined composite types, struct declaration and memory alignment/padding, structure pointers and arrow operator (->), nested structures, arrays of structures, unions and memory sharing, typedef aliases, enum named constants, file streams, file modes (r, w, a, rb, wb), text and binary file I/O (fprintf, fscanf, fread, fwrite), and file position navigation (fseek, ftell, rewind).",
      "topics": [
        "Structures: Definition, declaration, initialization, and dot (.) member operator",
        "Structure memory alignment, padding bytes, and sizeof(struct)",
        "Array of structures and passing structures to functions (by value vs by pointer)",
        "Structure pointers and the arrow (->) member access operator",
        "Nested structures (structures within structures)",
        "Unions: Syntax, memory overlap (shared storage), and difference between struct and union",
        "Type definitions (typedef) and Enumerations (enum)",
        "File management in C: Concept of streams and the FILE pointer",
        "File opening and closing: fopen(), fclose(), and file access modes (r, w, a, r+, w+, a+, rb, wb)",
        "Character and Formatted File I/O: fgetc, fputc, fgets, fputs, fprintf, and fscanf",
        "Block / Binary File I/O: fread() and fwrite()",
        "Random File Access: fseek(), ftell(), rewind(), and feof() EOF detection"
      ],
      "lessons": [
        {
          "id": "c-u5-l1",
          "unitId": "c-u5",
          "subjectId": "c-programming",
          "title": "Structures: Member Access, Memory Padding & Struct Pointers",
          "durationMinutes": 35,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Basic data types",
            "Pointers and memory addresses"
          ],
          "realLifeQuestion": {
            "en": "If a student has a name (string), roll number (int), and GPA (float), why can't an ordinary array store all three, and why does sizeof(struct) often report more bytes than the sum of its fields?",
            "hinglish": "Ek student ka name (string), roll number (int), aur GPA (float) hota hai. Ek aam array in teeno ko ek saath store kyu nahi kar sakta, aur sizeof(struct) fields ke sum se zyada bytes kyu batata hai?",
            "hi": "एक छात्र का नाम, रोल नंबर और जीपीए एक सामान्य ऐरे में क्यों संग्रहीत नहीं हो सकते, और संरचना का आकार उसके अवयवों के योग से अधिक क्यों होता है?"
          },
          "simpleExplanation": {
            "en": "Arrays can only store homogeneous data (elements of the exact same data type). Real-world entities require heterogeneous collections of different types. A structure (struct) is a user-defined composite data type that packages multiple distinct variables under a single name. Members are accessed using the dot (.) operator on struct variables, or using the arrow (->) operator on struct pointers (ptr->member is shorthand for (*ptr).member). Modern CPU architectures read data from RAM in 4-byte or 8-byte aligned chunks for speed; to maintain this alignment, compilers insert invisible empty bytes called Structure Padding, making sizeof(struct) larger than the pure mathematical sum of member sizes.",
            "hinglish": "Array sirf ek hi type ka data store karta hai. Asli duniya me alag-alag data types ko ek saath rakhne ke liye Structure (struct) banaya jata hai jaise student record (name, roll, gpa). Normal variable se member access karne ke liye dot (.) lagate hain, aur pointer se access karne ke liye arrow (->) operator lagate hain. CPU RAM se data 4 ya 8 bytes ke chunks me padhta hai; is speed ko maintain karne ke liye compiler beech me khali padding bytes daal deta hai, jisse sizeof(struct) thoda bada nikalta hai.",
            "hi": "संरचना (struct) विभिन्न डेटा प्रकारों का उपयोगकर्ता-परिभाषित समूह है। सदस्य अभिगमन हेतु डॉट (.) तथा पॉइंटर हेतु तीर (->) ऑपरेटर का उपयोग होता है। संरेखण हेतु पैडिंग बाइट्स जोड़ी जाती हैं।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "An array is like a medicine pill organizer where every slot must hold identical vitamin pills. A struct is like a student identity badge holder containing a photo, a plastic ID card, and a folded paper slip all bundled neatly into one single pocket.",
              "hinglish": "Array dawa ki dibbi jaisa hai jisme saari goliya ek hi size ki hoti hain. Struct student ke ID card holder jaisa hai jisme ek plastic card (roll no), photo (char), aur cash (float) alag-alag type ki cheezein ek saath rakhi hoti hain.",
              "hi": "ऐरे एक जैसी दवाओं के बॉक्स की तरह है और संरचना एक आईडी कार्ड होल्डर की तरह है जिसमें विभिन्न प्रकार की वस्तुएं एक साथ होती हैं।"
            },
            "limitations": {
              "en": "An ID card holder doesn't force gaps; CPU hardware strictly demands memory addresses divisible by 4 or 8, creating padding gaps.",
              "hinglish": "CPU hardware fast access ke liye alignment ke hisaab se beech me khali space (padding) chhodta hai.",
              "hi": "सीपीयू संरेखण हेतु अनिवार्य रूप से पैडिंग बाइट्स जोड़ता है।"
            }
          },
          "terminology": [
            {
              "term": "Structure (struct)",
              "definition": {
                "en": "A user-defined data type grouping heterogeneous data members together.",
                "hinglish": "Alag-alag data types ko ek saath pack karne wala custom type.",
                "hi": "विभिन्न डेटा प्रकारों का उपयोगकर्ता-परिभाषित समूह।"
              }
            },
            {
              "term": "Arrow Operator (->)",
              "definition": {
                "en": "Member access operator used through a pointer to a struct: ptr->field == (*ptr).field.",
                "hinglish": "Struct pointer se members ko access karne wala shortcut operator.",
                "hi": "पॉइंटर द्वारा संरचना सदस्यों तक पहुंचने वाला ऑपरेटर।"
              }
            },
            {
              "term": "Structure Padding",
              "definition": {
                "en": "Unused bytes inserted between structure members to align data to CPU word boundaries.",
                "hinglish": "CPU speed badhane ke liye compiler dwara daali gayi khali bytes.",
                "hi": "मेमोरी संरेखण हेतु डाली गई अतिरिक्त बाइट्स।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "struct-padding",
            "structName": "Student",
            "layout": [
              "char grade (1 byte)",
              "padding (3 bytes)",
              "int roll (4 bytes)",
              "double gpa (8 bytes)"
            ],
            "totalSize": "16 bytes (1+3+4+8)"
          },
          "underlyingPrinciple": {
            "en": "Data Alignment and Word Boundaries: Accessing an unaligned 32-bit integer on an odd memory address requires the CPU memory controller to perform two memory read cycles instead of one.",
            "hinglish": "Agar variable sahi memory boundary par na ho toh CPU ko do baar memory read karni padti hai, jisse program slow ho jata hai.",
            "hi": "डेटा संरेखण: सीपीयू की गति बनाए रखने हेतु 4 या 8 बाइट्स के गुणज पर मेमोरी रखी जाती है।"
          },
          "formulaLogic": {
            "formula": "\\text{Arrow Equivalence: } ptr\\to member \\equiv (*ptr).member",
            "description": {
              "en": "Syntactic equivalence of the arrow operator with pointer dereferencing and dot access.",
              "hinglish": "Arrow operator aur dereference dot notation ka aapsi equivalence.",
              "hi": "तीर ऑपरेटर और डीरेफ़रेंस डॉट की तुल्यता।"
            },
            "symbols": [
              {
                "symbol": "ptr",
                "meaning": "Pointer to a structure instance",
                "unit": "address"
              },
              {
                "symbol": "->",
                "meaning": "Dereference and select member in one token",
                "unit": "operator"
              },
              {
                "symbol": "(*ptr).member",
                "meaning": "Explicit dereference with precedence parentheses",
                "unit": "expression"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Consider the structure: struct Sample { char a; int b; char c; };. What is sizeof(struct Sample) on a 32/64-bit architecture with 4-byte int alignment? How can you reorder members to minimize wasted RAM?",
              "hinglish": "struct Sample { char a; int b; char c; }; ka sizeof kitna hoga? Members ko kaise reorder karein taaki memory waste na ho?",
              "hi": "दिए गए struct Sample का आकार क्या होगा और न्यूनतम मेमोरी हेतु इसे कैसे पुनर्व्यवस्थित करें?"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Analyze original layout with padding",
                "explanation": {
                  "en": "char a takes 1 byte at offset 0. int b requires a 4-byte boundary (offset divisible by 4), so 3 padding bytes are inserted at offsets 1-3. int b takes offsets 4-7 (4 bytes). char c takes offset 8 (1 byte). The whole struct must be a multiple of the largest member (4 bytes), so 3 trailing padding bytes are added at offsets 9-11. Total = 12 bytes!",
                  "hinglish": "char a (1B) + 3 padding bytes + int b (4B) + char c (1B) + 3 padding bytes = Total 12 bytes!",
                  "hi": "a(1) + 3 पैडिंग + b(4) + c(1) + 3 पैडिंग = कुल 12 बाइट्स।"
                },
                "math": "1 + 3 (\\text{pad}) + 4 + 1 + 3 (\\text{pad}) = 12 \\text{ bytes}"
              },
              {
                "stepNumber": 2,
                "title": "Reorder members to pack data efficiently",
                "explanation": {
                  "en": "Group smaller types together: struct Optimized { int b; char a; char c; };. int b occupies offsets 0-3 (4 bytes). char a occupies offset 4 (1 byte). char c occupies offset 5 (1 byte). Only 2 trailing padding bytes are needed at offsets 6-7 to round to 8. Total size drops from 12 bytes to 8 bytes (33% RAM savings)!",
                  "hinglish": "int b (4B) + char a (1B) + char c (1B) + 2 padding bytes = Total 8 bytes! 4 bytes bachat hui.",
                  "hi": "b(4) + a(1) + c(1) + 2 पैडिंग = कुल 8 बाइट्स (33% बचत)।"
                },
                "math": "4 + 1 + 1 + 2 (\\text{pad}) = 8 \\text{ bytes}"
              }
            ],
            "finalAnswer": "Original structure takes 12 bytes; reordering to int b; char a; char c; reduces size to 8 bytes."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Writing *ptr.member instead of (*ptr).member or ptr->member.",
                "hinglish": "*ptr.member likhna (*ptr).member ki jagah.",
                "hi": "*ptr.member लिखना।"
              },
              "correction": {
                "en": "The dot (.) operator has higher precedence than the dereference (*) operator. *ptr.member parses as *(ptr.member), attempting to access member on a pointer, causing a compiler error. Always write (*ptr).member or simply ptr->member.",
                "hinglish": "Dot (.) ki precedence dereference (*) se high hoti hai, isliye *ptr.member error deta hai. Hamesha ptr->member likho.",
                "hi": "डॉट ऑपरेटर की प्राथमिकता अधिक होने से ptr->member लिखना सर्वोत्तम है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u5-l1-p1",
              "question": {
                "en": "If sPtr is a pointer to a struct, which operator directly accesses its members?",
                "hinglish": "Struct pointer se members access karne ke liye kaun sa operator use hota hai?",
                "hi": "संरचना पॉइंटर से सदस्यों तक पहुँचने वाला ऑपरेटर कौन सा है?"
              },
              "hint": {
                "en": "Consists of a minus sign and a greater-than sign.",
                "hinglish": "Teer jaisa symbol (->).",
                "hi": "तीर प्रतीक (->)।"
              },
              "explanation": {
                "en": "The arrow operator (->) dereferences the pointer and accesses the member in a single operation: sPtr->member.",
                "hinglish": "Arrow operator (->) struct pointer ke liye use hota hai.",
                "hi": "तीर ऑपरेटर (->) संरचना पॉइंटर हेतु प्रयुक्त होता है।"
              },
              "correctAnswer": 3,
              "level": "Beginner",
              "options": [
                ". (Dot operator)",
                "* (Asterisk)",
                ":: (Scope resolution)",
                "-> (Arrow operator)"
              ],
              "correctIndex": 3
            }
          ],
          "summary": {
            "en": [
              "struct bundles heterogeneous data types into a single composite data unit.",
              "Use dot (.) for struct variables and arrow (->) for struct pointers.",
              "Compilers add structure padding bytes to align fields to CPU word boundaries.",
              "Reordering struct members by descending size minimizes wasted padding RAM."
            ],
            "hinglish": [
              "struct alag-alag data types ko ek package me bind karta hai.",
              "Variable ke liye dot (.) aur pointer ke liye arrow (->) use hota hai.",
              "CPU alignment ke liye compiler beech me padding bytes add karta hai.",
              "Bade types pehle likhne se memory padding kam ho jati hai."
            ],
            "hi": [
              "struct विभिन्न प्रकारों का समूह है।",
              "चर हेतु डॉट (.) और पॉइंटर हेतु तीर (->) का प्रयोग होता है।",
              "संरेखण हेतु पैडिंग बाइट्स जोड़ी जाती हैं।",
              "बड़े चरों को पहले रखने से पैडिंग घटती है।"
            ]
          },
          "quiz": [
            {
              "id": "c-u5-l1-q1",
              "question": {
                "en": "What is the minimum size of struct Empty {} in standard C?",
                "hinglish": "Standard C me khali struct ka size kya hota hai?",
                "hi": "मानक सी में खाली संरचना का आकार क्या होता है?"
              },
              "options": [
                "0 bytes",
                "1 byte",
                "4 bytes",
                "Empty structs are illegal in standard C"
              ],
              "correctIndex": 3,
              "hint": {
                "en": "ISO C forbids empty structure definitions without at least one named member.",
                "hinglish": "Standard C me kam se kam 1 member hona zaroori hai.",
                "hi": "कम से कम एक सदस्य अनिवार्य है।"
              },
              "explanation": {
                "en": "According to the ISO C standard, a structure must contain at least one named member; empty structs are illegal in standard C (though GCC allows it as an extension with size 0).",
                "hinglish": "Standard C me empty struct allow nahi hoti.",
                "hi": "मानक सी में खाली संरचना परिभाषित करना अवैध है।"
              }
            }
          ]
        },
        {
          "id": "c-u5-l2",
          "unitId": "c-u5",
          "subjectId": "c-programming",
          "title": "Unions, Memory Overlap, typedef & Enumerations (enum)",
          "durationMinutes": 30,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Structures",
            "Memory addressing"
          ],
          "realLifeQuestion": {
            "en": "How does an embedded smartwatch sensor chip measure either temperature (float) OR step-count (int) using the exact same physical 4 bytes of hardware register?",
            "hinglish": "Smartwatch ka sensor chip ek hi 4 bytes ki memory me kabhi temperature (float) toh kabhi step count (int) kaise store karta hai bina extra memory lagaye?",
            "hi": "स्मार्टवॉच चिप समान मेमोरी स्थान में विभिन्न प्रकार का डेटा कैसे संग्रहीत करती है?"
          },
          "simpleExplanation": {
            "en": "A union is a user-defined data type syntactically identical to a struct, but with one massive difference: while a struct allocates independent memory for every member, a union stores ALL of its members in the EXACT SAME MEMORY LOCATION! The size of a union is simply equal to the size of its single largest member. Writing to one member overwrites the values of all other members. Unions are ideal when an entity can hold one of several possible data types at any given moment, but never multiple simultaneously. typedef creates clean human-readable aliases for complex types, and enum defines named integer constants (like Sunday=0, Monday=1).",
            "hinglish": "Union ka syntax struct jaisa hi hota hai, par sabse bada farak ye hai ki struct me har member ka alag ghar hota hai, jabki union me saare members EK HI SHARED MEMORY par rehte hain! Union ka total size uske sabse bade member ke barabar hota hai. Ek member me value daalne par doosra overwrite ho jata hai. typedef kisi complex data type ko chota naam dene ke kaam aata hai, aur enum naam wale integer constants (jaise RED=0, GREEN=1) banata hai.",
            "hi": "यूनियन (union) में सभी सदस्य एक ही मेमोरी स्थान साझा करते हैं। इसका आकार सबसे बड़े सदस्य के बराबर होता है। typedef उपनाम बनाता है और enum पूर्णांक स्थिरांक परिभाषित करता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "A struct is like an apartment building where everyone has their own private bedroom. A union is like a single hotel room bed with one bed: Alice can sleep there, or Bob can sleep there, but both cannot sleep there at the same time without crushing each other!",
              "hinglish": "Struct ek apartment hai jahan har member ka apna personal room hai. Union ek single bed hai: uspar ya toh Alice so sakti hai ya Bob; dono ek saath nahi so sakte.",
              "hi": "संरचना में सबके पास अलग कमरा होता है; यूनियन एक साझा बिस्तर की तरह है जिसे एक समय में एक ही व्यक्ति उपयोग कर सकता है।"
            },
            "limitations": {
              "en": "In a hotel room, Bob sees Alice's discarded clothes; in a union, reading member B after writing member A interprets the raw binary bits of A through the type lens of B (type punning).",
              "hinglish": "Union me ek member likh kar doosra read karne se binary bits ka conversion ho jata hai.",
              "hi": "एक सदस्य लिखकर दूसरे को पढ़ने पर बिट्स का पुनर्व्याख्यान होता है।"
            }
          },
          "terminology": [
            {
              "term": "Union",
              "definition": {
                "en": "A composite data type where all members share the same base memory address.",
                "hinglish": "Aisa data type jisme saare members ek hi memory address share karte hain.",
                "hi": "वह डेटा प्रकार जिसमें सभी सदस्य समान मेमोरी साझा करते हैं।"
              }
            },
            {
              "term": "typedef",
              "definition": {
                "en": "A keyword creating an alias / synonym for an existing data type.",
                "hinglish": "Kisi lambe type name ko aasan shortcut naam dene wala keyword.",
                "hi": "मौजूदा डेटा प्रकार हेतु नया उपनाम बनाने वाला कीवर्ड।"
              }
            },
            {
              "term": "Enumeration (enum)",
              "definition": {
                "en": "A user-defined type consisting of a set of named integer constants.",
                "hinglish": "Naam wale integer constants ka group.",
                "hi": "नामित पूर्णांक स्थिरांकों का समूह।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "union-memory",
            "structSize": "sizeof(struct { char c; int i; double d; }) = 16 bytes",
            "unionSize": "sizeof(union { char c; int i; double d; }) = 8 bytes (shares largest)"
          },
          "underlyingPrinciple": {
            "en": "Shared Memory Overlay: Union fields have offset 0 from the base address, allowing multiple semantic views over a single memory buffer.",
            "hinglish": "Union ke saare fields offset 0 se shuru hote hain jisse same memory ko alag tareeqe se dekha ja sakta hai.",
            "hi": "साझा मेमोरी ओवरले: सभी सदस्य आधार पते से प्रारंभ होते हैं।"
          },
          "formulaLogic": {
            "formula": "\\text{sizeof}(\\text{union } U) = \\max(\\text{sizeof}(m_1), \\text{sizeof}(m_2), \\dots) + \\text{padding}",
            "description": {
              "en": "Union size equals the size of its largest member, rounded to its strictest alignment requirement.",
              "hinglish": "Union ka size sabse bade member ke size ke barabar hota hai.",
              "hi": "यूनियन का आकार सबसे बड़े सदस्य के बराबर होता है।"
            },
            "symbols": [
              {
                "symbol": "m_k",
                "meaning": "Member k declared inside union",
                "unit": "field"
              },
              {
                "symbol": "\\max(...)",
                "meaning": "Maximum byte size among members",
                "unit": "bytes"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Given union Data { int i; float f; char str[20]; };, what is sizeof(union Data)? What happens if you assign data.i = 10; and then strcpy(data.str, \"LearnVerse\");?",
              "hinglish": "union Data { int i; float f; char str[20]; }; ka size kitna hoga? data.i = 10 ke baad strcpy karne par kya hoga?",
              "hi": "दिए गए यूनियन का आकार क्या होगा और स्ट्रिंग कॉपी करने पर पूर्णांक मान का क्या होगा?"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Compute size of largest member",
                "explanation": {
                  "en": "sizeof(int) = 4, sizeof(float) = 4, sizeof(str[20]) = 20 * 1 = 20 bytes. The largest member is str[20] with 20 bytes. 20 is already divisible by 4 (alignment of int/float), so sizeof(union Data) = 20 bytes.",
                  "hinglish": "int = 4B, float = 4B, str = 20B. Sabse bada 20 bytes hai, isliye union ka total size 20 bytes hoga.",
                  "hi": "सबसे बड़ा सदस्य str (20 बाइट्स) है, अतः आकार 20 बाइट्स होगा।"
                },
                "math": "\\text{sizeof(union Data)} = \\max(4, 4, 20) = 20 \\text{ bytes}"
              },
              {
                "stepNumber": 2,
                "title": "Trace shared memory overwrite",
                "explanation": {
                  "en": "Assigning data.i = 10 writes the integer 10 into the first 4 bytes. Next, calling strcpy(data.str, \"LearnVerse\") writes characters 'L', 'e', 'a', 'r'... directly into those exact same bytes! The integer 10 is completely overwritten and lost.",
                  "hinglish": "Pehle 10 likha gaya, par strcpy karte hi usi memory par \"LearnVerse\" ke letters chadh gaye, aur 10 overwrite hokar khatam ho gaya.",
                  "hi": "स्ट्रिंग कॉपी करते ही पूर्णांक मान ओवरराइट होकर नष्ट हो जाता है।"
                },
                "math": "\\text{data.i was corrupted by characters of data.str}"
              }
            ],
            "finalAnswer": "Size is 20 bytes; writing to data.str completely overwrites data.i."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Expecting all union members to retain their values simultaneously like a struct.",
                "hinglish": "Ye sochna ki union me saare members ek saath apni value yaad rakhenge.",
                "hi": "यह सोचना कि यूनियन में सभी सदस्य एक साथ मान सुरक्षित रखते हैं।"
              },
              "correction": {
                "en": "A union only holds ONE valid member value at any time. Writing to one member corrupts the values of all other members because they share the exact same physical bytes.",
                "hinglish": "Union me ek waqt par sirf ek hi member valid hota hai. Doosra likhte hi pehla kharab ho jata hai.",
                "hi": "यूनियन में एक समय में केवल एक ही सदस्य का मान मान्य होता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u5-l2-p1",
              "question": {
                "en": "What is the default integer value assigned to the first identifier in an enum if not explicitly initialized?",
                "hinglish": "Agar explicitly value na di jaye toh enum ke pehle naam ko kaun sa integer number milta hai?",
                "hi": "enum के प्रथम सदस्य को डिफ़ॉल्ट रूप से कौन सा मान मिलता है?"
              },
              "hint": {
                "en": "Counting begins from zero.",
                "hinglish": "Ginti 0 se shuru hoti hai.",
                "hi": "गिनती 0 से प्रारंभ होती है।"
              },
              "explanation": {
                "en": "In C, enum members are assigned consecutive integer values starting from 0 by default.",
                "hinglish": "enum ka pehla member default roop se 0 hota hai.",
                "hi": "enum के प्रथम सदस्य का मान सदैव 0 से प्रारंभ होता है।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "1",
                "0",
                "-1",
                "Undefined"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "Unions allocate shared memory equal to the size of the largest member.",
              "Only one union member can be safely stored and retrieved at any time.",
              "typedef simplifies complex syntax by creating readable type aliases.",
              "enum defines named integer constants beginning from 0 by default."
            ],
            "hinglish": [
              "Union me saare members ek hi memory share karte hain (size = sabse bada member).",
              "Ek waqt par sirf ek hi member valid rehta hai.",
              "typedef se hum data types ko readable nickname de sakte hain.",
              "enum 0 se shuru hone wale named integer constants banata hai."
            ],
            "hi": [
              "यूनियन सबसे बड़े सदस्य के बराबर साझा मेमोरी आवंटित करता है।",
              "एक समय में केवल एक ही सदस्य मान्य रहता है।",
              "typedef नए उपनाम बनाता है।",
              "enum 0 से प्रारंभ होने वाले नामित स्थिरांक बनाता है।"
            ]
          },
          "quiz": [
            {
              "id": "c-u5-l2-q1",
              "question": {
                "en": "Which keyword creates a new type alias in C like typedef unsigned long ulong;",
                "hinglish": "C me type alias banane ke liye kaun sa keyword use hota hai?",
                "hi": "सी में प्रकार उपनाम बनाने के लिए किस कीवर्ड का उपयोग होता है?"
              },
              "options": [
                "alias",
                "typedef",
                "define",
                "using"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "Short for \"type definition\".",
                "hinglish": "typedef.",
                "hi": "टाइपडेफ़।"
              },
              "explanation": {
                "en": "typedef is the official C keyword used to define type synonyms/aliases.",
                "hinglish": "typedef se alias banaya jata hai.",
                "hi": "typedef द्वारा प्रकार उपनाम बनाए जाते हैं।"
              }
            }
          ]
        },
        {
          "id": "c-u5-l3",
          "unitId": "c-u5",
          "subjectId": "c-programming",
          "title": "File Streams, File Modes (r, w, a), I/O & Random Access (fseek)",
          "durationMinutes": 40,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Pointers",
            "Structures (FILE is a struct)"
          ],
          "realLifeQuestion": {
            "en": "When your laptop battery suddenly dies, why is a saved Word document intact on your hard drive, but unsaved text typed in a console program vanishes into thin air?",
            "hinglish": "Laptop ki battery achanak band hone par hard drive me save file bachi rehti hai, par console screen par likha data gayab kyu ho jata hai?",
            "hi": "बिजली जाने पर हार्ड ड्राइव की फाइलें क्यों सुरक्षित रहती हैं जबकि रैम का डेटा नष्ट हो जाता है?"
          },
          "simpleExplanation": {
            "en": "RAM memory is volatile: when a program terminates or power drops, all variables vanish. Persistent data storage requires writing to non-volatile secondary storage (SSD/HDD) through Files. In C, file interaction is abstracted through a File Stream controlled via a FILE *pointer from <stdio.h>. We interact with files in 4 essential steps: (1) fopen(filename, mode) opens a stream (modes: \"r\"=read, \"w\"=write/overwrite, \"a\"=append, \"rb\"/\"wb\"=binary), (2) check for NULL pointer in case file was missing or permission denied, (3) read or write using formatted I/O (fprintf/fscanf) or block I/O (fread/fwrite), and (4) fclose(fp) flushes internal buffers and closes the stream. For non-sequential access, fseek() jumps to any byte offset (using SEEK_SET, SEEK_CUR, SEEK_END) and ftell() returns the current byte position.",
            "hinglish": "RAM volatile hoti hai: program band hote hi data mit jata hai. Permanent data store karne ke liye Hard Disk/SSD par Files banani padti hain. C language me file kaam FILE *pointer ke zariye stream abstraction se hota hai: (1) fopen(\"file.txt\", \"mode\") file kholta hai (\"r\"=read, \"w\"=write/overwrite, \"a\"=append/jodna), (2) hamesha NULL check karo agar file na mile, (3) data likhne/padhne ke liye fprintf, fscanf, fread, fwrite use karo, aur (4) fclose(fp) se file band karo taaki buffer disk me save ho sake. Kisi specific byte par jump karne ke liye fseek() aur current position janne ke liye ftell() use hota hai.",
            "hi": "फाइलें स्थायी भंडारण प्रदान करती हैं। fopen स्ट्रीम खोलता है, fprintf/fscanf डेटा संसाधित करते हैं, fclose बफर सुरक्षित कर स्ट्रीम बंद करता है, तथा fseek रैंडम एक्सेस प्रदान करता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "A file on your hard disk is like a thick paper notebook inside a library. fopen(\"r\") is asking the librarian for the notebook. The FILE *pointer is a bookmark sitting between the pages. As you read (fscanf), the bookmark slides forward line by line. fseek() is picking up the bookmark and moving it directly to Page 150. fclose() is closing the notebook and handing it back to the librarian.",
              "hinglish": "Hard disk ki file library ki register notebook jaisi hai. fopen() notebook maangna hai. FILE *pointer ek bookmark hai jo current line ko point karta hai. fseek() bookmark ko utha kar direct kisi page par rakhna hai, aur fclose() register librarian ko wapas lauta kar almari me lock karna hai.",
              "hi": "फाइल एक नोटबुक की तरह है; FILE पॉइंटर बुकमार्क की तरह है जो वर्तमान पृष्ठ को इंगित करता है।"
            },
            "limitations": {
              "en": "A physical bookmark doesn't write new ink; in C, opening with mode \"w\" erases all previous text in the notebook instantly upon opening!",
              "hinglish": "Notebook me purana likha rehta hai, par C me \"w\" mode kholte hi file ka purana saara data turant delete (truncate) ho jata hai.",
              "hi": "\"w\" मोड में खोलते ही फ़ाइल का पुराना समस्त डेटा नष्ट हो जाता है।"
            }
          },
          "terminology": [
            {
              "term": "FILE Pointer",
              "definition": {
                "en": "A pointer to an internal system structure tracking file descriptor, buffer, and current position.",
                "hinglish": "System struct ka pointer jo file ki current location aur buffer track karta hai.",
                "hi": "फ़ाइल स्ट्रीम को नियंत्रित करने वाला संरचना पॉइंटर।"
              }
            },
            {
              "term": "Append Mode (\"a\")",
              "definition": {
                "en": "File mode where new writes are placed at the end without erasing existing contents.",
                "hinglish": "Aisa mode jo purana data delete kiye bina aakhiri me naya data jodta hai.",
                "hi": "फ़ाइल के अंत में नया डेटा जोड़ने वाला मोड।"
              }
            },
            {
              "term": "fseek()",
              "definition": {
                "en": "Repositioning function: moves stream position pointer to a designated byte offset.",
                "hinglish": "File me aage-peeche kisi bhi byte par jump karne wala function.",
                "hi": "फ़ाइल स्थिति सूचक को स्थानांतरित करने वाला फ़ंक्शन।"
              }
            },
            {
              "term": "EOF",
              "definition": {
                "en": "End Of File: integer constant (-1) signaling that the end of stream has been reached.",
                "hinglish": "End of file indicator jo batata hai ki file khatam ho chuki hai.",
                "hi": "फ़ाइल की समाप्ति दर्शाने वाला स्थिरांक (-1)।"
              }
            }
          ],
          "visualType": "c-code",
          "visualData": {
            "mode": "file-stream",
            "filename": "data.txt",
            "modes": [
              "\"r\" (Read only, must exist)",
              "\"w\" (Write only, creates or wipes)",
              "\"a\" (Append to end, creates if missing)"
            ]
          },
          "underlyingPrinciple": {
            "en": "OS Virtual File System & Buffered I/O: User space writes into a memory buffer; dirty pages are flushed to physical storage sectors on buffer fill or fclose().",
            "hinglish": "C pehle RAM ke buffer me data likhta hai; fclose() karne par buffer hard disk ke sectors me permanently flush hota hai.",
            "hi": "बफर्ड इनपुट/आउटपुट: डेटा पहले बफर में जाता है और fclose पर डिस्क में सुरक्षित होता है।"
          },
          "formulaLogic": {
            "formula": "\\text{fseek}(fp, \\text{offset}, \\text{origin}) \\quad \\text{where origin} \\in \\{\\text{SEEK\\_SET}, \\text{SEEK\\_CUR}, \\text{SEEK\\_END}\\}",
            "description": {
              "en": "Random file navigation formula moving the file position pointer by offset bytes from origin.",
              "hinglish": "File me position badalne ka formula: SEEK_SET (shuruat), SEEK_CUR (current), SEEK_END (ant).",
              "hi": "फ़ाइल में यादृच्छिक नेविगेशन का सूत्र।"
            },
            "symbols": [
              {
                "symbol": "fp",
                "meaning": "Active FILE pointer",
                "unit": "FILE*"
              },
              {
                "symbol": "offset",
                "meaning": "Bytes to move (positive or negative)",
                "unit": "long"
              },
              {
                "symbol": "origin",
                "meaning": "SEEK_SET (0), SEEK_CUR (1), SEEK_END (2)",
                "unit": "constant"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Write the complete C code to determine the exact size of a file in bytes using fseek() and ftell(). Explain how it works.",
              "hinglish": "fseek aur ftell ka use karke kisi file ka size bytes me calculate karne ka complete code likho aur samjhao.",
              "hi": "fseek और ftell का उपयोग करके फ़ाइल का आकार बाइट्स में ज्ञात करने का कोड लिखिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Open file and seek to the end",
                "explanation": {
                  "en": "Open the file in binary read mode: FILE *fp = fopen(\"file.bin\", \"rb\"); Check if fp == NULL. Call fseek(fp, 0, SEEK_END); to jump the file pointer directly to the very last byte.",
                  "hinglish": "File ko \"rb\" mode me kholo. fseek(fp, 0, SEEK_END); likh kar pointer ko direct aakhiri byte par le jao.",
                  "hi": "फ़ाइल को खोलकर fseek(fp, 0, SEEK_END) द्वारा संकेतक को अंतिम बाइट पर ले जाएं।"
                },
                "math": "\\text{fseek}(fp, 0, \\text{SEEK\\_END}) \\implies \\text{pointer at end of file}"
              },
              {
                "stepNumber": 2,
                "title": "Query position with ftell()",
                "explanation": {
                  "en": "long size = ftell(fp); ftell returns the byte offset of the pointer from the beginning of the file. Since the pointer is at the end, this value is exactly the file size in bytes!",
                  "hinglish": "ftell(fp) se position pucho. Kyunki pointer aakhiri me hai, isliye shuruat se aakhiri tak ka offset file ka total size batayega!",
                  "hi": "ftell(fp) अंतिम स्थिति लौटाता है जो फ़ाइल का कुल आकार होता है।"
                },
                "math": "\\text{long size} = \\text{ftell}(fp)"
              },
              {
                "stepNumber": 3,
                "title": "Close the file safely",
                "explanation": {
                  "en": "Call fclose(fp); to release the file handle back to the operating system.",
                  "hinglish": "fclose(fp); karke file handle ko close kar do.",
                  "hi": "fclose(fp) द्वारा फ़ाइल बंद करें।"
                },
                "math": "\\text{fclose}(fp)"
              }
            ],
            "finalAnswer": "File size is determined accurately in bytes by seeking to SEEK_END and reading ftell()."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Opening a file with \"w\" mode expecting to read existing contents.",
                "hinglish": "\"w\" mode me khol kar purana data padhne ki koshish karna.",
                "hi": "\"w\" मोड में फ़ाइल खोलकर पुराना डेटा पढ़ने का प्रयास करना।"
              },
              "correction": {
                "en": "Opening a file in \"w\" (write) mode immediately truncates and erases all existing contents to zero length! To read, always use \"r\". To append without erasing, use \"a\".",
                "hinglish": "\"w\" mode kholte hi purana saara data delete ho jata hai. Padhne ke liye \"r\" aur jodne ke liye \"a\" use karo.",
                "hi": "\"w\" मोड तुरंत पुराने डेटा को मिटा देता है; पढ़ने हेतु सदैव \"r\" का प्रयोग करें।"
              }
            },
            {
              "misconception": {
                "en": "Forgetting to check if fopen() returned NULL.",
                "hinglish": "fopen() ke baad NULL check karna bhool jana.",
                "hi": "fopen() के बाद NULL की जांच न करना।"
              },
              "correction": {
                "en": "If a file does not exist or user lacks permission, fopen returns NULL. Passing a NULL pointer to fprintf or fscanf results in an instant segmentation fault crash.",
                "hinglish": "File na milne par fopen NULL return karta hai. NULL check kiye bina read/write karne se crash ho jayega.",
                "hi": "फ़ाइल न मिलने पर fopen शून्य लौटाता है; NULL की जांच अनिवार्य है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "c-u5-l3-p1",
              "question": {
                "en": "Which origin constant in fseek() positions the pointer relative to the beginning of the file?",
                "hinglish": "fseek me file ki shuruat se offset ginne ke liye kaun sa constant use hota hai?",
                "hi": "fseek में फ़ाइल के आरंभ से ऑफसेट गिनने हेतु कौन सा स्थिरांक प्रयुक्त होता है?"
              },
              "hint": {
                "en": "Sets pointer from the start.",
                "hinglish": "SEEK_SET.",
                "hi": "SEEK_SET।"
              },
              "explanation": {
                "en": "SEEK_SET (origin 0) measures byte offset from the start of the file. SEEK_CUR is from current position, and SEEK_END is from the end.",
                "hinglish": "SEEK_SET shuruat se offset calculate karta hai.",
                "hi": "SEEK_SET फ़ाइल के आरंभ से ऑफसेट मापता है।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "SEEK_CUR",
                "SEEK_SET",
                "SEEK_END",
                "SEEK_BEG"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "Files provide non-volatile persistent storage on secondary storage (HDD/SSD).",
              "File modes: \"r\" (read), \"w\" (create/truncate write), \"a\" (append to end), \"rb\"/\"wb\" (binary).",
              "Always test if (fp == NULL) and always close files with fclose(fp) to flush buffers.",
              "fseek() navigates to byte offsets and ftell() returns current byte position."
            ],
            "hinglish": [
              "Files data ko permanently Hard Disk/SSD par store karti hain.",
              "Modes: \"r\" (read), \"w\" (wipe & write), \"a\" (append), \"rb\"/\"wb\" (binary).",
              "Hamesha fp == NULL check karo aur kaam khatam hone par fclose(fp) lagao.",
              "fseek() se kisi bhi byte par jump karo aur ftell() se current position jano."
            ],
            "hi": [
              "फाइलें स्थायी भंडारण प्रदान करती हैं।",
              "मोड्स: \"r\" (पठन), \"w\" (लेखन/नया), \"a\" (अंत में जोड़ना)।",
              "NULL की जांच और fclose द्वारा बफर सुरक्षित करना अनिवार्य है।",
              "fseek और ftell यादृच्छिक अभिगमन प्रदान करते हैं।"
            ]
          },
          "quiz": [
            {
              "id": "c-u5-l3-q1",
              "question": {
                "en": "What does the function rewind(fp) do in C?",
                "hinglish": "C language me rewind(fp) function kya karta hai?",
                "hi": "सी में rewind(fp) फ़ंक्शन का क्या कार्य है?"
              },
              "options": [
                "Erases the file contents",
                "Moves the file pointer back to the beginning",
                "Closes and deletes the file",
                "Reads the last character"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "Equivalent to fseek(fp, 0, SEEK_SET).",
                "hinglish": "Pointer shuruat me wapas chala jata hai.",
                "hi": "संकेतक आरंभ में वापस जाता है।"
              },
              "explanation": {
                "en": "rewind(fp) resets the file position indicator to the very beginning of the file, identical to (void)fseek(fp, 0L, SEEK_SET).",
                "hinglish": "rewind(fp) pointer ko wapas file ke start par set kar deta hai.",
                "hi": "rewind(fp) फ़ाइल संकेतक को पुनः आरंभ में स्थापित कर देता है।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "User-defined composite types, struct declaration and memory alignment/padding, structure pointers and arrow operator (->), nested structures, arrays of structures, unions and memory sharing, typedef aliases, enum named constants, file streams, file modes (r, w, a, rb, wb), text and binary file I/O (fprintf, fscanf, fread, fwrite), and file position navigation (fseek, ftell, rewind).",
          "hinglish": "Structures, Unions, Enumerations and File Streams ka poora one-page revision summary jisme saare core formulas, theorems aur exam problems shamil hain.",
          "hi": "Structures, Unions, Enumerations and File Streams का संपूर्ण एक-पृष्ठीय पुनरावलोकन सारांश जिसमें सभी प्रमुख सूत्र और प्रमेय सम्मिलित हैं।"
        },
        "shortNotes": [
          {
            "topic": "Structure",
            "content": {
              "en": "User-defined composite type grouping heterogeneous data members.",
              "hinglish": "User-defined composite type grouping heterogeneous data members.",
              "hi": "User-defined composite type grouping heterogeneous data members."
            }
          },
          {
            "topic": "Union",
            "content": {
              "en": "Composite data type where all members share identical base memory.",
              "hinglish": "Composite data type where all members share identical base memory.",
              "hi": "Composite data type where all members share identical base memory."
            }
          },
          {
            "topic": "Structure Padding",
            "content": {
              "en": "Unused filler bytes inserted by the compiler for memory alignment.",
              "hinglish": "Unused filler bytes inserted by the compiler for memory alignment.",
              "hi": "Unused filler bytes inserted by the compiler for memory alignment."
            }
          },
          {
            "topic": "Stream",
            "content": {
              "en": "Logical interface provided by the C library between program and physical files.",
              "hinglish": "Logical interface provided by the C library between program and physical files.",
              "hi": "Logical interface provided by the C library between program and physical files."
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Arrow Member Access",
            "formula": "ptr->field == (*ptr).field",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Union Size",
            "formula": "sizeof(union) = max(sizeof(member_i)) + padding",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "File Size via seek",
            "formula": "fseek(fp, 0, SEEK_END); size = ftell(fp);",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Random Access Seek",
            "formula": "fseek(fp, offset, SEEK_SET | SEEK_CUR | SEEK_END)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          }
        ],
        "mindMap": [
          {
            "node": "Structures, Unions, Enumerations and File Streams",
            "children": [
              "Structures: Definition, declaration, initialization, and dot (.) member operator",
              "Structure memory alignment, padding bytes, and sizeof(struct)",
              "Array of structures and passing structures to functions (by value vs by pointer)",
              "Structure pointers and the arrow (->) member access operator",
              "Nested structures (structures within structures)",
              "Unions: Syntax, memory overlap (shared storage), and difference between struct and union",
              "Type definitions (typedef) and Enumerations (enum)",
              "File management in C: Concept of streams and the FILE pointer",
              "File opening and closing: fopen(), fclose(), and file access modes (r, w, a, r+, w+, a+, rb, wb)",
              "Character and Formatted File I/O: fgetc, fputc, fgets, fputs, fprintf, and fscanf",
              "Block / Binary File I/O: fread() and fwrite()",
              "Random File Access: fseek(), ftell(), rewind(), and feof() EOF detection"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Correct Understanding #1",
            "conceptB": "Common Student Pitfall #1",
            "comparisonPoints": [
              {
                "feature": "Key Concept",
                "a": "Follow established laws strictly",
                "b": "Opening a file in \"w\" mode expecting to read existing data (truncates file to zero bytes)."
              }
            ]
          },
          {
            "conceptA": "Correct Understanding #2",
            "conceptB": "Common Student Pitfall #2",
            "comparisonPoints": [
              {
                "feature": "Key Concept",
                "a": "Follow established laws strictly",
                "b": "Forgetting to check if fopen() returns NULL."
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "File Modes",
            "back": "RWA (Read, Wipe-Write, Append)"
          },
          {
            "front": "fseek Origins",
            "back": "SCE (Start, Current, End)"
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "What is structure padding and why is it introduced by compilers?",
            "answer": "Structure padding consists of empty bytes inserted between structure members so that data elements align with CPU word boundaries (e.g. 4-byte or 8-byte boundaries). This maximizes memory bus transfer efficiency and prevents multi-cycle unaligned memory access penalties."
          },
          {
            "question": "What is the fundamental difference between a struct and a union?",
            "answer": "In a struct, each member receives distinct independent memory, and total size is the sum of member sizes plus padding. In a union, all members share the exact same memory space, and total size is equal to the size of the single largest member."
          }
        ]
      }
    }
  ],
  "examQuestions": [
    {
      "id": "c-eq1",
      "unitNumber": "Unit I",
      "type": "Short",
      "question": "Explain the four stages of the C compilation pipeline with tools, input/output file extensions, and responsibilities.",
      "solution": "1. Preprocessor (cpp): Processes # directives (#include, #define), removes comments, expands macros. Input: .c -> Output: .i (preprocessed source).\n2. Compiler (c1): Analyzes C syntax, parses semantic AST, generates target-specific assembly mnemonics. Input: .i -> Output: .s (assembly code).\n3. Assembler (as): Translates assembly mnemonics into relocatable binary machine opcodes and symbol tables. Input: .s -> Output: .o or .obj (object file).\n4. Linker (ld): Combines object files with precompiled runtime libraries (libc.a/libc.so) to resolve external references (like printf) and assigns execution addresses. Input: .o -> Output: .exe or a.out (standalone executable).",
      "marks": 5
    },
    {
      "id": "c-eq2",
      "unitNumber": "Unit I",
      "type": "Numerical",
      "question": "Convert the decimal number 245 into its equivalent Binary, Octal, and Hexadecimal representations using step-by-step successive division.",
      "solution": "1. Decimal to Binary: 245/2 = 122 r 1; 122/2 = 61 r 0; 61/2 = 30 r 1; 30/2 = 15 r 0; 15/2 = 7 r 1; 7/2 = 3 r 1; 3/2 = 1 r 1; 1/2 = 0 r 1. Reading remainders bottom-to-top: 245_10 = 11110101_2.\n2. Binary to Hexadecimal: Group into 4-bit nibbles: [1111] [0101]. [1111] = 15 = F_16; [0101] = 5 = 5_16. Hence: 245_10 = 0xF5.\n3. Binary to Octal: Group into 3-bit triplets from right: [011] [110] [101]. [011] = 3; [110] = 6; [101] = 5. Hence: 245_10 = 365_8.",
      "marks": 10
    },
    {
      "id": "c-eq3",
      "unitNumber": "Unit II",
      "type": "Long",
      "question": "Explain the difference between Call-by-Value and Call-by-Reference in C. Write two functions to demonstrate why Call-by-Value fails to swap two integers and how pointers resolve the problem.",
      "solution": "1. Call by Value: C creates duplicate copies of the actual arguments in the local stack frame of the called function. Any modifications are made to the local copies, leaving original variables in main() untouched.\n2. Call by Reference (via Pointers): Instead of values, memory addresses (&a, &b) are passed. The function dereferences pointers (*p) to mutate original RAM locations directly.\n3. Failed Swap Code:\nvoid swapFail(int x, int y) { int temp = x; x = y; y = temp; } // Only swaps local copies!\n4. Successful Swap Code:\nvoid swapSuccess(int *x, int *y) { int temp = *x; *x = *y; *y = temp; }\n5. In main(): int a = 5, b = 10; swapSuccess(&a, &b); printf(\"a=%d, b=%d\", a, b); Output: a=10, b=5.",
      "marks": 10
    },
    {
      "id": "c-eq4",
      "unitNumber": "Unit II",
      "type": "Long",
      "question": "What is Recursion? State the conditions for a valid recursive function. Write a recursive C function to compute the Nth Fibonacci number and draw the recursion tree for N = 4.",
      "solution": "1. Definition: Recursion is a programming technique where a function solves a problem by invoking smaller instances of itself.\n2. Conditions: Must have (a) at least one terminating Base Case preventing infinite loop, and (b) a Recursive Step that strictly moves closer to the base case.\n3. Code:\nint fib(int n) {\n    if (n <= 0) return 0;\n    if (n == 1) return 1;\n    return fib(n - 1) + fib(n - 2);\n}\n4. Recursion Tree for fib(4):\n                fib(4)\n               /      \\\n          fib(3)      fib(2)\n          /    \\      /    \\\n      fib(2)  fib(1) fib(1) fib(0)\n      /    \\\n   fib(1) fib(0)\n5. Summing base values: fib(4) = fib(3) + fib(2) = (1 + 1) + 1 = 3.",
      "marks": 10
    },
    {
      "id": "c-eq5",
      "unitNumber": "Unit III",
      "type": "Long",
      "question": "Write a complete C program to multiply two matrices of order m x k and k x n. Explain the condition for matrix multiplication and derive the time complexity.",
      "solution": "1. Compatibility Condition: Number of columns in Matrix A must equal number of rows in Matrix B (Col_A == Row_B == k). Resulting matrix C has order m x n.\n2. Multiplication Formula: C[i][j] = sum_{p=0}^{k-1} (A[i][p] * B[p][j]).\n3. C Implementation:\nfor (int i = 0; i < m; i++) {\n    for (int j = 0; j < n; j++) {\n        C[i][j] = 0;\n        for (int p = 0; p < k; p++) {\n            C[i][j] += A[i][p] * B[p][j];\n        }\n    }\n}\n4. Time Complexity: Three nested loops execute m, n, and k times respectively. For two square matrices of order n x n, Total Operations = n * n * n = O(n^3).",
      "marks": 10
    },
    {
      "id": "c-eq6",
      "unitNumber": "Unit III",
      "type": "Long",
      "question": "Write a C function to implement Binary Search. Trace the search for key = 42 in the array [11, 22, 33, 42, 55, 66, 77, 88]. Explain why its time complexity is O(log n).",
      "solution": "1. Binary Search Function:\nint binarySearch(int arr[], int n, int key) {\n    int low = 0, high = n - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (arr[mid] == key) return mid;\n        else if (arr[mid] < key) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}\n2. Trace for key = 42 (n = 8):\n- Step 1: low = 0, high = 7. mid = 0 + (7-0)/2 = 3. arr[3] = 42. Since arr[3] == 42, target found immediately at index 3 in 1 comparison!\n3. Complexity Analysis: At each comparison, the search space n is divided by 2: n, n/2, n/4, ..., n/(2^k) = 1. Solving 2^k = n yields k = log2(n). Therefore, worst-case time complexity is O(log n).",
      "marks": 10
    },
    {
      "id": "c-eq7",
      "unitNumber": "Unit IV",
      "type": "Long",
      "question": "What is Dynamic Memory Allocation? Differentiate between malloc() and calloc(). Write a C snippet to dynamically allocate an array of N floats, read values, compute their average, and release memory safely.",
      "solution": "1. Definition: Dynamic Memory Allocation allows memory to be requested from the system Heap at runtime rather than compile time.\n2. Comparison:\n- malloc(size): Allocates raw bytes. Leaves memory uninitialized (contains garbage values). Single argument: total bytes.\n- calloc(num, size): Allocates memory for num elements and initializes every byte to 0. Two arguments: count and element size.\n3. Code Snippet:\nfloat *arr = (float *)malloc(n * sizeof(float));\nif (arr == NULL) { printf(\"Memory allocation failed!\\n\"); return 1; }\nfloat sum = 0.0f;\nfor (int i = 0; i < n; i++) { scanf(\"%f\", &arr[i]); sum += arr[i]; }\nprintf(\"Average = %.2f\\n\", sum / n);\nfree(arr);\narr = NULL; // Neutralize dangling pointer.",
      "marks": 10
    },
    {
      "id": "c-eq8",
      "unitNumber": "Unit V",
      "type": "Long",
      "question": "Write a C program to read employee records (id, name, salary) into an array of structures, and write them into a binary file emp.dat using fwrite(). Then read and display them using fread().",
      "solution": "1. Structure definition:\ntypedef struct { int id; char name[50]; float salary; } Employee;\n2. Writing to Binary File:\nEmployee emp[2] = {{101, \"Alice\", 75000.0}, {102, \"Bob\", 82000.0}};\nFILE *fp = fopen(\"emp.dat\", \"wb\");\nif (fp == NULL) return 1;\nfwrite(emp, sizeof(Employee), 2, fp);\nfclose(fp);\n3. Reading from Binary File:\nEmployee readEmp[2];\nfp = fopen(\"emp.dat\", \"rb\");\nif (fp == NULL) return 1;\nfread(readEmp, sizeof(Employee), 2, fp);\nfclose(fp);\n4. Displaying:\nfor (int i = 0; i < 2; i++) {\n    printf(\"ID: %d, Name: %s, Salary: %.2f\\n\", readEmp[i].id, readEmp[i].name, readEmp[i].salary);\n}",
      "marks": 10
    }
  ]
};
