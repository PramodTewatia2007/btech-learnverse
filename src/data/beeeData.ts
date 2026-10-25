import { Subject } from '../types';

export const BEEE_SUBJECT: Subject = {
  "id": "beee",
  "title": "Basic Electronics & Electrical Engineering",
  "category": "Theory",
  "description": "Understand DC & AC circuit theorems, RLC networks, transformers, DC machines, induction motors, semiconductor diodes, power generation, and electrical safety.",
  "icon": "Zap",
  "color": "from-amber-600 to-orange-700",
  "isOfficial": true,
  "syllabusSource": "Official University Syllabus (B.Tech 1st Year)",
  "unitsCount": 5,
  "units": [
    {
      "id": "beee-u1",
      "unitNumber": "Unit I",
      "title": "DC Circuit Analysis & Network Theorems",
      "description": "Electric charge, Ohm’s law, Kirchhoff’s Current Law (KCL), Kirchhoff’s Voltage Law (KVL), Mesh current analysis, Nodal voltage analysis, Source transformations, Thevenin’s Theorem, Norton’s Theorem, Superposition Theorem, and Maximum Power Transfer Theorem.",
      "topics": [
        "Electric charge, current, potential difference, and dynamic resistance",
        "Kirchhoff’s Current Law (KCL) and Current Division Rule",
        "Kirchhoff’s Voltage Law (KVL) and Voltage Division Rule",
        "Mesh Analysis: Loop equations, matrix formulation, and Supermesh with current sources",
        "Nodal Analysis: Node equations and Supernode with floating voltage sources",
        "Practical sources with internal resistance and Source Transformations",
        "Superposition Theorem: Linearity criteria and handling multiple independent sources",
        "Thevenin’s Theorem: Open-circuit voltage (Vth) and Thevenin equivalent resistance (Rth)",
        "Norton’s Theorem: Short-circuit current (In) and Norton equivalent resistance (Rn)",
        "Maximum Power Transfer Theorem: Condition RL = Rth and maximum power formula"
      ],
      "lessons": [
        {
          "id": "beee-u1-l1",
          "unitId": "beee-u1",
          "subjectId": "beee",
          "title": "Ohm’s Law & Kirchhoff’s Laws (KCL & KVL)",
          "durationMinutes": 25,
          "difficulty": "Beginner",
          "prerequisites": [
            "Basic concept of electric charge and battery voltage"
          ],
          "realLifeQuestion": {
            "en": "Why do all the lights in your house stay bright when you turn on the refrigerator or microwave, instead of getting dimmer?",
            "hinglish": "Ghar me fridge ya microwave on karne par baaki room ki lights dim kyu nahi hoti?",
            "hi": "घर में फ्रिज या माइक्रोवेव चालू करने पर अन्य कमरों की लाइटें मद्धिम (dim) क्यों नहीं होती हैं?"
          },
          "simpleExplanation": {
            "en": "Household appliances are wired in parallel, not in series! In a parallel circuit, every branch receives the full, identical mains voltage (230 V). Turning on an extra appliance simply draws additional current from the main supply without dropping the voltage across the other branches. Kirchhoff’s Current Law (KCL) ensures that total current entering any electrical junction equals the total current leaving it (conservation of charge), while Kirchhoff’s Voltage Law (KVL) states that the sum of all voltage drops around any closed loop equals the total supply voltage (conservation of energy).",
            "hinglish": "Ghar ke saare appliances parallel me jude hote hain! Parallel connection me har appliance ko poora 230 V milta hai. Ek appliance on karne par wo apni alag current leta hai bina dusro ka voltage giraye. Kirchhoff ka Current Law (KCL) kehta hai ki junction par aane wali current barabar jaane wali current (charge conservation). Kirchhoff ka Voltage Law (KVL) kehta hai ki closed loop me saare voltage drops ka sum supply voltage ke barabar hota hai (energy conservation).",
            "hi": "घर के सभी उपकरण समानांतर क्रम (Parallel) में जुड़े होते हैं। समानांतर क्रम में प्रत्येक उपकरण को पूरा 230 वोल्ट विभव मिलता है। KCL आवेश संरक्षण और KVL ऊर्जा संरक्षण पर आधारित है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine a water distribution pipe entering a house with separate branch taps in the kitchen, bathroom, and garden. Opening the kitchen tap does not stop water pressure reaching the bathroom tap. Water flowing into a pipe junction exactly equals the total water flowing out.",
              "hinglish": "Paani ki main pipe se alag-alag nal (taps) jude hain. Kitchen ka nal kholne par bathroom ke nal me paani aana band nahi hota. Pipe ke jod (junction) par aane wala paani jaane wale paani ke barabar hota hai.",
              "hi": "जैसे पानी की मुख्य पाइपलाइन से अलग-अलग नलों में पानी जाता है; एक नल खोलने से दूसरे का पानी बंद नहीं होता।"
            },
            "limitations": {
              "en": "Water pipes experience friction and pressure drops if pipes are too narrow, whereas properly sized electrical wiring maintains nearly constant 230 V voltage.",
              "hinglish": "Paani ki pipe patli ho toh pressure girta hai, par moti copper wire me voltage drop negligible hota hai.",
              "hi": "पतली नली में दबाव घट सकता है जबकि पर्याप्त तार में वोल्टेज लगभग स्थिर रहता है।"
            }
          },
          "terminology": [
            {
              "term": "Ohm’s Law",
              "definition": {
                "en": "Current flowing through a conductor is proportional to potential difference across it at constant temperature (V = IR).",
                "hinglish": "Constant temperature par conductor ka voltage current ke directly proportional hota hai (V = IR).",
                "hi": "स्थिर ताप पर विभवान्तर धारा के समानुपाती होता है (V = IR)।"
              }
            },
            {
              "term": "KCL (Kirchhoff’s Current Law)",
              "definition": {
                "en": "The algebraic sum of all electric currents entering and exiting a node is zero (∑ I = 0).",
                "hinglish": "Kisi bhi junction/node par aane wali currents ka jod jaane wali currents ke barabar hota hai.",
                "hi": "किसी संधि पर मिलने वाली समस्त धाराओं का बीजीय योग शून्य होता है।"
              }
            },
            {
              "term": "KVL (Kirchhoff’s Voltage Law)",
              "definition": {
                "en": "The algebraic sum of all branch voltages around any closed loop is zero (∑ V = 0).",
                "hinglish": "Kisi bhi closed circuit loop me saari batteries aur resistances ke voltages ka sum zero hota hai.",
                "hi": "किसी बंद परिपथ के चारों ओर समस्त विभवान्तरों का बीजीय योग शून्य होता है।"
              }
            },
            {
              "term": "Node",
              "definition": {
                "en": "A point in an electrical network where two or more circuit elements join together.",
                "hinglish": "Circuit me wo point jahan do ya do se zyada wires judte hain.",
                "hi": "परिपथ में वह बिंदु जहाँ दो या अधिक शाखाएं मिलती हैं।"
              }
            }
          ],
          "visualType": "circuit",
          "visualData": {
            "circuitType": "kcl-kvl",
            "components": [
              {
                "type": "voltage-source",
                "value": 12,
                "unit": "V"
              },
              {
                "type": "resistor",
                "value": 4,
                "unit": "Ω"
              },
              {
                "type": "resistor",
                "value": 6,
                "unit": "Ω"
              }
            ]
          },
          "underlyingPrinciple": {
            "en": "Conservation Laws in Electromagnetism: KCL is a direct macroscopic manifestation of the Law of Conservation of Electric Charge; KVL is a direct manifestation of the Law of Conservation of Energy in electrostatic conservative fields.",
            "hinglish": "KCL charge conservation par aur KVL energy conservation par aadharit hai.",
            "hi": "KCL आवेश संरक्षण के नियम तथा KVL ऊर्जा संरक्षण के नियम का साक्षात रूप है।"
          },
          "formulaLogic": {
            "formula": "\\sum I_{\\text{in}} = \\sum I_{\\text{out}} \\quad \\text{and} \\quad \\sum_{k=1}^N V_k = 0",
            "description": {
              "en": "Mathematical formulations of Kirchhoff’s Current Law (junction rule) and Voltage Law (loop rule).",
              "hinglish": "Kirchhoff ke KCL aur KVL ke mathematical formulas.",
              "hi": "किरचॉफ के धारा तथा वोल्टता नियम के गणितीय सूत्र।"
            },
            "symbols": [
              {
                "symbol": "I_{\\text{in}}",
                "meaning": "Current entering junction node",
                "unit": "Amperes (A)"
              },
              {
                "symbol": "I_{\\text{out}}",
                "meaning": "Current leaving junction node",
                "unit": "Amperes (A)"
              },
              {
                "symbol": "V_k",
                "meaning": "Branch voltage drop or EMF around loop",
                "unit": "Volts (V)"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "In a parallel circuit, a 12 V battery is connected across two resistors R1 = 4 Ω and R2 = 6 Ω. Find (a) branch currents I1 and I2, (b) total battery current, and (c) equivalent resistance.",
              "hinglish": "12 V battery se R1 = 4 Ω aur R2 = 6 Ω parallel me jude hain. I1, I2, total current, aur Req nikaalo.",
              "hi": "12 वोल्ट की बैटरी से 4 ओम और 6 ओम के दो प्रतिरोध समानांतर जुड़े हैं। शाखा धाराएं और कुल प्रतिरोध ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Apply Ohm's law across each parallel branch",
                "explanation": {
                  "en": "Because R1 and R2 are in parallel, each resistor receives the full 12 V. Branch current I1 = V / R1 = 12 / 4 = 3 A. Branch current I2 = V / R2 = 12 / 6 = 2 A.",
                  "hinglish": "Parallel me dono resistors ko poora 12 V milta hai. I1 = 12 / 4 = 3 A, aur I2 = 12 / 6 = 2 A.",
                  "hi": "समानांतर में दोनों को पूरा 12 V मिलता है: I1 = 12/4 = 3 A तथा I2 = 12/6 = 2 A।"
                },
                "math": "I_1 = \\frac{12}{4} = 3\\,\\text{A}, \\quad I_2 = \\frac{12}{6} = 2\\,\\text{A}"
              },
              {
                "stepNumber": 2,
                "title": "Calculate total current using KCL",
                "explanation": {
                  "en": "At the positive battery node, total current supplied equals the sum of the outgoing branch currents: I_total = I1 + I2 = 3 A + 2 A = 5 A.",
                  "hinglish": "KCL ke anusar total current = I1 + I2 = 3 + 2 = 5 A.",
                  "hi": "KCL के अनुसार कुल धारा I = 3 + 2 = 5 A।"
                },
                "math": "I_{\\text{total}} = 3 + 2 = 5\\,\\text{A}"
              },
              {
                "stepNumber": 3,
                "title": "Compute equivalent resistance Req",
                "explanation": {
                  "en": "Req = (R1 * R2) / (R1 + R2) = (4 * 6) / (4 + 6) = 24 / 10 = 2.4 Ω. Verification: V / Req = 12 / 2.4 = 5 A (matches KCL total current!).",
                  "hinglish": "Req = (4 * 6) / (4 + 6) = 2.4 Ω. Check: 12 / 2.4 = 5 A (bilkul sahi).",
                  "hi": "Req = (4 × 6)/(4 + 6) = 2.4 Ω। सत्यापन: 12/2.4 = 5 A।"
                },
                "math": "R_{\\text{eq}} = \\frac{4 \\times 6}{4 + 6} = 2.4\\,\\Omega"
              }
            ],
            "finalAnswer": "I1 = 3 A, I2 = 2 A, Total Current = 5 A, Equivalent Resistance = 2.4 Ω."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Assuming equivalent resistance of resistors in parallel is the simple sum R1 + R2.",
                "hinglish": "Parallel resistors ka equivalent nikalte waqt sidhe R1 + R2 jod dena.",
                "hi": "समानांतर क्रम में प्रतिरोधों को सीधे जोड़ देना।"
              },
              "correction": {
                "en": "In parallel, adding more resistors creates additional pathways, REDUCING total resistance! 1/Req = 1/R1 + 1/R2. The equivalent resistance is always strictly SMALLER than the smallest individual branch resistor.",
                "hinglish": "Parallel me naye resistors judne se current ke naye raaste bante hain jisse total resistance kam ho jata hai: Req = (R1*R2)/(R1+R2).",
                "hi": "समानांतर क्रम में कुल प्रतिरोध सबसे छोटे प्रतिरोधक से भी कम होता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u1-l1-p1",
              "question": {
                "en": "If 3 identical 9 Ω resistors are connected in parallel, what is their equivalent resistance?",
                "hinglish": "3 ek jaise 9 Ω ke resistors parallel me lagaye jayein toh Req kya hoga?",
                "hi": "यदि 9 ओम के तीन समान प्रतिरोध समानांतर जुड़े हों तो तुल्य प्रतिरोध क्या होगा?"
              },
              "hint": {
                "en": "For n identical resistors in parallel, Req = R / n.",
                "hinglish": "Req = R / n formula lagao: 9 / 3.",
                "hi": "Req = R / n।"
              },
              "explanation": {
                "en": "For n equal parallel resistors, Req = R / n = 9 / 3 = 3 Ω.",
                "hinglish": "Req = 9 / 3 = 3 Ω.",
                "hi": "समानांतर में Req = 9/3 = 3 Ω।"
              },
              "correctAnswer": 0,
              "level": "Beginner",
              "options": [
                "3 Ω",
                "9 Ω",
                "27 Ω",
                "1 Ω"
              ],
              "correctIndex": 0
            }
          ],
          "summary": {
            "en": [
              "Ohm’s Law V = IR relates voltage, current, and electrical resistance.",
              "KCL states that net current entering any electrical junction is zero (∑ I = 0, conservation of charge).",
              "KVL states that the sum of voltages around any closed loop is zero (∑ V = 0, conservation of energy).",
              "Parallel branches share identical voltage; series components share identical current."
            ],
            "hinglish": [
              "Ohm ka niyam V = IR voltage aur current ka relation deta hai.",
              "KCL junction par aane aur jaane wali current ko barabar karta hai (charge conservation).",
              "KVL closed loop me saare voltages ka sum 0 karta hai (energy conservation).",
              "Parallel me voltage barabar rehta hai, series me current barabar rehti hai."
            ],
            "hi": [
              "ओम का नियम V = IR विभवान्तर और धारा को जोड़ता है।",
              "KCL किसी संधि पर धाराओं का योग शून्य करता है (आवेश संरक्षण)।",
              "KVL बंद परिपथ में विभव परिवर्तनों का योग शून्य करता है (ऊर्जा संरक्षण)।",
              "समानांतर शाखाओं का वोल्टेज समान तथा श्रेणी घटकों की धारा समान होती है।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u1-l1-q1",
              "question": {
                "en": "Kirchhoff’s Current Law (KCL) is a direct consequence of which fundamental physical law?",
                "hinglish": "Kirchhoff ka Current Law (KCL) kaun se fundamental physical law par based hai?",
                "hi": "किरचॉफ का धारा नियम (KCL) किस भौतिक नियम का प्रत्यक्ष परिणाम है?"
              },
              "options": [
                "Conservation of Energy",
                "Conservation of Electric Charge",
                "Conservation of Momentum",
                "Newton’s Third Law"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "Electric current is the flow of electric charges.",
                "hinglish": "Current charge ka flow hai.",
                "hi": "आवेश प्रवाह की दर धारा है।"
              },
              "explanation": {
                "en": "Because electric charge can neither be created nor destroyed at an electrical junction node, KCL directly expresses the Conservation of Electric Charge.",
                "hinglish": "Junction par charge jama nahi ho sakta, isliye KCL Conservation of Charge par aadharit hai.",
                "hi": "संधि पर आवेश संचित नहीं हो सकता, अतः KCL आवेश संरक्षण पर आधारित है।"
              }
            }
          ]
        },
        {
          "id": "beee-u1-l2",
          "unitId": "beee-u1",
          "subjectId": "beee",
          "title": "Mesh Analysis, Nodal Analysis & Source Transformations",
          "durationMinutes": 35,
          "difficulty": "Intermediate",
          "prerequisites": [
            "KCL and KVL",
            "Solving 2x2 systems of linear equations"
          ],
          "realLifeQuestion": {
            "en": "When a circuit has 5 loops, multiple batteries, and crossing wires, how do electrical engineers solve for every voltage and current systematically without getting hopelessly lost in equations?",
            "hinglish": "Jab circuit me 5 loops aur kayi batteries ho, toh engineers systematic tareeqe se har wire ki current kaise nikaalte hain bina uljhe?",
            "hi": "जटिल परिपथों में सभी धाराओं और विभवों को क्रमबद्ध रूप से कैसे हल किया जाता है?"
          },
          "simpleExplanation": {
            "en": "To solve multi-loop networks efficiently, engineers use two systematic matrix methods: (1) Mesh Analysis defines imaginary circulating currents in each independent window (mesh) of a planar circuit and applies KVL, generating a matrix equation [R][I] = [V]. If a current source lies on the boundary between two meshes, they are combined into a Supermesh by ignoring the current source branch. (2) Nodal Analysis chooses one node as the 0 V reference (ground) and applies KCL to all remaining independent non-reference nodes, generating a conductance matrix [G][V] = [I]. If an ideal voltage source is connected between two non-reference nodes, they are grouped into a Supernode. Source Transformation allows replacing a practical voltage source (V in series with R) with an equivalent practical current source (I = V/R in parallel with R), and vice versa.",
            "hinglish": "Complex circuits ko solve karne ke do standard matrix methods hain: (1) Mesh Analysis planar circuit ke har loop (mesh) me circulating current manta hai aur KVL equations banata hai: [R][I] = [V]. Agar do loops ke beech current source aa jaye toh dono ko mila kar Supermesh banate hain. (2) Nodal Analysis ek ground (0 V) node chunta hai aur baaki nodes par KCL lagata hai: [G][V] = [I]. Agar do nodes ke beech direct battery ho toh Supernode banate hain. Source Transformation se (V series with R) ko (I = V/R parallel with R) me badla ja sakta hai.",
            "hi": "मेश विश्लेषण KVL का उपयोग कर लूप धाराएं ज्ञात करता है; नोडल विश्लेषण KCL का उपयोग कर नोड विभव ज्ञात करता है। स्रोत रूपांतरण वोल्टेज और धारा स्रोतों का परस्पर विनिमय करता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Nodal analysis is like measuring the altitude of several mountain peaks relative to sea level (ground reference node). Once you know the height of Peak A (100 m) and Peak B (60 m), the slope between them is trivially 100 - 60 = 40 m.",
              "hinglish": "Nodal analysis pahado ki unchai samundar tal (sea level = ground node 0 V) se napne jaisa hai. Peak A 100 m par hai aur Peak B 60 m par hai, toh dono ke beech ka height difference sidhe 40 m nikal jata hai.",
              "hi": "नोडल विश्लेषण समुद्र तल (शून्य विभव) के सापेक्ष विभिन्न चोटियों की ऊंचाई मापने जैसा है।"
            },
            "limitations": {
              "en": "Mountain height is fixed by gravity; in electrical circuits, node voltages depend interactively on current flowing through resistances.",
              "hinglish": "Pahad static hote hain, par circuit me current badalne par node voltage badal jata hai.",
              "hi": "परिपथ में धारा बदलने पर नोड विभव बदलता है।"
            }
          },
          "terminology": [
            {
              "term": "Mesh",
              "definition": {
                "en": "A loop that does not contain any other loops within it.",
                "hinglish": "Aisa sabse chota closed loop jiske andar koi doosra loop na ho.",
                "hi": "वह बंद लूप जिसके भीतर कोई अन्य लूप न हो।"
              }
            },
            {
              "term": "Supermesh",
              "definition": {
                "en": "Formed by merging two adjacent meshes when a current source is shared between them.",
                "hinglish": "Jab do meshes ke beech me current source aa jaye toh unhe jodkar banne wala bada loop.",
                "hi": "दो मेशों के मध्य धारा स्रोत होने पर बना संयुक्त लूप।"
              }
            },
            {
              "term": "Supernode",
              "definition": {
                "en": "Formed by enclosing an ideal voltage source connected between two non-reference nodes.",
                "hinglish": "Jab do non-ground nodes ke beech direct battery ho toh unhe wrap karne wala region.",
                "hi": "दो गैर-संदर्भ नोड्स के बीच वोल्टेज स्रोत होने पर बना क्षेत्र।"
              }
            },
            {
              "term": "Source Transformation",
              "definition": {
                "en": "Replacing a voltage source V in series with R by a current source I = V/R in parallel with R.",
                "hinglish": "Series battery ko parallel current source me badalna.",
                "hi": "श्रेणी वोल्टेज स्रोत को समानांतर धारा स्रोत में बदलना।"
              }
            }
          ],
          "visualType": "circuit",
          "visualData": {
            "circuitType": "mesh-analysis",
            "meshes": 2,
            "r1": 4,
            "r2": 2,
            "r3": 6,
            "v1": 20,
            "v2": 10
          },
          "underlyingPrinciple": {
            "en": "Linear Network Theory: Applying Kirchhoff’s laws to a planar network of linear bilateral elements yields a system of linearly independent equations solvable via Cramer’s rule or matrix inversion.",
            "hinglish": "Linear circuits me KCL aur KVL se independent linear equations banti hain jinhe Cramer’s rule se easily solve kiya jata hai.",
            "hi": "रैखिक परिपथों में क्रैमर के नियम या मैट्रिक्स विलोपन द्वारा समीकरणों का हल।"
          },
          "formulaLogic": {
            "formula": "[R] [I] = [V] \\quad \\text{and} \\quad [G] [V] = [I] \\quad \\text{Source: } I_s = \\frac{V_s}{R_s}",
            "description": {
              "en": "Matrix formulation of Mesh analysis (impedance matrix) and Nodal analysis (conductance matrix).",
              "hinglish": "Mesh aur Nodal analysis ka standard matrix format.",
              "hi": "मेश और नोडल विश्लेषण का मैट्रिक्स निरूपण।"
            },
            "symbols": [
              {
                "symbol": "[R]",
                "meaning": "Mesh resistance matrix (R_ii = self resistance, R_ij = shared)",
                "unit": "Ω"
              },
              {
                "symbol": "[G]",
                "meaning": "Node conductance matrix (G_ii = sum of conductances connected)",
                "unit": "Siemens (S)"
              },
              {
                "symbol": "I_s = V_s / R_s",
                "meaning": "Source transformation current equivalent",
                "unit": "Amperes (A)"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Transform a practical DC voltage source of 24 V with internal series resistance 3 Ω into its Norton equivalent current source. If a load RL = 6 Ω is connected, find the load current.",
              "hinglish": "24 V battery aur 3 Ω series resistor ko equivalent current source me transform karo. Agar RL = 6 Ω lagayein toh load current nikaalo.",
              "hi": "24 V वोल्टेज और 3 Ω आंतरिक प्रतिरोध को धारा स्रोत में बदलिए तथा 6 Ω लोड पर धारा ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Compute transformed current source value",
                "explanation": {
                  "en": "Source current Is = Vs / Rs = 24 / 3 = 8 A. The parallel internal resistance remains identical: Rp = Rs = 3 Ω.",
                  "hinglish": "Is = Vs / Rs = 24 / 3 = 8 A. Parallel resistance Rp = 3 Ω wahi rahega.",
                  "hi": "धारा Is = 24/3 = 8 A तथा समानांतर प्रतिरोध Rp = 3 Ω।"
                },
                "math": "I_s = \\frac{24}{3} = 8\\,\\text{A}, \\quad R_p = 3\\,\\Omega \\text{ in parallel with current source}"
              },
              {
                "stepNumber": 2,
                "title": "Connect load RL and apply Current Division Rule",
                "explanation": {
                  "en": "Now 8 A splits between parallel branches Rp = 3 Ω and RL = 6 Ω. By Current Division Rule: I_L = Is * [Rp / (Rp + RL)] = 8 * [3 / (3 + 6)] = 8 * (3/9) = 8 / 3 ≈ 2.67 A.",
                  "hinglish": "Current Division rule se: I_L = 8 * [3 / (3 + 6)] = 8 * (3/9) = 2.67 A.",
                  "hi": "धारा विभाजन नियम से: I_L = 8 × [3 / (3 + 6)] = 2.67 A।"
                },
                "math": "I_L = 8 \\times \\frac{3}{3 + 6} = \\frac{24}{9} = 2.67\\,\\text{A}"
              },
              {
                "stepNumber": 3,
                "title": "Verify using original voltage circuit",
                "explanation": {
                  "en": "In original circuit: Total R = Rs + RL = 3 + 6 = 9 Ω. Current I_L = Vs / R_total = 24 / 9 = 2.67 A. Both circuits give identical load current!",
                  "hinglish": "Check: Original circuit me I = 24 / (3 + 6) = 2.67 A. Dono method se same answer aaya!",
                  "hi": "मूल परिपथ में I = 24/(3 + 6) = 2.67 A। दोनों परिणाम पूर्णतः समान हैं।"
                },
                "math": "I_L = \\frac{24}{3 + 6} = 2.67\\,\\text{A} \\quad (\\text{Verified!})"
              }
            ],
            "finalAnswer": "Equivalent current source: 8 A in parallel with 3 Ω. Load current IL = 2.67 A."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Forgetting to reverse the current arrow direction when voltage polarity is flipped in source transformation.",
                "hinglish": "Source transformation me current arrow ki direction galat lagana.",
                "hi": "स्रोत रूपांतरण में धारा की दिशा का गलत अंकन।"
              },
              "correction": {
                "en": "The current arrow MUST always point toward the positive terminal of the original voltage source. If positive terminal is on top, arrow points upward.",
                "hinglish": "Current source ka arrow hamesha battery ke positive terminal ki taraf point karna chahiye.",
                "hi": "धारा का तीर सदैव धनात्मक टर्मिनल की दिशा में होना चाहिए।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u1-l2-p1",
              "question": {
                "en": "When a voltage source of 5 V is connected between two unknown non-reference nodes, which analysis technique is formed?",
                "hinglish": "Jab do non-ground nodes ke beech me direct battery judti hai toh kya banta hai?",
                "hi": "दो गैर-संदर्भ नोड्स के बीच वोल्टेज स्रोत होने पर क्या बनता है?"
              },
              "hint": {
                "en": "It combines two nodes into a single generalized node.",
                "hinglish": "Supernode banta hai.",
                "hi": "सुपरनोड।"
              },
              "explanation": {
                "en": "Connecting a voltage source between two non-reference nodes creates a Supernode, which combines both nodes and uses the constraint equation V1 - V2 = Vs.",
                "hinglish": "Do non-reference nodes ke beech voltage source hone se Supernode banta hai.",
                "hi": "यह एक सुपरनोड बनाता है।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "Supermesh",
                "Supernode",
                "Norton equivalent",
                "Thevenin equivalent"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "Mesh Analysis applies KVL around elementary loops to find circulating mesh currents.",
              "Nodal Analysis applies KCL at junction nodes to find node voltages relative to ground.",
              "Supermesh bypasses shared current sources; Supernode encloses floating voltage sources.",
              "Source transformation swaps (V in series with R) with (I = V/R in parallel with R)."
            ],
            "hinglish": [
              "Mesh analysis KVL use karke mesh currents nikaalta hai.",
              "Nodal analysis ground ke respect me KCL use karke node voltages nikaalta hai.",
              "Supermesh current source ko bypass karta hai; Supernode battery ko wrap karta hai.",
              "Source transformation series battery ko parallel current source me badal deta hai."
            ],
            "hi": [
              "मेश विश्लेषण KVL का उपयोग कर लूप धाराएं निकालता है।",
              "नोडल विश्लेषण KCL द्वारा नोड विभव ज्ञात करता है।",
              "सुपरमेश धारा स्रोत को तथा सुपरनोड विभव स्रोत को समाहित करता है।",
              "स्रोत रूपांतरण वोल्टेज और धारा स्रोतों का विनिमय करता है।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u1-l2-q1",
              "question": {
                "en": "How many independent node equations are required in Nodal Analysis for a circuit with N total nodes?",
                "hinglish": "N nodes wale circuit me Nodal Analysis ke liye kitni independent equations banani padti hain?",
                "hi": "N नोड्स वाले परिपथ हेतु कितने स्वतंत्र नोड समीकरण आवश्यक हैं?"
              },
              "options": [
                "N",
                "N - 1",
                "N + 1",
                "2N"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "One node is chosen as the 0 V reference (ground), leaving N - 1 non-reference nodes.",
                "hinglish": "Ek node ground (0 V) ban jata hai.",
                "hi": "एक नोड संदर्भ (ग्राउंड) होता है।"
              },
              "explanation": {
                "en": "Because one node is designated as the 0 V reference (ground), a network with N nodes requires exactly N - 1 independent nodal equations.",
                "hinglish": "Ek node ground banne ke baad N - 1 equations bachti hain.",
                "hi": "एक नोड ग्राउंड होने से केवल N - 1 समीकरण आवश्यक होते हैं।"
              }
            }
          ]
        },
        {
          "id": "beee-u1-l3",
          "unitId": "beee-u1",
          "subjectId": "beee",
          "title": "Network Theorems: Thevenin, Norton, Superposition & Max Power Transfer",
          "durationMinutes": 40,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Ohm’s law",
            "Mesh and Nodal analysis",
            "KCL and KVL"
          ],
          "realLifeQuestion": {
            "en": "How can an audio engineer replace a massive 50-component smartphone amplifier circuit with just one single battery and one resistor to calculate speaker volume?",
            "hinglish": "Audio engineer 50 components wale complex mobile amplifier circuit ko sirf ek battery aur ek resistor me badal kar speaker ki power kaise nikaal leta hai?",
            "hi": "एक जटिल 50-घटकों वाले परिपथ को केवल एक बैटरी और एक प्रतिरोध द्वारा कैसे प्रतिस्थापित किया जाता है?"
          },
          "simpleExplanation": {
            "en": "Network theorems simplify complex linear circuits into equivalent two-terminal models. (1) Thevenin’s Theorem states that ANY linear two-terminal DC network can be replaced by an equivalent circuit consisting of a single voltage source Vth (open-circuit voltage across terminals) in series with a resistor Rth (equivalent resistance seen from terminals with all independent sources deactivated: voltage sources shorted, current sources opened). (2) Norton’s Theorem replaces the network with a single current source In (short-circuit current) in parallel with Rn (= Rth). (3) Superposition Theorem states that in a linear network with multiple independent sources, the total current/voltage in any branch is the algebraic sum of the responses caused by each independent source acting alone. (4) Maximum Power Transfer Theorem states that maximum power is transferred from a network to a load resistor RL when RL equals the Thevenin internal resistance: RL = Rth (efficiency is exactly 50%).",
            "hinglish": "Network theorems bade complex circuits ko 2 components me compress kar deti hain: (1) Thevenin’s Theorem kehta hai ki kisi bhi linear network ko ek battery Vth (open circuit voltage) aur ek series resistor Rth me badla ja sakta hai (independent voltage sources ko short aur current sources ko open karke). (2) Norton’s Theorem usi network ko ek parallel current source In (short circuit current) aur Rn (= Rth) me badalta hai. (3) Superposition Theorem kehta hai ki agar circuit me kayi batteries hain, toh ek-ek karke har battery ka asar nikaalo aur end me sabko jod do. (4) Maximum Power Transfer Theorem kehta hai ki load RL ko tab sabse zyada power milegi jab RL = Rth hoga (is point par efficiency 50% hoti hai).",
            "hi": "थेवेनिन प्रमेय किसी भी रैखिक परिपथ को एक वोल्टेज स्रोत (Vth) और श्रेणी प्रतिरोध (Rth) में बदलता है। नॉर्टन प्रमेय इसे धारा स्रोत (In) और समानांतर प्रतिरोध में बदलता है। RL = Rth होने पर अधिकतम शक्ति स्थानांतरित होती है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of Thevenin's Theorem as the \"horse power and weight\" spec sheet of a car. Instead of studying thousands of mechanical pistons, valves, and gears under the hood, a buyer only needs two numbers: engine torque (Vth) and friction resistance (Rth) to know how fast the car can pull a trailer (RL).",
              "hinglish": "Thevenin theorem car ke engine spec jaisa hai. Car ke andar ke 10,000 parts ko jaane bina, aapko sirf engine power (Vth) aur internal friction (Rth) pata ho toh aap bata sakte ho ki car trailer (RL) ko kitni speed se kheenchegi.",
              "hi": "थेवेनिन प्रमेय पूरी मशीन के हजारों पुर्जों को समझने के बजाय केवल उसके परिणामी बल और घर्षण को जानने जैसा है।"
            },
            "limitations": {
              "en": "Thevenin and Norton equivalence only hold externally across the two load terminals; internal power dissipation inside the actual 50-component circuit is completely different from the single equivalent resistor.",
              "hinglish": "Equivalence sirf bahar terminals par load ke liye valid hoti hai; asli circuit ke andar internal power dissipation alag hota hai.",
              "hi": "तुल्यता केवल बाहरी टर्मिनलों पर मान्य होती है; आंतरिक शक्ति क्षय भिन्न होता है।"
            }
          },
          "terminology": [
            {
              "term": "Vth (Thevenin Voltage)",
              "definition": {
                "en": "The open-circuit voltage measured across the designated load terminals A-B.",
                "hinglish": "Load resistor hata kar terminals par milne wala khula voltage.",
                "hi": "लोड टर्मिनलों पर खुला परिपथ विभवान्तर (Open Circuit Voltage)।"
              }
            },
            {
              "term": "Rth (Thevenin Resistance)",
              "definition": {
                "en": "Resistance seen across terminals A-B with all independent sources turned off (V-sources shorted, I-sources opened).",
                "hinglish": "Saare sources deactivate karke terminals se dikhne wala resistance.",
                "hi": "स्रोतों को निष्क्रिय करने पर देखा गया तुल्य प्रतिरोध।"
              }
            },
            {
              "term": "In (Norton Current)",
              "definition": {
                "en": "The current that flows when load terminals A-B are shorted together.",
                "hinglish": "Load terminals ko taar se short karne par behne wali current.",
                "hi": "टर्मिनलों को शॉर्ट करने पर प्रवाहित धारा।"
              }
            },
            {
              "term": "Maximum Power Transfer",
              "definition": {
                "en": "Condition where load resistance equals internal source resistance (RL = Rth), delivering Pmax = Vth^2 / (4 Rth).",
                "hinglish": "Jab RL = Rth hota hai tab load ko maximum power milti hai.",
                "hi": "RL = Rth होने पर अधिकतम शक्ति अंतरण की स्थिति।"
              }
            }
          ],
          "visualType": "circuit",
          "visualData": {
            "circuitType": "thevenin-norton",
            "vth": 12,
            "rth": 4,
            "rl": 4,
            "powerCurve": "P = I^2 * RL peaking at RL = Rth"
          },
          "underlyingPrinciple": {
            "en": "Linear Superposition and Port Behavior: Because the voltage-current characteristic of any linear one-port network is a straight line V = Vth - I * Rth, it is completely defined by its two intercepts (Vth on V-axis, In on I-axis).",
            "hinglish": "Linear circuit ke do terminals par V-I graph ek straight line hoti hai: V = Vth - I * Rth, jo sirf Vth aur Rth se poori tarah define ho jati hai.",
            "hi": "रैखिक परिपथ का बाह्य व्यवहार एक सरल रेखा V = Vth - I * Rth द्वारा निर्धारित होता है।"
          },
          "formulaLogic": {
            "formula": "P_{\\text{max}} = \\frac{V_{\\text{th}}^2}{4 R_{\\text{th}}} \\quad \\text{when } R_L = R_{\\text{th}} \\quad \\text{and} \\quad V_{\\text{th}} = I_n \\times R_{\\text{th}}",
            "description": {
              "en": "Formulas for maximum power delivered to a load and the relationship between Thevenin and Norton equivalents.",
              "hinglish": "Maximum power transfer aur Thevenin-Norton relation ke formulas.",
              "hi": "अधिकतम शक्ति अंतरण का सूत्र और थेवेनिन-नॉर्टन सम्बंध।"
            },
            "symbols": [
              {
                "symbol": "P_{\\text{max}}",
                "meaning": "Maximum power dissipated in load RL",
                "unit": "Watts (W)"
              },
              {
                "symbol": "V_{\\text{th}}",
                "meaning": "Thevenin open-circuit voltage",
                "unit": "Volts (V)"
              },
              {
                "symbol": "R_{\\text{th}}",
                "meaning": "Thevenin equivalent resistance",
                "unit": "Ohms (Ω)"
              },
              {
                "symbol": "I_n",
                "meaning": "Norton short-circuit current",
                "unit": "Amperes (A)"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A 20 V battery is in series with a 4 Ω resistor, connected across a parallel branch of 6 Ω. Find the Thevenin equivalent circuit across the 6 Ω branch terminals. What is the maximum power that can be drawn by a variable load RL connected across those terminals?",
              "hinglish": "20 V battery 4 Ω ke saath series me hai aur aage 6 Ω resistor parallel me laga hai. 6 Ω ke across Thevenin equivalent Vth aur Rth nikaalo, aur RL par Maximum Power calculate karo.",
              "hi": "20 V बैटरी, 4 Ω श्रेणी और 6 Ω समानांतर प्रतिरोध हेतु थेवेनिन तुल्य परिपथ तथा अधिकतम शक्ति ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Find Thevenin voltage Vth (open-circuit voltage)",
                "explanation": {
                  "en": "Remove any external load across terminals. The open-circuit voltage across the 6 Ω resistor is obtained via voltage divider: Vth = 20 * [6 / (4 + 6)] = 20 * (6/10) = 12 V.",
                  "hinglish": "Voltage division rule se 6 Ω ke across open circuit voltage nikaalo: Vth = 20 * [6 / (4 + 6)] = 12 V.",
                  "hi": "विभव विभाजक नियम से: Vth = 20 × (6 / 10) = 12 V।"
                },
                "math": "V_{\\text{th}} = 20 \\times \\frac{6}{4 + 6} = 12\\,\\text{V}"
              },
              {
                "stepNumber": 2,
                "title": "Find Thevenin resistance Rth (deactivate sources)",
                "explanation": {
                  "en": "Deactivate the 20 V battery by replacing it with a short circuit (0 Ω wire). Looking into the terminals, the 4 Ω and 6 Ω resistors are now in parallel! Rth = (4 * 6) / (4 + 6) = 24 / 10 = 2.4 Ω.",
                  "hinglish": "Battery ko short circuit wire bana do. Terminals se dekhne par 4 Ω aur 6 Ω parallel ban jaate hain: Rth = (4 * 6) / (4 + 6) = 2.4 Ω.",
                  "hi": "बैटरी को शॉर्ट करने पर 4 Ω और 6 Ω समानांतर हो जाते हैं: Rth = 2.4 Ω।"
                },
                "math": "R_{\\text{th}} = 4 \\parallel 6 = \\frac{4 \\times 6}{4 + 6} = 2.4\\,\\Omega"
              },
              {
                "stepNumber": 3,
                "title": "Calculate Maximum Power Transfer to load RL",
                "explanation": {
                  "en": "Maximum power is achieved when RL = Rth = 2.4 Ω. Pmax = Vth^2 / (4 * Rth) = (12)^2 / (4 * 2.4) = 144 / 9.6 = 15 W.",
                  "hinglish": "Jab RL = 2.4 Ω hoga tab max power milegi: Pmax = (12)^2 / (4 * 2.4) = 144 / 9.6 = 15 Watts.",
                  "hi": "RL = 2.4 Ω पर Pmax = 144 / (4 × 2.4) = 15 वॉट प्राप्त होती है।"
                },
                "math": "P_{\\text{max}} = \\frac{12^2}{4 \\times 2.4} = \\frac{144}{9.6} = 15\\,\\text{W}"
              }
            ],
            "finalAnswer": "Vth = 12 V, Rth = 2.4 Ω. For maximum power, RL = 2.4 Ω delivering Pmax = 15 W."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Shorting current sources and opening voltage sources when calculating Rth.",
                "hinglish": "Rth nikaalte waqt current source ko short aur voltage source ko open kar dena.",
                "hi": "Rth निकालते समय धारा स्रोत को शॉर्ट और वोल्टेज स्रोत को ओपन करना।"
              },
              "correction": {
                "en": "This is completely reversed! An ideal independent voltage source has ZERO internal resistance, so turning it off means setting V = 0 (SHORT circuit). An ideal current source has INFINITE internal resistance, so turning it off means setting I = 0 (OPEN circuit).",
                "hinglish": "Voltage source ko hamesha SHORT karte hain (wire) aur Current source ko hamesha OPEN karte hain (cut).",
                "hi": "वोल्टेज स्रोत को सदैव शॉर्ट (शून्य प्रतिरोध) तथा धारा स्रोत को ओपन (अनंत प्रतिरोध) किया जाता है।"
              }
            },
            {
              "misconception": {
                "en": "Believing that maximum power transfer achieves 100% circuit efficiency.",
                "hinglish": "Ye sochna ki Maximum Power Transfer par efficiency 100% hoti hai.",
                "hi": "यह सोचना कि अधिकतम शक्ति अंतरण पर दक्षता 100% होती है।"
              },
              "correction": {
                "en": "At maximum power transfer (RL = Rth), equal power is dissipated in the internal resistance Rth and in the load RL. Exactly half the total power is lost as heat inside the source, so efficiency is strictly 50%!",
                "hinglish": "Jab RL = Rth hota hai tab aadhi power source ke andar heat me waste ho jati hai, isliye efficiency sirf 50% hoti hai.",
                "hi": "अधिकतम शक्ति अंतरण पर ठीक 50% शक्ति आंतरिक प्रतिरोध में नष्ट होती है, अतः दक्षता ठीक 50% होती है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u1-l3-p1",
              "question": {
                "en": "What is the efficiency of a power system operating at the Maximum Power Transfer condition RL = Rth?",
                "hinglish": "Maximum Power Transfer (RL = Rth) par system ki efficiency kitne percent hoti hai?",
                "hi": "अधिकतम शक्ति अंतरण की स्थिति में प्रणाली की दक्षता कितने प्रतिशत होती है?"
              },
              "hint": {
                "en": "Half the power is dissipated inside Rth and half inside RL.",
                "hinglish": "Aadhi power load me aur aadhi internal resistor me jati hai.",
                "hi": "आधी शक्ति लोड में और आधी आंतरिक प्रतिरोध में।"
              },
              "explanation": {
                "en": "Because RL = Rth, identical voltage drops and currents occur across both, dissipating equal power. Power delivered to load / Total power generated = 50%.",
                "hinglish": "Dono resistors barabar hone se 50% efficiency aati hai.",
                "hi": "दोनों प्रतिरोध समान होने से दक्षता ठीक 50% होती है।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "100%",
                "50%",
                "75%",
                "25%"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "Thevenin’s Theorem replaces linear circuits with a voltage source Vth in series with Rth.",
              "Norton’s Theorem replaces linear circuits with a current source In in parallel with Rn (= Rth).",
              "To find Rth, short all independent voltage sources and open all independent current sources.",
              "Maximum power transfer occurs when RL = Rth, achieving Pmax = Vth^2 / (4 Rth) at 50% efficiency."
            ],
            "hinglish": [
              "Thevenin theorem circuit ko Vth series with Rth me convert karta hai.",
              "Norton theorem circuit ko In parallel with Rn me convert karta hai.",
              "Rth nikaalne ke liye voltage sources ko short aur current sources ko open karo.",
              "RL = Rth par maximum power milti hai (Pmax = Vth^2 / 4Rth, efficiency = 50%)."
            ],
            "hi": [
              "थेवेनिन परिपथ Vth और श्रेणी Rth द्वारा बनता है।",
              "नॉर्टन परिपथ In और समानांतर Rn द्वारा बनता है।",
              "Rth हेतु वोल्टेज स्रोत शॉर्ट तथा धारा स्रोत ओपन किए जाते हैं।",
              "RL = Rth पर अधिकतम शक्ति अंतरण 50% दक्षता पर होता है।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u1-l3-q1",
              "question": {
                "en": "If a circuit has a Thevenin voltage of 20 V and Thevenin resistance of 5 Ω, what is its Norton short-circuit current In?",
                "hinglish": "Agar Vth = 20 V aur Rth = 5 Ω hai, toh Norton current In kitna hoga?",
                "hi": "यदि Vth = 20 V और Rth = 5 Ω है, तो नॉर्टन धारा In क्या होगी?"
              },
              "options": [
                "1 A",
                "4 A",
                "25 A",
                "100 A"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "In = Vth / Rth.",
                "hinglish": "In = Vth / Rth = 20 / 5.",
                "hi": "In = Vth / Rth।"
              },
              "explanation": {
                "en": "By source equivalence, Norton current In = Vth / Rth = 20 / 5 = 4 A.",
                "hinglish": "In = 20 / 5 = 4 A.",
                "hi": "नॉर्टन धारा In = 20/5 = 4 A।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Electric charge, Ohm’s law, Kirchhoff’s Current Law (KCL), Kirchhoff’s Voltage Law (KVL), Mesh current analysis, Nodal voltage analysis, Source transformations, Thevenin’s Theorem, Norton’s Theorem, Superposition Theorem, and Maximum Power Transfer Theorem.",
          "hinglish": "DC Circuit Analysis & Network Theorems ka poora one-page revision summary jisme saare core formulas, theorems aur exam problems shamil hain.",
          "hi": "DC Circuit Analysis & Network Theorems का संपूर्ण एक-पृष्ठीय पुनरावलोकन सारांश जिसमें सभी प्रमुख सूत्र और प्रमेय सम्मिलित हैं।"
        },
        "shortNotes": [
          {
            "topic": "KCL",
            "content": {
              "en": "Algebraic sum of currents entering any node equals zero (charge conservation).",
              "hinglish": "Algebraic sum of currents entering any node equals zero (charge conservation).",
              "hi": "Algebraic sum of currents entering any node equals zero (charge conservation)."
            }
          },
          {
            "topic": "KVL",
            "content": {
              "en": "Algebraic sum of voltages around any closed loop equals zero (energy conservation).",
              "hinglish": "Algebraic sum of voltages around any closed loop equals zero (energy conservation).",
              "hi": "Algebraic sum of voltages around any closed loop equals zero (energy conservation)."
            }
          },
          {
            "topic": "Thevenin's Theorem",
            "content": {
              "en": "Any linear two-terminal circuit is equivalent to Vth in series with Rth.",
              "hinglish": "Any linear two-terminal circuit is equivalent to Vth in series with Rth.",
              "hi": "Any linear two-terminal circuit is equivalent to Vth in series with Rth."
            }
          },
          {
            "topic": "Superposition Theorem",
            "content": {
              "en": "Response with all sources active equals the sum of responses from each source acting alone.",
              "hinglish": "Response with all sources active equals the sum of responses from each source acting alone.",
              "hi": "Response with all sources active equals the sum of responses from each source acting alone."
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Ohm's Law",
            "formula": "V = I * R",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Current Division",
            "formula": "I1 = I_total * [R2 / (R1 + R2)]",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Voltage Division",
            "formula": "V1 = V_total * [R1 / (R1 + R2)]",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Thevenin to Norton",
            "formula": "In = Vth / Rth, Rn = Rth",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Maximum Power Transfer",
            "formula": "RL = Rth => Pmax = Vth^2 / (4 * Rth)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          }
        ],
        "mindMap": [
          {
            "node": "DC Circuit Analysis & Network Theorems",
            "children": [
              "Electric charge, current, potential difference, and dynamic resistance",
              "Kirchhoff’s Current Law (KCL) and Current Division Rule",
              "Kirchhoff’s Voltage Law (KVL) and Voltage Division Rule",
              "Mesh Analysis: Loop equations, matrix formulation, and Supermesh with current sources",
              "Nodal Analysis: Node equations and Supernode with floating voltage sources",
              "Practical sources with internal resistance and Source Transformations",
              "Superposition Theorem: Linearity criteria and handling multiple independent sources",
              "Thevenin’s Theorem: Open-circuit voltage (Vth) and Thevenin equivalent resistance (Rth)",
              "Norton’s Theorem: Short-circuit current (In) and Norton equivalent resistance (Rn)",
              "Maximum Power Transfer Theorem: Condition RL = Rth and maximum power formula"
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
                "b": "Forgetting to short voltage sources and open current sources when calculating Rth."
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
                "b": "Assuming Maximum Power Transfer yields 100% efficiency instead of 50%."
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "Source Deactivation",
            "back": "Voltage Short, Current Cut (VSCC)"
          },
          {
            "front": "Parallel Division",
            "back": "Other Resistor Over Sum (OROS)"
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Why can the Superposition Theorem NOT be applied directly to calculate power?",
            "answer": "The Superposition Theorem applies strictly to linear systems. Electrical power is a non-linear quadratic function of current (P = I^2 R) and voltage (P = V^2 / R). Therefore, you must find total branch current or voltage using superposition first, and then compute power."
          },
          {
            "question": "What is the condition for Maximum Power Transfer to a load in a DC circuit, and what is the efficiency?",
            "answer": "Maximum power is transferred when the load resistance equals the Thevenin equivalent resistance of the driving network (RL = Rth). At this operating condition, the system efficiency is exactly 50% because half the generated power is lost as heat inside the internal resistance Rth."
          }
        ]
      }
    },
    {
      "id": "beee-u2",
      "unitNumber": "Unit II",
      "title": "AC Circuits, Resonance and Three-Phase Systems",
      "description": "Sinusoidal alternating voltage and current, RMS and average values, form factor, peak factor, phasor algebra, series and parallel RLC circuits, impedance triangle, power triangle (P, Q, S), power factor, series resonance, parallel resonance, quality factor (Q), bandwidth, and balanced three-phase star and delta connections.",
      "topics": [
        "Generation of alternating sinusoidal voltage and mathematical equation v(t) = Vm sin(ωt)",
        "Definitions: Instantaneous value, amplitude, time period, frequency, and angular velocity (ω = 2πf)",
        "RMS value (effective heating value) and Average value derivations for sinusoidal waveforms",
        "Form Factor (RMS / Average = 1.11) and Peak / Crest Factor (Peak / RMS = 1.414)",
        "Phasor representation of sinusoidal voltages and currents in complex form (Rectangular and Polar)",
        "AC through pure resistor (in-phase), pure inductor (lags by 90°), and pure capacitor (leads by 90°)",
        "Series RLC circuit: Impedance (Z), phase angle (φ), and voltage phasor diagram",
        "Power in AC circuits: Real/Active power (P = VI cos φ), Reactive power (Q = VI sin φ), and Apparent power (S = VI)",
        "Power Factor: Definition (cos φ), economic importance, lagging vs leading, and power factor correction",
        "Series Resonance: Condition XL = XC, resonant frequency f0 = 1 / (2π√LC), minimum impedance Z = R, Quality factor (Q), and Bandwidth",
        "Three-Phase Systems: Advantages of 3-phase over 1-phase, Phase sequence (RYB)",
        "Balanced Star (Y) Connection: Line vs Phase voltage relationship (VL = √3 Vph) and Line current (IL = Iph)",
        "Balanced Delta (Δ) Connection: Line vs Phase voltage (VL = Vph) and Line current relationship (IL = √3 Iph)",
        "Total 3-phase power formula: P = √3 VL IL cos φ = 3 Vph Iph cos φ"
      ],
      "lessons": [
        {
          "id": "beee-u2-l1",
          "unitId": "beee-u2",
          "subjectId": "beee",
          "title": "AC Fundamentals: Waveforms, RMS, Average & Phasor Algebra",
          "durationMinutes": 30,
          "difficulty": "Beginner",
          "prerequisites": [
            "Basic trigonometry (sine waves)",
            "DC voltage and current"
          ],
          "realLifeQuestion": {
            "en": "If your home wall socket supplies 230 V AC, why does an oscilloscope show the voltage actually swinging up to +325 V and down to -325 V fifty times every second?",
            "hinglish": "Ghar ke 230 V AC socket me oscilloscope lagane par voltage +325 V se -325 V ke beech 50 baar kyu oscillate hota hai?",
            "hi": "यदि घरेलू आपूर्ति 230 V है, तो ऑसिलोस्कोप पर शिखर मान +325 V से -325 V तक क्यों दिखाई देता है?"
          },
          "simpleExplanation": {
            "en": "Unlike direct current (DC) from a battery which flows in one steady direction, Alternating Current (AC) continuously alternates its direction and magnitude sinusoidally. The stated \"230 V\" rating is NOT the maximum peak voltage; it is the Root-Mean-Square (RMS) value! The RMS value represents the equivalent DC voltage that produces the exact same heating effect in a resistor. For a sine wave, Peak Voltage Vm = √2 * V_rms = 1.414 * 230 V ≈ 325 V! Because calculating AC with time-dependent sine formulas is cumbersome, engineers use Phasors: rotating vectors in the complex plane whose length represents RMS amplitude and angle represents phase.",
            "hinglish": "Battery ki DC current ek hi direction me behti hai, jabki AC current har second 50 baar aage-peeche oscillate karti hai. Hamare ghar ka \"230 V\" asal me Peak voltage nahi hai, balki Root Mean Square (RMS) value hai! RMS value wo equivalent DC voltage hoti hai jo utni hi heat generate karti hai. Sine wave ke liye Peak Voltage = √2 * 230 V ≈ 325 V hoti hai! Har jagah sin(ωt) likhne ke bajaye engineers Phasors (rotating vectors) use karte hain.",
            "hi": "प्रत्यावर्ती धारा (AC) दिशा और परिमाण में निरंतर बदलती है। 230 V इसका वर्ग-माध्य-मूल (RMS) मान है जो समान ऊष्मीय प्रभाव उत्पन्न करता है। शिखर मान Vm = √2 × 230 ≈ 325 V होता है। फेजर आरेख गणना को सरल बनाते हैं।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "A 2-man handsaw cuts wood whether you push it forward or pull it backward: heat and work are generated in both directions! AC current is like the handsaw moving back and forth; even though the average position over a full cycle is zero, real work (RMS power) is accomplished continuously.",
              "hinglish": "Lakdi kaatne wali aari (handsaw) aage kheecho ya peeche, dono taraf lakdi katti hai aur garmi paida hoti hai! AC current aari ki tarah aage-peeche hoti hai; bhale hi average current zero ho, par heat (RMS power) poori milti hai.",
              "hi": "आरी आगे-पीछे दोनों दिशाओं में लकड़ी काटती है; उसी प्रकार प्रत्यावर्ती धारा दोनों दिशाओं में ऊष्मा उत्पन्न करती है।"
            },
            "limitations": {
              "en": "A hand saw can pause; AC voltage changes continuously following Faraday's law of induction in power generators.",
              "hinglish": "Aari ruk sakti hai, par generator se aane wali AC smooth sine wave banati hai.",
              "hi": "प्रत्यावर्ती धारा एक सुचारू ज्यावक्रीय (Sine) तरंग का अनुसरण करती है।"
            }
          },
          "terminology": [
            {
              "term": "RMS Value",
              "definition": {
                "en": "Root Mean Square: The steady DC current value producing identical Joule heating in a resistor (I_rms = Im / √2 ≈ 0.707 Im).",
                "hinglish": "Wo DC current jo resistor me barabar heat generate karti hai (Im / √2).",
                "hi": "समान ऊष्मीय प्रभाव उत्पन्न करने वाला प्रभावी मान (Im / √2)।"
              }
            },
            {
              "term": "Average Value",
              "definition": {
                "en": "The average over a positive half-cycle of a symmetrical sine wave: I_avg = 2 Im / π ≈ 0.637 Im.",
                "hinglish": "Aadhe chakkar ka average current (2 Im / π).",
                "hi": "धनात्मक अर्ध-चक्र का औसत मान (2 Im / π)।"
              }
            },
            {
              "term": "Form Factor",
              "definition": {
                "en": "Ratio of RMS value to Average value: Kf = RMS / Avg = 1.11 for a pure sine wave.",
                "hinglish": "RMS value aur Average value ka ratio jo sine wave ke liye 1.11 hota hai.",
                "hi": "रूप गुणांक (RMS / Average = 1.11)।"
              }
            },
            {
              "term": "Phasor",
              "definition": {
                "en": "A complex number representing the amplitude and phase angle of a sinusoidal waveform.",
                "hinglish": "Sine wave ki amplitude aur angle ko represent karne wala rotating vector.",
                "hi": "ज्यावक्रीय तरंग का आयाम और कला दर्शाने वाला फेजर।"
              }
            }
          ],
          "visualType": "circuit",
          "visualData": {
            "circuitType": "ac-sinewave",
            "vPeak": 325,
            "vRms": 230,
            "frequency": 50,
            "points": [
              "Peak: +325 V",
              "RMS: 230 V",
              "Average: 207 V",
              "Negative Peak: -325 V"
            ]
          },
          "underlyingPrinciple": {
            "en": "Electromagnetic Waveforms & Joule Heating: Power dissipated in a resistor is proportional to the square of instantaneous current p(t) = i(t)^2 R. Integrating over one period yields P = (Im^2 / 2) R = I_rms^2 R.",
            "hinglish": "Heat hamesha current ke square (i^2 R) ke proportional hoti hai, isliye negative current bhi positive heat deti hai.",
            "hi": "जूल ऊष्मा धारा के वर्ग के समानुपाती होती है, अतः ऋणात्मक धारा भी धनात्मक ऊष्मा देती है।"
          },
          "formulaLogic": {
            "formula": "V_{\\text{rms}} = \\frac{V_m}{\\sqrt{2}} \\approx 0.707 V_m, \\quad V_{\\text{avg}} = \\frac{2 V_m}{\\pi} \\approx 0.637 V_m, \\quad K_f = \\frac{V_{\\text{rms}}}{V_{\\text{avg}}} = 1.11",
            "description": {
              "en": "Standard relationships for sinusoidal alternating quantities.",
              "hinglish": "Sine wave ke RMS, Average aur Form Factor ke standard formulas.",
              "hi": "ज्यावक्रीय प्रत्यावर्ती राशियों के मानक सम्बंध।"
            },
            "symbols": [
              {
                "symbol": "V_m",
                "meaning": "Peak / Maximum Amplitude",
                "unit": "Volts (V)"
              },
              {
                "symbol": "V_{\\text{rms}}",
                "meaning": "Root Mean Square / Effective Value",
                "unit": "Volts (V)"
              },
              {
                "symbol": "K_f",
                "meaning": "Form Factor (1.11 for sine wave)",
                "unit": "dimensionless"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "An alternating voltage is represented by v(t) = 141.4 sin(314 t) Volts. Find (a) Maximum amplitude, (b) RMS voltage, (c) Frequency, and (d) Instantaneous voltage at t = 5 ms.",
              "hinglish": "Voltage equation v(t) = 141.4 sin(314 t) di hai. Maximum amplitude, RMS value, frequency, aur t = 5 ms par instantaneous value nikaalo.",
              "hi": "v(t) = 141.4 sin(314 t) के लिए शिखर मान, RMS मान, आवृत्ति और t = 5 ms पर मान ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Identify maximum amplitude and RMS value",
                "explanation": {
                  "en": "Comparing with v(t) = Vm sin(ωt), maximum amplitude Vm = 141.4 V. RMS voltage V_rms = Vm / √2 = 141.4 / 1.414 = 100 V.",
                  "hinglish": "Vm = 141.4 V. V_rms = 141.4 / 1.414 = 100 V.",
                  "hi": "शिखर मान Vm = 141.4 V तथा RMS मान = 141.4 / √2 = 100 V।"
                },
                "math": "V_m = 141.4\\,\\text{V}, \\quad V_{\\text{rms}} = \\frac{141.4}{1.414} = 100\\,\\text{V}"
              },
              {
                "stepNumber": 2,
                "title": "Determine frequency from angular velocity ω",
                "explanation": {
                  "en": "Angular frequency ω = 314 rad/s. Since ω = 2πf, frequency f = ω / (2π) = 314 / (2 * 3.1416) = 314 / 6.283 ≈ 50 Hz.",
                  "hinglish": "ω = 314 rad/s. f = 314 / (2 * 3.14) = 50 Hz (standard Indian grid frequency).",
                  "hi": "आवृत्ति f = 314 / (2π) ≈ 50 Hz।"
                },
                "math": "f = \\frac{\\omega}{2\\pi} = \\frac{314}{2 \\times 3.1416} = 50\\,\\text{Hz}"
              },
              {
                "stepNumber": 3,
                "title": "Calculate instantaneous voltage at t = 5 ms (0.005 s)",
                "explanation": {
                  "en": "Angle θ = ωt = 314 * 0.005 = 1.57 radians = π/2 = 90 degrees. v(5 ms) = 141.4 * sin(90°) = 141.4 * 1 = 141.4 V (it reaches its positive peak!).",
                  "hinglish": "θ = 314 * 0.005 = 1.57 rad = 90°. sin(90°) = 1, isliye v = 141.4 V.",
                  "hi": "θ = 314 × 0.005 = π/2 रेडियन (90°)। v = 141.4 × 1 = 141.4 V।"
                },
                "math": "v(0.005) = 141.4 \\times \\sin(1.57\\,\\text{rad}) = 141.4 \\times 1 = 141.4\\,\\text{V}"
              }
            ],
            "finalAnswer": "Vm = 141.4 V, V_rms = 100 V, Frequency = 50 Hz, v(5 ms) = 141.4 V."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Taking the average value of a full sine wave cycle as 0.637 Vm.",
                "hinglish": "Poore sine wave cycle ka average 0.637 Vm samajhna.",
                "hi": "पूर्ण चक्र का औसत मान 0.637 Vm मानना।"
              },
              "correction": {
                "en": "Over a full complete cycle (0 to 2π), the positive half-cycle and negative half-cycle cancel out exactly, making the mathematical average over a full cycle EQUAL TO ZERO! The 0.637 Vm value is strictly the average over a single positive half-cycle.",
                "hinglish": "Poore cycle ka average 0 hota hai kyunki positive aur negative hissa cancel ho jata hai. 0.637 Vm sirf aadhe cycle ka average hota hai.",
                "hi": "पूर्ण चक्र का औसत मान सदैव शून्य होता है; 0.637 केवल अर्ध-चक्र का मान है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u2-l1-p1",
              "question": {
                "en": "What is the Form Factor of a pure sinusoidal alternating wave?",
                "hinglish": "Pure sine wave ka Form Factor kitna hota hai?",
                "hi": "शुद्ध ज्यावक्रीय तरंग का रूप गुणांक (Form Factor) कितना होता है?"
              },
              "hint": {
                "en": "Form Factor = RMS value / Average value = 0.707 / 0.637.",
                "hinglish": "0.707 / 0.637 = 1.11.",
                "hi": "1.11।"
              },
              "explanation": {
                "en": "Form Factor Kf = V_rms / V_avg = (Vm / √2) / (2 Vm / π) = π / (2√2) ≈ 1.11.",
                "hinglish": "Kf = RMS / Average = 1.11.",
                "hi": "Kf = RMS / Average = 1.11।"
              },
              "correctAnswer": 2,
              "level": "Beginner",
              "options": [
                "1.414",
                "0.707",
                "1.11",
                "0.637"
              ],
              "correctIndex": 2
            }
          ],
          "summary": {
            "en": [
              "AC voltage alternates sinusoidally: v(t) = Vm sin(2πft).",
              "RMS value is the effective heating equivalent: V_rms = Vm / √2 ≈ 0.707 Vm.",
              "Average value over a half-cycle is V_avg = 2 Vm / π ≈ 0.637 Vm (over a full cycle it is 0).",
              "Form Factor = 1.11 and Peak Factor = 1.414 for pure sinusoidal waves."
            ],
            "hinglish": [
              "AC voltage sine wave ki tarah oscillate karta hai: v(t) = Vm sin(ωt).",
              "RMS value barabar heating power deti hai: V_rms = Vm / √2 = 0.707 Vm.",
              "Half cycle ka average 0.637 Vm hota hai (poore cycle ka 0 hota hai).",
              "Form Factor 1.11 aur Peak Factor 1.414 hota hai."
            ],
            "hi": [
              "प्रत्यावर्ती वोल्टेज v(t) = Vm sin(ωt) होता है।",
              "प्रभावी RMS मान V_rms = Vm / √2 होता है।",
              "अर्ध-चक्र का औसत मान 0.637 Vm तथा पूर्ण चक्र का शून्य होता है।",
              "रूप गुणांक 1.11 और शिखर गुणांक 1.414 होता है।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u2-l1-q1",
              "question": {
                "en": "If a domestic AC supply has an RMS value of 230 V, what is its peak voltage amplitude?",
                "hinglish": "Ghar ke 230 V RMS supply ka peak voltage kitna hota hai?",
                "hi": "230 V RMS घरेलू आपूर्ति का शिखर वोल्टेज क्या है?"
              },
              "options": [
                "162.6 V",
                "230 V",
                "325.3 V",
                "460 V"
              ],
              "correctIndex": 2,
              "hint": {
                "en": "Vm = √2 * V_rms = 1.414 * 230 V.",
                "hinglish": "230 ko 1.414 se multiply karo.",
                "hi": "√2 × 230।"
              },
              "explanation": {
                "en": "Peak voltage Vm = √2 * V_rms = 1.4142 * 230 V ≈ 325.3 V.",
                "hinglish": "Vm = 1.414 * 230 = 325.3 V.",
                "hi": "शिखर मान Vm = √2 × 230 = 325.3 V।"
              }
            }
          ]
        },
        {
          "id": "beee-u2-l2",
          "unitId": "beee-u2",
          "subjectId": "beee",
          "title": "Series RLC Circuits, Impedance & Power Factor (P, Q, S)",
          "durationMinutes": 35,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Phasors",
            "Capacitive and inductive reactances (XL = ωL, XC = 1/ωC)"
          ],
          "realLifeQuestion": {
            "en": "Why do electric utility companies fine industrial factories thousands of rupees if their electric meters show a low \"power factor\" of 0.7 instead of 0.95?",
            "hinglish": "Factories me power factor 0.7 hone par electricity board unpar bhari penalty kyu lagata hai?",
            "hi": "विद्युत कंपनियां कम पावर फैक्टर (0.7) वाले कारखानों पर जुर्माना क्यों लगाती हैं?"
          },
          "simpleExplanation": {
            "en": "In AC circuits containing inductors (like motor coils) and capacitors, current does not necessarily flow in step with voltage. An inductor opposes current changes, causing current to LAG voltage by 90°. A capacitor opposes voltage changes, causing current to LEAD voltage by 90°. In a series RLC circuit, total opposition to current is called Impedance Z = √(R^2 + (XL - XC)^2). Because of the phase angle φ between voltage and current, total power splits into three components: (1) Active/Real Power P = VI cos φ (measured in Watts/kW), which does actual physical work; (2) Reactive Power Q = VI sin φ (measured in VAR/kVAR), which merely bounces back and forth creating magnetic fields; and (3) Apparent Power S = VI (measured in VA/kVA). The Power Factor is cos φ = P / S. A low power factor forces the utility to supply huge extra current through cables without delivering useful work, causing heavy transmission losses.",
            "hinglish": "AC circuit me Inductor (coil) current ko 90° piche dhakel deta hai (Lagging), aur Capacitor current ko 90° aage bhej deta hai (Leading). Series RLC circuit me total rukawat ko Impedance Z kehte hain: Z = √(R^2 + (XL - XC)^2). Is phase difference ke karan AC me teen tarah ki power hoti hai: (1) Real Power P = VI cos φ (Watts), jo asli kaam karti hai; (2) Reactive Power Q = VI sin φ (VAR), jo motor me magnetic field banati hai par koi useful work nahi karti; aur (3) Apparent Power S = VI (kVA). Power Factor = cos φ = P / S. Agar power factor kam hoga toh factory faltu current kheenchegi jisse grid ke taar garm honge, isliye electricity board penalty lagata hai.",
            "hi": "RLC परिपथ में कुल प्रतिबाधा Z = √(R² + (XL - XC)²) होती है। वास्तविक शक्ति P = VI cos φ कार्य करती है, जबकि प्रतिघाती शक्ति Q चुंबकीय क्षेत्र बनाती है। पावर फैक्टर cos φ = P/S होता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of ordering a mug of draft beer. The liquid golden beer at the bottom is Real Power (P)—it quenches your thirst. The useless white foam on top is Reactive Power (Q)—you can't drink it, but you need it to hold the beer. The entire glass capacity you pay for is Apparent Power (S). A high power factor means a full mug of beer with very little foam!",
              "hinglish": "Coffee ya soda ke mug ki tarah: neeche ka asli drink Real Power (P) hai jo pyas bujhata hai. Upar ka jhaag (foam) Reactive Power (Q) hai jo kisi kaam ka nahi hai. Poora glass Apparent Power (S) hai. High power factor ka matlab kam jhaag aur zyada drink!",
              "hi": "बीयर के मग की तरह: नीचे का पेय वास्तविक शक्ति (P) है और ऊपर का झाग प्रतिघाती शक्ति (Q) है। पूरा गिलास आभासी शक्ति (S) है।"
            },
            "limitations": {
              "en": "Foam has zero purpose; reactive power is physically essential to build the alternating magnetic flux inside induction motors and transformers.",
              "hinglish": "Foam bekar hota hai, par reactive power motor me magnetic field banane ke liye zaroori hoti hai.",
              "hi": "झाग व्यर्थ है, परंतु प्रतिघाती शक्ति मोटरों में चुंबकीय क्षेत्र बनाने हेतु अनिवार्य है।"
            }
          },
          "terminology": [
            {
              "term": "Impedance (Z)",
              "definition": {
                "en": "Total opposition to AC current flow combining resistance R and net reactance X: Z = R + j(XL - XC).",
                "hinglish": "AC circuit ki total resistance aur reactance ka vector sum.",
                "hi": "प्रत्यावर्ती धारा के प्रवाह में कुल रुकावट (प्रतिबाधा Z)।"
              }
            },
            {
              "term": "Inductive Reactance (XL)",
              "definition": {
                "en": "Opposition by an inductor to AC: XL = 2πfL (increases with frequency).",
                "hinglish": "Inductor dwara AC ko di gayi rukawat: XL = 2πfL.",
                "hi": "प्रेरक प्रतिघात (XL = 2πfL)।"
              }
            },
            {
              "term": "Capacitive Reactance (XC)",
              "definition": {
                "en": "Opposition by a capacitor to AC: XC = 1 / (2πfC) (decreases with frequency).",
                "hinglish": "Capacitor dwara AC ko di gayi rukawat: XC = 1 / (2πfC).",
                "hi": "धारितीय प्रतिघात (XC = 1 / 2πfC)।"
              }
            },
            {
              "term": "Power Factor (cos φ)",
              "definition": {
                "en": "The ratio of active real power to total apparent power: cos φ = P / S = R / Z.",
                "hinglish": "Real power aur Apparent power ka ratio (R / Z).",
                "hi": "शक्ति गुणांक (Power Factor = P / S = R / Z)।"
              }
            }
          ],
          "visualType": "circuit",
          "visualData": {
            "circuitType": "rlc-power-triangle",
            "pWatts": 800,
            "qVar": 600,
            "sVa": 1000,
            "cosPhi": 0.8
          },
          "underlyingPrinciple": {
            "en": "Complex Power Flow in Reactive Networks: In steady-state sinusoidal analysis, complex power S = V * I* = P + jQ, where the real part represents dissipative energy and the imaginary part represents oscillating stored field energy.",
            "hinglish": "Complex power S = P + jQ me Real part P heat/work banta hai aur Imaginary part Q magnetic field me oscillate hota hai.",
            "hi": "सम्मिश्र शक्ति S = P + jQ: वास्तविक भाग कार्य करता है और काल्पनिक भाग ऊर्जा दोलन करता है।"
          },
          "formulaLogic": {
            "formula": "Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\quad \\cos \\phi = \\frac{R}{Z}, \\quad S = \\sqrt{P^2 + Q^2} = V I",
            "description": {
              "en": "Series RLC impedance, power factor, and power triangle hypotenuse formulas.",
              "hinglish": "Impedance, Power Factor aur Power Triangle ke standard formulas.",
              "hi": "प्रतिबाधा, पावर फैक्टर और शक्ति त्रिभुज के सूत्र।"
            },
            "symbols": [
              {
                "symbol": "Z",
                "meaning": "Impedance magnitude",
                "unit": "Ohms (Ω)"
              },
              {
                "symbol": "P",
                "meaning": "Active Power = VI cos φ",
                "unit": "Watts (W)"
              },
              {
                "symbol": "Q",
                "meaning": "Reactive Power = VI sin φ",
                "unit": "Volt-Amperes Reactive (VAR)"
              },
              {
                "symbol": "S",
                "meaning": "Apparent Power = VI",
                "unit": "Volt-Amperes (VA)"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A coil of resistance R = 6 Ω and inductive reactance XL = 8 Ω is connected to a 200 V, 50 Hz AC supply. Calculate (a) Circuit impedance Z, (b) Current I, (c) Power factor cos φ, and (d) Active power P.",
              "hinglish": "Coil jisme R = 6 Ω aur XL = 8 Ω hai, 200 V AC supply se judi hai. Impedance Z, current I, power factor, aur active power P nikaalo.",
              "hi": "R = 6 Ω और XL = 8 Ω की कुंडली 200 V से जुड़ी है। प्रतिबाधा, धारा, पावर फैक्टर और वास्तविक शक्ति ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Compute circuit impedance Z",
                "explanation": {
                  "en": "There is no capacitor (XC = 0). Z = √(R^2 + XL^2) = √(6^2 + 8^2) = √(36 + 64) = √100 = 10 Ω.",
                  "hinglish": "Z = √(6^2 + 8^2) = √(36 + 64) = √100 = 10 Ω.",
                  "hi": "प्रतिबाधा Z = √(6² + 8²) = 10 Ω।"
                },
                "math": "Z = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10\\,\\Omega"
              },
              {
                "stepNumber": 2,
                "title": "Calculate current and power factor",
                "explanation": {
                  "en": "Circuit current I = V / Z = 200 / 10 = 20 A. Power factor cos φ = R / Z = 6 / 10 = 0.6 lagging (since it is inductive).",
                  "hinglish": "I = V / Z = 200 / 10 = 20 A. cos φ = R / Z = 6 / 10 = 0.6 lagging.",
                  "hi": "धारा I = 200/10 = 20 A तथा पावर फैक्टर cos φ = 6/10 = 0.6 पश्चगामी (lagging)।"
                },
                "math": "I = \\frac{200}{10} = 20\\,\\text{A}, \\quad \\cos \\phi = \\frac{6}{10} = 0.6\\,\\text{lagging}"
              },
              {
                "stepNumber": 3,
                "title": "Calculate Active Power P",
                "explanation": {
                  "en": "P = V * I * cos φ = 200 * 20 * 0.6 = 2400 W = 2.4 kW. (Alternatively: P = I^2 * R = (20)^2 * 6 = 400 * 6 = 2400 W).",
                  "hinglish": "P = 200 * 20 * 0.6 = 2400 W = 2.4 kW.",
                  "hi": "वास्तविक शक्ति P = 200 × 20 × 0.6 = 2400 वॉट (2.4 kW)।"
                },
                "math": "P = V I \\cos \\phi = 200 \\times 20 \\times 0.6 = 2400\\,\\text{W} = 2.4\\,\\text{kW}"
              }
            ],
            "finalAnswer": "Z = 10 Ω, Current = 20 A, Power Factor = 0.6 lagging, Active Power = 2.4 kW."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Calculating total AC power simply as P = V * I without the cos φ term.",
                "hinglish": "AC power ko DC ki tarah bina cos φ ke sidhe V * I likh dena.",
                "hi": "AC शक्ति में cos φ को छोड़ देना।"
              },
              "correction": {
                "en": "V * I gives Apparent Power S in VA, NOT the actual useful power consumed! The real physical power doing work is always P = V * I * cos φ. If φ = 90° (pure inductor/capacitor), cos(90°) = 0, so real power consumed is strictly ZERO.",
                "hinglish": "V * I sirf Apparent Power hoti hai. Asli power jo meter count karta hai wo P = V * I * cos φ hoti hai.",
                "hi": "V × I केवल आभासी शक्ति है; वास्तविक शक्ति सदैव P = VI cos φ होती है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u2-l2-p1",
              "question": {
                "en": "In a purely capacitive AC circuit, what is the phase angle between voltage and current?",
                "hinglish": "Pure capacitor wale AC circuit me voltage aur current ke beech ka angle kitna hota hai?",
                "hi": "शुद्ध धारितीय परिपथ में वोल्टेज और धारा के बीच कला कोण कितना होता है?"
              },
              "hint": {
                "en": "Remember: CIVIL — In Capacitor (C), Current (I) leads Voltage (V).",
                "hinglish": "Capacitor me current 90 degree aage hoti hai.",
                "hi": "धारा 90° अग्रगामी (lead) होती है।"
              },
              "explanation": {
                "en": "In a purely capacitive circuit, current leads voltage by exactly 90 degrees (π/2 radians).",
                "hinglish": "Capacitor me current voltage se 90 degree aage (lead) rehti hai.",
                "hi": "धारा वोल्टेज से ठीक 90° अग्रगामी होती है।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "Voltage leads current by 90°",
                "Current leads voltage by 90°",
                "Voltage and current are in phase",
                "Phase difference is 180°"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "Inductors cause current to lag by 90°; capacitors cause current to lead by 90°.",
              "Series RLC impedance: Z = √(R^2 + (XL - XC)^2).",
              "Power Triangle: S^2 = P^2 + Q^2 (Active P in W, Reactive Q in VAR, Apparent S in VA).",
              "Power factor cos φ = P / S = R / Z measures the fraction of current performing useful work."
            ],
            "hinglish": [
              "Inductor me current 90° lag karti hai, Capacitor me current 90° lead karti hai.",
              "Impedance Z = √(R^2 + (XL - XC)^2).",
              "Power triangle: S^2 = P^2 + Q^2 (Real P, Reactive Q, Total S).",
              "Power factor cos φ = R / Z batata hai kitni current useful work kar rahi hai."
            ],
            "hi": [
              "प्रेरक में धारा 90° पश्चगामी और संधारित्र में 90° अग्रगामी होती है।",
              "प्रतिबाधा Z = √(R² + (XL - XC)²)।",
              "शक्ति सम्बंध: S² = P² + Q²।",
              "पावर फैक्टर cos φ = P / S = R / Z होता है।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u2-l2-q1",
              "question": {
                "en": "What device is commonly installed in parallel with industrial induction loads to improve poor power factor?",
                "hinglish": "Factory me low power factor ko sudharne ke liye parallel me kya lagaya jata hai?",
                "hi": "खराब पावर फैक्टर सुधारने हेतु मोटरों के समानांतर क्या लगाया जाता है?"
              },
              "options": [
                "Resistor bank",
                "Capacitor bank",
                "Choke coil",
                "Step-up transformer"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "Inductive lagging VARs are cancelled by leading capacitive VARs.",
                "hinglish": "Capacitor leading current dekar lagging current ko cancel karta hai.",
                "hi": "संधारित्र बैंक पश्चगामी धारा को संतुलित करता है।"
              },
              "explanation": {
                "en": "Induction motors draw lagging reactive current. Installing a parallel Capacitor Bank supplies leading reactive current, cancelling the inductive VARs and raising the power factor toward 1.0.",
                "hinglish": "Capacitor bank leading current dekar power factor ko 0.95-1.0 tak le aata hai.",
                "hi": "संधारित्र बैंक (Capacitor bank) पावर फैक्टर को सुधार कर 1 के करीब लाता है।"
              }
            }
          ]
        },
        {
          "id": "beee-u2-l3",
          "unitId": "beee-u2",
          "subjectId": "beee",
          "title": "Resonance, Quality Factor & Three-Phase Star/Delta Systems",
          "durationMinutes": 40,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Series RLC circuits",
            "Phasors and complex numbers"
          ],
          "realLifeQuestion": {
            "en": "How does turning an analog radio dial isolate 93.5 FM Red FM cleanly while silencing dozens of other powerful radio stations broadcasting through the exact same air?",
            "hinglish": "Radio ka knob ghumane par 93.5 Red FM ekdum saaf kaise sunai deta hai jabki hawa me 50 doosre channels bhi transmit ho rahe hote hain?",
            "hi": "रेडियो ट्यून करने पर केवल एक स्टेशन की ध्वनि कैसे स्पष्ट सुनाई देती है?"
          },
          "simpleExplanation": {
            "en": "Electrical Resonance occurs in an RLC circuit when inductive reactance XL equals capacitive reactance XC (XL = XC). At this exact Resonant Frequency f0 = 1 / (2π√LC), the inductive and capacitive reactive voltages cancel each other out completely (VL = -VC). The circuit becomes purely resistive: impedance drops to its absolute minimum Z = R, and current surges to its absolute maximum! This is how a radio tuner operates: turning the dial adjusts C so f0 matches 93.5 MHz, letting 93.5 MHz produce huge current while blocking all other frequencies. The Quality Factor (Q = ω0 L / R) measures tuner sharpness (selectivity). For high-power transmission, Three-Phase AC systems are universally preferred over single-phase because they deliver constant instantaneous torque in motors and require 25% less copper wire: (1) In Star (Y) connection, Line Voltage VL = √3 Vph and Line Current IL = Iph; (2) In Delta (Δ) connection, Line Voltage VL = Vph and Line Current IL = √3 Iph. Total 3-phase power is always P = √3 VL IL cos φ.",
            "hinglish": "Jab RLC circuit me XL aur XC barabar ho jaate hain (XL = XC), toh use Resonance kehte hain. Resonant frequency f0 = 1 / (2π√LC) par coil aur capacitor ke voltages ek dusre ko cancel kar dete hain. Circuit ka impedance ghatt kar minimum Z = R ban jata hai aur current maximum ho jata hai! Radio isi principle par chalta hai: capacitor badal kar f0 ko 93.5 MHz par set karte hain jisse wahi channel amplify ho jata hai. Heavy power transmission ke liye 3-Phase system use hota hai: (1) Star connection me VL = √3 Vph aur IL = Iph hota hai; (2) Delta connection me VL = Vph aur IL = √3 Iph hota hai. Total power = √3 VL IL cos φ.",
            "hi": "अनुनाद (Resonance) पर XL = XC होने से प्रतिबाधा न्यूनतम (Z = R) और धारा अधिकतम हो जाती है। f0 = 1 / (2π√LC)। तीन-फेज प्रणाली में स्टार में VL = √3 Vph तथा डेल्टा में IL = √3 Iph होता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Resonance is like pushing a child on a playground swing. If you push at random intervals, the swing jerks awkwardly. But if you push at the swing's exact natural resonance frequency, tiny gentle pushes build up into massive high-flying swings with minimum effort!",
              "hinglish": "Resonance jhule ko sahi timing par dhakka dene jaisa hai. Agar aap jhule ki natural frequency par halka sa bhi dhakka doge toh jhula bohot uncha chala jata hai bina mehnat ke.",
              "hi": "अनुनाद झूले को उसकी प्राकृतिक आवृत्ति पर धक्का देने जैसा है जिससे न्यूनतम प्रयास में अधिकतम गति मिलती है।"
            },
            "limitations": {
              "en": "A swing stops if you stop pushing; an electrical resonant tank circuit exchanges energy back and forth between L (magnetic field) and C (electric field) continuously.",
              "hinglish": "Circuit me energy inductor ki magnetic field aur capacitor ki electric field ke beech oscillate karti rehti hai.",
              "hi": "परिपथ में ऊर्जा प्रेरक और संधारित्र के बीच निरंतर स्थानांतरित होती है।"
            }
          },
          "terminology": [
            {
              "term": "Resonance",
              "definition": {
                "en": "Condition in RLC circuit where XL = XC, causing net reactance to vanish and power factor to become unity (cos φ = 1.0).",
                "hinglish": "Aisi condition jahan XL = XC ho jaye aur circuit purely resistive ban jaye.",
                "hi": "वह स्थिति जहाँ XL = XC होने से पावर फैक्टर 1 हो जाता है।"
              }
            },
            {
              "term": "Quality Factor (Q)",
              "definition": {
                "en": "Voltage magnification factor at resonance: Q = ω0 L / R = (1/R) √(L/C) = f0 / Bandwidth.",
                "hinglish": "Resonance ki sharpness napne ka scale (Q = f0 / Bandwidth).",
                "hi": "गुणता कारक (Q-फैक्टर): अनुनाद की तीक्ष्णता का माप।"
              }
            },
            {
              "term": "Star (Y) Connection",
              "definition": {
                "en": "3-phase configuration where one terminal of each phase joins at a common Neutral point: VL = √3 Vph, IL = Iph.",
                "hinglish": "3-phase wiring jisme teeno coils ek neutral point par milti hain: VL = √3 Vph.",
                "hi": "स्टार संयोजन: न्यूट्रल बिंदु सहित संयोजन (VL = √3 Vph)।"
              }
            },
            {
              "term": "Delta (Δ) Connection",
              "definition": {
                "en": "3-phase configuration forming a closed mesh without neutral: VL = Vph, IL = √3 Iph.",
                "hinglish": "3-phase wiring jo triangle jaisa band loop banati hai: IL = √3 Iph.",
                "hi": "डेल्टा संयोजन: बंद त्रिकोण संयोजन (IL = √3 Iph)।"
              }
            }
          ],
          "visualType": "circuit",
          "visualData": {
            "circuitType": "star-delta",
            "resonanceFrequency": "f0 = 1 / (2π√LC)",
            "starRelations": "VL = √3 Vph, IL = Iph",
            "deltaRelations": "VL = Vph, IL = √3 Iph"
          },
          "underlyingPrinciple": {
            "en": "Dynamic Energy Exchange and Polyphase Symmetry: At resonance, energy stored in the inductor’s magnetic field (1/2 L I^2) exactly equals the energy stored in the capacitor’s electric field (1/2 C V^2) at peak moments. In balanced 3-phase systems, the instantaneous power sum is strictly constant at all times, producing smooth non-pulsating torque in AC motors.",
            "hinglish": "3-phase system me total power har instant par bilkul constant rehti hai, jisse motors bina kisi vibration ke smooth chalti hain.",
            "hi": "तीन-फेज प्रणाली में तात्कालिक शक्ति सदैव स्थिर रहती है, जिससे मोटरों में कंपन रहित घूर्णन प्राप्त होता है।"
          },
          "formulaLogic": {
            "formula": "f_0 = \\frac{1}{2\\pi \\sqrt{LC}}, \\quad Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}, \\quad \\text{Star: } V_L = \\sqrt{3} V_{\\text{ph}}, \\quad \\text{Delta: } I_L = \\sqrt{3} I_{\\text{ph}}",
            "description": {
              "en": "Fundamental formulas for series resonance and balanced three-phase star/delta relationships.",
              "hinglish": "Series resonance aur 3-phase Star/Delta ke core formulas.",
              "hi": "अनुनादी आवृत्ति तथा तीन-फेज स्टार और डेल्टा के मुख्य सूत्र।"
            },
            "symbols": [
              {
                "symbol": "f_0",
                "meaning": "Series resonant frequency",
                "unit": "Hertz (Hz)"
              },
              {
                "symbol": "Q",
                "meaning": "Quality factor (voltage magnification)",
                "unit": "dimensionless"
              },
              {
                "symbol": "V_L, V_{\\text{ph}}",
                "meaning": "Line voltage and Phase voltage",
                "unit": "Volts (V)"
              },
              {
                "symbol": "I_L, I_{\\text{ph}}",
                "meaning": "Line current and Phase current",
                "unit": "Amperes (A)"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A balanced 3-phase star-connected load has an impedance of Zph = (16 + j12) Ω per phase and is connected to a 400 V, 50 Hz 3-phase supply. Calculate (a) Phase voltage Vph, (b) Phase current Iph, (c) Line current IL, (d) Power factor, and (e) Total active power P.",
              "hinglish": "Star connected load me Zph = 16 + j12 Ω hai aur 400 V 3-phase supply hai. Vph, Iph, IL, power factor, aur total power P nikaalo.",
              "hi": "400 V स्टार परिपथ में Zph = 16 + j12 Ω हेतु फेज़ वोल्टेज, फेज़ धारा, लाइन धारा और कुल शक्ति ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate phase voltage Vph in star",
                "explanation": {
                  "en": "In a Star connection, Line voltage VL = 400 V. Phase voltage Vph = VL / √3 = 400 / 1.732 = 230.94 V.",
                  "hinglish": "Star me Vph = VL / √3 = 400 / 1.732 = 231 V.",
                  "hi": "स्टार में फेज़ वोल्टेज Vph = 400 / √3 = 230.94 V।"
                },
                "math": "V_{\\text{ph}} = \\frac{V_L}{\\sqrt{3}} = \\frac{400}{1.732} = 230.94\\,\\text{V}"
              },
              {
                "stepNumber": 2,
                "title": "Compute phase impedance and currents",
                "explanation": {
                  "en": "Phase impedance magnitude |Zph| = √(16^2 + 12^2) = √(256 + 144) = √400 = 20 Ω. Phase current Iph = Vph / |Zph| = 230.94 / 20 = 11.55 A. In Star connection, Line Current IL = Iph = 11.55 A.",
                  "hinglish": "|Zph| = √(16^2 + 12^2) = 20 Ω. Iph = 231 / 20 = 11.55 A. Star me IL = Iph = 11.55 A.",
                  "hi": "|Zph| = 20 Ω; Iph = 230.94 / 20 = 11.55 A; स्टार में IL = Iph = 11.55 A।"
                },
                "math": "|Z_{\\text{ph}}| = 20\\,\\Omega, \\quad I_{\\text{ph}} = I_L = \\frac{230.94}{20} = 11.55\\,\\text{A}"
              },
              {
                "stepNumber": 3,
                "title": "Compute power factor and total power",
                "explanation": {
                  "en": "Power factor cos φ = Rph / |Zph| = 16 / 20 = 0.8 lagging. Total 3-phase power P = √3 * VL * IL * cos φ = 1.732 * 400 * 11.55 * 0.8 = 6400 W = 6.4 kW. (Alternatively: P = 3 * Iph^2 * Rph = 3 * (11.55)^2 * 16 = 3 * 133.4 * 16 = 6403 W).",
                  "hinglish": "cos φ = 16 / 20 = 0.8 lagging. Total power P = √3 * VL * IL * cos φ = 1.732 * 400 * 11.55 * 0.8 = 6.4 kW.",
                  "hi": "cos φ = 16/20 = 0.8 पश्चगामी। कुल शक्ति P = √3 × 400 × 11.55 × 0.8 = 6.4 kW।"
                },
                "math": "P = \\sqrt{3} \\times 400 \\times 11.55 \\times 0.8 = 6400\\,\\text{W} = 6.4\\,\\text{kW}"
              }
            ],
            "finalAnswer": "Vph = 230.9 V, Iph = IL = 11.55 A, Power Factor = 0.8 lagging, Total Power = 6.4 kW."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Using VL = √3 Vph for a Delta connection.",
                "hinglish": "Delta connection me bhi VL = √3 Vph laga dena.",
                "hi": "डेल्टा संयोजन में VL = √3 Vph का उपयोग करना।"
              },
              "correction": {
                "en": "In Delta (Δ), each phase is connected directly between two lines, so Line Voltage EQUALS Phase Voltage: VL = Vph. It is the current that splits: IL = √3 Iph. Star has VL = √3 Vph and IL = Iph.",
                "hinglish": "Delta me voltage barabar hota hai (VL = Vph) aur current me √3 lagta hai (IL = √3 Iph). Star me voltage me √3 lagta hai aur current barabar hoti hai.",
                "hi": "डेल्टा में वोल्टेज समान होता है (VL = Vph) तथा धारा IL = √3 Iph होती है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u2-l3-p1",
              "question": {
                "en": "What is the power factor of a series RLC circuit at the exact resonant frequency f0?",
                "hinglish": "Series RLC circuit me resonant frequency f0 par power factor kitna hota hai?",
                "hi": "अनुनाद आवृत्ति पर श्रेणी RLC परिपथ का शक्ति गुणांक कितना होता है?"
              },
              "hint": {
                "en": "XL and XC cancel out, leaving Z = R.",
                "hinglish": "Circuit purely resistive ban jata hai.",
                "hi": "परिपथ पूर्णतः प्रतिरोधी बन जाता है।"
              },
              "explanation": {
                "en": "At resonance, XL = XC, so net reactance X = 0. Impedance Z = R, which means voltage and current are perfectly in phase: cos φ = R / R = 1.0 (Unity Power Factor).",
                "hinglish": "Resonance par XL = XC hone se Z = R hota hai, isliye cos φ = 1.0 (Unity) hota hai.",
                "hi": "अनुनाद पर Z = R होने से शक्ति गुणांक इकाई (1.0) होता है।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "0.0 (Zero)",
                "1.0 (Unity)",
                "0.707 lagging",
                "0.5 leading"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "Series resonance occurs when XL = XC at frequency f0 = 1 / (2π√LC).",
              "At resonance, impedance is minimum (Z = R), current is maximum, and power factor is unity (1.0).",
              "In balanced Star (Y) systems: VL = √3 Vph and IL = Iph.",
              "In balanced Delta (Δ) systems: VL = Vph and IL = √3 Iph.",
              "Total 3-phase active power in both Star and Delta is P = √3 VL IL cos φ."
            ],
            "hinglish": [
              "Resonance par XL = XC ho jata hai, frequency f0 = 1 / (2π√LC).",
              "Resonance me impedance minimum (Z = R) aur power factor unity (1.0) hota hai.",
              "Star connection me VL = √3 Vph aur IL = Iph hota hai.",
              "Delta connection me VL = Vph aur IL = √3 Iph hota hai.",
              "Total 3-phase power hamesha P = √3 VL IL cos φ hoti hai."
            ],
            "hi": [
              "अनुनाद पर XL = XC तथा आवृत्ति f0 = 1 / (2π√LC) होती है।",
              "अनुनाद पर प्रतिबाधा न्यूनतम (Z = R) और शक्ति गुणांक इकाई (1.0) होता है।",
              "स्टार संयोजन: VL = √3 Vph तथा IL = Iph।",
              "डेल्टा संयोजन: VL = Vph तथा IL = √3 Iph।",
              "कुल तीन-फेज शक्ति P = √3 VL IL cos φ होती है।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u2-l3-q1",
              "question": {
                "en": "In a 3-phase balanced Delta-connected system, what is the relation between Line Current IL and Phase Current Iph?",
                "hinglish": "Balanced Delta 3-phase system me Line Current IL aur Phase Current Iph me kya relation hai?",
                "hi": "संतुलित तीन-फेज डेल्टा प्रणाली में लाइन धारा IL और फेज़ धारा Iph में क्या सम्बंध है?"
              },
              "options": [
                "IL = Iph",
                "IL = √3 Iph",
                "IL = Iph / √3",
                "IL = 3 Iph"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "Delta splits current into two phases: vector difference yields √3.",
                "hinglish": "Delta me current divide hoti hai isliye √3 aata hai.",
                "hi": "डेल्टा में धारा विभाजित होती है।"
              },
              "explanation": {
                "en": "In a delta connection, each line connects to the junction of two phases, so line current is the phasor difference: IL = √3 Iph.",
                "hinglish": "Delta me IL = √3 Iph hota hai.",
                "hi": "डेल्टा में लाइन धारा IL = √3 Iph होती है।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Sinusoidal alternating voltage and current, RMS and average values, form factor, peak factor, phasor algebra, series and parallel RLC circuits, impedance triangle, power triangle (P, Q, S), power factor, series resonance, parallel resonance, quality factor (Q), bandwidth, and balanced three-phase star and delta connections.",
          "hinglish": "AC Circuits, Resonance and Three-Phase Systems ka poora one-page revision summary jisme saare core formulas, theorems aur exam problems shamil hain.",
          "hi": "AC Circuits, Resonance and Three-Phase Systems का संपूर्ण एक-पृष्ठीय पुनरावलोकन सारांश जिसमें सभी प्रमुख सूत्र और प्रमेय सम्मिलित हैं।"
        },
        "shortNotes": [
          {
            "topic": "RMS Value",
            "content": {
              "en": "Effective DC-equivalent value delivering equal Joule heating in a resistor.",
              "hinglish": "Effective DC-equivalent value delivering equal Joule heating in a resistor.",
              "hi": "Effective DC-equivalent value delivering equal Joule heating in a resistor."
            }
          },
          {
            "topic": "Power Factor",
            "content": {
              "en": "Cosine of the phase angle φ between voltage and current (cos φ = P / S = R / Z).",
              "hinglish": "Cosine of the phase angle φ between voltage and current (cos φ = P / S = R / Z).",
              "hi": "Cosine of the phase angle φ between voltage and current (cos φ = P / S = R / Z)."
            }
          },
          {
            "topic": "Resonance",
            "content": {
              "en": "Condition where inductive and capacitive reactances cancel (XL = XC, unity power factor).",
              "hinglish": "Condition where inductive and capacitive reactances cancel (XL = XC, unity power factor).",
              "hi": "Condition where inductive and capacitive reactances cancel (XL = XC, unity power factor)."
            }
          },
          {
            "topic": "Quality Factor (Q)",
            "content": {
              "en": "Ratio of resonant frequency to bandwidth, measuring sharpness of tuning.",
              "hinglish": "Ratio of resonant frequency to bandwidth, measuring sharpness of tuning.",
              "hi": "Ratio of resonant frequency to bandwidth, measuring sharpness of tuning."
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "RMS & Average",
            "formula": "V_rms = Vm / √2 = 0.707 Vm, V_avg = 2 Vm / π = 0.637 Vm",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Form & Peak Factor",
            "formula": "Kf = RMS / Avg = 1.11, Kp = Peak / RMS = 1.414",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Series RLC Impedance",
            "formula": "Z = √(R^2 + (XL - XC)^2), where XL = 2πfL, XC = 1/(2πfC)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Power Formulas",
            "formula": "P = VI cos φ (W), Q = VI sin φ (VAR), S = VI (VA)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Resonant Frequency",
            "formula": "f0 = 1 / (2π√(LC)), Q = (1/R) √(L/C)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Star Relations",
            "formula": "VL = √3 Vph, IL = Iph; Delta Relations: VL = Vph, IL = √3 Iph",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Total 3-Phase Power",
            "formula": "P = √3 VL IL cos φ = 3 Vph Iph cos φ",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          }
        ],
        "mindMap": [
          {
            "node": "AC Circuits, Resonance and Three-Phase Systems",
            "children": [
              "Generation of alternating sinusoidal voltage and mathematical equation v(t) = Vm sin(ωt)",
              "Definitions: Instantaneous value, amplitude, time period, frequency, and angular velocity (ω = 2πf)",
              "RMS value (effective heating value) and Average value derivations for sinusoidal waveforms",
              "Form Factor (RMS / Average = 1.11) and Peak / Crest Factor (Peak / RMS = 1.414)",
              "Phasor representation of sinusoidal voltages and currents in complex form (Rectangular and Polar)",
              "AC through pure resistor (in-phase), pure inductor (lags by 90°), and pure capacitor (leads by 90°)",
              "Series RLC circuit: Impedance (Z), phase angle (φ), and voltage phasor diagram",
              "Power in AC circuits: Real/Active power (P = VI cos φ), Reactive power (Q = VI sin φ), and Apparent power (S = VI)",
              "Power Factor: Definition (cos φ), economic importance, lagging vs leading, and power factor correction",
              "Series Resonance: Condition XL = XC, resonant frequency f0 = 1 / (2π√LC), minimum impedance Z = R, Quality factor (Q), and Bandwidth",
              "Three-Phase Systems: Advantages of 3-phase over 1-phase, Phase sequence (RYB)",
              "Balanced Star (Y) Connection: Line vs Phase voltage relationship (VL = √3 Vph) and Line current (IL = Iph)",
              "Balanced Delta (Δ) Connection: Line vs Phase voltage (VL = Vph) and Line current relationship (IL = √3 Iph)",
              "Total 3-phase power formula: P = √3 VL IL cos φ = 3 Vph Iph cos φ"
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
                "b": "Stating full-cycle average of a sine wave is 0.637 Vm (it is exactly 0; 0.637 is for half-cycle)."
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
                "b": "Confusing Star and Delta formulas (e.g., using VL = √3 Vph in Delta instead of Star)."
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "Phasor Leads/Lags",
            "back": "CIVIL (In Capacitor C, I leads V; in Inductor L, V leads I)"
          },
          {
            "front": "Star vs Delta",
            "back": "Star Varies Voltage (VL = √3 Vph), Delta Divides Current (IL = √3 Iph)"
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Why is three-phase AC power generation universally preferred over single-phase?",
            "answer": "Three-phase systems have higher power transmission capacity with 25% less conductor material (copper/aluminum), provide constant non-pulsating instantaneous power, and naturally generate a rotating magnetic field allowing self-starting industrial induction motors without auxiliary starting capacitors."
          },
          {
            "question": "What is power factor, and why is a low lagging power factor disadvantageous?",
            "answer": "Power factor is cos φ = P / S. A low lagging power factor means a large reactive current Q is drawn. To supply the same active power P, total current I = P / (V cos φ) increases dramatically, causing higher I^2 R line losses, large voltage drops across transmission lines, and requiring oversized generators and transformers."
          }
        ]
      }
    },
    {
      "id": "beee-u3",
      "unitNumber": "Unit III",
      "title": "Magnetic Circuits and Single-Phase Transformers",
      "description": "Magnetic circuit fundamentals, MMF, reluctance, magnetic flux density (B), magnetic field intensity (H), B-H curve, hysteresis and eddy current losses, Faraday’s law of induction, single-phase transformer construction (core vs shell type), EMF equation, transformation ratio, ideal vs practical transformer, equivalent circuit, open-circuit and short-circuit tests, voltage regulation, and efficiency calculation.",
      "topics": [
        "Magnetic circuit concepts: Magnetomotive Force (MMF = NI), Reluctance (S = l / μA), and Flux (Φ = MMF / S)",
        "Analogy between electric and magnetic circuits (EMF vs MMF, Current vs Flux, Resistance vs Reluctance)",
        "Magnetic materials: B-H magnetization curve, magnetic saturation, and permeability (μ = μ0 μr)",
        "Core losses in magnetic circuits: Hysteresis loss (Steinmetz formula) and Eddy current loss",
        "Single-Phase Transformer: Operating principle, mutual induction, and core-type vs shell-type construction",
        "Transformer EMF equation derivation: E = 4.44 f N Φm",
        "Transformation ratio (K = V2 / V1 = N2 / N1 = I1 / I2)",
        "Ideal transformer on no-load and on-load phasor diagrams",
        "Practical transformer: Winding resistance (R1, R2), leakage reactance (X1, X2), and core excitation branch (R0, X0)",
        "Equivalent circuit of transformer referred to primary and referred to secondary",
        "Transformer testing: Open-Circuit (OC) test for iron losses and Short-Circuit (SC) test for copper losses",
        "Voltage Regulation of transformer (lagging, leading, and unity power factors)",
        "Transformer Efficiency: All-day efficiency vs power efficiency, and condition for maximum efficiency (Iron Loss = Copper Loss)"
      ],
      "lessons": [
        {
          "id": "beee-u3-l1",
          "unitId": "beee-u3",
          "subjectId": "beee",
          "title": "Magnetic Circuits, B-H Curves & Core Losses (Hysteresis & Eddy)",
          "durationMinutes": 30,
          "difficulty": "Beginner",
          "prerequisites": [
            "Magnetic poles and fields",
            "Electric circuit Ohm’s law"
          ],
          "realLifeQuestion": {
            "en": "Why do large electrical transformer stations give off a continuous low humming or buzzing sound, and why are transformer cores built from hundreds of thin laminated steel sheets glued together rather than one solid block of iron?",
            "hinglish": "Transformer station se lagataar gungunane (humming) ki awaaz kyu aati hai, aur transformer ka lohe ka core ek solid piece banane ke bajaye patli-patli sheets (laminations) jodkar kyu banaya jata hai?",
            "hi": "ट्रांसफॉर्मर से निरंतर गुंजन ध्वनि क्यों आती है, और इसका कोर ठोस लोहे के स्थान पर पतली पट्टियों (लैमिनेशन) से क्यों बनाया जाता है?"
          },
          "simpleExplanation": {
            "en": "A magnetic circuit is the closed path traversed by magnetic flux lines, completely analogous to an electric circuit: Magnetomotive Force (MMF = N * I) acts like EMF, magnetic flux Φ acts like electric current, and Reluctance S = l / (μ A) acts like electrical resistance (Ohm’s law for magnetic circuits: MMF = Φ * S). When alternating magnetic flux passes through an iron core, two severe power loss mechanisms occur: (1) Hysteresis Loss: as microscopic magnetic domains physically flip back and forth 50 times per second, internal molecular friction dissipates power as heat (the humming sound is caused by magnetostriction during this domain flipping). (2) Eddy Current Loss: the changing magnetic flux induces swirling circular voltages inside the conductive iron block itself, causing heavy circular currents (eddy currents). To eliminate these losses, transformer cores are built from silicon steel (narrow hysteresis loop) sliced into thin varnished laminations (breaking eddy current paths).",
            "hinglish": "Magnetic circuit bilkul electric circuit jaisa hota hai: MMF (N * I) battery ki tarah hai, Magnetic Flux Φ current ki tarah hai, aur Reluctance S = l / (μ A) resistance ki tarah hai (MMF = Φ * S). AC transformer ke iron core me do tarah ke losses hote hain: (1) Hysteresis Loss: iron ke microscopic magnetic domains har second 50 baar aage-peeche flip hote hain, jisse friction ki wajah se heat paida hoti hai (aur humming sound aati hai). (2) Eddy Current Loss: badalta hua magnetic flux lohe ke andar gol-gol ghoomne wali currents paida kar deta hai jo lohe ko garam kar deti hain. Inhe rokne ke liye core ko ek solid loha banane ke bajaye patli-patli varnished sheets (laminations) jodkar banaya jata hai.",
            "hi": "चुंबकीय परिपथ में MMF = Φ × S होता है। हिस्टैरिसीस हानि चुंबकीय डोमेन के बार-बार घूमने से तथा भंवर धारा (Eddy Current) हानि लोहे में प्रेरित धाराओं से होती है। भंवर धाराओं को रोकने हेतु कोर को लैमिनेटेड पत्तियों द्वारा बनाया जाता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine trying to stir a thick pot of honey with a wide wooden paddle: the honey swirls in huge sluggish whirlpools (eddy currents), resisting your arm. Now slice that wide wooden paddle into 50 thin plastic toothpicks: the giant whirlpools cannot form, and your arm moves freely with almost zero resistance!",
              "hinglish": "Badi balti me paani ghumane par bada bhanwar (whirlpool) banta hai jo bohot taqat khata hai. Agar balti ke beech me patli deewar laga do, toh bada chakkar toot kar chota ho jata hai. Laminations lohe ke andar ke current ke bhandar ko tod kar chota kar deti hain.",
              "hi": "कोर को लैमिनेट करना भंवर धाराओं के बड़े घेरों को छोटे-छोटे टुकड़ों में तोड़कर ऊष्मा हानि को न्यूनतम कर देता है।"
            },
            "limitations": {
              "en": "Toothpicks stop honey physically; laminations are coated with microscopic insulating varnish to stop electrical electron flow while still allowing magnetic flux to pass unimpeded.",
              "hinglish": "Laminations par varnish laga hota hai jo current ko rokta hai par magnetic flux ko aasaani se guzarne deta hai.",
              "hi": "लैमिनेशन पर वार्निश का लेप विद्युत धारा को रोकता है परंतु चुंबकीय फ्लक्स को सुगमता से गुजरने देता है।"
            }
          },
          "terminology": [
            {
              "term": "Magnetomotive Force (MMF)",
              "definition": {
                "en": "The magnetic pressure driving magnetic flux through a magnetic circuit: MMF = N * I (Ampere-turns).",
                "hinglish": "Magnetic flux ko core me ghumane wali magnetic taqat: MMF = N * I.",
                "hi": "चुंबकीय परिपथ में फ्लक्स प्रवाहित करने वाला चुंबकीय वाहक बल (MMF = NI)।"
              }
            },
            {
              "term": "Reluctance (S)",
              "definition": {
                "en": "Opposition offered by a magnetic circuit to the passage of magnetic flux: S = l / (μ0 μr A).",
                "hinglish": "Magnetic flux ke raaste me aane wali rukawat: S = l / (μ A).",
                "hi": "चुंबकीय फ्लक्स के मार्ग में आने वाला प्रतिरोध (प्रतिष्टम्भ S)।"
              }
            },
            {
              "term": "Hysteresis Loss",
              "definition": {
                "en": "Energy dissipated as heat due to the lag of magnetic induction behind the magnetizing force in ferromagnetic materials.",
                "hinglish": "AC cycle me magnetic domains ke bar-bar ghoomne se hone wala heat loss.",
                "hi": "हिस्टैरिसीस हानि: चुंबकीय पदार्थों के चुंबकन और विचुंबकन में ऊर्जा क्षय।"
              }
            },
            {
              "term": "Eddy Current Loss",
              "definition": {
                "en": "Power lost as heat due to circulating currents induced in the conductive core by time-varying magnetic flux (Pe ∝ f^2 Bm^2 t^2).",
                "hinglish": "Core ke lohe me induced currents ke karan hone wala heat loss.",
                "hi": "भंवर धारा हानि: बदलते फ्लक्स के कारण कोर में प्रेरित धाराओं द्वारा शक्ति क्षय।"
              }
            }
          ],
          "visualType": "em-induction",
          "visualData": {
            "circuitType": "magnetic-circuit",
            "mmf": "N * I (Ampere-turns)",
            "flux": "Φ = MMF / Reluctance",
            "losses": [
              "Hysteresis: Ph ∝ f * Bm^1.6",
              "Eddy Currents: Pe ∝ f^2 * Bm^2 * t^2"
            ]
          },
          "underlyingPrinciple": {
            "en": "Domain Theory and Faraday’s Law in Bulk Conductors: Ferromagnetic cores exhibit hysteresis loops (B-H curve) whose enclosed area equals hysteresis energy loss per unit volume per cycle. By Faraday’s law, dB/dt induces circulating EMFs (∇ × E = -∂B/∂t); laminating reduces loop radius, slashing eddy losses quadratically with thickness t^2.",
            "hinglish": "B-H curve ka area ek cycle ke hysteresis loss ke barabar hota hai. Lamination ki thickness t kam karne se eddy loss t^2 ke hisaab se tezi se ghatt jata hai.",
            "hi": "B-H वक्र का क्षेत्रफल ऊर्जा हानि दर्शाता है। पत्ती की मोटाई t घटाने से भंवर हानि t² के अनुपात में घटती है।"
          },
          "formulaLogic": {
            "formula": "S = \\frac{l}{\\mu_0 \\mu_r A}, \\quad \\text{MMF} = N I = \\Phi S, \\quad P_e = k_e f^2 B_m^2 t^2 V, \\quad P_h = \\eta f B_m^{1.6} V",
            "description": {
              "en": "Magnetic circuit Ohm’s law analogy, reluctance formula, and core loss expressions (Steinmetz hysteresis and eddy current loss).",
              "hinglish": "Magnetic Ohm’s law, Reluctance aur Core loss (Hysteresis aur Eddy) ke formulas.",
              "hi": "चुंबकीय परिपथ का नियम, प्रतिष्टम्भ और कोर हानि (हिस्टैरिसीस और भंवर धारा) के सूत्र।"
            },
            "symbols": [
              {
                "symbol": "S",
                "meaning": "Reluctance",
                "unit": "Ampere-turns per Weber (AT/Wb)"
              },
              {
                "symbol": "\\Phi",
                "meaning": "Magnetic flux",
                "unit": "Webers (Wb)"
              },
              {
                "symbol": "t",
                "meaning": "Lamination thickness",
                "unit": "meters (m)"
              },
              {
                "symbol": "B_m",
                "meaning": "Maximum magnetic flux density",
                "unit": "Tesla (T)"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "An iron ring of mean diameter 20 cm and cross-sectional area 5 cm² has a coil of 500 turns carrying a current of 2 A. If relative permeability of iron μr = 1000, calculate (a) MMF, (b) Reluctance of ring, and (c) Total magnetic flux Φ.",
              "hinglish": "Iron ring ka mean diameter 20 cm, area 5 cm², turns 500 aur current 2 A hai. μr = 1000 hai. MMF, Reluctance S, aur Flux Φ nikaalo.",
              "hi": "व्यास 20 cm, क्षेत्रफल 5 cm², N = 500, I = 2 A, और μr = 1000 हेतु MMF, प्रतिष्टम्भ और फ्लक्स ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate Magnetomotive Force (MMF)",
                "explanation": {
                  "en": "MMF = N * I = 500 turns * 2 A = 1000 Ampere-turns (AT).",
                  "hinglish": "MMF = 500 * 2 = 1000 AT.",
                  "hi": "MMF = 500 × 2 = 1000 AT।"
                },
                "math": "\\text{MMF} = N I = 500 \\times 2 = 1000\\,\\text{AT}"
              },
              {
                "stepNumber": 2,
                "title": "Compute mean length and reluctance S",
                "explanation": {
                  "en": "Mean length l = π * d = π * 0.20 m = 0.6283 m. Area A = 5 cm² = 5 * 10^-4 m². Reluctance S = l / (μ0 μr A) = 0.6283 / (4π * 10^-7 * 1000 * 5 * 10^-4) = 0.6283 / (6.283 * 10^-7) = 10^6 AT/Wb.",
                  "hinglish": "Length l = π * 0.20 = 0.6283 m. Area = 5 * 10^-4 m². Reluctance S = l / (μ0 μr A) = 1,000,000 AT/Wb.",
                  "hi": "लंबाई l = 0.6283 m, क्षेत्रफल A = 5 × 10^-4 m²। प्रतिष्टम्भ S = 10^6 AT/Wb।"
                },
                "math": "S = \\frac{0.6283}{(4\\pi \\times 10^{-7}) \\times 1000 \\times (5 \\times 10^{-4})} = 10^6\\,\\text{AT/Wb}"
              },
              {
                "stepNumber": 3,
                "title": "Compute total magnetic flux Φ",
                "explanation": {
                  "en": "Flux Φ = MMF / S = 1000 / 10^6 = 10^-3 Webers = 1 milli-Weber (1 mWb).",
                  "hinglish": "Flux Φ = MMF / S = 1000 / 1,000,000 = 0.001 Wb = 1 mWb.",
                  "hi": "फ्लक्स Φ = MMF / S = 1000 / 10^6 = 1 mWb।"
                },
                "math": "\\Phi = \\frac{\\text{MMF}}{S} = \\frac{1000}{10^6} = 10^{-3}\\,\\text{Wb} = 1\\,\\text{mWb}"
              }
            ],
            "finalAnswer": "MMF = 1000 AT, Reluctance = 10^6 AT/Wb, Magnetic Flux = 1 mWb."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Believing that magnetic flux flows like electric current and consumes energy continuously in steady DC.",
                "hinglish": "Ye sochna ki magnetic flux current ki tarah continuously energy khata hai.",
                "hi": "यह सोचना कि चुंबकीय फ्लक्स धारा की तरह निरंतर ऊर्जा खर्च करता है।"
              },
              "correction": {
                "en": "Magnetic flux does NOT flow! It is a static strain in the medium. In a steady DC magnetic circuit, zero power is required to maintain the magnetic field once established (only the I^2 R coil resistance consumes heat). Energy is only consumed during AC variations (hysteresis & eddy losses).",
                "hinglish": "Magnetic flux behta nahi hai, wo bas establish hota hai. Steady DC me flux maintain karne me koi power waste nahi hoti.",
                "hi": "फ्लक्स प्रवाहित नहीं होता; स्थिर DC में फ्लक्स बनाए रखने हेतु कोई ऊर्जा क्षय नहीं होता।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u3-l1-p1",
              "question": {
                "en": "If the thickness of transformer core laminations is halved (t -> t/2), by what factor are Eddy Current losses reduced?",
                "hinglish": "Transformer ke lamination ki motai aadhi karne par Eddy Current loss kitne guna kam ho jata hai?",
                "hi": "लैमिनेशन की मोटाई आधी करने पर भंवर धारा हानि कितने गुना कम हो जाती है?"
              },
              "hint": {
                "en": "Eddy current loss is proportional to thickness squared: Pe ∝ t^2.",
                "hinglish": "Pe ∝ t^2 formula lagao.",
                "hi": "Pe ∝ t²।"
              },
              "explanation": {
                "en": "Because Pe is proportional to t^2, reducing thickness to t/2 reduces eddy current losses to (1/2)^2 = 1/4th (a 75% reduction!).",
                "hinglish": "Pe ∝ t^2 hone ke karan (1/2)^2 = 1/4th reh jata hai.",
                "hi": "Pe ∝ t² होने के कारण हानि 1/4 (25%) रह जाती है।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "Doubled (2x)",
                "Reduced to 1/4th (quartered)",
                "Halved (1/2)",
                "Unaffected"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "Magnetic circuits mirror electric circuits: MMF = N I (effort), Reluctance S = l / (μ A) (opposition), Flux Φ = MMF / S.",
              "B-H curve illustrates magnetic saturation in ferromagnetic materials.",
              "Hysteresis loss is caused by magnetic domain flipping (minimized using silicon steel).",
              "Eddy current loss is caused by induced swirling core currents (minimized by thin insulated laminations)."
            ],
            "hinglish": [
              "Magnetic circuits electric circuits jaise hote hain: MMF = N*I, Reluctance S = l/(μA), Flux Φ = MMF/S.",
              "B-H curve lohe ke saturation ko dikhata hai.",
              "Hysteresis loss domains ke ghoomne se hota hai (Silicon steel se kam hota hai).",
              "Eddy current loss lohe me circular currents se hota hai (Laminated core se kam hota hai)."
            ],
            "hi": [
              "चुंबकीय परिपथ: MMF = NI, प्रतिष्टम्भ S = l/(μA), फ्लक्स Φ = MMF/S।",
              "B-H वक्र चुंबकीय संतृप्ति दर्शाता है।",
              "हिस्टैरिसीस हानि डोमेन के घूर्णन से होती है (सिलिकॉन स्टील द्वारा निवारण)।",
              "भंवर धारा हानि प्रेरित धाराओं से होती है (लैमिनेटेड पत्तियों द्वारा निवारण)।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u3-l1-q1",
              "question": {
                "en": "What is the SI unit of magnetic reluctance S?",
                "hinglish": "Magnetic reluctance S ki SI unit kya hoti hai?",
                "hi": "चुंबकीय प्रतिष्टम्भ (Reluctance) की SI इकाई क्या है?"
              },
              "options": [
                "Henry (H)",
                "Ampere-turns per Weber (AT/Wb)",
                "Tesla (T)",
                "Weber (Wb)"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "Reluctance S = MMF / Flux = AT / Wb.",
                "hinglish": "MMF / Flux = AT / Wb.",
                "hi": "MMF / फ्लक्स = AT/Wb।"
              },
              "explanation": {
                "en": "Reluctance is MMF (Ampere-turns) divided by magnetic flux (Webers), giving units of AT/Wb (or 1/Henry).",
                "hinglish": "S = MMF / Φ = AT/Wb.",
                "hi": "प्रतिष्टम्भ का मात्रक AT/Wb (या H^-1) होता है।"
              }
            }
          ]
        },
        {
          "id": "beee-u3-l2",
          "unitId": "beee-u3",
          "subjectId": "beee",
          "title": "Single-Phase Transformer: Working Principle, EMF Equation & Equivalent Circuit",
          "durationMinutes": 35,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Magnetic flux and Faraday’s law",
            "AC sinusoidal waveforms"
          ],
          "realLifeQuestion": {
            "en": "How does an iPhone power brick safely convert dangerous 230 V AC mains down to 5 V DC without any physical copper wire ever touching between the wall and your phone?",
            "hinglish": "Mobile charger 230 V AC ko 5 V me kaise badalta hai jabki wall plug aur phone ke beech koi physical taar aapas me touch bhi nahi karti?",
            "hi": "मोबाइल चार्जर 230 V को सुरक्षित 5 V में कैसे बदलता है बिना तारों के सीधे संपर्क के?"
          },
          "simpleExplanation": {
            "en": "A Transformer is a static electrical machine that transfers electrical energy between two or more circuits through Mutual Electromagnetic Induction at constant frequency. There is ZERO electrical connection between the primary and secondary coils! When alternating current flows through the Primary winding (N1 turns), it sets up an alternating magnetic flux in the common laminated iron core. This flux links the Secondary winding (N2 turns), inducing an alternating EMF given by Faraday’s law. The induced EMF in each winding is derived as E = 4.44 * f * N * Φm. The voltage transformation ratio is K = V2 / V1 = N2 / N1 = I1 / I2. If N2 > N1 it is a Step-Up transformer; if N2 < N1 it is a Step-Down transformer. Because power is conserved (V1 I1 ≈ V2 I2), stepping down voltage automatically multiplies current!",
            "hinglish": "Transformer ek static machine hai jo bina kisi moving part ke electrical power ko ek circuit se doosre circuit me transfer karta hai mutual induction ke zariye, constant frequency par. Primary coil aur Secondary coil ke beech koi physical electrical connection nahi hota! Primary coil me AC current aane se core me magnetic flux banta hai jo secondary coil ko cut karta hai aur usme EMF induce kar deta hai: E = 4.44 * f * N * Φm. Voltage ratio K = V2 / V1 = N2 / N1 = I1 / I2. Agar N2 zyada hai toh Step-Up transformer hai; agar N2 kam hai toh Step-Down transformer hai. Power constant rehti hai (V1 I1 = V2 I2), isliye voltage kam hone par current badh jati hai!",
            "hi": "ट्रांसफॉर्मर एक स्थिर विद्युत उपकरण है जो पारस्परिक प्रेरण (Mutual Induction) द्वारा स्थिर आवृत्ति पर शक्ति स्थानांतरित करता है। प्रेरित EMF E = 4.44 f N Φm होता है। वोल्टेज रूपांतरण अनुपात K = V2/V1 = N2/N1 = I1/I2।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "A transformer is like a bicycle chain and gear set. The front chainring (Primary) and rear cassette cog (Secondary) never physically touch each other; they are coupled by a flexible chain (magnetic core flux). Shifting to a smaller rear gear steps down pedal rotations but steps up torque!",
              "hinglish": "Cycle ke gear system ki tarah: aage ka bada pedaling gear (Primary) aur peeche ka chota gear (Secondary) aapas me touch nahi karte, dono chain (magnetic core) se jude hote hain. Gear badal kar hum speed aur taqat ko badal sakte hain.",
              "hi": "साइकिल के गियर की तरह: प्राथमिक और द्वितीयक पहिये सीधे संपर्क के बिना चेन (चुंबकीय कोर) द्वारा शक्ति का रूपांतरण करते हैं।"
            },
            "limitations": {
              "en": "Bicycle chains suffer heavy mechanical friction; high-efficiency commercial transformers operate with astonishing electrical efficiencies exceeding 98%!",
              "hinglish": "Cycle ki chain me friction hota hai, par transformers 98% se zyada efficiency par kaam karte hain.",
              "hi": "ट्रांसफॉर्मर 98% से अधिक उच्च दक्षता पर कार्य करते हैं।"
            }
          },
          "terminology": [
            {
              "term": "Mutual Induction",
              "definition": {
                "en": "Induction of an electromotive force in a secondary circuit by changing magnetic flux created in an adjacent primary circuit.",
                "hinglish": "Primary coil ke badalte flux se secondary coil me voltage paida hona.",
                "hi": "पारस्परिक प्रेरण: प्राथमिक के फ्लक्स परिवर्तन से द्वितीयक में EMF उत्पन्न होना।"
              }
            },
            {
              "term": "Transformation Ratio (K)",
              "definition": {
                "en": "The ratio of secondary voltage to primary voltage: K = V2 / V1 = N2 / N1 = I1 / I2.",
                "hinglish": "Secondary aur Primary ke turns aur voltage ka ratio: K = N2 / N1.",
                "hi": "रूपांतरण अनुपात (K = V2/V1 = N2/N1 = I1/I2)।"
              }
            },
            {
              "term": "Equivalent Circuit",
              "definition": {
                "en": "Representation combining primary and secondary resistances and reactances onto one side using K^2 scaling: R1e = R1 + R2/K^2.",
                "hinglish": "Secondary ke components ko primary side par shift karke banaya gaya unified circuit.",
                "hi": "तुल्य परिपथ: द्वितीयक घटकों को प्राथमिक पक्ष पर स्थानांतरित कर बना परिपथ।"
              }
            }
          ],
          "visualType": "3d-transformer",
          "visualData": {
            "circuitType": "single-phase-transformer",
            "v1": 230,
            "v2": 12,
            "n1": 1150,
            "n2": 60,
            "flux": "Φm = 0.0009 Wb"
          },
          "underlyingPrinciple": {
            "en": "Faraday’s Law of Electromagnetic Induction: The instantaneous induced EMF is e = -N (dΦ/dt). For sinusoidal flux Φ = Φm sin(ωt), e = -N ω Φm cos(ωt) = Em sin(ωt - π/2). Maximum EMF Em = 2π f N Φm. RMS value E = Em / √2 = (2π / √2) f N Φm = 4.44 f N Φm.",
            "hinglish": "Faraday ke niyam e = -N (dΦ/dt) ko integrate karke peak voltage 2π f N Φm banti hai, aur √2 se divide karne par RMS EMF E = 4.44 f N Φm nikal aati hai.",
            "hi": "फैराडे के नियम e = -N(dΦ/dt) से अधिकतम मान 2π f N Φm प्राप्त होता है, अतः RMS मान E = 4.44 f N Φm होता है।"
          },
          "formulaLogic": {
            "formula": "E = 4.44 f N \\Phi_m, \\quad K = \\frac{E_2}{E_1} = \\frac{N_2}{N_1} = \\frac{I_1}{I_2}, \\quad R_{1e} = R_1 + \\frac{R_2}{K^2}",
            "description": {
              "en": "Transformer EMF equation, transformation ratio, and equivalent resistance referred to primary.",
              "hinglish": "Transformer EMF equation aur Primary side par equivalent resistance ka formula.",
              "hi": "ट्रांसफॉर्मर EMF समीकरण और प्राथमिक पक्ष पर तुल्य प्रतिरोध का सूत्र।"
            },
            "symbols": [
              {
                "symbol": "E",
                "meaning": "Induced RMS voltage",
                "unit": "Volts (V)"
              },
              {
                "symbol": "f",
                "meaning": "Supply frequency",
                "unit": "Hertz (Hz)"
              },
              {
                "symbol": "N",
                "meaning": "Number of turns in winding",
                "unit": "integer"
              },
              {
                "symbol": "\\Phi_m",
                "meaning": "Maximum core flux = Bm * A",
                "unit": "Webers (Wb)"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A 25 kVA, 2200 / 220 V, 50 Hz single-phase transformer has 1000 turns on the primary winding. Calculate (a) Number of secondary turns N2, (b) Primary full-load current I1, (c) Secondary full-load current I2, and (d) Maximum core flux Φm.",
              "hinglish": "25 kVA, 2200 / 220 V, 50 Hz transformer me N1 = 1000 turns hain. N2, I1, I2, aur maximum flux Φm nikaalo.",
              "hi": "25 kVA, 2200/220 V, N1 = 1000 हेतु द्वितीयक फेरे N2, पूर्ण भार धाराएं I1, I2 और अधिकतम फ्लक्स ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate secondary turns N2",
                "explanation": {
                  "en": "Transformation ratio K = V2 / V1 = 220 / 2200 = 1 / 10 = 0.1. Secondary turns N2 = K * N1 = 0.1 * 1000 = 100 turns.",
                  "hinglish": "K = 220 / 2200 = 0.1. N2 = 0.1 * 1000 = 100 turns.",
                  "hi": "N2 = (220/2200) × 1000 = 100 फेरे।"
                },
                "math": "N_2 = N_1 \\times \\frac{V_2}{V_1} = 1000 \\times \\frac{220}{2200} = 100\\,\\text{turns}"
              },
              {
                "stepNumber": 2,
                "title": "Compute full-load primary and secondary currents",
                "explanation": {
                  "en": "Rated apparent power S = 25 kVA = 25,000 VA. Primary current I1 = S / V1 = 25,000 / 2200 = 11.36 A. Secondary current I2 = S / V2 = 25,000 / 220 = 113.64 A.",
                  "hinglish": "I1 = 25,000 / 2200 = 11.36 A. I2 = 25,000 / 220 = 113.64 A (10 guna current badh gayi!).",
                  "hi": "I1 = 25000/2200 = 11.36 A; I2 = 25000/220 = 113.64 A।"
                },
                "math": "I_1 = \\frac{25000}{2200} = 11.36\\,\\text{A}, \\quad I_2 = \\frac{25000}{220} = 113.64\\,\\text{A}"
              },
              {
                "stepNumber": 3,
                "title": "Calculate maximum core flux Φm using EMF equation",
                "explanation": {
                  "en": "E1 = 4.44 * f * N1 * Φm => Φm = E1 / (4.44 * f * N1) = 2200 / (4.44 * 50 * 1000) = 2200 / 222,000 ≈ 0.00991 Wb = 9.91 mWb.",
                  "hinglish": "Φm = 2200 / (4.44 * 50 * 1000) = 0.00991 Wb = 9.91 mWb.",
                  "hi": "Φm = 2200 / (4.44 × 50 × 1000) = 9.91 mWb।"
                },
                "math": "\\Phi_m = \\frac{2200}{4.44 \\times 50 \\times 1000} = 0.00991\\,\\text{Wb} = 9.91\\,\\text{mWb}"
              }
            ],
            "finalAnswer": "N2 = 100 turns, I1 = 11.36 A, I2 = 113.64 A, Maximum core flux Φm = 9.91 mWb."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Using the coefficient 4.0 instead of 4.44 in the RMS transformer EMF equation.",
                "hinglish": "EMF equation me 4.44 ki jagah 4.0 likh dena.",
                "hi": "EMF समीकरण में 4.44 के स्थान पर 4 लिखना।"
              },
              "correction": {
                "en": "4.0 is the coefficient for AVERAGE induced EMF. Because we require RMS voltage, multiplying by the Form Factor of a sine wave (Kf = 1.11) yields 4.0 * 1.11 = 4.44! Always use 4.44 f N Φm for RMS voltage.",
                "hinglish": "Average EMF me 4 hota hai, par RMS nikaalne ke liye Form Factor 1.11 se multiply karte hain: 4 * 1.11 = 4.44.",
                "hi": "औसत मान 4 होता है; फॉर्म फैक्टर 1.11 से गुणा करने पर RMS मान 4.44 f N Φm प्राप्त होता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u3-l2-p1",
              "question": {
                "en": "Can a transformer operate on a steady DC supply?",
                "hinglish": "Kya transformer steady DC supply par kaam kar sakta hai?",
                "hi": "क्या ट्रांसफॉर्मर स्थिर DC आपूर्ति पर कार्य कर सकता है?"
              },
              "hint": {
                "en": "Faraday’s law requires a CHANGING magnetic flux (dΦ/dt).",
                "hinglish": "DC me flux constant hota hai, dΦ/dt = 0.",
                "hi": "DC में dΦ/dt = 0 होता है।"
              },
              "explanation": {
                "en": "No! On steady DC, magnetic flux is constant (dΦ/dt = 0), so NO secondary voltage is induced. Furthermore, with zero inductive reactance (XL = 0), the primary winding draws massive DC current and burns out rapidly.",
                "hinglish": "Nahi! DC me flux nahi badalta isliye secondary me koi voltage nahi banta, aur primary winding jal kar kharab ho jayegi.",
                "hi": "नहीं! DC में dΦ/dt = 0 होने से कोई EMF उत्पन्न नहीं होता और वाइंडिंग जल सकती है।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "Yes, it produces steady DC output",
                "No, transformer requires alternating AC flux; DC causes burnout",
                "Yes, but with half the voltage",
                "Yes, but only if step-up"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "Transformers transfer AC electrical power between circuits through mutual induction at constant frequency.",
              "RMS Induced EMF Equation: E = 4.44 f N Φm.",
              "Transformation ratio: K = V2 / V1 = N2 / N1 = I1 / I2.",
              "Step-up increases voltage while decreasing current; step-down decreases voltage while increasing current."
            ],
            "hinglish": [
              "Transformer mutual induction se constant frequency par power transfer karta hai.",
              "EMF Equation: E = 4.44 f N Φm.",
              "Transformation ratio: K = V2 / V1 = N2 / N1 = I1 / I2.",
              "Step-down voltage kam karta hai aur current badha deta hai."
            ],
            "hi": [
              "ट्रांसफॉर्मर पारस्परिक प्रेरण द्वारा स्थिर आवृत्ति पर शक्ति स्थानांतरित करता है।",
              "RMS EMF समीकरण: E = 4.44 f N Φm।",
              "रूपांतरण अनुपात K = V2/V1 = N2/N1 = I1/I2।",
              "स्टेप-डाउन वोल्टेज घटाकर धारा बढ़ाता है।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u3-l2-q1",
              "question": {
                "en": "Which electrical parameter remains strictly CONSTANT between primary and secondary in an ideal transformer?",
                "hinglish": "Transformer ke primary aur secondary ke beech kaun si parameter bilkul CONSTANT rehti hai?",
                "hi": "ट्रांसफॉर्मर में प्राथमिक और द्वितीयक के बीच कौन सी राशि पूर्णतः स्थिर रहती है?"
              },
              "options": [
                "Voltage",
                "Current",
                "Frequency",
                "Impedance"
              ],
              "correctIndex": 2,
              "hint": {
                "en": "The core flux oscillates at the exact same cycles per second as the source.",
                "hinglish": "Cycles per second nahi badalte.",
                "hi": "प्रति सेकंड चक्रों की संख्या नहीं बदलती।"
              },
              "explanation": {
                "en": "A transformer changes voltage, current, and impedance levels, but the operating frequency remains strictly constant between primary and secondary.",
                "hinglish": "Transformer voltage aur current badal sakta hai par Frequency hamesha same rehti hai.",
                "hi": "आवृत्ति (Frequency) दोनों पक्षों में पूर्णतः स्थिर रहती है।"
              }
            }
          ]
        },
        {
          "id": "beee-u3-l3",
          "unitId": "beee-u3",
          "subjectId": "beee",
          "title": "Transformer Testing: OC/SC Tests, Voltage Regulation & Efficiency",
          "durationMinutes": 40,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Transformer equivalent circuit",
            "Core and copper losses"
          ],
          "realLifeQuestion": {
            "en": "How can electrical engineers test a giant 500 kVA city power transformer to verify its 98.5% efficiency without wasting 500,000 Watts of expensive electricity or having a massive factory load to plug into?",
            "hinglish": "Engineers 500 kVA ke bade transformer ki efficiency bina 500,000 W bijli fuke aur bina koi bada load lagaye lab me kaise test kar lete hain?",
            "hi": "बिना पूर्ण भार लगाए ट्रांसफॉर्मर की 98.5% दक्षता का परीक्षण प्रयोगशाला में कैसे किया जाता है?"
          },
          "simpleExplanation": {
            "en": "Instead of connecting a massive, expensive physical load, engineers determine transformer efficiency and voltage regulation using two low-power bench tests: (1) Open-Circuit (OC) Test: Rated voltage is applied to the Low Voltage (LV) winding with the High Voltage (HV) winding left open. Because no load current flows, copper loss is negligible; the wattmeter reading W0 measures the constant Iron/Core Losses (Hysteresis + Eddy) directly. (2) Short-Circuit (SC) Test: A small reduced voltage (only 5% to 10% of rated) is applied to the HV winding with the LV winding short-circuited with a thick conductor until full rated current flows. Because voltage is tiny, core flux is negligible; the wattmeter reading Wsc measures Full-Load Copper Losses (I^2 R) directly! Voltage Regulation measures the percentage drop in terminal voltage from no-load to full-load: %VR = [(V_no-load - V_full-load) / V_no-load] * 100. Maximum Efficiency occurs when variable Copper Loss equals constant Iron Loss: Cu Loss = Iron Loss.",
            "hinglish": "Bina full load lagaye transformer ki testing do chote tests se hoti hai: (1) Open Circuit (OC) Test: Rated voltage par secondary ko khula (open) chhodte hain. No-load current bohot choti hoti hai isliye copper loss zero hota hai; wattmeter W0 sidhe constant Iron Losses (Hysteresis + Eddy) naap leta hai. (2) Short Circuit (SC) Test: Secondary ko moti taar se short karte hain aur primary me sirf 5-10% voltage dekar rated current circulate karwate hain. Kam voltage hone se iron loss zero hota hai; wattmeter Wsc sidhe Full Load Copper Loss (I^2 R) naap leta hai! Voltage Regulation batata hai ki load lagane par voltage kitna gira. Maximum Efficiency tab aati hai jab Variable Copper Loss = Constant Iron Loss hota hai.",
            "hi": "OC टेस्ट खुला परिपथ रख कर कोर (आयरन) हानि मापता है; SC टेस्ट शॉर्ट परिपथ कर कॉपर (ताम्र) हानि मापता है। कॉपर हानि = आयरन हानि होने पर दक्षता अधिकतम होती है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Testing a transformer with OC and SC tests is like taking a car to a mechanic. The OC test is idling the engine in neutral (measuring fuel burned just to keep pistons spinning = iron loss). The SC test is rolling the car in gear with engine off on a dyno (measuring wheel and axle bearing friction = copper loss). By adding the two numbers, you predict full-speed highway mileage without driving 500 miles!",
              "hinglish": "Car ke engine test jaisa: OC test car ko Neutral me khadi karke engine start rakhna hai (idle fuel consumption = Iron loss). SC test car ko band engine me dhasal kar friction naapna hai (mechanical drag = Copper loss). Dono ko jod kar poori highway efficiency pata chal jati hai.",
              "hi": "OC टेस्ट कार को न्यूट्रल में चलाकर स्थिर ईंधन खपत नापने जैसा है और SC टेस्ट पहियों का घर्षण नापने जैसा है।"
            },
            "limitations": {
              "en": "Car engines degrade with road bumps; a transformer has zero moving parts, making these two tests extraordinarily precise (accurate to within 0.1%).",
              "hinglish": "Transformer me koi moving part nahi hota, isliye ye tests 99% accurate hote hain.",
              "hi": "गतिमान पुर्जे न होने से ट्रांसफॉर्मर परीक्षण अत्यधिक सटीक होते हैं।"
            }
          },
          "terminology": [
            {
              "term": "Open-Circuit (OC) Test",
              "definition": {
                "en": "Test performed at rated voltage with secondary open to measure no-load core iron losses (W0 = Pi).",
                "hinglish": "Rated voltage par secondary khuli rakh kar Iron losses naapne wala test.",
                "hi": "खुला परिपथ परीक्षण: रेटेड वोल्टेज पर कोर (आयरन) हानि मापना।"
              }
            },
            {
              "term": "Short-Circuit (SC) Test",
              "definition": {
                "en": "Test performed at reduced voltage with secondary shorted to measure full-load copper losses (Wsc = Pcu).",
                "hinglish": "Kam voltage par full current circulate karke Copper losses naapne wala test.",
                "hi": "लघु परिपथ परीक्षण: रेटेड धारा पर पूर्ण भार ताम्र हानि मापना।"
              }
            },
            {
              "term": "Voltage Regulation",
              "definition": {
                "en": "The percentage fractional change in secondary terminal voltage between no-load and full-load.",
                "hinglish": "No-load se full-load aane par terminal voltage kitna drop hua uska percentage.",
                "hi": "वोल्टता नियमन: बिना भार से पूर्ण भार तक वोल्टेज परिवर्तन का प्रतिशत।"
              }
            },
            {
              "term": "Condition for Max Efficiency",
              "definition": {
                "en": "Operating load condition where variable copper losses equal constant core iron losses: Pcu = Pi.",
                "hinglish": "Wo load jahan Copper loss aur Iron loss barabar ho jayein.",
                "hi": "अधिकतम दक्षता की शर्त: ताम्र हानि = लौह हानि।"
              }
            }
          ],
          "visualType": "3d-transformer",
          "visualData": {
            "circuitType": "transformer-oc-sc",
            "ocTest": "Measures Iron Losses Pi (Wattmeter W0)",
            "scTest": "Measures Full-load Copper Losses Pcu (Wattmeter Wsc)",
            "efficiencyFormula": "η = (x * kVA * cos φ) / (x * kVA * cos φ + Pi + x^2 * Pcu) * 100"
          },
          "underlyingPrinciple": {
            "en": "Superposition of Independent Loss Mechanisms: Iron losses depend on core flux (voltage squared V^2), while copper losses depend on winding current squared (I^2). Because OC test has negligible current and SC test has negligible voltage, each test completely isolates one loss mechanism with zero interference.",
            "hinglish": "Iron loss voltage par depend karta hai aur Copper loss current par. OC test me current zero hoti hai aur SC test me voltage zero hoti hai, isliye dono losses aasaani se alag-alag naap liye jaate hain.",
            "hi": "लौह हानि वोल्टेज पर और ताम्र हानि धारा पर निर्भर करती है। दोनों परीक्षण एक-दूसरे को प्रभावित किए बिना स्वतंत्र हानियां मापते हैं।"
          },
          "formulaLogic": {
            "formula": "\\eta = \\frac{x \\cdot \\text{kVA} \\cdot \\cos \\phi}{x \\cdot \\text{kVA} \\cdot \\cos \\phi + P_i + x^2 P_{\\text{cu}}} \\times 100, \\quad x_{\\text{max}} = \\sqrt{\\frac{P_i}{P_{\\text{cu}}}}",
            "description": {
              "en": "Transformer efficiency at load fraction x, and fraction of load x_max where maximum efficiency occurs.",
              "hinglish": "Load fraction x par efficiency aur maximum efficiency ka fraction formula.",
              "hi": "किसी भार x पर ट्रांसफॉर्मर दक्षता और अधिकतम दक्षता हेतु भार अंश का सूत्र।"
            },
            "symbols": [
              {
                "symbol": "x",
                "meaning": "Fraction of full load (e.g., 0.5 for half load, 1.0 for full load)",
                "unit": "fraction"
              },
              {
                "symbol": "P_i",
                "meaning": "Constant Iron / Core Loss from OC test",
                "unit": "Watts (W)"
              },
              {
                "symbol": "P_{\\text{cu}}",
                "meaning": "Full-load Copper Loss from SC test",
                "unit": "Watts (W)"
              },
              {
                "symbol": "\\cos \\phi",
                "meaning": "Load power factor",
                "unit": "dimensionless"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A 50 kVA single-phase transformer has a constant iron loss of 500 W and a full-load copper loss of 800 W. Calculate its efficiency at (a) Full load, 0.8 power factor lagging, and (b) Half load, unity power factor. (c) At what fraction of full load does maximum efficiency occur?",
              "hinglish": "50 kVA transformer me Iron loss = 500 W aur Full-load Copper loss = 800 W hai. (a) Full load, 0.8 pf par efficiency, (b) Half load, 1.0 pf par efficiency, aur (c) kis load par maximum efficiency aayegi nikaalo.",
              "hi": "50 kVA ट्रांसफॉर्मर हेतु Pi = 500 W और Pcu = 800 W है। पूर्ण भार (0.8 pf), अर्ध भार (1.0 pf) पर दक्षता तथा अधिकतम दक्षता का भार ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate efficiency at Full Load (x = 1.0, cos φ = 0.8)",
                "explanation": {
                  "en": "Output Power = x * kVA * cos φ = 1.0 * 50,000 * 0.8 = 40,000 W. Total losses = Pi + x^2 * Pcu = 500 + (1.0)^2 * 800 = 1300 W. Input = Output + Losses = 40,000 + 1300 = 41,300 W. Efficiency η = (40,000 / 41,300) * 100 = 96.85%.",
                  "hinglish": "Output = 50,000 * 0.8 = 40,000 W. Losses = 500 + 800 = 1300 W. η = (40,000 / 41,300) * 100 = 96.85%.",
                  "hi": "आउटपुट = 40,000 W; कुल हानि = 1300 W; दक्षता η = (40,000 / 41,300) × 100 = 96.85%।"
                },
                "math": "\\eta_{\\text{FL}} = \\frac{40000}{40000 + 500 + 800} \\times 100 = \\frac{40000}{41300} \\times 100 = 96.85\\%"
              },
              {
                "stepNumber": 2,
                "title": "Calculate efficiency at Half Load (x = 0.5, cos φ = 1.0)",
                "explanation": {
                  "en": "Output Power = 0.5 * 50,000 * 1.0 = 25,000 W. Half-load copper loss = x^2 * Pcu = (0.5)^2 * 800 = 0.25 * 800 = 200 W. Iron loss remains constant = 500 W. Total losses = 500 + 200 = 700 W. Efficiency η = [25,000 / (25,000 + 700)] * 100 = (25,000 / 25,700) * 100 = 97.28%.",
                  "hinglish": "Output = 25,000 W. Half load par copper loss = (0.5)^2 * 800 = 200 W. Losses = 500 + 200 = 700 W. η = (25,000 / 25,700) * 100 = 97.28%.",
                  "hi": "आउटपुट = 25,000 W; ताम्र हानि = (0.5)² × 800 = 200 W; कुल हानि = 700 W; दक्षता = 97.28%।"
                },
                "math": "\\eta_{\\text{HL}} = \\frac{25000}{25000 + 500 + 200} \\times 100 = \\frac{25000}{25700} \\times 100 = 97.28\\%"
              },
              {
                "stepNumber": 3,
                "title": "Find load fraction for maximum efficiency",
                "explanation": {
                  "en": "Maximum efficiency occurs when variable copper loss equals constant iron loss: x^2 * Pcu = Pi => x_max = √(Pi / Pcu) = √(500 / 800) = √(5/8) = √0.625 ≈ 0.7906 (79.06% of full load = 39.53 kVA).",
                  "hinglish": "x_max = √(Pi / Pcu) = √(500 / 800) = √0.625 = 0.791 (yani 79.1% load par maximum efficiency aayegi).",
                  "hi": "अधिकतम दक्षता हेतु x = √(500 / 800) = 0.791 (79.1% भार पर)।"
                },
                "math": "x_{\\text{max}} = \\sqrt{\\frac{P_i}{P_{\\text{cu}}}} = \\sqrt{\\frac{500}{800}} = \\sqrt{0.625} \\approx 0.791 \\ (79.1\\% \\text{ of full load})"
              }
            ],
            "finalAnswer": "Full-load efficiency = 96.85%, Half-load efficiency = 97.28%, Maximum efficiency occurs at 79.1% load (39.5 kVA)."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Halving the copper loss at half load instead of quartering it.",
                "hinglish": "Half load par copper loss ko aadha kar dena.",
                "hi": "अर्ध भार पर ताम्र हानि को आधा कर देना।"
              },
              "correction": {
                "en": "Copper loss depends on the square of current (Pcu = I^2 R). If current is halved (x = 0.5), copper loss decreases by (0.5)^2 = 1/4th (quartered!), NOT 1/2.",
                "hinglish": "Copper loss current ke square (I^2 R) par depend karta hai, isliye half load par wo (0.5)^2 = 1/4 (chautha hissa) ho jata hai.",
                "hi": "ताम्र हानि धारा के वर्ग (I²) पर निर्भर करती है, अतः अर्ध भार पर यह घटकर 1/4 हो जाती है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u3-l3-p1",
              "question": {
                "en": "What type of losses are measured by the Open-Circuit (OC) test on a transformer?",
                "hinglish": "Transformer ka Open Circuit (OC) test kaun se losses naapta hai?",
                "hi": "ट्रांसफॉर्मर का खुला परिपथ (OC) परीक्षण कौन सी हानियां मापता है?"
              },
              "hint": {
                "en": "Secondary is open, so no load current flows; only core flux exists.",
                "hinglish": "Core me hone wale losses.",
                "hi": "कोर (आयरन) हानियां।"
              },
              "explanation": {
                "en": "The Open-Circuit test applies rated voltage with secondary open; because current is tiny, copper loss is negligible and the wattmeter directly reads Iron/Core losses (Hysteresis + Eddy).",
                "hinglish": "OC test Core/Iron losses (Hysteresis + Eddy) naapta hai.",
                "hi": "OC टेस्ट कोर (लौह) हानियां मापता है।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "Copper losses in windings",
                "Iron / Core losses (Hysteresis and Eddy current)",
                "Stray load losses",
                "Friction losses"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "Open-Circuit (OC) test measures constant core iron losses Pi at rated voltage.",
              "Short-Circuit (SC) test measures variable full-load copper losses Pcu at rated current.",
              "Voltage Regulation measures percentage terminal voltage drop from no-load to full-load.",
              "Maximum efficiency occurs when variable copper loss equals constant iron loss: x^2 Pcu = Pi."
            ],
            "hinglish": [
              "OC test constant Iron loss Pi naapta hai.",
              "SC test Full-load Copper loss Pcu naapta hai.",
              "Voltage regulation batata hai load par voltage kitna gira.",
              "Maximum efficiency tab aati hai jab Copper loss = Iron loss hota hai."
            ],
            "hi": [
              "OC टेस्ट रेटेड वोल्टेज पर लौह हानि Pi मापता है।",
              "SC टेस्ट रेटेड धारा पर ताम्र हानि Pcu मापता है।",
              "वोल्टता नियमन भार बढ़ने पर वोल्टेज गिरावट का प्रतिशत है।",
              "अधिकतम दक्षता की शर्त: ताम्र हानि = लौह हानि।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u3-l3-q1",
              "question": {
                "en": "At what condition does a transformer operate with its absolute maximum efficiency?",
                "hinglish": "Transformer kis condition par apni maximum efficiency par chalta hai?",
                "hi": "ट्रांसफॉर्मर किस स्थिति में अपनी अधिकतम दक्षता पर कार्य करता है?"
              },
              "options": [
                "At no-load",
                "When Copper Loss = Iron Loss",
                "When Voltage Regulation is zero",
                "At 100% full load always"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "Variable losses equal constant losses.",
                "hinglish": "Variable loss barabar Constant loss.",
                "hi": "परिवर्ती हानि = स्थिर हानि।"
              },
              "explanation": {
                "en": "Differentiating the efficiency equation with respect to current proves that maximum efficiency occurs at the load where variable copper losses equal constant core iron losses (Pcu = Pi).",
                "hinglish": "Maximum efficiency tab milti hai jab Copper loss = Iron loss hota hai.",
                "hi": "अधिकतम दक्षता तब प्राप्त होती है जब ताम्र हानि = लौह हानि हो।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Magnetic circuit fundamentals, MMF, reluctance, magnetic flux density (B), magnetic field intensity (H), B-H curve, hysteresis and eddy current losses, Faraday’s law of induction, single-phase transformer construction (core vs shell type), EMF equation, transformation ratio, ideal vs practical transformer, equivalent circuit, open-circuit and short-circuit tests, voltage regulation, and efficiency calculation.",
          "hinglish": "Magnetic Circuits and Single-Phase Transformers ka poora one-page revision summary jisme saare core formulas, theorems aur exam problems shamil hain.",
          "hi": "Magnetic Circuits and Single-Phase Transformers का संपूर्ण एक-पृष्ठीय पुनरावलोकन सारांश जिसमें सभी प्रमुख सूत्र और प्रमेय सम्मिलित हैं।"
        },
        "shortNotes": [
          {
            "topic": "Reluctance",
            "content": {
              "en": "Opposition offered by a magnetic circuit to the establishment of magnetic flux.",
              "hinglish": "Opposition offered by a magnetic circuit to the establishment of magnetic flux.",
              "hi": "Opposition offered by a magnetic circuit to the establishment of magnetic flux."
            }
          },
          {
            "topic": "Transformer",
            "content": {
              "en": "Static AC machine transferring power between circuits via mutual induction.",
              "hinglish": "Static AC machine transferring power between circuits via mutual induction.",
              "hi": "Static AC machine transferring power between circuits via mutual induction."
            }
          },
          {
            "topic": "OC Test",
            "content": {
              "en": "Test on rated voltage with secondary open measuring core iron losses Pi.",
              "hinglish": "Test on rated voltage with secondary open measuring core iron losses Pi.",
              "hi": "Test on rated voltage with secondary open measuring core iron losses Pi."
            }
          },
          {
            "topic": "SC Test",
            "content": {
              "en": "Test on rated current with secondary shorted measuring full-load copper losses Pcu.",
              "hinglish": "Test on rated current with secondary shorted measuring full-load copper losses Pcu.",
              "hi": "Test on rated current with secondary shorted measuring full-load copper losses Pcu."
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Magnetic Ohm's Law",
            "formula": "MMF = N * I = Φ * S, where S = l / (μ0 μr A)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Core Losses",
            "formula": "Pe ∝ f^2 Bm^2 t^2 (eddy), Ph ∝ f Bm^1.6 (hysteresis)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Transformer EMF",
            "formula": "E = 4.44 * f * N * Φm",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Transformation Ratio",
            "formula": "K = V2 / V1 = N2 / N1 = I1 / I2",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Equivalent Resistance",
            "formula": "R1e = R1 + R2/K^2, R2e = R2 + K^2 R1",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Efficiency",
            "formula": "η = [x * kVA * cos φ / (x * kVA * cos φ + Pi + x^2 Pcu)] * 100",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Max Efficiency Condition",
            "formula": "x_max = √(Pi / Pcu)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          }
        ],
        "mindMap": [
          {
            "node": "Magnetic Circuits and Single-Phase Transformers",
            "children": [
              "Magnetic circuit concepts: Magnetomotive Force (MMF = NI), Reluctance (S = l / μA), and Flux (Φ = MMF / S)",
              "Analogy between electric and magnetic circuits (EMF vs MMF, Current vs Flux, Resistance vs Reluctance)",
              "Magnetic materials: B-H magnetization curve, magnetic saturation, and permeability (μ = μ0 μr)",
              "Core losses in magnetic circuits: Hysteresis loss (Steinmetz formula) and Eddy current loss",
              "Single-Phase Transformer: Operating principle, mutual induction, and core-type vs shell-type construction",
              "Transformer EMF equation derivation: E = 4.44 f N Φm",
              "Transformation ratio (K = V2 / V1 = N2 / N1 = I1 / I2)",
              "Ideal transformer on no-load and on-load phasor diagrams",
              "Practical transformer: Winding resistance (R1, R2), leakage reactance (X1, X2), and core excitation branch (R0, X0)",
              "Equivalent circuit of transformer referred to primary and referred to secondary",
              "Transformer testing: Open-Circuit (OC) test for iron losses and Short-Circuit (SC) test for copper losses",
              "Voltage Regulation of transformer (lagging, leading, and unity power factors)",
              "Transformer Efficiency: All-day efficiency vs power efficiency, and condition for maximum efficiency (Iron Loss = Copper Loss)"
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
                "b": "Confusing the 4.0 average EMF formula with the 4.44 RMS EMF formula."
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
                "b": "Forgetting that copper loss scales with the square of the load fraction (x^2 Pcu)."
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "Transformer Tests",
            "back": "OC Open Core Iron, SC Short Current Copper (OCOC-SCCC)"
          },
          {
            "front": "EMF Constant",
            "back": "Four-Point-Four-Four For Flux (4.44)"
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Why are transformer cores laminated and made from silicon steel?",
            "answer": "Transformer cores are constructed from silicon steel to reduce hysteresis loss (silicon steel has a very narrow B-H hysteresis loop). The core is sliced into thin laminated sheets coated with insulating varnish to break the path of induced circular currents, dramatically reducing eddy current losses which scale with thickness squared (t^2)."
          },
          {
            "question": "What happens if a transformer primary is connected to a steady DC supply of rated voltage?",
            "answer": "On steady DC, the magnetic flux is constant (dΦ/dt = 0), so zero EMF is induced in the secondary winding. Furthermore, because inductive reactance is zero (XL = 2πfL = 0 on DC), the primary current is limited only by its tiny winding resistance (I = V / R1). This draws a catastrophic overcurrent, quickly burning out the primary winding."
          }
        ]
      }
    },
    {
      "id": "beee-u4",
      "unitNumber": "Unit IV",
      "title": "Electrical Machines: DC Machines and Induction Motors",
      "description": "Operating principles, construction, and mathematical analysis of DC Generators, DC Motors, and Three-Phase Induction Motors. Covers generated EMF equations, back EMF, motor torque equations, speed control methods, DC motor starters, Rotating Magnetic Field (RMF) generation, slip mechanics, and torque-slip characteristics.",
      "topics": [
        "DC Machines: Common structural architecture (Yoke, Pole cores, Field coils, Armature core, Commutator, and Brushes)",
        "DC Generator: Operating principle, Fleming’s Right-Hand Rule, Lap winding (A = P) vs Wave winding (A = 2)",
        "Derivation of DC Generator EMF Equation: Eg = (Φ Z N P) / (60 A)",
        "Types of DC Generators: Separately excited, Shunt, Series, and Compound generators",
        "DC Motor: Operating principle, Fleming’s Left-Hand Rule, and Back EMF (Eb = V - Ia Ra)",
        "Significance of Back EMF as a self-regulating electrical governor",
        "DC Motor Torque Equation derivation: Ta = 0.159 Φ Z Ia (P / A) = (P Φ Z Ia) / (2π A)",
        "Speed equation of DC motor: N ∝ (Eb / Φ) and speed control methods (Field flux control vs Armature voltage control)",
        "Need for DC motor starters (3-point starter with No-Volt Coil and Overload Release)",
        "Three-Phase Induction Motor: Construction (Squirrel Cage vs Wound Rotor / Slip Ring)",
        "Principle of Rotating Magnetic Field (RMF): Derivation proving constant magnitude (1.5 Φm) and synchronous speed (Ns = 120 f / P)",
        "Slip concept: Synchronous speed (Ns), actual rotor speed (N), slip s = (Ns - N) / Ns, and rotor frequency fr = s f",
        "Torque-Slip characteristics of three-phase induction motor and starting vs running torque"
      ],
      "lessons": [
        {
          "id": "beee-u4-l1",
          "unitId": "beee-u4",
          "subjectId": "beee",
          "title": "DC Generators: Construction, EMF Equation & Types (Shunt & Series)",
          "durationMinutes": 35,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Magnetic field and Lorentz force",
            "Faraday’s law of induction"
          ],
          "realLifeQuestion": {
            "en": "How does spinning a diesel engine or wind turbine generate direct current electricity, and what mechanical magic converts AC inside the rotor into smooth DC outside at the terminals?",
            "hinglish": "Diesel engine ya wind turbine ko ghumane par direct current kaise banta hai, aur rotor ke andar banne wali AC bahar aate-aate DC kaise ban jati hai?",
            "hi": "यांत्रिक घूर्णन से दिष्ट धारा (DC) कैसे उत्पन्न होती है और दिक्परिवर्तक (Commutator) AC को DC में कैसे बदलता है?"
          },
          "simpleExplanation": {
            "en": "A DC Generator converts mechanical energy into electrical energy based on Faraday’s Law of Electromagnetic Induction. When the armature rotor spins inside the stationary magnetic field created by the stator poles, its copper conductors cut magnetic flux lines, inducing an alternating EMF. To produce Direct Current at the external load terminals, a mechanical rotary rectifier called the Commutator (a cylinder of copper segments separated by mica insulation) reverses the coil connections every half-turn, converting internal AC into pulsating unidirectional DC collected by stationary carbon brushes. The generated EMF is given by Eg = (Φ * Z * N * P) / (60 * A), where A is parallel paths (A = P for Lap winding; A = 2 for Wave winding). Generators are classified by their field winding connection: Shunt (field in parallel with armature), Series (field in series with armature), and Compound (both windings).",
            "hinglish": "DC Generator mechanical energy ko DC electrical energy me convert karta hai. Jab stator ke magnetic field me armature ghoomta hai, toh copper conductors flux cut karte hain jisse voltage banta hai. Rotor ke andar hamesha AC banta hai, par bahar DC nikaalne ke liye ek mechanical switch use hota hai jise Commutator kehte hain. Commutator har aadhe chakkar par connections ult deta hai jisse bahar stationary carbon brushes se ek-direction wali DC current milti hai. Generated EMF Eg = (Φ * Z * N * P) / (60 * A) hoti hai. Lap winding me A = P (parallel paths = poles) aur Wave winding me A = 2 hota hai.",
            "hi": "DC जनरेटर यांत्रिक ऊर्जा को DC विद्युत ऊर्जा में बदलता है। आर्मेचर में सदैव AC उत्पन्न होती है जिसे कम्यूटेटर (दिक्परिवर्तक) DC में बदलता है। प्रेरित EMF Eg = (Φ Z N P) / (60 A) होता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "A DC generator with a commutator is like an automated two-way valve on a reciprocating water pump. Even though the piston moves left and right (AC oscillation), the check-valves flip every stroke so water always shoots out in a single forward hose direction (DC flow)!",
              "hinglish": "Hand pump ke valve ki tarah: piston upar-neeche (AC) hota hai, par valve har stroke par aisa set ho jata hai ki paani hamesha ek hi disha me bahar nikalta hai (DC). Commutator wahi valve hai jo current ko hamesha ek hi direction deta hai.",
              "hi": "कम्यूटेटर पानी के पंप के उस वाल्व की तरह है जो पिस्टन के आगे-पीछे होने पर भी पानी को केवल एक ही दिशा में बाहर फेंकता है।"
            },
            "limitations": {
              "en": "Valves experience fluid leaks; commutators suffer mechanical friction and carbon brush sparking under heavy electrical load.",
              "hinglish": "Commutator aur carbon brushes ke beech physical friction aur sparking hoti hai jise regularly maintain karna padta hai.",
              "hi": "कम्यूटेटर और कार्बन ब्रश के मध्य घर्षण व स्पार्किंग होती है।"
            }
          },
          "terminology": [
            {
              "term": "Armature",
              "definition": {
                "en": "The rotating laminated cylinder housing copper conductors where electromagnetic EMF is induced.",
                "hinglish": "Ghoomne wala lohe ka cylinder jisme copper coils lagi hoti hain.",
                "hi": "घूर्णन करने वाला भाग जहाँ विद्युत वाहक बल (EMF) उत्पन्न होता है।"
              }
            },
            {
              "term": "Commutator",
              "definition": {
                "en": "A split-ring cylinder of copper segments that mechanically rectifies AC into DC.",
                "hinglish": "Copper segments ka bana cylinder jo AC ko DC me convert karta hai.",
                "hi": "दिक्परिवर्तक: AC को DC में बदलने वाला यांत्रिक रेक्टिफायर।"
              }
            },
            {
              "term": "Lap Winding",
              "definition": {
                "en": "Armature winding where parallel paths equal the number of poles (A = P); designed for high current, low voltage.",
                "hinglish": "Aisi winding jisme parallel paths A = P hote hain (high current ke liye).",
                "hi": "लैप वाइंडिंग: A = P (उच्च धारा हेतु)।"
              }
            },
            {
              "term": "Wave Winding",
              "definition": {
                "en": "Armature winding where parallel paths strictly equal two (A = 2); designed for high voltage, low current.",
                "hinglish": "Aisi winding jisme hamesha A = 2 paths hote hain (high voltage ke liye).",
                "hi": "वेव वाइंडिंग: A = 2 (उच्च वोल्टेज हेतु)।"
              }
            }
          ],
          "visualType": "em-induction",
          "visualData": {
            "machineType": "dc-generator",
            "poles": 4,
            "speedRpm": 1500,
            "fluxPerPole": 0.02,
            "conductors": 600,
            "winding": "Lap (A = 4)"
          },
          "underlyingPrinciple": {
            "en": "Dynamic Electromagnetic Induction: Moving a conductor of length L at velocity v perpendicular to flux density B induces motional EMF e = B L v. Integrating over Z conductors in A parallel paths across P poles rotating at N RPM yields Eg = (Φ Z N P) / (60 A).",
            "hinglish": "Har conductor me e = B L v voltage banti hai. Z conductors aur P poles ke liye integrate karne par Eg = (Φ Z N P) / (60 A) banta hai.",
            "hi": "गतिज विद्युत वाहक बल e = BLv के समाकलन से Eg = (Φ Z N P) / (60 A) प्राप्त होता है।"
          },
          "formulaLogic": {
            "formula": "E_g = \\frac{\\Phi \\cdot Z \\cdot N \\cdot P}{60 \\cdot A} \\quad \\text{where } A = \\begin{cases} P & \\text{for Lap Winding} \\\\ 2 & \\text{for Wave Winding} \\end{cases}",
            "description": {
              "en": "DC Generator EMF equation connecting core flux, total conductors, speed, poles, and winding paths.",
              "hinglish": "DC Generator ki generated EMF equation.",
              "hi": "DC जनरेटर का विद्युत वाहक बल (EMF) समीकरण।"
            },
            "symbols": [
              {
                "symbol": "\\Phi",
                "meaning": "Magnetic flux per pole",
                "unit": "Webers (Wb)"
              },
              {
                "symbol": "Z",
                "meaning": "Total number of active armature conductors",
                "unit": "integer"
              },
              {
                "symbol": "N",
                "meaning": "Rotational speed of armature",
                "unit": "RPM"
              },
              {
                "symbol": "P",
                "meaning": "Number of magnetic field poles",
                "unit": "integer"
              },
              {
                "symbol": "A",
                "meaning": "Number of parallel paths in armature",
                "unit": "integer"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A 4-pole DC generator having a wave-wound armature with 480 conductors is driven at 1200 RPM. If the flux per pole is 0.025 Wb, calculate (a) the generated EMF. (b) What would be the generated EMF if the armature were reconnected as a lap-wound armature?",
              "hinglish": "4-pole DC generator, wave-wound, 480 conductors, 1200 RPM, flux Φ = 0.025 Wb. Generated EMF nikaalo. Agar Lap winding ho jaye toh EMF kitna hoga?",
              "hi": "4-पोल, वेव-वाउंड, Z = 480, N = 1200 RPM, Φ = 0.025 Wb हेतु उत्पन्न EMF ज्ञात कीजिए। लैप वाइंडिंग होने पर EMF क्या होगा?"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate EMF for Wave Winding (A = 2)",
                "explanation": {
                  "en": "For wave winding, A = 2 always. Eg = (Φ * Z * N * P) / (60 * A) = (0.025 * 480 * 1200 * 4) / (60 * 2) = (57,600) / 120 = 480 V.",
                  "hinglish": "Wave winding ke liye A = 2. Eg = (0.025 * 480 * 1200 * 4) / (60 * 2) = 480 V.",
                  "hi": "वेव वाइंडिंग हेतु A = 2: Eg = (0.025 × 480 × 1200 × 4)/(60 × 2) = 480 V।"
                },
                "math": "E_{g,\\text{wave}} = \\frac{0.025 \\times 480 \\times 1200 \\times 4}{60 \\times 2} = \\frac{57600}{120} = 480\\,\\text{V}"
              },
              {
                "stepNumber": 2,
                "title": "Calculate EMF for Lap Winding (A = P = 4)",
                "explanation": {
                  "en": "For lap winding, parallel paths A = P = 4. Eg = (Φ * Z * N * P) / (60 * A) = (0.025 * 480 * 1200 * 4) / (60 * 4) = 57,600 / 240 = 240 V.",
                  "hinglish": "Lap winding ke liye A = P = 4. Eg = (0.025 * 480 * 1200 * 4) / (60 * 4) = 240 V.",
                  "hi": "लैप वाइंडिंग हेतु A = P = 4: Eg = 240 V।"
                },
                "math": "E_{g,\\text{lap}} = \\frac{0.025 \\times 480 \\times 1200 \\times 4}{60 \\times 4} = 240\\,\\text{V}"
              }
            ],
            "finalAnswer": "Wave-wound generated EMF = 480 V; Lap-wound generated EMF = 240 V (Wave winding delivers twice the voltage because fewer paths put more conductors in series)."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Assuming that Lap winding always produces higher voltage than Wave winding.",
                "hinglish": "Ye sochna ki Lap winding me hamesha zyada voltage banta hai.",
                "hi": "यह सोचना कि लैप वाइंडिंग सदैव अधिक वोल्टेज देती है।"
              },
              "correction": {
                "en": "It is the exact opposite! Lap winding puts conductors into P parallel paths, giving HIGH CURRENT and lower voltage. Wave winding only has 2 paths regardless of poles (A = 2), putting many more conductors in series to generate HIGH VOLTAGE and lower current.",
                "hinglish": "Ulta hota hai! Lap winding high CURRENT ke liye hoti hai (A = P), aur Wave winding high VOLTAGE ke liye hoti hai (A = 2).",
                "hi": "लैप वाइंडिंग उच्च धारा हेतु तथा वेव वाइंडिंग उच्च वोल्टेज हेतु होती है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u4-l1-p1",
              "question": {
                "en": "In a 6-pole DC generator with a Lap-wound armature, how many parallel paths A exist for current flow?",
                "hinglish": "6-pole Lap-wound DC generator me kitne parallel paths A hote hain?",
                "hi": "6-पोल लैप-वाउंड DC जनरेटर में कितने समानांतर पथ A होते हैं?"
              },
              "hint": {
                "en": "For Lap winding, A = P.",
                "hinglish": "Lap winding me A = P hota hai.",
                "hi": "A = P।"
              },
              "explanation": {
                "en": "In Lap winding, the number of parallel paths A strictly equals the number of magnetic poles P. Since P = 6, A = 6.",
                "hinglish": "Lap winding me A = P = 6 paths hote hain.",
                "hi": "लैप वाइंडिंग में A = P = 6 पथ होते हैं।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "2 parallel paths",
                "6 parallel paths",
                "12 parallel paths",
                "3 parallel paths"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "DC Generators convert mechanical energy into DC electrical energy via Faraday’s Law.",
              "Commutator acts as a mechanical rectifier converting armature AC into terminal DC.",
              "EMF Equation: Eg = (Φ Z N P) / (60 A).",
              "Lap winding has A = P (high current); Wave winding has A = 2 (high voltage)."
            ],
            "hinglish": [
              "DC generator mechanical energy ko DC me badalta hai.",
              "Commutator AC ko DC me convert karne wala mechanical rectifier hai.",
              "EMF formula: Eg = (Φ Z N P) / (60 A).",
              "Lap winding me A = P (high current), Wave me A = 2 (high voltage)."
            ],
            "hi": [
              "DC जनरेटर यांत्रिक ऊर्जा को DC में बदलता है।",
              "कम्यूटेटर AC को DC में बदलने वाला यांत्रिक रेक्टिफायर है।",
              "EMF सूत्र: Eg = (Φ Z N P) / (60 A)।",
              "लैप में A = P (उच्च धारा); वेव में A = 2 (उच्च वोल्टेज)।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u4-l1-q1",
              "question": {
                "en": "Which hand rule determines the direction of induced EMF and current in a DC Generator conductor?",
                "hinglish": "DC Generator me induced current ki direction nikaalne ke liye kaun sa hand rule use hota hai?",
                "hi": "DC जनरेटर में प्रेरित EMF की दिशा ज्ञात करने हेतु कौन सा नियम प्रयुक्त होता है?"
              },
              "options": [
                "Fleming’s Left-Hand Rule",
                "Fleming’s Right-Hand Rule",
                "Right-Hand Thumb Rule",
                "Lenz’s Left-Hand Rule"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "Right hand for generator (generation), Left hand for motor (motion).",
                "hinglish": "Generator ke liye Right Hand, Motor ke liye Left Hand.",
                "hi": "जनरेटर हेतु दायां हाथ नियम।"
              },
              "explanation": {
                "en": "Fleming’s Right-Hand Rule determines induced EMF direction in generators, while Fleming’s Left-Hand Rule determines force/motion direction in motors.",
                "hinglish": "Generator ke liye Fleming ka Right-Hand rule use hota hai.",
                "hi": "जनरेटर में प्रेरित EMF हेतु फ्लेमिंग का दायां हाथ नियम प्रयुक्त होता है।"
              }
            }
          ]
        },
        {
          "id": "beee-u4-l2",
          "unitId": "beee-u4",
          "subjectId": "beee",
          "title": "DC Motors: Working Principle, Back EMF, Torque & Speed Control",
          "durationMinutes": 40,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Lorentz magnetic force F = BIL",
            "DC Generators"
          ],
          "realLifeQuestion": {
            "en": "Why does an electric train or metro locomotive pull hundreds of tons from a dead stop with immense pulling power, and why does starting a heavy DC motor without a starter trip the main circuit breakers instantly?",
            "hinglish": "Metro train ruki hui sthiti se itne bhari coach ko aasaani se kaise kheench leti hai, aur bina starter ke heavy DC motor on karne par fuse kyu ud jata hai?",
            "hi": "विद्युत ट्रेन रुके हुए भार को इतनी सुगमता से कैसे खींच लेती है और बिना स्टार्टर के DC मोटर चालू करने पर फ्यूज क्यों उड़ जाता है?"
          },
          "simpleExplanation": {
            "en": "A DC Motor converts electrical energy into mechanical rotation using the Lorentz magnetic force principle: when current-carrying armature conductors are placed in a magnetic field, they experience mechanical forces given by Fleming’s Left-Hand Rule (F = B * I * L), creating electromagnetic torque Ta = (P * Φ * Z * Ia) / (2π * A). As the armature spins, its conductors simultaneously cut the magnetic flux, inducing an internal generator voltage called Back EMF (Eb = Φ Z N P / 60 A) that OPPOSES the applied supply voltage (V). Net armature current is Ia = (V - Eb) / Ra. Back EMF acts as a natural automatic governor: as motor load increases, speed slows down, Eb drops, automatically allowing more current Ia to enter and produce the exact extra torque needed to carry the load! At standstill (N = 0), Eb = 0 V; because armature resistance Ra is tiny (≈ 0.5 Ω), connecting 230 V directly draws an enormous starting current of 230 / 0.5 = 460 A, which destroys the windings! A 3-point starter inserts temporary series resistance during startup to protect the motor until speed builds up Eb.",
            "hinglish": "DC Motor electrical energy ko mechanical ghoomne wali taqat me badalta hai (Fleming’s Left Hand Rule: F = BIL). Jab armature ghoomta hai, toh wo generator ki tarah ek ulta voltage banata hai jise Back EMF (Eb) kehte hain, jo supply voltage V ka virodh karta hai: Ia = (V - Eb) / Ra. Back EMF motor ka automatic speed governor hai: jaise hi motor par load padta hai, speed kam hoti hai, Eb ghatt jata hai, aur automatically zyada current aakar extra torque de deti hai! Shuruat me (speed N = 0) par Eb = 0 hota hai, aur kyunki armature resistance Ra bohot choti (0.5 Ω) hoti hai, isliye shuru me 400-500 A current aakar motor ko jala sakti hai. Isliye starting current ko control karne ke liye 3-point Starter lagaya jata hai.",
            "hi": "DC मोटर विद्युत ऊर्जा को यांत्रिक घूर्णन में बदलती है। बैक EMF Eb = V - Ia Ra एक स्वतः-नियामक का कार्य करता है। मोटर रुकने पर Eb = 0 होने से विशाल प्रारंभिक धारा बहती है, जिसे सीमित करने हेतु स्टार्टर अनिवार्य है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Back EMF is like the wind resistance pushing against you as you ride a bicycle. When you are stopped at a red light (N = 0), there is zero wind resistance (Eb = 0); pushing the pedals hard suddenly takes immense effort. Once you cruise at 30 km/h, the backward wind push (Eb) balances your pedaling, creating a steady, stable speed.",
              "hinglish": "Cycle chalate waqt saamne se aane wali hawa Back EMF jaisi hai. Ruki hui cycle me hawa ka koi virodh nahi hota (Eb = 0). Jab aap 30 km/h par chalte ho, toh saamne ki hawa aapke zor ko balance kar deti hai aur speed steady ho jati hai.",
              "hi": "बैक EMF साइकिल चलाते समय सामने से लगने वाली वायु के अवरोध की तरह है जो स्थिर गति पर संतुलन बनाए रखती है।"
            },
            "limitations": {
              "en": "Wind is purely mechanical; Back EMF is an electrical voltage generated via Faraday's law that directly throttles electrical current draw.",
              "hinglish": "Back EMF koi physical hawa nahi balki ek induced voltage hai jo current ko regulate karta hai.",
              "hi": "बैक EMF एक प्रेरित वोल्टेज है जो धारा के प्रवाह को स्वतः नियंत्रित करता है।"
            }
          },
          "terminology": [
            {
              "term": "Back EMF (Eb)",
              "definition": {
                "en": "EMF induced in the rotating armature of a DC motor opposing the applied terminal voltage: Eb = V - Ia Ra.",
                "hinglish": "Motor ke ghoomne par banne wali ulti voltage jo supply voltage ka virodh karti hai.",
                "hi": "विरोधी विद्युत वाहक बल: प्रयुक्त वोल्टेज का विरोध करने वाला प्रेरित EMF।"
              }
            },
            {
              "term": "Armature Torque (Ta)",
              "definition": {
                "en": "Turning or twisting force produced by the armature conductors: Ta = (P Φ Z Ia) / (2π A) ∝ Φ Ia.",
                "hinglish": "Motor ki ghoomne wali taqat (torque) jo flux aur armature current ke product par depend karti hai.",
                "hi": "आर्मेचर बलाघूर्ण: घूर्णन उत्पन्न करने वाला बल (Ta ∝ Φ Ia)।"
              }
            },
            {
              "term": "3-Point Starter",
              "definition": {
                "en": "A starting rheostat with three terminals (L, F, A) featuring a No-Volt Coil (NVC) and Overload Release (OLR).",
                "hinglish": "Motor ko starting overcurrent se bachane wala resistor panel jisme NVC aur OLR safety coils hoti hain.",
                "hi": "3-पॉइंट स्टार्टर: प्रारंभिक धारा को सुरक्षित स्तर पर रखने वाला उपकरण।"
              }
            },
            {
              "term": "Field Flux Speed Control",
              "definition": {
                "en": "Controlling speed above rated speed by weakening the magnetic flux Φ using a field rheostat (N ∝ 1/Φ).",
                "hinglish": "Field current kam karke motor ki speed ko rated speed se UPAR le jane ka method.",
                "hi": "फील्ड फ्लक्स नियंत्रण: फ्लक्स घटाकर रेटेड गति से अधिक गति प्राप्त करना।"
              }
            }
          ],
          "visualType": "em-induction",
          "visualData": {
            "machineType": "dc-motor",
            "voltage": 230,
            "backEmf": 220,
            "ra": 0.5,
            "ia": 20,
            "speedRpm": 1200
          },
          "underlyingPrinciple": {
            "en": "Electromechanical Energy Conversion & Self-Regulation: Electrical input power V Ia equals mechanical developed power Eb Ia plus internal copper losses Ia^2 Ra. The mechanical power developed is Pm = Eb Ia = ω Ta, proving that Eb directly mediates conversion from electrical Watts to mechanical Newton-meters.",
            "hinglish": "Electrical power V * Ia ka hissa Eb * Ia mechanical power me convert hota hai aur bacha hua Ia^2 Ra heat me waste hota hai.",
            "hi": "विद्युत शक्ति V Ia का बड़ा भाग यांत्रिक शक्ति Eb Ia में परिवर्तित होता है।"
          },
          "formulaLogic": {
            "formula": "E_b = V - I_a R_a = \\frac{\\Phi Z N P}{60 A}, \\quad T_a = \\frac{1}{2\\pi} \\left( \\frac{P}{A} \\right) \\Phi Z I_a, \\quad N \\propto \\frac{E_b}{\\Phi}",
            "description": {
              "en": "DC motor back EMF, armature torque, and fundamental speed relationships.",
              "hinglish": "DC motor ke Back EMF, Torque aur Speed ke formulas.",
              "hi": "DC मोटर का बैक EMF, बलाघूर्ण और गति सम्बंध सूत्र।"
            },
            "symbols": [
              {
                "symbol": "E_b",
                "meaning": "Back EMF",
                "unit": "Volts (V)"
              },
              {
                "symbol": "T_a",
                "meaning": "Armature torque",
                "unit": "Newton-meters (N·m)"
              },
              {
                "symbol": "I_a",
                "meaning": "Armature current",
                "unit": "Amperes (A)"
              },
              {
                "symbol": "N",
                "meaning": "Rotor rotational speed",
                "unit": "RPM"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A 230 V DC shunt motor runs at 1000 RPM while taking an armature current of 40 A. Armature resistance is 0.5 Ω. Calculate (a) Back EMF Eb1 at this speed. (b) If the load torque increases such that armature current rises to 60 A, find the new speed N2 assuming field flux remains constant.",
              "hinglish": "230 V DC shunt motor 1000 RPM par 40 A armature current leti hai (Ra = 0.5 Ω). Eb1 nikaalo. Agar current badh kar 60 A ho jaye toh nayi speed N2 kya hogi?",
              "hi": "230 V, Ra = 0.5 Ω मोटर 40 A पर 1000 RPM से चलती है। धारा 60 A होने पर नई गति N2 ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate initial Back EMF Eb1",
                "explanation": {
                  "en": "Eb1 = V - Ia1 * Ra = 230 - (40 * 0.5) = 230 - 20 = 210 V.",
                  "hinglish": "Eb1 = 230 - (40 * 0.5) = 230 - 20 = 210 V.",
                  "hi": "Eb1 = 230 - (40 × 0.5) = 210 V।"
                },
                "math": "E_{b1} = 230 - (40 \\times 0.5) = 210\\,\\text{V}"
              },
              {
                "stepNumber": 2,
                "title": "Calculate new Back EMF Eb2 at 60 A",
                "explanation": {
                  "en": "Eb2 = V - Ia2 * Ra = 230 - (60 * 0.5) = 230 - 30 = 200 V.",
                  "hinglish": "Eb2 = 230 - (60 * 0.5) = 230 - 30 = 200 V.",
                  "hi": "Eb2 = 230 - (60 × 0.5) = 200 V।"
                },
                "math": "E_{b2} = 230 - (60 \\times 0.5) = 200\\,\\text{V}"
              },
              {
                "stepNumber": 3,
                "title": "Determine new speed N2 using N ∝ Eb / Φ",
                "explanation": {
                  "en": "Since field flux is constant (Φ1 = Φ2), N2 / N1 = Eb2 / Eb1. N2 = N1 * (Eb2 / Eb1) = 1000 * (200 / 210) = 1000 * 0.9524 = 952.4 RPM.",
                  "hinglish": "Speed N ∝ Eb. N2 = 1000 * (200 / 210) = 952.4 RPM (load aane par motor thodi dheemi ho gayi).",
                  "hi": "गति N ∝ Eb होने से: N2 = 1000 × (200/210) ≈ 952.4 RPM।"
                },
                "math": "N_2 = N_1 \\times \\frac{E_{b2}}{E_{b1}} = 1000 \\times \\frac{200}{210} = 952.4\\,\\text{RPM}"
              }
            ],
            "finalAnswer": "Initial Back EMF = 210 V; New speed under 60 A load = 952.4 RPM."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Starting a heavy DC motor directly across mains voltage without a starter.",
                "hinglish": "Heavy DC motor ko bina starter ke sidhe direct switch on kar dena.",
                "hi": "बिना स्टार्टर के DC मोटर चालू करना।"
              },
              "correction": {
                "en": "At rest (N = 0), Back EMF Eb is zero. Starting current is limited only by tiny armature resistance: Ist = V / Ra. For V = 230 V and Ra = 0.5 Ω, current surges to 460 A (10x to 15x rated current!), blowing fuses and destroying commutator brushes. A starter is mandatory to insert protective resistance.",
                "hinglish": "Shuruat me Eb = 0 hota hai, isliye bina starter ke 460 A current flow ho kar winding aur fuse jala degi.",
                "hi": "प्रारंभ में Eb = 0 होने से भीषण धारा (460 A) बहती है जो वाइंडिंग को जला सकती है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u4-l2-p1",
              "question": {
                "en": "What happens to the speed of a DC shunt motor if its field winding is suddenly broken (open-circuited) while running?",
                "hinglish": "Chalti hui DC shunt motor ka field connection achanak toot jaye toh speed ka kya hoga?",
                "hi": "चलती हुई DC शंट मोटर की फील्ड वाइंडिंग टूट जाने पर गति क्या होगी?"
              },
              "hint": {
                "en": "Speed N is inversely proportional to field flux: N ∝ 1/Φ.",
                "hinglish": "N ∝ 1/Φ. Flux 0 ke paas jane par speed infinity ki taraf bhagti hai.",
                "hi": "N ∝ 1/Φ।"
              },
              "explanation": {
                "en": "Because N ∝ Eb / Φ, if the field circuit breaks, flux Φ collapses to near zero (only tiny residual magnetism remains). To generate required Back EMF, the motor accelerates dangerously to destructive speeds (runaway speed), potentially tearing itself apart mechanically!",
                "hinglish": "Flux girte hi speed khatarnak roop se bohot zyada (runaway speed) ho jati hai jisse motor toot sakti hai.",
                "hi": "फ्लक्स शून्य के निकट होने से मोटर खतरनाक गति (रनअवे स्पीड) पर पहुंच जाती है।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "The motor stops immediately",
                "The motor dangerously accelerates to runaway speeds",
                "The motor runs at constant rated speed",
                "The direction of rotation reverses"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "DC motors convert electrical energy into torque via Fleming’s Left-Hand Rule (Ta ∝ Φ Ia).",
              "Back EMF Eb = V - Ia Ra self-regulates motor speed and current under changing mechanical loads.",
              "A starter is mandatory during startup to limit massive initial inrush currents when Eb = 0.",
              "Speed is controlled below rated speed by armature voltage control, and above rated speed by field flux weakening."
            ],
            "hinglish": [
              "DC motor torque generate karti hai (Ta ∝ Φ Ia).",
              "Back EMF Eb = V - Ia Ra motor ki speed aur current ko automatically regulate karta hai.",
              "Shuruat me Eb = 0 hone par massive current se bachane ke liye Starter zaroori hai.",
              "Field flux kam karke speed rated se UPAR badhai ja sakti hai."
            ],
            "hi": [
              "DC मोटर बलाघूर्ण उत्पन्न करती है (Ta ∝ Φ Ia)।",
              "बैक EMF Eb = V - Ia Ra धारा को स्वतः संतुलित करता है।",
              "प्रारंभ में विशाल धारा रोकने हेतु स्टार्टर अनिवार्य है।",
              "फील्ड फ्लक्स घटाकर गति बढ़ाई जा सकती है।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u4-l2-q1",
              "question": {
                "en": "What is the Back EMF of a DC motor at the exact moment of standstill before it starts rotating?",
                "hinglish": "Motor shuru hone se theek pehle (standstill par) Back EMF kitna hota hai?",
                "hi": "रुकने की स्थिति (Standstill) में DC मोटर का बैक EMF कितना होता है?"
              },
              "options": [
                "Equal to supply voltage V",
                "Zero (0 V)",
                "Infinity",
                "Half of supply voltage V/2"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "Back EMF is generated by rotation: Eb = (Φ Z N P) / (60 A). When speed N = 0, what is Eb?",
                "hinglish": "Speed N = 0 hone par Eb = 0 hoga.",
                "hi": "N = 0 होने पर Eb = 0।"
              },
              "explanation": {
                "en": "Because Back EMF is directly proportional to rotational speed N (Eb ∝ N), at standstill when N = 0, Back EMF is strictly 0 V.",
                "hinglish": "Speed N = 0 hone par Back EMF strictly 0 V hota hai.",
                "hi": "गति N = 0 होने से बैक EMF ठीक 0 V होता है।"
              }
            }
          ]
        },
        {
          "id": "beee-u4-l3",
          "unitId": "beee-u4",
          "subjectId": "beee",
          "title": "Three-Phase Induction Motor: Rotating Magnetic Field (RMF), Slip & Torque",
          "durationMinutes": 40,
          "difficulty": "Intermediate",
          "prerequisites": [
            "3-phase AC waveforms",
            "Faraday’s law and Lenz’s law"
          ],
          "realLifeQuestion": {
            "en": "Why are 90% of all electric motors in factories, water pumping stations, and elevators 3-phase induction motors, and why does an induction motor NEVER rotate at the exact speed of the magnetic field?",
            "hinglish": "Duniya ki 90% factory motors 3-Phase Induction Motors kyu hoti hain, aur induction motor ka rotor magnetic field ki exact speed par kyu nahi ghoom sakta?",
            "hi": "उद्योगों में 90% मोटरें 3-फेज इंडक्शन मोटर क्यों हैं और रोटर कभी सिंक्रोनस गति से क्यों नहीं घूम सकता?"
          },
          "simpleExplanation": {
            "en": "The Three-Phase Induction Motor (often called the workhorse of industry) has no brushes, no commutator, and no slip rings in its squirrel-cage form, making it virtually indestructible and maintenance-free. When 3-phase balanced AC currents are supplied to the stationary stator windings displaced by 120° in space, they miraculously produce a Rotating Magnetic Field (RMF) that spins at Synchronous Speed Ns = 120 f / P with a constant magnitude of 1.5 Φm! As this field sweeps past the closed rotor bars, it cuts them, inducing heavy currents. By Lenz’s law, the rotor chases the rotating field to minimize flux cutting, spinning at speed N. However, the rotor can NEVER catch up to synchronous speed (N < Ns): if it reached N = Ns, relative speed would be zero, no flux would be cut, induced EMF would drop to zero, torque would vanish, and the motor would stop! The fractional lag between field speed and rotor speed is called Slip: s = (Ns - N) / Ns (typically 2% to 5% under full load).",
            "hinglish": "Three-phase induction motor industry ka workhorse hai kyunki isme na brush hota hai, na commutator, isliye ye bina maintenance ke saalo chalti hai. Stator me 3-phase current dene par ek Rotating Magnetic Field (RMF) banta hai jo Synchronous speed Ns = 120 f / P par ghoomta hai (iski magnitude constant 1.5 Φm rehti hai). Ye ghoomta hua field rotor ke copper bars ko cut karta hai, jisse rotor me current induce hoti hai aur rotor ghoomne lagta hai. Par rotor KABHI BHI synchronous speed Ns ko catch nahi kar sakta (N hamesha Ns se chota hota hai): agar rotor Ns ke barabar ghoomega, toh flux cutting zero ho jayegi, torque zero ho jayega aur motor ruk jayegi! Is speed difference ko Slip kehte hain: s = (Ns - N) / Ns (full load par s lagbhag 2-5% hota hai).",
            "hi": "3-फेज धारा से 1.5 Φm परिमाण का घूर्णन चुंबकीय क्षेत्र (RMF) बनता है जो सिंक्रोनस गति Ns = 120 f / P से घूमता है। रोटर फैराडे व लेंज़ के नियम से घूमता है। सापेक्ष गति बनाए रखने हेतु रोटर की गति सदैव N < Ns होती है। स्लिप s = (Ns - N) / Ns होती है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of a donkey chasing a carrot dangling from a stick strapped to its head. The carrot moves at synchronous speed (Ns). The donkey gallops forward at rotor speed (N) trying desperately to reach the carrot, but it can never bite it. The distance between the donkey's mouth and the carrot is the Slip (s)! If the donkey ever caught the carrot, it would stop running immediately.",
              "hinglish": "Gajar aur gadhe ki kahani jaisi: gajar aage-aage synchronous speed (Ns) se daud rahi hai aur gadha rotor speed (N) se uske peeche bhag raha hai. Gadha gajar ko kabhi pakad nahi pata; dono ke beech ki doori Slip (s) hai! Agar pakad liya toh gadha bhagna band kar dega.",
              "hi": "गाजर के पीछे भागते गधे की तरह: रोटर चुंबकीय क्षेत्र (Ns) को पकड़ने का प्रयास करता है परंतु कभी पकड़ नहीं पाता; यह अंतर ही स्लिप (s) है।"
            },
            "limitations": {
              "en": "A donkey gets tired; an induction motor maintains steady slip indefinitely determined by mechanical load torque.",
              "hinglish": "Induction motor load ke hisaab se stable slip maintain karti hai bina thake.",
              "hi": "इंडक्शन मोटर भार के अनुसार स्थिर स्लिप पर कार्य करती रहती है।"
            }
          },
          "terminology": [
            {
              "term": "Rotating Magnetic Field (RMF)",
              "definition": {
                "en": "A magnetic field of constant magnitude (1.5 Φm) that physically rotates in space at synchronous speed Ns.",
                "hinglish": "Stator dwara banaya gaya ghoomne wala magnetic field (magnitude = 1.5 Φm).",
                "hi": "घूर्णन चुंबकीय क्षेत्र: स्थिर परिमाण (1.5 Φm) का घूर्णनशील क्षेत्र।"
              }
            },
            {
              "term": "Synchronous Speed (Ns)",
              "definition": {
                "en": "The rotational speed of the stator magnetic field: Ns = 120 f / P (RPM).",
                "hinglish": "Magnetic field ke ghoomne ki speed: Ns = 120 f / P.",
                "hi": "सिंक्रोनस गति: Ns = 120 f / P (RPM)।"
              }
            },
            {
              "term": "Slip (s)",
              "definition": {
                "en": "The fractional difference between synchronous speed and actual rotor speed: s = (Ns - N) / Ns.",
                "hinglish": "Magnetic field aur rotor speed ke beech ka percentage antar: s = (Ns - N) / Ns.",
                "hi": "स्लिप: s = (Ns - N) / Ns।"
              }
            },
            {
              "term": "Squirrel-Cage Rotor",
              "definition": {
                "en": "Rotor consisting of uninsulated copper or aluminum bars permanently short-circuited by end rings.",
                "hinglish": "Aluminium bars aur end rings se bana majboot rotor jo chuhe ke pinjare jaisa dikhta hai.",
                "hi": "गिलहरी-पिंजरा रोटर (Squirrel Cage)।"
              }
            }
          ],
          "visualType": "em-induction",
          "visualData": {
            "machineType": "induction-motor",
            "poles": 4,
            "frequency": 50,
            "syncSpeedNs": 1500,
            "rotorSpeedN": 1440,
            "slipPercent": 4
          },
          "underlyingPrinciple": {
            "en": "Space-Time Polyphase Vector Addition: Three sinusoidal fluxes separated in time by 120° (sin ωt, sin(ωt - 120°), sin(ωt - 240°)) positioned in stator slots displaced in space by 120° sum vectorially to a resultant flux of constant magnitude Φ_res = 1.5 Φm whose spatial angle advances by ω radians per second.",
            "hinglish": "120° degree time aur 120° space shift ke karan teeno phases ka vector sum hamesha 1.5 Φm banta hai jo lagataar space me ghoomta hai.",
            "hi": "तीन-फेज फ्लक्सों का सदिश योग सदैव 1.5 Φm का स्थिर मान देता है जो निरंतर घूमता है।"
          },
          "formulaLogic": {
            "formula": "N_s = \\frac{120 f}{P}, \\quad s = \\frac{N_s - N}{N_s}, \\quad f_r = s \\cdot f, \\quad T \\propto \\frac{s E_2^2 R_2}{R_2^2 + (s X_2)^2}",
            "description": {
              "en": "Induction motor synchronous speed, slip, rotor induced frequency, and torque-slip equation.",
              "hinglish": "Induction motor ki Synchronous speed, Slip, Rotor frequency aur Torque equation.",
              "hi": "सिंक्रोनस गति, स्लिप, रोटर आवृत्ति और बलाघूर्ण-स्लिप समीकरण।"
            },
            "symbols": [
              {
                "symbol": "N_s",
                "meaning": "Synchronous speed of rotating magnetic field",
                "unit": "RPM"
              },
              {
                "symbol": "N",
                "meaning": "Actual mechanical speed of rotor",
                "unit": "RPM"
              },
              {
                "symbol": "s",
                "meaning": "Fractional slip (0 < s < 1 in motor mode)",
                "unit": "fraction"
              },
              {
                "symbol": "f_r",
                "meaning": "Frequency of induced rotor currents = s * f",
                "unit": "Hertz (Hz)"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A 6-pole, 3-phase induction motor is connected to a 50 Hz AC supply. If the motor runs at 960 RPM at full load, calculate: (a) Synchronous speed Ns, (b) Fractional and percentage slip s, and (c) Frequency of induced rotor currents fr.",
              "hinglish": "6-pole, 3-phase induction motor, 50 Hz supply, 960 RPM par chal rahi hai. Synchronous speed Ns, slip s, aur rotor current ki frequency fr nikaalo.",
              "hi": "6-पोल, 50 Hz मोटर 960 RPM पर चल रही है। सिंक्रोनस गति, स्लिप और रोटर आवृत्ति ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate synchronous speed Ns",
                "explanation": {
                  "en": "Ns = (120 * f) / P = (120 * 50) / 6 = 6000 / 6 = 1000 RPM.",
                  "hinglish": "Ns = (120 * 50) / 6 = 1000 RPM.",
                  "hi": "Ns = (120 × 50) / 6 = 1000 RPM।"
                },
                "math": "N_s = \\frac{120 \\times 50}{6} = 1000\\,\\text{RPM}"
              },
              {
                "stepNumber": 2,
                "title": "Calculate slip s",
                "explanation": {
                  "en": "Slip s = (Ns - N) / Ns = (1000 - 960) / 1000 = 40 / 1000 = 0.04 (or 4.0%).",
                  "hinglish": "s = (1000 - 960) / 1000 = 0.04 yani 4%.",
                  "hi": "स्लिप s = (1000 - 960) / 1000 = 0.04 (4%)।"
                },
                "math": "s = \\frac{1000 - 960}{1000} = 0.04 \\quad (4.0\\%)"
              },
              {
                "stepNumber": 3,
                "title": "Calculate rotor frequency fr",
                "explanation": {
                  "en": "Rotor frequency fr = s * f = 0.04 * 50 Hz = 2.0 Hz. (The rotor currents oscillate very slowly at only 2 cycles per second!).",
                  "hinglish": "fr = s * f = 0.04 * 50 = 2 Hz (rotors me current bohot dheeme 2 Hz par oscillate karti hai).",
                  "hi": "रोटर आवृत्ति fr = 0.04 × 50 = 2.0 Hz।"
                },
                "math": "f_r = s \\times f = 0.04 \\times 50 = 2.0\\,\\text{Hz}"
              }
            ],
            "finalAnswer": "Ns = 1000 RPM, Slip s = 0.04 (4%), Rotor current frequency fr = 2.0 Hz."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Believing that an induction motor can rotate at synchronous speed (N = Ns) under zero-load conditions.",
                "hinglish": "Ye sochna ki bina load ke induction motor poori synchronous speed (N = Ns) par ghoom sakti hai.",
                "hi": "यह सोचना कि नो-लोड पर मोटर सिंक्रोनस गति से घूम सकती है।"
              },
              "correction": {
                "en": "An induction motor can NEVER reach N = Ns! If N = Ns, relative speed between rotor and field is zero; no flux is cut, induced EMF is zero, current is zero, and torque drops to zero. Even under zero external load, friction and windage require a tiny slip (s ≈ 0.005) to keep spinning.",
                "hinglish": "Agar N = Ns ho gaya toh flux cutting band ho jayegi, torque 0 ho jayega aur motor ruk jayegi. No-load par bhi thoda sa slip (0.5%) rehta hai.",
                "hi": "N = Ns पर फ्लक्स कटना बंद हो जाता है और बलाघूर्ण शून्य हो जाता है; अतः N सदैव Ns से कम रहता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u4-l3-p1",
              "question": {
                "en": "What is the magnitude of the resultant Rotating Magnetic Field (RMF) produced by a balanced 3-phase stator in terms of single-phase peak flux Φm?",
                "hinglish": "3-phase stator dwara banaye gaye Rotating Magnetic Field ka magnitude Φm ke terms me kitna hota hai?",
                "hi": "संतुलित तीन-फेज स्टेटर द्वारा उत्पन्न RMF का परिमाण Φm के पदों में क्या होता है?"
              },
              "hint": {
                "en": "It is 1.5 times the maximum flux of one phase.",
                "hinglish": "1.5 guna hota hai.",
                "hi": "1.5 Φm।"
              },
              "explanation": {
                "en": "Mathematical vector addition of three 120° spatial and temporal phases proves that the resultant RMF magnitude is strictly constant and equals 1.5 * Φm (or 3/2 Φm).",
                "hinglish": "Resultant magnetic field hamesha 1.5 Φm ke barabar constant rehta hai.",
                "hi": "परिणामी घूर्णन चुंबकीय क्षेत्र का परिमाण ठीक 1.5 Φm (स्थिर) होता है।"
              },
              "correctAnswer": 2,
              "level": "Beginner",
              "options": [
                "Φm",
                "3.0 Φm",
                "1.5 Φm (or 3/2 Φm)",
                "0.866 Φm"
              ],
              "correctIndex": 2
            }
          ],
          "summary": {
            "en": [
              "3-phase stator currents generate a Rotating Magnetic Field (RMF) of constant magnitude 1.5 Φm.",
              "Synchronous speed is Ns = 120 f / P RPM.",
              "Rotor chases the field at speed N < Ns; slip is s = (Ns - N) / Ns.",
              "Rotor current frequency is fr = s * f (typically 1 to 3 Hz under full load)."
            ],
            "hinglish": [
              "3-phase stator 1.5 Φm magnitude ka ghoomta hua magnetic field (RMF) banata hai.",
              "Synchronous speed Ns = 120 f / P hoti hai.",
              "Rotor N < Ns speed par ghoomta hai; Slip s = (Ns - N) / Ns hota hai.",
              "Rotor current frequency fr = s * f hoti hai."
            ],
            "hi": [
              "तीन-फेज स्टेटर 1.5 Φm का स्थिर घूर्णन क्षेत्र उत्पन्न करता है।",
              "सिंक्रोनस गति Ns = 120 f / P होती है।",
              "रोटर गति सदैव N < Ns होती है; स्लिप s = (Ns - N) / Ns।",
              "रोटर आवृत्ति fr = s f होती है।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u4-l3-q1",
              "question": {
                "en": "What is the value of slip s of an induction motor at the instant of starting when the rotor is at standstill (N = 0)?",
                "hinglish": "Motor shuru hone ke instant par (standstill par jab N = 0 ho) slip s kitna hota hai?",
                "hi": "शुरू होते समय जब रोटर स्थिर हो (N = 0), तब स्लिप s का मान क्या होता है?"
              },
              "options": [
                "0",
                "0.5",
                "1.0",
                "Infinity"
              ],
              "correctIndex": 2,
              "hint": {
                "en": "s = (Ns - N) / Ns. Put N = 0.",
                "hinglish": "N = 0 daalo formula me: s = Ns / Ns = 1.",
                "hi": "s = (Ns - 0)/Ns = 1।"
              },
              "explanation": {
                "en": "At standstill, actual speed N = 0. Substituting into the slip equation gives s = (Ns - 0) / Ns = 1.0 (or 100%).",
                "hinglish": "Standstill par N = 0 hone se slip s = 1.0 (100%) hota hai.",
                "hi": "शुरुआत में N = 0 होने से स्लिप s = 1.0 (100%) होता है।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Operating principles, construction, and mathematical analysis of DC Generators, DC Motors, and Three-Phase Induction Motors. Covers generated EMF equations, back EMF, motor torque equations, speed control methods, DC motor starters, Rotating Magnetic Field (RMF) generation, slip mechanics, and torque-slip characteristics.",
          "hinglish": "Electrical Machines: DC Machines and Induction Motors ka poora one-page revision summary jisme saare core formulas, theorems aur exam problems shamil hain.",
          "hi": "Electrical Machines: DC Machines and Induction Motors का संपूर्ण एक-पृष्ठीय पुनरावलोकन सारांश जिसमें सभी प्रमुख सूत्र और प्रमेय सम्मिलित हैं।"
        },
        "shortNotes": [
          {
            "topic": "Commutator",
            "content": {
              "en": "Mechanical rotary rectifier converting alternating armature EMF into direct current.",
              "hinglish": "Mechanical rotary rectifier converting alternating armature EMF into direct current.",
              "hi": "Mechanical rotary rectifier converting alternating armature EMF into direct current."
            }
          },
          {
            "topic": "Back EMF",
            "content": {
              "en": "Generator voltage induced in a running motor opposing applied terminal voltage.",
              "hinglish": "Generator voltage induced in a running motor opposing applied terminal voltage.",
              "hi": "Generator voltage induced in a running motor opposing applied terminal voltage."
            }
          },
          {
            "topic": "RMF",
            "content": {
              "en": "Magnetic field of constant magnitude (1.5 Φm) rotating at synchronous speed Ns.",
              "hinglish": "Magnetic field of constant magnitude (1.5 Φm) rotating at synchronous speed Ns.",
              "hi": "Magnetic field of constant magnitude (1.5 Φm) rotating at synchronous speed Ns."
            }
          },
          {
            "topic": "Slip",
            "content": {
              "en": "Fractional difference between field synchronous speed and actual rotor speed.",
              "hinglish": "Fractional difference between field synchronous speed and actual rotor speed.",
              "hi": "Fractional difference between field synchronous speed and actual rotor speed."
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "DC Generator EMF",
            "formula": "Eg = (Φ Z N P) / (60 A), where A=P (Lap), A=2 (Wave)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "DC Motor Back EMF",
            "formula": "Eb = V - Ia Ra = (Φ Z N P) / (60 A)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "DC Motor Torque",
            "formula": "Ta = (P Φ Z Ia) / (2π A) ∝ Φ Ia",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "DC Motor Speed",
            "formula": "N ∝ Eb / Φ = (V - Ia Ra) / Φ",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Induction Synchronous Speed",
            "formula": "Ns = 120 f / P",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Induction Slip",
            "formula": "s = (Ns - N) / Ns, fr = s * f",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "RMF Magnitude",
            "formula": "Φ_res = 1.5 Φm (constant)",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          }
        ],
        "mindMap": [
          {
            "node": "Electrical Machines: DC Machines and Induction Motors",
            "children": [
              "DC Machines: Common structural architecture (Yoke, Pole cores, Field coils, Armature core, Commutator, and Brushes)",
              "DC Generator: Operating principle, Fleming’s Right-Hand Rule, Lap winding (A = P) vs Wave winding (A = 2)",
              "Derivation of DC Generator EMF Equation: Eg = (Φ Z N P) / (60 A)",
              "Types of DC Generators: Separately excited, Shunt, Series, and Compound generators",
              "DC Motor: Operating principle, Fleming’s Left-Hand Rule, and Back EMF (Eb = V - Ia Ra)",
              "Significance of Back EMF as a self-regulating electrical governor",
              "DC Motor Torque Equation derivation: Ta = 0.159 Φ Z Ia (P / A) = (P Φ Z Ia) / (2π A)",
              "Speed equation of DC motor: N ∝ (Eb / Φ) and speed control methods (Field flux control vs Armature voltage control)",
              "Need for DC motor starters (3-point starter with No-Volt Coil and Overload Release)",
              "Three-Phase Induction Motor: Construction (Squirrel Cage vs Wound Rotor / Slip Ring)",
              "Principle of Rotating Magnetic Field (RMF): Derivation proving constant magnitude (1.5 Φm) and synchronous speed (Ns = 120 f / P)",
              "Slip concept: Synchronous speed (Ns), actual rotor speed (N), slip s = (Ns - N) / Ns, and rotor frequency fr = s f",
              "Torque-Slip characteristics of three-phase induction motor and starting vs running torque"
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
                "b": "Thinking Lap winding gives high voltage and Wave winding gives high current (it is the reverse!)."
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
                "b": "Starting a large DC motor directly without a starter (causes catastrophic inrush current)."
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "Hand Rules",
            "back": "Generator Right, Motor Left (GR-ML)"
          },
          {
            "front": "Winding Rules",
            "back": "Lap for Lots of Amps (A=P), Wave for Way more Volts (A=2)"
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Why is Back EMF called a self-regulating governor in a DC motor?",
            "answer": "Back EMF Eb is proportional to speed N. When mechanical load increases, the motor slows down slightly; this drops Eb, which automatically allows a larger armature current Ia = (V - Eb) / Ra to flow, producing the exact higher torque needed to balance the load without any external intervention."
          },
          {
            "question": "Why does an induction motor require slip to produce torque?",
            "answer": "Electromagnetic torque is produced by currents induced in rotor bars. These currents are generated only when rotor bars cut the rotating stator magnetic flux lines. If the rotor ran at synchronous speed (N = Ns), relative velocity would be zero, no flux would be cut, induced EMF and rotor currents would become zero, and motor torque would vanish."
          }
        ]
      }
    },
    {
      "id": "beee-u5",
      "unitNumber": "Unit V",
      "title": "Semiconductor Devices and Electrical Installations",
      "description": "P-N junction diode physics, forward and reverse bias V-I characteristics, Zener breakdown, Zener diode as a shunt voltage regulator, half-wave and full-wave rectifiers (center-tapped and bridge), ripple factor, rectifier efficiency, capacitor smoothing filters, electrical switchgear (Fuses, MCB, ELCB/RCCB), earthing and grounding techniques (Pipe and Plate earthing), electric shock safety precautions, and residential electrical energy billing calculations.",
      "topics": [
        "Semiconductor fundamentals: Intrinsic vs extrinsic semiconductors, p-type and n-type doping",
        "P-N Junction Diode: Formation of depletion layer, barrier potential, and forward/reverse bias behavior",
        "Diode V-I characteristic curve, knee voltage, dynamic resistance, and ideal diode model",
        "Zener Diode: Heavy doping, Zener breakdown vs Avalanche breakdown mechanisms",
        "Zener diode operating as a shunt voltage regulator under varying input voltage and load current",
        "Half-Wave Rectifier: Circuit operation, derivation of DC voltage (Vdc = Vm / π), efficiency (40.6%), and ripple factor (1.21)",
        "Full-Wave Rectifier: Center-tapped vs Bridge rectifier, Vdc = 2Vm / π, efficiency (81.2%), and ripple factor (0.482)",
        "Peak Inverse Voltage (PIV) comparison across rectifier topologies",
        "Capacitor filter action: Peak charging, RC discharge, and ripple reduction in DC power supplies",
        "Electrical Switchgear: Rewirable fuses, HRC fuses, and Miniature Circuit Breakers (MCB)",
        "Earth Leakage Protection: Residual Current Circuit Breaker (RCCB / ELCB) operating principle",
        "Electrical Earthing: Purpose of grounding, Equipment vs System earthing, Pipe earthing, and Plate earthing",
        "Electrical safety: Human body resistance, threshold of ventricular fibrillation, and shock prevention",
        "Energy consumption and tariff calculation: Units of electrical energy (1 kWh = 1 Board of Trade Unit)"
      ],
      "lessons": [
        {
          "id": "beee-u5-l1",
          "unitId": "beee-u5",
          "subjectId": "beee",
          "title": "P-N Junction Diodes, V-I Curves & Zener Voltage Regulators",
          "durationMinutes": 35,
          "difficulty": "Beginner",
          "prerequisites": [
            "Basic concept of voltage and current",
            "Atoms and valence electrons"
          ],
          "realLifeQuestion": {
            "en": "Why does electricity flow easily through a semiconductor diode in one direction but get completely blocked in reverse like a one-way turnstile, and how does a Zener diode keep a smartphone’s 5V supply rock-solid even when wall voltage jumps from 180V to 260V?",
            "hinglish": "Diode ek direction me current aasaani se guzarne deta hai par ulti direction me poori tarah block kyu kar deta hai, aur Zener diode wall voltage 180V se 260V fluctuate hone par bhi phone ko exact 5V constant kaise deta hai?",
            "hi": "डायोड केवल एक ही दिशा में धारा प्रवाहित क्यों करता है और जेनर डायोड वोल्टेज के उतार-चढ़ाव में भी स्थिर 5V कैसे प्रदान करता है?"
          },
          "simpleExplanation": {
            "en": "A P-N Junction Diode is the fundamental building block of modern electronics. Joining p-type silicon (rich in positive holes) and n-type silicon (rich in mobile electrons) causes electrons to diffuse across the border, creating a narrow central zone depleted of mobile charge carriers called the Depletion Layer with a built-in Barrier Potential (0.7 V for Silicon, 0.3 V for Germanium). In Forward Bias (P connected to positive battery terminal), the external field overcomes the barrier, permitting huge current to surge. In Reverse Bias (P connected to negative), the depletion layer widens, blocking current except for a microscopic nano-ampere leakage current. A Zener Diode is a specially heavily-doped diode designed to operate safely in the Reverse Breakdown region. Once the reverse voltage hits the Zener Breakdown Voltage (Vz), the voltage across the Zener diode remains rock-solid CONSTANT even as current through it swings wildly, making it the perfect shunt Voltage Regulator.",
            "hinglish": "P-N junction diode modern electronics ki neev hai. P-type (holes) aur N-type (electrons) ke milne par beech me ek Depletion Layer banti hai jiska barrier voltage Silicon ke liye 0.7 V hota hai. Forward Bias me (P ko positive se connect karne par) ye barrier toot jata hai aur current tezi se behti hai. Reverse Bias me (P ko negative se connect karne par) depletion layer aur chaudi ho jati hai aur current block ho jati hai. Zener Diode ek special heavily-doped diode hota hai jo Reverse Breakdown me kaam karta hai. Zener voltage Vz par aane ke baad iske across voltage bilkul CONSTANT rehta hai chahe current kitni bhi badal jaye, isliye ye Voltage Regulator ban kar stable DC supply deta hai.",
            "hi": "P-N संधि डायोड केवल फॉरवर्ड बायस में धारा प्रवाहित करता है (सिलिकॉन हेतु 0.7 V)। रिवर्स बायस में यह धारा रोकता है। जेनर डायोड भारी डोपिंग वाला विशेष डायोड है जो रिवर्स ब्रेकडाउन क्षेत्र में स्थिर वोल्टेज (Vz) प्रदान कर वोल्टेज रेगुलेटर का कार्य करता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "A standard diode is like a swing door with a spring latch that only opens inwards: you can push through forward with gentle force, but pulling backward jams against the frame. A Zener diode is like a pressure-relief safety valve on a pressure cooker: when steam pressure exceeds a preset limit (Vz), the valve pops open and vents all excess pressure into the air, keeping internal pot pressure strictly constant!",
              "hinglish": "Diode ek taraf khulne wale darwaze jaisa hai jo aage dhakka dene par khulta hai par peeche kheenchne par lock ho jata hai. Zener diode pressure cooker ki seeti jaisa hai: jaise hi pressure limit Vz se upar jata hai, seeti uth jati hai aur extra steam bahar nikal kar cooker ke andar ka pressure constant banaye rakhti hai!",
              "hi": "डायोड एकतरफा वाल्व की तरह है। जेनर डायोड प्रेशर कुकर की सीटी की तरह है जो अतिरिक्त दबाव को बाहर निकालकर आंतरिक वोल्टेज को स्थिर रखती है।"
            },
            "limitations": {
              "en": "A cooker whistle resets mechanically; a Zener diode maintains an electronic quantum band-to-band tunneling (Zener breakdown) or impact ionization (Avalanche breakdown) in nanoseconds.",
              "hinglish": "Seeti uthne me time lagta hai, par Zener diode nanoseconds me voltage ko regulate kar deta hai.",
              "hi": "जेनर डायोड नैनोसेकंड में अत्यधिक तेजी से वोल्टेज नियंत्रित करता है।"
            }
          },
          "terminology": [
            {
              "term": "Depletion Layer",
              "definition": {
                "en": "A region around a P-N junction void of free charge carriers, containing uncovered immobile donor and acceptor ions.",
                "hinglish": "P-N junction ke beech ka wo ilaaka jahan free electrons aur holes nahi hote.",
                "hi": "अवक्षय परत: मुक्त आवेश वाहकों से रहित संधि का केंद्रीय क्षेत्र।"
              }
            },
            {
              "term": "Barrier Potential",
              "definition": {
                "en": "Built-in potential difference across the depletion layer (0.7 V for Si, 0.3 V for Ge) that opposes forward carrier diffusion.",
                "hinglish": "Depletion layer ka internal voltage jo current ko rokta hai (Si me 0.7 V).",
                "hi": "प्राचीर विभव: सिलिकॉन हेतु 0.7 V तथा जर्मेनियम हेतु 0.3 V।"
              }
            },
            {
              "term": "Zener Breakdown",
              "definition": {
                "en": "Breakdown occurring in heavily doped diodes at low reverse voltages (< 6 V) due to direct quantum field emission of electrons.",
                "hinglish": "Heavy doping ke karan low voltage (< 6 V) par strong electric field se hone wala breakdown.",
                "hi": "जेनर ब्रेकडाउन: अत्यधिक डोपिंग के कारण तीव्र विद्युत क्षेत्र द्वारा इलेक्ट्रॉनों का उत्सर्जन (< 6 V)।"
              }
            },
            {
              "term": "Avalanche Breakdown",
              "definition": {
                "en": "Breakdown occurring in lightly doped diodes at higher reverse voltages (> 6 V) where accelerated carriers collide and dislodge electrons.",
                "hinglish": "High reverse voltage par collision (takkar) se electrons free hone wala breakdown.",
                "hi": "एवलांच ब्रेकडाउन: उच्च वोल्टेज पर टक्कर आयनीकरण द्वारा होने वाला ब्रेकडाउन (> 6 V)।"
              }
            }
          ],
          "visualType": "semiconductor",
          "visualData": {
            "device": "zener-regulator",
            "vinMin": 15,
            "vinMax": 25,
            "vz": 10,
            "loadResistor": 1000,
            "vout": "Strictly 10 V constant"
          },
          "underlyingPrinciple": {
            "en": "Solid State Band Bending & Quantum Tunneling: In heavily doped junctions (depletion width < 10 nm), the conduction band of the n-side aligns with the valence band of the p-side, allowing electrons to tunnel directly across the forbidden energy gap under reverse bias without thermal damage.",
            "hinglish": "Heavy doping se depletion layer itni patli (10 nm) ho jati hai ki electrons directly quantum tunneling ke zariye barrier paar kar lete hain bina diode jale.",
            "hi": "क्वांटम टनलिंग: अत्यधिक पतली अवक्षय परत होने से इलेक्ट्रॉन सीधे ऊर्जा अंतराल को पार कर जाते हैं।"
          },
          "formulaLogic": {
            "formula": "V_{\\text{out}} = V_Z, \\quad I_S = \\frac{V_{\\text{in}} - V_Z}{R_S}, \\quad I_Z = I_S - I_L = \\frac{V_{\\text{in}} - V_Z}{R_S} - \\frac{V_Z}{R_L}",
            "description": {
              "en": "Zener voltage regulator equations governing input series current, load current, and zener diode current.",
              "hinglish": "Zener regulator circuit me current aur constant output voltage ke formulas.",
              "hi": "जेनर वोल्टेज रेगुलेटर परिपथ के धारा और वोल्टेज सूत्र।"
            },
            "symbols": [
              {
                "symbol": "V_Z",
                "meaning": "Zener breakdown regulated output voltage",
                "unit": "Volts (V)"
              },
              {
                "symbol": "R_S",
                "meaning": "Series current-limiting resistor",
                "unit": "Ohms (Ω)"
              },
              {
                "symbol": "I_Z",
                "meaning": "Current flowing through Zener diode",
                "unit": "Amperes (A)"
              },
              {
                "symbol": "I_L",
                "meaning": "Load current = Vz / RL",
                "unit": "Amperes (A)"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A 10 V Zener diode is used to provide a regulated output from a DC source that varies between 15 V and 20 V. A load resistor RL = 500 Ω is connected across the output, and a series resistor Rs = 100 Ω is used. Calculate (a) Load current IL, (b) Minimum and maximum Zener currents Iz(min) and Iz(max), and (c) Verify that output voltage remains 10 V.",
              "hinglish": "10 V Zener diode, Vin = 15 V se 20 V, RL = 500 Ω, Rs = 100 Ω. Load current IL, Iz(min) aur Iz(max) nikaalo.",
              "hi": "10 V जेनर डायोड, Vin = 15 से 20 V, RL = 500 Ω, Rs = 100 Ω हेतु लोड धारा, न्यूनतम व अधिकतम जेनर धाराएं ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate constant load current IL",
                "explanation": {
                  "en": "The output voltage is clamped at Vz = 10 V. Load current IL = Vz / RL = 10 V / 500 Ω = 0.020 A = 20 mA (strictly constant).",
                  "hinglish": "Output hamesha 10 V rahega. IL = 10 / 500 = 0.02 A = 20 mA.",
                  "hi": "आउटपुट 10 V पर स्थिर है: IL = 10/500 = 20 mA।"
                },
                "math": "I_L = \\frac{V_Z}{R_L} = \\frac{10}{500} = 20\\,\\text{mA}"
              },
              {
                "stepNumber": 2,
                "title": "Calculate minimum Zener current at Vin = 15 V",
                "explanation": {
                  "en": "At minimum input Vin = 15 V: Total series current Is(min) = (Vin(min) - Vz) / Rs = (15 - 10) / 100 = 5 / 100 = 50 mA. Zener current Iz(min) = Is(min) - IL = 50 mA - 20 mA = 30 mA.",
                  "hinglish": "Vin = 15 V par: Is = (15 - 10) / 100 = 50 mA. Iz = 50 - 20 = 30 mA.",
                  "hi": "Vin = 15 V पर: Is = 50 mA; Iz = 50 - 20 = 30 mA।"
                },
                "math": "I_{S,\\text{min}} = \\frac{15 - 10}{100} = 50\\,\\text{mA} \\implies I_{Z,\\text{min}} = 50 - 20 = 30\\,\\text{mA}"
              },
              {
                "stepNumber": 3,
                "title": "Calculate maximum Zener current at Vin = 20 V",
                "explanation": {
                  "en": "At maximum input Vin = 20 V: Total series current Is(max) = (20 - 10) / 100 = 10 / 100 = 100 mA. Zener current Iz(max) = Is(max) - IL = 100 mA - 20 mA = 80 mA. Notice that the extra 50 mA of fluctuating current was harmlessly diverted through the Zener diode while the load received exactly 20 mA at 10 V!",
                  "hinglish": "Vin = 20 V par: Is = (20 - 10) / 100 = 100 mA. Iz = 100 - 20 = 80 mA. Sari extra current Zener diode ne apne andar se nikaal di aur phone ko exact 10 V mila!",
                  "hi": "Vin = 20 V पर: Is = 100 mA; Iz = 100 - 20 = 80 mA। लोड को स्थिर 20 mA मिला।"
                },
                "math": "I_{S,\\text{max}} = \\frac{20 - 10}{100} = 100\\,\\text{mA} \\implies I_{Z,\\text{max}} = 100 - 20 = 80\\,\\text{mA}"
              }
            ],
            "finalAnswer": "Load Current IL = 20 mA, Iz(min) = 30 mA, Iz(max) = 80 mA. Output voltage is clamped at strictly 10 V."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Connecting a Zener diode in forward bias to act as a voltage regulator.",
                "hinglish": "Zener diode ko forward bias me jod kar voltage regulator banana.",
                "hi": "जेनर डायोड को फॉरवर्ड बायस में जोड़ना।"
              },
              "correction": {
                "en": "In forward bias, a Zener diode behaves like an ordinary silicon diode, dropping only 0.7 V! To regulate at its rated breakdown voltage (e.g. 5V, 10V, 12V), a Zener diode MUST always be connected in REVERSE BIAS (cathode to positive rail, anode to ground).",
                "hinglish": "Forward bias me Zener normal diode ki tarah sirf 0.7 V drop karta hai. Regulator banne ke liye use hamesha REVERSE BIAS me connect karna padta hai.",
                "hi": "रेगुलेटर के रूप में कार्य करने हेतु जेनर डायोड को सदैव रिवर्स बायस में जोड़ना अनिवार्य है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u5-l1-p1",
              "question": {
                "en": "What is the barrier potential of a Silicon P-N junction diode at room temperature?",
                "hinglish": "Room temperature par Silicon P-N junction diode ka barrier potential kitna hota hai?",
                "hi": "सामान्य ताप पर सिलिकॉन P-N संधि डायोड का प्राचीर विभव कितना होता है?"
              },
              "hint": {
                "en": "Germanium is 0.3 V; Silicon is higher.",
                "hinglish": "0.7 V hota hai.",
                "hi": "0.7 V।"
              },
              "explanation": {
                "en": "The built-in barrier potential for a Silicon diode at room temperature is approximately 0.7 V (compared to 0.3 V for Germanium).",
                "hinglish": "Silicon ka barrier potential 0.7 V hota hai.",
                "hi": "सिलिकॉन का प्राचीर विभव लगभग 0.7 V होता है।"
              },
              "correctAnswer": 1,
              "level": "Beginner",
              "options": [
                "0.3 V",
                "0.7 V",
                "1.1 V",
                "5.0 V"
              ],
              "correctIndex": 1
            }
          ],
          "summary": {
            "en": [
              "P-N junction conducts heavily in forward bias (> 0.7 V for Si) and blocks in reverse bias.",
              "Zener diodes are heavily doped to operate safely in the reverse breakdown region.",
              "In reverse breakdown, Zener voltage Vz remains constant despite wide variations in current.",
              "Zener shunt regulators maintain constant output voltage under fluctuating inputs and loads."
            ],
            "hinglish": [
              "P-N diode forward bias (> 0.7 V) me current pass karta hai aur reverse me block karta hai.",
              "Zener diode heavy doping ke saath reverse breakdown me safely kaam karta hai.",
              "Reverse breakdown me Zener voltage Vz bilkul constant rehti hai.",
              "Zener regulator input fluctuation hone par bhi load ko steady voltage deta hai."
            ],
            "hi": [
              "P-N डायोड फॉरवर्ड बायस में सुचालक और रिवर्स बायस में अवरोधक होता है।",
              "जेनर डायोड रिवर्स ब्रेकडाउन में स्थिर वोल्टेज Vz बनाए रखता है।",
              "जेनर शंट रेगुलेटर इनपुट के उतार-चढ़ाव में भी स्थिर आउटपुट देता है।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u5-l1-q1",
              "question": {
                "en": "Under which bias condition is a Zener Diode connected in a voltage regulator circuit?",
                "hinglish": "Voltage regulator circuit me Zener Diode kis bias me connect kiya jata hai?",
                "hi": "वोल्टेज रेगुलेटर परिपथ में जेनर डायोड किस बायस में जुड़ा होता है?"
              },
              "options": [
                "Forward Bias",
                "Reverse Bias",
                "Unbiased",
                "Alternating Bias"
              ],
              "correctIndex": 1,
              "hint": {
                "en": "Zener voltage regulation relies on the sharp reverse breakdown knee.",
                "hinglish": "Reverse breakdown me judta hai.",
                "hi": "रिवर्स ब्रेकडाउन।"
              },
              "explanation": {
                "en": "A Zener diode must always be connected in Reverse Bias to exploit its constant reverse breakdown voltage characteristic for voltage regulation.",
                "hinglish": "Zener regulator hamesha Reverse Bias me lagaya jata hai.",
                "hi": "जेनर रेगुलेटर सदैव रिवर्स बायस (Reverse Bias) में संचालित होता है।"
              }
            }
          ]
        },
        {
          "id": "beee-u5-l2",
          "unitId": "beee-u5",
          "subjectId": "beee",
          "title": "Rectifiers (Half-Wave & Bridge), Ripple Factor & Capacitor Filters",
          "durationMinutes": 35,
          "difficulty": "Beginner",
          "prerequisites": [
            "P-N junction diode working",
            "AC sinusoidal waves"
          ],
          "realLifeQuestion": {
            "en": "How does your laptop or TV power adapter transform 230 V AC alternating wall power into clean, steady 19 V DC that sensitive microchips can run on without frying?",
            "hinglish": "Laptop ka charger 230 V AC ko clean, steady 19 V DC me kaise convert karta hai taaki motherboard ke microchips bina jale chal sakein?",
            "hi": "लैपटॉप का एडॉप्टर 230 V AC को स्थिर DC में कैसे परिवर्तित करता है?"
          },
          "simpleExplanation": {
            "en": "Batteries and microchips require Direct Current (DC), but electric utilities transmit Alternating Current (AC). A Rectifier is an electronic circuit that converts bidirectional AC into unidirectional pulsating DC using diodes: (1) Half-Wave Rectifier uses 1 diode; it conducts only during the positive half-cycle and blocks the negative half-cycle, resulting in poor efficiency (η = 40.6%) and massive ripple factor (γ = 1.21). (2) Full-Wave Bridge Rectifier uses 4 diodes in a bridge arrangement; it conducts in BOTH half-cycles (D1-D2 on positive, D3-D4 on negative), delivering twice the average voltage (Vdc = 2Vm / π), double the maximum efficiency (η = 81.2%), and far lower ripple (γ = 0.482). Because pulsating DC still contains significant AC ripples, a large Capacitor Filter is connected across the output in parallel. The capacitor charges to peak voltage Vm and slowly discharges into the load between peaks, smoothing the pulsating hum into a flat, steady DC line.",
            "hinglish": "Microchips ko DC chahiye hoti hai par grid se AC aati hai. Rectifier AC ko DC me convert karta hai: (1) Half-Wave Rectifier me 1 diode hota hai jo sirf aadhe positive cycle me current deta hai aur negative ko kaat deta hai (efficiency sirf 40.6%, ripple factor 1.21). (2) Bridge Rectifier me 4 diodes hote hain jo dono cycles me current pass karte hain (efficiency 81.2%, ripple factor 0.482). Rectifier se aane wali DC aage-peeche jhatke (ripples) leti hai, isliye parallel me Capacitor Filter lagaya jata hai jo peak par charge hokar steady DC output provide karta hai.",
            "hi": "रेक्टिफायर AC को DC में बदलता है। हाफ-वेव रेक्टिफायर की दक्षता 40.6% और ब्रिज रेक्टिफायर की दक्षता 81.2% होती है। कैपेसिटर फिल्टर तरंगों (Ripples) को दबाकर स्थिर DC प्रदान करता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "A half-wave rectifier is like rowing a canoe using only one paddle stroke on the right side and coasting between strokes: you lurch forward, pause, lurch, pause. A full-wave bridge rectifier is like alternating two paddles (left-right-left-right): continuous forward propulsion! A capacitor filter is like adding a heavy flywheel that keeps the boat gliding smoothly through the water without jerkiness.",
              "hinglish": "Half-wave rectifier ek haath se aari chalane jaisa hai: ek jhatka aage, fir pause. Full-wave rectifier do haatho se lagataar paddling karne jaisa hai: lagataar aage badhna. Capacitor filter boat me heavy flywheel jaisa hai jo jhatko ko smooth gliding motion me badal deta hai.",
              "hi": "हाफ-वेव एक झटके से चलने जैसा है; फुल-वेव निरंतर आगे बढ़ने जैसा है और कैपेसिटर फिल्टर गति को पूरी तरह सुगम (smooth) बना देता है।"
            },
            "limitations": {
              "en": "Flywheels store mechanical kinetic energy; capacitors store electrical electrostatic charge (Q = CV) across dielectric plates.",
              "hinglish": "Capacitor electrostatic charge ke roop me energy store karke discharge karta hai.",
              "hi": "कैपेसिटर विद्युत क्षेत्र में आवेश संचित कर लोड को निरंतर धारा देता है।"
            }
          },
          "terminology": [
            {
              "term": "Rectification",
              "definition": {
                "en": "The process of converting alternating bidirectional current (AC) into unidirectional current (DC).",
                "hinglish": "AC ko DC me convert karne ka process.",
                "hi": "दिष्टकरण: AC को DC में बदलने की प्रक्रिया।"
              }
            },
            {
              "term": "Ripple Factor (γ)",
              "definition": {
                "en": "A measure of the residual AC ripple component in the rectifier output: γ = Vac / Vdc = √( (Vrms / Vdc)^2 - 1 ).",
                "hinglish": "DC output me bache hue AC jhatko ka ratio (kam hona chahiye).",
                "hi": "ऊर्मिका गुणांक (Ripple Factor): DC आउटपुट में AC घटक का अनुपात।"
              }
            },
            {
              "term": "Rectification Efficiency (η)",
              "definition": {
                "en": "Ratio of DC power delivered to load to total AC power input from transformer secondary: η = Pdc / Pac.",
                "hinglish": "Load ko mili DC power aur total AC input power ka ratio.",
                "hi": "दिष्टकरण दक्षता: Pdc / Pac।"
              }
            },
            {
              "term": "Peak Inverse Voltage (PIV)",
              "definition": {
                "en": "The maximum reverse voltage a diode must withstand without breaking down (Vm for Bridge, 2Vm for Center-Tapped).",
                "hinglish": "Reverse bias me diode par padne wala maximum voltage jo use jhelna padta hai.",
                "hi": "शिखर प्रतिप वोल्टता (PIV): डायोड द्वारा रिवर्स बायस में सहन किया जाने वाला अधिकतम वोल्टेज।"
              }
            }
          ],
          "visualType": "circuit",
          "visualData": {
            "circuitType": "bridge-rectifier",
            "diodes": 4,
            "acInput": "230 V AC -> 12 V RMS",
            "dcOutput": "15.5 V Peak pulsating DC",
            "filteredDc": "15 V smooth DC with capacitor"
          },
          "underlyingPrinciple": {
            "en": "Fourier Decomposition of Rectified Waveforms: A half-wave rectified wave consists of a DC component (Vm/π), fundamental AC ripple (ω), and higher harmonics. A full-wave bridge wave doubles fundamental ripple frequency to 2ω and quadruples DC energy, slashing ripple factor from 1.21 to 0.482.",
            "hinglish": "Full-wave me frequency 2f (100 Hz) ho jati hai jisse filter karna bohot aasan ho jata hai aur ripple factor 0.482 reh jata hai.",
            "hi": "फुल-वेव में आवृत्ति दोगुनी (2f) होने से फिल्टर करना सुगम होता है तथा ऊर्मिका गुणांक घटकर 0.482 रह जाता है।"
          },
          "formulaLogic": {
            "formula": "\\text{Half-Wave: } V_{\\text{dc}} = \\frac{V_m}{\\pi}, \\ \\eta = 40.6\\%, \\ \\gamma = 1.21 \\quad \\text{Bridge: } V_{\\text{dc}} = \\frac{2V_m}{\\pi}, \\ \\eta = 81.2\\%, \\ \\gamma = 0.482",
            "description": {
              "en": "DC voltage, maximum theoretical efficiency, and ripple factor for Half-Wave and Full-Wave Bridge rectifiers.",
              "hinglish": "Half-wave aur Full-wave Bridge rectifiers ke DC voltage, efficiency aur ripple factor formulas.",
              "hi": "हाफ-वेव और फुल-वेव ब्रिज रेक्टिफायर के सूत्र।"
            },
            "symbols": [
              {
                "symbol": "V_m",
                "meaning": "Peak secondary AC voltage",
                "unit": "Volts (V)"
              },
              {
                "symbol": "V_{\\text{dc}}",
                "meaning": "Average / DC output voltage",
                "unit": "Volts (V)"
              },
              {
                "symbol": "\\gamma",
                "meaning": "Ripple Factor (dimensionless)",
                "unit": "ratio"
              },
              {
                "symbol": "\\eta",
                "meaning": "Rectifier conversion efficiency",
                "unit": "percentage (%)"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A 230 V to 12 V (RMS) step-down transformer feeds a Full-Wave Bridge Rectifier with load RL = 100 Ω. Assuming ideal diodes, calculate: (a) Peak secondary voltage Vm, (b) DC output voltage Vdc, (c) DC load current Idc, and (d) PIV across each diode.",
              "hinglish": "12 V RMS secondary voltage wala transformer Bridge Rectifier aur RL = 100 Ω ko feed karta hai. Vm, Vdc, Idc, aur PIV nikaalo.",
              "hi": "12 V RMS द्वितीयक वोल्टेज वाले ब्रिज रेक्टिफायर और RL = 100 Ω हेतु Vm, Vdc, Idc और PIV ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate peak secondary voltage Vm",
                "explanation": {
                  "en": "Vm = √2 * V_rms = 1.414 * 12 V ≈ 16.97 V.",
                  "hinglish": "Vm = 1.414 * 12 = 16.97 V.",
                  "hi": "शिखर वोल्टेज Vm = √2 × 12 = 16.97 V।"
                },
                "math": "V_m = \\sqrt{2} \\times 12 = 16.97\\,\\text{V}"
              },
              {
                "stepNumber": 2,
                "title": "Compute DC output voltage Vdc",
                "explanation": {
                  "en": "For a full-wave bridge rectifier: Vdc = 2 Vm / π = (2 * 16.97) / 3.1416 = 33.94 / 3.1416 = 10.80 V.",
                  "hinglish": "Vdc = 2 Vm / π = (2 * 16.97) / 3.14 = 10.80 V.",
                  "hi": "Vdc = 2Vm / π = (2 × 16.97)/3.1416 = 10.80 V।"
                },
                "math": "V_{\\text{dc}} = \\frac{2 V_m}{\\pi} = \\frac{2 \\times 16.97}{3.1416} = 10.80\\,\\text{V}"
              },
              {
                "stepNumber": 3,
                "title": "Calculate DC load current Idc and diode PIV",
                "explanation": {
                  "en": "Idc = Vdc / RL = 10.80 V / 100 Ω = 0.108 A = 108 mA. In a bridge rectifier, the Peak Inverse Voltage (PIV) across any non-conducting diode is simply Vm = 16.97 V.",
                  "hinglish": "Idc = 10.80 / 100 = 108 mA. Bridge rectifier me PIV = Vm = 16.97 V.",
                  "hi": "Idc = 10.80/100 = 108 mA; ब्रिज में PIV = Vm = 16.97 V।"
                },
                "math": "I_{\\text{dc}} = \\frac{10.80}{100} = 108\\,\\text{mA}, \\quad \\text{PIV} = V_m = 16.97\\,\\text{V}"
              }
            ],
            "finalAnswer": "Vm = 16.97 V, Vdc = 10.80 V, DC Current = 108 mA, PIV = 16.97 V."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Assuming a Half-Wave Rectifier has an efficiency of 50%.",
                "hinglish": "Half-wave rectifier ki efficiency 50% maanna.",
                "hi": "हाफ-वेव रेक्टिफायर की दक्षता 50% मानना।"
              },
              "correction": {
                "en": "The theoretical maximum efficiency of a Half-Wave Rectifier is strictly 40.6% (0.406), NOT 50%! The remaining 59.4% is lost in AC harmonic ripples and diode resistance. Full-wave reaches 81.2%.",
                "hinglish": "Half-wave ki maximum theoretical efficiency 40.6% hoti hai, 50% nahi! Full-wave ki 81.2% hoti hai.",
                "hi": "हाफ-वेव की अधिकतम सैद्धांतिक दक्षता ठीक 40.6% होती है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u5-l2-p1",
              "question": {
                "en": "What is the ripple frequency in the output of a Full-Wave Bridge Rectifier fed from a 50 Hz AC mains supply?",
                "hinglish": "50 Hz supply se chalne wale Full-Wave Bridge Rectifier ke output me ripple frequency kitni hoti hai?",
                "hi": "50 Hz AC आपूर्ति वाले फुल-वेव ब्रिज रेक्टिफायर के आउटपुट में ऊर्मिका आवृत्ति क्या होगी?"
              },
              "hint": {
                "en": "In full wave, both positive and negative half cycles produce output peaks.",
                "hinglish": "Frequency double ho jati hai: 2 * f.",
                "hi": "आवृत्ति दोगुनी हो जाती है (2f)।"
              },
              "explanation": {
                "en": "Because a full-wave rectifier pulses twice per AC cycle, ripple frequency f_ripple = 2 * f_supply = 2 * 50 Hz = 100 Hz.",
                "hinglish": "Full-wave me frequency 2 * 50 = 100 Hz ho jati hai.",
                "hi": "फुल-वेव में ऊर्मिका आवृत्ति 2 × 50 = 100 Hz होती है।"
              },
              "correctAnswer": 2,
              "level": "Beginner",
              "options": [
                "50 Hz",
                "25 Hz",
                "100 Hz",
                "200 Hz"
              ],
              "correctIndex": 2
            }
          ],
          "summary": {
            "en": [
              "Rectifiers convert AC to pulsating DC (Half-wave uses 1 diode, Bridge uses 4 diodes).",
              "Half-wave efficiency is 40.6% (ripple 1.21); Full-wave efficiency is 81.2% (ripple 0.482).",
              "Bridge rectifier does not require a bulky center-tapped transformer and has PIV = Vm.",
              "Capacitor filters smooth AC ripple pulses into a steady DC voltage line."
            ],
            "hinglish": [
              "Rectifier AC ko DC me badalta hai (Half-wave 1 diode, Bridge 4 diodes).",
              "Half-wave efficiency 40.6% hoti hai, Full-wave efficiency 81.2% hoti hai.",
              "Bridge rectifier me PIV = Vm hota hai aur center-tapped transformer nahi chahiye hota.",
              "Capacitor filter ripples ko khatam karke smooth DC banata hai."
            ],
            "hi": [
              "रेक्टिफायर AC को DC में बदलता है।",
              "हाफ-वेव दक्षता 40.6% तथा फुल-वेव दक्षता 81.2% होती है।",
              "ब्रिज रेक्टिफायर में PIV = Vm होता है।",
              "कैपेसिटर फिल्टर तरंगों को दबाकर स्थिर DC प्रदान करता है।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u5-l2-q1",
              "question": {
                "en": "How many diodes are required to construct a Full-Wave Bridge Rectifier?",
                "hinglish": "Full-Wave Bridge Rectifier banane ke liye kitne diodes lagte hain?",
                "hi": "फुल-वेव ब्रिज रेक्टिफायर के निर्माण हेतु कितने डायोड आवश्यक हैं?"
              },
              "options": [
                "1",
                "2",
                "4",
                "6"
              ],
              "correctIndex": 2,
              "hint": {
                "en": "Formed in a four-arm diamond bridge.",
                "hinglish": "Chaar arms me 4 diodes lagte hain.",
                "hi": "4 डायोड।"
              },
              "explanation": {
                "en": "A standard full-wave bridge rectifier requires 4 diodes configured in a bridge network.",
                "hinglish": "Bridge rectifier me 4 diodes lagte hain.",
                "hi": "ब्रिज रेक्टिफायर में ठीक 4 डायोड प्रयुक्त होते हैं।"
              }
            }
          ]
        },
        {
          "id": "beee-u5-l3",
          "unitId": "beee-u5",
          "subjectId": "beee",
          "title": "Electrical Installations: Fuses, MCB, RCCB, Earthing & Tariff Calculation",
          "durationMinutes": 35,
          "difficulty": "Beginner",
          "prerequisites": [
            "Electric power P = VI",
            "Ohm’s law and circuits"
          ],
          "realLifeQuestion": {
            "en": "Why do modern homes use trip switches (MCB and RCCB) instead of old melting wire fuses, why does touching a live washing machine kill you if the third green earth pin is disconnected, and how do you calculate your monthly electricity bill from meter readings?",
            "hinglish": "Ghar me purane fuse ke badle MCB aur RCCB kyu lagate hain, washing machine me third green earth pin na hone par fatal shock kyu lag sakta hai, aur meter reading se bijli ka bill kaise calculate karte hain?",
            "hi": "फ्यूज के स्थान पर MCB/RCCB क्यों लगाते हैं, अर्थिंग न होने पर झटका क्यों लगता है, और बिजली बिल की गणना कैसे की जाती है?"
          },
          "simpleExplanation": {
            "en": "Electrical safety and protection are paramount in power installations. (1) Fuses contain a low-melting-point alloy wire (lead-tin) that melts and breaks the circuit during extreme overcurrents, but must be replaced each time. (2) Miniature Circuit Breakers (MCB) use thermal bimetallic strips (for sustained overload) and electromagnetic solenoids (for instant short circuits) to trip automatically, reset easily with a flick of a switch. (3) Residual Current Circuit Breakers (RCCB / ELCB) detect tiny leakage currents (as low as 30 mA) escaping through a human body touching a faulty appliance and trip within 30 milliseconds, saving human life from fatal ventricular fibrillation! (4) Earthing connects metallic appliance chassis to physical Earth via Pipe or Plate electrodes buried with salt and charcoal, keeping chassis potential at 0 V. If a live wire touches the metal body, current rushes harmlessly into the earth, tripping the MCB instantly. (5) Electricity Billing is measured in Board of Trade Units: 1 Unit = 1 kiloWatt-hour (1 kWh) = 1000 Watts consumed for 1 hour = 3.6 × 10^6 Joules.",
            "hinglish": "Bijli se suraksha ke teen mukhya pillars hain: (1) Fuse lead-tin taar ka hota hai jo overcurrent par pighal jata hai (par baar-baar badalna padta hai). (2) MCB (Miniature Circuit Breaker) bimetallic strip aur magnetic coil se overload aur short-circuit par trip ho jata hai aur switch utha kar turant reset ho jata hai. (3) RCCB/ELCB human life saver hai: agar washing machine me current leak ho aur insaan use touch kare, toh 30 mA leakage detect karke RCCB 0.03 second me poori power kaat deta hai! (4) Earthing appliance ki metal body ko zameen (Earth 0 V) se jodti hai taaki shock na lage. (5) Bijli ka bill Units me aata hai: 1 Unit = 1 kWh = 1000 W x 1 Hour = 3.6 * 10^6 Joules.",
            "hi": "MCB ओवरलोड और शॉर्ट-सर्किट से बचाता है। RCCB लीकेज करंट (30 mA) पकड़कर मानव जीवन की रक्षा करता है। अर्थिंग धात्विक आवरण को 0 V पर रखती है। 1 यूनिट = 1 kWh = 3.6 × 10^6 जूल।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "A fuse is like an ejector seat in a fighter jet that destroys the canopy when used (one-time emergency). An MCB is like an automotive seatbelt with an automatic inertia lock: it snaps tight during an accident, but unlocks smoothly when tension releases. An RCCB is like an ultra-sensitive heart rate monitor that hits the emergency brakes the instant your heartbeat flutters!",
              "hinglish": "Fuse car ke airbag jaisa hai jo crash hone par fat jata hai aur dubara naya lagana padta hai. MCB seatbelt jaisi hai jo jhatke par lock hoti hai aur baad me aasaani se reset ho jati hai. RCCB ek sensitive heart monitor hai jo halka sa bhi shock lagte hi bijli kaat deta hai.",
              "hi": "फ्यूज एक बार उपयोग होने वाला सुरक्षा घटक है; MCB पुनः रीसेट होने वाली सुरक्षा है तथा RCCB मानवीय जीवन रक्षक स्विच है।"
            },
            "limitations": {
              "en": "Seatbelts hold physical bodies; circuit breakers interrupt electrical current arcs inside deionizing arc chute chambers.",
              "hinglish": "MCB ke andar arc chute chambers hote hain jo dangerous electrical sparks ko turant bujha dete hain.",
              "hi": "MCB के भीतर आर्क श्यूट चैंबर स्पार्किंग को तुरंत शांत कर देते हैं।"
            }
          },
          "terminology": [
            {
              "term": "MCB (Miniature Circuit Breaker)",
              "definition": {
                "en": "An automatic electromagnetic and thermal switch protecting circuits against overloads and short circuits.",
                "hinglish": "Overload aur short-circuit par trip hone wala automatic switch.",
                "hi": "लघु परिपथ विच्छेदक (MCB): स्वचालित सुरक्षा स्विच।"
              }
            },
            {
              "term": "RCCB / ELCB",
              "definition": {
                "en": "Residual Current Circuit Breaker: trips when live and neutral currents differ by > 30 mA, preventing fatal electric shocks.",
                "hinglish": "Human body me leakage current aate hi power kaatne wala life-saving switch.",
                "hi": "अवशिष्ट धारा सर्किट ब्रेकर (RCCB): झटका लगने पर तुरंत विद्युत बंद करने वाला स्विच।"
              }
            },
            {
              "term": "Earthing / Grounding",
              "definition": {
                "en": "Connecting the metallic non-current-carrying frame of electrical appliances to Earth to maintain 0 V potential.",
                "hinglish": "Metal body ko zameen se jodna taaki fault aane par shock na lage.",
                "hi": "भू-संपर्कन (Earthing): सुरक्षा हेतु धात्विक अंगों को पृथ्वी से जोड़ना।"
              }
            },
            {
              "term": "1 Unit of Electricity (1 kWh)",
              "definition": {
                "en": "Electrical energy consumed by a 1000 Watt appliance running for 1 hour: 1 kWh = 3.6 × 10^6 Joules.",
                "hinglish": "1000 W ke device ko 1 ghante chalane par consume hone wali energy (1 Unit).",
                "hi": "1 यूनिट विद्युत: 1 किलोवॉट-घंटा (1 kWh = 3.6 × 10^6 जूल)।"
              }
            }
          ],
          "visualType": "circuit",
          "visualData": {
            "installation": "residential-distribution",
            "mainsVoltage": "230 V AC, 50 Hz",
            "protectionDevices": [
              "Service Fuse",
              "Energy Meter",
              "Main DP MCB",
              "RCCB (30 mA)",
              "Branch SP MCBs (6A, 16A)",
              "Earth Electrode (< 5 Ω)"
            ]
          },
          "underlyingPrinciple": {
            "en": "Differential Current Balancing & Low-Impedance Fault Paths: RCCB runs live and neutral conductors through a toroidal Core Balance Current Transformer (CBCT). Under normal operation, I_live - I_neutral = 0. If current leaks to earth (I_leak > 30 mA), the resultant flux triggers a sensitive relay tripping the contacts in < 30 ms.",
            "hinglish": "RCCB live aur neutral current ka difference dekhta hai. Agar current barabar na ho (leakage ho), toh CBCT coil magnetic trip kar deti hai.",
            "hi": "RCCB फेज और न्यूट्रल धारा के अंतर (I_live - I_neutral > 30 mA) को पहचान कर 30 मिलीसेकंड में परिपथ तोड़ देता है।"
          },
          "formulaLogic": {
            "formula": "\\text{Energy (kWh)} = \\frac{\\text{Power (Watts)} \\times \\text{Time (Hours)}}{1000}, \\quad 1\\,\\text{kWh} = 3.6 \\times 10^6\\,\\text{Joules}",
            "description": {
              "en": "Electrical energy consumption in commercial billing units (kWh).",
              "hinglish": "Bijli ke bill ke units (kWh) aur Joules me conversion ka formula.",
              "hi": "विद्युत ऊर्जा उपभोग (यूनिट) की गणना का सूत्र।"
            },
            "symbols": [
              {
                "symbol": "kWh",
                "meaning": "Kilowatt-hour (Commercial Billing Unit)",
                "unit": "Units"
              },
              {
                "symbol": "Power",
                "meaning": "Electrical wattage rating",
                "unit": "Watts (W)"
              },
              {
                "symbol": "Time",
                "meaning": "Duration of usage",
                "unit": "Hours (h)"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A home runs the following electrical appliances daily: (1) Five 20 W LED lamps for 8 hours, (2) Three 75 W ceiling fans for 12 hours, (3) One 1500 W geyser for 1 hour, and (4) One 250 W refrigerator for 24 hours. Calculate: (a) Total electrical energy consumed in units (kWh) per day, (b) Monthly electricity bill for a 30-day month at a tariff rate of ₹ 6.50 per unit.",
              "hinglish": "Ghar me 5 LED (20W, 8h), 3 Fans (75W, 12h), 1 Geyser (1500W, 1h), aur 1 Fridge (250W, 24h) daily chalte hain. Roz ke units aur ₹ 6.50/unit ke hisaab se 30 din ka bill nikaalo.",
              "hi": "दिए गए उपकरणों के दैनिक उपयोग से 30 दिन का कुल उपभोग (kWh) और ₹ 6.50 की दर से बिल ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate daily energy consumption for each appliance",
                "explanation": {
                  "en": "1. LED lamps: 5 * 20 W * 8 h = 800 Wh.\\n2. Ceiling fans: 3 * 75 W * 12 h = 2700 Wh.\\n3. Water geyser: 1 * 1500 W * 1 h = 1500 Wh.\\n4. Refrigerator: 1 * 250 W * 24 h = 6000 Wh.",
                  "hinglish": "LED = 800 Wh, Fans = 2700 Wh, Geyser = 1500 Wh, Fridge = 6000 Wh.",
                  "hi": "एलईडी = 800 Wh, पंखे = 2700 Wh, गीज़र = 1500 Wh, फ्रिज = 6000 Wh।"
                },
                "math": "\\text{Total Wh/day} = 800 + 2700 + 1500 + 6000 = 11,000\\,\\text{Wh}"
              },
              {
                "stepNumber": 2,
                "title": "Convert to electrical units (kWh per day)",
                "explanation": {
                  "en": "Daily energy in units = 11,000 Wh / 1000 = 11.0 kWh (11 Units per day).",
                  "hinglish": "Daily units = 11,000 / 1000 = 11 Units roz.",
                  "hi": "दैनिक उपभोग = 11,000/1000 = 11 यूनिट प्रतिदिन।"
                },
                "math": "\\text{Daily Units} = \\frac{11000}{1000} = 11.0\\,\\text{kWh/day}"
              },
              {
                "stepNumber": 3,
                "title": "Calculate monthly units and total electricity bill",
                "explanation": {
                  "en": "Monthly Units (30 days) = 11 * 30 = 330 Units. Total electricity bill = 330 units * ₹ 6.50/unit = ₹ 2,145.00.",
                  "hinglish": "Monthly units = 11 * 30 = 330 Units. Bill = 330 * ₹ 6.50 = ₹ 2,145.",
                  "hi": "मासिक यूनिट = 330 यूनिट; कुल बिल = 330 × 6.50 = ₹ 2,145.00।"
                },
                "math": "\\text{Monthly Bill} = 330\\,\\text{Units} \\times \\text{₹ } 6.50 = \\text{₹ } 2145.00"
              }
            ],
            "finalAnswer": "Daily consumption = 11 kWh (units); Monthly consumption = 330 units; Monthly Bill = ₹ 2,145.00."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Assuming an MCB protects humans against deadly electric shocks.",
                "hinglish": "Ye sochna ki MCB insaan ko current lagne se bacha sakti hai.",
                "hi": "यह सोचना कि MCB मनुष्य को बिजली के झटके से बचाती है।"
              },
              "correction": {
                "en": "An MCB is rated for 6A, 16A, or 32A to protect wiring from burning! A fatal electric shock through a human body draws only 0.05 A to 0.1 A (50 to 100 mA), which is 100 times too small to trip an MCB! Only an RCCB / ELCB (rated at 30 mA) trips on human shock currents to save human life.",
                "hinglish": "MCB taaro ko aag lagne se bachati hai (16A/32A). Insaan ko 50 mA par hi maut ho sakti hai jise MCB detect nahi kar sakti. Shock se bachane ke liye sirf RCCB (30 mA) hi kaam aati hai.",
                "hi": "MCB तारों की सुरक्षा (16A/32A) हेतु है। मनुष्य को 50 mA पर घातक झटका लगता है जिसे केवल RCCB (30 mA) रोक सकता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "beee-u5-l3-p1",
              "question": {
                "en": "How many Joules of energy are equivalent to exactly 1 Board of Trade Unit (1 kWh) of electricity?",
                "hinglish": "1 Unit (1 kWh) me kitne Joules energy hoti hai?",
                "hi": "1 यूनिट (1 kWh) में कितने जूल ऊर्जा होती है?"
              },
              "hint": {
                "en": "1000 Watts * 3600 seconds.",
                "hinglish": "1000 * 3600 = 3.6 * 10^6.",
                "hi": "3.6 × 10^6 जूल।"
              },
              "explanation": {
                "en": "1 kWh = 1000 Watts * 3600 seconds = 3,600,000 Joules = 3.6 × 10^6 Joules (or 3.6 MJ).",
                "hinglish": "1 kWh = 3.6 × 10^6 Joules.",
                "hi": "1 kWh = 3.6 × 10^6 जूल।"
              },
              "correctAnswer": 0,
              "level": "Beginner",
              "options": [
                "3.6 × 10^6 Joules (3.6 MJ)",
                "1,000 Joules",
                "60,000 Joules",
                "8.6 × 10^5 Joules"
              ],
              "correctIndex": 0
            }
          ],
          "summary": {
            "en": [
              "MCBs protect wiring from overload and short circuit; RCCBs protect humans from fatal electric shock.",
              "Earthing keeps appliance metal chassis at 0 V potential, directing fault current into the ground.",
              "Pipe and Plate earthing use salt and charcoal to maintain low soil resistance (< 5 Ω).",
              "Commercial electrical energy is billed in units of kWh: 1 Unit = 1 kWh = 3.6 × 10^6 Joules."
            ],
            "hinglish": [
              "MCB taaro ko aag se bachati hai; RCCB insaan ko electric shock se bachata hai.",
              "Earthing metal body ko 0 V par rakhti hai taaki current zameen me chala jaye.",
              "Namak aur koyle (salt & charcoal) se earthing resistance 5 Ω se kam rakhi jaati hai.",
              "Bijli ka 1 Unit = 1 kWh = 3.6 × 10^6 Joules hota hai."
            ],
            "hi": [
              "MCB तारों को और RCCB मनुष्य को सुरक्षा प्रदान करता है।",
              "अर्थिंग उपकरणों के आवरण को 0 V पर रखती है।",
              "नमक व कोयले से भू-प्रतिरोध 5 ओम से कम रखा जाता है।",
              "1 यूनिट = 1 kWh = 3.6 × 10^6 जूल।"
            ]
          },
          "quiz": [
            {
              "id": "beee-u5-l3-q1",
              "question": {
                "en": "What is the maximum permissible earth resistance for a domestic electrical installation according to standard electrical codes?",
                "hinglish": "Ghar ke earthing system ka maximum allowable resistance kitne ohm se kam hona chahiye?",
                "hi": "घरेलू विद्युत अधिष्ठापन हेतु अधिकतम अनुमेय अर्थ प्रतिरोध कितना होना चाहिए?"
              },
              "options": [
                "< 1 to 5 Ω",
                "< 50 Ω",
                "< 100 Ω",
                "< 500 Ω"
              ],
              "correctIndex": 0,
              "hint": {
                "en": "Earth path must have extremely low resistance to ensure rapid MCB tripping.",
                "hinglish": "Resistance bohot kam hona chahiye (1 se 5 ohm ke beech).",
                "hi": "1 से 5 ओम।"
              },
              "explanation": {
                "en": "Standard electrical safety regulations require domestic earth electrode resistance to be under 1 to 5 Ohms to ensure immediate tripping of circuit protective devices during ground faults.",
                "hinglish": "Domestic earthing resistance hamesha 1 se 5 Ω ke andar honi chahiye.",
                "hi": "घरेलू अर्थिंग का प्रतिरोध 1 से 5 ओम से कम होना अनिवार्य है।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "P-N junction diode physics, forward and reverse bias V-I characteristics, Zener breakdown, Zener diode as a shunt voltage regulator, half-wave and full-wave rectifiers (center-tapped and bridge), ripple factor, rectifier efficiency, capacitor smoothing filters, electrical switchgear (Fuses, MCB, ELCB/RCCB), earthing and grounding techniques (Pipe and Plate earthing), electric shock safety precautions, and residential electrical energy billing calculations.",
          "hinglish": "Semiconductor Devices and Electrical Installations ka poora one-page revision summary jisme saare core formulas, theorems aur exam problems shamil hain.",
          "hi": "Semiconductor Devices and Electrical Installations का संपूर्ण एक-पृष्ठीय पुनरावलोकन सारांश जिसमें सभी प्रमुख सूत्र और प्रमेय सम्मिलित हैं।"
        },
        "shortNotes": [
          {
            "topic": "Zener Diode",
            "content": {
              "en": "Heavily doped diode operating in reverse breakdown to regulate voltage.",
              "hinglish": "Heavily doped diode operating in reverse breakdown to regulate voltage.",
              "hi": "Heavily doped diode operating in reverse breakdown to regulate voltage."
            }
          },
          {
            "topic": "Rectifier",
            "content": {
              "en": "Electronic circuit converting alternating bidirectional AC into unidirectional DC.",
              "hinglish": "Electronic circuit converting alternating bidirectional AC into unidirectional DC.",
              "hi": "Electronic circuit converting alternating bidirectional AC into unidirectional DC."
            }
          },
          {
            "topic": "MCB",
            "content": {
              "en": "Automatic electromagnetic and thermal switch protecting wiring against overcurrent.",
              "hinglish": "Automatic electromagnetic and thermal switch protecting wiring against overcurrent.",
              "hi": "Automatic electromagnetic and thermal switch protecting wiring against overcurrent."
            }
          },
          {
            "topic": "RCCB",
            "content": {
              "en": "Safety device detecting residual differential leakage current (> 30 mA) to prevent electrocution.",
              "hinglish": "Safety device detecting residual differential leakage current (> 30 mA) to prevent electrocution.",
              "hi": "Safety device detecting residual differential leakage current (> 30 mA) to prevent electrocution."
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Barrier Potential",
            "formula": "Silicon = 0.7 V, Germanium = 0.3 V",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Zener Regulator",
            "formula": "Vout = Vz, Is = (Vin - Vz) / Rs, Iz = Is - IL",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Half-Wave",
            "formula": "Vdc = Vm / π, η = 40.6%, γ = 1.21, PIV = Vm",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Full-Wave Bridge",
            "formula": "Vdc = 2Vm / π, η = 81.2%, γ = 0.482, PIV = Vm",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Electrical Energy",
            "formula": "Units (kWh) = (Watts * Hours) / 1000",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          },
          {
            "name": "Energy Equivalence",
            "formula": "1 kWh = 3.6 × 10^6 Joules",
            "units": "Standard SI",
            "note": "Essential for university exam problems"
          }
        ],
        "mindMap": [
          {
            "node": "Semiconductor Devices and Electrical Installations",
            "children": [
              "Semiconductor fundamentals: Intrinsic vs extrinsic semiconductors, p-type and n-type doping",
              "P-N Junction Diode: Formation of depletion layer, barrier potential, and forward/reverse bias behavior",
              "Diode V-I characteristic curve, knee voltage, dynamic resistance, and ideal diode model",
              "Zener Diode: Heavy doping, Zener breakdown vs Avalanche breakdown mechanisms",
              "Zener diode operating as a shunt voltage regulator under varying input voltage and load current",
              "Half-Wave Rectifier: Circuit operation, derivation of DC voltage (Vdc = Vm / π), efficiency (40.6%), and ripple factor (1.21)",
              "Full-Wave Rectifier: Center-tapped vs Bridge rectifier, Vdc = 2Vm / π, efficiency (81.2%), and ripple factor (0.482)",
              "Peak Inverse Voltage (PIV) comparison across rectifier topologies",
              "Capacitor filter action: Peak charging, RC discharge, and ripple reduction in DC power supplies",
              "Electrical Switchgear: Rewirable fuses, HRC fuses, and Miniature Circuit Breakers (MCB)",
              "Earth Leakage Protection: Residual Current Circuit Breaker (RCCB / ELCB) operating principle",
              "Electrical Earthing: Purpose of grounding, Equipment vs System earthing, Pipe earthing, and Plate earthing",
              "Electrical safety: Human body resistance, threshold of ventricular fibrillation, and shock prevention",
              "Energy consumption and tariff calculation: Units of electrical energy (1 kWh = 1 Board of Trade Unit)"
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
                "b": "Connecting a Zener diode in forward bias when designing a voltage regulator (must be reverse bias)."
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
                "b": "Thinking an MCB will protect a person from fatal electric shock (only an RCCB protects humans)."
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "Diode Forward Knee",
            "back": "Silicon Seven-tenths (0.7 V), Germanium Three-tenths (0.3 V)"
          },
          {
            "front": "Protection Hierarchy",
            "back": "Fuse Melts, MCB Trips Wiring, RCCB Saves Life (FM-TW-SL)"
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "What is the operational difference between an MCB and an RCCB?",
            "answer": "An MCB (Miniature Circuit Breaker) is designed to protect electrical wiring and equipment from sustained overloads and high-current short circuits (rated at 6A, 16A, 32A). An RCCB (Residual Current Circuit Breaker) is designed to protect human life from electrocution by detecting tiny leakage currents (typically 30 mA) flowing to ground through a person's body, tripping in under 30 milliseconds."
          },
          {
            "question": "Why is a Bridge Rectifier preferred over a Center-Tapped Full-Wave Rectifier?",
            "answer": "A Bridge Rectifier does not require a bulky, expensive center-tapped transformer, requires half the Peak Inverse Voltage rating per diode (PIV = Vm instead of 2Vm), and is more compact and economical for modern power supplies."
          }
        ]
      }
    }
  ],
  "examQuestions": [
    {
      "id": "beee-eq1",
      "unitNumber": "Unit I",
      "type": "Long",
      "question": "State Thevenin’s Theorem. For the circuit shown with a 30 V source in series with 6 Ω, in parallel with a 12 Ω resistor, connected to a load RL = 4 Ω, find the Thevenin equivalent circuit and compute the load current.",
      "solution": "1. Thevenin’s Theorem: Any linear two-terminal DC network can be replaced by an equivalent circuit consisting of an independent voltage source Vth in series with an equivalent resistance Rth.\n2. Calculate Vth (Open Circuit Voltage across 12 Ω): Vth = 30 * [12 / (6 + 12)] = 30 * (12/18) = 20 V.\n3. Calculate Rth (Short 30 V source): Looking into terminals, the 6 Ω and 12 Ω resistors are in parallel: Rth = (6 * 12) / (6 + 12) = 72 / 18 = 4 Ω.\n4. Connect load RL = 4 Ω: Thevenin circuit consists of Vth = 20 V in series with Rth = 4 Ω and RL = 4 Ω.\n5. Load Current: IL = Vth / (Rth + RL) = 20 / (4 + 4) = 20 / 8 = 2.5 A.",
      "marks": 10
    },
    {
      "id": "beee-eq2",
      "unitNumber": "Unit I",
      "type": "Numerical",
      "question": "State the Maximum Power Transfer Theorem for DC circuits. For an internal source with Vth = 24 V and Rth = 6 Ω, find the value of RL for maximum power transfer and the maximum power delivered.",
      "solution": "1. Theorem Statement: Maximum power is transferred from a DC network to a load resistor when the load resistance equals the Thevenin equivalent resistance of the network: RL = Rth.\n2. Condition: RL = Rth = 6 Ω.\n3. Maximum Power Formula: Pmax = Vth^2 / (4 * Rth) = (24)^2 / (4 * 6) = 576 / 24 = 24 Watts.\n4. Verification: IL = 24 / (6 + 6) = 2 A. P_load = I^2 * RL = (2)^2 * 6 = 24 W.",
      "marks": 10
    },
    {
      "id": "beee-eq3",
      "unitNumber": "Unit II",
      "type": "Long",
      "question": "A series RLC circuit with R = 5 Ω, L = 0.05 H, and C = 50 µF is connected across a 230 V, 50 Hz AC supply. Calculate: (a) Inductive reactance XL, (b) Capacitive reactance XC, (c) Total impedance Z, (d) Current I, (e) Power factor cos φ, and (f) Active power consumed P.",
      "solution": "1. XL = 2π f L = 2 * 3.1416 * 50 * 0.05 = 15.71 Ω.\n2. XC = 1 / (2π f C) = 1 / (2 * 3.1416 * 50 * 50 * 10^-6) = 1 / (0.015708) = 63.66 Ω.\n3. Net Reactance X = XL - XC = 15.71 - 63.66 = -47.95 Ω (Capacitive).\n4. Impedance Z = √(R^2 + X^2) = √(5^2 + (-47.95)^2) = √(25 + 2299.2) = √2324.2 ≈ 48.21 Ω.\n5. Current I = V / Z = 230 / 48.21 = 4.77 A.\n6. Power factor cos φ = R / Z = 5 / 48.21 = 0.1037 leading (current leads voltage because XC > XL).\n7. Active Power P = V * I * cos φ = 230 * 4.77 * 0.1037 = 113.78 Watts (or I^2 * R = 4.77^2 * 5 = 113.76 W).",
      "marks": 10
    },
    {
      "id": "beee-eq4",
      "unitNumber": "Unit II",
      "type": "Long",
      "question": "Derive the relationship between line voltage and phase voltage, and line current and phase current in a balanced three-phase Star (Y) connected system. Draw the complete phasor diagram.",
      "solution": "1. Star Connection Geometry: Three identical phase windings (R, Y, B) meet at a common Neutral (N). Line terminals are R, Y, B.\n2. Line Currents: Each line conductor is in direct series with its corresponding phase winding: IL = Iph.\n3. Line Voltages as Phasor Differences:\nV_RY = V_RN - V_YN = V_RN + (-V_YN)\nV_YB = V_YN - V_BN = V_YN + (-V_BN)\nV_BR = V_BN - V_RN = V_BN + (-V_RN)\n4. Phasor Geometry: V_RN and V_YN are equal in magnitude (|Vph|) and separated by 120°. Reversing V_YN gives -V_YN, which is separated from V_RN by 60°.\n5. Resultant magnitude via parallelogram law: |V_RY| = √( Vph^2 + Vph^2 + 2 Vph Vph cos(60°) ) = √( 2 Vph^2 + 2 Vph^2 * 0.5 ) = √( 3 Vph^2 ) = √3 Vph.\n6. Conclusion: Line Voltage VL = √3 Vph, leading Phase Voltage by 30°. Line Current IL = Iph.",
      "marks": 10
    },
    {
      "id": "beee-eq5",
      "unitNumber": "Unit III",
      "type": "Long",
      "question": "A 20 kVA, 2000 / 200 V, 50 Hz single-phase transformer gave the following test results: OC Test (LV side): 200 V, 4 A, 120 W; SC Test (HV side): 60 V, 10 A, 300 W. Calculate the efficiency of the transformer at full load and half load at 0.8 power factor lagging.",
      "solution": "1. Extract Losses from Tests:\n- Iron Loss Pi = W0 = 120 W (from OC test at rated voltage).\n- Full-load Copper Loss Pcu = (Rated I_HV / I_SC)^2 * Wsc. Rated I_HV = 20,000 / 2000 = 10 A. Since SC test was done at rated 10 A, Full-load Copper Loss Pcu = Wsc = 300 W.\n2. Full-Load (x = 1.0, cos φ = 0.8):\n- Output = 1.0 * 20,000 * 0.8 = 16,000 W.\n- Total Losses = Pi + Pcu = 120 + 300 = 420 W.\n- Efficiency η_FL = [16,000 / (16,000 + 420)] * 100 = (16,000 / 16,420) * 100 = 97.44%.\n3. Half-Load (x = 0.5, cos φ = 0.8):\n- Output = 0.5 * 20,000 * 0.8 = 8,000 W.\n- Copper loss at half load = (0.5)^2 * 300 = 0.25 * 300 = 75 W.\n- Total Losses = Pi + 75 = 120 + 75 = 195 W.\n- Efficiency η_HL = [8,000 / (8,000 + 195)] * 100 = (8,000 / 8,195) * 100 = 97.62%.",
      "marks": 10
    },
    {
      "id": "beee-eq6",
      "unitNumber": "Unit IV",
      "type": "Long",
      "question": "Explain the working principle of a DC motor. Derive the expression for the armature torque developed in a DC motor: Ta = (P Φ Z Ia) / (2π A).",
      "solution": "1. Working Principle: When current-carrying conductors are placed in a magnetic field, they experience a mechanical force given by Lorentz force F = B I L and Fleming’s Left-Hand Rule, creating a rotational torque.\n2. Let: P = number of poles, Φ = flux/pole, Z = total conductors, A = parallel paths, Ia = armature current, r = armature radius, L = active length.\n3. Current per conductor: Ic = Ia / A.\n4. Force on each conductor: F = B * Ic * L = B * (Ia / A) * L.\n5. Average flux density: B = (P * Φ) / (2π r L).\n6. Substitute B into force: F = [ (P Φ) / (2π r L) ] * (Ia / A) * L = (P Φ Ia) / (2π r A).\n7. Torque on single conductor: T1 = F * r = (P Φ Ia) / (2π A).\n8. Total Armature Torque for Z conductors: Ta = Z * T1 = (P Φ Z Ia) / (2π A) N·m = 0.159 (P / A) Φ Z Ia N·m.",
      "marks": 10
    },
    {
      "id": "beee-eq7",
      "unitNumber": "Unit IV",
      "type": "Long",
      "question": "A 4-pole, 50 Hz, 3-phase induction motor has a synchronous speed Ns and runs at 1440 RPM at full load. Calculate: (a) Synchronous speed Ns, (b) Full-load slip s, (c) Frequency of rotor induced EMF, and (d) Rotor speed at a slip of 2%.",
      "solution": "1. Synchronous speed: Ns = (120 * f) / P = (120 * 50) / 4 = 6000 / 4 = 1500 RPM.\n2. Full-load slip: s = (Ns - N) / Ns = (1500 - 1440) / 1500 = 60 / 1500 = 0.04 (4.0%).\n3. Rotor frequency: fr = s * f = 0.04 * 50 Hz = 2.0 Hz.\n4. Rotor speed at s = 0.02 (2%): N = Ns * (1 - s) = 1500 * (1 - 0.02) = 1500 * 0.98 = 1470 RPM.",
      "marks": 10
    },
    {
      "id": "beee-eq8",
      "unitNumber": "Unit V",
      "type": "Long",
      "question": "Explain the working of a Full-Wave Bridge Rectifier with a circuit diagram. Derive expressions for DC output voltage Vdc, rectification efficiency η, and ripple factor γ.",
      "solution": "1. Bridge Circuit Description: Four diodes D1, D2, D3, D4 connected in a bridge mesh across transformer secondary and load RL.\n2. Operation: During positive half cycle, D1 and D2 conduct; during negative half cycle, D3 and D4 conduct. Load current flows in the same direction in both half cycles.\n3. DC Output Voltage: Vdc = (1/π) ∫0^π Vm sin θ dθ = (Vm/π) [-cos θ]_0^π = 2Vm / π ≈ 0.637 Vm.\n4. RMS Output Voltage: Vrms = √( (1/π) ∫0^π (Vm sin θ)^2 dθ ) = Vm / √2 ≈ 0.707 Vm.\n5. Rectification Efficiency: η = Pdc / Pac = (Idc^2 RL) / (Irms^2 RL) = ( (2Im/π)^2 ) / ( (Im/√2)^2 ) = 8 / π^2 = 81.2%.\n6. Ripple Factor: γ = √( (Vrms / Vdc)^2 - 1 ) = √( ( (Vm/√2) / (2Vm/π) )^2 - 1 ) = √( (π / 2√2)^2 - 1 ) = √(1.11^2 - 1) = √(1.2321 - 1) = √0.2321 ≈ 0.482.",
      "marks": 10
    }
  ]
};
