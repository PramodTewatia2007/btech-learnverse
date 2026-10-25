import { Subject } from '../types';

export const MATHEMATICS_SUBJECT: Subject = {
  "id": "mathematics",
  "title": "Mathematics",
  "category": "Theory",
  "description": "Master first-year engineering mathematics from scratch: Differential & Integral Calculus, Sequences & Fourier Series, Complex Variables & Residues, Vector Spaces & Linear Algebra, and Matrix Eigen-systems with step-by-step proofs and interactive graphing tools.",
  "icon": "Sigma",
  "color": "from-amber-600 to-orange-700",
  "isOfficial": true,
  "syllabusSource": "Official University Syllabus (B.Tech 1st Year)",
  "unitsCount": 5,
  "units": [
    {
      "id": "math-u1",
      "unitNumber": "Unit I",
      "title": "Calculus",
      "description": "Evolutes and involutes, definite and improper integrals, Beta and Gamma functions, surface areas and volumes of revolutions, Rolle’s theorem, Mean Value Theorems, Taylor’s & Maclaurin’s theorems with remainders, indeterminate forms & L’Hôpital’s rule, maxima and minima.",
      "topics": [
        "Evolutes and involutes: Geometric definition, center of curvature, and envelope of normals",
        "Evaluation of definite and improper integrals (convergence criteria)",
        "Beta and Gamma functions and their fundamental algebraic properties",
        "Applications of definite integrals to evaluate surface areas and volumes of revolutions",
        "Rolle’s Theorem: Conditions and geometric interpretation",
        "Mean Value Theorems: Lagrange’s MVT and Cauchy’s MVT",
        "Taylor’s and Maclaurin’s theorems with Lagrange’s and Cauchy’s form of remainders",
        "Indeterminate forms (0/0, ∞/∞, 0·∞, ∞-∞, 1^∞, 0^0, ∞^0) and L’Hôpital’s rule",
        "Maxima and minima of single and multivariable functions"
      ],
      "lessons": [
        {
          "id": "math-u1-l1",
          "unitId": "math-u1",
          "subjectId": "mathematics",
          "title": "Mean Value Theorems, Taylor’s Theorem & Calculus Applications",
          "durationMinutes": 30,
          "difficulty": "Beginner",
          "prerequisites": [
            "Functions and continuity",
            "Derivatives and definite integrals"
          ],
          "realLifeQuestion": {
            "en": "If you enter a highway toll plaza at 2:00 PM and exit 100 km away at 3:00 PM, how does a radar mathematically prove you exceeded an 80 km/h speed limit at some instant without ever taking a radar snapshot of your car speeding?",
            "hinglish": "Agar aapne highway par 100 km ki doori 1 ghante me cover ki, toh police bina radar photo liye mathematically kaise prove kar sakti hai ki aapne 80 km/h speed limit zaroor todi thi?",
            "hi": "यदि आपने 100 किमी की दूरी 1 घंटे में तय की, तो पुलिस बिना रडार फोटो के गणितीय रूप से कैसे सिद्ध कर सकती है कि आपने गति सीमा का उल्लंघन किया था?"
          },
          "simpleExplanation": {
            "en": "This is the Lagrange Mean Value Theorem (LMVT)! If your journey function is continuous and smooth, your instantaneous speed (derivative f'(c)) at some exact moment must equal your overall average speed: [f(b) - f(a)] / (b - a). Because your average speed was 100 km/h, your speedometer needle physically crossed at least 100 km/h at some time c between 2:00 PM and 3:00 PM, proving you violated the 80 km/h limit!",
            "hinglish": "Yehi Lagrange Mean Value Theorem (LMVT) hai! Agar graph smooth aur continuous hai, toh instantaneous slope f'(c) endpoints ko jodne wali secant line ke slope ke barabar zaroor hoga. Average speed 100 km/h thi, isliye speedometer ne 100 km/h touch kiya tha.",
            "hi": "यह लैग्रेंज माध्य मान प्रमेय (LMVT) है। इसके अनुसार किसी बिंदु पर तात्क्षणिक चाल औसत चाल (100 किमी/घंटा) के ठीक बराबर होगी।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine hiking over a smooth rolling mountain between two rest huts. At some point along the curved ridge, the slope of your walking path is exactly parallel to the straight line joining the two huts.",
              "hinglish": "Do pahadi huts ke beech chalte waqt kam se kam ek point aisa aayega jahan raste ka slope dono huts ko jodne wali seedhi line ke parallel hoga.",
              "hi": "दो चोटियों के मध्य वक्र पथ पर कम से कम एक बिंदु ऐसा होता है जहाँ ढलान दोनों चोटियों को जोड़ने वाली रेखा के समानांतर होती है।"
            },
            "limitations": {
              "en": "If the mountain has a sharp cliff corner (like |x| at x = 0) or an abrupt chasm (discontinuity), differentiability fails and the theorem does not apply.",
              "hinglish": "Agar raste me koi sharp corner ya discontinuity ho toh theorem fail ho jata hai.",
              "hi": "यदि फलन अवकलनीय न हो या उसमें तीक्ष्ण मोड़ हो तो प्रमेय लागू नहीं होता।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "Let f: [a, b] → ℝ be continuous on [a, b] and differentiable on (a, b). Then there exists at least one point c ∈ (a, b) such that f'(c) = [f(b) - f(a)] / (b - a). Taylor's theorem expands this: f(b) = f(a) + f'(a)(b-a) + ... + [f^(n-1)(a)/(n-1)!](b-a)^(n-1) + R_n, where R_n = [f^(n)(c)/n!](b-a)^n (Lagrange remainder).",
              "hinglish": "Agar f(x) [a, b] me continuous aur (a, b) me differentiable hai, toh kam se kam ek point c aisa milega jahan f'(c) = [f(b) - f(a)] / (b - a).",
              "hi": "यदि f(x) संवृत अंतराल [a, b] में सतत तथा विवृत अंतराल (a, b) में अवकलनीय है, तो (a, b) में कम से कम एक बिंदु c ऐसा अस्तित्व में होगा कि f'(c) = [f(b) - f(a)] / (b - a)।"
            },
            "keyTerms": [
              {
                "term": "Secant Chord",
                "definition": {
                  "en": "The straight line segment connecting the two endpoints (a, f(a)) and (b, f(b)) of a curve.",
                  "hinglish": "Curve ke dono endpoints ko jodne wali seedhi line.",
                  "hi": "वक्र के दोनों अंतिम बिंदुओं को जोड़ने वाली सरल रेखा।"
                }
              },
              {
                "term": "Lagrange Remainder Rn",
                "definition": {
                  "en": "The exact truncation error when approximating a function by its nth-degree Taylor polynomial.",
                  "hinglish": "Taylor polynomial se function approximate karte waqt bacha hua exact error term.",
                  "hi": "टेलर बहुपद द्वारा सन्निकटन में उत्पन्न यथार्थ त्रुटि पद।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "f'(c) = \\frac{f(b) - f(a)}{b - a}, \\quad c \\in (a, b)",
            "symbolMeaning": [
              "f'(c): Tangent slope at intermediate point c",
              "f(b) - f(a): Total vertical change over the interval",
              "b - a: Total horizontal distance of the interval"
            ],
            "units": "Dimensionless or [y-units / x-units]",
            "assumptions": [
              "f(x) must be continuous everywhere on the closed interval [a, b]",
              "f(x) must be differentiable at every point in the open interval (a, b)"
            ],
            "derivation": [
              "Define auxiliary function: φ(x) = f(x) - f(a) - A(x - a), where A = [f(b) - f(a)] / (b - a).",
              "Notice that φ(a) = 0 and φ(b) = 0.",
              "Since f is continuous on [a, b] and differentiable on (a, b), φ(x) satisfies all conditions of Rolle’s Theorem on [a, b].",
              "By Rolle’s Theorem, there exists c ∈ (a, b) such that φ’(c) = 0.",
              "Computing derivative: φ’(c) = f’(c) - A = 0  =>  f’(c) = A = [f(b) - f(a)] / (b - a)."
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Verify Lagrange’s Mean Value Theorem for f(x) = x³ - x on the interval [0, 2] and find the exact value of c.",
              "hinglish": "Verify Lagrange’s Mean Value Theorem for f(x) = x³ - x on the interval [0, 2] and find the exact value of c.",
              "hi": "Verify Lagrange’s Mean Value Theorem for f(x) = x³ - x on the interval [0, 2] and find the exact value of c."
            },
            "given": [
              "f(x) = x³ - x",
              "Interval: a = 0, b = 2"
            ],
            "toFind": "Value of c ∈ (0, 2) where f’(c) = [f(2) - f(0)] / (2 - 0)",
            "formulaUsed": "f'(c) = \\frac{f(b) - f(a)}{b - a}",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Check continuity and differentiability",
                "explanation": {
                  "en": "f(x) is a polynomial, so it is continuous everywhere on [0, 2] and differentiable on (0, 2). LMVT is applicable.",
                  "hinglish": "f(x) is a polynomial, so it is continuous everywhere on [0, 2] and differentiable on (0, 2). LMVT is applicable.",
                  "hi": "f(x) is a polynomial, so it is continuous everywhere on [0, 2] and differentiable on (0, 2). LMVT is applicable."
                },
                "math": "f(x) \\text{ is continuous on } [0, 2] \\text{ and differentiable on } (0, 2)"
              },
              {
                "stepNumber": 2,
                "title": "Evaluate endpoint function values",
                "explanation": {
                  "en": "Calculate f(a) and f(b).",
                  "hinglish": "Calculate f(a) and f(b).",
                  "hi": "Calculate f(a) and f(b)."
                },
                "math": "f(0) = 0^3 - 0 = 0, \\quad f(2) = 2^3 - 2 = 8 - 2 = 6"
              },
              {
                "stepNumber": 3,
                "title": "Compute average rate of change (secant slope)",
                "explanation": {
                  "en": "Divide vertical change by interval width.",
                  "hinglish": "Divide vertical change by interval width.",
                  "hi": "Divide vertical change by interval width."
                },
                "math": "\\frac{f(2) - f(0)}{2 - 0} = \\frac{6 - 0}{2} = 3"
              },
              {
                "stepNumber": 4,
                "title": "Find derivative f’(x) and set equal to average slope",
                "explanation": {
                  "en": "Differentiate f(x) and solve for c.",
                  "hinglish": "Differentiate f(x) and solve for c.",
                  "hi": "Differentiate f(x) and solve for c."
                },
                "math": "f'(x) = 3x^2 - 1 \\implies 3c^2 - 1 = 3 \\implies 3c^2 = 4 \\implies c^2 = 4/3 \\implies c = \\frac{2}{\\sqrt{3}} \\approx 1.155"
              }
            ],
            "finalAnswer": "c = 2/√3 ≈ 1.155 (which lies strictly inside the open interval (0, 2))"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Assuming LMVT holds for functions with sharp turns like f(x) = |x| on [-1, 1].",
                "hinglish": "|x| jaise sharp turn wale functions par LMVT directly laga dena.",
                "hi": "|x| जैसे तीक्ष्ण मोड़ों वाले फलनों पर LMVT सीधे लागू मान लेना।"
              },
              "correction": {
                "en": "f(x) = |x| is not differentiable at x = 0. LMVT strictly requires differentiability throughout the open interval.",
                "hinglish": "x = 0 par |x| differentiable nahi hota, isliye LMVT apply nahi ho sakta.",
                "hi": "x = 0 पर फलन अवकलनीय नहीं है, अतः प्रमेय की शर्तें पूरी नहीं होतीं।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u1-p1",
              "level": "Beginner",
              "question": {
                "en": "For f(x) = x² on [1, 3], what is the value of c guaranteed by the Mean Value Theorem?",
                "hinglish": "f(x) = x² ke liye [1, 3] interval par LMVT se milne wala c kya hoga?",
                "hi": "f(x) = x² के लिए अंतराल [1, 3] पर माध्य मान प्रमेय द्वारा प्राप्त c का मान क्या है?"
              },
              "options": [
                "c = 2.0",
                "c = 1.5",
                "c = 2.5",
                "c = √3"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "Secant slope = (3² - 1²) / (3 - 1) = (9 - 1)/2 = 4. f’(x) = 2x. Setting 2c = 4 gives c = 2.0, which lies in (1, 3).",
                "hinglish": "Secant slope = (9-1)/2 = 4. Derivative 2c = 4, toh c = 2.",
                "hi": "औसत ढलान (9-1)/2 = 4 है। 2c = 4 से c = 2 प्राप्त होता है।"
              },
              "hint": {
                "en": "Calculate [f(3) - f(1)] / (3 - 1) and set it equal to 2c.",
                "hinglish": "[f(3) - f(1)] / 2 ko 2c ke barabar rakhein.",
                "hi": "[f(3) - f(1)] / (3 - 1) की गणना करें और 2c के बराबर रखें।"
              }
            }
          ],
          "summary": {
            "en": [
              "Rolle’s Theorem requires f(a) = f(b) and guarantees a point with horizontal tangent f’(c) = 0.",
              "Lagrange’s MVT generalizes Rolle’s Theorem to tilted secant lines: f’(c) = [f(b) - f(a)] / (b - a).",
              "Taylor’s Theorem with Lagrange remainder expresses any smooth function as a polynomial plus an exact error term.",
              "Indeterminate forms 0/0 and ∞/∞ are resolved by L’Hôpital’s rule: lim f(x)/g(x) = lim f’(x)/g’(x)."
            ],
            "hinglish": [
              "Rolle theorem me f(a) = f(b) hota hai toh horizontal tangent f’(c) = 0 milti hai.",
              "Lagrange MVT tilted secant line ke parallel tangent point c deta hai.",
              "Taylor polynomial function ko polynomials me expand karta hai with remainder Rn.",
              "L’Hopital rule 0/0 aur inf/inf forms me numerator aur denominator ko alag-alag differentiate karta hai."
            ],
            "hi": [
              "रोल प्रमेय के अनुसार यदि f(a) = f(b) हो तो f’(c) = 0 होता है।",
              "लैग्रेंज प्रमेय के अनुसार स्पर्श रेखा की ढलान छेदक रेखा की ढलान के बराबर होती है।",
              "टेलर प्रमेय फलन को बहुपद और शेषफल के रूप में व्यक्त करता है।",
              "लॉपीटल नियम 0/0 तथा ∞/∞ रूपों के सीमा मान ज्ञात करने हेतु प्रयुक्त होता है।"
            ]
          },
          "quiz": [
            {
              "id": "math-u1-q1",
              "question": {
                "en": "Which condition is NOT required for Rolle’s Theorem to hold on [a, b]?",
                "hinglish": "Rolle’s Theorem ke liye inme se konsi condition zaroori NAHI hai?",
                "hi": "रोल प्रमेय के लिए निम्नलिखित में से कौन सी शर्त आवश्यक नहीं है?"
              },
              "options": [
                "f(x) must be continuous on [a, b]",
                "f(x) must be differentiable on (a, b)",
                "f(a) must equal f(b)",
                "f''(x) must be strictly positive on (a, b)"
              ],
              "correctIndex": 3,
              "explanation": {
                "en": "Second derivative positivity (concavity) is never required for Rolle’s theorem.",
                "hinglish": "f''(x) strictly positive hona zaroori nahi hai.",
                "hi": "द्वितीय अवकलज का धनात्मक होना रोल प्रमेय की शर्त नहीं है।"
              },
              "hint": {
                "en": "Remember the 3 fundamental requirements: continuity on [a,b], differentiability on (a,b), and equal endpoints.",
                "hinglish": "3 main conditions yaad karein: continuous [a,b], differentiable (a,b), aur f(a) = f(b).",
                "hi": "तीन मुख्य शर्तें याद रखें: सातत्य, अवकलनीयता, और f(a) = f(b)।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "Let f: [a, b] → ℝ be continuous on [a, b] and differentiable on (a, b). Then there exists at least one point c ∈ (a, b) such that f'(c) = [f(b) - f(a)] / (b - a). Taylor's theorem expands this: f(b) = f(a) + f'(a)(b-a) + ... + [f^(n-1)(a)/(n-1)!](b-a)^(n-1) + R_n, where R_n = [f^(n)(c)/n!](b-a)^n (Lagrange remainder).",
            "hinglish": "Agar f(x) [a, b] me continuous aur (a, b) me differentiable hai, toh kam se kam ek point c aisa milega jahan f'(c) = [f(b) - f(a)] / (b - a).",
            "hi": "यदि f(x) संवृत अंतराल [a, b] में सतत तथा विवृत अंतराल (a, b) में अवकलनीय है, तो (a, b) में कम से कम एक बिंदु c ऐसा अस्तित्व में होगा कि f'(c) = [f(b) - f(a)] / (b - a)।"
          },
          "terminology": [
            {
              "term": "Secant Chord",
              "definition": {
                "en": "The straight line segment connecting the two endpoints (a, f(a)) and (b, f(b)) of a curve.",
                "hinglish": "Curve ke dono endpoints ko jodne wali seedhi line.",
                "hi": "वक्र के दोनों अंतिम बिंदुओं को जोड़ने वाली सरल रेखा।"
              }
            },
            {
              "term": "Lagrange Remainder Rn",
              "definition": {
                "en": "The exact truncation error when approximating a function by its nth-degree Taylor polynomial.",
                "hinglish": "Taylor polynomial se function approximate karte waqt bacha hua exact error term.",
                "hi": "टेलर बहुपद द्वारा सन्निकटन में उत्पन्न यथार्थ त्रुटि पद।"
              }
            }
          ]
        },
        {
          "id": "math-u1-l2",
          "unitId": "math-u1",
          "subjectId": "mathematics",
          "title": "Evolutes, Involutes, Tangents, and Maxima/Minima",
          "durationMinutes": 30,
          "difficulty": "Intermediate",
          "prerequisites": [
            "First and second derivatives",
            "Parametric equations"
          ],
          "realLifeQuestion": {
            "en": "Why are gear teeth in high-speed mechanical gearboxes machined strictly into \"involute\" curves rather than simple circular arcs?",
            "hinglish": "High-speed gearboxes ke gear teeth simple circle ke bajaye \"involute\" shape me kyu banaye jaate hain?",
            "hi": "गियर बॉक्स के दांतों को वृत्त के बजाय इनवॉल्यूट वक्र के आकार में क्यों काटा जाता है?"
          },
          "simpleExplanation": {
            "en": "When gear teeth have an involute profile, the point of contact between two meshing teeth always travels along a single straight line called the line of action! This guarantees that the velocity ratio remains perfectly constant, eliminating tooth chatter, friction wear, and mechanical vibration even if the center distance between gears changes slightly.",
            "hinglish": "Jab gear teeth involute profile ke hote hain, toh dono teeth ka contact point hamesha ek straight line par move karta hai. Isse angular velocity ratio perfectly constant rehta hai aur gears smoothly bina vibration ke rotate karte hain.",
            "hi": "इनवॉल्यूट गियर प्रोफाइल में संपर्क बिंदु सदैव एक सरल रेखा में गति करता है, जिससे कोणीय वेग अनुपात पूर्णतः स्थिर रहता है और घर्षण न्यूनतम होता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine tightly winding a piece of string around a circular cylinder. If you unwrap the string while keeping it completely taut, the path traced by the free end of the string is an Involute! The cylinder boundary from which the string unwinds is its Evolute.",
              "hinglish": "Ek cylinder par dhaaga lapet kar use tana hua kholte waqt dhaage ke aakhri sire se banne wala path Involute kehlata hai, aur cylinder khud Evolute hai.",
              "hi": "किसी बेलन से तने हुए धागे को खोलते समय धागे के सिरे द्वारा अनुरेखित पथ इनवॉल्यूट कहलाता है।"
            },
            "limitations": {
              "en": "If the string goes slack, the generated curve deviates from a true mathematical involute.",
              "hinglish": "Agar dhaaga dheela pad jaye toh true involute nahi banta.",
              "hi": "यदि धागा ढीला हो जाए तो यथार्थ इनवॉल्यूट प्राप्त नहीं होता।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "The locus of the centers of curvature of all points on a curve C is called its Evolute. Conversely, the curve C is called an Involute of its evolute. The center of curvature (α, β) is given by α = x - [y1(1+y1²)]/y2 and β = y + (1+y1²)/y2, where y1 = dy/dx and y2 = d²y/dx².",
              "hinglish": "Kissi curve ke sabhi points ke centers of curvature ka locus Evolute kehlata hai. Aur curve khud apne evolute ka Involute hota hai.",
              "hi": "किसी वक्र के सभी बिंदुओं के वक्रता केंद्रों का बिंदु पथ उसका इवोल्यूट कहलाता है तथा मूल वक्र उसका इनवॉल्यूट होता है।"
            },
            "keyTerms": [
              {
                "term": "Radius of Curvature (ρ)",
                "definition": {
                  "en": "The radius of the circular arc that best approximates the curve at a given point: ρ = (1 + y1²)^(3/2) / |y2|.",
                  "hinglish": "Curve ko best fit karne wale osculating circle ka radius.",
                  "hi": "दिए गए बिंदु पर वक्र को सबसे सटीक रूप से स्पर्श करने वाले वृत्त की त्रिज्या।"
                }
              },
              {
                "term": "Envelope of Normals",
                "definition": {
                  "en": "The evolute of a curve is identical to the envelope formed by all the normal lines drawn to the curve.",
                  "hinglish": "Curve par kheenche gaye sabhi normals ka envelope hi uska evolute hota hai.",
                  "hi": "वक्र के सभी अभिलंबों का आवरण उसका इवोल्यूट होता है।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "\\rho = \\frac{(1 + y_1^2)^{3/2}}{|y_2|}, \\quad \\alpha = x - \\frac{y_1(1 + y_1^2)}{y_2}, \\quad \\beta = y + \\frac{1 + y_1^2}{y_2}",
            "symbolMeaning": [
              "ρ: Radius of curvature",
              "y1: First derivative dy/dx (tangent slope)",
              "y2: Second derivative d²y/dx² (curvature rate)",
              "(α, β): Coordinates of center of curvature"
            ],
            "units": "Length units [meters or cm]",
            "assumptions": [
              "y2 = d²y/dx² must not be zero (points of inflection are excluded)"
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Find the radius of curvature ρ and coordinates of center of curvature for parabola y² = 4ax at vertex (0, 0).",
              "hinglish": "Find the radius of curvature ρ and coordinates of center of curvature for parabola y² = 4ax at vertex (0, 0).",
              "hi": "Find the radius of curvature ρ and coordinates of center of curvature for parabola y² = 4ax at vertex (0, 0)."
            },
            "given": [
              "Parabola equation: y² = 4ax",
              "Vertex coordinates: (0, 0)"
            ],
            "toFind": "Radius of curvature ρ and center of curvature (α, β) at (0, 0)",
            "formulaUsed": "\\rho = \\frac{(1 + (dx/dy)^2)^{3/2}}{|d^2x/dy^2|}",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Express x as function of y to avoid vertical tangent",
                "explanation": {
                  "en": "At vertex (0,0), tangent is vertical, so dy/dx → ∞. Instead consider x = y² / (4a).",
                  "hinglish": "At vertex (0,0), tangent is vertical, so dy/dx → ∞. Instead consider x = y² / (4a).",
                  "hi": "At vertex (0,0), tangent is vertical, so dy/dx → ∞. Instead consider x = y² / (4a)."
                },
                "math": "x = \\frac{y^2}{4a}"
              },
              {
                "stepNumber": 2,
                "title": "Compute first and second derivatives with respect to y",
                "explanation": {
                  "en": "Differentiate with respect to y.",
                  "hinglish": "Differentiate with respect to y.",
                  "hi": "Differentiate with respect to y."
                },
                "math": "\\frac{dx}{dy} = \\frac{y}{2a}, \\quad \\frac{d^2x}{dy^2} = \\frac{1}{2a}"
              },
              {
                "stepNumber": 3,
                "title": "Evaluate at vertex y = 0",
                "explanation": {
                  "en": "Substitute y = 0.",
                  "hinglish": "Substitute y = 0.",
                  "hi": "Substitute y = 0."
                },
                "math": "\\left.\\frac{dx}{dy}\\right|_{y=0} = 0, \\quad \\left.\\frac{d^2x}{dy^2}\\right|_{y=0} = \\frac{1}{2a}"
              },
              {
                "stepNumber": 4,
                "title": "Calculate radius of curvature",
                "explanation": {
                  "en": "Substitute into reciprocal curvature formula.",
                  "hinglish": "Substitute into reciprocal curvature formula.",
                  "hi": "Substitute into reciprocal curvature formula."
                },
                "math": "\\rho = \\frac{(1 + 0)^{3/2}}{1/(2a)} = 2a"
              }
            ],
            "finalAnswer": "Radius of curvature ρ = 2a, Center of curvature = (2a, 0)"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Computing dy/dx at the vertex of y² = 4ax directly without accounting for vertical slope.",
                "hinglish": "Vertex par dy/dx calculate karke division by zero kar dena.",
                "hi": "शीर्ष पर dy/dx निकालने का प्रयास करना जहां ढलान अनंत होता है।"
              },
              "correction": {
                "en": "Invert variables when tangent is vertical and calculate dx/dy and d²x/dy².",
                "hinglish": "Jab tangent vertical ho toh dx/dy use karein.",
                "hi": "ऊर्ध्वाधर स्पर्श रेखा होने पर x को y के सापेक्ष अवकलित करें।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u1-p2",
              "level": "Intermediate",
              "question": {
                "en": "What is the radius of curvature for a circle of radius R at any point on its circumference?",
                "hinglish": "Radius R ke circle par kissi bhi point par radius of curvature kya hota hai?",
                "hi": "R त्रिज्या के वृत्त के किसी भी बिंदु पर वक्रता त्रिज्या क्या होती है?"
              },
              "options": [
                "R",
                "2R",
                "R / 2",
                "0"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "A circle has constant curvature everywhere, so its radius of curvature is identically equal to R.",
                "hinglish": "Circle ka curvature constant hota hai, isliye radius of curvature R hi hota hai.",
                "hi": "वृत्त की वक्रता सर्वत्र समान होने के कारण वक्रता त्रिज्या R होती है।"
              },
              "hint": {
                "en": "The osculating circle of a circle is the circle itself.",
                "hinglish": "Circle ka osculating circle wo khud hi hota hai.",
                "hi": "वृत्त का स्पर्शी वृत्त वह स्वयं होता है।"
              }
            }
          ],
          "summary": {
            "en": [
              "The evolute is both the locus of centers of curvature and the envelope of all normals to the curve.",
              "The involute is traced by unwinding a taut string from the evolute.",
              "Radius of curvature ρ = (1 + y1²)^(3/2) / |y2| measures how sharply a curve bends."
            ],
            "hinglish": [
              "Evolute centers of curvature ka locus aur normals ka envelope hota hai.",
              "Involute taut string unwinding se banta hai.",
              "Radius of curvature rho = (1 + y1^2)^(3/2) / |y2| bending rate batata hai."
            ],
            "hi": [
              "इवोल्यूट वक्रता केंद्रों का बिंदु पथ तथा अभिलंबों का आवरण होता है।",
              "इनवॉल्यूट धागे को खोलने पर अनुरेखित पथ है।",
              "वक्रता त्रिज्या वक्र के मुड़ने की दर को मापती है।"
            ]
          },
          "quiz": [
            {
              "id": "math-u1-q2",
              "question": {
                "en": "If a curve has dy/dx = 0 and d²y/dx² = -4 at point (1, 5), what does this point represent?",
                "hinglish": "Agar point (1, 5) par dy/dx = 0 aur d²y/dx² = -4 ho, toh yeh point kya darshata hai?",
                "hi": "यदि बिंदु (1, 5) पर dy/dx = 0 तथा d²y/dx² = -4 हो, तो यह बिंदु क्या निरूपित करता है?"
              },
              "options": [
                "Local Maximum",
                "Local Minimum",
                "Point of Inflection",
                "Saddle Point"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "Zero first derivative and negative second derivative confirms a local maximum.",
                "hinglish": "First derivative zero aur second derivative negative hona local maximum darshata hai.",
                "hi": "प्रथम अवकलज शून्य तथा द्वितीय अवकलज ऋणात्मक होना स्थानीय उच्चिष्ठ दर्शाता है।"
              },
              "hint": {
                "en": "Remember second derivative test: negative means concave downward like a hilltop.",
                "hinglish": "Negative second derivative matlab hill top (maximum).",
                "hi": "ऋणात्मक मान उच्चिष्ठ को दर्शाता है।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "The locus of the centers of curvature of all points on a curve C is called its Evolute. Conversely, the curve C is called an Involute of its evolute. The center of curvature (α, β) is given by α = x - [y1(1+y1²)]/y2 and β = y + (1+y1²)/y2, where y1 = dy/dx and y2 = d²y/dx².",
            "hinglish": "Kissi curve ke sabhi points ke centers of curvature ka locus Evolute kehlata hai. Aur curve khud apne evolute ka Involute hota hai.",
            "hi": "किसी वक्र के सभी बिंदुओं के वक्रता केंद्रों का बिंदु पथ उसका इवोल्यूट कहलाता है तथा मूल वक्र उसका इनवॉल्यूट होता है।"
          },
          "terminology": [
            {
              "term": "Radius of Curvature (ρ)",
              "definition": {
                "en": "The radius of the circular arc that best approximates the curve at a given point: ρ = (1 + y1²)^(3/2) / |y2|.",
                "hinglish": "Curve ko best fit karne wale osculating circle ka radius.",
                "hi": "दिए गए बिंदु पर वक्र को सबसे सटीक रूप से स्पर्श करने वाले वृत्त की त्रिज्या।"
              }
            },
            {
              "term": "Envelope of Normals",
              "definition": {
                "en": "The evolute of a curve is identical to the envelope formed by all the normal lines drawn to the curve.",
                "hinglish": "Curve par kheenche gaye sabhi normals ka envelope hi uska evolute hota hai.",
                "hi": "वक्र के सभी अभिलंबों का आवरण उसका इवोल्यूट होता है।"
              }
            }
          ]
        },
        {
          "id": "math-u1-l3",
          "unitId": "math-u1",
          "subjectId": "mathematics",
          "title": "Beta, Gamma Functions & Solids of Revolution",
          "durationMinutes": 30,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Definite integration",
            "Integration by parts"
          ],
          "realLifeQuestion": {
            "en": "How do NASA aerospace engineers calculate the exact fuel tank volume and outer skin surface area of a curved rocket nose cone?",
            "hinglish": "Rocket ke curved nose cone ka exact fuel volume aur surface area mathematically kaise calculate hota hai?",
            "hi": "रॉकेट के वक्राकार शंकु का आंतरिक आयतन तथा धातु की चादर का पृष्ठीय क्षेत्रफल कैसे ज्ञात किया जाता है?"
          },
          "simpleExplanation": {
            "en": "By rotating a 2D curve y = f(x) around the x-axis, we sweep out a 3D Solid of Revolution! Integrating circular cross-sectional disks gives volume V = π ∫ y² dx, and integrating thin ribbons gives surface area S = 2π ∫ y √(1 + (dy/dx)²) dx.",
            "hinglish": "Jab hum 2D curve y = f(x) ko x-axis ke around 360 degree ghumate hain, toh 3D Solid of Revolution banta hai. Disks ko jodkar Volume aur ribbons ko jodkar Surface Area milta hai.",
            "hi": "2D वक्र को अक्ष के परितः घुमाने पर घूर्णन ठोस प्राप्त होता है। वृत्तीय चकत्तियों के समाकलन से आयतन तथा वलयों से पृष्ठीय क्षेत्रफल प्राप्त होता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of a potter’s wheel: a potter shapes clay by spinning it. The 2D outline of the potter’s hand sweeps out a 3D vase.",
              "hinglish": "Kumhar ke chaak ki tarah: 2D outline ghumte hue clay ko 3D matke ka shape deta hai.",
              "hi": "कुम्हार के चाक की भांति जहां 2D हाथ का वक्र घूमकर 3D पात्र बनाता है।"
            },
            "limitations": {
              "en": "The object must possess rotational symmetry around the axis of revolution.",
              "hinglish": "Object ka axis ke around symmetric hona zaroori hai.",
              "hi": "पिंड का घूर्णन अक्ष के परितः सममित होना आवश्यक है।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "The Gamma function is Γ(n) = ∫₀^∞ x^(n-1) e^(-x) dx (n > 0), satisfying Γ(n+1) = n Γ(n). The Beta function is B(m, n) = ∫₀¹ x^(m-1) (1-x)^(n-1) dx = [Γ(m)Γ(n)] / Γ(m+n). Volume of revolution about x-axis: V = π ∫_a^b y² dx.",
              "hinglish": "Gamma function factorials ka continuous version hai: Gamma(n+1) = n!. Beta aur Gamma relationship: B(m, n) = Gamma(m)Gamma(n)/Gamma(m+n).",
              "hi": "गामा फलन क्रमगुणित का सतत विस्तार है। बीटा और गामा फलन का संबंध B(m, n) = Γ(m)Γ(n)/Γ(m+n) होता है।"
            },
            "keyTerms": [
              {
                "term": "Gamma(1/2)",
                "definition": {
                  "en": "The special value Γ(1/2) = √π, fundamental to Gaussian integrals in physics.",
                  "hinglish": "Gamma(1/2) ki value √π hoti hai jo Gaussian integrals me use hoti hai.",
                  "hi": "गामा(1/2) का मान √π होता है जो गॉसियन समाकलनों का आधार है।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "B(m, n) = \\frac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m + n)}, \\quad V = \\pi \\int_a^b y^2 \\, dx, \\quad S = 2\\pi \\int_a^b y \\sqrt{1 + (y')^2} \\, dx",
            "symbolMeaning": [
              "B(m, n): Beta function of arguments m and n",
              "Γ(n): Gamma function of argument n",
              "V: Volume of solid of revolution",
              "S: Curved surface area of solid of revolution"
            ],
            "units": "V in [units³], S in [units²]",
            "assumptions": [
              "m > 0 and n > 0 for convergence of Beta and Gamma integrals",
              "Curve does not cross the axis of revolution"
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Evaluate I = ∫₀^(π/2) sin⁴(θ) cos⁶(θ) dθ using Beta and Gamma functions.",
              "hinglish": "Evaluate I = ∫₀^(π/2) sin⁴(θ) cos⁶(θ) dθ using Beta and Gamma functions.",
              "hi": "Evaluate I = ∫₀^(π/2) sin⁴(θ) cos⁶(θ) dθ using Beta and Gamma functions."
            },
            "given": [
              "Integrand: sin⁴(θ) cos⁶(θ)",
              "Limits: 0 to π/2"
            ],
            "toFind": "Value of integral I",
            "formulaUsed": "\\int_0^{\\pi/2} \\sin^{2m-1}(\\theta) \\cos^{2n-1}(\\theta) \\, d\\theta = \\frac{\\Gamma(m)\\Gamma(n)}{2\\Gamma(m + n)}",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Determine m and n parameters",
                "explanation": {
                  "en": "2m - 1 = 4 => m = 5/2. 2n - 1 = 6 => n = 7/2.",
                  "hinglish": "2m - 1 = 4 => m = 5/2. 2n - 1 = 6 => n = 7/2.",
                  "hi": "2m - 1 = 4 => m = 5/2. 2n - 1 = 6 => n = 7/2."
                },
                "math": "m = 5/2, \\quad n = 7/2"
              },
              {
                "stepNumber": 2,
                "title": "Express in terms of Gamma functions",
                "explanation": {
                  "en": "Apply Beta-Gamma transformation.",
                  "hinglish": "Apply Beta-Gamma transformation.",
                  "hi": "Apply Beta-Gamma transformation."
                },
                "math": "I = \\frac{\\Gamma(5/2)\\Gamma(7/2)}{2\\Gamma(6)}"
              },
              {
                "stepNumber": 3,
                "title": "Evaluate Gamma values",
                "explanation": {
                  "en": "Γ(5/2) = (3/4)√π, Γ(7/2) = (15/8)√π, Γ(6) = 120.",
                  "hinglish": "Γ(5/2) = (3/4)√π, Γ(7/2) = (15/8)√π, Γ(6) = 120.",
                  "hi": "Γ(5/2) = (3/4)√π, Γ(7/2) = (15/8)√π, Γ(6) = 120."
                },
                "math": "\\Gamma(5/2) = \\frac{3\\sqrt{\\pi}}{4}, \\quad \\Gamma(7/2) = \\frac{15\\sqrt{\\pi}}{8}, \\quad \\Gamma(6) = 120"
              },
              {
                "stepNumber": 4,
                "title": "Multiply and simplify",
                "explanation": {
                  "en": "Combine quotient.",
                  "hinglish": "Combine quotient.",
                  "hi": "Combine quotient."
                },
                "math": "I = \\frac{(3\\sqrt{\\pi}/4)(15\\sqrt{\\pi}/8)}{240} = \\frac{45\\pi / 32}{240} = \\frac{3\\pi}{512}"
              }
            ],
            "finalAnswer": "I = 3π / 512"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Equating Γ(n) to n! directly for integers without subtracting 1.",
                "hinglish": "Γ(n) ko seedha n! maan lena jabki Γ(n) = (n-1)! hota hai.",
                "hi": "Γ(n) को सीधे n! मान लेना जबकि Γ(n) = (n-1)! होता है।"
              },
              "correction": {
                "en": "Remember Γ(n) = (n - 1)! for positive integers. For example, Γ(4) = 3! = 6.",
                "hinglish": "Integer n ke liye Γ(n) = (n - 1)! hota hai.",
                "hi": "पूर्णांक n हेतु Γ(n) = (n - 1)! होता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u1-p3",
              "level": "Intermediate",
              "question": {
                "en": "What is the volume of a sphere of radius R obtained by rotating semicircle y = √(R² - x²) about the x-axis?",
                "hinglish": "y = √(R² - x²) ko rotate karne par sphere ka volume kya hota hai?",
                "hi": "अर्धवृत्त y = √(R² - x²) को घुमाने पर प्राप्त गोले का आयतन क्या होगा?"
              },
              "options": [
                "(4/3) π R³",
                "2 π R³",
                "(2/3) π R³",
                "π R³"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "V = π ∫_{-R}^R (R² - x²) dx = 4/3 π R³.",
                "hinglish": "V = 4/3 π R³ formula integrate karne se milta hai.",
                "hi": "समाकलन द्वारा गोले का आयतन (4/3) π R³ प्राप्त होता है।"
              },
              "hint": {
                "en": "Integrate π (R² - x²) dx between -R and R.",
                "hinglish": "π (R² - x²) dx ka integral nikalein.",
                "hi": "-R से R तक π (R² - x²) dx का समाकलन करें।"
              }
            }
          ],
          "summary": {
            "en": [
              "Beta and Gamma functions simplify complex definite integrals into algebraic factorial computations.",
              "Key relation: B(m, n) = Γ(m)Γ(n) / Γ(m+n) and Γ(1/2) = √π.",
              "Volume of revolution about the x-axis: V = π ∫ y² dx."
            ],
            "hinglish": [
              "Beta aur Gamma functions tough definite integrals ko factorial arithmetic me convert kar dete hain.",
              "Relation: B(m, n) = Γ(m)Γ(n) / Γ(m+n) aur Γ(1/2) = √π.",
              "Solid of revolution ka volume: V = π ∫ y² dx."
            ],
            "hi": [
              "बीटा और गामा फलन जटिल समाकलनों को सरल क्रमगुणित गणनाओं में बदल देते हैं।",
              "मुख्य सूत्र: B(m, n) = Γ(m)Γ(n) / Γ(m+n) तथा Γ(1/2) = √π।",
              "घूर्णन ठोस का आयतन: V = π ∫ y² dx।"
            ]
          },
          "quiz": [
            {
              "id": "math-u1-q3",
              "question": {
                "en": "What is the numerical value of Γ(7/2)?",
                "hinglish": "Γ(7/2) ka numerical value kya hoga?",
                "hi": "Γ(7/2) का संख्यात्मक मान क्या होगा?"
              },
              "options": [
                "15√π / 8",
                "3√π / 4",
                "5√π / 2",
                "105√π / 16"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "Γ(7/2) = (5/2)(3/2)(1/2) Γ(1/2) = 15√π / 8.",
                "hinglish": "Γ(7/2) = (5/2)*(3/2)*(1/2)*√π = 15√π / 8.",
                "hi": "क्रमिक घटाव से Γ(7/2) = 15√π / 8 प्राप्त होता है।"
              },
              "hint": {
                "en": "Use recursive formula Γ(n) = (n - 1) Γ(n - 1) until reaching Γ(1/2) = √π.",
                "hinglish": "Γ(n) = (n-1)Γ(n-1) lagate hue Γ(1/2) = √π tak jayein.",
                "hi": "Γ(1/2) = √π तक पहुंचने के लिए पुनरावृत्ति सूत्र का प्रयोग करें।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "The Gamma function is Γ(n) = ∫₀^∞ x^(n-1) e^(-x) dx (n > 0), satisfying Γ(n+1) = n Γ(n). The Beta function is B(m, n) = ∫₀¹ x^(m-1) (1-x)^(n-1) dx = [Γ(m)Γ(n)] / Γ(m+n). Volume of revolution about x-axis: V = π ∫_a^b y² dx.",
            "hinglish": "Gamma function factorials ka continuous version hai: Gamma(n+1) = n!. Beta aur Gamma relationship: B(m, n) = Gamma(m)Gamma(n)/Gamma(m+n).",
            "hi": "गामा फलन क्रमगुणित का सतत विस्तार है। बीटा और गामा फलन का संबंध B(m, n) = Γ(m)Γ(n)/Γ(m+n) होता है।"
          },
          "terminology": [
            {
              "term": "Gamma(1/2)",
              "definition": {
                "en": "The special value Γ(1/2) = √π, fundamental to Gaussian integrals in physics.",
                "hinglish": "Gamma(1/2) ki value √π hoti hai jo Gaussian integrals me use hoti hai.",
                "hi": "गामा(1/2) का मान √π होता है जो गॉसियन समाकलनों का आधार है।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Unit I covers single-variable calculus: Rolle’s theorem and LMVT establishing conditions where instantaneous rates equal average rates; Taylor’s and Maclaurin’s theorems with Lagrange remainders providing polynomial function approximations; L’Hôpital’s rule resolving indeterminate limits; Curvature, evolutes (locus of centers of curvature) and involutes; Beta/Gamma functions; and volumes/surface areas of revolution.",
          "hinglish": "Unit I Calculus ka core hai: Rolle aur LMVT instantaneous aur average slope ko link karte hain; Taylor polynomial functions ko approximate karta hai; L’Hopital 0/0 limits solve karta hai; Evolutes aur Involutes curvature explain karte hain; Beta-Gamma functions complex integrals solve karte hain.",
          "hi": "इकाई 1 कलन के मूलभूत सिद्धांतों को समाहित करती है: रोल तथा लैग्रेंज प्रमेय, टेलर तथा मैकलॉरिन प्रमेय, लॉपीटल नियम, वक्रता, इवोल्यूट, इनवॉल्यूट, बीटा तथा गामा फलन, एवं घूर्णन ठोसों के आयतन व पृष्ठीय क्षेत्रफल।"
        },
        "shortNotes": [
          {
            "topic": "Rolle’s Theorem",
            "content": {
              "en": "If f continuous on [a, b], diff on (a, b), and f(a) = f(b), then ∃ c ∈ (a, b) with f’(c) = 0.",
              "hinglish": "Continuous [a,b], diff (a,b), f(a)=f(b) => f’(c) = 0.",
              "hi": "यदि f [a, b] पर सतत, (a, b) पर अवकलनीय तथा f(a)=f(b) हो, तो f’(c) = 0।"
            }
          },
          {
            "topic": "Lagrange’s MVT",
            "content": {
              "en": "f’(c) = [f(b) - f(a)] / (b - a). Tangent slope equals secant line slope.",
              "hinglish": "Instantaneous slope = average secant slope.",
              "hi": "स्पर्श रेखा की ढलान = छेदक रेखा की औसत ढलान।"
            }
          },
          {
            "topic": "Beta-Gamma Relation",
            "content": {
              "en": "B(m, n) = Γ(m)Γ(n) / Γ(m + n). Γ(n+1) = n!, Γ(1/2) = √π.",
              "hinglish": "B(m, n) = Γ(m)Γ(n) / Γ(m + n). Γ(1/2) = √π.",
              "hi": "B(m, n) = Γ(m)Γ(n) / Γ(m + n) तथा Γ(1/2) = √π।"
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Lagrange MVT",
            "formula": "f'(c) = \\frac{f(b) - f(a)}{b - a}",
            "units": "Dimensionless",
            "note": "c lies in (a, b)"
          },
          {
            "name": "Radius of Curvature",
            "formula": "\\rho = \\frac{(1 + y_1^2)^{3/2}}{|y_2|}",
            "units": "meters",
            "note": "y2 ≠ 0"
          },
          {
            "name": "Volume of Revolution",
            "formula": "V = \\pi \\int_a^b y^2 \\, dx",
            "units": "m³",
            "note": "Rotation about x-axis"
          },
          {
            "name": "Surface Area of Revolution",
            "formula": "S = 2\\pi \\int_a^b y \\sqrt{1 + (y')^2} \\, dx",
            "units": "m²",
            "note": "Curved surface area"
          },
          {
            "name": "Beta-Gamma Connection",
            "formula": "B(m, n) = \\frac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m+n)}",
            "units": "Dimensionless",
            "note": "m > 0, n > 0"
          }
        ],
        "mindMap": [
          {
            "node": "Differential Calculus",
            "children": [
              "Rolle’s Theorem",
              "Lagrange MVT",
              "Cauchy MVT",
              "Taylor / Maclaurin",
              "L’Hôpital Rule"
            ]
          },
          {
            "node": "Geometric Curves",
            "children": [
              "Osculating Circle",
              "Radius of Curvature",
              "Center of Curvature",
              "Evolute & Involute"
            ]
          },
          {
            "node": "Integral Applications",
            "children": [
              "Improper Integrals",
              "Beta Function",
              "Gamma Function",
              "Solids of Revolution"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Rolle’s Theorem",
            "conceptB": "Lagrange’s MVT",
            "comparisonPoints": [
              {
                "feature": "Endpoint Condition",
                "a": "Requires f(a) = f(b)",
                "b": "f(a) and f(b) can be unequal"
              },
              {
                "feature": "Tangent Slope at c",
                "a": "Horizontal: f’(c) = 0",
                "b": "Tilted: f’(c) = [f(b)-f(a)]/(b-a)"
              },
              {
                "feature": "Generality",
                "a": "Special case of LMVT",
                "b": "General case containing Rolle’s"
              }
            ]
          },
          {
            "conceptA": "Evolute",
            "conceptB": "Involute",
            "comparisonPoints": [
              {
                "feature": "Geometric Definition",
                "a": "Locus of centers of curvature / envelope of normals",
                "b": "Path traced by unwinding a taut string from the evolute"
              },
              {
                "feature": "Relationship",
                "a": "Original curve is an involute of its evolute",
                "b": "Differentiating an involute yields the evolute normals"
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "What is Γ(1/2)?",
            "back": "√π ≈ 1.77245"
          },
          {
            "front": "State the formula for radius of curvature ρ in Cartesian form.",
            "back": "ρ = (1 + y₁²)^(3/2) / |y₂|"
          },
          {
            "front": "What is the volume of revolution of y = f(x) about the x-axis?",
            "back": "V = π ∫ [f(x)]² dx"
          },
          {
            "front": "What does L’Hôpital’s rule state for 0/0 forms?",
            "back": "lim [f(x)/g(x)] = lim [f’(x)/g’(x)] if the limit on the right exists."
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Why is Rolle’s Theorem considered a special case of Lagrange’s Mean Value Theorem?",
            "answer": "In LMVT, f’(c) = [f(b) - f(a)] / (b - a). If we impose the additional constraint f(a) = f(b), the numerator becomes 0, yielding f’(c) = 0, which is precisely the statement of Rolle’s Theorem."
          }
        ],
        "longAnswerQuestions": [
          {
            "question": "State and prove Taylor’s Theorem with Lagrange’s form of remainder for a function of one variable.",
            "outline": "1. State theorem: f(b) = P_n(b) + R_n, where R_n = [f^(n)(c)/n!] (b-a)^n for c ∈ (a, b).\n2. Define auxiliary function F(x) = f(b) - f(x) - (b-x)f’(x) - ... - [(b-x)^(n-1)/(n-1)!] f^(n-1)(x) - A(b-x)^n.\n3. Choose A such that F(a) = 0. Note F(b) = 0.\n4. Apply Rolle’s Theorem to F(x) on [a, b].\n5. Differentiate F(x); intermediate terms cancel telescopically.\n6. Solve F’(c) = 0 for A, arriving at Lagrange remainder."
          }
        ],
        "numericalPractice": [
          {
            "question": "Evaluate ∫₀^(π/2) sin³(θ) cos⁵(θ) dθ using the Beta function.",
            "given": "2m - 1 = 3 => m = 2; 2n - 1 = 5 => n = 3",
            "formula": "I = (1/2) B(m, n) = Γ(m)Γ(n) / [2 Γ(m+n)]",
            "solution": "I = (1/2) B(2, 3) = Γ(2)Γ(3) / [2 Γ(5)] = (1! * 2!) / [2 * 4!] = (1 * 2) / (2 * 24) = 1/24."
          }
        ]
      }
    },
    {
      "id": "math-u2",
      "unitNumber": "Unit II",
      "title": "Sequences and Series",
      "description": "Convergence of sequences and series, tests for convergence (Comparison, D’Alembert Ratio, Raabe’s, Cauchy Root, Integral, Alternating Series/Leibniz test), Power series, Taylor’s series for exponential, trigonometric, and logarithmic functions, Fourier series, half-range sine and cosine series, and Parseval’s theorem.",
      "topics": [
        "Sequences, limits of sequences, bounded and monotonic sequences",
        "Infinite series, partial sums, convergence, divergence, and oscillation",
        "Tests for convergence: Comparison test, D’Alembert’s Ratio test, Raabe’s test, Cauchy’s Root test, and Integral test",
        "Alternating series, Leibniz’s test, absolute and conditional convergence",
        "Power series, radius of convergence, and interval of convergence",
        "Taylor’s and Maclaurin’s series for e^x, sin(x), cos(x), and ln(1+x)",
        "Fourier series: Periodic functions, Dirichlet’s conditions, and Euler’s formulas for a₀, aₙ, bₙ",
        "Half-range sine and cosine Fourier expansions for odd and even extensions",
        "Parseval’s theorem connecting Fourier coefficients to root-mean-square energy"
      ],
      "lessons": [
        {
          "id": "math-u2-l1",
          "unitId": "math-u2",
          "subjectId": "mathematics",
          "title": "Convergence Tests, Power Series & Fourier Harmonic Synthesis",
          "durationMinutes": 30,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Basic limits",
            "Trigonometric identities",
            "Integration by parts"
          ],
          "realLifeQuestion": {
            "en": "How does an MP3 audio file or music synthesizer create the sharp buzzing tone of a synthesizer guitar using only smooth, curved sine waves, and why does adding infinitely many positive numbers sometimes add up to a finite number?",
            "hinglish": "Ek music synthesizer sirf smooth sine waves ka use karke sharp square wave ya guitar sound kaise banata hai, aur infinite numbers ko add karne par bhi sum finite kaise ho sakta hai?",
            "hi": "संगीत सिंथेसाइज़र केवल चिकनी साइन तरंगों का उपयोग करके तीखी ध्वनि कैसे उत्पन्न करता है, और अनंत पदों का योग सीमित मान कैसे दे सकता है?"
          },
          "simpleExplanation": {
            "en": "This is the magic of Fourier Series and Series Convergence! Fourier proved that ANY periodic waveform (like a square pulse or violin sound) can be synthesized by adding pure harmonic sine and cosine waves: a₀/2 + ∑ [aₙ cos(nx) + bₙ sin(nx)]. For infinite series, if the terms shrink toward zero fast enough (like 1/2 + 1/4 + 1/8 + ... = 1), the sequence of partial sums converges to a finite limit! Tests like D’Alembert’s ratio test determine whether an infinite series converges or diverges.",
            "hinglish": "Fourier series kisi bhi complex periodic wave ko pure sine aur cosine waves me tod deta hai. Infinite series tab converge karti hai jab terms tezi se zero ki taraf shrink hote hain (jaise 1/2 + 1/4 + 1/8 = 1). Ratio test se pata chalta hai ki series finite sum degi ya infinite (diverge).",
            "hi": "फूरियर श्रेणी किसी भी आवर्ती तरंग को साइन और कोसाइन तरंगों के योग में व्यक्त करती है। अनुपात परीक्षण द्वारा श्रेणी के अभिसरण की जांच की जाती है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine walking toward a wall 2 meters away. Step 1: walk 1 meter. Step 2: walk 0.5 meters. Step 3: walk 0.25 meters. Although you take infinitely many steps, the total distance walked will NEVER exceed 2 meters! The series converges to 2.",
              "hinglish": "Diwar ki taraf aadhi aadhi doori chalte jao: 1m + 0.5m + 0.25m... Insaan kitne bhi infinite steps chale, total doori 2m se aage kabhi nahi jayegi. Yeh convergence hai.",
              "hi": "प्रत्येक चरण में आधी दूरी तय करने पर अनंत चरणों के बाद भी कुल दूरी 2 मीटर से अधिक नहीं होगी। यह अभिसरण का उदाहरण है।"
            },
            "limitations": {
              "en": "If the step sizes do not shrink fast enough (like 1 + 1/2 + 1/3 + 1/4 + ...), the total distance diverges to infinity even though each individual step approaches zero!",
              "hinglish": "Agar step sizes tezi se chhote na ho (jaise harmonic series 1/n), toh sum infinity tak diverge ho jata hai.",
              "hi": "यदि पद पर्याप्त तेजी से घटते नहीं हैं तो श्रेणी अनंत की ओर अपसरित हो जाती है।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "An infinite series ∑ u_n converges if the sequence of partial sums S_k = ∑_{n=1}^k u_n has a finite limit S as k → ∞. D’Alembert’s ratio test states: lim_{n→∞} |u_{n+1} / u_n| = L. If L < 1, series converges absolutely; if L > 1, series diverges; if L = 1, test is inconclusive. A 2π-periodic function f(x) satisfying Dirichlet conditions has Fourier expansion: f(x) = a₀/2 + ∑_{n=1}^∞ [aₙ cos(nx) + bₙ sin(nx)].",
              "hinglish": "Agar partial sums S_k ka limit finite ho toh series converge karti hai. Ratio test me L = lim |u_{n+1}/u_n|. Agar L < 1 toh series converge karti hai, L > 1 par diverge karti hai.",
              "hi": "यदि आंशिक योगों का अनुक्रम सीमित मान की ओर अग्रसर हो तो श्रेणी अभिसरित होती है। अनुपात परीक्षण में L < 1 होने पर श्रेणी अभिसरित तथा L > 1 होने पर अपसरित होती है।"
            },
            "keyTerms": [
              {
                "term": "Dirichlet’s Conditions",
                "definition": {
                  "en": "Conditions guaranteeing Fourier convergence: f(x) must be single-valued, bounded, with a finite number of maxima, minima, and discontinuities in any period.",
                  "hinglish": "Conditions jo guarantee karti hain ki Fourier series function ke barabar hogi.",
                  "hi": "शर्तें जो फूरियर श्रेणी के अभिसरण की गारंटी देती हैं।"
                }
              },
              {
                "term": "Euler’s Formulas",
                "definition": {
                  "en": "Integral formulas determining Fourier coefficients: a₀ = (1/π) ∫ f(x) dx, aₙ = (1/π) ∫ f(x) cos(nx) dx, bₙ = (1/π) ∫ f(x) sin(nx) dx.",
                  "hinglish": "Fourier coefficients a0, an, bn nikalne ke integrals.",
                  "hi": "फूरियर गुणांकों की गणना हेतु प्रयुक्त समाकलन सूत्र।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty \\left[ a_n \\cos\\left(\\frac{n\\pi x}{L}\\right) + b_n \\sin\\left(\\frac{n\\pi x}{L}\\right) \\right]",
            "symbolMeaning": [
              "a₀/2: DC average component (baseline offset)",
              "aₙ: Amplitude of nth cosine harmonic",
              "bₙ: Amplitude of nth sine harmonic",
              "L: Half-period of the periodic domain [-L, L]"
            ],
            "units": "Amplitude in signal units [Volts or Pa]",
            "assumptions": [
              "Function f(x) must be periodic with period 2L",
              "f(x) must be piecewise smooth and absolutely integrable over [-L, L]"
            ],
            "derivation": [
              "Assume f(x) = a₀/2 + ∑ [aₙ cos(nx) + bₙ sin(nx)].",
              "Integrate both sides from -π to π: ∫ f(x) dx = (a₀/2)(2π) + 0 + 0  =>  a₀ = (1/π) ∫_{-π}^π f(x) dx.",
              "Multiply by cos(mx) and integrate: by orthogonality, ∫_{-π}^π cos(nx)cos(mx) dx = π δ_{nm}.",
              "Therefore, a_m = (1/π) ∫_{-π}^π f(x) cos(mx) dx.",
              "Similarly, multiplying by sin(mx) yields b_m = (1/π) ∫_{-π}^π f(x) sin(mx) dx."
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Test the convergence of the infinite series ∑_{n=1}^∞ [ n² / 3^n ].",
              "hinglish": "Test the convergence of the infinite series ∑_{n=1}^∞ [ n² / 3^n ].",
              "hi": "Test the convergence of the infinite series ∑_{n=1}^∞ [ n² / 3^n ]."
            },
            "given": [
              "Series term: u_n = n² / 3^n"
            ],
            "toFind": "Determine whether the series converges or diverges using D’Alembert’s Ratio Test",
            "formulaUsed": "L = \\lim_{n \\to \\infty} \\frac{u_{n+1}}{u_n}",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Write expression for u_{n+1}",
                "explanation": {
                  "en": "Substitute n + 1 in place of n.",
                  "hinglish": "Substitute n + 1 in place of n.",
                  "hi": "Substitute n + 1 in place of n."
                },
                "math": "u_{n+1} = \\frac{(n + 1)^2}{3^{n+1}}"
              },
              {
                "stepNumber": 2,
                "title": "Form the ratio u_{n+1} / u_n",
                "explanation": {
                  "en": "Divide u_{n+1} by u_n and simplify.",
                  "hinglish": "Divide u_{n+1} by u_n and simplify.",
                  "hi": "Divide u_{n+1} by u_n and simplify."
                },
                "math": "\\frac{u_{n+1}}{u_n} = \\frac{(n+1)^2}{3^{n+1}} \\times \\frac{3^n}{n^2} = \\frac{1}{3} \\left( \\frac{n+1}{n} \\right)^2 = \\frac{1}{3} \\left( 1 + \\frac{1}{n} \\right)^2"
              },
              {
                "stepNumber": 3,
                "title": "Take the limit as n → ∞",
                "explanation": {
                  "en": "As n → ∞, 1/n → 0.",
                  "hinglish": "As n → ∞, 1/n → 0.",
                  "hi": "As n → ∞, 1/n → 0."
                },
                "math": "L = \\lim_{n \\to \\infty} \\frac{1}{3} \\left( 1 + \\frac{1}{n} \\right)^2 = \\frac{1}{3} (1 + 0)^2 = \\frac{1}{3}"
              },
              {
                "stepNumber": 4,
                "title": "Compare L with 1",
                "explanation": {
                  "en": "Since L = 1/3 < 1, the series converges absolutely by D’Alembert’s Ratio Test.",
                  "hinglish": "Since L = 1/3 < 1, the series converges absolutely by D’Alembert’s Ratio Test.",
                  "hi": "Since L = 1/3 < 1, the series converges absolutely by D’Alembert’s Ratio Test."
                },
                "math": "L = 1/3 < 1 \\implies \\text{Series converges absolutely}"
              }
            ],
            "finalAnswer": "The series ∑ n² / 3^n converges absolutely (L = 1/3 < 1)"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Assuming that because lim u_n = 0, the series MUST converge.",
                "hinglish": "Yeh sochna ki agar term 0 ban rahi hai (lim un = 0), toh series pakka converge karegi.",
                "hi": "यह मान लेना कि यदि lim un = 0 है, तो श्रेणी अवश्य अभिसरित होगी।"
              },
              "correction": {
                "en": "lim u_n = 0 is a necessary condition, but NOT sufficient! The Harmonic Series ∑ 1/n has lim (1/n) = 0, yet it diverges to infinity.",
                "hinglish": "Harmonic series ∑ 1/n me 1/n → 0 hota hai fir bhi series infinity tak diverge hoti hai.",
                "hi": "हार्मोनिक श्रेणी ∑ 1/n में पद शून्य की ओर जाते हैं फिर भी श्रेणी अपसरित होती है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u2-p1",
              "level": "Intermediate",
              "question": {
                "en": "For a square wave f(x) of period 2π defined as -1 on (-π, 0) and +1 on (0, π), what are its cosine Fourier coefficients aₙ?",
                "hinglish": "Square wave f(x) ke liye cosine Fourier coefficients an kya honge?",
                "hi": "आवर्त 2π की वर्गाकार तरंग f(x) के लिए कोसाइन फूरियर गुणांक an क्या होंगे?"
              },
              "options": [
                "All aₙ = 0",
                "aₙ = 4 / (nπ)",
                "aₙ = (-1)ⁿ / n",
                "aₙ = 2 / π"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "The square wave is an odd function (f(-x) = -f(x)). The product of an odd function and an even function cos(nx) is odd, so its integral over [-π, π] is identically zero for all n.",
                "hinglish": "Square wave ek odd function hai, isliye sabhi cosine coefficients a0 aur an zero hote hain.",
                "hi": "वर्गाकार तरंग एक विषम फलन है, अतः सम फलन cos(nx) के साथ इसका समाकलन शून्य होता है।"
              },
              "hint": {
                "en": "Recall the symmetry rule: odd functions contain only sine terms (bₙ).",
                "hinglish": "Odd functions me sirf sine terms aate hain.",
                "hi": "विषम फलनों में केवल साइन पद होते हैं।"
              }
            }
          ],
          "summary": {
            "en": [
              "A series ∑ u_n converges if its sequence of partial sums reaches a finite limit.",
              "Ratio test L = lim |u_{n+1}/u_n|: L < 1 converges, L > 1 diverges, L = 1 inconclusive.",
              "Fourier series expands any periodic signal into harmonic sine and cosine components.",
              "Parseval’s Theorem proves that total signal energy equals the sum of harmonic coefficient energies."
            ],
            "hinglish": [
              "Series tab converge karti hai jab partial sums finite limit tak pahunchte hain.",
              "Ratio test me L < 1 converge, L > 1 diverge, L = 1 inconclusive.",
              "Fourier series periodic signals ko sine aur cosine waves me todti hai.",
              "Parseval theorem signal energy ko frequency harmonics ke square sum se jodata hai."
            ],
            "hi": [
              "आंशिक योगों का सीमित मान होने पर श्रेणी अभिसरित होती है।",
              "अनुपात परीक्षण: L < 1 अभिसरण, L > 1 अपसरण, L = 1 अनिर्णीत।",
              "फूरियर श्रेणी आवर्ती सिग्नलों को साइन तथा कोसाइन घटकों में व्यक्त करती है।",
              "पार्सवल प्रमेय संकेत ऊर्जा को संनादी गुणांकों के योग के बराबर सिद्ध करता है।"
            ]
          },
          "quiz": [
            {
              "id": "math-u2-q1",
              "question": {
                "en": "According to Dirichlet’s conditions, at a point of finite discontinuity x₀, what value does the Fourier series converge to?",
                "hinglish": "Discontinuity point x0 par Fourier series kis value par converge karti hai?",
                "hi": "डिरिचलेट शर्तों के अनुसार असांतत्य बिंदु x0 पर फूरियर श्रेणी किस मान पर अभिसरित होती है?"
              },
              "options": [
                "[f(x₀⁺) + f(x₀⁻)] / 2 (the arithmetic mean of left and right limits)",
                "f(x₀⁺) (the right-hand limit)",
                "0 (it drops to zero)",
                "It diverges at points of discontinuity"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "At any jump discontinuity, the Fourier series converges to the exact midpoint between the left and right hand limits.",
                "hinglish": "Discontinuity par Fourier series left aur right limits ke average par converge karti hai.",
                "hi": "असांतत्य बिंदु पर फूरियर श्रेणी बाएँ और दाएँ सीमा मानों के समांतर माध्य पर अभिसरित होती है।"
              },
              "hint": {
                "en": "Think of the average value at a cliff step.",
                "hinglish": "Jump step ka average sochein.",
                "hi": "कूद के मध्य मान पर विचार करें।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "An infinite series ∑ u_n converges if the sequence of partial sums S_k = ∑_{n=1}^k u_n has a finite limit S as k → ∞. D’Alembert’s ratio test states: lim_{n→∞} |u_{n+1} / u_n| = L. If L < 1, series converges absolutely; if L > 1, series diverges; if L = 1, test is inconclusive. A 2π-periodic function f(x) satisfying Dirichlet conditions has Fourier expansion: f(x) = a₀/2 + ∑_{n=1}^∞ [aₙ cos(nx) + bₙ sin(nx)].",
            "hinglish": "Agar partial sums S_k ka limit finite ho toh series converge karti hai. Ratio test me L = lim |u_{n+1}/u_n|. Agar L < 1 toh series converge karti hai, L > 1 par diverge karti hai.",
            "hi": "यदि आंशिक योगों का अनुक्रम सीमित मान की ओर अग्रसर हो तो श्रेणी अभिसरित होती है। अनुपात परीक्षण में L < 1 होने पर श्रेणी अभिसरित तथा L > 1 होने पर अपसरित होती है।"
          },
          "terminology": [
            {
              "term": "Dirichlet’s Conditions",
              "definition": {
                "en": "Conditions guaranteeing Fourier convergence: f(x) must be single-valued, bounded, with a finite number of maxima, minima, and discontinuities in any period.",
                "hinglish": "Conditions jo guarantee karti hain ki Fourier series function ke barabar hogi.",
                "hi": "शर्तें जो फूरियर श्रेणी के अभिसरण की गारंटी देती हैं।"
              }
            },
            {
              "term": "Euler’s Formulas",
              "definition": {
                "en": "Integral formulas determining Fourier coefficients: a₀ = (1/π) ∫ f(x) dx, aₙ = (1/π) ∫ f(x) cos(nx) dx, bₙ = (1/π) ∫ f(x) sin(nx) dx.",
                "hinglish": "Fourier coefficients a0, an, bn nikalne ke integrals.",
                "hi": "फूरियर गुणांकों की गणना हेतु प्रयुक्त समाकलन सूत्र।"
              }
            }
          ]
        },
        {
          "id": "math-u2-l2",
          "unitId": "math-u2",
          "subjectId": "mathematics",
          "title": "Power Series & Taylor Expansions of Elementary Functions",
          "durationMinutes": 30,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Derivatives of trig/exp/log functions",
            "Ratio test"
          ],
          "realLifeQuestion": {
            "en": "How does your pocket calculator compute sin(0.45) or e^(1.2) in microseconds when it only has microchips that can do basic addition and multiplication?",
            "hinglish": "Calculator sin(0.45) ya e^(1.2) itni jaldi kaise calculate karta hai jabki hardware sirf basic addition aur multiplication kar sakta hai?",
            "hi": "कैलकुलेटर केवल जोड़ और गुणा करने वाले चिप्स से sin(0.45) या e^(1.2) का मान इतनी तीव्रता से कैसे ज्ञात करता है?"
          },
          "simpleExplanation": {
            "en": "Calculators use Power Series! Any smooth transcendental curve can be expressed as an infinite polynomial: f(x) = c₀ + c₁x + c₂x² + c₃x³ + ... Because computers excel at evaluating polynomials using Horner’s method (only additions and multiplications), computing just 5 or 6 terms of the Taylor series gives 12 digits of floating-point accuracy!",
            "hinglish": "Calculator Power Series (Taylor series) use karta hai! Kisi bhi curve ko polynomial c0 + c1*x + c2*x^2 me convert kar diya jata hai. 5-6 terms compute karne par hi 12 digits tak accurate answer mil jata hai.",
            "hi": "कैलकुलेटर टेलर श्रेणी का उपयोग करता है। फलन को अनंत बहुपद के रूप में व्यक्त करके केवल 5-6 पदों की गणना से ही उच्च परिशुद्धता प्राप्त कर ली जाती है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine painting a circle using only short straight brush strokes. With 4 strokes you get a rough diamond, with 8 an octagon, and with 30 strokes the shape is virtually indistinguishable from a true circle.",
              "hinglish": "Chhote straight lines se circle banane jaisa hai: 4 strokes me square, 8 me octagon, aur 30 strokes me perfect circle lagta hai.",
              "hi": "सीधी रेखाओं से वृत्त बनाने की भांति जितने अधिक पद होंगे, सन्निकटन उतना ही यथार्थ होगा।"
            },
            "limitations": {
              "en": "A power series only matches the function inside its Radius of Convergence (R). Outside this radius, the series blows up to infinity.",
              "hinglish": "Power series sirf Radius of Convergence R ke andar hi function ke barabar hoti hai, bahar diverge ho jati hai.",
              "hi": "घात श्रेणी केवल अपनी अभिसरण त्रिज्या के भीतर ही फलन के समतुल्य होती है।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "A power series centered at x = a has the form ∑_{n=0}^∞ c_n (x - a)^n. The Radius of Convergence R is given by Cauchy-Hadamard formula: 1/R = lim sup |c_n|^(1/n) or R = lim |c_n / c_{n+1}|. The series converges absolutely for |x - a| < R and diverges for |x - a| > R.",
              "hinglish": "Power series center a par ∑ c_n (x - a)^n form ki hoti hai. Radius of convergence R = lim |c_n / c_{n+1}| hota hai. |x - a| < R ke liye series converge karti hai.",
              "hi": "x = a पर केंद्रित घात श्रेणी ∑ c_n (x - a)^n रूप में होती है। अभिसरण त्रिज्या R = lim |c_n / c_{n+1}| द्वारा प्राप्त होती है।"
            },
            "keyTerms": [
              {
                "term": "Radius of Convergence (R)",
                "definition": {
                  "en": "The half-width of the interval in which the power series converges to a finite value.",
                  "hinglish": "Wo distance jiske andar power series finite value me converge karti hai.",
                  "hi": "वह अंतराल जिसके भीतर घात श्रेणी अभिसरित होती है।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}, \\quad \\sin(x) = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{(2n+1)!}, \\quad R = \\lim_{n \\to \\infty} \\left| \\frac{c_n}{c_{n+1}} \\right|",
            "symbolMeaning": [
              "c_n: Coefficients of the power series",
              "R: Radius of convergence",
              "x: Independent real variable"
            ],
            "units": "Dimensionless",
            "assumptions": [
              "Function f(x) must be infinitely differentiable at expansion point x = a"
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Find the radius and interval of convergence for the power series ∑_{n=1}^∞ [ (x - 2)^n ] / (n · 3^n).",
              "hinglish": "Find the radius and interval of convergence for the power series ∑_{n=1}^∞ [ (x - 2)^n ] / (n · 3^n).",
              "hi": "Find the radius and interval of convergence for the power series ∑_{n=1}^∞ [ (x - 2)^n ] / (n · 3^n)."
            },
            "given": [
              "Series terms: a_n = (x - 2)^n / (n · 3^n)"
            ],
            "toFind": "Radius of convergence R and interval of convergence",
            "formulaUsed": "R = \\lim_{n \\to \\infty} \\left| \\frac{c_n}{c_{n+1}} \\right|",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Identify coefficients c_n and c_{n+1}",
                "explanation": {
                  "en": "c_n = 1 / (n · 3^n), c_{n+1} = 1 / ((n+1) · 3^(n+1)).",
                  "hinglish": "c_n = 1 / (n · 3^n), c_{n+1} = 1 / ((n+1) · 3^(n+1)).",
                  "hi": "c_n = 1 / (n · 3^n), c_{n+1} = 1 / ((n+1) · 3^(n+1))."
                },
                "math": "c_n = \\frac{1}{n \\cdot 3^n}, \\quad c_{n+1} = \\frac{1}{(n+1) \\cdot 3^{n+1}}"
              },
              {
                "stepNumber": 2,
                "title": "Evaluate the ratio limit for R",
                "explanation": {
                  "en": "Divide c_n by c_{n+1} and take limit n → ∞.",
                  "hinglish": "Divide c_n by c_{n+1} and take limit n → ∞.",
                  "hi": "Divide c_n by c_{n+1} and take limit n → ∞."
                },
                "math": "R = \\lim_{n \\to \\infty} \\left| \\frac{(n+1) \\cdot 3^{n+1}}{n \\cdot 3^n} \\right| = 3 \\lim_{n \\to \\infty} \\frac{n+1}{n} = 3 \\times 1 = 3"
              },
              {
                "stepNumber": 3,
                "title": "Form open interval of convergence",
                "explanation": {
                  "en": "|x - 2| < 3  =>  -3 < x - 2 < 3  =>  -1 < x < 5.",
                  "hinglish": "|x - 2| < 3  =>  -3 < x - 2 < 3  =>  -1 < x < 5.",
                  "hi": "|x - 2| < 3  =>  -3 < x - 2 < 3  =>  -1 < x < 5."
                },
                "math": "-1 < x < 5"
              },
              {
                "stepNumber": 4,
                "title": "Test endpoints x = -1 and x = 5",
                "explanation": {
                  "en": "At x = 5: ∑ 1/n diverges (harmonic series). At x = -1: ∑ (-1)^n / n converges (alternating harmonic series).",
                  "hinglish": "At x = 5: ∑ 1/n diverges (harmonic series). At x = -1: ∑ (-1)^n / n converges (alternating harmonic series).",
                  "hi": "At x = 5: ∑ 1/n diverges (harmonic series). At x = -1: ∑ (-1)^n / n converges (alternating harmonic series)."
                },
                "math": "\\text{Interval of convergence: } [-1, 5)"
              }
            ],
            "finalAnswer": "Radius R = 3, Interval of convergence = [-1, 5)"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Forgetting to test the endpoints of the convergence interval individually.",
                "hinglish": "Interval of convergence me endpoints (-1 aur 5) ko check karna bhool jana.",
                "hi": "अंतराल के सिरों पर श्रेणी के अभिसरण की अलग से जांच न करना।"
              },
              "correction": {
                "en": "The ratio test gives no information when |x - a| = R (ratio limit = 1). Endpoints must be plugged in directly.",
                "hinglish": "Ratio test endpoints par inconclusive hota hai, isliye unhe alag se check karein.",
                "hi": "सिरों पर अनुपात परीक्षण अनिर्णीत होता है, अतः सीधे मान रखकर जांच करें।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u2-p2",
              "level": "Intermediate",
              "question": {
                "en": "What is the radius of convergence R of the Taylor series for e^x = ∑ x^n / n! ?",
                "hinglish": "e^x ke power series ka radius of convergence R kya hota hai?",
                "hi": "e^x की घात श्रेणी की अभिसरण त्रिज्या R क्या होती है?"
              },
              "options": [
                "R = ∞",
                "R = 1",
                "R = e",
                "R = 0"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "R = lim (n+1)! / n! = lim (n+1) = ∞. e^x converges for all real numbers x.",
                "hinglish": "R = lim (n+1) = ∞. e^x har real number ke liye converge karti hai.",
                "hi": "R = lim (n+1) = ∞, अतः e^x सभी वास्तविक संख्याओं के लिए अभिसरित होती है।"
              },
              "hint": {
                "en": "Evaluate lim c_n / c_{n+1} where c_n = 1/n!.",
                "hinglish": "(n+1)! / n! ki limit nikalein.",
                "hi": "(n+1)! / n! का सीमा मान निकालें।"
              }
            }
          ],
          "summary": {
            "en": [
              "Power series provide polynomial representations for transcendental functions.",
              "Radius of convergence R determines the region of absolute convergence |x - a| < R.",
              "Endpoints must always be checked separately for conditional convergence."
            ],
            "hinglish": [
              "Power series transcendental functions ko polynomial banati hai.",
              "Radius of convergence R ke andar series absolutely converge karti hai.",
              "Endpoints ko alag se check karna zaroori hota hai."
            ],
            "hi": [
              "घात श्रेणी फलन को बहुपद के रूप में प्रस्तुत करती है।",
              "अभिसरण त्रिज्या R के भीतर श्रेणी पूर्णतः अभिसरित होती है।",
              "अंतराल के सिरों की पृथक जांच आवश्यक होती है।"
            ]
          },
          "quiz": [
            {
              "id": "math-u2-q2",
              "question": {
                "en": "What is the Maclaurin series expansion for ln(1 + x) for |x| < 1?",
                "hinglish": "ln(1 + x) ka Maclaurin series expansion kya hai?",
                "hi": "ln(1 + x) का मैकलॉरिन श्रेणी विस्तार क्या है?"
              },
              "options": [
                "x - x²/2 + x³/3 - x⁴/4 + ...",
                "1 + x + x²/2! + x³/3! + ...",
                "x + x²/2 + x³/3 + x⁴/4 + ...",
                "x - x³/3! + x⁵/5! - ..."
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "ln(1+x) = x - x²/2 + x³/3 - x⁴/4 + ... (no factorials in the denominator).",
                "hinglish": "ln(1+x) me factorials nahi hote: x - x^2/2 + x^3/3 - x^4/4.",
                "hi": "ln(1+x) में हर में फैक्टोरियल नहीं होता: x - x²/2 + x³/3 - x⁴/4 + ...।"
              },
              "hint": {
                "en": "Integrate the geometric series 1/(1+x) = 1 - x + x² - x³ + ...",
                "hinglish": "1/(1+x) ko term by term integrate karein.",
                "hi": "1/(1+x) की श्रेणी का पदशः समाकलन करें।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "A power series centered at x = a has the form ∑_{n=0}^∞ c_n (x - a)^n. The Radius of Convergence R is given by Cauchy-Hadamard formula: 1/R = lim sup |c_n|^(1/n) or R = lim |c_n / c_{n+1}|. The series converges absolutely for |x - a| < R and diverges for |x - a| > R.",
            "hinglish": "Power series center a par ∑ c_n (x - a)^n form ki hoti hai. Radius of convergence R = lim |c_n / c_{n+1}| hota hai. |x - a| < R ke liye series converge karti hai.",
            "hi": "x = a पर केंद्रित घात श्रेणी ∑ c_n (x - a)^n रूप में होती है। अभिसरण त्रिज्या R = lim |c_n / c_{n+1}| द्वारा प्राप्त होती है।"
          },
          "terminology": [
            {
              "term": "Radius of Convergence (R)",
              "definition": {
                "en": "The half-width of the interval in which the power series converges to a finite value.",
                "hinglish": "Wo distance jiske andar power series finite value me converge karti hai.",
                "hi": "वह अंतराल जिसके भीतर घात श्रेणी अभिसरित होती है।"
              }
            }
          ]
        },
        {
          "id": "math-u2-l3",
          "unitId": "math-u2",
          "subjectId": "mathematics",
          "title": "Half-Range Sine/Cosine Expansions & Parseval’s Theorem",
          "durationMinutes": 30,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Fourier series basics",
            "Even and odd functions"
          ],
          "realLifeQuestion": {
            "en": "How does digital audio compression (like in MP3 or Spotify) quantify the exact sound energy lost when high frequencies are filtered out?",
            "hinglish": "Spotify ya MP3 audio compression me high frequencies cut karne par exact sound energy kitni loss hui yeh kaise measure hota hai?",
            "hi": "ऑडियो कंप्रेशन में उच्च आवृत्तियों को हटाने पर कितनी ध्वनि ऊर्जा की हानि हुई, यह कैसे मापा जाता है?"
          },
          "simpleExplanation": {
            "en": "This is Parseval’s Theorem! It proves that the total electrical or acoustic energy in the time domain equals the sum of the energies in all harmonic frequencies in the frequency domain: (1/L) ∫ [f(x)]² dx = a₀²/4 + (1/2) ∑ (aₙ² + bₙ²). If you discard harmonics above 15 kHz, Parseval’s identity tells you exactly what fraction of acoustic power was removed!",
            "hinglish": "Yehi Parseval’s Theorem hai! Signal ki total energy time domain me harmonics ki energies ke sum ke barabar hoti hai. Frequency cut karne par exact energy loss calculate ho jata hai.",
            "hi": "यह पार्सवल प्रमेय है। इसके अनुसार समय क्षेत्र में कुल ऊर्जा आवृत्ति क्षेत्र में सभी संनादी घटकों की ऊर्जाओं के योग के बराबर होती है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine splitting a multi-colored smoothie back into its individual fruit ingredients. The total calories of the smoothie exactly equal the sum of calories of the individual strawberries, bananas, and blueberries!",
              "hinglish": "Smoothie ki total calories usme daale gaye alag-alag fruits ki calories ke sum ke barabar hoti hain.",
              "hi": "मिश्रण की कुल ऊर्जा उसके प्रत्येक घटक की व्यक्तिगत ऊर्जाओं के योग के बराबर होती है।"
            },
            "limitations": {
              "en": "The function must be square-integrable (finite total energy).",
              "hinglish": "Signal ka total energy finite hona zaroori hai.",
              "hi": "फलन का वर्ग-समाकलनीय होना आवश्यक है।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "For a function f(x) defined on [0, L], its Half-Range Cosine series is f(x) = a₀/2 + ∑ aₙ cos(nπx/L) where aₙ = (2/L) ∫₀^L f(x) cos(nπx/L) dx. Its Half-Range Sine series is f(x) = ∑ bₙ sin(nπx/L) where bₙ = (2/L) ∫₀^L f(x) sin(nπx/L) dx. Parseval’s identity states: (2/L) ∫₀^L [f(x)]² dx = a₀²/2 + ∑ aₙ² (for cosine series).",
              "hinglish": "Interval [0, L] par Half-Range Cosine me sirf cosine terms aate hain (even extension), aur Half-Range Sine me sirf sine terms aate hain (odd extension).",
              "hi": "[0, L] में अर्ध-परास कोसाइन श्रेणी में केवल कोसाइन पद तथा अर्ध-परास साइन श्रेणी में केवल साइन पद होते हैं।"
            },
            "keyTerms": [
              {
                "term": "Even Extension",
                "definition": {
                  "en": "Reflecting f(x) symmetrically across the y-axis to create an even function of period 2L.",
                  "hinglish": "Function ko y-axis ke across mirror karke even function banana.",
                  "hi": "फलन को y-अक्ष के परितः परावर्तित कर सम फलन बनाना।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "b_n = \\frac{2}{L} \\int_0^L f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right) \\, dx, \\quad \\frac{1}{L} \\int_{-L}^L [f(x)]^2 \\, dx = \\frac{a_0^2}{2} + \\sum_{n=1}^\\infty (a_n^2 + b_n^2)",
            "symbolMeaning": [
              "b_n: Fourier sine coefficient",
              "L: Half-period length",
              "a_0, a_n: Fourier cosine coefficients"
            ],
            "units": "Energy units [Joules or Watts]",
            "assumptions": [
              "f(x) satisfies Dirichlet conditions on [0, L]"
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Obtain the half-range sine series for f(x) = x in (0, π) and use Parseval’s identity to prove ∑_{n=1}^∞ 1/n² = π² / 6.",
              "hinglish": "Obtain the half-range sine series for f(x) = x in (0, π) and use Parseval’s identity to prove ∑_{n=1}^∞ 1/n² = π² / 6.",
              "hi": "Obtain the half-range sine series for f(x) = x in (0, π) and use Parseval’s identity to prove ∑_{n=1}^∞ 1/n² = π² / 6."
            },
            "given": [
              "f(x) = x on (0, π)",
              "L = π"
            ],
            "toFind": "Half-range sine coefficients b_n and evaluation of ∑ 1/n²",
            "formulaUsed": "b_n = \\frac{2}{\\pi} \\int_0^\\pi x \\sin(nx) \\, dx, \\quad \\frac{2}{\\pi} \\int_0^\\pi x^2 \\, dx = \\sum_{n=1}^\\infty b_n^2",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Integrate by parts to find b_n",
                "explanation": {
                  "en": "u = x, dv = sin(nx) dx. du = dx, v = -cos(nx)/n.",
                  "hinglish": "u = x, dv = sin(nx) dx. du = dx, v = -cos(nx)/n.",
                  "hi": "u = x, dv = sin(nx) dx. du = dx, v = -cos(nx)/n."
                },
                "math": "b_n = \\frac{2}{\\pi} \\left[ -\\frac{x\\cos(nx)}{n} + \\frac{\\sin(nx)}{n^2} \\right]_0^\\pi = \\frac{2}{\\pi} \\left( -\\frac{\\pi \\cos(n\\pi)}{n} \\right) = -\\frac{2(-1)^n}{n} = \\frac{2(-1)^{n+1}}{n}"
              },
              {
                "stepNumber": 2,
                "title": "Square coefficients for Parseval identity",
                "explanation": {
                  "en": "b_n² = [ 2(-1)^(n+1) / n ]² = 4 / n².",
                  "hinglish": "b_n² = [ 2(-1)^(n+1) / n ]² = 4 / n².",
                  "hi": "b_n² = [ 2(-1)^(n+1) / n ]² = 4 / n²."
                },
                "math": "b_n^2 = \\frac{4}{n^2}"
              },
              {
                "stepNumber": 3,
                "title": "Evaluate the left side integral of x²",
                "explanation": {
                  "en": "Integrate x² from 0 to π.",
                  "hinglish": "Integrate x² from 0 to π.",
                  "hi": "Integrate x² from 0 to π."
                },
                "math": "\\frac{2}{\\pi} \\int_0^\\pi x^2 \\, dx = \\frac{2}{\\pi} \\left[ \\frac{x^3}{3} \\right]_0^\\pi = \\frac{2}{\\pi} \\left( \\frac{\\pi^3}{3} \\right) = \\frac{2\\pi^2}{3}"
              },
              {
                "stepNumber": 4,
                "title": "Equate and solve for ∑ 1/n²",
                "explanation": {
                  "en": "2π² / 3 = ∑ 4 / n²  =>  4 ∑ 1/n² = 2π² / 3  =>  ∑ 1/n² = 2π² / 12 = π² / 6.",
                  "hinglish": "2π² / 3 = ∑ 4 / n²  =>  4 ∑ 1/n² = 2π² / 3  =>  ∑ 1/n² = 2π² / 12 = π² / 6.",
                  "hi": "2π² / 3 = ∑ 4 / n²  =>  4 ∑ 1/n² = 2π² / 3  =>  ∑ 1/n² = 2π² / 12 = π² / 6."
                },
                "math": "\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{2\\pi^2}{3 \\times 4} = \\frac{\\pi^2}{6}"
              }
            ],
            "finalAnswer": "b_n = 2(-1)^(n+1)/n; ∑_{n=1}^∞ 1/n² = π² / 6 (the famous Euler Basel problem)"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Using 1/L instead of 2/L for half-range Fourier coefficients.",
                "hinglish": "Half-range Fourier me 2/L ki jagah full-range ka 1/L use kar lena.",
                "hi": "अर्ध-परास श्रेणी में 2/L के स्थान पर 1/L का प्रयोग करना।"
              },
              "correction": {
                "en": "Half-range series extends over half the interval [0, L], so the factor is 2/L.",
                "hinglish": "Half-range me hamesha factor 2/L hota hai.",
                "hi": "अर्ध-परास में सदैव 2/L गुणक का उपयोग होता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u2-p3",
              "level": "Advanced",
              "question": {
                "en": "What is the sum of the series ∑_{n=1}^∞ 1/n⁴ obtained from Parseval’s identity for f(x) = x² on (0, π)?",
                "hinglish": "f(x) = x² par Parseval identity lagane par ∑ 1/n⁴ ka sum kya aata hai?",
                "hi": "पार्सवल प्रमेय द्वारा श्रेणी ∑ 1/n⁴ का मान क्या प्राप्त होता है?"
              },
              "options": [
                "π⁴ / 90",
                "π⁴ / 45",
                "π⁴ / 30",
                "π² / 12"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "Applying Parseval’s identity to the half-range cosine series of x² yields ∑ 1/n⁴ = π⁴ / 90.",
                "hinglish": "Cosine series of x² par Parseval identity se π⁴ / 90 milta hai.",
                "hi": "x² की कोसाइन श्रेणी से ∑ 1/n⁴ = π⁴ / 90 प्राप्त होता है।"
              },
              "hint": {
                "en": "Parseval identity on cosine coefficients of x² evaluates to π⁴ / 90.",
                "hinglish": "Cosine coefficients ke squares ka sum π⁴ / 90 deta hai.",
                "hi": "कोसाइन गुणांकों के वर्गों का योग π⁴ / 90 देता है।"
              }
            }
          ],
          "summary": {
            "en": [
              "Half-range expansions allow representation of non-periodic functions on [0, L] as pure sine or cosine series.",
              "Cosine series corresponds to an even reflection; Sine series corresponds to an odd reflection.",
              "Parseval’s Theorem equates total time-domain signal power to the sum of frequency-domain harmonic coefficients."
            ],
            "hinglish": [
              "Half-range expansions [0, L] me functions ko pure sine ya cosine series me convert karte hain.",
              "Cosine series even extension aur Sine series odd extension hoti hai.",
              "Parseval theorem time domain total energy ko frequency harmonics ke square sum ke barabar karti hai."
            ],
            "hi": [
              "अर्ध-परास विस्तार फलन को केवल साइन या कोसाइन श्रेणी में व्यक्त करता है।",
              "कोसाइन श्रेणी सम विस्तार तथा साइन श्रेणी विषम विस्तार को निरूपित करती है।",
              "पार्सवल प्रमेय कुल संकेत ऊर्जा को संनादी गुणांकों के वर्गों के योग के तुल्य मानती है।"
            ]
          },
          "quiz": [
            {
              "id": "math-u2-q3",
              "question": {
                "en": "Which Fourier coefficient is always ZERO in a half-range sine series?",
                "hinglish": "Half-range sine series me konsa Fourier coefficient hamesha ZERO hota hai?",
                "hi": "अर्ध-परास साइन श्रेणी में कौन सा फूरियर गुणांक सदैव शून्य होता है?"
              },
              "options": [
                "Both a₀ and all aₙ",
                "Only bₙ",
                "Only a₀",
                "None of them"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "A half-range sine series contains only sine terms, so a₀ = 0 and all aₙ = 0.",
                "hinglish": "Sine series me sirf sine terms aate hain, isliye a₀ aur sabhi aₙ zero hote hain.",
                "hi": "साइन श्रेणी में केवल साइन पद होते हैं, अतः a₀ तथा सभी aₙ शून्य होते हैं।"
              },
              "hint": {
                "en": "Sine series has odd symmetry, so all cosine terms vanish.",
                "hinglish": "Odd symmetry me cosine terms gayab ho jaate hain.",
                "hi": "विषम सममिति में सभी कोसाइन पद समाप्त हो जाते हैं।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "For a function f(x) defined on [0, L], its Half-Range Cosine series is f(x) = a₀/2 + ∑ aₙ cos(nπx/L) where aₙ = (2/L) ∫₀^L f(x) cos(nπx/L) dx. Its Half-Range Sine series is f(x) = ∑ bₙ sin(nπx/L) where bₙ = (2/L) ∫₀^L f(x) sin(nπx/L) dx. Parseval’s identity states: (2/L) ∫₀^L [f(x)]² dx = a₀²/2 + ∑ aₙ² (for cosine series).",
            "hinglish": "Interval [0, L] par Half-Range Cosine me sirf cosine terms aate hain (even extension), aur Half-Range Sine me sirf sine terms aate hain (odd extension).",
            "hi": "[0, L] में अर्ध-परास कोसाइन श्रेणी में केवल कोसाइन पद तथा अर्ध-परास साइन श्रेणी में केवल साइन पद होते हैं।"
          },
          "terminology": [
            {
              "term": "Even Extension",
              "definition": {
                "en": "Reflecting f(x) symmetrically across the y-axis to create an even function of period 2L.",
                "hinglish": "Function ko y-axis ke across mirror karke even function banana.",
                "hi": "फलन को y-अक्ष के परितः परावर्तित कर सम फलन बनाना।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Unit II covers infinite sequences and series: tests for convergence (Comparison, Ratio, Root, Integral, Leibniz alternating test); power series with radius of convergence R = lim |c_n / c_{n+1}|; Taylor expansions of elementary functions; and Fourier harmonic analysis representing periodic functions as harmonic sine/cosine series with Parseval’s energy identity.",
          "hinglish": "Unit II sequences aur series cover karta hai: Ratio, Root, Integral aur Leibniz tests; Power series aur radius of convergence R; Taylor expansions; aur Fourier harmonic series a0, an, bn coefficients ke sath.",
          "hi": "इकाई 2 अनुक्रम तथा श्रेणियों को समाहित करती है: अभिसरण परीक्षण, घात श्रेणी तथा अभिसरण त्रिज्या, टेलर विस्तार, एवं फूरियर संनादी श्रेणी तथा पार्सवल ऊर्जा प्रमेय।"
        },
        "shortNotes": [
          {
            "topic": "D’Alembert’s Ratio Test",
            "content": {
              "en": "L = lim |u_{n+1} / u_n|. L < 1 converges; L > 1 diverges; L = 1 inconclusive.",
              "hinglish": "L < 1 par converge, L > 1 par diverge, L = 1 inconclusive.",
              "hi": "L < 1 पर अभिसरण, L > 1 पर अपसरण, L = 1 पर अनिर्णीत।"
            }
          },
          {
            "topic": "Fourier Series",
            "content": {
              "en": "f(x) = a₀/2 + ∑ [aₙ cos(nx) + bₙ sin(nx)] with Euler integral formulas.",
              "hinglish": "a0/2 + sum [an cos(nx) + bn sin(nx)].",
              "hi": "आवर्ती फलन का साइन और कोसाइन पदों में विस्तार।"
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "D’Alembert Ratio Limit",
            "formula": "L = \\lim_{n \\to \\infty} \\left| \\frac{u_{n+1}}{u_n} \\right|",
            "units": "Dimensionless",
            "note": "L < 1 converges"
          },
          {
            "name": "Radius of Convergence",
            "formula": "R = \\lim_{n \\to \\infty} \\left| \\frac{c_n}{c_{n+1}} \\right|",
            "units": "Dimensionless",
            "note": "Converges inside (a-R, a+R)"
          },
          {
            "name": "Fourier Euler Formulas",
            "formula": "a_n = \\frac{1}{\\pi} \\int_{-\\pi}^\\pi f(x) \\cos(nx) \\, dx, \\quad b_n = \\frac{1}{\\pi} \\int_{-\\pi}^\\pi f(x) \\sin(nx) \\, dx",
            "units": "Signal units",
            "note": "Period 2π"
          },
          {
            "name": "Parseval Identity",
            "formula": "\\frac{1}{L} \\int_{-L}^L [f(x)]^2 \\, dx = \\frac{a_0^2}{2} + \\sum_{n=1}^\\infty (a_n^2 + b_n^2)",
            "units": "Energy units",
            "note": "Conservation of signal energy"
          }
        ],
        "mindMap": [
          {
            "node": "Infinite Series",
            "children": [
              "Ratio Test",
              "Cauchy Root Test",
              "Integral Test",
              "Alternating Leibniz"
            ]
          },
          {
            "node": "Power Series",
            "children": [
              "Radius of Convergence R",
              "Interval of Convergence",
              "Taylor / Maclaurin Series"
            ]
          },
          {
            "node": "Fourier Analysis",
            "children": [
              "Dirichlet Conditions",
              "Euler Formulas",
              "Half-Range Expansions",
              "Parseval Theorem"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Taylor Series",
            "conceptB": "Fourier Series",
            "comparisonPoints": [
              {
                "feature": "Basis Functions",
                "a": "Polynomial powers: 1, x, x², x³, ...",
                "b": "Harmonic waves: 1, cos(nx), sin(nx)"
              },
              {
                "feature": "Scope",
                "a": "Local behavior around expansion point x = a",
                "b": "Global periodic behavior over entire interval"
              },
              {
                "feature": "Discontinuities",
                "a": "Fails at discontinuities",
                "b": "Converges to average jump value"
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "What is the radius of convergence of e^x?",
            "back": "R = ∞"
          },
          {
            "front": "When is the D’Alembert ratio test inconclusive?",
            "back": "When L = lim |u_{n+1} / u_n| = 1"
          },
          {
            "front": "What is the sum of ∑_{n=1}^∞ 1/n² from Parseval’s identity?",
            "back": "π² / 6"
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Why does a half-range cosine series contain only cosine terms?",
            "answer": "A half-range cosine series represents an even reflection of f(x) across the y-axis. Because the product of an even function and sin(nx) (odd) is odd, all sine integrals b_n integrate to zero over symmetric intervals."
          }
        ],
        "longAnswerQuestions": [
          {
            "question": "Find the Fourier series of the periodic function f(x) = x² in [-π, π] and deduce that ∑_{n=1}^∞ (-1)^(n+1) / n² = π² / 12.",
            "outline": "1. Observe f(x) = x² is an even function, so b_n = 0 for all n.\n2. Compute a₀ = (2/π) ∫₀^π x² dx = (2/π)(π³/3) = 2π²/3.\n3. Compute a_n = (2/π) ∫₀^π x² cos(nx) dx using integration by parts twice: a_n = 4(-1)^n / n².\n4. Write Fourier series: x² = π²/3 + 4 ∑_{n=1}^∞ [(-1)^n / n²] cos(nx).\n5. Substitute x = 0: 0 = π²/3 + 4 ∑ (-1)^n / n²  =>  ∑ (-1)^(n+1) / n² = π² / 12."
          }
        ],
        "numericalPractice": [
          {
            "question": "Find the radius of convergence R of ∑_{n=0}^∞ (3^n / n!) x^n.",
            "given": "c_n = 3^n / n!",
            "formula": "R = lim |c_n / c_{n+1}|",
            "solution": "R = lim [3^n / n!] / [3^(n+1) / (n+1)!] = lim (n+1)/3 = ∞. Converges for all real x."
          }
        ]
      }
    },
    {
      "id": "math-u3",
      "unitNumber": "Unit III",
      "title": "Complex Variables",
      "description": "Real and complex numbers, complex plane geometry, Cauchy-Riemann equations in Cartesian and polar forms, analytic and harmonic functions, harmonic conjugates, contour integrals, Cauchy-Goursat theorem, Cauchy Integral Formula, Taylor and Laurent series expansions, classification of singularities (poles, removable, essential), Cauchy Residue Theorem, evaluation of real trigonometric integrals and improper integrals via Bromwich contour.",
      "topics": [
        "Real and complex numbers, polar form z = r e^(iθ), and geometry of the complex plane",
        "Functions of complex variables, limits, continuity, and complex differentiability",
        "Cauchy-Riemann equations in Cartesian (u_x = v_y, u_y = -v_x) and polar forms",
        "Analytic functions, entire functions, and harmonic functions satisfying Laplace equation",
        "Harmonic conjugates and Milne-Thomson method for constructing analytic functions",
        "Contour integrals, simply and multiply connected domains, and Cauchy-Goursat theorem",
        "Cauchy’s Integral Formula and Cauchy’s Integral Formula for higher derivatives",
        "Taylor’s and Laurent’s series expansions in annular domains",
        "Zeros and singularities: Removable singularities, poles of order m, and essential singularities",
        "Residue at a pole, residue formula, and the Cauchy Residue Theorem",
        "Evaluation of real definite trigonometric integrals over [0, 2π] using contour integration",
        "Evaluation of improper real integrals using semicircular and Bromwich contours"
      ],
      "lessons": [
        {
          "id": "math-u3-l1",
          "unitId": "math-u3",
          "subjectId": "mathematics",
          "title": "Cauchy-Riemann Equations, Contour Integrals & Residue Calculus",
          "durationMinutes": 30,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Partial differentiation",
            "Basic complex numbers (z = x + iy)"
          ],
          "realLifeQuestion": {
            "en": "How do electronic radar engineers and aerodynamicists calculate smooth 2D laminar fluid flow around an airplane wing using imaginary numbers (i = √-1)?",
            "hinglish": "Airplane ke wing ke aas paas air flow calculate karne ke liye engineers imaginary numbers (i = √-1) aur complex numbers ka use kaise karte hain?",
            "hi": "विमान के पंखों के चारों ओर वायु प्रवाह की गणना करने के लिए इंजीनियर सम्मिश्र संख्याओं (i = √-1) का उपयोग कैसे करते हैं?"
          },
          "simpleExplanation": {
            "en": "When a function f(z) = u(x, y) + i v(x, y) is differentiable in the complex plane, its real part u and imaginary part v are inextricably linked by the Cauchy-Riemann equations: ∂u/∂x = ∂v/∂y and ∂u/∂y = -∂v/∂x! This guarantees that u represents the velocity potential and v represents the streamlines of the fluid! The curves u = c and v = k intersect everywhere at right angles (conformal mapping), creating a perfect natural grid for airflow!",
            "hinglish": "Agar complex function f(z) = u + iv differentiable hai, toh real part u aur imaginary part v aapas me Cauchy-Riemann equations se jud jaate hain: ux = vy aur uy = -vx. Isse u velocity potential aur v streamlines ban jaati hain, jo hamesha 90 degree par intersect karti hain.",
            "hi": "यदि सम्मिश्र फलन f(z) = u + iv अवकलनीय है, तो कोशी-रीमान समीकरणों (ux = vy, uy = -vx) के कारण u तथा v लाप्लास समीकरण को संतुष्ट करते हैं और समकोण पर प्रतिच्छेद करते हैं।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine stretching a smooth rubber sheet on a frame. If you press a coin down into the sheet, the height represents the real part u, and the orthogonal slope lines represent the imaginary part v. Both automatically satisfy Laplace’s equation ∇²u = 0 (harmonic functions).",
              "hinglish": "Ek rubber sheet ki tarah: agar ek jagah dabao, toh sheet smoothly stretch hoti hai. Uski height u Laplace equation satisfy karti hai.",
              "hi": "तनी हुई रबर शीट की भांति जिसकी ऊंचाई लाप्लास समीकरण को संतुष्ट करने वाले प्रसंवादी फलन (Harmonic function) को दर्शाती है।"
            },
            "limitations": {
              "en": "If the function has a puncture (singularity/pole like 1/z at z=0), the sheet tears and the function is not analytic at that point.",
              "hinglish": "Singularity ya pole par function analytic nahi rehta.",
              "hi": "विचित्रता (Singularity) पर फलन विश्लेषिक नहीं होता।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "A function f(z) = u(x, y) + iv(x, y) is analytic at z₀ if its complex derivative f’(z) = lim_{Δz→0} [f(z₀ + Δz) - f(z₀)] / Δz exists and is unique regardless of path. Necessary condition: u and v satisfy Cauchy-Riemann equations: u_x = v_y and u_y = -v_x. Cauchy Residue Theorem: ∮_C f(z) dz = 2πi ∑ Res(f, z_k) for all poles z_k enclosed by C.",
              "hinglish": "f(z) = u + iv tab analytic hota hai jab C-R equations (ux = vy, uy = -vx) satisfy hon. Cauchy Residue Theorem ke mutabiq contour integral = 2πi * (sum of residues inside contour).",
              "hi": "कोशी-रीमान समीकरणों को संतुष्ट करने वाला फलन विश्लेषिक कहलाता है। कोशी अवशेष प्रमेय के अनुसार ∮_C f(z) dz = 2πi ∑ Res(f, z_k) होता है।"
            },
            "keyTerms": [
              {
                "term": "Analytic Function",
                "definition": {
                  "en": "A complex function that is single-valued and possesses a unique derivative at every point in a region.",
                  "hinglish": "Aisa complex function jo domain ke har point par uniquely differentiable ho.",
                  "hi": "वह सम्मिश्र फलन जो क्षेत्र के प्रत्येक बिंदु पर अद्वितीय रूप से अवकलनीय हो।"
                }
              },
              {
                "term": "Residue at a Pole",
                "definition": {
                  "en": "The coefficient b₁ of the 1/(z - z₀) term in the Laurent series expansion around singularity z₀: Res(f, z₀) = lim_{z→z₀} (z - z₀) f(z) for a simple pole.",
                  "hinglish": "Laurent series me 1/(z - z0) ka coefficient b1.",
                  "hi": "लॉरेंट श्रेणी में 1/(z - z0) पद का गुणांक।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}, \\quad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}, \\quad \\oint_C f(z) \\, dz = 2\\pi i \\sum_{k=1}^m \\text{Res}(f, z_k)",
            "symbolMeaning": [
              "u(x, y): Real part of analytic function f(z)",
              "v(x, y): Imaginary part (harmonic conjugate)",
              "Res(f, z_k): Residue of f(z) at enclosed pole z_k",
              "C: Simple closed positively oriented (counterclockwise) contour"
            ],
            "units": "Complex plane coordinates [dimensionless or meters]",
            "assumptions": [
              "f(z) must be analytic on and inside contour C except at isolated poles z_k",
              "Contour C must be traversed in counterclockwise direction"
            ],
            "derivation": [
              "Calculate f’(z) approaching along horizontal line Δz = Δx: f’(z) = ∂u/∂x + i ∂v/∂x.",
              "Calculate f’(z) approaching along vertical line Δz = i Δy: f’(z) = (1/i)(∂u/∂y + i ∂v/∂y) = ∂v/∂y - i ∂u/∂y.",
              "Equating real and imaginary parts: ∂u/∂x = ∂v/∂y and ∂u/∂y = -∂v/∂x (Cauchy-Riemann equations)."
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Evaluate the contour integral I = ∮_C [ (z² + 1) / (z - 2) ] dz where C is the circle |z| = 3 traversed counterclockwise.",
              "hinglish": "Evaluate the contour integral I = ∮_C [ (z² + 1) / (z - 2) ] dz where C is the circle |z| = 3 traversed counterclockwise.",
              "hi": "Evaluate the contour integral I = ∮_C [ (z² + 1) / (z - 2) ] dz where C is the circle |z| = 3 traversed counterclockwise."
            },
            "given": [
              "f(z) = (z² + 1) / (z - 2)",
              "Contour C: |z| = 3"
            ],
            "toFind": "Value of contour integral I",
            "formulaUsed": "\\oint_C f(z) \\, dz = 2\\pi i \\cdot \\text{Res}(f, 2)",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Locate the singularities (poles) of the integrand",
                "explanation": {
                  "en": "The denominator z - 2 = 0 yields a simple pole at z = 2.",
                  "hinglish": "The denominator z - 2 = 0 yields a simple pole at z = 2.",
                  "hi": "The denominator z - 2 = 0 yields a simple pole at z = 2."
                },
                "math": "z_0 = 2 \\text{ is a simple pole}"
              },
              {
                "stepNumber": 2,
                "title": "Check if the pole lies inside the contour C",
                "explanation": {
                  "en": "The contour is the circle of radius 3 centered at 0: |z| = 3. Since |2| = 2 < 3, the pole lies strictly INSIDE contour C.",
                  "hinglish": "The contour is the circle of radius 3 centered at 0: |z| = 3. Since |2| = 2 < 3, the pole lies strictly INSIDE contour C.",
                  "hi": "The contour is the circle of radius 3 centered at 0: |z| = 3. Since |2| = 2 < 3, the pole lies strictly INSIDE contour C."
                },
                "math": "|z_0| = |2| = 2 < 3 \\implies z_0 \\in \\text{interior of } C"
              },
              {
                "stepNumber": 3,
                "title": "Calculate the residue at z = 2",
                "explanation": {
                  "en": "For a simple pole: Res(f, 2) = lim_{z→2} (z - 2) f(z) = lim_{z→2} (z² + 1) = 2² + 1 = 5.",
                  "hinglish": "For a simple pole: Res(f, 2) = lim_{z→2} (z - 2) f(z) = lim_{z→2} (z² + 1) = 2² + 1 = 5.",
                  "hi": "For a simple pole: Res(f, 2) = lim_{z→2} (z - 2) f(z) = lim_{z→2} (z² + 1) = 2² + 1 = 5."
                },
                "math": "\\text{Res}(f, 2) = \\lim_{z \\to 2} (z - 2) \\frac{z^2 + 1}{z - 2} = 2^2 + 1 = 5"
              },
              {
                "stepNumber": 4,
                "title": "Apply Cauchy’s Residue Theorem",
                "explanation": {
                  "en": "Multiply the residue sum by 2πi.",
                  "hinglish": "Multiply the residue sum by 2πi.",
                  "hi": "Multiply the residue sum by 2πi."
                },
                "math": "I = 2\\pi i \\times 5 = 10\\pi i"
              }
            ],
            "finalAnswer": "I = 10πi"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Calculating residues for poles that lie OUTSIDE the contour.",
                "hinglish": "Contour ke bahar wale poles ka residue bhi add kar dena.",
                "hi": "कंटूर के बाहर स्थित ध्रुवों के अवशेषों को भी जोड़ लेना।"
              },
              "correction": {
                "en": "Cauchy’s Residue Theorem only includes poles strictly INSIDE the contour C. Outside poles contribute 0.",
                "hinglish": "Sirf contour ke andar wale poles ka residue add hota hai.",
                "hi": "केवल कंटूर के भीतर स्थित ध्रुवों के अवशेष ही जोड़े जाते हैं।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u3-p1",
              "level": "Intermediate",
              "question": {
                "en": "If u(x, y) = x² - y², what is its harmonic conjugate v(x, y) such that f(z) = u + iv is analytic and f(0) = 0?",
                "hinglish": "u = x² - y² ka harmonic conjugate v(x, y) kya hoga?",
                "hi": "u = x² - y² का प्रसंवादी संयुग्मी v(x, y) क्या होगा?"
              },
              "options": [
                "v = 2xy",
                "v = -2xy",
                "v = x² + y²",
                "v = 2x - 2y"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "By C-R equations: v_y = u_x = 2x => v = 2xy + g(x). v_x = -u_y = 2y => 2y + g’(x) = 2y => g’(x) = 0 => v = 2xy. Then f(z) = (x²-y²) + i(2xy) = z².",
                "hinglish": "C-R equations se v = 2xy milta hai, jisse f(z) = z² banta hai.",
                "hi": "C-R समीकरणों द्वारा v = 2xy प्राप्त होता है, जिससे f(z) = z² बनता है।"
              },
              "hint": {
                "en": "Integrate v_y = u_x = 2x with respect to y.",
                "hinglish": "v_y = 2x ko y ke respect me integrate karein.",
                "hi": "v_y = 2x का y के सापेक्ष समाकलन करें।"
              }
            }
          ],
          "summary": {
            "en": [
              "Analytic functions satisfy the Cauchy-Riemann equations: u_x = v_y and u_y = -v_x.",
              "Both real and imaginary parts of an analytic function are harmonic: ∇²u = 0 and ∇²v = 0.",
              "Contour integrals over closed loops without poles evaluate to zero (Cauchy-Goursat).",
              "Cauchy Residue Theorem evaluates closed integrals as ∮ f(z) dz = 2πi ∑ Res."
            ],
            "hinglish": [
              "Analytic functions C-R equations satisfy karte hain: ux = vy aur uy = -vx.",
              "Real aur imaginary dono parts harmonic hote hain (Laplace equation satisfy karte hain).",
              "Bina pole wale closed contour ka integral zero hota hai (Cauchy-Goursat).",
              "Poles hone par integral = 2πi * (sum of residues) hota hai."
            ],
            "hi": [
              "विश्लेषिक फलन कोशी-रीमान समीकरणों (ux = vy, uy = -vx) को संतुष्ट करते हैं।",
              "विश्लेषिक फलन के वास्तविक और काल्पनिक दोनों भाग प्रसंवादी होते हैं।",
              "ध्रुव रहित संवृत कंटूर का समाकलन शून्य होता है (कोशी-गूरसा)।",
              "कोशी अवशेष प्रमेय: ∮ f(z) dz = 2πi ∑ Res।"
            ]
          },
          "quiz": [
            {
              "id": "math-u3-q1",
              "question": {
                "en": "What is the residue of f(z) = 1 / (z - 3)³ at its pole z = 3?",
                "hinglish": "f(z) = 1 / (z - 3)³ ka pole z = 3 par residue kya hoga?",
                "hi": "f(z) = 1 / (z - 3)³ का ध्रुव z = 3 पर अवशेष क्या होगा?"
              },
              "options": [
                "0",
                "1",
                "1/6",
                "6"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "The Laurent series of f(z) around z = 3 has only the (z - 3)⁻³ term. The coefficient of (z - 3)⁻¹ is 0, so the residue is 0.",
                "hinglish": "1/(z-3) ka coefficient zero hai, isliye residue 0 hoga.",
                "hi": "लॉरेंट श्रेणी में 1/(z - 3) पद का गुणांक शून्य होने के कारण अवशेष 0 है।"
              },
              "hint": {
                "en": "Residue is ALWAYS the coefficient of 1/(z - z₀).",
                "hinglish": "Residue hamesha 1/(z - z0) ka coefficient hota hai.",
                "hi": "अवशेष सदैव 1/(z - z0) पद का गुणांक होता है।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "A function f(z) = u(x, y) + iv(x, y) is analytic at z₀ if its complex derivative f’(z) = lim_{Δz→0} [f(z₀ + Δz) - f(z₀)] / Δz exists and is unique regardless of path. Necessary condition: u and v satisfy Cauchy-Riemann equations: u_x = v_y and u_y = -v_x. Cauchy Residue Theorem: ∮_C f(z) dz = 2πi ∑ Res(f, z_k) for all poles z_k enclosed by C.",
            "hinglish": "f(z) = u + iv tab analytic hota hai jab C-R equations (ux = vy, uy = -vx) satisfy hon. Cauchy Residue Theorem ke mutabiq contour integral = 2πi * (sum of residues inside contour).",
            "hi": "कोशी-रीमान समीकरणों को संतुष्ट करने वाला फलन विश्लेषिक कहलाता है। कोशी अवशेष प्रमेय के अनुसार ∮_C f(z) dz = 2πi ∑ Res(f, z_k) होता है।"
          },
          "terminology": [
            {
              "term": "Analytic Function",
              "definition": {
                "en": "A complex function that is single-valued and possesses a unique derivative at every point in a region.",
                "hinglish": "Aisa complex function jo domain ke har point par uniquely differentiable ho.",
                "hi": "वह सम्मिश्र फलन जो क्षेत्र के प्रत्येक बिंदु पर अद्वितीय रूप से अवकलनीय हो।"
              }
            },
            {
              "term": "Residue at a Pole",
              "definition": {
                "en": "The coefficient b₁ of the 1/(z - z₀) term in the Laurent series expansion around singularity z₀: Res(f, z₀) = lim_{z→z₀} (z - z₀) f(z) for a simple pole.",
                "hinglish": "Laurent series me 1/(z - z0) ka coefficient b1.",
                "hi": "लॉरेंट श्रेणी में 1/(z - z0) पद का गुणांक।"
              }
            }
          ]
        },
        {
          "id": "math-u3-l2",
          "unitId": "math-u3",
          "subjectId": "mathematics",
          "title": "Harmonic Functions, Milne-Thomson Method & Conformal Maps",
          "durationMinutes": 30,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Partial derivatives",
            "Cauchy-Riemann equations"
          ],
          "realLifeQuestion": {
            "en": "How do aeronautical engineers model the 2D laminar airflow around an aircraft wing without solving non-linear Navier-Stokes equations?",
            "hinglish": "Airplane wing ke around smooth 2D air flow calculate karne ke liye Milne-Thomson method aur conformal mapping kaise use hoti hai?",
            "hi": "विमान के पंखों के चारों ओर वायु प्रवाह की गणना हेतु मिल्ने-थॉमसन विधि तथा अनुकोण प्रतिचित्रण का उपयोग कैसे किया जाता है?"
          },
          "simpleExplanation": {
            "en": "In 2D potential flow, the velocity potential φ and stream function ψ satisfy Laplace’s equation ∇²φ = 0 and ∇²ψ = 0! They form an analytic complex potential W(z) = φ + iψ. Streamlines (lines of constant ψ) never cross and show the exact flow lines of air! The Milne-Thomson method allows engineers to construct the complete analytic function f(z) directly from the potential φ without ever solving integrals for ψ!",
            "hinglish": "2D flow me velocity potential phi aur stream function psi milkar analytic function W(z) = phi + i*psi banate hain. Streamlines air ke path ko dikhati hain. Milne-Thomson method se hum directly f(z) nikaal sakte hain: f'(z) = ux(z, 0) - i uy(z, 0).",
            "hi": "2D प्रवाह में वेग विभव तथा धारा फलन मिलकर विश्लेषिक फलन W(z) बनाते हैं। मिल्ने-थॉमसन विधि द्वारा सीधे विश्लेषिक फलन f(z) का निर्माण किया जा सकता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of a topographical hiking map: contour lines of equal elevation are orthogonal to the steepest descent path of falling rainwater. In complex analysis, equipotential lines and streamlines form an identical orthogonal coordinate grid.",
              "hinglish": "Pahad ke topographic map ki tarah jahan elevation contour lines paani ke behne ke raste ke hamesha 90 degree par hoti hain.",
              "hi": "टोपोग्राफिक मानचित्र की भांति जहां समोच्च रेखाएं जल प्रवाह की दिशा के लंबवत होती हैं।"
            },
            "limitations": {
              "en": "Conformal mapping preserves angles everywhere except at critical points where f’(z) = 0.",
              "hinglish": "Jahan f’(z) = 0 ho wahan angles preserve nahi hote.",
              "hi": "जहां f’(z) = 0 हो वहां कोण संरक्षित नहीं रहते।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "A real-valued function u(x, y) with continuous second partial derivatives is Harmonic if ∇²u = u_xx + u_yy = 0. If u is harmonic, there exists a harmonic conjugate v(x, y) such that f(z) = u + iv is analytic. Milne-Thomson theorem: f’(z) = u_x(z, 0) - i u_y(z, 0). Integrating f’(z) with respect to z directly yields f(z) + C.",
              "hinglish": "Agar u_xx + u_yy = 0 ho toh u Harmonic function hota hai. Milne-Thomson formula: f'(z) = ux(z, 0) - i uy(z, 0) ko integrate karke f(z) mil jata hai.",
              "hi": "यदि u_xx + u_yy = 0 हो तो फलन प्रसंवादी (Harmonic) कहलाता है। मिल्ने-थॉमसन सूत्र: f'(z) = ux(z, 0) - i uy(z, 0) से सीधे विश्लेषिक फलन प्राप्त होता है।"
            },
            "keyTerms": [
              {
                "term": "Milne-Thomson Method",
                "definition": {
                  "en": "A shortcut technique that constructs analytic function f(z) from u(x, y) by substituting x = z and y = 0.",
                  "hinglish": "x = z aur y = 0 rakh kar directly f(z) nikaalne ka mathematical method.",
                  "hi": "x = z तथा y = 0 प्रतिस्थापित कर सीधे विश्लेषिक फलन प्राप्त करने की विधि।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "\\nabla^2 u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0, \\quad f'(z) = u_x(z, 0) - i u_y(z, 0)",
            "symbolMeaning": [
              "u(x, y): Real harmonic potential",
              "f(z): Analytic complex function",
              "z: Complex variable x + iy"
            ],
            "units": "Dimensionless",
            "assumptions": [
              "Partial derivatives of u(x, y) up to second order must be continuous"
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Verify that u(x, y) = x³ - 3xy² + 3x² - 3y² + 1 is harmonic, and find the corresponding analytic function f(z) using the Milne-Thomson method.",
              "hinglish": "Verify that u(x, y) = x³ - 3xy² + 3x² - 3y² + 1 is harmonic, and find the corresponding analytic function f(z) using the Milne-Thomson method.",
              "hi": "Verify that u(x, y) = x³ - 3xy² + 3x² - 3y² + 1 is harmonic, and find the corresponding analytic function f(z) using the Milne-Thomson method."
            },
            "given": [
              "u(x, y) = x³ - 3xy² + 3x² - 3y² + 1"
            ],
            "toFind": "Verify harmonicity and construct f(z)",
            "formulaUsed": "f'(z) = u_x(z, 0) - i u_y(z, 0)",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Compute first partial derivatives",
                "explanation": {
                  "en": "Differentiate u with respect to x and y.",
                  "hinglish": "Differentiate u with respect to x and y.",
                  "hi": "Differentiate u with respect to x and y."
                },
                "math": "u_x = 3x^2 - 3y^2 + 6x, \\quad u_y = -6xy - 6y"
              },
              {
                "stepNumber": 2,
                "title": "Compute second partial derivatives and verify Laplace equation",
                "explanation": {
                  "en": "u_xx = 6x + 6, u_yy = -6x - 6. Sum: u_xx + u_yy = (6x + 6) + (-6x - 6) = 0.",
                  "hinglish": "u_xx = 6x + 6, u_yy = -6x - 6. Sum: u_xx + u_yy = (6x + 6) + (-6x - 6) = 0.",
                  "hi": "u_xx = 6x + 6, u_yy = -6x - 6. Sum: u_xx + u_yy = (6x + 6) + (-6x - 6) = 0."
                },
                "math": "u_{xx} + u_{yy} = 0 \\implies u(x, y) \\text{ is Harmonic}"
              },
              {
                "stepNumber": 3,
                "title": "Apply Milne-Thomson substitution x = z, y = 0",
                "explanation": {
                  "en": "u_x(z, 0) = 3z² + 6z, u_y(z, 0) = 0.",
                  "hinglish": "u_x(z, 0) = 3z² + 6z, u_y(z, 0) = 0.",
                  "hi": "u_x(z, 0) = 3z² + 6z, u_y(z, 0) = 0."
                },
                "math": "f'(z) = u_x(z, 0) - i u_y(z, 0) = 3z^2 + 6z - i(0) = 3z^2 + 6z"
              },
              {
                "stepNumber": 4,
                "title": "Integrate f’(z) with respect to z",
                "explanation": {
                  "en": "Integrate 3z² + 6z.",
                  "hinglish": "Integrate 3z² + 6z.",
                  "hi": "Integrate 3z² + 6z."
                },
                "math": "f(z) = \\int (3z^2 + 6z) \\, dz = z^3 + 3z^2 + C"
              }
            ],
            "finalAnswer": "u is harmonic; analytic function is f(z) = z³ + 3z² + C (with C = 1, f(z) = z³ + 3z² + 1)"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Putting a positive sign instead of a minus sign in f’(z) = u_x(z, 0) - i u_y(z, 0).",
                "hinglish": "Milne-Thomson formula me minus ki jagah plus i uy(z, 0) likh dena.",
                "hi": "मिल्ने-थॉमसन सूत्र में ऋण के स्थान पर धन चिह्न का प्रयोग करना।"
              },
              "correction": {
                "en": "Because v_x = -u_y, the derivative f’(z) = u_x + i v_x = u_x - i u_y.",
                "hinglish": "f'(z) me hamesha minus sign aata hai: ux - i uy.",
                "hi": "v_x = -u_y होने के कारण सूत्र में सदैव ऋण चिह्न ux - i uy आता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u3-p2",
              "level": "Intermediate",
              "question": {
                "en": "Which of the following functions u(x, y) is NOT harmonic?",
                "hinglish": "Inme se konsa function harmonic NAHI hai?",
                "hi": "निम्नलिखित में से कौन सा फलन प्रसंवादी नहीं है?"
              },
              "options": [
                "u = x² + y²",
                "u = x² - y²",
                "u = e^x cos(y)",
                "u = 2xy"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "For u = x² + y², u_xx + u_yy = 2 + 2 = 4 ≠ 0, so it does NOT satisfy Laplace’s equation.",
                "hinglish": "u = x² + y² me u_xx + u_yy = 2 + 2 = 4 ≠ 0 hota hai, isliye yeh harmonic nahi hai.",
                "hi": "x² + y² के लिए द्वितीय अवकलजों का योग 4 ≠ 0 है, अतः यह प्रसंवादी नहीं है।"
              },
              "hint": {
                "en": "Check which one fails u_xx + u_yy = 0.",
                "hinglish": "u_xx + u_yy check karein.",
                "hi": "u_xx + u_yy = 0 की जांच करें।"
              }
            }
          ],
          "summary": {
            "en": [
              "Harmonic functions satisfy Laplace’s equation ∇²u = 0.",
              "Every analytic function has harmonic real and imaginary components.",
              "Milne-Thomson method constructs f(z) directly via f’(z) = u_x(z, 0) - i u_y(z, 0)."
            ],
            "hinglish": [
              "Harmonic functions Laplace equation ∇²u = 0 satisfy karte hain.",
              "Analytic function ke u aur v dono harmonic hote hain.",
              "Milne-Thomson method directly f'(z) = ux(z, 0) - i uy(z, 0) se f(z) banata hai."
            ],
            "hi": [
              "प्रसंवादी फलन लाप्लास समीकरण ∇²u = 0 को संतुष्ट करते हैं।",
              "विश्लेषिक फलन के घटक प्रसंवादी होते हैं।",
              "मिल्ने-थॉमसन विधि f’(z) = ux(z, 0) - i uy(z, 0) द्वारा फलन का निर्माण करती है।"
            ]
          },
          "quiz": [
            {
              "id": "math-u3-q2",
              "question": {
                "en": "If f(z) = u + iv is analytic, what is the angle between curves u(x,y) = c₁ and v(x,y) = c₂ at their intersection?",
                "hinglish": "u = c1 aur v = c2 curves ke beech intersection par angle kya hota hai?",
                "hi": "विश्लेषिक फलन के लिए u = c1 तथा v = c2 वक्रों के प्रतिच्छेद बिंदु पर कोण क्या होता है?"
              },
              "options": [
                "90° (Orthogonal)",
                "45°",
                "0° (Parallel)",
                "180°"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "By Cauchy-Riemann equations, grad(u) · grad(v) = u_x v_x + u_y v_y = u_x (-u_y) + u_y (u_x) = 0. They are strictly orthogonal (90°).",
                "hinglish": "Grad(u) aur Grad(v) ka dot product 0 hota hai, isliye angle hamesha 90 degree hota hai.",
                "hi": "प्रवणताओं का अदिश गुणन शून्य होने के कारण वे सदैव परस्पर लंबवत (90°) होते हैं।"
              },
              "hint": {
                "en": "Calculate dot product of normal vectors using C-R equations.",
                "hinglish": "C-R equations use karke dot product nikalein.",
                "hi": "अभिलंबों के अदिश गुणन की गणना करें।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "A real-valued function u(x, y) with continuous second partial derivatives is Harmonic if ∇²u = u_xx + u_yy = 0. If u is harmonic, there exists a harmonic conjugate v(x, y) such that f(z) = u + iv is analytic. Milne-Thomson theorem: f’(z) = u_x(z, 0) - i u_y(z, 0). Integrating f’(z) with respect to z directly yields f(z) + C.",
            "hinglish": "Agar u_xx + u_yy = 0 ho toh u Harmonic function hota hai. Milne-Thomson formula: f'(z) = ux(z, 0) - i uy(z, 0) ko integrate karke f(z) mil jata hai.",
            "hi": "यदि u_xx + u_yy = 0 हो तो फलन प्रसंवादी (Harmonic) कहलाता है। मिल्ने-थॉमसन सूत्र: f'(z) = ux(z, 0) - i uy(z, 0) से सीधे विश्लेषिक फलन प्राप्त होता है।"
          },
          "terminology": [
            {
              "term": "Milne-Thomson Method",
              "definition": {
                "en": "A shortcut technique that constructs analytic function f(z) from u(x, y) by substituting x = z and y = 0.",
                "hinglish": "x = z aur y = 0 rakh kar directly f(z) nikaalne ka mathematical method.",
                "hi": "x = z तथा y = 0 प्रतिस्थापित कर सीधे विश्लेषिक फलन प्राप्त करने की विधि।"
              }
            }
          ]
        },
        {
          "id": "math-u3-l3",
          "unitId": "math-u3",
          "subjectId": "mathematics",
          "title": "Laurent Series, Singularities & Evaluation of Real Integrals via Bromwich Contour",
          "durationMinutes": 30,
          "difficulty": "Advanced",
          "prerequisites": [
            "Taylor series in complex plane",
            "Cauchy Residue Theorem"
          ],
          "realLifeQuestion": {
            "en": "How do control systems engineers calculate the inverse Laplace transform of transfer functions to predict whether an automated robotic arm will oscillate stably or vibrate out of control?",
            "hinglish": "Robotic control systems me transfer functions ka inverse Laplace transform nikalne ke liye Bromwich contour integration kaise use hota hai?",
            "hi": "रोबोटिक नियंत्रण प्रणाली में स्थिरता की भविष्यवाणी हेतु ब्रोमिच कंटूर समाकलन का उपयोग कैसे किया जाता है?"
          },
          "simpleExplanation": {
            "en": "The Bromwich contour in the complex plane evaluates the inverse Laplace transform integral: f(t) = (1/2πi) ∫_{γ - i∞}^{γ + i∞} e^(st) F(s) ds. By closing a large semicircular contour to the left in the complex s-plane, the Cauchy Residue Theorem proves that the real-time response f(t) is simply the sum of residues at all poles: f(t) = ∑ Res[e^(st) F(s)]! Poles in the left half-plane produce exponentially decaying stable motions; poles in the right half-plane cause catastrophic instability!",
            "hinglish": "Bromwich contour complex s-plane me inverse Laplace transform nikalta hai. Contour ko left side close karke Cauchy Residue Theorem lagane se time-domain response f(t) = sum of residues mil jata hai. Poles left-half me hon toh system stable rehta hai.",
            "hi": "ब्रोमिच कंटूर सम्मिश्र s-तल में प्रतिलोम लाप्लास रूपांतरण ज्ञात करता है। कोशी अवशेष प्रमेय द्वारा समय अनुक्रिया सभी ध्रुवों पर अवशेषों के योग के बराबर प्राप्त होती है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine tuning into radio stations: each radio station is a pole on the complex frequency dial. The residue theorem acts like your radio receiver, plucking out the exact audio signal from each station while filtering out the empty frequency space.",
              "hinglish": "Radio tuner ki tarah: har station ek pole hai. Residue theorem sirf un poles se signal extract karti hai baki sab cancel ho jata hai.",
              "hi": "रेडियो ट्यूनर की भांति जहां अवशेष प्रमेय विशिष्ट आवृत्तियों (ध्रुवों) से संकेत प्राप्त करता है।"
            },
            "limitations": {
              "en": "Jordan’s Lemma must be satisfied so that the semicircular arc integral vanishes as radius R → ∞.",
              "hinglish": "Jordan lemma satisfy hona zaroori hai taki infinite arc ka integral zero ho jaye.",
              "hi": "जॉर्डन प्रमेय की शर्तों की संतुष्टि आवश्यक है ताकि अनंत चाप का समाकलन शून्य हो।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "If f(z) is analytic in an annulus r < |z - z₀| < R, it can be expanded in a Laurent series: f(z) = ∑_{n=0}^∞ a_n (z - z₀)^n + ∑_{n=1}^∞ b_n / (z - z₀)^n. The singularity at z₀ is classified by the principal part: Removable if all b_n = 0; Pole of order m if b_m ≠ 0 and b_{m+k} = 0; Essential if infinitely many b_n ≠ 0. Real trigonometric integrals I = ∫₀^{2π} R(cosθ, sinθ) dθ are evaluated by substituting z = e^(iθ), dz = iz dθ.",
              "hinglish": "Laurent series me positive aur negative powers dono hoti hain. Principal part me finite terms ho toh Pole, infinite terms ho toh Essential singularity, zero terms ho toh Removable singularity.",
              "hi": "लॉरेंट श्रेणी वलय में फलन को धनात्मक और ऋणात्मक घातों में व्यक्त करती है। ऋणात्मक घातों की संख्या विचित्रता का प्रकार निर्धारित करती है।"
            },
            "keyTerms": [
              {
                "term": "Pole of Order m",
                "definition": {
                  "en": "A singularity where lim_{z→z₀} (z - z₀)^m f(z) is a non-zero finite value.",
                  "hinglish": "Aisa pole jisme (z - z0)^m se multiply karne par finite non-zero value milti hai.",
                  "hi": "वह ध्रुव जहां (z - z0)^m से गुणा करने पर अशून्य सीमित मान प्राप्त होता है।"
                }
              },
              {
                "term": "Essential Singularity",
                "definition": {
                  "en": "A singularity around which the Laurent series has infinitely many negative power terms (e.g., e^(1/z) at z = 0).",
                  "hinglish": "Jisme Laurent series ke andar 1/z ki infinite terms aati hain.",
                  "hi": "वह विचित्रता जहां लॉरेंट श्रेणी में अनंत ऋणात्मक घात पद होते हैं।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "z = e^{i\\theta}, \\quad \\cos(\\theta) = \\frac{z + z^{-1}}{2}, \\quad \\sin(\\theta) = \\frac{z - z^{-1}}{2i}, \\quad d\\theta = \\frac{dz}{iz}",
            "symbolMeaning": [
              "z: Unit circle contour variable |z| = 1",
              "θ: Real angle integrated over [0, 2π]",
              "dz: Complex contour differential along unit circle"
            ],
            "units": "Dimensionless",
            "assumptions": [
              "Contour is the unit circle |z| = 1 traversed counterclockwise",
              "Denominator has no poles directly ON the unit circle"
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Evaluate the real trigonometric integral I = ∫₀^{2π} [ dθ / (5 + 4 cos(θ)) ] using contour integration around the unit circle.",
              "hinglish": "Evaluate the real trigonometric integral I = ∫₀^{2π} [ dθ / (5 + 4 cos(θ)) ] using contour integration around the unit circle.",
              "hi": "Evaluate the real trigonometric integral I = ∫₀^{2π} [ dθ / (5 + 4 cos(θ)) ] using contour integration around the unit circle."
            },
            "given": [
              "Integrand: 1 / (5 + 4 cos(θ))",
              "Limits: 0 to 2π"
            ],
            "toFind": "Value of integral I",
            "formulaUsed": "\\cos(\\theta) = \\frac{z + z^{-1}}{2}, \\quad d\\theta = \\frac{dz}{iz}",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Transform to complex contour integral around unit circle |z| = 1",
                "explanation": {
                  "en": "Substitute cos(θ) = (z + 1/z)/2 and dθ = dz/(iz).",
                  "hinglish": "Substitute cos(θ) = (z + 1/z)/2 and dθ = dz/(iz).",
                  "hi": "Substitute cos(θ) = (z + 1/z)/2 and dθ = dz/(iz)."
                },
                "math": "I = \\oint_{|z|=1} \\frac{dz / (iz)}{5 + 4(z + 1/z)/2} = \\oint_{|z|=1} \\frac{dz / (iz)}{5 + 2z + 2/z} = \\oint_{|z|=1} \\frac{dz}{i(2z^2 + 5z + 2)}"
              },
              {
                "stepNumber": 2,
                "title": "Factor the quadratic denominator to locate poles",
                "explanation": {
                  "en": "2z² + 5z + 2 = (2z + 1)(z + 2) = 2(z + 1/2)(z + 2).",
                  "hinglish": "2z² + 5z + 2 = (2z + 1)(z + 2) = 2(z + 1/2)(z + 2).",
                  "hi": "2z² + 5z + 2 = (2z + 1)(z + 2) = 2(z + 1/2)(z + 2)."
                },
                "math": "2z^2 + 5z + 2 = 2(z + 1/2)(z + 2) \\implies z_1 = -1/2, \\quad z_2 = -2"
              },
              {
                "stepNumber": 3,
                "title": "Identify which pole lies inside unit circle |z| = 1",
                "explanation": {
                  "en": "|z₁| = |-1/2| = 1/2 < 1 (INSIDE). |z₂| = |-2| = 2 > 1 (OUTSIDE).",
                  "hinglish": "|z₁| = |-1/2| = 1/2 < 1 (INSIDE). |z₂| = |-2| = 2 > 1 (OUTSIDE).",
                  "hi": "|z₁| = |-1/2| = 1/2 < 1 (INSIDE). |z₂| = |-2| = 2 > 1 (OUTSIDE)."
                },
                "math": "z_1 = -1/2 \\text{ lies INSIDE } |z|=1"
              },
              {
                "stepNumber": 4,
                "title": "Calculate residue at z = -1/2 and apply Residue Theorem",
                "explanation": {
                  "en": "Res(f, -1/2) = 1 / [i · 2(-1/2 + 2)] = 1 / [i · 2(3/2)] = 1 / (3i). Integral I = 2πi · Res = 2πi · [1 / (3i)] = 2π / 3.",
                  "hinglish": "Res(f, -1/2) = 1 / [i · 2(-1/2 + 2)] = 1 / [i · 2(3/2)] = 1 / (3i). Integral I = 2πi · Res = 2πi · [1 / (3i)] = 2π / 3.",
                  "hi": "Res(f, -1/2) = 1 / [i · 2(-1/2 + 2)] = 1 / [i · 2(3/2)] = 1 / (3i). Integral I = 2πi · Res = 2πi · [1 / (3i)] = 2π / 3."
                },
                "math": "I = 2\\pi i \\times \\frac{1}{3i} = \\frac{2\\pi}{3}"
              }
            ],
            "finalAnswer": "I = 2π / 3"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Including the pole z = -2 in the residue calculation.",
                "hinglish": "z = -2 wale pole ko bhi contour ke andar maan kar uska residue add kar dena.",
                "hi": "z = -2 को भी इकाई वृत्त के भीतर मानकर उसका अवशेष जोड़ लेना।"
              },
              "correction": {
                "en": "z = -2 has |z| = 2 > 1, so it lies strictly outside the unit circle and contributes 0.",
                "hinglish": "|-2| = 2 > 1, isliye yeh contour ke bahar hai aur iska residue nahi aayega.",
                "hi": "|-2| = 2 > 1 होने के कारण यह इकाई वृत्त के बाहर है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u3-p3",
              "level": "Advanced",
              "question": {
                "en": "What type of singularity does f(z) = e^(1/z) possess at z = 0?",
                "hinglish": "f(z) = e^(1/z) ka z = 0 par konsa singularity hota hai?",
                "hi": "f(z) = e^(1/z) की z = 0 पर किस प्रकार की विचित्रता है?"
              },
              "options": [
                "Essential Singularity",
                "Simple Pole",
                "Pole of Order 2",
                "Removable Singularity"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "e^(1/z) = 1 + 1/z + 1/(2! z²) + 1/(3! z³) + ... has infinitely many negative power terms in its Laurent series, making it an Essential Singularity.",
                "hinglish": "e^(1/z) me 1/z ki infinite negative powers aati hain, isliye yeh Essential Singularity hai.",
                "hi": "लॉरेंट श्रेणी में अनंत ऋणात्मक घात पद होने के कारण यह अनिवार्य विचित्रता (Essential Singularity) है।"
              },
              "hint": {
                "en": "Expand e^w for w = 1/z.",
                "hinglish": "w = 1/z rakh kar e^w ka expansion dekhein.",
                "hi": "w = 1/z मानकर e^w का विस्तार देखें।"
              }
            }
          ],
          "summary": {
            "en": [
              "Laurent series handles functions with isolated singularities by adding negative power terms.",
              "Singularities are classified by the principal part: removable, poles, or essential.",
              "Real trigonometric integrals over [0, 2π] are evaluated by mapping onto the unit circle |z| = 1.",
              "The Bromwich contour in the complex plane evaluates inverse Laplace transforms."
            ],
            "hinglish": [
              "Laurent series singularities ke aas paas negative powers include karti hai.",
              "Singularities 3 types ki hoti hain: Removable, Pole, aur Essential.",
              "Trigonometric integrals ko unit circle |z|=1 par map karke Residue theorem se solve karte hain.",
              "Bromwich contour inverse Laplace transform evaluate karta hai."
            ],
            "hi": [
              "लॉरेंट श्रेणी विचित्रताओं के निकट फलनों का विस्तार करती है।",
              "विचित्रताएं तीन प्रकार की होती हैं: अपनेय, ध्रुव, तथा अनिवार्य।",
              "त्रिकोणमितीय समाकलनों का मान इकाई वृत्त पर प्रतिचित्रण द्वारा ज्ञात किया जाता है।",
              "ब्रोमिच कंटूर प्रतिलोम लाप्लास रूपांतरण की गणना करता है।"
            ]
          },
          "quiz": [
            {
              "id": "math-u3-q3",
              "question": {
                "en": "What is the order of the pole of f(z) = (z + 2) / (z - 1)⁴ at z = 1?",
                "hinglish": "f(z) = (z + 2) / (z - 1)⁴ ka z = 1 par pole ka order kya hai?",
                "hi": "f(z) = (z + 2) / (z - 1)⁴ के लिए z = 1 पर ध्रुव की कोटि क्या है?"
              },
              "options": [
                "4",
                "1",
                "2",
                "3"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "The factor (z - 1) appears to power 4 in the denominator with non-zero numerator at z = 1 (1+2=3 ≠ 0), so it is a pole of order 4.",
                "hinglish": "Denominator me power 4 hai aur numerator non-zero hai, isliye order 4 hai.",
                "hi": "हर में घात 4 है तथा अंश 3 ≠ 0 है, अतः यह कोटि 4 का ध्रुव है।"
              },
              "hint": {
                "en": "Look at the highest power of (z - 1) in the denominator.",
                "hinglish": "Denominator me (z - 1) ki power dekhein.",
                "hi": "हर में (z - 1) की उच्चतम घात देखें।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "If f(z) is analytic in an annulus r < |z - z₀| < R, it can be expanded in a Laurent series: f(z) = ∑_{n=0}^∞ a_n (z - z₀)^n + ∑_{n=1}^∞ b_n / (z - z₀)^n. The singularity at z₀ is classified by the principal part: Removable if all b_n = 0; Pole of order m if b_m ≠ 0 and b_{m+k} = 0; Essential if infinitely many b_n ≠ 0. Real trigonometric integrals I = ∫₀^{2π} R(cosθ, sinθ) dθ are evaluated by substituting z = e^(iθ), dz = iz dθ.",
            "hinglish": "Laurent series me positive aur negative powers dono hoti hain. Principal part me finite terms ho toh Pole, infinite terms ho toh Essential singularity, zero terms ho toh Removable singularity.",
            "hi": "लॉरेंट श्रेणी वलय में फलन को धनात्मक और ऋणात्मक घातों में व्यक्त करती है। ऋणात्मक घातों की संख्या विचित्रता का प्रकार निर्धारित करती है।"
          },
          "terminology": [
            {
              "term": "Pole of Order m",
              "definition": {
                "en": "A singularity where lim_{z→z₀} (z - z₀)^m f(z) is a non-zero finite value.",
                "hinglish": "Aisa pole jisme (z - z0)^m se multiply karne par finite non-zero value milti hai.",
                "hi": "वह ध्रुव जहां (z - z0)^m से गुणा करने पर अशून्य सीमित मान प्राप्त होता है।"
              }
            },
            {
              "term": "Essential Singularity",
              "definition": {
                "en": "A singularity around which the Laurent series has infinitely many negative power terms (e.g., e^(1/z) at z = 0).",
                "hinglish": "Jisme Laurent series ke andar 1/z ki infinite terms aati hain.",
                "hi": "वह विचित्रता जहां लॉरेंट श्रेणी में अनंत ऋणात्मक घात पद होते हैं।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Unit III covers complex analysis: complex plane geometry, Cauchy-Riemann equations determining analyticity (u_x = v_y, u_y = -v_x); harmonic potentials; Cauchy-Goursat theorem; Cauchy Integral Formula; Laurent series and singularity classification; Cauchy Residue Theorem (∮ f(z) dz = 2πi ∑ Res); and evaluation of real trigonometric integrals and Bromwich inverse Laplace integrals.",
          "hinglish": "Unit III Complex Variables cover karta hai: C-R equations (ux=vy, uy=-vx); harmonic functions; Cauchy integral formula; Laurent series; Residue Theorem (∮ f dz = 2πi ∑ Res); aur real trigonometric integrals.",
          "hi": "इकाई 3 सम्मिश्र विश्लेषण को समाहित करती है: कोशी-रीमान समीकरण, प्रसंवादी विभव, कोशी समाकल सूत्र, लॉरेंट श्रेणी, अवशेष प्रमेय, तथा वास्तविक त्रिकोणमितीय एवं ब्रोमिच समाकलनों का मूल्यांकन।"
        },
        "shortNotes": [
          {
            "topic": "Cauchy-Riemann Equations",
            "content": {
              "en": "u_x = v_y and u_y = -v_x. Necessary for differentiability of f(z) = u + iv.",
              "hinglish": "ux = vy aur uy = -vx. Analyticity ke liye zaroori hai.",
              "hi": "ux = vy तथा uy = -vx विश्लेषिकता की आवश्यक शर्त है।"
            }
          },
          {
            "topic": "Residue Theorem",
            "content": {
              "en": "∮_C f(z) dz = 2πi ∑ Res(f, z_k) for all poles enclosed by C.",
              "hinglish": "∮ f(z) dz = 2πi * (sum of residues inside contour).",
              "hi": "∮ f(z) dz = 2πi * (कंटूर के भीतर स्थित अवशेषों का योग)।"
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Cauchy-Riemann (Cartesian)",
            "formula": "\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}, \\quad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}",
            "units": "Dimensionless",
            "note": "Condition for f(z)=u+iv to be analytic"
          },
          {
            "name": "Cauchy Integral Formula",
            "formula": "f(z_0) = \\frac{1}{2\\pi i} \\oint_C \\frac{f(z)}{z - z_0} \\, dz",
            "units": "Dimensionless",
            "note": "z0 inside C"
          },
          {
            "name": "Residue at Simple Pole",
            "formula": "\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)",
            "units": "Dimensionless",
            "note": "Simple pole"
          },
          {
            "name": "Cauchy Residue Theorem",
            "formula": "\\oint_C f(z) \\, dz = 2\\pi i \\sum_{k=1}^m \\text{Res}(f, z_k)",
            "units": "Dimensionless",
            "note": "Enclosed poles only"
          }
        ],
        "mindMap": [
          {
            "node": "Complex Differentiability",
            "children": [
              "Cauchy-Riemann Equations",
              "Analytic Functions",
              "Harmonic Conjugates",
              "Milne-Thomson Method"
            ]
          },
          {
            "node": "Complex Integration",
            "children": [
              "Cauchy-Goursat Theorem",
              "Cauchy Integral Formula",
              "Higher Derivatives Formula"
            ]
          },
          {
            "node": "Singularities & Residues",
            "children": [
              "Laurent Series",
              "Poles vs Essential",
              "Residue Theorem",
              "Bromwich Contour"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Removable Singularity",
            "conceptB": "Pole",
            "comparisonPoints": [
              {
                "feature": "Laurent Principal Part",
                "a": "No negative power terms (all b_n = 0)",
                "b": "Finite number of negative power terms up to order m"
              },
              {
                "feature": "Limit as z → z₀",
                "a": "Finite limit exists: lim f(z) = L",
                "b": "Blows up to infinity: lim |f(z)| = ∞"
              },
              {
                "feature": "Example",
                "a": "sin(z)/z at z = 0 (limit = 1)",
                "b": "1/(z - 1)² at z = 1 (order 2 pole)"
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "State the Cauchy-Riemann equations in Cartesian form.",
            "back": "∂u/∂x = ∂v/∂y and ∂u/∂y = -∂v/∂x"
          },
          {
            "front": "What is the value of ∮ dz / z around the circle |z| = 1?",
            "back": "2πi"
          },
          {
            "front": "What is a pole of order 1 called?",
            "back": "A simple pole"
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Why does the Cauchy-Goursat theorem require the domain to be simply connected?",
            "answer": "In a simply connected domain (a domain without holes), any closed curve can be continuously shrunk to a point without passing outside the region where f(z) is analytic, guaranteeing that the path integral vanishes."
          }
        ],
        "longAnswerQuestions": [
          {
            "question": "State Cauchy’s Residue Theorem. Use it to evaluate the real integral ∫₀^(2π) dθ / (13 + 5 sin(θ)).",
            "outline": "1. State theorem: ∮ f(z) dz = 2πi ∑ Res.\n2. Substitute z = e^(iθ), sin(θ) = (z - 1/z)/(2i), dθ = dz/(iz).\n3. Integrand becomes 2 / [5z² + 26iz - 5].\n4. Factor denominator to find poles: z = -5i (outside) and z = -i/5 (inside |z|=1).\n5. Compute residue at simple pole z = -i/5: Res = 1/(12i).\n6. Apply Residue theorem: I = 2πi * (1/(12i)) = π/6."
          }
        ],
        "numericalPractice": [
          {
            "question": "Find the residue of f(z) = z / (z² + 4) at the pole z = 2i.",
            "given": "f(z) = z / [(z - 2i)(z + 2i)]",
            "formula": "Res(2i) = lim_{z→2i} (z - 2i) f(z)",
            "solution": "Res(2i) = lim_{z→2i} z / (z + 2i) = 2i / (4i) = 1/2."
          }
        ]
      }
    },
    {
      "id": "math-u4",
      "unitNumber": "Unit IV",
      "title": "Linear Algebra",
      "description": "Vector spaces and subspaces, linear independence, basis and dimension, linear transformations, matrix representations relative to bases, rank-nullity theorem, linear functionals, dual spaces, transpose of linear transformations, canonical forms (Jordan canonical form), adjoint operators, bilinear forms, symmetric and skew-symmetric bilinear forms.",
      "topics": [
        "Vector spaces over a field F, axioms, and examples (R^n, P_n, M_{m×n})",
        "Subspaces, criteria for subspaces, and span of a set of vectors",
        "Linear dependence and independence of vectors",
        "Basis of a vector space, coordinates relative to a basis, and dimension",
        "Linear transformations T: V → W, kernel (null space), and image (range space)",
        "Rank and nullity of a linear transformation, and the Rank-Nullity Theorem",
        "Matrix representation of a linear transformation with respect to ordered bases",
        "Linear functionals, dual space V*, and dual basis",
        "Transpose of a linear transformation and its connection to matrix transpose",
        "Canonical forms: Diagonal canonical form and Jordan canonical form",
        "Adjoint operators and inner product spaces",
        "Bilinear forms, matrix of a bilinear form, symmetric and skew-symmetric bilinear forms"
      ],
      "lessons": [
        {
          "id": "math-u4-l1",
          "unitId": "math-u4",
          "subjectId": "mathematics",
          "title": "Vector Spaces, Linear Transformations & Bilinear Forms",
          "durationMinutes": 30,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Matrix multiplication",
            "Systems of linear equations"
          ],
          "realLifeQuestion": {
            "en": "How do 3D video game engines (like Unreal Engine or Unity) rotate, zoom, and project a 3D dragon onto your flat 2D computer screen at 120 frames per second?",
            "hinglish": "3D video games me 3D graphics ko screen par rotate, scale aur project karne ke liye linear transformations aur matrices ka use kaise hota hai?",
            "hi": "3D वीडियो गेम में ग्राफिक्स को घुमाने, स्केल करने और स्क्रीन पर प्रदर्शित करने के लिए रैखिक रूपांतरणों का उपयोग कैसे किया जाता है?"
          },
          "simpleExplanation": {
            "en": "Every 3D graphic is built from thousands of vectors (x, y, z)! Rotating the camera or zooming is nothing more than multiplying every vector by a 3x3 transformation matrix: T(v) = Av. A Linear Transformation preserves the fundamental grid lines: straight lines remain straight, and the origin (0, 0, 0) never moves! By mastering Vector Spaces and Basis vectors, you control the mathematical language of computer graphics, robotics, and machine learning!",
            "hinglish": "Har 3D graphic vectors se banta hai. Camera rotate karna ya zoom karna asal me matrix multiplication T(v) = Av hota hai. Linear transformation me grid lines straight rehti hain aur origin (0,0,0) fix rehta hai.",
            "hi": "प्रत्येक 3D ग्राफिक सदिशों से निर्मित होता है। कैमरा घुमाना या ज़ूम करना वास्तव में मैट्रिक्स गुणन T(v) = Av है जो रैखिक रूपांतरण कहलाता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine shining a flashlight on a wire sculpture. The shadow cast on the flat floor is a 2D projection of a 3D object. The shadow operation is a linear transformation: adding two shapes produces the sum of their shadows!",
              "hinglish": "Flashlight se wire structure ki zameen par shadow banane jaisa hai: 3D structure 2D shadow me transform hota hai.",
              "hi": "तार की संरचना पर प्रकाश डालकर फर्श पर छाया प्राप्त करने के समान जहां 3D वस्तु 2D में रूपांतरित होती है।"
            },
            "limitations": {
              "en": "A projection loses depth information: non-zero 3D vectors parallel to the light rays are collapsed to zero (Kernel/Nullspace).",
              "hinglish": "Projection me depth info kho jati hai (Null space me collapse ho jati hai).",
              "hi": "प्रक्षेप में गहराई की जानकारी समाप्त हो जाती है जो कर्नेल (Null space) में समाहित होती है।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "A vector space V over a field F is a set closed under vector addition and scalar multiplication satisfying the 8 vector space axioms. A mapping T: V → W is a Linear Transformation if T(u + v) = T(u) + T(v) and T(c v) = c T(v). The Rank-Nullity Theorem states: dim(V) = rank(T) + nullity(T), where nullity(T) = dim(ker T) and rank(T) = dim(Im T).",
              "hinglish": "T: V → W ek Linear Transformation hai agar T(u + v) = T(u) + T(v) aur T(cv) = cT(v). Rank-Nullity theorem: dim(V) = Rank(T) + Nullity(T).",
              "hi": "T: V → W एक रैखिक रूपांतरण है यदि T(u + v) = T(u) + T(v) तथा T(cv) = cT(v)। कोटि-शून्यता प्रमेय: dim(V) = rank(T) + nullity(T)।"
            },
            "keyTerms": [
              {
                "term": "Kernel (Null Space)",
                "definition": {
                  "en": "The set of all vectors v ∈ V that the transformation maps to the zero vector: ker(T) = {v ∈ V | T(v) = 0}.",
                  "hinglish": "Wo sabhi vectors jo transform hokar zero vector ban jaate hain.",
                  "hi": "उन सभी सदिशों का समुच्चय जो रूपांतरित होकर शून्य सदिश बन जाते हैं।"
                }
              },
              {
                "term": "Bilinear Form",
                "definition": {
                  "en": "A scalar-valued function B: V × V → F that is linear in both arguments: B(u, v) = u^T A v.",
                  "hinglish": "Aisa function jo dono inputs me linear ho: B(u, v) = u^T A v.",
                  "hi": "वह फलन जो दोनों चरों में रैखिक हो: B(u, v) = u^T A v।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "T(c_1 \\mathbf{u} + c_2 \\mathbf{v}) = c_1 T(\\mathbf{u}) + c_2 T(\\mathbf{v}), \\quad \\dim(V) = \\text{rank}(T) + \\text{nullity}(T)",
            "symbolMeaning": [
              "T: Linear transformation from V to W",
              "dim(V): Dimension of the domain vector space",
              "rank(T): Dimension of the range (image space)",
              "nullity(T): Dimension of the kernel (null space)"
            ],
            "units": "Dimension is an integer count [0, 1, 2, ...]",
            "assumptions": [
              "V must be a finite-dimensional vector space"
            ],
            "derivation": [
              "Let nullity(T) = k, and let {v₁, ..., v_k} be a basis for ker(T).",
              "By the Basis Extension Theorem, extend this to a basis of V: {v₁, ..., v_k, u₁, ..., u_r}, where k + r = n = dim(V).",
              "Consider the images {T(u₁), ..., T(u_r)}. We prove this set forms a basis for Im(T).",
              "Any w ∈ Im(T) has w = T(v) = T(∑ c_i v_i + ∑ d_j u_j) = 0 + ∑ d_j T(u_j), so they span Im(T).",
              "If ∑ d_j T(u_j) = 0 => T(∑ d_j u_j) = 0 => ∑ d_j u_j ∈ ker(T) => d_j = 0, proving linear independence.",
              "Thus rank(T) = r, and dim(V) = k + r = nullity(T) + rank(T)."
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Let T: ℝ³ → ℝ² be the linear transformation defined by T(x, y, z) = (x + y, y + z). Find a basis for the kernel of T, determine the nullity and rank, and verify the Rank-Nullity Theorem.",
              "hinglish": "Let T: ℝ³ → ℝ² be the linear transformation defined by T(x, y, z) = (x + y, y + z). Find a basis for the kernel of T, determine the nullity and rank, and verify the Rank-Nullity Theorem.",
              "hi": "Let T: ℝ³ → ℝ² be the linear transformation defined by T(x, y, z) = (x + y, y + z). Find a basis for the kernel of T, determine the nullity and rank, and verify the Rank-Nullity Theorem."
            },
            "given": [
              "T(x, y, z) = (x + y, y + z)",
              "Domain V = ℝ³ (dim V = 3)",
              "Codomain W = ℝ²"
            ],
            "toFind": "Basis of ker(T), nullity, rank, and verify dim(V) = rank + nullity",
            "formulaUsed": "\\text{ker}(T) = \\{ (x, y, z) \\mid T(x, y, z) = (0, 0) \\}, \\quad \\dim(V) = \\text{rank}(T) + \\text{nullity}(T)",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Set up system for kernel: T(x, y, z) = (0, 0)",
                "explanation": {
                  "en": "x + y = 0 and y + z = 0.",
                  "hinglish": "x + y = 0 and y + z = 0.",
                  "hi": "x + y = 0 and y + z = 0."
                },
                "math": "x + y = 0 \\implies y = -x, \\quad y + z = 0 \\implies z = -y = x"
              },
              {
                "stepNumber": 2,
                "title": "Express arbitrary vector in ker(T) in terms of parameter x",
                "explanation": {
                  "en": "(x, y, z) = (x, -x, x) = x (1, -1, 1).",
                  "hinglish": "(x, y, z) = (x, -x, x) = x (1, -1, 1).",
                  "hi": "(x, y, z) = (x, -x, x) = x (1, -1, 1)."
                },
                "math": "(x, y, z) = x (1, -1, 1)"
              },
              {
                "stepNumber": 3,
                "title": "Identify basis for ker(T) and compute nullity",
                "explanation": {
                  "en": "The vector (1, -1, 1) spans ker(T) and is non-zero, so it forms a basis. Nullity = 1.",
                  "hinglish": "The vector (1, -1, 1) spans ker(T) and is non-zero, so it forms a basis. Nullity = 1.",
                  "hi": "The vector (1, -1, 1) spans ker(T) and is non-zero, so it forms a basis. Nullity = 1."
                },
                "math": "\\text{Basis of ker}(T) = \\{ (1, -1, 1) \\}, \\quad \\text{nullity}(T) = 1"
              },
              {
                "stepNumber": 4,
                "title": "Compute rank and verify Rank-Nullity Theorem",
                "explanation": {
                  "en": "dim(V) = 3. By Rank-Nullity: rank(T) = dim(V) - nullity(T) = 3 - 1 = 2.",
                  "hinglish": "dim(V) = 3. By Rank-Nullity: rank(T) = dim(V) - nullity(T) = 3 - 1 = 2.",
                  "hi": "dim(V) = 3. By Rank-Nullity: rank(T) = dim(V) - nullity(T) = 3 - 1 = 2."
                },
                "math": "\\text{rank}(T) = 3 - 1 = 2, \\quad 2 + 1 = 3 = \\dim(\\mathbb{R}^3)"
              }
            ],
            "finalAnswer": "Basis of ker(T) = {(1, -1, 1)}, nullity = 1, rank = 2; Rank-Nullity theorem verified (2 + 1 = 3)"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Confusing the dimension of the codomain W with the rank of the transformation.",
                "hinglish": "Codomain W ke dimension ko rank samajh lena.",
                "hi": "सहप्रांत (Codomain) की विमा को रूपांतरण की कोटि (Rank) मान लेना।"
              },
              "correction": {
                "en": "Rank is the dimension of the actual IMAGE space Im(T) ⊆ W, which can be strictly less than dim(W).",
                "hinglish": "Rank actual output range Im(T) ka dimension hota hai, na ki pure codomain ka.",
                "hi": "कोटि केवल वास्तविक प्रतिबिंब उपसमष्टि Im(T) की विमा होती है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u4-p1",
              "level": "Intermediate",
              "question": {
                "en": "If a linear transformation T: ℝ⁵ → ℝ³ has nullity(T) = 2, what is the rank of T?",
                "hinglish": "Agar T: ℝ⁵ → ℝ³ me nullity = 2 ho, toh rank kya hogi?",
                "hi": "यदि T: ℝ⁵ → ℝ³ की शून्यता 2 है, तो T की कोटि क्या होगी?"
              },
              "options": [
                "3",
                "2",
                "5",
                "1"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "By the Rank-Nullity Theorem, dim(V) = rank + nullity => 5 = rank + 2 => rank = 5 - 2 = 3.",
                "hinglish": "Rank-Nullity formula se 5 = rank + 2, toh rank = 3.",
                "hi": "कोटि-शून्यता प्रमेय से 5 = rank + 2, अतः rank = 3।"
              },
              "hint": {
                "en": "Use dim(domain) = rank + nullity. Here domain is ℝ⁵, so dim = 5.",
                "hinglish": "Domain ℝ⁵ ka dimension 5 hai.",
                "hi": "प्रांत ℝ⁵ की विमा 5 है।"
              }
            }
          ],
          "summary": {
            "en": [
              "A vector space satisfies 8 algebraic axioms under vector addition and scalar multiplication.",
              "Linear transformations preserve vector addition and scalar scaling: T(cu + v) = cT(u) + T(v).",
              "The Rank-Nullity Theorem balances dimensions: dim(Domain) = rank(T) + nullity(T).",
              "Bilinear forms B(u, v) = u^T A v represent scalar energy functions across two vector spaces."
            ],
            "hinglish": [
              "Vector space 8 algebraic axioms follow karta hai.",
              "Linear transformation grid lines ko straight rakhta hai: T(cu + v) = cT(u) + T(v).",
              "Rank-Nullity theorem: dim(Domain) = Rank + Nullity.",
              "Bilinear form B(u, v) = u^T A v scalar value deta hai."
            ],
            "hi": [
              "सदिश समष्टि 8 अभिगृहीतों को संतुष्ट करती है।",
              "रैखिक रूपांतरण योग तथा अदिश गुणन को संरक्षित करता है।",
              "कोटि-शून्यता प्रमेय: dim(प्रांत) = rank + nullity।",
              "द्विरैखिक रूप B(u, v) = u^T A v दो सदिशों का अदिश फलन है।"
            ]
          },
          "quiz": [
            {
              "id": "math-u4-q1",
              "question": {
                "en": "Which of the following sets of vectors forms a linearly DEPENDENT set in ℝ³?",
                "hinglish": "ℝ³ me inme se konsa set linearly DEPENDENT hai?",
                "hi": "ℝ³ में निम्नलिखित में से कौन सा समुच्चय रैखिक रूप से आश्रित (Dependent) है?"
              },
              "options": [
                "{(1, 0, 0), (0, 1, 0), (2, 3, 0)}",
                "{(1, 0, 0), (0, 1, 0), (0, 0, 1)}",
                "{(1, 1, 0), (0, 1, 1), (1, 0, 1)}",
                "{(2, 0, 0), (0, 3, 0), (0, 0, 4)}"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "The third vector (2, 3, 0) = 2(1, 0, 0) + 3(0, 1, 0) is a linear combination of the first two vectors, making the set linearly dependent.",
                "hinglish": "(2, 3, 0) pehle do vectors ka combination hai: 2*(1,0,0) + 3*(0,1,0). Isliye dependent hai.",
                "hi": "तीसरा सदिश प्रथम दो सदिशों का रैखिक संयोजन है, अतः समुच्चय आश्रित है।"
              },
              "hint": {
                "en": "Check if one vector can be written as a combination of the others.",
                "hinglish": "Dekhein kya koi vector baki do ka sum/multiple hai.",
                "hi": "जांचें कि क्या कोई सदिश अन्य का संयोजन है।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "A vector space V over a field F is a set closed under vector addition and scalar multiplication satisfying the 8 vector space axioms. A mapping T: V → W is a Linear Transformation if T(u + v) = T(u) + T(v) and T(c v) = c T(v). The Rank-Nullity Theorem states: dim(V) = rank(T) + nullity(T), where nullity(T) = dim(ker T) and rank(T) = dim(Im T).",
            "hinglish": "T: V → W ek Linear Transformation hai agar T(u + v) = T(u) + T(v) aur T(cv) = cT(v). Rank-Nullity theorem: dim(V) = Rank(T) + Nullity(T).",
            "hi": "T: V → W एक रैखिक रूपांतरण है यदि T(u + v) = T(u) + T(v) तथा T(cv) = cT(v)। कोटि-शून्यता प्रमेय: dim(V) = rank(T) + nullity(T)।"
          },
          "terminology": [
            {
              "term": "Kernel (Null Space)",
              "definition": {
                "en": "The set of all vectors v ∈ V that the transformation maps to the zero vector: ker(T) = {v ∈ V | T(v) = 0}.",
                "hinglish": "Wo sabhi vectors jo transform hokar zero vector ban jaate hain.",
                "hi": "उन सभी सदिशों का समुच्चय जो रूपांतरित होकर शून्य सदिश बन जाते हैं।"
              }
            },
            {
              "term": "Bilinear Form",
              "definition": {
                "en": "A scalar-valued function B: V × V → F that is linear in both arguments: B(u, v) = u^T A v.",
                "hinglish": "Aisa function jo dono inputs me linear ho: B(u, v) = u^T A v.",
                "hi": "वह फलन जो दोनों चरों में रैखिक हो: B(u, v) = u^T A v।"
              }
            }
          ]
        },
        {
          "id": "math-u4-l2",
          "unitId": "math-u4",
          "subjectId": "mathematics",
          "title": "Basis, Dimension and the Fundamental Rank-Nullity Theorem",
          "durationMinutes": 30,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Linear independence",
            "Vector spaces"
          ],
          "realLifeQuestion": {
            "en": "If a high-resolution smartphone image has 12,000,000 pixels (12 million dimensions), how does facial recognition software represent a human face using only 50 numbers without losing identification accuracy?",
            "hinglish": "12 Megapixel photo me se facial recognition software sirf 50 numbers ka use karke face identify kaise kar leta hai?",
            "hi": "12 मेगापिक्सेल फोटो में से फेस रिकग्निशन सॉफ्टवेयर केवल 50 संख्याओं से चेहरे की पहचान कैसे कर लेता है?"
          },
          "simpleExplanation": {
            "en": "Most high-dimensional data in nature lives inside a very low-dimensional subspace! A Basis is the minimal set of building-block vectors that spans the entire subspace without redundancy. The number of basis vectors is the Dimension! Facial recognition constructs a 50-dimensional \"Eigenface\" basis. By projecting the 12-million-pixel image onto this 50-dimensional basis, we capture 99% of facial variations while compressing data by 99.9%!",
            "hinglish": "Nature me zyadatar data ek chhote subspace me rehta hai. Basis minimum building-block vectors hote hain jo pure space ko span karte hain. Basis ke vectors ki ginti hi Dimension kehlati hai. Face recognition 50-dimensional basis use karke photo ko compress aur identify karta hai.",
            "hi": "आधार (Basis) उन न्यूनतम स्वतंत्र सदिशों का समुच्चय है जो उपसमष्टि का निर्माण करते हैं। आधार के सदिशों की संख्या विमा (Dimension) कहलाती है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of primary colors (Red, Green, Blue): any color in visible light can be created by mixing these 3 colors, and none of them can be created by mixing the other two. Thus, RGB forms a 3-dimensional basis for color space!",
              "hinglish": "Primary colors RGB ki tarah: har color in 3 se ban sakta hai, aur koi bhi ek color baki do se nahi ban sakta. Yeh 3D basis hai.",
              "hi": "प्राथमिक रंगों (लाल, हरा, नीला) की भांति जो रंग समष्टि का 3-विमीय आधार बनाते हैं।"
            },
            "limitations": {
              "en": "A basis is not unique (you can use CMYK instead of RGB), but the dimension (number of elements) is ALWAYS invariant.",
              "hinglish": "Basis alag-alag ho sakte hain, lekin dimension (count) hamesha same rehta hai.",
              "hi": "आधार अलग हो सकते हैं किंतु विमा सदैव अपरिवर्तनीय रहती है।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "A subset B = {v₁, v₂, ..., v_n} of vector space V is a Basis if: (1) B is linearly independent, and (2) Span(B) = V. The number of elements n is the Dimension dim(V). If T: V → W is linear, the Rank-Nullity Theorem states: dim(V) = dim(ker T) + dim(Im T).",
              "hinglish": "Basis linearly independent hota hai aur pure space ko span karta hai. Basis me vectors ka number hi Dimension kehlata hai.",
              "hi": "आधार रैखिक रूप से स्वतंत्र होता है तथा संपूर्ण समष्टि का विस्तार (Span) करता है। आधार के अवयवों की संख्या विमा कहलाती है।"
            },
            "keyTerms": [
              {
                "term": "Spanning Set",
                "definition": {
                  "en": "A collection of vectors whose linear combinations generate all vectors in the space.",
                  "hinglish": "Vectors ka aisa set jiske combinations se pure space ke vectors ban sakein.",
                  "hi": "सदिशों का समुच्चय जिनके रैखिक संयोजन से संपूर्ण समष्टि प्राप्त होती है।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "\\mathbf{v} = c_1 \\mathbf{b}_1 + c_2 \\mathbf{b}_2 + \\dots + c_n \\mathbf{b}_n, \\quad \\dim(V) = n",
            "symbolMeaning": [
              "b_1, ..., b_n: Basis vectors",
              "c_1, ..., c_n: Unique coordinates of vector v relative to basis B",
              "n: Dimension of vector space V"
            ],
            "units": "Dimension is an integer",
            "assumptions": [
              "V is finite-dimensional"
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Determine whether the vectors v₁ = (1, 2, 1), v₂ = (2, 1, 0), and v₃ = (1, -1, -1) form a basis for ℝ³.",
              "hinglish": "Determine whether the vectors v₁ = (1, 2, 1), v₂ = (2, 1, 0), and v₃ = (1, -1, -1) form a basis for ℝ³.",
              "hi": "Determine whether the vectors v₁ = (1, 2, 1), v₂ = (2, 1, 0), and v₃ = (1, -1, -1) form a basis for ℝ³."
            },
            "given": [
              "v₁ = (1, 2, 1)",
              "v₂ = (2, 1, 0)",
              "v₃ = (1, -1, -1) in ℝ³"
            ],
            "toFind": "Check if {v₁, v₂, v₃} forms a basis for ℝ³",
            "formulaUsed": "\\det([v_1 \\; v_2 \\; v_3]) \\neq 0 \\iff \\text{Basis for } \\mathbb{R}^3",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Set up matrix with vectors as columns",
                "explanation": {
                  "en": "Form matrix A with columns v₁, v₂, v₃.",
                  "hinglish": "Form matrix A with columns v₁, v₂, v₃.",
                  "hi": "Form matrix A with columns v₁, v₂, v₃."
                },
                "math": "A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 1 & -1 \\\\ 1 & 0 & -1 \\end{pmatrix}"
              },
              {
                "stepNumber": 2,
                "title": "Calculate determinant of matrix A",
                "explanation": {
                  "en": "Expand along third row: 1 · (-2 - 1) - 0 + (-1) · (1 - 4) = 1(-3) - (-3) = -3 + 3 = 0.",
                  "hinglish": "Expand along third row: 1 · (-2 - 1) - 0 + (-1) · (1 - 4) = 1(-3) - (-3) = -3 + 3 = 0.",
                  "hi": "Expand along third row: 1 · (-2 - 1) - 0 + (-1) · (1 - 4) = 1(-3) - (-3) = -3 + 3 = 0."
                },
                "math": "\\det(A) = 1(-2 - 1) - 1(1 - 4) = -3 - (-3) = 0"
              },
              {
                "stepNumber": 3,
                "title": "Interpret zero determinant",
                "explanation": {
                  "en": "Since det(A) = 0, the column vectors are linearly DEPENDENT. Therefore they do NOT span ℝ³ and cannot form a basis.",
                  "hinglish": "Since det(A) = 0, the column vectors are linearly DEPENDENT. Therefore they do NOT span ℝ³ and cannot form a basis.",
                  "hi": "Since det(A) = 0, the column vectors are linearly DEPENDENT. Therefore they do NOT span ℝ³ and cannot form a basis."
                },
                "math": "\\det(A) = 0 \\implies \\{v_1, v_2, v_3\\} \\text{ is linearly dependent}"
              }
            ],
            "finalAnswer": "The vectors do NOT form a basis for ℝ³ because det(A) = 0 (linearly dependent)"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Assuming that any set of 3 vectors in ℝ³ automatically forms a basis.",
                "hinglish": "Yeh sochna ki ℝ³ me koi bhi 3 vectors hamesha basis bana lenge.",
                "hi": "यह मान लेना कि ℝ³ में कोई भी 3 सदिश सदैव आधार बनाते हैं।"
              },
              "correction": {
                "en": "The 3 vectors must also be linearly independent (det ≠ 0). If they lie in a common 2D plane, they fail to form a basis.",
                "hinglish": "3 vectors ka linearly independent hona zaroori hai (det ≠ 0).",
                "hi": "3 सदिशों का रैखिक रूप से स्वतंत्र होना आवश्यक है (सारणिक ≠ 0)।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u4-p2",
              "level": "Intermediate",
              "question": {
                "en": "What is the dimension of the subspace W = {(x, y, z) ∈ ℝ³ | x + 2y - 3z = 0}?",
                "hinglish": "Subspace x + 2y - 3z = 0 ka dimension kya hoga?",
                "hi": "उपसमष्टि x + 2y - 3z = 0 की विमा क्या होगी?"
              },
              "options": [
                "2",
                "1",
                "3",
                "0"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "The single linear constraint x = -2y + 3z removes 1 degree of freedom from ℝ³: dim(W) = 3 - 1 = 2 (a 2D plane passing through origin).",
                "hinglish": "1 linear equation se 1 degree of freedom kam hota hai: 3 - 1 = 2.",
                "hi": "1 समीकरण द्वारा 1 स्वातंत्र्य कोटि घटती है: 3 - 1 = 2।"
              },
              "hint": {
                "en": "Dimension = number of variables (3) minus number of independent linear constraints (1).",
                "hinglish": "3 variables minus 1 equation = 2.",
                "hi": "3 चर - 1 प्रतिबंध = 2।"
              }
            }
          ],
          "summary": {
            "en": [
              "A basis is a linearly independent spanning set.",
              "Dimension is the unique number of vectors in any basis of the space.",
              "A single linear constraint in ℝⁿ reduces dimension to n - 1 (hyperplane)."
            ],
            "hinglish": [
              "Basis linearly independent aur spanning set hota hai.",
              "Dimension basis ke vectors ki unique count hoti hai.",
              "Ek linear equation dimension ko n - 1 kar deti hai."
            ],
            "hi": [
              "आधार रैखिक रूप से स्वतंत्र विस्तारक समुच्चय है।",
              "विमा आधार में सदिशों की संख्या है।",
              "एक रैखिक समीकरण विमा को n - 1 कर देता है।"
            ]
          },
          "quiz": [
            {
              "id": "math-u4-q2",
              "question": {
                "en": "What is the standard basis for the vector space P₂ of polynomials of degree ≤ 2?",
                "hinglish": "Polynomials P2 ka standard basis kya hota hai?",
                "hi": "द्विघात बहुपदों P2 की समष्टि का मानक आधार क्या है?"
              },
              "options": [
                "{1, x, x²}",
                "{x, x²}",
                "{1, x}",
                "{1 + x, x + x²}"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "Any polynomial a + bx + cx² is a unique linear combination of {1, x, x²}, which has dimension 3.",
                "hinglish": "a + bx + cx² ko {1, x, x²} ke combination me likhte hain, dimension = 3.",
                "hi": "कोई भी बहुपद {1, x, x²} के संयोजन में लिखा जा सकता है, विमा = 3।"
              },
              "hint": {
                "en": "Notice that a polynomial of degree ≤ 2 has 3 arbitrary coefficients (a, b, c).",
                "hinglish": "P2 me 3 coefficients hote hain: a, b, c.",
                "hi": "P2 में 3 गुणांक होते हैं।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "A subset B = {v₁, v₂, ..., v_n} of vector space V is a Basis if: (1) B is linearly independent, and (2) Span(B) = V. The number of elements n is the Dimension dim(V). If T: V → W is linear, the Rank-Nullity Theorem states: dim(V) = dim(ker T) + dim(Im T).",
            "hinglish": "Basis linearly independent hota hai aur pure space ko span karta hai. Basis me vectors ka number hi Dimension kehlata hai.",
            "hi": "आधार रैखिक रूप से स्वतंत्र होता है तथा संपूर्ण समष्टि का विस्तार (Span) करता है। आधार के अवयवों की संख्या विमा कहलाती है।"
          },
          "terminology": [
            {
              "term": "Spanning Set",
              "definition": {
                "en": "A collection of vectors whose linear combinations generate all vectors in the space.",
                "hinglish": "Vectors ka aisa set jiske combinations se pure space ke vectors ban sakein.",
                "hi": "सदिशों का समुच्चय जिनके रैखिक संयोजन से संपूर्ण समष्टि प्राप्त होती है।"
              }
            }
          ]
        },
        {
          "id": "math-u4-l3",
          "unitId": "math-u4",
          "subjectId": "mathematics",
          "title": "Canonical Forms, Adjoints, and Symmetric Bilinear Forms",
          "durationMinutes": 30,
          "difficulty": "Advanced",
          "prerequisites": [
            "Linear transformations",
            "Matrix representation"
          ],
          "realLifeQuestion": {
            "en": "How do structural civil engineers prove whether a suspension bridge deck will remain structurally stable or violently buckle under external wind turbulence?",
            "hinglish": "Civil engineers mathematically kaise check karte hain ki bridge hawa ke pressure me stable rahega ya toot kar gir jayega?",
            "hi": "सिविल इंजीनियर यह कैसे प्रमाणित करते हैं कि पुल वायु के दबाव में स्थिर रहेगा अथवा विकृत होकर टूट जाएगा?"
          },
          "simpleExplanation": {
            "en": "They analyze the bridge’s internal strain energy, which is modeled by a Quadratic Form Q(x) = x^T A x! If the symmetric stiffness matrix A is Positive Definite (all eigenvalues λ > 0), the bridge is at a secure local energy minimum and naturally resists deformation! If any eigenvalue becomes negative, compressive forces trigger buckling! By reducing the quadratic form to its diagonal canonical form, engineers immediately spot potential structural failures.",
            "hinglish": "Bridge ki strain energy quadratic form Q(x) = x^T A x se model hoti hai. Agar symmetric matrix A positive definite ho (sab eigenvalues positive), toh bridge stable rehta hai. Negative eigenvalue buckling darshati hai.",
            "hi": "पुल की विकृति ऊर्जा द्विघात रूप Q(x) = x^T A x द्वारा व्यक्त होती है। यदि सम्मित मैट्रिक्स धनात्मक निश्चित हो तो संरचना स्थिर रहती है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of a marble in a smooth bowl: at the bottom, any nudge increases potential energy, so the marble rolls back (stable minimum, positive definite). On top of an inverted dome, any nudge drops potential energy and the marble falls off (unstable, negative definite).",
              "hinglish": "Katori me rakhi goli ki tarah: katori seedhi ho toh goli wapas center aati hai (positive definite). Katori ulti ho toh gir jati hai (negative definite).",
              "hi": "कटोरी में रखी गोली की भांति जो न्यूनतम ऊर्जा पर स्थिर रहती है।"
            },
            "limitations": {
              "en": "Linearized quadratic forms are accurate only for small structural deflections; large plastic deformations require non-linear analysis.",
              "hinglish": "Yeh small deflections ke liye hi accurate hota hai.",
              "hi": "यह केवल सूक्ष्म विचलनों के लिए ही सटीक होता है।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "A Bilinear Form on V is a map B: V × V → F such that B is linear in both arguments. B is symmetric if B(u, v) = B(v, u). Every symmetric bilinear form has a unique quadratic form Q(v) = B(v, v) = v^T A v, where A = A^T. By Lagrange’s reduction or orthogonal transformation, Q can be reduced to canonical diagonal form: Q = λ₁ y₁² + λ₂ y₂² + ... + λ_n y_n².",
              "hinglish": "B(u, v) = u^T A v symmetric bilinear form hota hai jab A = A^T. Iska quadratic form Q(v) = v^T A v diagonal form me reduce ho sakta hai.",
              "hi": "सम्मित मैट्रिक्स A = A^T के लिए Q(v) = v^T A v द्विघात रूप कहलाता है जिसे विकर्ण विहित रूप में रूपांतरित किया जा सकता है।"
            },
            "keyTerms": [
              {
                "term": "Positive Definite",
                "definition": {
                  "en": "A quadratic form Q(x) > 0 for all non-zero vectors x (all eigenvalues λ_i > 0).",
                  "hinglish": "Har non-zero vector ke liye Q(x) strictly positive hona.",
                  "hi": "प्रत्येक अशून्य सदिश के लिए Q(x) का मान धनात्मक होना।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x} = \\sum_{i=1}^n \\sum_{j=1}^n a_{ij} x_i x_j, \\quad A = A^T",
            "symbolMeaning": [
              "Q(x): Real quadratic form",
              "A: Real symmetric n × n coefficient matrix",
              "x: Column vector of coordinates"
            ],
            "units": "Energy units [Joules] or dimensionless",
            "assumptions": [
              "Matrix A must be symmetric: a_{ij} = a_{ji}"
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Express the quadratic form Q(x₁, x₂) = 2x₁² + 4x₁x₂ + 5x₂² as a matrix product x^T A x and find its symmetric matrix A.",
              "hinglish": "Express the quadratic form Q(x₁, x₂) = 2x₁² + 4x₁x₂ + 5x₂² as a matrix product x^T A x and find its symmetric matrix A.",
              "hi": "Express the quadratic form Q(x₁, x₂) = 2x₁² + 4x₁x₂ + 5x₂² as a matrix product x^T A x and find its symmetric matrix A."
            },
            "given": [
              "Q(x₁, x₂) = 2x₁² + 4x₁x₂ + 5x₂²"
            ],
            "toFind": "Symmetric matrix A such that Q = x^T A x",
            "formulaUsed": "a_{ii} = \\text{coeff of } x_i^2, \\quad a_{ij} = a_{ji} = \\frac{1}{2} \\text{coeff of } x_i x_j",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Determine diagonal matrix elements a₁₁ and a₂₂",
                "explanation": {
                  "en": "The coefficient of x₁² is 2, so a₁₁ = 2. The coefficient of x₂² is 5, so a₂₂ = 5.",
                  "hinglish": "The coefficient of x₁² is 2, so a₁₁ = 2. The coefficient of x₂² is 5, so a₂₂ = 5.",
                  "hi": "The coefficient of x₁² is 2, so a₁₁ = 2. The coefficient of x₂² is 5, so a₂₂ = 5."
                },
                "math": "a_{11} = 2, \\quad a_{22} = 5"
              },
              {
                "stepNumber": 2,
                "title": "Determine off-diagonal symmetric elements a₁₂ and a₂₁",
                "explanation": {
                  "en": "The coefficient of x₁x₂ is 4. Split equally between a₁₂ and a₂₁: a₁₂ = a₂₁ = 4 / 2 = 2.",
                  "hinglish": "The coefficient of x₁x₂ is 4. Split equally between a₁₂ and a₂₁: a₁₂ = a₂₁ = 4 / 2 = 2.",
                  "hi": "The coefficient of x₁x₂ is 4. Split equally between a₁₂ and a₂₁: a₁₂ = a₂₁ = 4 / 2 = 2."
                },
                "math": "a_{12} = a_{21} = \\frac{4}{2} = 2"
              },
              {
                "stepNumber": 3,
                "title": "Assemble the symmetric matrix A",
                "explanation": {
                  "en": "Write out the 2x2 matrix.",
                  "hinglish": "Write out the 2x2 matrix.",
                  "hi": "Write out the 2x2 matrix."
                },
                "math": "A = \\begin{pmatrix} 2 & 2 \\\\ 2 & 5 \\end{pmatrix}"
              },
              {
                "stepNumber": 4,
                "title": "Verify definiteness using leading principal minors",
                "explanation": {
                  "en": "Δ₁ = |2| = 2 > 0. Δ₂ = det(A) = (2)(5) - (2)(2) = 10 - 4 = 6 > 0. Both principal minors are positive, so Q is Positive Definite.",
                  "hinglish": "Δ₁ = |2| = 2 > 0. Δ₂ = det(A) = (2)(5) - (2)(2) = 10 - 4 = 6 > 0. Both principal minors are positive, so Q is Positive Definite.",
                  "hi": "Δ₁ = |2| = 2 > 0. Δ₂ = det(A) = (2)(5) - (2)(2) = 10 - 4 = 6 > 0. Both principal minors are positive, so Q is Positive Definite."
                },
                "math": "\\Delta_1 = 2 > 0, \\quad \\Delta_2 = 6 > 0 \\implies \\text{Positive Definite}"
              }
            ],
            "finalAnswer": "Symmetric matrix A = [[2, 2], [2, 5]], which is Positive Definite (minors 2 > 0, 6 > 0)"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Putting the full cross-term coefficient 4 into both a₁₂ and a₂₁ instead of splitting it in half.",
                "hinglish": "Cross term 4x1x2 ko aadha kiye bina matrix me 4 likh dena.",
                "hi": "गुणांक 4 को आधा किए बिना मैट्रिक्स में 4 लिख देना।"
              },
              "correction": {
                "en": "Always divide the cross-term coefficient by 2: a₁₂ = a₂₁ = (coeff of x₁x₂)/2.",
                "hinglish": "Cross term coefficient ko hamesha 2 se divide karke a12 aur a21 me baatein.",
                "hi": "मिश्र पद के गुणांक को सदैव 2 से विभाजित कर a12 तथा a21 में रखें।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u4-p3",
              "level": "Advanced",
              "question": {
                "en": "What is the signature of a quadratic form with canonical form Q = y₁² + y₂² - y₃²?",
                "hinglish": "Q = y₁² + y₂² - y₃² ka signature kya hoga?",
                "hi": "Q = y₁² + y₂² - y₃² का सिग्नेचर क्या होगा?"
              },
              "options": [
                "1",
                "3",
                "-1",
                "2"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "Signature = (number of positive terms) - (number of negative terms) = 2 - 1 = 1.",
                "hinglish": "Signature = positive terms minus negative terms = 2 - 1 = 1.",
                "hi": "सिग्नेचर = धनात्मक पद - ऋणात्मक पद = 2 - 1 = 1।"
              },
              "hint": {
                "en": "Count positive square terms (2) and negative square terms (1), then subtract.",
                "hinglish": "Positive terms me se negative terms subtract karein.",
                "hi": "धनात्मक पदों में से ऋणात्मक पद घटाएं।"
              }
            }
          ],
          "summary": {
            "en": [
              "Symmetric matrices represent quadratic forms Q(x) = x^T A x.",
              "Leading principal minors test definiteness (Sylvester’s criterion).",
              "Canonical forms diagonalize quadratic forms to sums of squares."
            ],
            "hinglish": [
              "Symmetric matrix quadratic forms Q(x) = x^T A x ko represent karti hai.",
              "Sylvester criterion se positive definiteness test hoti hai.",
              "Canonical forms quadratic expressions ko sum of squares banate hain."
            ],
            "hi": [
              "सम्मित मैट्रिक्स द्विघात रूप Q(x) = x^T A x को व्यक्त करती है।",
              "सिल्वेस्टर कसौटी द्वारा निश्चितता की जांच की जाती है।",
              "विहित रूप द्विघात पदों को वर्गों के योग में बदलता है।"
            ]
          },
          "quiz": [
            {
              "id": "math-u4-q3",
              "question": {
                "en": "By Sylvester’s criterion, when is a real symmetric 2×2 matrix Positive Definite?",
                "hinglish": "Sylvester criterion ke mutabiq 2x2 symmetric matrix kab Positive Definite hoti hai?",
                "hi": "सिल्वेस्टर कसौटी के अनुसार 2×2 सम्मित मैट्रिक्स कब धनात्मक निश्चित होती है?"
              },
              "options": [
                "When a₁₁ > 0 and det(A) > 0",
                "When trace(A) > 0 only",
                "When det(A) < 0",
                "When all off-diagonal elements are zero"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "Sylvester’s criterion requires all leading principal minors to be strictly positive: Δ₁ = a₁₁ > 0 and Δ₂ = det(A) > 0.",
                "hinglish": "Dono principal minors positive hone chahiye: a11 > 0 aur det(A) > 0.",
                "hi": "दोनों मुख्य उपसारणिक धनात्मक होने चाहिए: a11 > 0 तथा det(A) > 0।"
              },
              "hint": {
                "en": "Both the top-left element and the full determinant must be strictly positive.",
                "hinglish": "a11 aur determinant dono positive hone chahiye.",
                "hi": "a11 तथा सारणिक दोनों धनात्मक होने चाहिए।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "A Bilinear Form on V is a map B: V × V → F such that B is linear in both arguments. B is symmetric if B(u, v) = B(v, u). Every symmetric bilinear form has a unique quadratic form Q(v) = B(v, v) = v^T A v, where A = A^T. By Lagrange’s reduction or orthogonal transformation, Q can be reduced to canonical diagonal form: Q = λ₁ y₁² + λ₂ y₂² + ... + λ_n y_n².",
            "hinglish": "B(u, v) = u^T A v symmetric bilinear form hota hai jab A = A^T. Iska quadratic form Q(v) = v^T A v diagonal form me reduce ho sakta hai.",
            "hi": "सम्मित मैट्रिक्स A = A^T के लिए Q(v) = v^T A v द्विघात रूप कहलाता है जिसे विकर्ण विहित रूप में रूपांतरित किया जा सकता है।"
          },
          "terminology": [
            {
              "term": "Positive Definite",
              "definition": {
                "en": "A quadratic form Q(x) > 0 for all non-zero vectors x (all eigenvalues λ_i > 0).",
                "hinglish": "Har non-zero vector ke liye Q(x) strictly positive hona.",
                "hi": "प्रत्येक अशून्य सदिश के लिए Q(x) का मान धनात्मक होना।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Unit IV covers linear algebra: vector spaces, subspaces, linear independence, basis and dimension; linear transformations T: V → W; Rank-Nullity Theorem (dim V = rank T + nullity T); matrix representations; dual spaces and linear functionals; Jordan canonical forms; and bilinear and quadratic forms with positive definiteness tests.",
          "hinglish": "Unit IV Linear Algebra cover karta hai: vector spaces aur subspaces; basis aur dimension; linear transformations T: V → W; Rank-Nullity theorem (dim V = rank + nullity); dual space; aur quadratic forms.",
          "hi": "इकाई 4 रैखिक बीजगणित को समाहित करती है: सदिश समष्टि, आधार तथा विमा, रैखिक रूपांतरण, कोटि-शून्यता प्रमेय, द्वैत समष्टि, तथा विहित एवं द्विघात रूप।"
        },
        "shortNotes": [
          {
            "topic": "Rank-Nullity Theorem",
            "content": {
              "en": "dim(V) = rank(T) + nullity(T). Sum of image and kernel dimensions equals domain dimension.",
              "hinglish": "dim(Domain) = Rank + Nullity.",
              "hi": "dim(प्रांत) = कोटि (Rank) + शून्यता (Nullity)।"
            }
          },
          {
            "topic": "Basis of Vector Space",
            "content": {
              "en": "A linearly independent subset that spans the entire vector space.",
              "hinglish": "Linearly independent set jo pure space ko span kare.",
              "hi": "रैखिक रूप से स्वतंत्र समुच्चय जो संपूर्ण समष्टि का विस्तार करे।"
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Rank-Nullity Theorem",
            "formula": "\\dim(V) = \\text{rank}(T) + \\text{nullity}(T)",
            "units": "Integer dimensions",
            "note": "V is finite dimensional"
          },
          {
            "name": "Quadratic Form Matrix",
            "formula": "Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}, \\quad A = A^T",
            "units": "Dimensionless",
            "note": "A is real symmetric"
          },
          {
            "name": "Sylvester Criterion (2x2)",
            "formula": "a_{11} > 0 \\quad \\text{and} \\quad \\det(A) > 0",
            "units": "Dimensionless",
            "note": "Positive Definite condition"
          }
        ],
        "mindMap": [
          {
            "node": "Vector Spaces",
            "children": [
              "Subspaces",
              "Span & Independence",
              "Basis & Coordinates",
              "Dimension"
            ]
          },
          {
            "node": "Linear Mappings",
            "children": [
              "Kernel & Image",
              "Rank-Nullity Theorem",
              "Matrix Representation",
              "Dual Spaces"
            ]
          },
          {
            "node": "Bilinear & Quadratic",
            "children": [
              "Symmetric Forms",
              "Quadratic Reduction",
              "Sylvester’s Criterion",
              "Definiteness"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Kernel (Null Space)",
            "conceptB": "Image (Range Space)",
            "comparisonPoints": [
              {
                "feature": "Location",
                "a": "Subspace of the DOMAIN V",
                "b": "Subspace of the CODOMAIN W"
              },
              {
                "feature": "Definition",
                "a": "{v ∈ V | T(v) = 0}",
                "b": "{w ∈ W | w = T(v) for some v}"
              },
              {
                "feature": "Dimension Name",
                "a": "Nullity",
                "b": "Rank"
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "State the Rank-Nullity Theorem.",
            "back": "dim(V) = rank(T) + nullity(T)"
          },
          {
            "front": "What is a basis of a vector space?",
            "back": "A linearly independent subset that spans the space."
          },
          {
            "front": "When is a quadratic form positive definite?",
            "back": "When Q(x) > 0 for all non-zero vectors x (all eigenvalues > 0)."
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Can a linear transformation from ℝ³ to ℝ⁵ be surjective (onto)?",
            "answer": "No. By Rank-Nullity, rank(T) ≤ dim(Domain) = 3. Since the codomain has dimension 5 and rank(T) ≤ 3 < 5, T can never span ℝ⁵."
          }
        ],
        "longAnswerQuestions": [
          {
            "question": "Define a linear transformation. State and prove the Rank-Nullity Theorem for finite-dimensional vector spaces.",
            "outline": "1. Definition: T(cu + v) = cT(u) + T(v).\n2. State theorem: dim(V) = rank(T) + nullity(T).\n3. Let {v₁, ..., v_k} be a basis for ker(T), so nullity = k.\n4. Extend to a basis of V: {v₁, ..., v_k, u₁, ..., u_r}, so dim(V) = k + r.\n5. Prove that {T(u₁), ..., T(u_r)} spans Im(T).\n6. Prove linear independence of {T(u₁), ..., T(u_r)}.\n7. Conclude rank(T) = r, verifying dim(V) = k + r = nullity + rank."
          }
        ],
        "numericalPractice": [
          {
            "question": "Find the matrix of the quadratic form Q(x, y, z) = x² + 2y² + 3z² + 4xy + 6yz.",
            "given": "Q = x² + 2y² + 3z² + 4xy + 6yz",
            "formula": "a_ii = coeff of x_i², a_ij = a_ji = (1/2) coeff of x_i x_j",
            "solution": "Diagonal elements: 1, 2, 3. Off-diagonal: a₁₂=a₂₁=2, a₂₃=a₃₂=3, a₁₃=a₃₁=0. Matrix A = [[1, 2, 0], [2, 2, 3], [0, 3, 3]]."
          }
        ]
      }
    },
    {
      "id": "math-u5",
      "unitNumber": "Unit V",
      "title": "Matrices",
      "description": "Linear systems of equations (Ax = B), Gaussian elimination, echelon form, consistency criteria (Rouché-Capelli theorem), determinants and matrix inverse, rank of a matrix, symmetric, skew-symmetric, and orthogonal matrices, eigenvalues and eigenvectors, characteristic equation, Cayley-Hamilton theorem, diagonalization of matrices, and orthogonal transformations.",
      "topics": [
        "Systems of linear equations Ax = b: Augmented matrix [A|b] and row echelon forms (REF/RREF)",
        "Gaussian elimination and Gauss-Jordan reduction methods",
        "Consistency and Rouché-Capelli theorem: Unique, infinite, and no-solution criteria",
        "Linear independence of rows and columns, rank of a matrix via minors and echelon form",
        "Determinants: Laplace expansion, properties, and inverse of a matrix via adjoint",
        "Special matrices: Symmetric (A = A^T), Skew-symmetric (A = -A^T), and Orthogonal (A^T A = I)",
        "Eigenvalues and eigenvectors: Characteristic equation det(A - λI) = 0 and eigenspaces",
        "Properties of eigenvalues: Trace equals sum of eigenvalues, determinant equals product",
        "Cayley-Hamilton theorem: Statement, proof outline, finding matrix inverse and high powers A^k",
        "Diagonalization: Modal matrix P and spectral decomposition A = P D P^(-1)",
        "Orthogonal transformation of symmetric matrices: A = P D P^T with orthogonal matrix P",
        "Reduction of quadratic forms to canonical form using orthogonal transformation"
      ],
      "lessons": [
        {
          "id": "math-u5-l1",
          "unitId": "math-u5",
          "subjectId": "mathematics",
          "title": "Matrix Rank, Systems Ax = b, Eigenvalues & Cayley-Hamilton",
          "durationMinutes": 30,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Matrix multiplication",
            "Determinants"
          ],
          "realLifeQuestion": {
            "en": "How does Google’s search engine rank billions of web pages in milliseconds, and why does an airplane wing start vibrating uncontrollably (flutter) at certain critical engine speeds?",
            "hinglish": "Google PageRank search results kaise sort karta hai, aur airplane ke wings engine ki specific speed par uncontrollably vibrate kyu karne lagte hain?",
            "hi": "गूगल सर्च इंजन वेब पेजों को कैसे रैंक करता है, और विशिष्ट गति पर विमान के पंखों में कंपन (Flutter) क्यों उत्पन्न होता है?"
          },
          "simpleExplanation": {
            "en": "Both are governed by Eigenvalues and Eigenvectors! When an airplane wing vibrates, its physical structure has natural resonant frequencies that correspond exactly to the eigenvalues of its stiffness-mass matrix (A - λI)v = 0! If the engine vibration matches an eigenvalue, destructive resonance occurs! Google PageRank treats the entire internet as a giant transition probability matrix: the most authoritative web pages correspond to the principal eigenvector with eigenvalue λ = 1!",
            "hinglish": "Dono Eigenvalues aur Eigenvectors se solve hote hain! Jab matrix kissi vector v ko transform karti hai aur direction change nahi hoti sirf magnitude scale hota hai (Av = λv), toh v eigenvector aur λ eigenvalue kehlata hai. Google PageRank internet graph ka principal eigenvector calculate karta hai.",
            "hi": "गूगल का पेजरैंक तथा यांत्रिक कंपन दोनों आइगेनमान (Eigenvalues) तथा आइगेनसदिश (Eigenvectors) पर आधारित हैं जहां Av = λv संबंध संतुष्ट होता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine stretching a rectangular rubber sheet diagonally. Most arrows drawn on the rubber sheet change both their length and direction. But arrows drawn along the principal stretch axes change ONLY their length without tilting at all! Those special un-tilted directions are the Eigenvectors, and their stretch factors are the Eigenvalues!",
              "hinglish": "Rubber sheet ko kheenchne par zyadatar teer tedhe ho jaate hain. Lekin jo teer bina mude sirf lambe ya chhote hote hain, wahi Eigenvectors hain aur unka scaling factor Eigenvalue hai.",
              "hi": "तनी हुई रबर शीट पर जिन तीरों की दिशा नहीं बदलती केवल लंबाई बदलती है, वे आइगेनसदिश कहलाते हैं तथा उनका प्रसार अनुपात आइगेनमान होता है।"
            },
            "limitations": {
              "en": "Some matrices rotate space without stretching any real line (like 90° rotation), leading to complex eigenvalues with no real eigenvectors.",
              "hinglish": "90 degree rotation matrix me koi real eigenvector nahi hota (complex eigenvalues aate hain).",
              "hi": "घूर्णन मैट्रिक्स में वास्तविक आइगेनमान नहीं होते (सम्मिश्र मान प्राप्त होते हैं)।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "Let A be an n × n matrix. A scalar λ is an Eigenvalue of A if there exists a non-zero vector v such that Av = λv, or equivalently det(A - λI) = 0 (the Characteristic Equation). The Cayley-Hamilton Theorem states that every square matrix satisfies its own characteristic equation: p(A) = 0. If A has n linearly independent eigenvectors, it is diagonalizable: A = P D P^(-1).",
              "hinglish": "Av = λv me λ eigenvalue aur v eigenvector hai. Characteristic equation det(A - λI) = 0 hoti hai. Cayley-Hamilton theorem ke mutabiq har square matrix apni characteristic equation satisfy karti hai: p(A) = 0.",
              "hi": "समीकरण Av = λv में λ आइगेनमान तथा v आइगेनसदिश है। केली-हैमिल्टन प्रमेय के अनुसार प्रत्येक वर्ग मैट्रिक्स अपने अभिलाक्षणिक समीकरण p(A) = 0 को संतुष्ट करती है।"
            },
            "keyTerms": [
              {
                "term": "Characteristic Polynomial",
                "definition": {
                  "en": "The polynomial p(λ) = det(A - λI) whose roots are the eigenvalues of matrix A.",
                  "hinglish": "det(A - λI) = 0 polynomial jiske roots eigenvalues hote hain.",
                  "hi": "बहुपद det(A - λI) जिसके मूल मैट्रिक्स के आइगेनमान होते हैं।"
                }
              },
              {
                "term": "Cayley-Hamilton Theorem",
                "definition": {
                  "en": "Every square matrix A satisfies its own characteristic equation: Aⁿ + c_{n-1} Aⁿ⁻¹ + ... + c₀ I = 0.",
                  "hinglish": "Har square matrix apne characteristic equation ko satisfy karti hai.",
                  "hi": "प्रत्येक वर्ग मैट्रिक्स अपने अभिलाक्षणिक समीकरण को संतुष्ट करती है।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "\\det(A - \\lambda I) = 0, \\quad A \\mathbf{v} = \\lambda \\mathbf{v}, \\quad p(A) = A^2 - \\text{tr}(A) A + \\det(A) I = 0",
            "symbolMeaning": [
              "A: Square n × n matrix",
              "λ: Scalar eigenvalue",
              "v: Non-zero column eigenvector",
              "I: Identity matrix of order n",
              "tr(A): Trace of matrix (sum of diagonal elements)"
            ],
            "units": "Dimensionless",
            "assumptions": [
              "Matrix A must be square (n × n)",
              "Eigenvector v must be non-zero"
            ],
            "derivation": [
              "Start with Av = λv. Rewrite as Av - λv = 0.",
              "Factor out vector v: (A - λI)v = 0.",
              "This is a homogeneous system of linear equations. For a non-trivial solution (v ≠ 0) to exist, the coefficient matrix must be singular.",
              "Therefore, det(A - λI) = 0, which is the characteristic equation."
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Find the eigenvalues and eigenvectors of the 2×2 matrix A = [[4, 1], [2, 3]] and verify the Cayley-Hamilton theorem.",
              "hinglish": "Find the eigenvalues and eigenvectors of the 2×2 matrix A = [[4, 1], [2, 3]] and verify the Cayley-Hamilton theorem.",
              "hi": "Find the eigenvalues and eigenvectors of the 2×2 matrix A = [[4, 1], [2, 3]] and verify the Cayley-Hamilton theorem."
            },
            "given": [
              "Matrix A = [[4, 1], [2, 3]]"
            ],
            "toFind": "Eigenvalues λ₁, λ₂, corresponding eigenvectors v₁, v₂, and verify p(A) = 0",
            "formulaUsed": "\\det(A - \\lambda I) = 0, \\quad (A - \\lambda I) \\mathbf{v} = \\mathbf{0}",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Set up and solve characteristic equation",
                "explanation": {
                  "en": "det(A - λI) = (4 - λ)(3 - λ) - (1)(2) = λ² - 7λ + 12 - 2 = λ² - 7λ + 10 = 0.",
                  "hinglish": "det(A - λI) = (4 - λ)(3 - λ) - (1)(2) = λ² - 7λ + 12 - 2 = λ² - 7λ + 10 = 0.",
                  "hi": "det(A - λI) = (4 - λ)(3 - λ) - (1)(2) = λ² - 7λ + 12 - 2 = λ² - 7λ + 10 = 0."
                },
                "math": "\\lambda^2 - 7\\lambda + 10 = 0 \\implies (\\lambda - 5)(\\lambda - 2) = 0 \\implies \\lambda_1 = 5, \\quad \\lambda_2 = 2"
              },
              {
                "stepNumber": 2,
                "title": "Find eigenvector for λ₁ = 5",
                "explanation": {
                  "en": "(A - 5I)v = [[-1, 1], [2, -2]] [[x], [y]] = [[0], [0]] => -x + y = 0 => y = x. Choosing x = 1 gives v₁ = [1, 1]^T.",
                  "hinglish": "(A - 5I)v = [[-1, 1], [2, -2]] [[x], [y]] = [[0], [0]] => -x + y = 0 => y = x. Choosing x = 1 gives v₁ = [1, 1]^T.",
                  "hi": "(A - 5I)v = [[-1, 1], [2, -2]] [[x], [y]] = [[0], [0]] => -x + y = 0 => y = x. Choosing x = 1 gives v₁ = [1, 1]^T."
                },
                "math": "\\mathbf{v}_1 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}"
              },
              {
                "stepNumber": 3,
                "title": "Find eigenvector for λ₂ = 2",
                "explanation": {
                  "en": "(A - 2I)v = [[2, 1], [2, 1]] [[x], [y]] = [[0], [0]] => 2x + y = 0 => y = -2x. Choosing x = 1 gives v₂ = [1, -2]^T.",
                  "hinglish": "(A - 2I)v = [[2, 1], [2, 1]] [[x], [y]] = [[0], [0]] => 2x + y = 0 => y = -2x. Choosing x = 1 gives v₂ = [1, -2]^T.",
                  "hi": "(A - 2I)v = [[2, 1], [2, 1]] [[x], [y]] = [[0], [0]] => 2x + y = 0 => y = -2x. Choosing x = 1 gives v₂ = [1, -2]^T."
                },
                "math": "\\mathbf{v}_2 = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}"
              },
              {
                "stepNumber": 4,
                "title": "Verify Cayley-Hamilton theorem: A² - 7A + 10I = 0",
                "explanation": {
                  "en": "A² = [[4, 1], [2, 3]] × [[4, 1], [2, 3]] = [[18, 7], [14, 11]]. Then A² - 7A + 10I = [[18-28+10, 7-7+0], [14-14+0, 11-21+10]] = [[0, 0], [0, 0]]. Verified!",
                  "hinglish": "A² = [[4, 1], [2, 3]] × [[4, 1], [2, 3]] = [[18, 7], [14, 11]]. Then A² - 7A + 10I = [[18-28+10, 7-7+0], [14-14+0, 11-21+10]] = [[0, 0], [0, 0]]. Verified!",
                  "hi": "A² = [[4, 1], [2, 3]] × [[4, 1], [2, 3]] = [[18, 7], [14, 11]]. Then A² - 7A + 10I = [[18-28+10, 7-7+0], [14-14+0, 11-21+10]] = [[0, 0], [0, 0]]. Verified!"
                },
                "math": "A^2 - 7A + 10I = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}"
              }
            ],
            "finalAnswer": "Eigenvalues: λ₁ = 5, λ₂ = 2; Eigenvectors: v₁ = [1, 1]^T, v₂ = [1, -2]^T; Cayley-Hamilton verified (A² - 7A + 10I = 0)"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Assuming the zero vector v = [0, 0]^T can be an eigenvector.",
                "hinglish": "Zero vector ko eigenvector maan lena.",
                "hi": "शून्य सदिश को आइगेनसदिश मान लेना।"
              },
              "correction": {
                "en": "By mathematical definition, an eigenvector MUST be non-zero (v ≠ 0). Eigenvalues can be zero, but eigenvectors cannot.",
                "hinglish": "Eigenvector hamesha non-zero hota hai. Eigenvalue zero ho sakti hai lekin vector nahi.",
                "hi": "आइगेनसदिश सदैव अशून्य होना चाहिए। आइगेनमान शून्य हो सकता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u5-p1",
              "level": "Intermediate",
              "question": {
                "en": "What is the sum and product of the eigenvalues of the matrix A = [[3, 5], [1, 2]]?",
                "hinglish": "Matrix A = [[3, 5], [1, 2]] ke eigenvalues ka sum aur product kya hoga?",
                "hi": "मैट्रिक्स A = [[3, 5], [1, 2]] के आइगेनमानों का योग तथा गुणनफल क्या होगा?"
              },
              "options": [
                "Sum = 5, Product = 1",
                "Sum = 6, Product = 2",
                "Sum = 5, Product = 5",
                "Sum = 1, Product = 5"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "Sum of eigenvalues = trace(A) = 3 + 2 = 5. Product of eigenvalues = det(A) = (3)(2) - (5)(1) = 6 - 5 = 1.",
                "hinglish": "Sum = Trace = 3 + 2 = 5. Product = Det = 6 - 5 = 1.",
                "hi": "योग = Trace = 3 + 2 = 5। गुणनफल = सारणिक = 6 - 5 = 1।"
              },
              "hint": {
                "en": "Remember: ∑ λ_i = trace(A) and ∏ λ_i = det(A).",
                "hinglish": "Sum = Trace aur Product = Determinant.",
                "hi": "योग = ट्रेस तथा गुणनफल = सारणिक।"
              }
            }
          ],
          "summary": {
            "en": [
              "Eigenvalues λ satisfy the characteristic polynomial equation det(A - λI) = 0.",
              "Sum of eigenvalues equals the matrix trace; product equals the determinant.",
              "Cayley-Hamilton theorem states every matrix satisfies its own characteristic equation p(A) = 0.",
              "A matrix is diagonalizable if it possesses n linearly independent eigenvectors: A = P D P^(-1)."
            ],
            "hinglish": [
              "Eigenvalues characteristic equation det(A - λI) = 0 se aate hain.",
              "Eigenvalues ka sum = Trace aur product = Determinant.",
              "Cayley-Hamilton theorem: matrix apni characteristic equation satisfy karti hai p(A) = 0.",
              "Diagonalization A = P D P^(-1) se matrix powers aasani se calculate hoti hain."
            ],
            "hi": [
              "आइगेनमान अभिलाक्षणिक समीकरण det(A - λI) = 0 के मूल होते हैं।",
              "आइगेनमानों का योग ट्रेस तथा गुणनफल सारणिक के बराबर होता है।",
              "केली-हैमिल्टन प्रमेय: प्रत्येक मैट्रिक्स p(A) = 0 को संतुष्ट करती है।",
              "मैट्रिक्स विकर्णीकरण A = P D P^(-1) द्वारा घातों की गणना सरल हो जाती है।"
            ]
          },
          "quiz": [
            {
              "id": "math-u5-q1",
              "question": {
                "en": "If a 3×3 matrix has eigenvalues 1, 2, and 4, what is the determinant of A?",
                "hinglish": "Agar 3x3 matrix ke eigenvalues 1, 2, aur 4 hon, toh matrix ka determinant kya hoga?",
                "hi": "यदि 3×3 मैट्रिक्स के आइगेनमान 1, 2 तथा 4 हैं, तो मैट्रिक्स का सारणिक क्या होगा?"
              },
              "options": [
                "8",
                "7",
                "14",
                "0"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "The determinant of a matrix equals the product of its eigenvalues: det(A) = 1 × 2 × 4 = 8.",
                "hinglish": "Determinant eigenvalues ka product hota hai: 1 * 2 * 4 = 8.",
                "hi": "सारणिक आइगेनमानों का गुणनफल होता है: 1 × 2 × 4 = 8।"
              },
              "hint": {
                "en": "Multiply all eigenvalues together.",
                "hinglish": "Sabhi eigenvalues ko multiply karein.",
                "hi": "सभी आइगेनमानों का गुणा करें।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "Let A be an n × n matrix. A scalar λ is an Eigenvalue of A if there exists a non-zero vector v such that Av = λv, or equivalently det(A - λI) = 0 (the Characteristic Equation). The Cayley-Hamilton Theorem states that every square matrix satisfies its own characteristic equation: p(A) = 0. If A has n linearly independent eigenvectors, it is diagonalizable: A = P D P^(-1).",
            "hinglish": "Av = λv me λ eigenvalue aur v eigenvector hai. Characteristic equation det(A - λI) = 0 hoti hai. Cayley-Hamilton theorem ke mutabiq har square matrix apni characteristic equation satisfy karti hai: p(A) = 0.",
            "hi": "समीकरण Av = λv में λ आइगेनमान तथा v आइगेनसदिश है। केली-हैमिल्टन प्रमेय के अनुसार प्रत्येक वर्ग मैट्रिक्स अपने अभिलाक्षणिक समीकरण p(A) = 0 को संतुष्ट करती है।"
          },
          "terminology": [
            {
              "term": "Characteristic Polynomial",
              "definition": {
                "en": "The polynomial p(λ) = det(A - λI) whose roots are the eigenvalues of matrix A.",
                "hinglish": "det(A - λI) = 0 polynomial jiske roots eigenvalues hote hain.",
                "hi": "बहुपद det(A - λI) जिसके मूल मैट्रिक्स के आइगेनमान होते हैं।"
              }
            },
            {
              "term": "Cayley-Hamilton Theorem",
              "definition": {
                "en": "Every square matrix A satisfies its own characteristic equation: Aⁿ + c_{n-1} Aⁿ⁻¹ + ... + c₀ I = 0.",
                "hinglish": "Har square matrix apne characteristic equation ko satisfy karti hai.",
                "hi": "प्रत्येक वर्ग मैट्रिक्स अपने अभिलाक्षणिक समीकरण को संतुष्ट करती है।"
              }
            }
          ]
        },
        {
          "id": "math-u5-l2",
          "unitId": "math-u5",
          "subjectId": "mathematics",
          "title": "Gaussian Elimination, Consistency & Determinants",
          "durationMinutes": 30,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Systems of linear equations",
            "Matrix row operations"
          ],
          "realLifeQuestion": {
            "en": "How do electrical simulation tools (like SPICE) instantly solve circuits with 10,000 interconnected resistors and capacitors to calculate branch currents?",
            "hinglish": "Circuit simulator softwares 10,000 resistors aur nodes wale circuit me currents kaise instantly calculate kar lete hain?",
            "hi": "परिपथ सिमुलेटर सॉफ्टवेयर हजारों नोड्स वाले परिपथ में धाराओं की गणना इतनी तीव्रता से कैसे करते हैं?"
          },
          "simpleExplanation": {
            "en": "They set up the circuit equations as a linear system Ax = b using Kirchhoff’s laws and solve it using Gaussian Elimination! By performing elementary row operations on the augmented matrix [A | b], the computer reduces the system to upper-triangular Row Echelon Form (REF) and solves for all currents via lightning-fast back-substitution! The Rouché-Capelli Theorem determines if the circuit has a unique physical operating state.",
            "hinglish": "Circuits ko linear system Ax = b me convert karke Gaussian Elimination se solve kiya jata hai. Augmented matrix [A | b] ko Row Echelon Form me convert karke back-substitution se currents mil jaate hain.",
            "hi": "परिपथ को रैखिक निकाय Ax = b के रूप में लिखकर गॉसियन विलोपन द्वारा हल किया जाता है। संवर्धित मैट्रिक्स [A | b] को पंक्ति सोपानक रूप में बदलकर पश्च-प्रतिस्थापन से हल प्राप्त होता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine balancing a 3-tier mobile sculpture: balance the bottom dangling tier first (solve for z), then balance the middle tier (solve for y using z), and finally balance the top tier (solve for x using y and z). This is back-substitution in action!",
              "hinglish": "Teele ke niche se balance karte hue upar aane jaisa hai: pehle z nikalo, fir y, fir x.",
              "hi": "नीचे से ऊपर की ओर संतुलन बनाने की भांति जहां पहले z, फिर y और अंत में x का मान प्राप्त होता है।"
            },
            "limitations": {
              "en": "If small rounding errors occur in floating-point division, partial pivoting is required to avoid numerical instability.",
              "hinglish": "Division by near-zero number se bachne ke liye partial pivoting karni padti hai.",
              "hi": "शून्य के निकट विभाजन से बचने के लिए आंशिक धुरीकरण (Pivoting) आवश्यक है।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "The system Ax = b is Consistent iff rank(A) = rank([A | b]) (Rouché-Capelli Theorem). If rank(A) = rank([A | b]) = n (number of variables), there is a Unique Solution. If rank(A) = rank([A | b]) < n, there are Infinitely Many Solutions with n - r free parameters. If rank(A) < rank([A | b]), the system is Inconsistent (No Solution).",
              "hinglish": "Rouche-Capelli theorem: System tab consistent hota hai jab rank(A) = rank([A|b]). Agar rank = n ho toh Unique Solution, rank < n ho toh Infinite Solutions, aur rank(A) < rank([A|b]) ho toh No Solution.",
              "hi": "रूशे-कैपेली प्रमेय: निकाय संगत होता है यदि rank(A) = rank([A | b])। rank = n पर अद्वितीय हल, rank < n पर अनंत हल, तथा rank(A) < rank([A|b]) पर कोई हल नहीं।"
            },
            "keyTerms": [
              {
                "term": "Row Echelon Form (REF)",
                "definition": {
                  "en": "A matrix form where all zero rows are at the bottom, and the leading entry of each non-zero row is strictly to the right of the leading entry above it.",
                  "hinglish": "Upper-triangular type matrix jisme leading entries stair-step pattern me hoti hain.",
                  "hi": "पंक्ति सोपानक रूप जहां प्रत्येक पंक्ति का मुख्य पद पिछली पंक्ति के मुख्य पद के दाईं ओर होता है।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) = n \\implies \\text{Unique Solution}",
            "symbolMeaning": [
              "A: Coefficient matrix (m × n)",
              "[A | b]: Augmented matrix with constant vector b",
              "n: Number of unknown variables"
            ],
            "units": "Dimensionless rank integers",
            "assumptions": [
              "Elementary row operations do not alter the solution set of the system"
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Investigate the consistency of the system: x + y + z = 6, x + 2y + 3z = 10, x + 2y + 4z = 12. If consistent, solve completely.",
              "hinglish": "Investigate the consistency of the system: x + y + z = 6, x + 2y + 3z = 10, x + 2y + 4z = 12. If consistent, solve completely.",
              "hi": "Investigate the consistency of the system: x + y + z = 6, x + 2y + 3z = 10, x + 2y + 4z = 12. If consistent, solve completely."
            },
            "given": [
              "Equations: x+y+z=6, x+2y+3z=10, x+2y+4z=12"
            ],
            "toFind": "Test consistency using rank and find x, y, z",
            "formulaUsed": "\\text{Row Echelon Form of Augmented Matrix } [A \\mid \\mathbf{b}]",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Set up augmented matrix [A | b]",
                "explanation": {
                  "en": "Write coefficients and constants.",
                  "hinglish": "Write coefficients and constants.",
                  "hi": "Write coefficients and constants."
                },
                "math": "[A \\mid \\mathbf{b}] = \\begin{pmatrix} 1 & 1 & 1 & \\mid & 6 \\\\ 1 & 2 & 3 & \\mid & 10 \\\\ 1 & 2 & 4 & \\mid & 12 \\end{pmatrix}"
              },
              {
                "stepNumber": 2,
                "title": "Apply row operations R₂ → R₂ - R₁ and R₃ → R₃ - R₁",
                "explanation": {
                  "en": "Eliminate x from rows 2 and 3.",
                  "hinglish": "Eliminate x from rows 2 and 3.",
                  "hi": "Eliminate x from rows 2 and 3."
                },
                "math": "\\sim \\begin{pmatrix} 1 & 1 & 1 & \\mid & 6 \\\\ 0 & 1 & 2 & \\mid & 4 \\\\ 0 & 1 & 3 & \\mid & 6 \\end{pmatrix}"
              },
              {
                "stepNumber": 3,
                "title": "Apply row operation R₃ → R₃ - R₂",
                "explanation": {
                  "en": "Eliminate y from row 3.",
                  "hinglish": "Eliminate y from row 3.",
                  "hi": "Eliminate y from row 3."
                },
                "math": "\\sim \\begin{pmatrix} 1 & 1 & 1 & \\mid & 6 \\\\ 0 & 1 & 2 & \\mid & 4 \\\\ 0 & 0 & 1 & \\mid & 2 \\end{pmatrix}"
              },
              {
                "stepNumber": 4,
                "title": "Determine ranks and back-substitute",
                "explanation": {
                  "en": "rank(A) = 3, rank([A|b]) = 3 = n (number of unknowns). The system is consistent with a UNIQUE solution. From R₃: z = 2. From R₂: y + 2(2) = 4 => y = 0. From R₁: x + 0 + 2 = 6 => x = 4.",
                  "hinglish": "rank(A) = 3, rank([A|b]) = 3 = n (number of unknowns). The system is consistent with a UNIQUE solution. From R₃: z = 2. From R₂: y + 2(2) = 4 => y = 0. From R₁: x + 0 + 2 = 6 => x = 4.",
                  "hi": "rank(A) = 3, rank([A|b]) = 3 = n (number of unknowns). The system is consistent with a UNIQUE solution. From R₃: z = 2. From R₂: y + 2(2) = 4 => y = 0. From R₁: x + 0 + 2 = 6 => x = 4."
                },
                "math": "z = 2, \\quad y = 0, \\quad x = 4"
              }
            ],
            "finalAnswer": "Consistent with Unique Solution: x = 4, y = 0, z = 2"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Performing row operations only on A while forgetting to perform the exact same operations on column b.",
                "hinglish": "Row operations sirf A par karna aur b column ko update karna bhool jana.",
                "hi": "पंक्ति संक्रियाएं केवल A पर लागू करना तथा b स्तंभ को बदलना भूल जाना।"
              },
              "correction": {
                "en": "Always work with the full augmented matrix [A | b] so equations remain equivalent.",
                "hinglish": "Hamesha pure augmented matrix [A | b] par operations karein.",
                "hi": "सदैव संपूर्ण संवर्धित मैट्रिक्स [A | b] पर संक्रियाएं करें।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u5-p2",
              "level": "Intermediate",
              "question": {
                "en": "If in a system of 3 equations in 3 variables, rank(A) = 2 and rank([A | b]) = 3, what can be concluded?",
                "hinglish": "Agar rank(A) = 2 aur rank([A|b]) = 3 ho, toh kya conclusion hoga?",
                "hi": "यदि rank(A) = 2 तथा rank([A | b]) = 3 हो, तो क्या निष्कर्ष निकलेगा?"
              },
              "options": [
                "Inconsistent (No solution)",
                "Unique solution",
                "Infinitely many solutions",
                "Trivial solution only"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "By Rouché-Capelli theorem, when rank(A) < rank([A | b]), the system represents parallel planes that never intersect, so it is Inconsistent (no solution).",
                "hinglish": "rank(A) < rank([A|b]) ka matlab equations contradict ho rahi hain (0 = non-zero), isliye No Solution.",
                "hi": "रूशे-कैपेली प्रमेय के अनुसार rank(A) < rank([A | b]) होने पर कोई हल नहीं होता।"
              },
              "hint": {
                "en": "Compare rank(A) and rank([A|b]). Equal ranks are required for consistency.",
                "hinglish": "Ranks equal nahi hain toh consistency fail ho jati hai.",
                "hi": "समान कोटि संगतता की अनिवार्य शर्त है।"
              }
            }
          ],
          "summary": {
            "en": [
              "Gaussian elimination reduces [A | b] to Row Echelon Form via elementary row operations.",
              "Rouché-Capelli theorem: consistent iff rank(A) = rank([A | b]).",
              "Unique solution when rank = n; infinite solutions when rank < n."
            ],
            "hinglish": [
              "Gaussian elimination augmented matrix ko Row Echelon Form me convert karta hai.",
              "Rouche-Capelli theorem: rank(A) = rank([A|b]) par system consistent hota hai.",
              "rank = n par Unique Solution aur rank < n par Infinite Solutions hote hain."
            ],
            "hi": [
              "गॉसियन विलोपन संवर्धित मैट्रिक्स को पंक्ति सोपानक रूप में बदलता है।",
              "रूशे-कैपेली प्रमेय: संगतता हेतु rank(A) = rank([A | b]) आवश्यक है।",
              "rank = n पर अद्वितीय हल तथा rank < n पर अनंत हल होते हैं।"
            ]
          },
          "quiz": [
            {
              "id": "math-u5-q2",
              "question": {
                "en": "Which of the following elementary row operations changes the value of the determinant of a matrix?",
                "hinglish": "Inme se konsi row operation determinant ki value change karti hai?",
                "hi": "निम्नलिखित में से कौन सी पंक्ति संक्रिया मैट्रिक्स के सारणिक के मान को बदल देती है?"
              },
              "options": [
                "Multiplying a row by a non-zero scalar k (multiplies det by k)",
                "Adding a multiple of one row to another row: R_i → R_i + c R_j",
                "Interchanging two rows (multiplies det by -1)",
                "Both multiplying a row by k and interchanging rows"
              ],
              "correctIndex": 3,
              "explanation": {
                "en": "Multiplying a row scales the determinant by k, and swapping two rows flips the sign (-1). Only adding a multiple of another row leaves the determinant completely unchanged.",
                "hinglish": "Row swap karne se sign badalta hai (-1) aur k se multiply karne se det k-times ho jata hai.",
                "hi": "पंक्ति का अदिश गुणन सारणिक को k गुना तथा पंक्तियों का परस्पर विनिमय चिह्न (-1) बदल देता है।"
              },
              "hint": {
                "en": "Recall determinant properties under scaling and swapping.",
                "hinglish": "Scaling aur swapping dono det ko alter karte hain.",
                "hi": "स्केलिंग और विनिमय दोनों सारणिक को बदलते हैं।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "The system Ax = b is Consistent iff rank(A) = rank([A | b]) (Rouché-Capelli Theorem). If rank(A) = rank([A | b]) = n (number of variables), there is a Unique Solution. If rank(A) = rank([A | b]) < n, there are Infinitely Many Solutions with n - r free parameters. If rank(A) < rank([A | b]), the system is Inconsistent (No Solution).",
            "hinglish": "Rouche-Capelli theorem: System tab consistent hota hai jab rank(A) = rank([A|b]). Agar rank = n ho toh Unique Solution, rank < n ho toh Infinite Solutions, aur rank(A) < rank([A|b]) ho toh No Solution.",
            "hi": "रूशे-कैपेली प्रमेय: निकाय संगत होता है यदि rank(A) = rank([A | b])। rank = n पर अद्वितीय हल, rank < n पर अनंत हल, तथा rank(A) < rank([A|b]) पर कोई हल नहीं।"
          },
          "terminology": [
            {
              "term": "Row Echelon Form (REF)",
              "definition": {
                "en": "A matrix form where all zero rows are at the bottom, and the leading entry of each non-zero row is strictly to the right of the leading entry above it.",
                "hinglish": "Upper-triangular type matrix jisme leading entries stair-step pattern me hoti hain.",
                "hi": "पंक्ति सोपानक रूप जहां प्रत्येक पंक्ति का मुख्य पद पिछली पंक्ति के मुख्य पद के दाईं ओर होता है।"
              }
            }
          ]
        },
        {
          "id": "math-u5-l3",
          "unitId": "math-u5",
          "subjectId": "mathematics",
          "title": "Diagonalization, Quadratic Forms and Orthogonal Transformations",
          "durationMinutes": 30,
          "difficulty": "Advanced",
          "prerequisites": [
            "Eigenvalues and eigenvectors",
            "Matrix inversion"
          ],
          "realLifeQuestion": {
            "en": "How does quantum mechanics compute the future probability state of an atom 1,000,000 time steps forward without doing 1,000,000 matrix multiplications?",
            "hinglish": "Quantum physics me atom ke future state ko calculate karne ke liye matrix power A^1000000 bina 10 lakh baar multiply kiye kaise nikalte hain?",
            "hi": "क्वांटम यांत्रिकी में 10 लाख समय चरणों के बाद परमाणु की अवस्था ज्ञात करने हेतु A^1000000 की गणना सीधे कैसे की जाती है?"
          },
          "simpleExplanation": {
            "en": "Through Diagonalization! Multiplying a dense matrix A by itself 1,000,000 times takes hours of supercomputing. But if we diagonalize A into A = P D P^(-1), where D is a diagonal matrix of eigenvalues, then A^k = P D^k P^(-1)! Computing D^k is instantaneous because we simply raise individual diagonal numbers to power k: λ_i^k! For symmetric matrices, eigenvectors are orthogonal, giving A = P D P^T (orthogonal transformation)!",
            "hinglish": "Diagonalization A = P D P^(-1) se matrix powers A^k = P D^k P^(-1) ban jati hain. Diagonal matrix D ki power nikalna instant hota hai: sirf diagonal elements ki power k karni hoti hai. Symmetric matrix me P orthogonal hota hai (P^(-1) = P^T).",
            "hi": "विकर्णीकरण A = P D P^(-1) द्वारा मैट्रिक्स की घात A^k = P D^k P^(-1) हो जाती है। विकर्ण मैट्रिक्स D की घात निकालना अत्यंत सरल है क्योंकि केवल विकर्ण अवयवों की घात k की जाती है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine trying to calculate the volume of a tilted luggage bag in space: width, height, and length are mixed up in diagonal coordinates. If you rotate your reference frame so the axes align with the bag’s edges (eigenvector basis), volume is simply length × width × height!",
              "hinglish": "Tedhe dande ka volume nikalne ke liye frame ko dande ke seedh me rotate karne jaisa hai (principal axes align karna).",
              "hi": "तिरछी वस्तु के अक्षों को अपने निर्देशांकों के समानांतर घुमाने के समान जहां गणना सरल हो जाती है।"
            },
            "limitations": {
              "en": "A matrix cannot be diagonalized if its geometric multiplicity is less than algebraic multiplicity (defective matrix lacking n independent eigenvectors).",
              "hinglish": "Agar independent eigenvectors kam pad jayein toh matrix diagonalize nahi ho sakti.",
              "hi": "यदि स्वतंत्र आइगेनसदिशों की संख्या n से कम हो तो मैट्रिक्स विकर्णीय नहीं होती।"
            }
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "An n × n matrix A is Diagonalizable iff it possesses n linearly independent eigenvectors. Then A = P D P^(-1), where P is the modal matrix with eigenvectors as columns, and D = diag(λ₁, ..., λ_n). Spectral Theorem for Symmetric Matrices: Every real symmetric matrix A = A^T can be orthogonally diagonalized: A = P D P^T, where P is an orthogonal matrix (P^T P = I).",
              "hinglish": "Square matrix tab diagonalizable hoti hai jab uske n linearly independent eigenvectors hon: A = P D P^(-1). Real symmetric matrix hamesha orthogonally diagonalize hoti hai: A = P D P^T.",
              "hi": "n × n मैट्रिक्स विकर्णीय होती है यदि उसके n रैखिक रूप से स्वतंत्र आइगेनसदिश हों: A = P D P^(-1)। वास्तविक सम्मित मैट्रिक्स सदैव लाम्बिक रूप से विकर्णीय होती है: A = P D P^T।"
            },
            "keyTerms": [
              {
                "term": "Modal Matrix P",
                "definition": {
                  "en": "The invertible matrix whose columns are the linearly independent eigenvectors of matrix A.",
                  "hinglish": "Wo matrix jiske columns matrix A ke eigenvectors hote hain.",
                  "hi": "वह व्युत्क्रमणीय मैट्रिक्स जिसके स्तंभ मैट्रिक्स A के आइगेनसदिश होते हैं।"
                }
              },
              {
                "term": "Orthogonal Matrix",
                "definition": {
                  "en": "A real square matrix whose inverse equals its transpose: P^(-1) = P^T, meaning columns form an orthonormal set.",
                  "hinglish": "Aisi matrix jiska inverse uske transpose ke barabar ho: P^(-1) = P^T.",
                  "hi": "वह वर्ग मैट्रिक्स जिसका प्रतिलोम उसके परिवर्त के बराबर हो: P^(-1) = P^T।"
                }
              }
            ]
          },
          "visualType": "math-graph",
          "formula": {
            "equation": "A = P D P^{-1}, \\quad A^k = P D^k P^{-1}, \\quad P^T P = I \\implies A = P D P^T",
            "symbolMeaning": [
              "A: Original n × n matrix",
              "P: Modal matrix of eigenvectors",
              "D: Diagonal matrix of eigenvalues",
              "k: Power exponent"
            ],
            "units": "Dimensionless",
            "assumptions": [
              "Matrix must have n linearly independent eigenvectors for general diagonalization",
              "Symmetric matrices A = A^T are always orthogonally diagonalizable"
            ]
          },
          "workedExample": {
            "problem": {
              "en": "Diagonalize the symmetric matrix A = [[3, 1], [1, 3]] using an orthogonal modal matrix P, and compute A⁴.",
              "hinglish": "Diagonalize the symmetric matrix A = [[3, 1], [1, 3]] using an orthogonal modal matrix P, and compute A⁴.",
              "hi": "Diagonalize the symmetric matrix A = [[3, 1], [1, 3]] using an orthogonal modal matrix P, and compute A⁴."
            },
            "given": [
              "Symmetric matrix A = [[3, 1], [1, 3]]"
            ],
            "toFind": "Orthogonal matrix P, diagonal matrix D, and compute A⁴",
            "formulaUsed": "A = P D P^T, \\quad A^4 = P D^4 P^T",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Find eigenvalues of A",
                "explanation": {
                  "en": "det(A - λI) = (3 - λ)² - 1 = λ² - 6λ + 8 = (λ - 4)(λ - 2) = 0  =>  λ₁ = 4, λ₂ = 2.",
                  "hinglish": "det(A - λI) = (3 - λ)² - 1 = λ² - 6λ + 8 = (λ - 4)(λ - 2) = 0  =>  λ₁ = 4, λ₂ = 2.",
                  "hi": "det(A - λI) = (3 - λ)² - 1 = λ² - 6λ + 8 = (λ - 4)(λ - 2) = 0  =>  λ₁ = 4, λ₂ = 2."
                },
                "math": "\\lambda_1 = 4, \\quad \\lambda_2 = 2"
              },
              {
                "stepNumber": 2,
                "title": "Find normalized eigenvectors",
                "explanation": {
                  "en": "For λ₁ = 4: (A - 4I)v = [[-1, 1], [1, -1]]v = 0 => v₁ = [1, 1]^T. Normalized: u₁ = [1/√2, 1/√2]^T. For λ₂ = 2: (A - 2I)v = [[1, 1], [1, 1]]v = 0 => v₂ = [-1, 1]^T. Normalized: u₂ = [-1/√2, 1/√2]^T.",
                  "hinglish": "For λ₁ = 4: (A - 4I)v = [[-1, 1], [1, -1]]v = 0 => v₁ = [1, 1]^T. Normalized: u₁ = [1/√2, 1/√2]^T. For λ₂ = 2: (A - 2I)v = [[1, 1], [1, 1]]v = 0 => v₂ = [-1, 1]^T. Normalized: u₂ = [-1/√2, 1/√2]^T.",
                  "hi": "For λ₁ = 4: (A - 4I)v = [[-1, 1], [1, -1]]v = 0 => v₁ = [1, 1]^T. Normalized: u₁ = [1/√2, 1/√2]^T. For λ₂ = 2: (A - 2I)v = [[1, 1], [1, 1]]v = 0 => v₂ = [-1, 1]^T. Normalized: u₂ = [-1/√2, 1/√2]^T."
                },
                "math": "\\mathbf{u}_1 = \\begin{pmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{pmatrix}, \\quad \\mathbf{u}_2 = \\begin{pmatrix} -1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{pmatrix}"
              },
              {
                "stepNumber": 3,
                "title": "Assemble orthogonal matrix P and diagonal D",
                "explanation": {
                  "en": "P has u₁, u₂ as columns. D has eigenvalues on diagonal.",
                  "hinglish": "P has u₁, u₂ as columns. D has eigenvalues on diagonal.",
                  "hi": "P has u₁, u₂ as columns. D has eigenvalues on diagonal."
                },
                "math": "P = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}, \\quad D = \\begin{pmatrix} 4 & 0 \\\\ 0 & 2 \\end{pmatrix}"
              },
              {
                "stepNumber": 4,
                "title": "Compute A⁴ using A⁴ = P D⁴ P^T",
                "explanation": {
                  "en": "D⁴ = [[4⁴, 0], [0, 2⁴]] = [[256, 0], [0, 16]]. Then A⁴ = (1/2) [[1, -1], [1, 1]] [[256, 0], [0, 16]] [[1, 1], [-1, 1]] = [[136, 120], [120, 136]].",
                  "hinglish": "D⁴ = [[4⁴, 0], [0, 2⁴]] = [[256, 0], [0, 16]]. Then A⁴ = (1/2) [[1, -1], [1, 1]] [[256, 0], [0, 16]] [[1, 1], [-1, 1]] = [[136, 120], [120, 136]].",
                  "hi": "D⁴ = [[4⁴, 0], [0, 2⁴]] = [[256, 0], [0, 16]]. Then A⁴ = (1/2) [[1, -1], [1, 1]] [[256, 0], [0, 16]] [[1, 1], [-1, 1]] = [[136, 120], [120, 136]]."
                },
                "math": "A^4 = \\begin{pmatrix} 136 & 120 \\\\ 120 & 136 \\end{pmatrix}"
              }
            ],
            "finalAnswer": "P = (1/√2)[[1, -1], [1, 1]], D = [[4, 0], [0, 2]], A⁴ = [[136, 120], [120, 136]]"
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Forgetting to normalize eigenvectors when constructing the orthogonal matrix P.",
                "hinglish": "Orthogonal matrix P banate waqt eigenvectors ko normalize (divide by magnitude) karna bhool jana.",
                "hi": "लाम्बिक मैट्रिक्स P बनाते समय आइगेनसदिशों का प्रसामान्यीकरण (Normalization) भूल जाना।"
              },
              "correction": {
                "en": "An orthogonal matrix requires columns to be ORTHONORMAL (unit length and mutually orthogonal). Always divide by ||v||.",
                "hinglish": "Columns unit vectors hone chahiye, isliye length se divide karein (1/√2).",
                "hi": "स्तंभों का एकांक सदिश होना आवश्यक है, अतः परिमाण से भाग दें।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "math-u5-p3",
              "level": "Advanced",
              "question": {
                "en": "If A is a real symmetric matrix with distinct eigenvalues, what is the angle between any two of its eigenvectors?",
                "hinglish": "Real symmetric matrix ke distinct eigenvalues wale do eigenvectors ke beech angle kya hota hai?",
                "hi": "वास्तविक सम्मित मैट्रिक्स के भिन्न आइगेनमानों वाले किन्हीं दो आइगेनसदिशों के मध्य कोण क्या होता है?"
              },
              "options": [
                "90° (Orthogonal)",
                "0° (Collinear)",
                "45°",
                "180°"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "A fundamental theorem of linear algebra states that eigenvectors corresponding to distinct eigenvalues of any real symmetric matrix are strictly ORTHOGONAL (90°).",
                "hinglish": "Real symmetric matrix ke eigenvectors distinct eigenvalues par hamesha orthogonal (90 degree) hote hain.",
                "hi": "वास्तविक सम्मित मैट्रिक्स के भिन्न आइगेनमानों के आइगेनसदिश सदैव परस्पर लम्बवत (90°) होते हैं।"
              },
              "hint": {
                "en": "Recall the Spectral Theorem for symmetric matrices.",
                "hinglish": "Symmetric matrices ka spectral theorem yaad karein.",
                "hi": "सम्मित मैट्रिक्स का स्पेक्ट्रल प्रमेय याद रखें।"
              }
            }
          ],
          "summary": {
            "en": [
              "Diagonalization transforms A into a diagonal matrix: A = P D P^(-1).",
              "Matrix powers are easily computed as A^k = P D^k P^(-1).",
              "Real symmetric matrices can always be orthogonally diagonalized: A = P D P^T."
            ],
            "hinglish": [
              "Diagonalization A ko diagonal matrix D me convert karti hai: A = P D P^(-1).",
              "Matrix powers A^k = P D^k P^(-1) se instantly nikal aati hain.",
              "Real symmetric matrix hamesha orthogonally diagonalize hoti hai: A = P D P^T."
            ],
            "hi": [
              "विकर्णीकरण A को विकर्ण मैट्रिक्स में बदलता है: A = P D P^(-1)।",
              "मैट्रिक्स की घातें A^k = P D^k P^(-1) द्वारा सरलता से प्राप्त होती हैं।",
              "वास्तविक सम्मित मैट्रिक्स सदैव लाम्बिक रूप से विकर्णीय होती है: A = P D P^T।"
            ]
          },
          "quiz": [
            {
              "id": "math-u5-q3",
              "question": {
                "en": "If A is diagonalizable with A = P D P^(-1), what is A^(-1) in terms of P and D?",
                "hinglish": "Agar A = P D P^(-1) ho, toh A^(-1) kya hoga?",
                "hi": "यदि A = P D P^(-1) है, तो P और D के पदों में A^(-1) क्या होगा?"
              },
              "options": [
                "P D^(-1) P^(-1)",
                "P^(-1) D P",
                "D^(-1)",
                "P D P"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "A^(-1) = (P D P^(-1))^(-1) = (P^(-1))^(-1) D^(-1) P^(-1) = P D^(-1) P^(-1).",
                "hinglish": "Inverse reversal rule se A^(-1) = P D^(-1) P^(-1) ban jata hai.",
                "hi": "प्रतिलोम नियम से A^(-1) = P D^(-1) P^(-1) प्राप्त होता है।"
              },
              "hint": {
                "en": "Apply matrix inverse rule: (ABC)^(-1) = C^(-1) B^(-1) A^(-1).",
                "hinglish": "(ABC)^(-1) rule use karein.",
                "hi": "(ABC)^(-1) = C^(-1) B^(-1) A^(-1) का प्रयोग करें।"
              }
            }
          ],
          "underlyingPrinciple": {
            "en": "An n × n matrix A is Diagonalizable iff it possesses n linearly independent eigenvectors. Then A = P D P^(-1), where P is the modal matrix with eigenvectors as columns, and D = diag(λ₁, ..., λ_n). Spectral Theorem for Symmetric Matrices: Every real symmetric matrix A = A^T can be orthogonally diagonalized: A = P D P^T, where P is an orthogonal matrix (P^T P = I).",
            "hinglish": "Square matrix tab diagonalizable hoti hai jab uske n linearly independent eigenvectors hon: A = P D P^(-1). Real symmetric matrix hamesha orthogonally diagonalize hoti hai: A = P D P^T.",
            "hi": "n × n मैट्रिक्स विकर्णीय होती है यदि उसके n रैखिक रूप से स्वतंत्र आइगेनसदिश हों: A = P D P^(-1)। वास्तविक सम्मित मैट्रिक्स सदैव लाम्बिक रूप से विकर्णीय होती है: A = P D P^T।"
          },
          "terminology": [
            {
              "term": "Modal Matrix P",
              "definition": {
                "en": "The invertible matrix whose columns are the linearly independent eigenvectors of matrix A.",
                "hinglish": "Wo matrix jiske columns matrix A ke eigenvectors hote hain.",
                "hi": "वह व्युत्क्रमणीय मैट्रिक्स जिसके स्तंभ मैट्रिक्स A के आइगेनसदिश होते हैं।"
              }
            },
            {
              "term": "Orthogonal Matrix",
              "definition": {
                "en": "A real square matrix whose inverse equals its transpose: P^(-1) = P^T, meaning columns form an orthonormal set.",
                "hinglish": "Aisi matrix jiska inverse uske transpose ke barabar ho: P^(-1) = P^T.",
                "hi": "वह वर्ग मैट्रिक्स जिसका प्रतिलोम उसके परिवर्त के बराबर हो: P^(-1) = P^T।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Unit V covers matrix algebra: linear systems of equations Ax = b; Gaussian elimination and REF/RREF; Rouché-Capelli consistency criteria; determinants, rank, and inverse; symmetric, skew-symmetric, and orthogonal matrices; eigenvalues and eigenvectors with det(A - λI) = 0; Cayley-Hamilton theorem; diagonalization A = P D P^(-1); and orthogonal transformations A = P D P^T.",
          "hinglish": "Unit V Matrices cover karta hai: Ax = b systems; Gaussian elimination; Rouche-Capelli theorem; determinants aur rank; Eigenvalues aur Eigenvectors; Cayley-Hamilton theorem; aur Diagonalization A = P D P^(-1).",
          "hi": "इकाई 5 मैट्रिक्स बीजगणित को समाहित करती है: रैखिक समीकरण निकाय Ax = b, गॉसियन विलोपन, रूशे-कैपेली प्रमेय, सारणिक तथा कोटि, आइगेनमान तथा आइगेनसदिश, केली-हैमिल्टन प्रमेय, एवं विकर्णीकरण।"
        },
        "shortNotes": [
          {
            "topic": "Rouché-Capelli Theorem",
            "content": {
              "en": "Consistent iff rank(A) = rank([A|b]). Unique if rank = n; infinite if rank < n.",
              "hinglish": "Consistent jab rank(A) = rank([A|b]). Unique jab rank = n.",
              "hi": "निकाय संगत होता है यदि rank(A) = rank([A|b])। rank = n पर अद्वितीय हल।"
            }
          },
          {
            "topic": "Cayley-Hamilton Theorem",
            "content": {
              "en": "Every square matrix satisfies its own characteristic equation p(A) = 0.",
              "hinglish": "Har matrix apni characteristic equation p(A) = 0 satisfy karti hai.",
              "hi": "प्रत्येक वर्ग मैट्रिक्स अपने अभिलाक्षणिक समीकरण p(A) = 0 को संतुष्ट करती है।"
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Characteristic Equation",
            "formula": "\\det(A - \\lambda I) = 0",
            "units": "Dimensionless",
            "note": "Roots are eigenvalues"
          },
          {
            "name": "Eigenvalue Properties",
            "formula": "\\sum \\lambda_i = \\text{tr}(A), \\quad \\prod \\lambda_i = \\det(A)",
            "units": "Dimensionless",
            "note": "Trace and determinant relations"
          },
          {
            "name": "Matrix Diagonalization",
            "formula": "A = P D P^{-1}, \\quad A^k = P D^k P^{-1}",
            "units": "Dimensionless",
            "note": "P is modal matrix"
          },
          {
            "name": "Orthogonal Matrix Condition",
            "formula": "P^T P = I \\iff P^{-1} = P^T",
            "units": "Dimensionless",
            "note": "Columns are orthonormal"
          }
        ],
        "mindMap": [
          {
            "node": "Linear Systems",
            "children": [
              "Row Echelon Form",
              "Gaussian Elimination",
              "Rouché-Capelli Theorem",
              "Rank of Matrix"
            ]
          },
          {
            "node": "Special Matrices",
            "children": [
              "Symmetric (A = A^T)",
              "Skew-Symmetric (A = -A^T)",
              "Orthogonal (P^T P = I)"
            ]
          },
          {
            "node": "Spectral Theory",
            "children": [
              "Eigenvalues & Eigenvectors",
              "Cayley-Hamilton Theorem",
              "Diagonalization",
              "Orthogonal Transformation"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Consistent System (Unique)",
            "conceptB": "Consistent System (Infinite)",
            "comparisonPoints": [
              {
                "feature": "Rank Condition",
                "a": "rank(A) = rank([A|b]) = n",
                "b": "rank(A) = rank([A|b]) = r < n"
              },
              {
                "feature": "Free Parameters",
                "a": "0 free parameters",
                "b": "n - r free parameters"
              },
              {
                "feature": "Geometric Meaning",
                "a": "Planes intersect at a single unique point",
                "b": "Planes intersect along a line or plane"
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "State the Cayley-Hamilton Theorem.",
            "back": "Every square matrix satisfies its own characteristic equation: p(A) = 0."
          },
          {
            "front": "What is the sum of the eigenvalues of any matrix A?",
            "back": "The trace of A (sum of main diagonal elements)."
          },
          {
            "front": "What is the product of the eigenvalues of any matrix A?",
            "back": "The determinant of A: det(A)."
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Why are the eigenvalues of any real symmetric matrix always real numbers?",
            "answer": "Let Av = λv. Multiplying by conjugate transpose v† gives v† A v = λ v† v. Taking conjugate transpose of both sides and using A = A^T = A† shows that (v† A v) is real and (v† v) is real and positive, forcing λ to be strictly real."
          }
        ],
        "longAnswerQuestions": [
          {
            "question": "State the Cayley-Hamilton Theorem. Find the characteristic equation of A = [[1, 2], [3, 4]] and hence find A^(-1) and A³.",
            "outline": "1. State theorem: Every square matrix satisfies p(A) = 0.\n2. det(A - λI) = (1 - λ)(4 - λ) - 6 = λ² - 5λ - 2 = 0.\n3. By Cayley-Hamilton: A² - 5A - 2I = 0.\n4. Multiply by A^(-1): A - 5I - 2 A^(-1) = 0  =>  A^(-1) = (1/2)(A - 5I) = [[-2, 1], [3/2, -1/2]].\n5. For A³: A² = 5A + 2I => A³ = 5A² + 2A = 5(5A + 2I) + 2A = 27A + 10I = [[37, 54], [81, 118]]."
          }
        ],
        "numericalPractice": [
          {
            "question": "Find the eigenvalues of A = [[2, 1], [1, 2]].",
            "given": "A = [[2, 1], [1, 2]]",
            "formula": "det(A - λI) = (2 - λ)² - 1 = 0",
            "solution": "(2 - λ)² = 1 => 2 - λ = ±1 => λ₁ = 3, λ₂ = 1."
          }
        ]
      }
    }
  ],
  "examQuestions": [
    {
      "id": "math-eq1",
      "unitNumber": "Unit I",
      "type": "Numerical",
      "marks": 10,
      "question": "Find the evolute (locus of centers of curvature) of the ellipse x = a cos(t), y = b sin(t).",
      "solution": "1. Parametric derivatives: dx/dt = -a sin(t), dy/dt = b cos(t)  =>  y1 = dy/dx = -(b/a) cot(t).\n2. Second derivative: y2 = d/dx [-(b/a) cot(t)] = [(b/a) csc²(t)] / (dx/dt) = -b / (a² sin³(t)).\n3. Center of curvature coordinates (α, β):\n   α = x - y1(1+y1²)/y2 = [(a² - b²)/a] cos³(t)\n   β = y + (1+y1²)/y2 = -[(a² - b²)/b] sin³(t)\n4. Eliminating parameter t: (a α)^(2/3) + (b β)^(2/3) = (a² - b²)^(2/3).\nThis is an astroid (hypocycloid of 4 cusps)."
    },
    {
      "id": "math-eq2",
      "unitNumber": "Unit I",
      "type": "Long",
      "marks": 10,
      "question": "State and prove the relationship between Beta and Gamma functions: B(m, n) = Γ(m)Γ(n) / Γ(m+n). Hence evaluate Γ(1/2).",
      "solution": "1. Write Γ(m) = 2 ∫₀^∞ e^(-x²) x^(2m-1) dx and Γ(n) = 2 ∫₀^∞ e^(-y²) y^(2n-1) dy by substituting variable squared.\n2. Product: Γ(m)Γ(n) = 4 ∫₀^∞ ∫₀^∞ e^{-(x²+y²)} x^(2m-1) y^(2n-1) dx dy.\n3. Convert to polar coordinates: x = r cos(θ), y = r sin(θ), dx dy = r dr dθ, r from 0 to ∞, θ from 0 to π/2.\n4. Integral factors: 2 ∫₀^∞ e^(-r²) r^{2(m+n)-1} dr  ×  2 ∫₀^(π/2) cos^(2m-1)(θ) sin^(2n-1)(θ) dθ.\n5. Notice the first radial factor is Γ(m+n), and the angular factor is B(m, n).\n6. Therefore: Γ(m)Γ(n) = Γ(m+n) B(m, n)  =>  B(m, n) = Γ(m)Γ(n) / Γ(m+n).\n7. Set m = n = 1/2: B(1/2, 1/2) = [Γ(1/2)]² / Γ(1) = [Γ(1/2)]².\n8. But B(1/2, 1/2) = 2 ∫₀^(π/2) dθ = π. Hence [Γ(1/2)]² = π  =>  Γ(1/2) = √π."
    },
    {
      "id": "math-eq3",
      "unitNumber": "Unit II",
      "type": "Long",
      "marks": 10,
      "question": "Obtain the Fourier series expansion of f(x) = x + x² in [-π, π]. Hence deduce that ∑_{n=1}^∞ 1/n² = π² / 6.",
      "solution": "1. Split f(x) into odd part x and even part x².\n2. a₀ = (1/π) ∫_{-π}^π (x + x²) dx = (1/π) [0 + 2 ∫₀^π x² dx] = (2/π)(π³/3) = 2π²/3.\n3. a_n = (1/π) ∫_{-π}^π (x + x²) cos(nx) dx = (2/π) ∫₀^π x² cos(nx) dx = 4(-1)^n / n².\n4. b_n = (1/π) ∫_{-π}^π (x + x²) sin(nx) dx = (2/π) ∫₀^π x sin(nx) dx = 2(-1)^{n+1} / n.\n5. Fourier Series: f(x) = π²/3 + ∑_{n=1}^∞ [ (4(-1)^n / n²) cos(nx) + (2(-1)^{n+1} / n) sin(nx) ].\n6. Substitute x = π: At the boundary, f(x) converges to [f(π) + f(-π)]/2 = [(π + π²) + (-π + π²)]/2 = π².\n7. π² = π²/3 + 4 ∑ 1/n²  =>  2π²/3 = 4 ∑ 1/n²  =>  ∑_{n=1}^∞ 1/n² = π² / 6."
    },
    {
      "id": "math-eq4",
      "unitNumber": "Unit III",
      "type": "Numerical",
      "marks": 10,
      "question": "Evaluate ∮_C [ (e^(2z)) / ((z + 1)(z - 2)) ] dz around the contour |z| = 3.",
      "solution": "1. Singularities: z₁ = -1 and z₂ = 2.\n2. Both poles lie strictly inside |z| = 3 (since |-1| = 1 < 3 and |2| = 2 < 3).\n3. Residue at z = -1: Res(-1) = lim_{z→-1} e^(2z) / (z - 2) = e^(-2) / (-3) = -1 / (3e²).\n4. Residue at z = 2: Res(2) = lim_{z→2} e^(2z) / (z + 1) = e⁴ / 3.\n5. Sum of residues = (e⁴ - e^(-2)) / 3.\n6. By Cauchy Residue Theorem: Integral = 2πi · [(e⁴ - e^(-2)) / 3] = (2πi/3)(e⁴ - e^(-2))."
    },
    {
      "id": "math-eq5",
      "unitNumber": "Unit IV",
      "type": "Long",
      "marks": 10,
      "question": "Let T: ℝ³ → ℝ³ be defined by T(x, y, z) = (x + 2y - z, y + z, x + y - 2z). Find bases and dimensions for the range space and null space, and verify the Rank-Nullity Theorem.",
      "solution": "1. Matrix of T relative to standard basis: A = [[1, 2, -1], [0, 1, 1], [1, 1, -2]].\n2. Row reduce A: R₃ → R₃ - R₁: [[1, 2, -1], [0, 1, 1], [0, -1, -1]]. R₃ → R₃ + R₂: [[1, 2, -1], [0, 1, 1], [0, 0, 0]].\n3. Number of non-zero rows = 2, so rank(T) = 2.\n4. Range basis = first two columns of original matrix: {(1, 0, 1), (2, 1, 1)}.\n5. For ker(T): y + z = 0 => y = -z; x + 2(-z) - z = 0 => x = 3z.\n6. ker(T) = {z(3, -1, 1)}, so nullity(T) = 1 with basis {(3, -1, 1)}.\n7. Verification: rank(T) + nullity(T) = 2 + 1 = 3 = dim(ℝ³)."
    },
    {
      "id": "math-eq6",
      "unitNumber": "Unit V",
      "type": "Long",
      "marks": 10,
      "question": "Find the eigenvalues and eigenvectors of A = [[1, 0, -1], [1, 2, 1], [2, 2, 3]] and diagonalize A.",
      "solution": "1. Characteristic equation: det(A - λI) = -λ³ + 6λ² - 11λ + 6 = 0  =>  (λ - 1)(λ - 2)(λ - 3) = 0.\n2. Eigenvalues: λ₁ = 1, λ₂ = 2, λ₃ = 3.\n3. Eigenvector for λ₁ = 1: (A - I)v = 0 => v₁ = [-2, 1, 0]^T or [-1, 1, 0]^T... solving gives v₁ = [-1, 1, 0]^T.\n4. Eigenvector for λ₂ = 2: (A - 2I)v = 0 => v₂ = [-2, 1, 2]^T.\n5. Eigenvector for λ₃ = 3: (A - 3I)v = 0 => v₃ = [-1, 1, 2]^T.\n6. Modal matrix P has v₁, v₂, v₃ as columns; D = diag(1, 2, 3). Then A = P D P^(-1)."
    }
  ]
};
