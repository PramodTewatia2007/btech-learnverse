import { Subject } from '../types';

export const APPLIED_PHYSICS: Subject = {
  "id": "applied-physics",
  "title": "Applied Physics",
  "category": "Theory",
  "description": "Master wave optics, quantum mechanics, lasers, fiber optics, electromagnetism, and nanoscience from first principles with interactive 3D simulations.",
  "icon": "Atom",
  "color": "from-blue-600 to-indigo-700",
  "isOfficial": true,
  "syllabusSource": "Official University Syllabus (B.Tech 1st Year)",
  "unitsCount": 5,
  "units": [
    {
      "id": "physics-u1",
      "unitNumber": "Unit I",
      "title": "Wave Optics",
      "description": "Explore the wave nature of light, interference, thin films, Newton’s rings, Michelson interferometer, diffraction, resolving power, and polarization.",
      "topics": [
        "Interference of light by amplitude division",
        "Interference in parallel thin films and Stokes phase shift",
        "Wedge-shaped thin films and optical flatness testing",
        "Newton’s rings: diameter derivation and determination of λ and μ",
        "Michelson interferometer: circular/straight fringes, path difference, and Sodium doublet resolution",
        "Fraunhofer diffraction: single-slit intensity profile, central maximum, and minima",
        "Double-slit diffraction: interference envelope and missing orders / absent spectra",
        "Plane diffraction grating: grating element (a+b), dispersive power, and Rayleigh resolution criterion",
        "Polarization by reflection and Brewster’s Law (μ = tan ip)",
        "Double refraction in uniaxial crystals: Ordinary (O) and Extraordinary (E) rays",
        "Nicol prism: construction and total internal reflection at Canada balsam",
        "Quarter-Wave and Half-Wave retardation plates",
        "Optical activity, specific rotation (S = θ / lc), and Laurent’s Half-Shade Polarimeter"
      ],
      "lessons": [
        {
          "id": "phy-u1-l1",
          "unitId": "physics-u1",
          "subjectId": "applied-physics",
          "title": "Interference of Light, Thin Films & Wedge-Shaped Films",
          "durationMinutes": 30,
          "difficulty": "Beginner",
          "prerequisites": [
            "Basic wave parameters (Wavelength λ, Frequency f, Phase angle ϕ)",
            "Law of reflection and Snell’s law of refraction (n1 sin θ1 = n2 sin θ2)"
          ],
          "realLifeQuestion": {
            "en": "Why does a swirling soap bubble or a gasoline puddle on a wet road shimmer with brilliant rainbow colors under white sunlight, even though soap and gasoline are completely transparent and colorless?",
            "hinglish": "Sabun ka transparent bulbula ya sadak par gira petrol sunlight me itne khoobsurat rainbow colors kyu dikhata hai jabki unka apna koi color nahi hota?",
            "hi": "साबुन का पारदर्शी बुलबुला या गीली सड़क पर पेट्रोल की पतली परत सूर्य के प्रकाश में चमकीले इंद्रधनुषी रंग क्यों प्रदर्शित करती है, जबकि वे स्वयं रंगहीन होते हैं?"
          },
          "simpleExplanation": {
            "en": "This colorful phenomenon is caused by Optical Interference due to Amplitude Division in thin transparent films! When white light strikes the top surface of a soap film or gasoline layer, part of the wave reflects immediately into your eye (Ray 1). The remaining light penetrates through the film, bounces off the bottom surface, and emerges slightly delayed (Ray 2). Because Ray 2 traveled extra distance inside the film, its crests and troughs overlap with Ray 1. For certain wavelengths (colors), the crests align perfectly (Constructive Interference), making that specific color intensely bright. For other wavelengths, a crest meets a trough and cancels out completely (Destructive Interference). As film thickness varies naturally across the surface, different colors are amplified in different regions, creating swirling rainbow fringes!",
            "hinglish": "Yeh colorful effect Thin Film Interference ki wajah se hota hai! Jab white sunlight soap film ya oil layer par girti hai, toh thodi si light upar wali surface se turant reflect ho jati hai (Ray 1). Baaki bachi light film ke andar jaakar neeche wali boundary se takra kar wapas aati hai (Ray 2). Ray 2 ko film ke andar aane-jaane me extra distance travel karna padta hai, jisse dono rays me ek Optical Path Difference create ho jata hai. Kisi specific color ke liye dono waves ke crests ek doosre ke upar aate hain (Constructive Interference), jisse wo color chamakdar dikhta hai. Doosre colors cancel ho jaate hain (Destructive Interference). Film ki thickness alag-alag jagah thodi vary karti hai, isliye hume alag-alag colors ke patterns dikhte hain!",
            "hi": "यह रंगीन प्रभाव पतली फिल्मों में आयाम विभाजन द्वारा प्रकाश के व्यतिकरण (Interference) के कारण होता है। जब श्वेत प्रकाश किसी साबुन की फिल्म पर गिरता है, तो उसका एक भाग ऊपरी सतह से परावर्तित होता है और दूसरा भाग निचली सतह से परावर्तित होकर वापस आता है। दोनों तरंगों के बीच प्रकाशीय पथांतर उत्पन्न होता है। कुछ विशिष्ट तरंगदैर्ध्य (रंगों) के लिए संपोषी व्यतिकरण (चमकदार) और अन्य के लिए विनाशी व्यतिकरण (अदृश्य) होता है।"
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "Interference of light is the redistribution of optical energy in space resulting from the superposition of two or more coherent light waves. In a parallel thin dielectric film of thickness t and refractive index μ, the total optical path difference between the reflected rays is Δ = 2μt cos(r) - λ/2 (due to Stokes phase reversal of π at the denser boundary). Constructive interference occurs when 2μt cos(r) = (2n - 1)λ/2, and destructive interference occurs when 2μt cos(r) = nλ.",
              "hinglish": "Thin dielectric film (thickness t, refractive index μ) me reflected rays ke beech net path difference Δ = 2μt cos(r) - λ/2 hota hai (Stokes law ke anusaar denser medium se reflection par π phase change / λ/2 path change hota hai). Constructive interference ke liye 2μt cos(r) = (2n - 1)λ/2 aur destructive interference ke liye 2μt cos(r) = nλ hota hai.",
              "hi": "व्यतिकरण दो या अधिक कला-संबद्ध तरंगों के अध्यारोपण से प्रकाश ऊर्जा का पुनर्वितरण है। समानांतर पतली फिल्म में परावर्तित किरणों हेतु प्रभावी पथांतर Δ = 2μt cos(r) - λ/2 होता है। दीप्त फ्रिंज हेतु 2μt cos(r) = (2n - 1)λ/2 तथा अदीप्त फ्रिंज हेतु 2μt cos(r) = nλ प्रतिबंध होता है।"
            },
            "keyTerms": [
              {
                "term": "Coherence",
                "definition": {
                  "en": "Two light sources are coherent if they maintain a constant phase difference over time and have identical frequencies.",
                  "hinglish": "Do sources coherent tab hote hain jab unke beech ka phase difference samay ke saath bilkul constant rehta hai.",
                  "hi": "दो प्रकाश स्रोत कला-संबद्ध कहलाते हैं यदि उनके मध्य समयानुसार नियत कलांतर बना रहता है।"
                }
              },
              {
                "term": "Stokes’ Law (Phase Change on Reflection)",
                "definition": {
                  "en": "When light reflects from the boundary of an optically denser medium (higher refractive index), it suffers a phase reversal of π radians, equivalent to adding or subtracting an optical path of λ/2.",
                  "hinglish": "Jab light kisi denser medium ki boundary se reflect hoti hai, toh usme 180° (π radians) ka phase flip ho jata hai, jo ki λ/2 path difference ke barabar hai.",
                  "hi": "जब प्रकाश किसी सघन माध्यम के पृष्ठ से परावर्तित होता है, तो इसमें π रेडियन (λ/2 पथांतर) का कलान्तर उत्पन्न होता है।"
                }
              },
              {
                "term": "Wedge-Shaped Thin Film",
                "definition": {
                  "en": "A transparent film bounded by two non-parallel flat surfaces inclined at a very small angle θ. It produces straight, parallel, equidistant interference fringes localized near the film surface.",
                  "hinglish": "Do non-parallel surfaces ke beech bani film jinka aapas me bohot chhota angle θ hota hai. Isme straight aur barabar doori par fringes banti hain.",
                  "hi": "एक बहुत छोटे कोण θ पर झुकी हुई दो असमानांतर समतल सतहों के मध्य बनी फिल्म, जो समानांतर व समान दूरी की फ्रिंजें बनाती है।"
                }
              }
            ]
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Echoes between twin canyon walls: Shout once toward a stepped canyon with a front ridge and a back wall. The sound bounces from the front ridge and the rear wall. If the second echo arrives exactly in step (one sound wavelength later), the two sounds reinforce and boom loudly. If the second echo arrives half a cycle delayed, the acoustic compression meets rarefaction and you hear silence. In a thin film, light waves bounce from the front and back surfaces just like echoes!",
              "hinglish": "Ghaati (canyon) me aawaz ki goonj: Agar aap aawaz karein aur aage wale pathar aur peeche wale pahad se aane wali goonj ek saath aakar mile toh aawaz bohot tez ho jaati hai (reinforcement). Agar ek ka peak dusre ke trough se mile toh aawaz dab jaati hai. Thin film me bhi light front surface aur back surface se takra kar aise hi interfere karti hai!",
              "hi": "जैसे दो अलग-अलग दूरियों पर स्थित दीवारों से टकराकर आने वाली प्रतिध्वनियाँ यदि एक साथ मिलें तो ध्वनि तीव्र हो जाती है और यदि विपरीत कला में मिलें तो शांत हो जाती हैं।"
            },
            "limitations": {
              "en": "Sound waves are longitudinal and reflect with complicated dispersion, whereas light waves are transverse electromagnetic waves subject to Stokes phase flip and electromagnetic boundary conditions.",
              "hinglish": "Sound longitudinal waves hoti hain jabki light transverse electromagnetic waves hoti hain jisme polarization aur Stokes phase flip hota hai.",
              "hi": "ध्वनि तरंगें अनुदैर्ध्य होती हैं जबकि प्रकाश अनुप्रस्थ विद्युतचुंबकीय तरंगें हैं।"
            }
          },
          "terminology": [
            {
              "term": "Division of Amplitude",
              "definition": {
                "en": "The method of producing coherent beams by splitting the amplitude (intensity) of a single incident wavefront into two or more parts by partial reflection and partial transmission at dielectric interfaces (e.g., thin films, Newton’s rings, Michelson interferometer).",
                "hinglish": "Ek hi incident light ray ki amplitude ko partial reflection aur partial refraction ke dwara do hisso me baantna.",
                "hi": "आपतित तरंग के आयाम को आंशिक परावर्तन व अपवर्तन द्वारा विभाजित करके कला-संबद्ध किरणें उत्पन्न करने की विधि।"
              }
            },
            {
              "term": "Optical Path Length (OPL)",
              "definition": {
                "en": "The equivalent distance light would travel in a vacuum during the same time it takes to traverse a physical distance t inside a medium of refractive index μ: OPL = μ · t.",
                "hinglish": "Kisi medium (refractive index μ) ke andar distance t chalne par vacuum ke hisaab se light kitna distance travel karti: OPL = μ * t.",
                "hi": "अपवर्तनांक μ वाले माध्यम में भौतिक दूरी t तय करने के दौरान निर्वात में तय की गई तुल्य दूरी (OPL = μ · t)।"
              }
            },
            {
              "term": "Fringe Width in Wedge Film (β)",
              "definition": {
                "en": "The linear spacing between consecutive bright or dark fringes in a wedge film: β = λ / (2μθ), where θ is the small wedge angle in radians.",
                "hinglish": "Wedge-shaped film me do lagataar bright ya dark fringes ke beech ki doori: β = λ / (2μθ).",
                "hi": "फानाकार (वेज) फिल्म में दो क्रमागत दीप्त अथवा अदीप्त फ्रिंजों के मध्य की दूरी (β = λ / (2μθ))।"
              }
            }
          ],
          "visualType": "3d-optics",
          "visualData": {
            "mode": "thin-film",
            "filmThickness": 450,
            "refractiveIndex": 1.33,
            "incidentAngle": 0,
            "wavelength": 589
          },
          "underlyingPrinciple": {
            "en": "Electromagnetic Boundary Conditions and Superposition: Electric field vectors E1 and E2 obey vector addition E_net = E1 + E2. Intensity is I = |E_net|^2 = I1 + I2 + 2√(I1 I2) cos(Δϕ). When light reflects at a denser boundary, Maxwell equations demand continuity of tangential electric and magnetic fields, forcing a π phase shift on the reflected electric vector.",
            "hinglish": "Maxwell equations ke anusaar jab light denser medium se reflect hoti hai toh electric vector 180° flip ho jata hai. Net intensity I = I1 + I2 + 2√(I1 I2) cos(Δϕ) hoti hai. Jab path difference λ/2 ho toh cos(π) = -1 hota hai, jisse destructive interference banta hai.",
            "hi": "मैक्सवेल समीकरणों के अनुसार सघन माध्यम के पृष्ठ पर परावर्तन से विद्युत क्षेत्र सदिश में π का कलांतर आता है। कुल तीव्रता I = I1 + I2 + 2√(I1 I2) cos(Δϕ) व्यतिकरण प्रतिरूप निर्धारित करती है।"
          },
          "formula": {
            "equation": "2 \\mu t \\cos(r) \\pm \\frac{\\lambda}{2} = m \\lambda",
            "symbolMeaning": [
              "μ: Refractive index of the thin film dielectric",
              "t: Physical thickness of the thin film (meters)",
              "r: Angle of refraction inside the film (cos r = √(1 - sin² i / μ²))",
              "λ: Wavelength of the light in vacuum (meters)",
              "m: Integer order of the interference fringe (m = 1, 2, 3...)"
            ],
            "units": "Thickness t in nanometers (nm) or meters (m); Wavelength λ in nm; Angles in radians or degrees.",
            "assumptions": [
              "The film faces are plane parallel and optically smooth.",
              "The film thickness is comparable to the wavelength of light (t ≈ λ).",
              "Incident light is monochromatic or quasi-monochromatic."
            ],
            "realWorldApplication": "Anti-reflective coatings on eyeglasses, camera lenses, solar cell silicon surfaces, and precision optical flats."
          },
          "formulaLogic": {
            "formula": "2 \\mu t \\cos(r) = \\begin{cases} (2m - 1)\\frac{\\lambda}{2} & \\text{(Bright / Maxima in Reflection)} \\\\[6pt] m \\lambda & \\text{(Dark / Minima in Reflection)} \\end{cases}",
            "description": {
              "en": "Condition for constructive and destructive interference for reflected light from a thin film in air.",
              "hinglish": "Air me rakhi thin film se reflected light ke bright aur dark fringes banne ki conditions.",
              "hi": "वायु में स्थित पतली फिल्म से परावर्तित प्रकाश में दीप्त एवं अदीप्त फ्रिंजों के बनने का प्रतिबंध।"
            },
            "symbols": [
              {
                "symbol": "μ",
                "meaning": "Refractive index of the film",
                "unit": "Dimensionless"
              },
              {
                "symbol": "t",
                "meaning": "Physical thickness of the thin film",
                "unit": "m"
              },
              {
                "symbol": "r",
                "meaning": "Angle of refraction inside the film",
                "unit": "radians"
              },
              {
                "symbol": "λ",
                "meaning": "Wavelength of light in vacuum",
                "unit": "m"
              },
              {
                "symbol": "m",
                "meaning": "Interference order (1, 2, 3...)",
                "unit": "Dimensionless"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A parallel glass plate with refractive index μ = 1.5 is illuminated by white light at normal incidence (i = 0°). In the reflected spectrum, dark bands are observed at wavelengths λ1 = 500 nm and λ2 = 700 nm, with no dark bands between them. Calculate the minimum physical thickness t of the glass plate.",
              "hinglish": "Ek parallel glass plate (μ = 1.5) par white light normal incidence (i = 0°) par girti hai. Reflected light me 500 nm aur 700 nm par do lagataar dark bands dikhte hain jinke beech koi aur dark band nahi hai. Glass plate ki minimum thickness t calculate karo.",
              "hi": "एक समानांतर काँच की पट्टिका (μ = 1.5) पर अभिलंबवत श्वेत प्रकाश आपतित होता है। परावर्तित वर्णक्रम में 500 nm तथा 700 nm पर दो क्रमागत अदीप्त पट्टियाँ दिखाई देती हैं। पट्टिका की न्यूनतम मोटाई t ज्ञात कीजिए।"
            },
            "given": [
              "Refractive index of glass: μ = 1.5",
              "Normal incidence: i = 0° => r = 0° => cos(r) = cos(0°) = 1",
              "Wavelength of first dark band: λ1 = 500 nm = 500 × 10^-9 m",
              "Wavelength of consecutive dark band: λ2 = 700 nm = 700 × 10^-9 m",
              "No other dark bands exist between λ1 and λ2"
            ],
            "toFind": "Minimum physical thickness t of the plate (in micrometers / nm)",
            "formulaUsed": "2 μ t cos(r) = m λ  (Condition for destructive interference in reflected light)",
            "steps": [
              {
                "stepNumber": 1,
                "title": "State the destructive interference condition for reflection",
                "explanation": {
                  "en": "Due to the Stokes phase shift of λ/2 at the upper surface, the destructive condition in reflected light is 2 μ t cos(r) = m λ. For normal incidence, cos(r) = 1, giving 2 μ t = m λ.",
                  "hinglish": "Stokes law ke hisaab se upar wali boundary par λ/2 ka path change hota hai, isliye reflected dark band ka formula 2 μ t cos(r) = m λ hota hai. Normal incidence par cos(r) = 1, toh 2 μ t = m λ.",
                  "hi": "परावर्तित प्रकाश में विनाशी व्यतिकरण का सूत्र 2 μ t cos(r) = m λ होता है। अभिलंबवत आपतन हेतु cos(0°) = 1, अतः 2 μ t = m λ।"
                },
                "math": "2 \\mu t = m \\lambda"
              },
              {
                "stepNumber": 2,
                "title": "Relate the consecutive orders m and (m - 1)",
                "explanation": {
                  "en": "Because 500 nm is smaller than 700 nm, the order m1 corresponding to 500 nm must be larger by 1 than m2 corresponding to 700 nm: m1 = m and m2 = m - 1.",
                  "hinglish": "Kyunki 500 nm chhota hai 700 nm se, isliye 500 nm ka order m hoga aur 700 nm ka order (m - 1) hoga: 2 μ t = m * 500 nm = (m - 1) * 700 nm.",
                  "hi": "चूँकि 500 nm < 700 nm है, अतः 500 nm के संगत कोटि m तथा 700 nm के संगत कोटि (m - 1) होगी।"
                },
                "math": "m \\times 500 = (m - 1) \\times 700 \\implies 500 m = 700 m - 700 \\implies 200 m = 700 \\implies m = 3.5"
              },
              {
                "stepNumber": 3,
                "title": "Determine the integer orders and solve for physical thickness t",
                "explanation": {
                  "en": "Since m must be an integer for full cancellation, the consecutive conditions can also be expressed as (2m+1) or we evaluate the integer equation m * 700 = (m + 1) * 500 => 700m - 500m = 500 => 200m = 500 => m = 2.5 or using the general form 2 μ t = n λ. With consecutive orders n and n + 1: (n + 1) * 500 = n * 700 => n = 2.5. If the film is air-surrounded: 2 μ t = 2.5 * 700 nm = 1750 nm. Therefore, t = 1750 nm / (2 * 1.5) = 1750 / 3 = 583.33 nm = 0.583 μm.",
                  "hinglish": "Consecutive dark bands ke liye: 2 μ t = 1750 nm. Plate ki thickness t = 1750 / (2 * 1.5) = 583.33 nm (0.583 μm).",
                  "hi": "समीकरण 2 μ t = 1750 nm से, t = 1750 / (2 × 1.5) = 583.33 nm (0.583 μm) प्राप्त होता है।"
                },
                "math": "t = \\frac{1750 \\text{ nm}}{2 \\times 1.5} = 583.33 \\text{ nm} = 0.583 \\ \\mu\\text{m}"
              }
            ],
            "finalAnswer": "The minimum physical thickness of the glass plate is 583.33 nm (0.583 μm)."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Forgetting the Stokes λ/2 phase reversal and applying the standard 2μt = nλ as constructive condition for reflected light.",
                "hinglish": "Yeh bhool jaana ki denser medium se reflection par λ/2 ka path change judta hai, aur galati se 2μt = nλ ko bright fringe ka formula maan lena.",
                "hi": "यह मान लेना कि 2μt = nλ परावर्तित प्रकाश में दीप्त फ्रिंज की शर्त है, जबकि स्टोक्स के नियम के अनुसार इसमें λ/2 का अंतर आता है।"
              },
              "correction": {
                "en": "In reflection from an optically denser surface, there is an automatic 180° (π radians) phase flip equivalent to a path difference of λ/2. Therefore, 2μt cos(r) = nλ is the condition for DESTRUCTIVE interference (darkness), and 2μt cos(r) = (2n - 1)λ/2 is the condition for CONSTRUCTIVE interference (brightness).",
                "hinglish": "Reflection me ek ray par λ/2 ka extra phase shift lagta hai, isliye formulas ultay ho jaate hain: 2μt cos(r) = nλ DARK ke liye hota hai aur 2μt cos(r) = (2n-1)λ/2 BRIGHT ke liye hota hai!",
                "hi": "परावर्तन में λ/2 पथांतर जुड़ने के कारण 2μt cos(r) = nλ विनाशी (अदीप्त) तथा 2μt cos(r) = (2n - 1)λ/2 संपोषी (दीप्त) व्यतिकरण का प्रतिबंध होता है।"
              }
            },
            {
              "misconception": {
                "en": "Thinking that an extremely thin soap film (thickness t << λ) will reflect brightly like a mirror.",
                "hinglish": "Yeh sochna ki bohot hi zyada patli soap film (t << λ) mirror ki tarah bohot tez chamkegi.",
                "hi": "यह सोचना कि अत्यधिक पतली फिल्म (t << λ) दर्पण की भाँति अत्यधिक चमकीली परावर्तित होगी।"
              },
              "correction": {
                "en": "When thickness t approaches 0, the geometrical path 2μt cos(r) ≈ 0. The ONLY remaining path difference between Ray 1 and Ray 2 is the Stokes phase shift of λ/2. Thus, the two reflected rays are exactly 180° out of phase and destructively cancel each other completely! An ultra-thin film appears totally black/dark before it bursts.",
                "hinglish": "Jab thickness t lagbhag zero ho jaati hai, toh path difference sirf λ/2 bachta hai. Dono rays 180° out of phase hokar ek dusre ko poori tarah cancel kar deti hain. Isliye phootne se pehle soap bubble ka top black dikhta hai!",
                "hi": "जब t → 0 होता है, तो 2μt ≈ 0 हो जाता है और केवल λ/2 का पथांतर शेष रहता है। अतः दोनों किरणें परस्पर पूर्णतः निरस्त होकर अदीप्त (काली) दिखाई देती हैं।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "phy-u1-l1-p1",
              "level": "Beginner",
              "question": {
                "en": "What happens to the reflected appearance of a vertical soap film just moments before it ruptures, when drainage makes its top thickness t << λ?",
                "hinglish": "Jab vertical soap film me se paani neeche beh jata hai aur sabse upar thickness t << λ ho jaati hai, toh phootne se theek pehle wo kaisi dikhti hai?",
                "hi": "जब गुरुत्वीय बहाव के कारण साबुन की ऊर्ध्वाधर फिल्म के शीर्ष पर मोटाई t << λ हो जाती है, तो फटने से ठीक पूर्व वह कैसी दिखाई देती है?"
              },
              "options": [
                "It appears intensely bright with white light",
                "It appears completely dark/black",
                "It glows intensely green",
                "It turns bright yellow"
              ],
              "correctAnswer": 1,
              "correctIndex": 1,
              "hint": {
                "en": "Substitute t = 0 into the net reflected path difference Δ = 2μt cos(r) - λ/2.",
                "hinglish": "Net path difference formula me t = 0 rakh kar dekho: sirf λ/2 bachta hai jo destructive interference karta hai.",
                "hi": "सूत्र Δ = 2μt - λ/2 में t = 0 रखने पर विनाशी व्यतिकरण प्राप्त होता है।"
              },
              "explanation": {
                "en": "When t << λ, 2μt cos(r) ≈ 0, leaving an optical path difference of exactly λ/2 due to the Stokes reflection phase change. This produces destructive interference across all visible wavelengths, making the film appear completely dark/black.",
                "hinglish": "Thickness zero ke kareeb hone par geometric path 2μt zero ho jata hai, aur sirf Stokes phase shift λ/2 bachta hai, jisse destructive interference banta hai aur film kali dikhti hai.",
                "hi": "t → 0 होने पर पथांतर λ/2 रह जाता है, जिससे विनाशी व्यतिकरण होकर फिल्म पूर्णतः काली दिखाई देती है।"
              }
            },
            {
              "id": "phy-u1-l1-p2",
              "level": "Intermediate",
              "question": {
                "en": "In a wedge-shaped air film, light of wavelength λ = 600 nm produces interference fringes. If the angle of the wedge is θ = 0.001 radians, what is the fringe width β?",
                "hinglish": "Ek wedge-shaped air film (λ = 600 nm, θ = 0.001 rad) me fringe width β kitni hogi?",
                "hi": "एक फानाकार वायु फिल्म (λ = 600 nm, θ = 0.001 rad) में फ्रिंज चौड़ाई β क्या होगी?"
              },
              "options": [
                "0.30 mm",
                "0.60 mm",
                "1.20 mm",
                "0.15 mm"
              ],
              "correctAnswer": 0,
              "correctIndex": 0,
              "hint": {
                "en": "Use the wedge fringe width formula: β = λ / (2 * μ * θ) with μ = 1 for air.",
                "hinglish": "Formula lagao: β = λ / (2 * μ * θ), air ke liye μ = 1.",
                "hi": "सूत्र β = λ / (2μθ) का उपयोग करें जहाँ वायु के लिए μ = 1 है।"
              },
              "explanation": {
                "en": "β = λ / (2μθ) = (600 × 10^-9 m) / (2 × 1.0 × 0.001) = (600 × 10^-9) / (2 × 10^-3) = 300 × 10^-6 m = 0.30 mm.",
                "hinglish": "β = 600e-9 / (2 * 1 * 0.001) = 0.30 mm.",
                "hi": "β = (600 × 10^-9) / (2 × 1 × 10^-3) = 0.30 मिमी।"
              }
            }
          ],
          "summary": {
            "en": [
              "Optical interference in thin films occurs by amplitude division at dielectric interfaces.",
              "Reflection from an optically denser medium introduces an extra π phase shift (λ/2 path change) by Stokes law.",
              "Constructive condition in reflection: 2μt cos(r) = (2m - 1)λ/2; Destructive condition: 2μt cos(r) = mλ.",
              "When thickness t << λ, the film appears black because the λ/2 phase difference causes destructive interference.",
              "Wedge-shaped films produce straight, parallel, equidistant localized fringes with fringe width β = λ / (2μθ)."
            ],
            "hinglish": [
              "Thin films me interference amplitude division dwara hota hai.",
              "Denser medium se reflection par Stokes law se π phase change (λ/2 path change) milta hai.",
              "Reflection me bright condition: 2μt cos(r) = (2m - 1)λ/2 aur dark condition: 2μt cos(r) = mλ.",
              "Ultra-thin film (t << λ) hamesha black dikhti hai kyunki dono rays me λ/2 ka destructive phase flip rehta hai.",
              "Wedge film me straight parallel fringes banti hain jinki width β = λ / (2μθ) hoti hai."
            ],
            "hi": [
              "पतली फिल्मों में व्यतिकरण आयाम विभाजन के सिद्धांत पर आधारित है।",
              "सघन माध्यम से परावर्तन पर स्टोक्स नियमानुसार π कलान्तर (λ/2 पथांतर) उत्पन्न होता है।",
              "परावर्तित प्रकाश में दीप्त फ्रिंज 2μt cos(r) = (2m - 1)λ/2 तथा अदीप्त फ्रिंज 2μt cos(r) = mλ पर बनती है।",
              "अत्यधिक पतली फिल्म (t << λ) विनाशी व्यतिकरण के कारण काली दिखाई देती है।",
              "फानाकार फिल्म में समान दूरी की समानांतर फ्रिंजें बनती हैं जिनकी चौड़ाई β = λ / (2μθ) होती है।"
            ]
          },
          "quiz": [
            {
              "id": "phy-u1-l1-q1",
              "question": {
                "en": "Why are the interference patterns observed in transmitted light complementary to those observed in reflected light for a thin film?",
                "hinglish": "Thin film me transmitted light ka interference pattern reflected light ke pattern ka complementary (theek ulta) kyu hota hai?",
                "hi": "पतली फिल्म में पारगमित प्रकाश में व्यतिकरण प्रतिरूप परावर्तित प्रकाश के प्रतिरूप का संपूरक (उल्टा) क्यों होता है?"
              },
              "options": [
                "Because transmitted light suffers two internal reflections without any Stokes phase flip, satisfying energy conservation",
                "Because transmitted light has higher frequency than reflected light",
                "Because transmitted light only consists of polarized waves",
                "Because the refractive index is inverted for transmitted light"
              ],
              "correctIndex": 0,
              "hint": {
                "en": "Consider conservation of energy: where light is not reflected, it must be transmitted, and note that transmission involves no π phase shift.",
                "hinglish": "Energy conservation socho: jahan reflection me light dark ho gayi (reflect nahi hui), wo poori transmit ho jayegi (bright).",
                "hi": "ऊर्जा संरक्षण के अनुसार परावर्तन में अदीप्त स्थान पारगमन में दीप्त होता है।"
              },
              "explanation": {
                "en": "By conservation of energy, the sum of reflected and transmitted energy must equal incident energy (R + T = 1). Since transmitted rays undergo internal reflections without crossing into a denser medium from a rarer medium, there is no Stokes phase shift, making the maxima in reflection coincide with the minima in transmission.",
                "hinglish": "Conservation of energy ke hisaab se jahan reflection cancel hota hai wahan transmission maximum hota hai, isliye dono patterns perfectly complementary hote hain.",
                "hi": "ऊर्जा संरक्षण के नियमानुसार जहाँ परावर्तन न्यूनतम होता है वहाँ पारगमन अधिकतम होता है, अतः दोनों प्रतिरूप परस्पर संपूरक होते हैं।"
              }
            }
          ]
        },
        {
          "id": "phy-u1-l2",
          "unitId": "physics-u1",
          "subjectId": "applied-physics",
          "title": "Newton’s Rings & The Michelson Interferometer",
          "durationMinutes": 30,
          "difficulty": "Beginner",
          "prerequisites": [
            "Interference by division of amplitude",
            "Stokes’ law of phase reversal on reflection (π radians / λ/2 path shift)",
            "Geometry of circle and sagitta theorem (r² = 2Rt)"
          ],
          "realLifeQuestion": {
            "en": "How can placing an ordinary curved magnifying lens on top of a flat glass slide produce crisp, alternating dark and bright bullseye target rings that can measure the wavelength of light down to a single nanometer?",
            "hinglish": "Ek aam magnifying lens ko flat glass plate par rakhne se gol-gol concentric rings kyu ban jaati hain jinki madad se hum light ki wavelength nanometers tak accurately naap sakte hain?",
            "hi": "एक साधारण उत्तल लेंस को समतल काँच की पट्टिका पर रखने से संकेंद्रीय वृत्ताकार वलय (Newton’s Rings) क्यों बनते हैं, जिनकी सहायता से प्रकाश की तरंगदैर्ध्य नैनोमीटर की शुद्धता से मापी जा सकती है?"
          },
          "simpleExplanation": {
            "en": "When a convex lens with a large radius of curvature R rests on a flat glass plate, a microscopic air film is trapped between them. At the exact center of contact, the air film has zero thickness (t = 0). As you move outward radially in any direction, the gap increases symmetrically, proportional to the square of the distance (t = r² / 2R). Because the air thickness is identical along any circle centered at the contact point, the resulting interference fringes form concentric circles known as Newton’s Rings! At the very center (t = 0), the ray reflecting from the bottom glass plate undergoes a π phase flip (Stokes law), while the ray from the lens surface does not. They destructively cancel, making the central bullseye spot completely DARK! By measuring ring diameters with a traveling microscope, you can measure light wavelengths or liquid refractive indices with extreme precision.",
            "hinglish": "Jab ek plano-convex lens ko flat glass plate par rakhte hain, toh dono ke beech me ek patli air film ban jaati hai. Center par lens aur plate touch karte hain toh air ki thickness zero hoti hai (t = 0). Jaise-jaise center se bahar aate hain, air gap barabar tarike se badhta hai (t = r² / 2R). Kyunki har direction me barabar radius par air thickness same hoti hai, isliye circular fringes banti hain jinko Newton’s Rings kehte hain! Center par t = 0 hone par bhi bottom surface se reflection ke karan λ/2 ka path change hota hai, jisse center hamesha DARK dikhta hai. Traveling microscope se in rings ka diameter naap kar hum wavelength λ aur liquid ka refractive index μ calculate kar sakte hain!",
            "hi": "जब बड़े वक्रता त्रिज्या R वाले समतलोत्तल लेंस को समतल काँच की पट्टिका पर रखा जाता है, तो उनके बीच परिवर्ती मोटाई की वायु फिल्म बनती है। स्पर्श बिंदु पर t = 0 होता है तथा बाहर की ओर मोटाई t = r² / (2R) के अनुसार सममित रूप से बढ़ती है। समान मोटाई के बिंदुओं का बिंदुपथ वृत्त होने के कारण वृत्ताकार फ्रिंजें बनती हैं। संपर्क बिंदु पर स्टोक्स के नियमानुसार λ/2 पथांतर होने से केंद्रीय वलय अदीप्त (काली) होती है।"
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "Newton’s rings are localized interference fringes of equal thickness formed by division of amplitude in an air film enclosed between a spherical lens surface and a plane glass plate. The diameter of the nth dark ring is Dn = √(4n R λ), and the nth bright ring is Dn = √[2(2n - 1) R λ]. The wavelength of monochromatic light is given by λ = (D_{n+p}² - D_n²) / (4 p R). In a Michelson interferometer, amplitude division splits an incident beam into two perpendicular paths of lengths d1 and d2; shifting the movable mirror by a distance d produces a fringe shift of N = 2d / λ.",
              "hinglish": "Newton’s rings equal thickness ki localized circular interference fringes hoti hain. Reflected light me nth dark ring ka diameter Dn = √(4n R λ) aur nth bright ring ka diameter Dn = √[2(2n - 1) R λ] hota hai. Wavelength formula: λ = (D_{n+p}² - D_n²) / (4 p R). Michelson interferometer me movable mirror ko distance d chalane par fringe count shift N = 2d / λ hota hai.",
              "hi": "न्यूटन वलय समान मोटाई की स्थानिक व्यतिकरण फ्रिंजें हैं। परावर्तित प्रकाश में nवीं अदीप्त वलय का व्यास Dn = √(4n R λ) तथा nवीं दीप्त वलय का व्यास Dn = √[2(2n - 1) R λ] होता है। प्रकाश की तरंगदैर्ध्य λ = (D_{n+p}² - D_n²) / (4 p R) द्वारा ज्ञात की जाती है। माइकलसन व्यतिकरणमापी में दर्पण के d विस्थापन से N = 2d / λ फ्रिंजें विस्थापित होती हैं।"
            },
            "keyTerms": [
              {
                "term": "Radius of Curvature (R)",
                "definition": {
                  "en": "The radius of the imaginary sphere from which the convex lens surface is formed, typically between 100 cm and 200 cm in Newton’s rings setups.",
                  "hinglish": "Uss sphere ka radius jiska lens ek hissa hai, aamtaur par 100 cm se 200 cm hota hai taaki air gap bohot dheere badhe.",
                  "hi": "लेंस की वक्र सतह के गोले की त्रिज्या (प्रायः 100 से 200 सेमी)।"
                }
              },
              {
                "term": "Compensating Plate (Michelson)",
                "definition": {
                  "en": "A plane-parallel glass plate of identical thickness and material to the beam splitter, placed in path 2 to ensure both interfering beams traverse identical optical glass paths.",
                  "hinglish": "Michelson interferometer me dono rays ke liye glass ke andar ka optical path barabar karne ke liye lagayi gayi same thickness ki glass plate.",
                  "hi": "माइकलसन व्यतिकरणमापी में दोनों किरणों के काँच में प्रकाशीय पथ को समान करने हेतु प्रयुक्त समान मोटाई की पट्टिका।"
                }
              },
              {
                "term": "Circular vs. Localized Fringes",
                "definition": {
                  "en": "Circular fringes are formed when the virtual interfering mirrors in a Michelson interferometer are strictly parallel; localized straight fringes form when the mirrors are slightly inclined as an air wedge.",
                  "hinglish": "Jab virtual mirrors perfectly parallel hote hain toh circular fringes banti hain; jab tilted hote hain toh wedge film ki tarah straight fringes banti hain.",
                  "hi": "जब आभासी दर्पण पूर्णतः समानांतर हों तो वृत्ताकार तथा झुके होने पर सरल रेखीय फ्रिंजें बनती हैं।"
                }
              }
            ]
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Target rings on an archery board: Imagine concentric elevation contour lines on a round hill. Every contour line at height 1 mm, 2 mm, 3 mm forms a circle around the peak. In Newton’s rings, every circle where the air gap equals an exact multiple of half-wavelengths forms a dark or bright ring around the contact center.",
              "hinglish": "Archery board ke concentric circles: Jaise ek gol pahadi par same unchai wale raste gol-gol chakkar banate hain (contour lines), waise hi lens ke neeche jahan-jahan air ki thickness barabar hoti hai wahan gol interference ring banti hai!",
              "hi": "जैसे किसी गोल पहाड़ी पर समान ऊँचाई वाले बिंदुओं को मिलाने वाली समोच्च रेखाएँ वृत्त बनाती हैं, वैसे ही समान मोटाई की वायु परत वृत्ताकार वलय बनाती है।"
            },
            "limitations": {
              "en": "Topographic contour lines are separated linearly if slope is uniform, but Newton’s ring diameters follow a square root progression (Dn ∝ √n), meaning outer rings crowd closer together.",
              "hinglish": "Pahadi ke lines barabar doori par ho sakti hain, par Newton rings me outer rings square-root rule (√n) ke kaaran paas-paas aane lagti hain.",
              "hi": "समोच्च रेखाओं की दूरी समान हो सकती है, किन्तु न्यूटन वलय में Dn ∝ √n होने से बाह्य वलय परस्पर निकट आते जाते हैं।"
            }
          },
          "terminology": [
            {
              "term": "Fringes of Equal Thickness",
              "definition": {
                "en": "Interference fringes that follow the locus of constant optical path thickness in a non-uniform dielectric film (also called Fizeau fringes).",
                "hinglish": "Aisi interference fringes jo film ke un points par banti hain jahan thickness bilkul constant hoti hai.",
                "hi": "समान मोटाई के बिंदुओं के बिंदुपथ पर बनने वाली व्यतिकरण फ्रिंजें (फिज़ो फ्रिंजें)।"
              }
            },
            {
              "term": "Traveling Microscope",
              "definition": {
                "en": "A precision measuring microscope mounted on a vernier carriage used to measure Newton’s ring diameters down to 0.01 mm without touching the glass.",
                "hinglish": "Vernier scale par mounted microscope jisse rings ke diameters ko 0.01 mm precision se naapa jaata hai.",
                "hi": "वर्नियर पैमाने युक्त सूक्ष्मदर्शी जिसकी सहायता से वलयों के व्यास 0.01 मिमी परिशुद्धता से मापे जाते हैं।"
              }
            },
            {
              "term": "Achromatic Central Fringe",
              "definition": {
                "en": "In a Michelson interferometer using white light, the single central fringe where the path difference is zero (d = 0) for all wavelengths simultaneously, appearing dark.",
                "hinglish": "White light use karne par path difference zero hone par banne wali central black fringe jo sabhi colors ke liye common hoti hai.",
                "hi": "माइकलसन व्यतिकरणमापी में शून्य पथांतर पर बनने वाली केंद्रीय अदीप्त फ्रिंज।"
              }
            }
          ],
          "visualType": "3d-optics",
          "visualData": {
            "mode": "newtons-rings",
            "lensRadius": 100,
            "wavelength": 589
          },
          "underlyingPrinciple": {
            "en": "Geometric Path Difference in Spherical Air Wedge: Using the sagitta circle property, the air film thickness at distance r from the center is t ≈ r² / (2R). Including the Stokes reflection phase flip at the glass plate, the net optical path difference is Δ = 2t + λ/2 = r²/R + λ/2. Setting Δ = (2n + 1)λ/2 for dark fringes yields r_n² = n R λ, or diameter D_n² = 4 n R λ.",
            "hinglish": "Circle geometry se air thickness t = r² / (2R) hoti hai. Stokes phase shift jod kar net path difference Δ = 2t + λ/2 = r²/R + λ/2 banta hai. Dark condition me Δ = (2n+1)λ/2 rakhne par r_n² = n R λ ya D_n² = 4n R λ nikalta hai.",
            "hi": "वृत्त के ज्यामितीय गुण से t = r² / (2R) होता है। स्टोक्स कलान्तर सहित पथांतर Δ = r²/R + λ/2 होता है। विनाशी व्यतिकरण हेतु r_n² = n R λ अथवा D_n² = 4n R λ प्राप्त होता है।"
          },
          "formula": {
            "equation": "D_n^2 = 4 n R \\lambda, \\quad \\lambda = \\frac{D_{n+p}^2 - D_n^2}{4 p R}, \\quad \\mu = \\frac{(D_{n+p}^2 - D_n^2)_{\\text{air}}}{(D_{n+p}^2 - D_n^2)_{\\text{liquid}}}",
            "symbolMeaning": [
              "Dn: Diameter of the nth dark Newton ring (meters)",
              "D_{n+p}: Diameter of the (n+p)th dark Newton ring (meters)",
              "p: Number of rings between the two measurements (integer)",
              "R: Radius of curvature of the plano-convex lens (meters)",
              "λ: Wavelength of monochromatic light (meters)",
              "μ: Refractive index of the liquid film introduced between lens and plate"
            ],
            "units": "Diameters Dn in mm or cm; Radius R in cm or m; Wavelength λ in nm (10^-9 m).",
            "assumptions": [
              "Light strikes the air film at normal incidence (cos r ≈ 1).",
              "Lens radius R is very large compared to ring radii r (R >> r).",
              "The glass plate is optically flat and clean."
            ],
            "realWorldApplication": "Testing the optical surface quality and spherical curvature of precision camera and telescope lenses."
          },
          "formulaLogic": {
            "formula": "D_n = \\begin{cases} \\sqrt{4 n R \\lambda} & \\text{(Dark Rings)} \\\\[6pt] \\sqrt{2(2n - 1) R \\lambda} & \\text{(Bright Rings)} \\end{cases}",
            "description": {
              "en": "Ring diameter formulas for reflected Newton’s rings.",
              "hinglish": "Reflected Newton rings ke dark aur bright diameters ke formulas.",
              "hi": "परावर्तित प्रकाश में न्यूटन वलयों के व्यासों के सूत्र।"
            },
            "symbols": [
              {
                "symbol": "Dn",
                "meaning": "Diameter of nth ring",
                "unit": "m"
              },
              {
                "symbol": "n",
                "meaning": "Ring order number (1, 2, 3...)",
                "unit": "Dimensionless"
              },
              {
                "symbol": "R",
                "meaning": "Radius of curvature of lens",
                "unit": "m"
              },
              {
                "symbol": "λ",
                "meaning": "Wavelength of source light",
                "unit": "m"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "In a Newton’s rings experiment using Sodium light (λ = 589 nm), the diameter of the 4th dark ring is 0.40 cm, and the diameter of the 20th dark ring is 0.80 cm. (a) Calculate the radius of curvature R of the lens. (b) If a liquid is placed between the lens and plate, the diameter of the 20th dark ring shrinks to 0.70 cm while the 4th ring becomes 0.35 cm. Find the refractive index μ of the liquid.",
              "hinglish": "Newton rings experiment me Sodium light (λ = 589 nm) use karne par 4th dark ring ka diameter 0.40 cm aur 20th dark ring ka diameter 0.80 cm aata hai. (a) Lens ka radius of curvature R nikalo. (b) Jab beech me ek liquid daal diya jata hai, toh 20th dark ring 0.70 cm aur 4th ring 0.35 cm ho jaati hai. Liquid ka refractive index μ nikalo.",
              "hi": "न्यूटन वलय प्रयोग में सोडियम प्रकाश (λ = 589 nm) द्वारा 4थी अदीप्त वलय का व्यास 0.40 सेमी तथा 20वीं अदीप्त वलय का व्यास 0.80 सेमी है। (a) लेंस की वक्रता त्रिज्या R ज्ञात कीजिए। (b) किसी द्रव को रखने पर 20वीं वलय का व्यास 0.70 सेमी तथा 4थी वलय का व्यास 0.35 सेमी हो जाता है। द्रव का अपवर्तनांक μ ज्ञात कीजिए।"
            },
            "given": [
              "Wavelength: λ = 589 nm = 589 × 10^-7 cm",
              "Ring order n = 4, Dn = 0.40 cm => Dn² = 0.16 cm²",
              "Ring order (n + p) = 20 => p = 20 - 4 = 16",
              "Diameter D_{n+p} = 0.80 cm => D_{n+p}² = 0.64 cm²",
              "In liquid: D4 = 0.35 cm => D4² = 0.1225 cm²",
              "In liquid: D20 = 0.70 cm => D20² = 0.49 cm²"
            ],
            "toFind": "Radius of curvature R (in cm/m) and liquid refractive index μ",
            "formulaUsed": "R = (D_{n+p}² - D_n²) / (4 p λ)  and  μ = (D_{n+p}² - D_n²)_air / (D_{n+p}² - D_n²)_liquid",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate the difference in squared diameters in air",
                "explanation": {
                  "en": "Subtract the squared diameter of the 4th ring from that of the 20th ring in air: D20² - D4² = 0.64 - 0.16 = 0.48 cm².",
                  "hinglish": "Air me 20th ring aur 4th ring ke squared diameters ka difference nikalo: 0.64 - 0.16 = 0.48 cm².",
                  "hi": "वायु में व्यासों के वर्गों का अंतर: 0.64 - 0.16 = 0.48 सेमी²।"
                },
                "math": "D_{20}^2 - D_4^2 = 0.64 - 0.16 = 0.48 \\text{ cm}^2"
              },
              {
                "stepNumber": 2,
                "title": "Compute the radius of curvature R of the plano-convex lens",
                "explanation": {
                  "en": "Using R = (D_{n+p}² - D_n²) / (4 * p * λ) with p = 16 and λ = 589 × 10^-7 cm: R = 0.48 / (4 * 16 * 589 × 10^-7) = 0.48 / (3.7696 × 10^-4) = 127.33 cm = 1.273 m.",
                  "hinglish": "Formula me values rakho: R = 0.48 / (4 * 16 * 589e-7) = 127.33 cm (1.27 m).",
                  "hi": "R = 0.48 / (64 × 589 × 10^-7) = 127.33 सेमी = 1.27 मीटर।"
                },
                "math": "R = \\frac{0.48}{4 \\times 16 \\times 5.89 \\times 10^{-5}} = 127.33 \\text{ cm} = 1.273 \\text{ m}"
              },
              {
                "stepNumber": 3,
                "title": "Compute the refractive index μ of the liquid",
                "explanation": {
                  "en": "In the liquid, the difference in squared diameters is (D20² - D4²)_liquid = 0.49 - 0.1225 = 0.3675 cm². The refractive index is μ = (D20² - D4²)_air / (D20² - D4²)_liquid = 0.48 / 0.3675 = 1.306.",
                  "hinglish": "Liquid me squared diameters ka difference: 0.49 - 0.1225 = 0.3675 cm². Refractive index μ = 0.48 / 0.3675 = 1.306.",
                  "hi": "द्रव में व्यासों के वर्गों का अंतर 0.3675 सेमी² है। अतः μ = 0.48 / 0.3675 = 1.306।"
                },
                "math": "\\mu = \\frac{(D_{20}^2 - D_4^2)_{\\text{air}}}{(D_{20}^2 - D_4^2)_{\\text{liquid}}} = \\frac{0.48}{0.3675} \\approx 1.306"
              }
            ],
            "finalAnswer": "The radius of curvature of the lens is 127.33 cm (1.273 m), and the refractive index of the liquid is 1.306."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Measuring ring diameter from the central spot to the ring (radius r) instead of measuring across the full ring diameter from left to right.",
                "hinglish": "Center spot se doori naap lena aur usko diameter samajh baithna.",
                "hi": "वलय के केंद्र से दूरी को व्यास मान लेना, जबकि वर्नियर से बाएँ से दाएँ पूर्ण व्यास मापा जाना चाहिए।"
              },
              "correction": {
                "en": "The center of the fringe system cannot be located with perfect accuracy because the central dark spot has a finite width and the crosswire can slip. Therefore, experimentalists always measure the left position x_left and right position x_right across the ring: D = |x_left - x_right|, completely eliminating any center-finding error!",
                "hinglish": "Center spot chauda hota hai isliye uska exact center locate karna mushkil hota hai. Isliye crosswire ko left edge par set karke reading x_left lete hain aur right edge par x_right lete hain: D = |x_left - x_right|.",
                "hi": "केंद्रीय बिंदु की यथार्थ स्थिति ज्ञात न होने के कारण त्रुटि से बचने हेतु वलय के दोनों सिरों के पाठ्यांक लेकर व्यास D = |x_left - x_right| निकाला जाता है।"
              }
            },
            {
              "misconception": {
                "en": "Assuming Newton’s rings are equally spaced like Young’s double slit fringes.",
                "hinglish": "Yeh sochna ki Newton rings barabar-barabar doori par banti hain.",
                "hi": "यह मान लेना कि न्यूटन वलय समान दूरी पर बनते हैं।"
              },
              "correction": {
                "en": "Young’s double slit fringes have constant fringe width β = λD/d. In Newton’s rings, diameter Dn ∝ √n. The spacing between consecutive rings ΔD = D_{n+1} - D_n ∝ (√(n+1) - √n) decreases rapidly as n increases. As a result, the outer rings crowd much closer together!",
                "hinglish": "Young’s double slit me fringe width constant hoti hai, par Newton rings me Dn ∝ √n hota hai. Jaise-jaise order n badhta hai, rings ek dusre ke bohot kareeb aane lagti hain!",
                "hi": "Dn ∝ √n होने के कारण n बढ़ने पर वलयों के बीच का अंतराल घटता जाता है और बाहरी वलय अत्यधिक पास-पास आ जाते हैं।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "phy-u1-l2-p1",
              "level": "Beginner",
              "question": {
                "en": "In a Michelson interferometer, how far must mirror M2 be moved to cause exactly 500 fringes of Sodium light (λ = 589 nm) to cross the crosswires of the viewing telescope?",
                "hinglish": "Michelson interferometer me mirror M2 ko kitna door move karna padega taaki 500 fringes crosswire ko paar karein (λ = 589 nm)?",
                "hi": "माइकलसन व्यतिकरणमापी में सोडियम प्रकाश (λ = 589 nm) की 500 फ्रिंजों को विस्थापित करने हेतु दर्पण M2 को कितनी दूरी खिसकाना होगा?"
              },
              "options": [
                "0.147 mm",
                "0.295 mm",
                "0.589 mm",
                "0.074 mm"
              ],
              "correctAnswer": 0,
              "correctIndex": 0,
              "hint": {
                "en": "Use the Michelson interferometer relation: d = N * λ / 2.",
                "hinglish": "Formula lagao: d = N * λ / 2.",
                "hi": "सूत्र d = N * λ / 2 का उपयोग करें।"
              },
              "explanation": {
                "en": "d = (N × λ) / 2 = (500 × 589 × 10^-9 m) / 2 = 294500 × 10^-9 / 2 = 1.4725 × 10^-4 m = 0.14725 mm.",
                "hinglish": "d = (500 * 589e-9) / 2 = 0.147 mm.",
                "hi": "d = (500 × 589 × 10^-9) / 2 = 0.147 मिमी।"
              }
            },
            {
              "id": "phy-u1-l2-p2",
              "level": "Intermediate",
              "question": {
                "en": "Why does introducing an optically denser liquid (μ > 1) between the lens and plate cause the Newton’s rings to contract (diameters shrink)?",
                "hinglish": "Lens aur plate ke beech liquid (μ > 1) daalne par Newton rings sikud kar chhoti kyu ho jaati hain?",
                "hi": "लेंस व पट्टिका के मध्य द्रव (μ > 1) भरने पर न्यूटन वलय सिकुड़ कर छोटे क्यों हो जाते हैं?"
              },
              "options": [
                "Because optical path difference becomes 2μt, so the same path condition is reached at a smaller physical thickness t and smaller radius r",
                "Because the liquid absorbs the light energy",
                "Because the radius of curvature of the lens decreases in liquid",
                "Because the wavelength of light increases in the liquid"
              ],
              "correctIndex": 0,
              "correctAnswer": 0,
              "hint": {
                "en": "Look at the formula: Dn_liquid = Dn_air / √μ.",
                "hinglish": "Formula dekho: Dn_liquid = Dn_air / √μ, kyunki μ > 1 hai isliye diameter divide hokar chhota ho jata hai.",
                "hi": "सूत्र Dn_liquid = Dn_air / √μ के अनुसार μ > 1 होने पर व्यास घटता है।"
              },
              "explanation": {
                "en": "The optical path difference in the liquid is 2μt. For a given order n, the condition 2μt = nλ means the required physical thickness is t = nλ / (2μ). Since μ > 1, this thickness is reached at a smaller distance r from the center, causing the ring diameter to scale down by 1/√μ: Dn_liquid = Dn_air / √μ.",
                "hinglish": "Liquid me optical path 2μt hota hai. Required thickness t = nλ / (2μ) chhota hota hai, isliye rings center ke zyada paas banti hain.",
                "hi": "द्रव में पथांतर 2μt होने से वलय का व्यास Dn ∝ 1/√μ के अनुपात में घट जाता है।"
              }
            }
          ],
          "summary": {
            "en": [
              "Newton’s rings are circular interference fringes of equal thickness formed in a plano-convex lens air wedge.",
              "Central spot is dark in reflection due to the Stokes π phase reversal at the glass plate.",
              "Dark ring diameter Dn = √(4n R λ); bright ring diameter Dn = √[2(2n - 1) R λ].",
              "Wavelength determination: λ = (D_{n+p}² - D_n²) / (4 p R); Liquid refractive index: μ = (ΔD²)_air / (ΔD²)_liquid.",
              "In a Michelson interferometer, mirror displacement d shifts N fringes: d = N λ / 2."
            ],
            "hinglish": [
              "Newton rings plano-convex lens aur glass plate ke beech bani air film se aane wali circular fringes hain.",
              "Stokes phase shift ke kaaran center hamesha dark hota hai.",
              "Dark ring diameter Dn = √(4n R λ) aur bright ring diameter Dn = √[2(2n - 1) R λ].",
              "Wavelength formula: λ = (D_{n+p}² - D_n²) / (4 p R); liquid ka refractive index μ = (ΔD²)_air / (ΔD²)_liquid.",
              "Michelson interferometer me mirror ko d chalane par N = 2d / λ fringes shift hoti hain."
            ],
            "hi": [
              "न्यूटन वलय समान मोटाई की वृत्ताकार व्यतिकरण फ्रिंजें हैं।",
              "स्टोक्स पथांतर के कारण केंद्रीय वलय परावर्तित प्रकाश में अदीप्त होती है।",
              "अदीप्त वलय व्यास Dn = √(4n R λ) तथा दीप्त वलय व्यास Dn = √[2(2n - 1) R λ] होता है।",
              "तरंगदैर्ध्य λ = (D_{n+p}² - D_n²) / (4 p R) तथा द्रव का अपवर्तनांक μ = (ΔD²)_air / (ΔD²)_liquid होता है।",
              "माइकलसन व्यतिकरणमापी में दर्पण विस्थापन d = N λ / 2 होता है।"
            ]
          },
          "quiz": [
            {
              "id": "phy-u1-l2-q1",
              "question": {
                "en": "What is the fundamental optical purpose of the compensating glass plate G2 in a Michelson interferometer?",
                "hinglish": "Michelson interferometer me compensating plate G2 lagane ka sabse mukhya optical reason kya hai?",
                "hi": "माइकलसन व्यतिकरणमापी में प्रतिकारी पट्टिका G2 लगाने का मुख्य उद्देश्य क्या है?"
              },
              "options": [
                "To ensure both light beams traverse the exact same thickness of glass, eliminating chromatic dispersion",
                "To polarize the light beam before entering the telescope",
                "To magnify the interference fringes",
                "To block stray background light"
              ],
              "correctIndex": 0,
              "hint": {
                "en": "Beam 1 passes through the beam splitter plate 3 times, while beam 2 passes only once without G2.",
                "hinglish": "Beam splitter plate se ray 1 teen baar guzarti hai jabki ray 2 sirf ek baar. G2 dono ka glass path barabar karti hai.",
                "hi": "किरण 1 और 2 के काँच में तय किए गए प्रकाशीय पथ को समान करने हेतु।"
              },
              "explanation": {
                "en": "Without plate G2, ray 1 traverses the thickness of the beam splitter plate three times while ray 2 traverses it only once. Plate G2 (made of identical glass and thickness) introduces two extra passes for ray 2, equalizing the optical path in glass for all wavelengths and enabling clear white-light fringes.",
                "hinglish": "G2 plate ray 2 ko do extra baar glass se guzaar kar dono rays ke glass path ko exactly barabar kar deti hai taaki chromatic aberration aur dispersion na ho.",
                "hi": "G2 पट्टिका दोनों किरणों के काँच में प्रकाशीय पथ को पूर्णतः समान बनाती है जिससे वर्ण विक्षेपण दूर होता है।"
              }
            }
          ]
        },
        {
          "id": "phy-u1-l3",
          "unitId": "physics-u1",
          "subjectId": "applied-physics",
          "title": "Fraunhofer Diffraction: Single Slit, Double Slit & Diffraction Grating",
          "durationMinutes": 35,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Huygens-Fresnel wave principle of secondary wavelets",
            "Interference condition for two waves",
            "Angular geometry (sin θ ≈ θ for small angles in radians)"
          ],
          "realLifeQuestion": {
            "en": "Why does peering at a distant streetlamp through the tight weave of an umbrella fabric or a feather transform a round pinpoint light into an elaborate cross-shaped burst of dazzling spectral colors?",
            "hinglish": "Chhatri ke kapde ya chidiya ke pankh ke barik chhedo me se door lagi street light ko dekhne par light chaaro taraf fail kar rainbow rang ke chamakdar patterns kyu banati hai?",
            "hi": "कपड़े की बारीक जाली अथवा पंख के सूक्ष्म छिद्रों से दूर स्थित प्रकाश स्रोत को देखने पर प्रकाश का बिंदु इंद्रधनुषी रंगों के क्रॉस जैसे प्रतिरूप में क्यों फैल जाता है?"
          },
          "simpleExplanation": {
            "en": "This is the phenomenon of Optical Diffraction: the bending of light waves around obstacles or narrow openings whose dimensions are comparable to the wavelength of light! In Fraunhofer Diffraction, a plane parallel wavefront strikes a narrow slit. According to Huygens’ principle, every single point within the slit acts as a new source of secondary wavelets. In the forward direction (θ = 0), all wavelets travel identical distances to the screen and arrive in phase, producing an intensely bright, broad Central Maximum. At specific angled directions, wavelets from one half of the slit travel extra distance and destructively cancel wavelets from the other half, creating dark Minima (a sin θ = m λ). When thousands of parallel microscopic slits are arranged together (a Diffraction Grating), the interference between slits sharpens the light into razor-thin spectral lines, acting as a super-prism that splits light into its constituent wavelengths!",
            "hinglish": "Yeh Optical Diffraction (Vivartan) hai! Jab light kisi aisi slit ya rukawat ke kinare se guzarti hai jiska size light ki wavelength ke barabar hota hai, toh light seedhi jaane ke bajaye mud jaati hai (bending of light). Slit ke har ek point se secondary wavelets nikalti hain. Seedhi direction (θ = 0) me saari wavelets ek saath pahunchti hain aur ek bohot broad aur bright Central Maximum banati hain. Kisi angle par aadhi slit ki wavelets baaki aadhi slit ki wavelets ko cancel karke Minima (dark) banati hain. Jab aisi hazaron barik slits ek saath banayi jaati hain (Diffraction Grating), toh light prism se bhi zyada cleanly alag-alag colors me split ho jaati hai!",
            "hi": "यह प्रकाश का विवर्तन (Diffraction) है, जो अवरोधों अथवा संकीर्ण द्वारक के किनारों से प्रकाश तरंगों के मुड़ने की घटना है। एकल झिरी पर आपतित समतल तरंगाग्र के प्रत्येक बिंदु से द्वितीयक तरंगिकाएँ निकलती हैं जो पर्दे पर एक तीव्र केंद्रीय उच्चिष्ठ तथा दोनों ओर क्रमशः घटती तीव्रता के द्वितीयक उच्चिष्ठ व निम्निष्ठ बनाती हैं। विवर्तन झिरी (Grating) में सहस्रों झिरियाँ मिलकर प्रकाश को अत्यंत तीक्ष्ण वर्णक्रम में विक्षेपित करती हैं।"
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "Fraunhofer diffraction occurs when the source and viewing screen are effectively at infinite distances from the diffracting aperture (using collimating and focusing lenses). For a single slit of width a, the intensity is I = I0 [sin(β)/β]² where β = (π a sin θ)/λ; minima occur at a sin θ = m λ (m = ±1, ±2...). For a plane transmission grating with grating element (a + b), the principal maxima satisfy the grating equation (a + b) sin θ = n λ. By Rayleigh’s criterion, two wavelengths λ and λ + dλ are just resolved in the nth order when the resolving power is λ / dλ = n · N, where N is the total number of illuminated grating lines.",
              "hinglish": "Fraunhofer diffraction me source aur screen aperture se infinite distance par hote hain (convex lenses use karke). Single slit ke liye intensity I = I0 [sin(β)/β]² hoti hai jahan minima a sin θ = m λ par bante hain. Plane transmission grating ke liye principal maxima (a + b) sin θ = n λ par aate hain. Rayleigh criterion ke hisaab se grating ki resolving power λ / dλ = n · N hoti hai.",
              "hi": "फ़्रॉनहॉफ़र विवर्तन में प्रकाश स्रोत व पर्दा द्वारक से अनंत दूरी पर होते हैं। एकल झिरी (चौड़ाई a) हेतु तीव्रता I = I0 [sin(β)/β]² होती है, जहाँ निम्निष्ठ a sin θ = m λ पर होते हैं। विवर्तन झिरी का मुख्य उच्चिष्ठ (a + b) sin θ = n λ समीकरण संतुष्ट करता है तथा विभेदन क्षमता λ / dλ = n · N होती है।"
            },
            "keyTerms": [
              {
                "term": "Grating Element (a + b)",
                "definition": {
                  "en": "The combined width of one transparent slit a and one adjacent opaque space b. The number of lines per unit length is N_lines = 1 / (a + b).",
                  "hinglish": "Ek transparent slit (a) aur uske bagal wale opaque hisse (b) ki total width (a + b). Grating me per inch ya per cm lines = 1 / (a + b) hoti hain.",
                  "hi": "एक पारदर्शी झिरी की चौड़ाई a तथा एक अपारदर्शी भाग की चौड़ाई b का योग (a + b)।"
                }
              },
              {
                "term": "Absent Spectra / Missing Orders",
                "definition": {
                  "en": "Occurs when the angle θ for the nth interference principal maximum coincides exactly with the mth single-slit diffraction minimum: (a + b)/a = n / m. The expected spectral line completely vanishes.",
                  "hinglish": "Jab interference ka nth maximum theek diffraction ke mth minimum ke upar aa jata hai, toh wo spectral order gayab ho jata hai: (a + b) / a = n / m.",
                  "hi": "जब nवाँ व्यतिकरण उच्चिष्ठ mवें विवर्तन निम्निष्ठ की दिशा में पड़ता है, तो वह वर्णक्रम लुप्त हो जाता है: (a + b)/a = n/m।"
                }
              },
              {
                "term": "Rayleigh’s Criterion for Resolution",
                "definition": {
                  "en": "Two spectral lines of equal intensity are just resolved when the central maximum of line 1 falls exactly on the first minimum of line 2, causing a noticeable 19% dip in resultant intensity.",
                  "hinglish": "Do lines tab alag-alag dikhti hain jab pehli line ka central peak doosri line ke pehle minimum par girtay hai, jisse beech me 19% intensity drop banta hai.",
                  "hi": "दो वर्णक्रम रेखाएँ तब विभेदित मानी जाती हैं जब एक का मुख्य उच्चिष्ठ दूसरी के प्रथम निम्निष्ठ पर आपतित होता है।"
                }
              }
            ]
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Ocean waves entering a harbor gap: When broad ocean swell strikes a wide harbor wall opening (hundreds of meters wide), waves pass straight through with minimal spreading. But when water waves pass through a narrow breach equal to their crest-to-crest spacing, the water fans out into circular ripples reaching every corner of the bay. Light does the exact same thing when the slit is narrowed down to the scale of light waves!",
              "hinglish": "Samundar ki lehron ka narrow raste se nikalna: Jab badi lehar kisi bohot bade gate se nikalti hai toh seedhi chali jaati hai. Par jab gate ka size lehar ki wavelength jitna chhota hota hai, toh lehar chaaro taraf gol phail kar mud jaati hai. Light bhi tabhi failti hai jab slit light ki wavelength (nanometers) jitni patli ho!",
              "hi": "जैसे समुद्र की तरंगें बड़े द्वार से सीधी निकल जाती हैं किन्तु तरंगदैर्ध्य के आकार के संकीर्ण द्वार से टकराने पर चारों दिशाओं में वृत्ताकार रूप से फैल जाती हैं।"
            },
            "limitations": {
              "en": "Water waves are surface gravity-capillary waves in a fluid medium; light waves are oscillating electromagnetic fields traveling in vacuum at 3 × 10^8 m/s without any mechanical medium.",
              "hinglish": "Paani ki lehar physical fluid me behti hai, jabki light electromagnetic wave hai jo vacuum me 3 × 10^8 m/s se chalti hai.",
              "hi": "जल तरंगें यांत्रिक हैं जबकि प्रकाश तरंगें अनुप्रस्थ विद्युतचुंबकीय तरंगें हैं।"
            }
          },
          "terminology": [
            {
              "term": "Fresnel vs. Fraunhofer Diffraction",
              "definition": {
                "en": "Fresnel diffraction involves near-field curved wavefronts without lenses; Fraunhofer diffraction involves far-field plane wavefronts produced and focused by convex lenses.",
                "hinglish": "Fresnel me source aur screen paas hote hain aur spherical wavefronts aate hain; Fraunhofer me convex lenses use karke plane wavefronts banaye jaate hain.",
                "hi": "फ़्रेनल में तरंगाग्र वक्राकार (समीप क्षेत्र) होते हैं, जबकि फ़्रॉनहॉफ़र में समतल तरंगाग्र (दूर क्षेत्र) प्रयुक्त होते हैं।"
              }
            },
            {
              "term": "Dispersive Power of Grating",
              "definition": {
                "en": "The rate of change of the angle of diffraction with respect to wavelength: dθ / dλ = n / [(a + b) cos θ].",
                "hinglish": "Wavelength ke badalne par diffraction angle kitni tezi se badalta hai: dθ / dλ = n / [(a + b) cos θ].",
                "hi": "तरंगदैर्ध्य के सापेक्ष विवर्तन कोण के परिवर्तन की दर (dθ / dλ = n / [(a + b) cos θ])।"
              }
            },
            {
              "term": "Resolving Power of a Telescope",
              "definition": {
                "en": "The ability of a telescope objective lens of diameter D to distinguish two close astronomical stars: RP = D / (1.22 λ). Limit of resolution is dθ = 1.22 λ / D.",
                "hinglish": "Telescope ka do kareebi sitaron ko alag-alag dikhane ki ability: RP = D / (1.22 λ).",
                "hi": "दूरदर्शी द्वारा दो निकटवर्ती तारों को पृथक दिखाने की क्षमता (RP = D / (1.22 λ))।"
              }
            }
          ],
          "visualType": "3d-optics",
          "visualData": {
            "mode": "diffraction",
            "slitWidth": 0.04,
            "slitCount": 1,
            "wavelength": 589
          },
          "underlyingPrinciple": {
            "en": "Integration of Huygens Wavelets: A slit of width a is divided into infinite infinitesimal wavelets dy. The total electric field at angle θ is E = ∫_{-a/2}^{a/2} (E0/a) e^{i (ky sin θ - ωt)} dy = E0 [sin(β)/β] e^{-i ωt}, where β = (π a sin θ) / λ. Squaring the field amplitude yields the intensity profile I(θ) = I0 (sin β / β)², showing a broad central peak flanked by exponentially decreasing secondary peaks.",
            "hinglish": "Slit ko chote-chote infinitesimal hisso dy me divide karke integrate karne par net electric field E = E0 [sin(β)/β] milta hai jahan β = (π a sin θ) / λ. Iska square intensity I = I0 (sin β / β)² deta hai.",
            "hi": "झिरी को अनन्त सूक्ष्म भागों में बाँटकर समाकलन करने पर परिणामी आयाम E0 (sin β / β) तथा तीव्रता I = I0 (sin β / β)² प्राप्त होती है।"
          },
          "formula": {
            "equation": "(a + b) \\sin(\\theta) = n \\lambda, \\quad I = I_0 \\left(\\frac{\\sin \\beta}{\\beta}\\right)^2, \\quad \\frac{\\lambda}{d\\lambda} = n \\cdot N",
            "symbolMeaning": [
              "a: Slit width (meters)",
              "b: Opaque space width between adjacent slits (meters)",
              "a + b: Grating element (meters per line)",
              "θ: Diffraction angle (degrees or radians)",
              "n: Diffraction spectral order (0, 1, 2...)",
              "λ: Wavelength of incident light (meters)",
              "N: Total number of active ruled grating lines illuminated"
            ],
            "units": "Slit width in mm or μm; Wavelength λ in nm; Lines in lines/cm or lines/inch.",
            "assumptions": [
              "Incident light is a plane parallel wavefront (Fraunhofer setup).",
              "All slits are identical, parallel, and strictly equidistant.",
              "Diffraction angle θ is within practical spectrometer limits."
            ],
            "realWorldApplication": "Spectrometers, astronomical telescopes, chemical Raman spectroscopy, and optical telecommunication demultiplexers."
          },
          "formulaLogic": {
            "formula": "a \\sin(\\theta) = m \\lambda \\quad \\text{(Minima)}, \\quad (a + b) \\sin(\\theta) = n \\lambda \\quad \\text{(Grating Maxima)}, \\quad \\frac{\\lambda}{d\\lambda} = n N \\quad \\text{(Resolving Power)}",
            "description": {
              "en": "Core quantitative relationships governing diffraction minima, grating spectra, and resolution limits.",
              "hinglish": "Diffraction minima, grating spectral lines aur resolving power ke standard formulas.",
              "hi": "विवर्तन निम्निष्ठ, झिरी उच्चिष्ठ तथा विभेदन क्षमता के प्रामाणिक सूत्र।"
            },
            "symbols": [
              {
                "symbol": "a",
                "meaning": "Slit width",
                "unit": "m"
              },
              {
                "symbol": "a+b",
                "meaning": "Grating element",
                "unit": "m"
              },
              {
                "symbol": "n",
                "meaning": "Order of spectrum",
                "unit": "Dimensionless"
              },
              {
                "symbol": "N",
                "meaning": "Total lines on grating",
                "unit": "Dimensionless"
              },
              {
                "symbol": "λ / dλ",
                "meaning": "Resolving power",
                "unit": "Dimensionless"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A plane diffraction grating has 5000 lines per centimeter. Light containing the two Sodium D lines of wavelengths λ1 = 589.0 nm and λ2 = 589.6 nm illuminates the grating normally. (a) At what angle is the first-order spectrum of the 589.0 nm line observed? (b) What is the minimum width of the ruled grating surface required to resolve the two Sodium D lines in the first order?",
              "hinglish": "Ek plane diffraction grating me 5000 lines per centimeter hain. Sodium light (589.0 nm aur 589.6 nm) normal incidence par aati hai. (a) First order me 589.0 nm line kis angle par dikhegi? (b) Dono Sodium lines ko first order me alag-alag dekhne (resolve karne) ke liye grating ki minimum width kitni honi chahiye?",
              "hi": "एक समतल विवर्तन झिरी में प्रति सेंटीमीटर 5000 रेखाएँ हैं। सोडियम प्रकाश (λ1 = 589.0 nm तथा λ2 = 589.6 nm) लंबवत आपतित होता है। (a) प्रथम कोटि में 589.0 nm रेखा का विवर्तन कोण ज्ञात कीजिए। (b) प्रथम कोटि में दोनों रेखाओं को विभेदित करने हेतु झिरी की न्यूनतम चौड़ाई ज्ञात कीजिए।"
            },
            "given": [
              "Number of lines per cm: N' = 5000 lines/cm",
              "Grating element: (a + b) = 1 / 5000 cm = 2 × 10^-4 cm = 2 × 10^-6 m",
              "Wavelengths: λ1 = 589.0 nm = 589.0 × 10^-9 m, λ2 = 589.6 nm = 589.6 × 10^-9 m",
              "Average wavelength: λ = 589.3 nm, Difference: dλ = 589.6 - 589.0 = 0.6 nm",
              "Order: n = 1"
            ],
            "toFind": "Diffraction angle θ in first order and minimum required grating width W",
            "formulaUsed": "(a + b) sin(θ) = n λ  and  λ / dλ = n · N_min  with  W = N_min · (a + b)",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate the diffraction angle θ for the first order",
                "explanation": {
                  "en": "Using the grating equation (a + b) sin θ = n λ for n = 1: sin θ = λ / (a + b) = (589.0 × 10^-9 m) / (2 × 10^-6 m) = 0.2945. Taking the inverse sine: θ = arcsin(0.2945) = 17.13° (or 17° 8').",
                  "hinglish": "Grating equation me values rakho: sin θ = 589e-9 / 2e-6 = 0.2945. Inverse sine lene par θ = 17.13° aata hai.",
                  "hi": "समीकरण (a + b) sin θ = n λ से, sin θ = (589.0 × 10^-9) / (2 × 10^-6) = 0.2945, अतः θ = 17.13°।"
                },
                "math": "\\sin(\\theta) = \\frac{589.0 \\times 10^{-9}}{2 \\times 10^{-6}} = 0.2945 \\implies \\theta = \\arcsin(0.2945) \\approx 17.13^\\circ"
              },
              {
                "stepNumber": 2,
                "title": "Calculate the minimum number of lines N_min required for resolution",
                "explanation": {
                  "en": "Using Rayleigh’s criterion, the resolving power in the first order (n = 1) is λ / dλ = n · N_min: N_min = λ / (n · dλ) = 589.3 nm / (1 × 0.6 nm) = 982.17 => at least 983 lines.",
                  "hinglish": "Resolving power formula se: N_min = 589.3 / (1 * 0.6) = 982.17. Iska matlab kam se kam 983 lines zaroori hain dono lines ko alag-alag dikhane ke liye.",
                  "hi": "विभेदन क्षमता सूत्र से N_min = λ / (n · dλ) = 589.3 / 0.6 = 982.17 ≈ 983 रेखाएँ।"
                },
                "math": "N_{\\text{min}} = \\frac{\\lambda}{n \\cdot d\\lambda} = \\frac{589.3}{1 \\times 0.6} = 982.17 \\approx 983 \\text{ lines}"
              },
              {
                "stepNumber": 3,
                "title": "Compute the minimum physical width of the grating",
                "explanation": {
                  "en": "Each line occupies a distance of (a + b) = 1 / 5000 cm = 0.0002 cm. Therefore, the minimum width W is W = N_min × (a + b) = 983 / 5000 cm = 0.1966 cm ≈ 1.97 mm.",
                  "hinglish": "Total width = N_min * (a + b) = 983 / 5000 cm = 0.1966 cm = 1.97 mm.",
                  "hi": "न्यूनतम चौड़ाई W = 983 / 5000 = 0.1966 सेमी = 1.97 मिमी।"
                },
                "math": "W = N_{\\text{min}} \\times (a + b) = \\frac{983}{5000 \\text{ lines/cm}} = 0.1966 \\text{ cm} = 1.97 \\text{ mm}"
              }
            ],
            "finalAnswer": "The first-order diffraction angle is 17.13°, and the minimum width of the grating required to resolve the Sodium doublet is 1.97 mm (983 lines)."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Confusing interference minima with single-slit diffraction minima equations.",
                "hinglish": "Interference minima aur diffraction minima ke formulas ko ulta kar dena.",
                "hi": "व्यतिकरण निम्निष्ठ तथा विवर्तन निम्निष्ठ के सूत्रों में भ्रमित होना।"
              },
              "correction": {
                "en": "In Young’s two-source interference, destructive interference occurs at path difference = (2m - 1)λ/2. In single-slit diffraction, destructive interference occurs at path difference = mλ! The reason: when the total path difference across slit width a is λ, the top half and bottom half of the slit have a mutual path difference of λ/2 and cancel each other out in pairs!",
                "hinglish": "Interference me dark condition (2m-1)λ/2 hoti hai, par single-slit diffraction me dark condition a sin θ = mλ hoti hai! Kyunki jab total edge-to-edge path λ hota hai, toh upper half aur lower half ke beech λ/2 ka gap hota hai jo aapas me cancel ho jata hai.",
                "hi": "एकल झिरी में कुल पथांतर λ होने पर ऊपरी व निचले आधे भाग की तरंगिकाएँ परस्पर λ/2 पथांतर पर होकर निरस्त हो जाती हैं, अतः a sin θ = mλ निम्निष्ठ की शर्त है।"
              }
            },
            {
              "misconception": {
                "en": "Assuming that increasing the total number of lines N on a grating increases the diffraction angle θ.",
                "hinglish": "Yeh sochna ki grating par lines badhane se diffraction angle θ badh jata hai.",
                "hi": "यह मान लेना कि कुल रेखाओं N को बढ़ाने से विवर्तन कोण θ बढ़ जाता है।"
              },
              "correction": {
                "en": "Diffraction angle θ is determined ONLY by the grating element (a + b) and wavelength λ: sin θ = nλ / (a + b). The total number of lines N determines the sharpness of the peaks and the resolving power (RP = nN), but does NOT change where the spectral lines appear in space.",
                "hinglish": "Diffraction angle sirf (a + b) par depend karta hai. Lines N badhane se peaks patli aur sharp hoti hain (resolving power badhti hai), par angle wahi rehta hai!",
                "hi": "विवर्तन कोण केवल झिरी अंतराल (a + b) पर निर्भर करता है, जबकि कुल रेखाएँ N केवल तीव्रता की तीक्ष्णता तथा विभेदन क्षमता (nN) को बढ़ाती हैं।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "phy-u1-l3-p1",
              "level": "Beginner",
              "question": {
                "en": "What is the angular width of the central diffraction maximum of a single slit of width a = 0.1 mm illuminated by light of wavelength λ = 500 nm?",
                "hinglish": "Single slit (width a = 0.1 mm, λ = 500 nm) ke central maximum ki full angular width 2θ0 kitni hogi?",
                "hi": "एकल झिरी (चौड़ाई a = 0.1 mm, λ = 500 nm) के केंद्रीय उच्चिष्ठ की कोणीय चौड़ाई 2θ0 क्या होगी?"
              },
              "options": [
                "0.010 radians (10 mrad)",
                "0.005 radians (5 mrad)",
                "0.020 radians (20 mrad)",
                "0.002 radians (2 mrad)"
              ],
              "correctAnswer": 0,
              "correctIndex": 0,
              "hint": {
                "en": "The full angular width is 2θ0 = 2λ / a.",
                "hinglish": "Formula lagao: 2θ0 = 2λ / a.",
                "hi": "सूत्र 2θ0 = 2λ / a का उपयोग करें।"
              },
              "explanation": {
                "en": "2θ0 = 2λ / a = (2 × 500 × 10^-9 m) / (0.1 × 10^-3 m) = 1000 × 10^-6 = 0.010 radians = 10 mrad.",
                "hinglish": "2θ0 = (2 * 500e-9) / (0.1e-3) = 0.010 rad = 10 mrad.",
                "hi": "2θ0 = (2 × 500 × 10^-9) / (10^-4) = 0.010 रेडियन।"
              }
            },
            {
              "id": "phy-u1-l3-p2",
              "level": "Intermediate",
              "question": {
                "en": "In a plane diffraction grating, if the opaque spacing b is exactly equal to the transparent slit width a (b = a), which spectral orders will be absent (missing orders)?",
                "hinglish": "Agar plane grating me opaque space b slit width a ke barabar ho (b = a), toh kaun se spectral orders gayab (absent) honge?",
                "hi": "यदि विवर्तन झिरी में अपारदर्शी भाग b पारदर्शी झिरी a के बराबर हो (b = a), तो कौन सी कोटियाँ लुप्त (Missing Orders) होंगी?"
              },
              "options": [
                "All even orders (n = 2, 4, 6, 8...)",
                "All odd orders (n = 1, 3, 5, 7...)",
                "Only order n = 1",
                "No orders will be missing"
              ],
              "correctAnswer": 0,
              "correctIndex": 0,
              "hint": {
                "en": "Use the missing order condition: (a + b) / a = n / m with b = a.",
                "hinglish": "Formula: (a + b) / a = (a + a) / a = 2 = n / m => n = 2m.",
                "hi": "प्रतिबंध (a + b)/a = n/m में b = a रखने पर n = 2m प्राप्त होता है।"
              },
              "explanation": {
                "en": "The condition for absent spectra is (a + b) / a = n / m. When b = a, (a + a) / a = 2a / a = 2 = n / m, which implies n = 2m. Therefore, for m = 1, 2, 3..., the orders n = 2, 4, 6, 8... coincide with diffraction minima and vanish from the spectrum!",
                "hinglish": "(a + b)/a = 2 => n = 2m. Isliye saare even orders (2, 4, 6, 8...) gayab ho jaate hain!",
                "hi": "n/m = 2 होने से n = 2m अर्थात् सभी सम कोटियाँ (2, 4, 6...) लुप्त हो जाती हैं।"
              }
            }
          ],
          "summary": {
            "en": [
              "Fraunhofer diffraction occurs with plane parallel wavefronts and produces a central maximum of width 2λ/a.",
              "Single-slit minima condition: a sin θ = m λ; Secondary maxima relative intensities drop rapidly (~1 : 1/22 : 1/61).",
              "Double slit pattern is the product of single-slit diffraction envelope and Young’s interference fringes.",
              "Grating equation: (a + b) sin θ = n λ; Missing orders occur when (a + b) / a = n / m.",
              "Rayleigh criterion: Resolving power of grating is RP = λ / dλ = n · N."
            ],
            "hinglish": [
              "Fraunhofer diffraction plane wavefronts ke saath hota hai aur central maximum width 2λ/a deta hai.",
              "Single slit minima: a sin θ = m λ; secondary maxima ki intensity bohot tezi se girti hai (1 : 1/22 : 1/61).",
              "Double slit pattern diffraction envelope aur interference fringes ka product hota hai.",
              "Grating equation: (a + b) sin θ = n λ; absent spectra tab hota hai jab (a + b) / a = n / m.",
              "Rayleigh criterion ke hisaab se grating resolving power = n * N hoti hai."
            ],
            "hi": [
              "फ़्रॉनहॉफ़र विवर्तन में समतल तरंगाग्र 2λ/a चौड़ाई का मुख्य केंद्रीय उच्चिष्ठ बनाते हैं।",
              "एकल झिरी निम्निष्ठ शर्त a sin θ = m λ है तथा द्वितीयक उच्चिष्ठों की तीव्रता तीव्रता से घटती है।",
              "द्विक झिरी प्रतिरूप विवर्तन आवरण तथा व्यतिकरण फ्रिंजों का गुणनफल होता है।",
              "झिरी समीकरण (a + b) sin θ = n λ है तथा लुप्त कोटियाँ (a + b)/a = n/m पर होती हैं।",
              "रेले की कसौटी के अनुसार झिरी की विभेदन क्षमता λ / dλ = n · N होती है।"
            ]
          },
          "quiz": [
            {
              "id": "phy-u1-l3-q1",
              "question": {
                "en": "What is the theoretical maximum spectral order n_max that can ever be observed using a grating with 6000 lines/cm for light of wavelength λ = 500 nm?",
                "hinglish": "6000 lines/cm wali grating se 500 nm light ke liye maximum kaun sa order n_max dekha ja sakta hai?",
                "hi": "6000 रेखाएँ/सेमी वाली झिरी तथा 500 nm प्रकाश हेतु सैद्धांतिक अधिकतम कोटि n_max क्या हो सकती है?"
              },
              "options": [
                "n_max = 3",
                "n_max = 4",
                "n_max = 2",
                "n_max = 6"
              ],
              "correctIndex": 0,
              "hint": {
                "en": "The maximum possible diffraction angle is θ = 90° (sin θ = 1). Set n_max ≤ (a + b) / λ.",
                "hinglish": "Maximum angle θ = 90° ho sakta hai (sin 90° = 1). Isliye n_max ≤ (a + b) / λ.",
                "hi": "अधिकतम विवर्तन कोण θ = 90° होने से n_max ≤ (a + b) / λ होगा।"
              },
              "explanation": {
                "en": "(a + b) = 1 / 6000 cm = 1.667 × 10^-4 cm = 1667 nm. Since sin θ cannot exceed 1.0, n_max = (a + b) sin(90°) / λ = 1667 nm / 500 nm = 3.33. Since the order n must be an integer, n_max = 3 (the 4th order would require sin θ > 1, which is physically impossible).",
                "hinglish": "n_max = 1667 / 500 = 3.33 => maximum integer order n = 3 ho sakta hai.",
                "hi": "n_max = (a + b) / λ = 1667 / 500 = 3.33, अतः अधिकतम पूर्णांक कोटि n_max = 3 है।"
              }
            }
          ]
        },
        {
          "id": "phy-u1-l4",
          "unitId": "physics-u1",
          "subjectId": "applied-physics",
          "title": "Polarization of Light, Double Refraction, Wave Plates & Polarimeters",
          "durationMinutes": 35,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Transverse nature of electromagnetic light waves (E and B field vectors)",
            "Refraction and Snell’s law",
            "Total internal reflection (TIR) and critical angle θc"
          ],
          "realLifeQuestion": {
            "en": "How do polarized sunglasses instantly eliminate blinding sunlight glare from lake surfaces and car windshields without dimming the road, and how do doctors use optical polarimeters to measure sugar in a diabetic patient’s blood?",
            "hinglish": "Polarized sunglasses paani ya sadak par se aane wali teekhi glare (chamak) ko ek jhatke me kaise gayab kar dete hain, aur polarimeter se sugar solution ki concentration kaise naapi jaati hai?",
            "hi": "ध्रुवीकृत धूप के चश्मे (Polarized Sunglasses) झील अथवा सड़क की सतह से आने वाली तीव्र चकाचौंध (Glare) को कैसे समाप्त कर देते हैं, तथा पोलारिमीटर द्वारा शर्करा की सांद्रता कैसे मापी जाती है?"
          },
          "simpleExplanation": {
            "en": "Light is a transverse electromagnetic wave where the electric field vector E vibrates in every possible direction perpendicular to its forward travel (Unpolarized light). When light reflects off a flat horizontal surface like water or asphalt at a specific angle (Brewster’s angle), only vibrations parallel to the surface bounce off, creating horizontally polarized glare. Polarized sunglasses contain a microscopic vertical molecular grid (Polaroid) that blocks these horizontal glare waves while letting normal light through! In anisotropic crystals like Calcite, an incoming light beam splits into TWO separate rays traveling at different speeds: the Ordinary ray (O-ray) and Extraordinary ray (E-ray)—a phenomenon called Double Refraction. By cutting these crystals precisely, we build Wave Plates (which convert linear light into circular light) and Laurent Polarimeters (which measure how sugar molecules twist light to test blood and food purity)!",
            "hinglish": "Light ek transverse wave hai jisme electric field E chaaro taraf vibrate karta hai (Unpolarized). Jab sunlight paani ya sadak par kisi khaas angle (Brewster angle) par girti hai, toh horizontal vibrations reflect hokar glare banati hain. Polarized sunglasses me vertical molecular filter hota hai jo iss horizontal glare ko block kar deta hai! Calcite jaise crystals me light andar jaakar do hisso me toot jaati hai: Ordinary ray (O-ray) aur Extraordinary ray (E-ray)—isko Double Refraction kehte hain. Inhi crystals se hum Nicol Prism, Quarter-Wave plate aur Polarimeter banate hain jo sugar solution me light ke ghoomne (Specific Rotation) ko naapta hai!",
            "hi": "प्रकाश एक अनुप्रस्थ विद्युतचुंबकीय तरंग है जिसमें विद्युत सदिश सभी संभव दिशाओं में कंपन करता है (अध्रुवित प्रकाश)। जब यह किसी समतल सतह से ब्रूस्टर कोण पर परावर्तित होता है, तो सतह के समानांतर कंपन परावर्तित होकर चकाचौंध उत्पन्न करते हैं। पोलेरॉइड चश्मा ऊर्ध्वाधर पारगमन अक्ष के कारण इस क्षैतिज चकाचौंध को रोक देता है। कैल्साइट क्रिस्टल में प्रकाश दो अपवर्तित किरणों—साधारण (O) तथा असाधारण (E) किरण में विभाजित हो जाता है, जिसे द्वि-अपवर्तन कहते हैं। इसका उपयोग निकोल प्रिज्म तथा शर्करामापी (Polarimeter) में किया जाता है।"
          },
          "technicalDefinition": {
            "formalStatement": {
              "en": "Polarization is the process of confining the electric field vector vibrations of a transverse wave to a single plane. By Brewster’s law, complete plane polarization by reflection occurs when μ = tan(i_p), at which the reflected and refracted rays are mutually perpendicular (i_p + r = 90°). In doubly refracting uniaxial crystals, unpolarized light resolves into an Ordinary ray (spherical wavefront, constant refractive index μ_o) and an Extraordinary ray (ellipsoidal wavefront, direction-dependent index μ_e). A Quarter-Wave plate introduces a path difference of λ/4 (phase difference π/2) with thickness t = λ / [4|μ_o - μ_e|]. Optically active media rotate the vibration plane according to Biot’s law, defined by specific rotation S = θ / (l · c).",
              "hinglish": "Brewster law ke anusaar reflection se complete plane polarization tab hota hai jab μ = tan(i_p) aur reflected-refracted rays ke beech 90° angle hota hai. Double refraction me O-ray spherical wavefront banati hai (μ_o constant) aur E-ray ellipsoidal wavefront banati hai (μ_e variable). Quarter-wave plate me path difference λ/4 (phase shift π/2) aur thickness t = λ / [4|μ_o - μ_e|] hoti hai. Specific rotation formula: S = θ / (l * c).",
              "hi": "ध्रुवण प्रकाश तरंग के विद्युत सदिश के कंपनों को एक निश्चित तल में सीमित करने की प्रक्रिया है। ब्रूस्टर नियमानुसार μ = tan(i_p) पर परावर्तित प्रकाश पूर्णतः समतल ध्रुवित होता है तथा i_p + r = 90° होता है। द्वि-अपवर्तन में O-किरण गोलीय तरंगाग्र तथा E-किरण दीर्घवृत्तीय तरंगाग्र बनाती है। चतुर्थांश तरंग पट्टिका में पथांतर λ/4 तथा मोटाई t = λ / [4|μ_o - μ_e|] होती है। विशिष्ट घूर्णन S = θ / (l · c) द्वारा व्यक्त किया जाता है।"
            },
            "keyTerms": [
              {
                "term": "Brewster’s Angle (Polarizing Angle i_p)",
                "definition": {
                  "en": "The specific angle of incidence at which light reflected from a dielectric boundary is 100% plane-polarized parallel to the surface: tan(i_p) = μ.",
                  "hinglish": "Wo khaas angle of incidence jahan par reflected light 100% plane-polarized ho jaati hai: tan(i_p) = μ.",
                  "hi": "आपतन कोण का वह मान जिस पर परावर्तित प्रकाश पूर्णतः समतल ध्रुवित होता है (tan i_p = μ)।"
                }
              },
              {
                "term": "Birefringence (Double Refraction)",
                "definition": {
                  "en": "The optical property of anisotropic crystals where an incident unpolarized ray splits into two mutually perpendicular plane-polarized rays (O-ray and E-ray) with different phase velocities.",
                  "hinglish": "Anisotropic crystal ka wo gun jisme incident ray andar jaakar do perpendicular plane-polarized rays (O-ray aur E-ray) me split ho jaati hai.",
                  "hi": "विषमदैशिक क्रिस्टलों का वह प्रकाशीय गुण जिसमें आपतित किरण दो परस्पर लंबवत ध्रुवित किरणों (O तथा E) में विभाजित हो जाती है।"
                }
              },
              {
                "term": "Specific Rotation (S)",
                "definition": {
                  "en": "The optical rotation in degrees produced by an optically active solution of length 1 decimeter (10 cm) having a concentration of 1 g/cm³ for a specific wavelength and temperature: S = θ / (l · c).",
                  "hinglish": "1 decimeter lambi tube me 1 g/cm³ concentration wale solution dwara light ke plane ko ghumane ka angle: S = θ / (l * c).",
                  "hi": "1 डेसीमीटर लंबाई तथा 1 ग्राम/सेमी³ सांद्रता वाले प्रकाशीय सक्रिय विलयन द्वारा उत्पन्न घूर्णन कोण (S = θ / (l · c))।"
                }
              }
            ]
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Passing a cardboard sheet through a picket fence: If you hold a flat piece of cardboard vertically, it slips effortlessly between vertical fence slats. If you turn it horizontally, the fence blocks it completely. Unpolarized light has cardboard sheets vibrating at all random angles; a polarizing filter is the picket fence that only allows sheets aligned with its slots to pass through!",
              "hinglish": "Lakdi ki jaali me se cardboard nikalna: Agar aap patle cardboard ko khada (vertical) karke jaali ki vertical dararo me daalenge toh wo aasaani se nikal jayega. Agar aada (horizontal) karenge toh jaali use rok degi. Polaroid filter bhi ek aisi hi microscopic jaali hai jo sirf apne axis wale electric vibrations ko nikalne deti hai!",
              "hi": "जैसे किसी ऊर्ध्वाधर सींकों वाली बाड़ से केवल ऊर्ध्वाधर कार्डबोर्ड ही निकल सकता है और क्षैतिज कार्डबोर्ड रुक जाता है, उसी प्रकार पोलेरॉइड केवल अपने पारगमन अक्ष के समानांतर विद्युत कंपनों को ही गुजरने देता है।"
            },
            "limitations": {
              "en": "A fence physically blocks objects by macroscopic contact; polarizers interact quantum-mechanically with oscillating electric fields and electron conduction along long-chain polymer molecules.",
              "hinglish": "Baad physical contact se rokti hai, jabki polarizer polymer chains me electrons ke oscillation ke dwara electromagnetic waves ko absorb karta hai.",
              "hi": "बाड़ यांत्रिक अवरोध है जबकि पोलेरॉइड बहुलक श्रृंखलाओं में इलेक्ट्रॉनों के दोलन द्वारा प्रकाश का चयनात्मक अवशोषण करता है।"
            }
          },
          "terminology": [
            {
              "term": "Ordinary (O) vs Extraordinary (E) Ray",
              "definition": {
                "en": "The O-ray obeys Snell’s law, has constant velocity in all directions, and is polarized perpendicular to the principal plane. The E-ray does NOT obey Snell’s law, has direction-dependent velocity, and is polarized in the principal plane.",
                "hinglish": "O-ray Snell’s law maanti hai aur spherical wavefront banati hai; E-ray Snell’s law nahi maanti aur ellipsoidal wavefront banati hai.",
                "hi": "O-किरण स्नेल के नियम का पालन करती है तथा गोलीय तरंगाग्र बनाती है; E-किरण स्नेल के नियम का पालन नहीं करती तथा दीर्घवृत्तीय तरंगाग्र बनाती है।"
              }
            },
            {
              "term": "Nicol Prism",
              "definition": {
                "en": "An optical device crafted from a calcite crystal cut at 68° and cemented with Canada balsam (μ = 1.55) that eliminates the O-ray by Total Internal Reflection (TIR) and transmits a 100% plane-polarized E-ray.",
                "hinglish": "Calcite crystal se bana optical device jo Canada balsam se O-ray ko Total Internal Reflection karke bahar phek deta hai aur sirf 100% polarized E-ray ko nikalne deta hai.",
                "hi": "कैल्साइट क्रिस्टल से निर्मित युक्ति जो कनाडा बालसम द्वारा O-किरण का पूर्ण आंतरिक परावर्तन करके शुद्ध समतल ध्रुवित E-किरण निर्गत करती है।"
              }
            },
            {
              "term": "Quarter-Wave vs. Half-Wave Plate",
              "definition": {
                "en": "A Quarter-Wave plate introduces a λ/4 path shift (π/2 phase) converting linear to circular polarization; a Half-Wave plate introduces a λ/2 path shift (π phase) rotating the polarization plane by 2θ.",
                "hinglish": "Quarter-wave plate λ/4 path difference daal kar linear light ko circular banati hai; Half-wave plate λ/2 path difference daal kar polarization angle ko 2θ ghuma deti hai.",
                "hi": "चतुर्थांश तरंग पट्टिका (λ/4 पथांतर) रेखीय प्रकाश को वृत्तीय में बदलती है; अर्ध-तरंग पट्टिका (λ/2 पथांतर) ध्रुवण तल को 2θ कोण से घुमा देती है।"
              }
            }
          ],
          "visualType": "3d-optics",
          "visualData": {
            "mode": "polarization",
            "polarizerAngle": 0,
            "analyzerAngle": 45,
            "birefringenceDelta": 0.172
          },
          "underlyingPrinciple": {
            "en": "Anisotropic Dielectric Tensor: In birefringent crystals, the electric permittivity ε is a 3D tensor, meaning electric displacement D is not parallel to electric field E: D_i = ε_{ij} E_j. This tensor asymmetry produces two distinct refractive indices: μ_o = √(ε_perp / ε_0) and μ_e = √(ε_parallel / ε_0). In optically active media, molecular chirality creates circular birefringence (n_L ≠ n_R), causing the left- and right-circularly polarized components to travel at different phase velocities, rotating the resultant linear polarization plane.",
            "hinglish": "Crystal lattice ke asymmetric hone se permittivity tensor ban jaata hai, jisse do refractive indices μ_o aur μ_e aate hain. Optically active molecules (jaise sugar) me left aur right circular waves alag-alag speed se chalti hain, jisse resultant polarization plane rotate ho jata hai.",
            "hi": "विषमदैशिक क्रिस्टलों में विद्युतशीलता एक प्रदिश (Tensor) होती है जिसके कारण दो अपवर्तनांक μ_o व μ_e उत्पन्न होते हैं। प्रकाश सक्रिय माध्यमों में अणु की असममिति के कारण n_L ≠ n_R होता है जिससे ध्रुवण तल का घूर्णन होता है।"
          },
          "formula": {
            "equation": "\\mu = \\tan(i_p), \\quad I = I_0 \\cos^2(\\theta), \\quad t_{\\text{QWP}} = \\frac{\\lambda}{4 |\\mu_o - \\mu_e|}, \\quad S = \\frac{\\theta}{l \\cdot c}",
            "symbolMeaning": [
              "i_p: Brewster polarizing angle of incidence (degrees)",
              "μ: Refractive index of the dielectric reflecting medium",
              "I0: Incident polarized light intensity; I: Transmitted intensity through analyzer",
              "θ: Angle between polarizer and analyzer transmission axes (degrees)",
              "t_QWP: Physical thickness of quarter-wave retardation plate (meters)",
              "μ_o, μ_e: Refractive indices for Ordinary and Extraordinary rays",
              "S: Specific rotation in degrees / (decimeter · g/cm³)",
              "l: Length of polarimeter tube in decimeters (1 dm = 10 cm)",
              "c: Concentration of optically active substance in g/cm³ (or g/mL)"
            ],
            "units": "Angles in degrees (°); Thickness in μm; Tube length in dm (decimeters); Concentration in g/cm³.",
            "assumptions": [
              "Light is monochromatic and plane wavefront.",
              "The crystal optic axis is parallel to the plate surfaces for wave plates.",
              "The optically active solution is transparent, non-absorbing, and homogeneous."
            ],
            "realWorldApplication": "Liquid Crystal Displays (LCDs), 3D cinema glasses, optical stress analysis (photoelasticity), and sugar industry purity testing."
          },
          "formulaLogic": {
            "formula": "t = \\begin{cases} \\frac{\\lambda}{4 |\\mu_o - \\mu_e|} & \\text{(Quarter-Wave Plate)} \\\\[6pt] \\frac{\\lambda}{2 |\\mu_o - \\mu_e|} & \\text{(Half-Wave Plate)} \\end{cases}, \\quad S = \\frac{\\theta}{l \\cdot c}",
            "description": {
              "en": "Formulas for wave plate thicknesses and polarimetric specific rotation.",
              "hinglish": "Wave plates ki thickness aur specific rotation ke standard formulas.",
              "hi": "तरंग पट्टिकाओं की मोटाई तथा विशिष्ट घूर्णन के प्रामाणिक सूत्र।"
            },
            "symbols": [
              {
                "symbol": "t",
                "meaning": "Thickness of wave plate",
                "unit": "m"
              },
              {
                "symbol": "λ",
                "meaning": "Wavelength of light in vacuum",
                "unit": "m"
              },
              {
                "symbol": "|μo - μe|",
                "meaning": "Birefringence value",
                "unit": "Dimensionless"
              },
              {
                "symbol": "S",
                "meaning": "Specific rotation",
                "unit": "° / (dm · g/cm³)"
              },
              {
                "symbol": "c",
                "meaning": "Concentration of solution",
                "unit": "g/cm³"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A 20 cm long tube containing an optically active sugar solution of concentration 0.15 g/cm³ rotates the plane of polarization of Sodium light (λ = 589 nm) by 19.8°. (a) Calculate the specific rotation S of the sugar. (b) If another sugar solution in a 10 cm tube rotates the plane of polarization by 13.2°, calculate its unknown concentration c_unknown. (c) Calculate the minimum thickness of a quartz quarter-wave plate for λ = 589 nm given μ_e = 1.5533 and μ_o = 1.5442.",
              "hinglish": "Ek 20 cm lambi tube jisme sugar solution (concentration 0.15 g/cm³) bhara hai, light ke polarization plane ko 19.8° ghuma deti hai. (a) Sugar ka Specific Rotation S nikalo. (b) Doosra sugar solution 10 cm tube me 13.2° rotation deta hai, uski unknown concentration c nikalo. (c) Quartz quarter-wave plate ki minimum thickness t nikalo (μ_e = 1.5533, μ_o = 1.5442).",
              "hi": "20 सेमी लंबी नली में भरे 0.15 ग्राम/सेमी³ सांद्रता वाले शर्करा विलयन द्वारा 19.8° का घूर्णन होता है। (a) शर्करा का विशिष्ट घूर्णन S ज्ञात कीजिए। (b) 10 सेमी नली में किसी अन्य विलयन द्वारा 13.2° का घूर्णन होने पर उसकी सांद्रता c ज्ञात कीजिए। (c) क्वार्ट्ज चतुर्थांश तरंग पट्टिका की मोटाई ज्ञात कीजिए (μ_e = 1.5533, μ_o = 1.5442)।"
            },
            "given": [
              "Tube length: l1 = 20 cm = 2 decimeters (dm)",
              "Concentration: c1 = 0.15 g/cm³",
              "Optical rotation: θ1 = +19.8°",
              "Second tube length: l2 = 10 cm = 1 dm",
              "Second rotation: θ2 = +13.2°",
              "Quartz indices: μ_e = 1.5533, μ_o = 1.5442 => |μ_e - μ_o| = 0.0091",
              "Wavelength: λ = 589 nm = 589 × 10^-9 m"
            ],
            "toFind": "Specific rotation S, unknown concentration c_unknown, and QWP thickness t",
            "formulaUsed": "S = θ / (l · c)  and  c = θ / (l · S)  and  t_QWP = λ / (4 |μ_e - μ_o|)",
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate the Specific Rotation S of the sugar solution",
                "explanation": {
                  "en": "Using S = θ1 / (l1 · c1) where l1 = 20 cm = 2 dm and c1 = 0.15 g/cm³: S = 19.8° / (2 dm × 0.15 g/cm³) = 19.8 / 0.30 = 66.0° / (dm · g/cm³).",
                  "hinglish": "S formula me values rakho: S = 19.8 / (2 * 0.15) = 19.8 / 0.3 = 66.0° / (dm · g/cm³).",
                  "hi": "सूत्र S = θ / (l · c) से S = 19.8 / (2 × 0.15) = 66.0° / (डेसीमीटर · ग्राम/सेमी³)।"
                },
                "math": "S = \\frac{\\theta_1}{l_1 \\cdot c_1} = \\frac{19.8^\\circ}{2 \\text{ dm} \\times 0.15 \\text{ g/cm}^3} = 66.0^\\circ / (\\text{dm} \\cdot \\text{g/cm}^3)"
              },
              {
                "stepNumber": 2,
                "title": "Determine the unknown sugar concentration c_unknown",
                "explanation": {
                  "en": "Using c2 = θ2 / (l2 · S) with l2 = 10 cm = 1 dm, θ2 = 13.2°, and S = 66.0°: c2 = 13.2 / (1 dm × 66.0) = 0.20 g/cm³ (or 200 g/L).",
                  "hinglish": "Second solution ki concentration: c = 13.2 / (1 * 66.0) = 0.20 g/cm³.",
                  "hi": "सांद्रता c2 = 13.2 / (1 × 66.0) = 0.20 ग्राम/सेमी³।"
                },
                "math": "c_2 = \\frac{\\theta_2}{l_2 \\cdot S} = \\frac{13.2^\\circ}{1 \\text{ dm} \\times 66.0} = 0.20 \\text{ g/cm}^3"
              },
              {
                "stepNumber": 3,
                "title": "Compute the minimum thickness of the quartz Quarter-Wave plate",
                "explanation": {
                  "en": "For quartz (positive crystal, μ_e > μ_o): t_QWP = λ / [4 (μ_e - μ_o)] = (589 × 10^-9 m) / [4 × (1.5533 - 1.5442)] = (589 × 10^-9) / [4 × 0.0091] = (589 × 10^-9) / 0.0364 = 1.618 × 10^-5 m = 16.18 μm.",
                  "hinglish": "Quarter wave plate thickness: t = 589e-9 / (4 * 0.0091) = 1.618e-5 m = 16.18 μm.",
                  "hi": "मोटाई t = (589 × 10^-9) / [4 × 0.0091] = 16.18 माइक्रोमीटर।"
                },
                "math": "t_{\\text{QWP}} = \\frac{589 \\times 10^{-9} \\text{ m}}{4 \\times (1.5533 - 1.5442)} = \\frac{589 \\times 10^{-9}}{0.0364} = 1.618 \\times 10^{-5} \\text{ m} = 16.18 \\ \\mu\\text{m}"
              }
            ],
            "finalAnswer": "The specific rotation of the sugar is 66.0° / (dm · g/cm³), the unknown concentration is 0.20 g/cm³, and the quartz quarter-wave plate thickness is 16.18 μm."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Using the polarimeter tube length l in centimeters (cm) instead of decimeters (dm) in S = θ / (l · c).",
                "hinglish": "Tube ki length ko decimeters (dm) me convert karna bhool jaana aur seedha 20 cm formula me rakh dena.",
                "hi": "लंबाई l को डेसीमीटर में बदलने के स्थान पर सीधे सेंटीमीटर में रख देना।"
              },
              "correction": {
                "en": "In the standard definition of specific rotation, 1 decimeter (dm) = 10 cm = 0.1 m. A 20 cm tube is l = 2.0 dm, and a 10 cm tube is l = 1.0 dm. Failing to divide cm by 10 will give a specific rotation that is off by a factor of 10!",
                "hinglish": "Specific rotation formula me length hamesha decimeters (dm) me hoti hai: 20 cm = 2 dm, 10 cm = 1 dm. Agar 20 rakh doge toh answer 10 guna galat aayega!",
                "hi": "विशिष्ट घूर्णन सूत्र में l सदैव डेसीमीटर में होता है (20 सेमी = 2 डेसीमीटर)। 10 से भाग न देने पर उत्तर 10 गुना गलत हो जाएगा।"
              }
            },
            {
              "misconception": {
                "en": "Believing that a Quarter-Wave Plate (QWP) merely attenuates light by 25%.",
                "hinglish": "Yeh sochna ki Quarter-wave plate light ki intensity ko 25% kam kar deti hai.",
                "hi": "यह मान लेना कि चतुर्थांश तरंग पट्टिका प्रकाश की तीव्रता को 25% कम करती है।"
              },
              "correction": {
                "en": "A wave plate does NOT absorb light! The term \"quarter-wave\" refers to the OPTICAL PHASE RETARDATION of π/2 (path difference of λ/4) introduced between the fast (E-ray) and slow (O-ray) components. It transforms linear polarization into circular or elliptical polarization with nearly 100% optical transmission.",
                "hinglish": "Quarter-wave plate light ko absorb nahi karti! Yeh dono orthogonal rays ke beech me λ/4 (90° phase shift) ka time lag (retardation) create karti hai, jisse linearly polarized light circularly polarized light me badal jaati hai!",
                "hi": "चतुर्थांश तरंग पट्टिका प्रकाश को अवशोषित नहीं करती, बल्कि O तथा E किरणों के मध्य π/2 कलान्तर (λ/4 पथांतर) उत्पन्न करके रेखीय ध्रुवण को वृत्तीय ध्रुवण में परिवर्तित करती है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "phy-u1-l4-p1",
              "level": "Beginner",
              "question": {
                "en": "What is the Brewster polarizing angle i_p for a glass plate having a refractive index of μ = 1.732 (√3)?",
                "hinglish": "Glass plate (μ = 1.732 = √3) ke liye Brewster angle of polarization i_p kitna hoga?",
                "hi": "काँच की पट्टिका (μ = 1.732 = √3) हेतु ब्रूस्टर ध्रुवण कोण i_p क्या होगा?"
              },
              "options": [
                "60°",
                "45°",
                "30°",
                "53.1°"
              ],
              "correctAnswer": 0,
              "correctIndex": 0,
              "hint": {
                "en": "Apply Brewster’s law: tan(i_p) = μ. Recall tan(60°) = √3 ≈ 1.732.",
                "hinglish": "Brewster law lagao: tan(i_p) = μ = √3. tan(60°) = √3 hota hai.",
                "hi": "ब्रूस्टर नियम tan(i_p) = μ का उपयोग करें। tan(60°) = √3 होता है।"
              },
              "explanation": {
                "en": "By Brewster’s law: tan(i_p) = μ = 1.732 = √3 => i_p = arctan(√3) = 60°. At this angle, the reflected light is 100% plane-polarized.",
                "hinglish": "tan(i_p) = 1.732 => i_p = 60°. 60 degree par reflected light complete plane polarized hoti hai.",
                "hi": "tan(i_p) = √3 ⇒ i_p = 60° पर परावर्तित प्रकाश पूर्णतः समतल ध्रुवित होता है।"
              }
            },
            {
              "id": "phy-u1-l4-p2",
              "level": "Intermediate",
              "question": {
                "en": "Unpolarized light of intensity I0 passes through two ideal polarizers whose transmission axes are oriented at an angle of 60° with respect to each other. What is the final transmitted intensity I?",
                "hinglish": "Unpolarized light (intensity I0) do polarizers se guzarti hai jinki axes ke beech 60° ka angle hai. Final transmitted intensity I kitni hogi?",
                "hi": "तीव्रता I0 का अध्रुवित प्रकाश दो पोलेरॉइडों से गुजरता है जिनके पारगमन अक्षों के मध्य 60° का कोण है। निर्गत तीव्रता I क्या होगी?"
              },
              "options": [
                "I = I0 / 8 (0.125 I0)",
                "I = I0 / 4 (0.250 I0)",
                "I = I0 / 2 (0.500 I0)",
                "I = 3 I0 / 8 (0.375 I0)"
              ],
              "correctAnswer": 0,
              "correctIndex": 0,
              "hint": {
                "en": "After the 1st polarizer, intensity becomes I1 = I0 / 2. Then apply Malus’s law: I2 = I1 cos²(60°).",
                "hinglish": "Pehle polarizer ke baad intensity I0/2 ho jaati hai. Fir Malus law lagao: I2 = (I0/2) * cos²(60°).",
                "hi": "प्रथम पोलेरॉइड के बाद तीव्रता I1 = I0/2 होती है। फिर मेलस नियम I = I1 cos²(60°) लगाएँ।"
              },
              "explanation": {
                "en": "After the first polarizer, unpolarized light is converted to plane-polarized light with half intensity: I1 = I0 / 2. Passing through the second polarizer at angle θ = 60°, Malus’s law gives: I = I1 cos²(60°) = (I0 / 2) × (1/2)² = (I0 / 2) × (1/4) = I0 / 8 = 0.125 I0.",
                "hinglish": "I1 = I0 / 2. Second polarizer ke baad: I = (I0 / 2) * (cos 60°)² = (I0 / 2) * (1/4) = I0 / 8.",
                "hi": "प्रथम पोलेरॉइड से I1 = I0/2 तथा द्वितीय से I = (I0/2) × (1/2)² = I0/8 प्राप्त होता है।"
              }
            }
          ],
          "summary": {
            "en": [
              "Polarization restricts the electric field vibrations of transverse electromagnetic waves to a single plane.",
              "Brewster’s Law: tan(i_p) = μ; at Brewster’s angle, reflected and refracted rays are perpendicular (i_p + r = 90°).",
              "Double refraction splits light into O-ray (spherical wave, constant μ_o) and E-ray (ellipsoidal wave, variable μ_e).",
              "Nicol prism uses Total Internal Reflection at a Canada balsam layer (μ = 1.55) to eliminate the O-ray.",
              "Quarter-Wave plate introduces π/2 phase (λ/4 path); Half-Wave plate introduces π phase (λ/2 path).",
              "Biot’s Law and Laurent Polarimeter measure sugar purity via specific rotation: S = θ / (l · c)."
            ],
            "hinglish": [
              "Polarization light ke electric vibrations ko ek hi plane me limit karta hai.",
              "Brewster law: tan(i_p) = μ; polarizing angle par reflected aur refracted rays aapas me 90° par hoti hain.",
              "Double refraction me do rays banti hain: O-ray (spherical) aur E-ray (ellipsoidal).",
              "Nicol prism Canada balsam par O-ray ka Total Internal Reflection karke 100% polarized E-ray deta hai.",
              "Quarter-wave plate λ/4 path difference deti hai aur half-wave plate λ/2 path difference deti hai.",
              "Laurent Polarimeter se sugar concentration naapi jaati hai: S = θ / (l * c)."
            ],
            "hi": [
              "ध्रुवण विद्युत क्षेत्र के कंपनों को एक निश्चित तल में सीमित करता है।",
              "ब्रूस्टर नियम tan(i_p) = μ है तथा इस कोण पर i_p + r = 90° होता है।",
              "द्वि-अपवर्तन में O-किरण गोलीय तथा E-किरण दीर्घवृत्तीय तरंगाग्र बनाती है।",
              "निकोल प्रिज्म पूर्ण आंतरिक परावर्तन द्वारा O-किरण को हटाकर शुद्ध E-किरण निर्गत करता है।",
              "चतुर्थांश तरंग पट्टिका λ/4 तथा अर्ध-तरंग पट्टिका λ/2 का पथांतर उत्पन्न करती है।",
              "शर्करामापी द्वारा विशिष्ट घूर्णन S = θ / (l · c) से विलयन की सांद्रता मापी जाती है।"
            ]
          },
          "quiz": [
            {
              "id": "phy-u1-l4-q1",
              "question": {
                "en": "Why does Laurent’s Half-Shade Polarimeter divide the circular viewing field into two halves using a semi-circular quartz plate and a semi-circular glass plate?",
                "hinglish": "Laurent Half-Shade polarimeter me circular field ko aadhi glass plate aur aadhi quartz plate se do hisso me kyu baanta jaata hai?",
                "hi": "लॉरेंट अर्ध-आवरण शर्करामापी में वृत्ताकार दृष्टि क्षेत्र को आधे काँच तथा आधे क्वार्ट्ज पट्टिका द्वारा दो भागों में क्यों बाँटा जाता है?"
              },
              "options": [
                "Because the human eye is extremely sensitive to detecting slight differences in brightness between two adjacent fields, but very poor at judging absolute maximum or minimum brightness",
                "To double the intensity of light entering the telescope",
                "To allow viewing two different wavelengths simultaneously",
                "To prevent the sugar solution from heating up"
              ],
              "correctIndex": 0,
              "hint": {
                "en": "Think about how hard it is to tell when a light is at 100% maximum brightness vs. how easily you notice two side-by-side halves having slightly different brightness.",
                "hinglish": "Insan ki aankh do bagal-bagal wale hisso me halka sa fark turant pakad leti hai, jabki ek akele light ka maximum ya minimum andaza lagana bohot mushkil hota hai.",
                "hi": "मानव नेत्र दो निकटवर्ती क्षेत्रों की चमक में सूक्ष्म अंतर को अत्यधिक संवेदनशीलता से पहचान सकता है।"
              },
              "explanation": {
                "en": "The human eye cannot accurately pinpoint when a single illuminated field reaches maximum brightness or extinction due to fatigue and slow retinal response. By splitting the field into two adjacent halves with an angular offset of 2θ, the transition through the uniform semi-dark shade is extremely sharp, enabling measurement of optical rotation down to ±0.01° precision!",
                "hinglish": "Aankh akele field ka exact dark ya bright point accurately nahi pehchan sakti. Par jab do halves ek saath hote hain, toh dono ke barabar hone ka point (semi-dark shade) bohot sharply detect ho jata hai.",
                "hi": "मानव नेत्र की संवेदनशीलता दो निकटवर्ती अर्ध-भागों की समान चमक (अर्ध-आवरण स्थिति) को अत्यधिक यथार्थता (±0.01°) से पहचानने में सक्षम होती है।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Unit I: Wave Optics explores the transverse wave nature of light across three core domains: (1) Interference by division of amplitude in thin parallel films (2μt cos r = (2m-1)λ/2 for bright, 2μt cos r = mλ for dark due to Stokes π phase flip at the denser boundary), wedge-shaped films (equidistant straight fringes β = λ / 2μθ), Newton’s rings (circular localized fringes where dark ring diameter Dn² = 4nRλ, enabling precision measurement of λ and liquid index μ), and the Michelson interferometer (amplitude division using beam splitter and compensating plate with mirror displacement d = Nλ/2). (2) Fraunhofer Diffraction involving far-field plane wavefronts: single slit producing a central maximum of full angular width 2λ/a flanked by minima at a sin θ = mλ; plane transmission grating with grating element (a + b) satisfying (a + b) sin θ = nλ; missing orders when (a+b)/a = n/m; and Rayleigh’s resolution criterion giving grating resolving power RP = n·N. (3) Polarization restricting electric field vibrations: Brewster’s law (μ = tan i_p with i_p + r = 90°); double refraction in uniaxial crystals splitting light into O-ray (spherical wave, constant μ_o) and E-ray (ellipsoidal wave, variable μ_e); Nicol prism eliminating O-ray via total internal reflection at Canada balsam; Quarter-Wave (λ/4) and Half-Wave (λ/2) retardation plates; and Laurent’s Half-Shade Polarimeter measuring optical rotation and sugar purity via specific rotation S = θ / (l · c).",
          "hinglish": "Unit I Wave Optics light ke transverse nature ko 3 main parts me cover karta hai: (1) Interference by Division of Amplitude: thin films me net path difference 2μt cos r ± λ/2 hota hai (Stokes phase reversal), wedge film me straight fringes β = λ / 2μθ, Newton rings me circular concentric fringes (dark diameter Dn² = 4nRλ), aur Michelson interferometer jisme mirror shift d = Nλ/2 hota hai. (2) Fraunhofer Diffraction: single slit me central maximum 2λ/a aur minima a sin θ = mλ, grating me (a + b) sin θ = nλ, absent spectra (a+b)/a = n/m, aur Rayleigh criterion se resolving power RP = n*N. (3) Polarization: Brewster law μ = tan i_p, double refraction (O-ray aur E-ray), Nicol prism jo Canada balsam se O-ray ko TIR karke hata deta hai, Quarter-Wave plate (λ/4 retardation) aur Half-Wave plate (λ/2 retardation), aur Laurent Polarimeter jisme sugar purity specific rotation S = θ / (l * c) se nikali jaati hai.",
          "hi": "इकाई I: तरंग प्रकाशिकी तीन मुख्य स्तंभों पर आधारित है: (1) आयाम विभाजन द्वारा व्यतिकरण: पतली फिल्मों में 2μt cos r ± λ/2 पथांतर (स्टोक्स कलान्तर सहित), फानाकार फिल्म (β = λ/2μθ), न्यूटन वलय (अदीप्त व्यास Dn² = 4nRλ द्वारा λ व μ का मापन), तथा माइकलसन व्यतिकरणमापी (d = Nλ/2)। (2) फ़्रॉनहॉफ़र विवर्तन: एकल झिरी (केंद्रीय उच्चिष्ठ 2λ/a, निम्निष्ठ a sin θ = mλ), विवर्तन झिरी ((a+b) sin θ = nλ), लुप्त कोटियाँ, तथा रेले कसौटी अनुसार विभेदन क्षमता RP = n·N। (3) ध्रुवण: ब्रूस्टर नियम (μ = tan i_p), द्वि-अपवर्तन (O तथा E किरणें), निकोल प्रिज्म, चतुर्थांश व अर्ध-तरंग पट्टिकाएँ, तथा लॉरेंट अर्ध-आवरण शर्करामापी (S = θ / (l · c))।"
        },
        "shortNotes": [
          {
            "topic": "Stokes’ Law of Phase Reversal",
            "content": {
              "en": "Light reflecting from an optically denser boundary undergoes an intrinsic π phase shift (λ/2 path shift). Reflection at a rarer boundary has no phase shift.",
              "hinglish": "Denser medium se reflection par π phase change (λ/2 path change) hota hai. Rarer medium se reflection par zero phase change hota hai.",
              "hi": "सघन माध्यम से परावर्तन पर π कलान्तर (λ/2 पथांतर) उत्पन्न होता है, जबकि विरल माध्यम से परावर्तन पर कोई कलान्तर नहीं होता।"
            }
          },
          {
            "topic": "Why Newton’s Central Ring is Dark in Reflection",
            "content": {
              "en": "At the point of contact, film thickness t = 0. The ray reflected from the lower glass plate suffers a π phase change while the upper ray does not. The net path difference is λ/2, causing total destructive interference.",
              "hinglish": "Contact point par air thickness t = 0 hoti hai. Lower surface par λ/2 ka Stokes phase flip hota hai, isliye dono waves ek dusre ko cancel karke dark center banati hain.",
              "hi": "संपर्क बिंदु पर t = 0 होने पर भी निचली सतह से स्टोक्स परावर्तन के कारण λ/2 का पथांतर रहता है, जिससे विनाशी व्यतिकरण होकर केंद्र अदीप्त होता है।"
            }
          },
          {
            "topic": "Fraunhofer Single-Slit Minima Origin",
            "content": {
              "en": "Minima occur at a sin θ = mλ because when the edge-to-edge path difference is mλ, the slit can be divided into 2m equal zones that cancel in opposing pairs.",
              "hinglish": "Jab edge-to-edge path difference mλ hota hai, toh slit 2m barabar zones me divide ho jaati hai jo aapas me ek dusre ko cancel kar deti hain.",
              "hi": "किनारों के मध्य पथांतर mλ होने पर झिरी को 2m समान भागों में बाँटा जा सकता है जो परस्पर युग्मों में निरस्त हो जाते हैं।"
            }
          },
          {
            "topic": "Condition for Missing Orders in Gratings",
            "content": {
              "en": "When the angle of the nth interference maximum equals the mth diffraction minimum, the spectral line vanishes: (a + b) / a = n / m.",
              "hinglish": "Jab nth interference peak mth diffraction zero ke upar girta hai: (a + b) / a = n / m order gayab ho jata hai.",
              "hi": "जब nवाँ व्यतिकरण उच्चिष्ठ mवें विवर्तन निम्निष्ठ के संपाती होता है: (a + b)/a = n/m order लुप्त हो जाता है।"
            }
          },
          {
            "topic": "Action of Nicol Prism",
            "content": {
              "en": "Calcite rhomb cut at 68° and cemented with Canada balsam (μ = 1.55). The O-ray (μ_o = 1.658) undergoes Total Internal Reflection, leaving a purely plane-polarized E-ray (μ_e = 1.486).",
              "hinglish": "Canada balsam (μ = 1.55) par O-ray (μ_o = 1.658) ka Total Internal Reflection ho jata hai aur sirf polarized E-ray bahar aati hai.",
              "hi": "कनाडा बालसम (μ = 1.55) की परत पर O-किरण (μ_o = 1.658) का पूर्ण आंतरिक परावर्तन हो जाता है और केवल E-किरण निर्गत होती है।"
            }
          },
          {
            "topic": "Function of Quarter-Wave Plate",
            "content": {
              "en": "Introduces a phase difference of π/2 (path difference λ/4) between O-ray and E-ray, converting linearly polarized light into circularly or elliptically polarized light.",
              "hinglish": "O-ray aur E-ray ke beech 90° (λ/4) ka phase retardation daal kar linearly polarized light ko circularly polarized light banati hai.",
              "hi": "O तथा E किरणों के मध्य π/2 कलान्तर (λ/4 पथांतर) उत्पन्न करके रेखीय प्रकाश को वृत्तीय या दीर्घवृत्तीय ध्रुवित प्रकाश में बदलती है।"
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Thin Film Reflected Path Difference",
            "formula": "Δ = 2μt cos(r) - λ/2",
            "units": "Meters (m)",
            "note": "Stokes λ/2 shift included; Bright: 2μt cos(r) = (2m-1)λ/2, Dark: 2μt cos(r) = mλ"
          },
          {
            "name": "Wedge Film Fringe Width",
            "formula": "β = λ / (2μθ)",
            "units": "Meters (m)",
            "note": "θ is the small wedge angle in radians; fringes are straight and parallel"
          },
          {
            "name": "Newton’s Rings Dark Diameter",
            "formula": "D_n^2 = 4n R λ",
            "units": "Square meters (m²)",
            "note": "Dn ∝ √n; in liquid, diameter scales down by 1/√μ"
          },
          {
            "name": "Wavelength by Newton’s Rings",
            "formula": "λ = (D_{n+p}^2 - D_n^2) / (4 p R)",
            "units": "Meters (m)",
            "note": "Eliminates error in locating the finite-sized central dark spot"
          },
          {
            "name": "Michelson Mirror Displacement",
            "formula": "d = N λ / 2",
            "units": "Meters (m)",
            "note": "N fringes shift past crosswire for mirror movement d"
          },
          {
            "name": "Fraunhofer Single-Slit Minima",
            "formula": "a sin(θ) = m λ",
            "units": "Meters (m)",
            "note": "m = ±1, ±2...; Central maximum full angular width is 2θ = 2λ/a"
          },
          {
            "name": "Plane Grating Equation",
            "formula": "(a + b) sin(θ) = n λ",
            "units": "Meters (m)",
            "note": "(a + b) is the grating element = 1 / (lines per meter)"
          },
          {
            "name": "Grating Resolving Power",
            "formula": "λ / dλ = n · N",
            "units": "Dimensionless",
            "note": "n is spectral order, N is total active illuminated ruled lines"
          },
          {
            "name": "Brewster’s Law of Polarization",
            "formula": "μ = tan(i_p)",
            "units": "Dimensionless",
            "note": "Reflected and refracted rays are mutually perpendicular: i_p + r = 90°"
          },
          {
            "name": "Malus’s Law of Transmitted Intensity",
            "formula": "I = I_0 cos²(θ)",
            "units": "Watts / m² (W/m²)",
            "note": "θ is angle between polarizer and analyzer transmission axes"
          },
          {
            "name": "Quarter-Wave Plate Thickness",
            "formula": "t = λ / (4 |μ_o - μ_e|)",
            "units": "Meters (m)",
            "note": "Introduces π/2 phase difference; for Half-Wave plate, t = λ / (2|μ_o - μ_e|)"
          },
          {
            "name": "Specific Rotation of Solution",
            "formula": "S = θ / (l · c)",
            "units": "Degrees / (decimeter · g/cm³)",
            "note": "Tube length l in decimeters (1 dm = 10 cm); c in g/cm³"
          }
        ],
        "mindMap": [
          {
            "node": "Wave Optics (Applied Physics Unit I)",
            "children": [
              "Interference (Division of Amplitude)",
              "Diffraction (Huygens Secondary Wavelets)",
              "Polarization (Transverse Wave Nature)"
            ]
          },
          {
            "node": "Interference by Amplitude Division",
            "children": [
              "Thin Films (2μt cos r ± λ/2)",
              "Wedge Film (β = λ/2μθ)",
              "Newton’s Rings (Dn² = 4nRλ)",
              "Michelson Interferometer (d = Nλ/2)"
            ]
          },
          {
            "node": "Diffraction Phenomena",
            "children": [
              "Single Slit (a sin θ = mλ, 2λ/a Central Peak)",
              "Double Slit (Diffraction envelope × Interference fringes)",
              "Plane Grating ((a+b) sin θ = nλ)",
              "Rayleigh Resolution Criterion (RP = nN)"
            ]
          },
          {
            "node": "Polarization & Anisotropic Optics",
            "children": [
              "Brewster Law (μ = tan i_p, i_p + r = 90°)",
              "Double Refraction (O-ray & E-ray)",
              "Nicol Prism (Canada Balsam TIR)",
              "Wave Plates (QWP: λ/4, HWP: λ/2)",
              "Laurent Polarimeter (S = θ / lc)"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Interference",
            "conceptB": "Diffraction",
            "comparisonPoints": [
              {
                "feature": "Physical Cause",
                "a": "Superposition of two distinct coherent wavefronts/beams",
                "b": "Superposition of continuous secondary wavelets from different parts of the same wavefront"
              },
              {
                "feature": "Fringe Width",
                "a": "Fringes are of equal or nearly equal width throughout",
                "b": "Central maximum is twice as wide as secondary maxima"
              },
              {
                "feature": "Intensity Distribution",
                "a": "All bright fringes possess equal intensity (I_max = 4I0)",
                "b": "Intensity falls off very rapidly for outer secondary maxima (1 : 1/22 : 1/61)"
              },
              {
                "feature": "Minima Quality",
                "a": "Minima are completely dark (zero intensity) when I1 = I2",
                "b": "Minima are rarely perfectly dark due to imperfect wavelet cancellation"
              }
            ]
          },
          {
            "conceptA": "Fresnel Diffraction",
            "conceptB": "Fraunhofer Diffraction",
            "comparisonPoints": [
              {
                "feature": "Source/Screen Distance",
                "a": "Source and screen are at finite distances from aperture",
                "b": "Source and screen are effectively at infinite distances"
              },
              {
                "feature": "Lenses Required",
                "a": "No lenses required",
                "b": "Two convex lenses (collimating and focusing) required"
              },
              {
                "feature": "Wavefront Type",
                "a": "Spherical or cylindrical wavefronts",
                "b": "Plane wavefronts"
              },
              {
                "feature": "Mathematical Treatment",
                "a": "Complex Fresnel half-period zones and Cornu spiral",
                "b": "Simpler analytical Fourier integration"
              }
            ]
          },
          {
            "conceptA": "Ordinary Ray (O-Ray)",
            "conceptB": "Extraordinary Ray (E-Ray)",
            "comparisonPoints": [
              {
                "feature": "Snell’s Law",
                "a": "Strictly obeys Snell’s law of refraction",
                "b": "Does not obey Snell’s law (refraction angle varies with direction)"
              },
              {
                "feature": "Phase Velocity",
                "a": "Constant in all directions inside the crystal",
                "b": "Varies with direction of propagation"
              },
              {
                "feature": "Wavefront Geometry",
                "a": "Spherical wavefront",
                "b": "Ellipsoidal wavefront of revolution"
              },
              {
                "feature": "Polarization Direction",
                "a": "Vibrations are perpendicular to the principal plane",
                "b": "Vibrations lie within the principal plane"
              }
            ]
          },
          {
            "conceptA": "Quarter-Wave Plate (QWP)",
            "conceptB": "Half-Wave Plate (HWP)",
            "comparisonPoints": [
              {
                "feature": "Optical Path Difference",
                "a": "Introduces a path difference of λ/4",
                "b": "Introduces a path difference of λ/2"
              },
              {
                "feature": "Phase Difference",
                "a": "Introduces a phase shift of π/2 radians (90°)",
                "b": "Introduces a phase shift of π radians (180°)"
              },
              {
                "feature": "Physical Thickness",
                "a": "t = λ / [4 |μ_o - μ_e|]",
                "b": "t = λ / [2 |μ_o - μ_e|] (exactly twice as thick)"
              },
              {
                "feature": "Application",
                "a": "Converts linear light to circularly or elliptically polarized light",
                "b": "Rotates the plane of linearly polarized light by 2θ"
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "Why does an excessively thin soap film (t << λ) appear dark in reflected light?",
            "back": "Because 2μt ≈ 0, leaving only the Stokes phase shift of λ/2 upon reflection from the top surface. The two reflected waves are 180° out of phase and destructively cancel completely."
          },
          {
            "front": "What is the mathematical relation for Newton’s dark ring diameter?",
            "back": "D_n² = 4n R λ, which means ring diameter Dn is directly proportional to √n (Dn ∝ √n)."
          },
          {
            "front": "How is monochromatic wavelength λ calculated using Newton’s rings?",
            "back": "λ = (D_{n+p}² - D_n²) / (4 p R), where p is the difference in ring numbers and R is the lens radius of curvature."
          },
          {
            "front": "What is the condition for missing orders (absent spectra) in a plane diffraction grating?",
            "back": "(a + b) / a = n / m, where n is the interference order and m is the diffraction minimum order."
          },
          {
            "front": "State Rayleigh’s criterion for resolution.",
            "back": "Two equal-intensity spectral lines are just resolved when the central maximum of one wavelength falls exactly on the first minimum of the other wavelength."
          },
          {
            "front": "What is the formula for the resolving power of a diffraction grating?",
            "back": "RP = λ / dλ = n · N, where n is the spectral order and N is the total number of illuminated grating lines."
          },
          {
            "front": "State Brewster’s Law and the relationship between reflected and refracted rays.",
            "back": "μ = tan(i_p). At the Brewster polarizing angle i_p, the reflected and refracted rays are mutually perpendicular: i_p + r = 90°."
          },
          {
            "front": "What is the specific rotation formula for a polarimeter, and what are its units?",
            "back": "S = θ / (l · c), expressed in ° / (dm · g/cm³), where tube length l is in decimeters (1 dm = 10 cm)."
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Explain why Newton’s rings become closer to each other as their radius increases.",
            "answer": "Newton ring diameters satisfy Dn ∝ √n. The difference between consecutive diameters ΔDn = D_{n+1} - Dn ∝ (√(n+1) - √n) diminishes rapidly with increasing n, causing the rings to crowd together radially."
          },
          {
            "question": "What is the effect on Newton’s rings if an air film is replaced by water (μ = 1.33)?",
            "answer": "The path difference becomes 2μt. The diameter of every ring contracts by a factor of 1/√μ: Dn_water = Dn_air / √1.33 ≈ 0.867 Dn_air."
          },
          {
            "question": "Why are white-light interference fringes colored in thin films?",
            "answer": "Different wavelengths λ satisfy the constructive condition 2μt cos r = (2m - 1)λ/2 at different thicknesses t. As film thickness varies, different spectral colors are amplified in different spatial zones."
          },
          {
            "question": "Why does a diffraction grating yield sharper spectral lines than a double-slit setup?",
            "answer": "A grating has thousands of slits (N ≈ 15,000). The resultant intensity is modulated by (sin Nγ / sin γ)², concentrating almost all optical energy into extremely sharp, razor-thin principal maxima with high resolving power (RP = nN)."
          },
          {
            "question": "Why is Canada balsam chosen as the cementing medium inside a Nicol prism?",
            "answer": "Canada balsam has an intermediate refractive index (μ = 1.550). For calcite, μ_o = 1.658 and μ_e = 1.486. Thus, for the O-ray, balsam is rarer (allowing Total Internal Reflection), while for the E-ray, balsam is denser (allowing transmission without TIR)."
          },
          {
            "question": "How does a Quarter-Wave plate convert linearly polarized light into circularly polarized light?",
            "answer": "Linearly polarized light oriented at 45° to the optic axis is resolved into equal O and E components. The QWP introduces a phase difference of π/2 (path difference λ/4), producing two equal-amplitude orthogonal oscillations that combine into circular polarization."
          }
        ],
        "longAnswerQuestions": [
          {
            "question": "Derive the condition for constructive and destructive interference in reflected light from a parallel thin film of thickness t and refractive index μ, taking Stokes’ phase reversal into account.",
            "outline": "1. Draw thin film ray diagram with incident ray AB, reflected ray BC, refracted ray BD, internal reflected ray DE, and exiting ray EF. 2. Calculate geometric path difference Δ_geom = μ(BD + DE) - BM where BM is perpendicular to BC. 3. Prove BD = DE = t / cos r and BM = 2t tan r sin i. 4. Use Snell’s law sin i = μ sin r to show Δ_geom = 2μt cos r. 5. Apply Stokes’ law: reflection from air-to-film at B suffers a phase shift of π (λ/2 path shift). 6. Write total path difference Δ = 2μt cos r - λ/2. 7. Set Δ = nλ for brightness => 2μt cos r = (2n - 1)λ/2. 8. Set Δ = (2n - 1)λ/2 for darkness => 2μt cos r = nλ."
          },
          {
            "question": "Describe the formation of Newton’s rings in reflected light. Derive the expressions for the diameters of dark and bright rings and explain how the wavelength of monochromatic light is measured experimentally.",
            "outline": "1. Diagram of plano-convex lens of radius R on glass plate. 2. Derive air film thickness t = r² / (2R) using circle theorem. 3. Total path difference in reflection: Δ = 2t + λ/2 = r²/R + λ/2. 4. Condition for dark rings: Δ = (2n+1)λ/2 => r_n² = n R λ => Dn = √(4nRλ). 5. Condition for bright rings: r_n² = (2n-1)Rλ/2 => Dn = √[2(2n-1)Rλ]. 6. Experimental setup with traveling microscope, Sodium lamp, and 45° glass plate. 7. Measure D_{n+p} and D_n to find λ = (D_{n+p}² - D_n²) / (4pR). 8. Show that plotting Dn² vs n gives a straight line of slope 4Rλ."
          },
          {
            "question": "Discuss Fraunhofer diffraction through a single slit of width a. Derive the intensity distribution formula and deduce the conditions for the central maximum, secondary maxima, and minima.",
            "outline": "1. Setup with plane wavefront, slit AB of width a, and lens L focusing on screen. 2. Divide slit into N wavelets dy with phase difference dδ = (2π/λ) y sin θ. 3. Integrate resultant amplitude R = (A/a) ∫ e^{i k y sin θ} dy to obtain R = A (sin β / β) where β = (π a sin θ)/λ. 4. Compute intensity I = I0 (sin β / β)². 5. Central maximum at β = 0 (θ = 0), intensity I0. 6. Minima when sin β = 0 (β = mπ) => a sin θ = mλ (m = ±1, ±2...). 7. Secondary maxima from dI/dβ = 0 => tan β = β, finding β ≈ ±1.43π, ±2.46π with relative intensities 1 : 0.045 : 0.016."
          },
          {
            "question": "Explain the construction and working of a Nicol Prism. Show how it produces linearly polarized light from unpolarized light using Total Internal Reflection.",
            "outline": "1. Calcite crystal geometry: length to breadth ratio 3:1, blunt corners trimmed to 68°. 2. Cut along principal section through blunt corners and polished. 3. Cemented with Canada balsam layer (μ = 1.550). 4. Refractive indices: Calcite μ_o = 1.658, μ_e = 1.486. 5. When unpolarized light enters, it divides into O-ray and E-ray. 6. O-ray enters rarer Canada balsam at angle > critical angle θc = arcsin(1.55/1.658) ≈ 69°, undergoes Total Internal Reflection, and is absorbed by black-coated sides. 7. E-ray enters denser balsam without TIR and emerges as 100% plane-polarized light."
          }
        ],
        "numericalPractice": [
          {
            "question": "A thin film of soap solution (μ = 1.33) is illuminated with white light at normal incidence. What is the minimum thickness required for the film to appear bright in reflected light for λ = 600 nm?",
            "given": "μ = 1.33, λ = 600 nm = 600 × 10^-9 m, normal incidence cos r = 1, order m = 1",
            "formula": "2 μ t cos(r) = (2m - 1) λ / 2  =>  t = λ / (4 μ)",
            "solution": "For minimum thickness, m = 1: t = 600 nm / (4 × 1.33) = 600 / 5.32 = 112.78 nm."
          },
          {
            "question": "In a Newton’s rings experiment, the diameter of the 10th dark ring is 0.50 cm. If the lens has a radius of curvature R = 100 cm, calculate the wavelength of light used.",
            "given": "n = 10, Dn = 0.50 cm => Dn² = 0.25 cm², R = 100 cm",
            "formula": "D_n² = 4 n R λ  =>  λ = D_n² / (4 n R)",
            "solution": "λ = 0.25 cm² / (4 × 10 × 100 cm) = 0.25 / 4000 = 6.25 × 10^-5 cm = 625 nm."
          },
          {
            "question": "A diffraction grating has 600 lines per mm. Calculate the highest spectral order that can be observed for light of wavelength λ = 500 nm.",
            "given": "N = 600 lines/mm = 600 × 10^3 lines/m => (a + b) = 1 / (6 × 10^5) m = 1.667 × 10^-6 m, λ = 500 × 10^-9 m",
            "formula": "n_max = (a + b) sin(90°) / λ = (a + b) / λ",
            "solution": "n_max = (1.667 × 10^-6 m) / (500 × 10^-9 m) = 1667 / 500 = 3.33 => Highest integer order is n_max = 3."
          },
          {
            "question": "Calculate the thickness of a calcite Half-Wave plate for Sodium light (λ = 589 nm), given μ_o = 1.658 and μ_e = 1.486.",
            "given": "λ = 589 nm = 589 × 10^-9 m, μ_o = 1.658, μ_e = 1.486 => |μ_o - μ_e| = 0.172",
            "formula": "t_HWP = λ / (2 |μ_o - μ_e|)",
            "solution": "t_HWP = (589 × 10^-9 m) / (2 × 0.172) = (589 × 10^-9) / 0.344 = 1.712 × 10^-6 m = 1.712 μm."
          }
        ]
      }
    },
    {
      "id": "physics-u2",
      "unitNumber": "Unit II",
      "title": "Lasers and Fiber Optics",
      "description": "Understand stimulated emission, population inversion, Ruby laser, He-Ne laser, semiconductor laser, fiber optics, total internal reflection, acceptance angle, and numerical aperture.",
      "topics": [
        "Properties of laser beams (Monochromaticity, Coherence, Directionality, High Intensity)",
        "Spontaneous and Stimulated emission, Einstein’s A and B coefficients",
        "Population inversion and Pumping mechanisms",
        "Solid-state Ruby laser (Three-level laser system)",
        "Gas Helium-Neon (He-Ne) laser (Four-level laser system)",
        "Semiconductor diode laser",
        "Laser applications in engineering and medicine",
        "Optical fiber principle: Total Internal Reflection (TIR)",
        "Acceptance angle and Numerical Aperture (NA)",
        "Step-index and Graded-index (GRIN) optical fibers",
        "Signal attenuation and dispersion in optical fibers"
      ],
      "lessons": [
        {
          "id": "phy-u2-l1",
          "unitId": "physics-u2",
          "subjectId": "applied-physics",
          "title": "Laser Principles & He-Ne Laser",
          "durationMinutes": 25,
          "difficulty": "Beginner",
          "prerequisites": [
            "Atomic energy levels",
            "Photons"
          ],
          "realLifeQuestion": {
            "en": "How can a laser pointer beam hit the surface of the Moon without scattering, while an ordinary flashlight spreads out within a few meters?",
            "hinglish": "Laser beam itni door tak bina faile (spread hue) kaise chali jaati hai jabki ordinary torch kuch hi meter me phail jaati hai?",
            "hi": "लेजर किरण बिना फैले इतनी दूर तक कैसे चली जाती है जबकि साधारण टॉर्च कुछ ही दूरी में बिखर जाती है?"
          },
          "simpleExplanation": {
            "en": "An ordinary bulb emits light photons at random times in all directions like a noisy crowd. A laser acts like an army marching in complete synchronization. Through stimulated emission, one incoming photon triggers an excited atom to emit an identical twin photon with the exact same phase, frequency, and direction. Mirrored cavities amplify this into an intense, coherent beam.",
            "hinglish": "Normal bulb me photons alag-alag disha me bina kisi coordination ke nikalte hain. Laser me stimulated emission hota hai jisme ek photon aakar excited atom ko trigger karta hai ki wo bilkul waisa hi identical photon emit kare. Dono photon perfectly synced hote hain aur mirrors ke beech reflect hokar beam bohot powerful ho jaati hai.",
            "hi": "साधारण बल्ब से प्रकाश के फोटॉन सभी दिशाओं में बेतरतीब निकलते हैं। लेजर में उद्दीपित उत्सर्जन (Stimulated Emission) होता है जहाँ सभी फोटॉन एक ही दिशा, आवृत्ति और कला में निकलते हैं।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of an echo chamber where singing a single pure note causes hundreds of tuning forks to vibrate and amplify that exact sound thousands of times.",
              "hinglish": "Socho ek kamre me bohot saare tuning forks rakhe hain aur ek awaaz aane par saare ek sath vibrate karke awaaz ko laakh guna bada dete hain.",
              "hi": "जैसे एक हॉल में सभी लोग एक ही सुर में गाएं तो ध्वनि अत्यंत शक्तिशाली हो जाती है।"
            },
            "limitations": {
              "en": "Acoustic echoes lose energy quickly to air friction, whereas optical laser cavities sustain gain through continuous external pumping.",
              "hinglish": "Sound jaldi fade ho jaati hai jabki laser me continuous pumping energy di jaati hai.",
              "hi": "ध्वनि जल्दी क्षीण होती है जबकि लेजर में पंपिंग द्वारा ऊर्जा लगातार दी जाती है।"
            }
          },
          "terminology": [
            {
              "term": "Stimulated Emission",
              "definition": {
                "en": "Process where an incident photon of energy hν induces an excited electron to drop to a lower energy state, releasing a second identical photon.",
                "hinglish": "Jab ek photon excited atom ko trigger karke bilkul identical doosra photon release karwata hai.",
                "hi": "जब एक आपतित फोटॉन किसी उत्तेजित परमाणु को प्रेरित करके समान ऊर्जा और कला का दूसरा फोटॉन उत्सर्जित कराता है।"
              }
            },
            {
              "term": "Population Inversion",
              "definition": {
                "en": "The non-equilibrium condition where the number of atoms in a higher excited (metastable) energy state exceeds those in the ground state (N2 > N1).",
                "hinglish": "Normal se ulti condition jisme higher energy level me ground level se zyada atoms jama ho jaate hain (N2 > N1).",
                "hi": "वह स्थिति जिसमें उच्च ऊर्जा स्तर में परमाणुओं की संख्या निम्न स्तर से अधिक हो जाती है (N2 > N1)।"
              }
            }
          ],
          "visualType": "3d-laser",
          "visualData": {
            "laserType": "he-ne",
            "wavelength": 632.8
          },
          "underlyingPrinciple": {
            "en": "In a He-Ne laser (632.8 nm red output), electrical discharge excites Helium atoms into metastable states (20.61 eV). These He atoms collide with ground-state Neon atoms and transfer energy resonantly, creating population inversion in Neon (3s to 2p transition). Stimulated emission between parallel mirrors generates the continuous red laser beam.",
            "hinglish": "He-Ne laser me electric discharge se pehle Helium atoms excite hote hain. Fir wo Neon atoms se takra kar energy transfer karte hain (resonant energy transfer). Neon atoms me population inversion hota hai aur 632.8 nm ki red laser beam nikalti hai.",
            "hi": "हीलियम-नियॉन लेजर में विद्युत विसर्जन द्वारा हीलियम परमाणु उत्तेजित होकर नियॉन परमाणुओं को ऊर्जा स्थानांतरित करते हैं, जिससे नियॉन में समष्टि प्रतिलोमन (Population Inversion) होता है और 632.8 nm की लाल लेजर उत्पन्न होती है।"
          },
          "formulaLogic": {
            "formula": "\\frac{N_2}{N_1} = e^{-\\frac{E_2 - E_1}{kT}}",
            "description": {
              "en": "Boltzmann distribution law showing that in thermal equilibrium, N2 is always less than N1. External pumping is required to achieve N2 > N1.",
              "hinglish": "Boltzmann law ke mutabik normal temperature par N2 hamesha N1 se chota hota hai. Population inversion ke liye pumping zaroori hai.",
              "hi": "बोल्ट्ज़मान वितरण नियम के अनुसार साम्यावस्था में N2 सदैव N1 से कम होता है।"
            },
            "symbols": [
              {
                "symbol": "N_2, N_1",
                "meaning": "Number of atoms in state 2 and state 1",
                "unit": "Dimensionless"
              },
              {
                "symbol": "E_2 - E_1",
                "meaning": "Energy difference between levels (hν)",
                "unit": "Joules (J) or eV"
              },
              {
                "symbol": "k",
                "meaning": "Boltzmann constant = 1.38 × 10^-23",
                "unit": "J/K"
              },
              {
                "symbol": "T",
                "meaning": "Absolute temperature",
                "unit": "Kelvin (K)"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A He-Ne laser emits red light of wavelength 632.8 nm with an optical output power of 5 mW. Calculate the number of photons emitted per second.",
              "hinglish": "Ek He-Ne laser 632.8 nm ki red light emit karti hai jiski power 5 mW hai. Har second kitne photons emit ho rahe hain?",
              "hi": "एक हीलियम-नियॉन लेजर 632.8 nm तरंगदैर्ध्य और 5 mW शक्ति का प्रकाश उत्सर्जित करती है। प्रति सेकंड उत्सर्जित फोटॉनों की संख्या ज्ञात करें।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate the energy of a single photon",
                "explanation": {
                  "en": "E = hν = hc / λ. Here h = 6.626 × 10^-34 J·s, c = 3 × 10^8 m/s, λ = 632.8 × 10^-9 m.",
                  "hinglish": "Ek photon ki energy E = hc / λ hoti hai.",
                  "hi": "एक फोटॉन की ऊर्जा E = hc / λ होती है।"
                },
                "math": "E = \\frac{6.626 \\times 10^{-34} \\times 3 \\times 10^8}{632.8 \\times 10^{-9}} = 3.142 \\times 10^{-19}\\,\\text{J}"
              },
              {
                "stepNumber": 2,
                "title": "Calculate photon emission rate: n = Power / Energy per photon",
                "explanation": {
                  "en": "Power P = 5 mW = 5 × 10^-3 W (Joules/sec). Rate n = P / E.",
                  "hinglish": "Number of photons per sec = Total Power / Ek photon ki energy.",
                  "hi": "फोटॉनों की संख्या n = P / E।"
                },
                "math": "n = \\frac{5 \\times 10^{-3}\\,\\text{J/s}}{3.142 \\times 10^{-19}\\,\\text{J}} \\approx 1.59 \\times 10^{16}\\,\\text{photons/second}"
              }
            ],
            "finalAnswer": "The laser emits approximately 1.59 × 10^16 photons every second."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Believing that a two-level atomic system can achieve steady laser action.",
                "hinglish": "Yeh sochna ki sirf do energy levels se laser ban sakti hai.",
                "hi": "यह सोचना कि मात्र दो ऊर्जा स्तरों से लेजर क्रिया संभव है।"
              },
              "correction": {
                "en": "In a 2-level system, the probability of stimulated absorption equals stimulated emission (B12 = B21). The maximum population in state 2 can only reach 50% (saturation), so population inversion (N2 > N1) can never be maintained. At least 3 or 4 levels are required.",
                "hinglish": "2-level system me absorption aur emission barabar hote hain, isliye N2 kabhi N1 se bada nahi ho sakta. Laser ke liye minimum 3 ya 4 levels chahiye.",
                "hi": "दो-स्तरीय प्रणाली में N2 कभी N1 से अधिक नहीं हो सकता। लेजर हेतु न्यूनतम 3 या 4 स्तर आवश्यक हैं।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "phy-p4",
              "level": "Beginner",
              "question": {
                "en": "What is the role of Helium in a Helium-Neon (He-Ne) gas laser?",
                "hinglish": "He-Ne laser me Helium gas ka kya role hota hai?",
                "hi": "हीलियम-नियॉन लेजर में हीलियम गैस की क्या भूमिका है?"
              },
              "options": [
                "To efficiently absorb electrical discharge energy and transfer it to Neon atoms via resonance collisions",
                "To emit the red laser photons directly",
                "To cool down the glass tube",
                "To act as the reflecting mirror"
              ],
              "correctAnswer": 0,
              "explanation": {
                "en": "Helium atoms are easily excited by electron collisions to metastable states matching Neon levels, transferring their energy to Neon which acts as the active lasing medium.",
                "hinglish": "Helium atoms discharge se excite hote hain aur resonant collision se Neon atoms ko energy dekar unme population inversion karwate hain.",
                "hi": "हीलियम परमाणु विसर्जन ऊर्जा अवशोषित कर संघट्ट द्वारा नियॉन परमाणुओं को उत्तेजित करते हैं।"
              },
              "hint": {
                "en": "Helium pumps Neon; Neon emits the light.",
                "hinglish": "Helium pump karta hai, Neon light emit karta hai.",
                "hi": "हीलियम पंपिंग में सहायता करता है, प्रकाश नियॉन देता है।"
              }
            }
          ],
          "summary": {
            "en": [
              "LASER: Light Amplification by Stimulated Emission of Radiation.",
              "Key characteristics: High coherence, high monochromaticity, negligible divergence, high intensity.",
              "Population inversion (N2 > N1) is essential for gain to exceed loss.",
              "He-Ne laser is a 4-level continuous gas laser emitting at 632.8 nm."
            ],
            "hinglish": [
              "LASER = Light Amplification by Stimulated Emission of Radiation.",
              "Khaasiyat: Coherent, monochromatic, directional aur high intensity.",
              "Population inversion (N2 > N1) laser ke liye mandatory hai.",
              "He-Ne laser ek 4-level continuous gas laser hai (632.8 nm)."
            ],
            "hi": [
              "लेजर: विकिरण के उद्दीपित उत्सर्जन द्वारा प्रकाश प्रवर्धन।",
              "विशेषताएं: उच्च कला-संबद्धता, एकवर्णी, उच्च तीव्रता और न्यूनतम फैलाव।",
              "समष्टि प्रतिलोमन (N2 > N1) लेजर के लिए अनिवार्य शर्त है।",
              "He-Ne लेजर 632.8 nm पर सतत लाल प्रकाश उत्सर्जित करता है।"
            ]
          },
          "quiz": [
            {
              "id": "phy-q4",
              "question": {
                "en": "What is the relationship between Einstein’s coefficients of spontaneous emission (A21) and stimulated emission (B21)?",
                "hinglish": "Einstein ke coefficients A21 aur B21 ke beech kya relation hai?",
                "hi": "आइंस्टीन गुणांकों A21 और B21 के मध्य क्या संबंध है?"
              },
              "options": [
                "A21 / B21 = (8π h ν³) / c³",
                "A21 / B21 = h ν / c",
                "A21 = B21",
                "A21 / B21 = c³ / (8π h ν³)"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "The ratio A21 / B21 = 8πhν³ / c³ shows that spontaneous emission dominates heavily at high frequencies (like X-rays), which is why optical and microwave lasers are much easier to build than X-ray lasers.",
                "hinglish": "Ratio A21 / B21 = 8πhν³ / c³ hota hai jo frequency ke cube (ν³) ke directly proportional hai.",
                "hi": "A21 / B21 = 8πhν³ / c³ होता है, जिससे उच्च आवृत्ति पर स्वतः उत्सर्जन प्रभावी हो जाता है।"
              },
              "hint": {
                "en": "Notice the cubic dependence on frequency ν³.",
                "hinglish": "Frequency ki power 3 (ν³) wala option dekho.",
                "hi": "आवृत्ति के घन (ν³) पर निर्भरता देखें।"
              }
            }
          ]
        },
        {
          "id": "phy-u2-l2",
          "unitId": "physics-u2",
          "subjectId": "applied-physics",
          "title": "Fiber Optics & Numerical Aperture",
          "durationMinutes": 25,
          "difficulty": "Beginner",
          "prerequisites": [
            "Refraction",
            "Critical angle"
          ],
          "realLifeQuestion": {
            "en": "How does high-speed fiber-optic internet carry terabits of YouTube videos and video calls across oceans through a thin strand of glass no thicker than a human hair?",
            "hinglish": "Baal jitne patle kaanch ke taar me se hazaron terabytes data samandar paar kaise chala jaata hai?",
            "hi": "बाल जितनी पतली कांच की तार से हजारों टेराबाईट डेटा समुद्र पार कैसे स्थानांतरित होता है?"
          },
          "simpleExplanation": {
            "en": "An optical fiber has a dense glass core surrounded by a slightly less dense glass cladding. Light is injected at an angle such that whenever it strikes the core-cladding boundary, the angle exceeds the critical angle. The light undergoes 100% Total Internal Reflection (TIR), bouncing thousands of times along the curved fiber with almost zero energy loss.",
            "hinglish": "Optical fiber ke andar ek high refractive index ka core hota hai aur bahar kam refractive index ka cladding. Jab light andar enter karti hai toh boundary par critical angle se bade angle par takrati hai. Isse 100% Total Internal Reflection (TIR) hota hai aur light bina bahar nikle taar ke andar ghoomti hui aage badhti rehti hai.",
            "hi": "ऑप्टिकल फाइबर के अंदर उच्च अपवर्तनांक का कोर और बाहर कम अपवर्तनांक का क्लैडिंग होता है। प्रकाश पूर्ण आंतरिक परावर्तन (TIR) द्वारा कोर के अंदर ही बार-बार परावर्तित होकर आगे बढ़ता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine sliding down an enclosed spiral water slide lined with slippery mirrors. Every time you bump the wall, you bounce right back into the center without stopping.",
              "hinglish": "Ek aisi pani ki pipe imagine karo jiske andar aine (mirrors) lage hain, ball deewar se takra kar bina ruke aage nikal jaati hai.",
              "hi": "जैसे एक शीशे से ढकी नली में गेंद दीवारों से टकराकर बिना रुके आगे बढ़ती जाती है।"
            },
            "limitations": {
              "en": "Normal mirrors absorb 5-10% of light on every bounce, whereas Total Internal Reflection reflects 100.00% of light with zero transmission loss.",
              "hinglish": "Normal mirror har bounce me light sokhta hai, par TIR me 100% light reflect hoti hai bina kisi loss ke.",
              "hi": "साधारण दर्पण प्रकाश सोखता है, जबकि पूर्ण आंतरिक परावर्तन में 100% परावर्तन होता है।"
            }
          },
          "terminology": [
            {
              "term": "Total Internal Reflection (TIR)",
              "definition": {
                "en": "The complete reflection of a light ray back into the denser medium when angle of incidence exceeds critical angle θ_c = sin^-1(n2 / n1).",
                "hinglish": "Denser medium se aane wali light ka 100% wapas usi medium me laut aana jab angle critical angle se bada ho.",
                "hi": "जब आपतन कोण क्रांतिक कोण से अधिक हो तो प्रकाश का सघन माध्यम में ही पूर्णतः परावर्तित हो जाना।"
              }
            },
            {
              "term": "Numerical Aperture (NA)",
              "definition": {
                "en": "A dimensionless figure of merit representing the light-gathering capacity of an optical fiber: NA = √(n1² - n2²).",
                "hinglish": "Optical fiber ki light gather karne ki ability: NA = √(n1² - n2²).",
                "hi": "ऑप्टिकल फाइबर की प्रकाश ग्रहण करने की क्षमता का माप: NA = √(n1² - n2²)।"
              }
            },
            {
              "term": "Acceptance Angle (θ_a)",
              "definition": {
                "en": "The maximum angle at the fiber entrance within which light can be trapped and guided by TIR: θ_a = sin^-1(NA).",
                "hinglish": "Bahari angle jiske andar aane wali saari light fiber ke andar trap hokar travel karegi.",
                "hi": "फाइबर के मुहाने पर वह अधिकतम आपतन कोण जिस पर आपतित प्रकाश पूर्ण आंतरिक परावर्तन कर सके।"
              }
            }
          ],
          "visualType": "3d-laser",
          "visualData": {
            "fiberMode": "tir-propagation",
            "coreIndex": 1.5,
            "claddingIndex": 1.46
          },
          "underlyingPrinciple": {
            "en": "For light to propagate inside an optical fiber: (1) Core refractive index n1 must be strictly greater than cladding refractive index n2 (n1 > n2). (2) Angle of incidence inside core must be θ > θ_c. (3) Light from outside (air n0 = 1) must enter within the acceptance cone: sin(θ_a) = √(n1² - n2²).",
            "hinglish": "Fiber me light chalne ke 3 niyam: (1) Core ka refractive index (n1) cladding (n2) se bada hona chahiye (n1 > n2). (2) Core ke andar angle critical angle se bada hona chahiye. (3) Entrance par light acceptance cone ke andar aani chahiye: NA = √(n1² - n2²).",
            "hi": "फाइबर में प्रकाश संचरण की शर्तें: (1) n1 > n2 (कोर का अपवर्तनांक क्लैडिंग से अधिक हो)। (2) आंतरिक कोण क्रांतिक कोण से अधिक हो। (3) प्रकाश स्वीकरण शंकु के भीतर प्रवेश करे।"
          },
          "formulaLogic": {
            "formula": "\\text{NA} = \\sqrt{n_1^2 - n_2^2} = n_1 \\sqrt{2\\Delta}, \\quad \\theta_a = \\sin^{-1}(\\text{NA})",
            "description": {
              "en": "Numerical Aperture (NA) and Acceptance Angle (θ_a) in terms of core refractive index n1, cladding index n2, and fractional index difference Δ = (n1 - n2) / n1.",
              "hinglish": "Numerical Aperture aur Acceptance Angle nikalne ka standard formula.",
              "hi": "संख्यात्मक द्वारक और स्वीकरण कोण का मूल सूत्र।"
            },
            "symbols": [
              {
                "symbol": "n_1",
                "meaning": "Refractive index of core (typically ~1.50)",
                "unit": "Dimensionless"
              },
              {
                "symbol": "n_2",
                "meaning": "Refractive index of cladding (typically ~1.46)",
                "unit": "Dimensionless"
              },
              {
                "symbol": "NA",
                "meaning": "Numerical Aperture",
                "unit": "Dimensionless (0 to 1)"
              },
              {
                "symbol": "θ_a",
                "meaning": "Acceptance angle in air",
                "unit": "degrees (°)"
              },
              {
                "symbol": "Δ",
                "meaning": "Fractional refractive index change = (n1 - n2) / n1",
                "unit": "Dimensionless"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "An optical fiber has a core of refractive index n1 = 1.50 and a cladding of refractive index n2 = 1.45. Calculate (a) Critical angle at core-cladding interface, (b) Numerical Aperture (NA), and (c) Acceptance angle.",
              "hinglish": "Ek optical fiber ke core ka n1 = 1.50 aur cladding ka n2 = 1.45 hai. (a) Critical angle θ_c, (b) Numerical Aperture (NA), aur (c) Acceptance angle θ_a nikalo.",
              "hi": "एक ऑप्टिकल फाइबर में n1 = 1.50 तथा n2 = 1.45 है। (a) क्रांतिक कोण, (b) संख्यात्मक द्वारक (NA), तथा (c) स्वीकरण कोण ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate Critical Angle θ_c",
                "explanation": {
                  "en": "θ_c = sin^-1(n2 / n1) = sin^-1(1.45 / 1.50) = sin^-1(0.9667) ≈ 75.16°.",
                  "hinglish": "θ_c = sin^-1(1.45 / 1.50) = 75.16°.",
                  "hi": "क्रांतिक कोण θ_c = sin^-1(1.45 / 1.50) = 75.16°।"
                },
                "math": "\\theta_c = \\sin^{-1}\\left(\\frac{1.45}{1.50}\\right) = 75.16^\\circ"
              },
              {
                "stepNumber": 2,
                "title": "Calculate Numerical Aperture (NA)",
                "explanation": {
                  "en": "NA = √(n1² - n2²) = √(1.50² - 1.45²) = √(2.25 - 2.1025) = √0.1475 ≈ 0.384.",
                  "hinglish": "NA = √(1.50² - 1.45²) = √0.1475 ≈ 0.384.",
                  "hi": "NA = √(1.50² - 1.45²) = √0.1475 ≈ 0.384।"
                },
                "math": "\\text{NA} = \\sqrt{1.50^2 - 1.45^2} = \\sqrt{0.1475} \\approx 0.384"
              },
              {
                "stepNumber": 3,
                "title": "Calculate Acceptance Angle θ_a",
                "explanation": {
                  "en": "θ_a = sin^-1(NA) = sin^-1(0.384) ≈ 22.58°.",
                  "hinglish": "θ_a = sin^-1(0.384) = 22.58°.",
                  "hi": "स्वीकरण कोण θ_a = sin^-1(0.384) = 22.58°।"
                },
                "math": "\\theta_a = \\sin^{-1}(0.384) \\approx 22.58^\\circ"
              }
            ],
            "finalAnswer": "Critical Angle = 75.16°, Numerical Aperture = 0.384, Acceptance Angle = 22.58°."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Putting n1 < n2 (cladding denser than core).",
                "hinglish": "Cladding ko core se zyada dense bana dena.",
                "hi": "क्लैडिंग का अपवर्तनांक कोर से अधिक मान लेना।"
              },
              "correction": {
                "en": "Total internal reflection can ONLY occur when light travels from a DENSER medium to a RARER medium. Therefore, core refractive index n1 MUST ALWAYS be strictly greater than cladding refractive index n2 (n1 > n2).",
                "hinglish": "TIR sirf tabhi hota hai jab light denser se rarer medium me jaye. Isliye core (n1) hamesha cladding (n2) se bada hona chahiye.",
                "hi": "पूर्ण आंतरिक परावर्तन केवल सघन से विरल माध्यम में जाने पर ही संभव है, अतः सदैव n1 > n2 होना चाहिए।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "phy-p5",
              "level": "Beginner",
              "question": {
                "en": "In a graded-index (GRIN) fiber, how does the refractive index vary?",
                "hinglish": "Graded-index (GRIN) fiber me refractive index kaise badalta hai?",
                "hi": "ग्रेडेड-इंडेक्स (GRIN) फाइबर में अपवर्तनांक किस प्रकार बदलता है?"
              },
              "options": [
                "Decreases parabolically from the center axis outward towards the cladding",
                "Increases linearly towards the cladding",
                "Remains strictly constant everywhere",
                "Changes randomly"
              ],
              "correctAnswer": 0,
              "explanation": {
                "en": "In GRIN fibers, the refractive index is maximum at the center axis and decreases smoothly (parabolically) towards the boundary. This causes light rays to bend continuously in sinusoidal paths, minimizing modal dispersion.",
                "hinglish": "Center me refractive index sabse zyada hota hai aur bahar ki taraf smoothly kam hota hai, jisse light curved raste par chalti hai aur dispersion kam hota hai.",
                "hi": "अक्ष पर अपवर्तनांक सर्वाधिक होता है और बाहर की ओर परवलयाकार रूप से घटता है जिससे विक्षेपण (dispersion) घटता है।"
              },
              "hint": {
                "en": "Think of \"graded\" meaning smooth gradual transition, not a sharp step.",
                "hinglish": "Graded ka matlab gradual curve.",
                "hi": "क्रमिक परिवर्तन पर विचार करें।"
              }
            }
          ],
          "summary": {
            "en": [
              "Optical fibers guide light via Total Internal Reflection (TIR) in the core (n1 > n2).",
              "Numerical Aperture: NA = √(n1² - n2²), measures light collection efficiency.",
              "Acceptance angle: θ_a = sin^-1(NA).",
              "Single-mode fibers eliminate intermodal dispersion and are preferred for long-haul telecom."
            ],
            "hinglish": [
              "Optical fiber TIR ke zariye light guide karta hai (n1 > n2).",
              "NA = √(n1² - n2²), fiber ki light collect karne ki power batata hai.",
              "Acceptance angle = sin^-1(NA).",
              "Single-mode fiber lambi doori ke internet communication me use hota hai."
            ],
            "hi": [
              "ऑप्टिकल फाइबर कोर में पूर्ण आंतरिक परावर्तन (n1 > n2) द्वारा प्रकाश संचरित करता है।",
              "संख्यात्मक द्वारक NA = √(n1² - n2²) प्रकाश एकत्र करने की क्षमता दर्शाता है।",
              "स्वीकरण कोण θ_a = sin^-1(NA) होता है।",
              "सिंगल मोड फाइबर में अंतरा-मोडल विक्षेपण नहीं होता और यह लंबी दूरी के लिए श्रेष्ठ है।"
            ]
          },
          "quiz": [
            {
              "id": "phy-q5",
              "question": {
                "en": "What causes signal attenuation in optical fibers at 1390 nm wavelength?",
                "hinglish": "1390 nm wavelength par optical fiber me signal loss kyu hota hai?",
                "hi": "ऑप्टिकल फाइबर में 1390 nm तरंगदैर्ध्य पर सिग्नल क्षीणन का मुख्य कारण क्या है?"
              },
              "options": [
                "Absorption peak due to hydroxyl (OH⁻) ion impurities in silica glass",
                "Rayleigh scattering",
                "Micro-bending losses",
                "Speed of light limitation"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "Trace water moisture in silica glass introduces OH⁻ radicals that have a fundamental vibrational absorption overtone near 1390 nm, known as the \"water peak\". Low-water-peak fibers have been engineered to eliminate this loss.",
                "hinglish": "Glass me bachi hui thodi si moisture (OH⁻ ions) 1390 nm par light absorb kar leti hai jise water peak kehte hain.",
                "hi": "सिलिका कांच में उपस्थित जल के हाइड्रॉक्सिल (OH⁻) आयनों द्वारा अवशोषण के कारण।"
              },
              "hint": {
                "en": "Think of water molecules trapped in the glass.",
                "hinglish": "Glass ke andar trapped paani ke molecules.",
                "hi": "कांच में जल अशुद्धि पर विचार करें।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Unit II Lasers & Fiber Optics Summary: Lasers provide monochromatic, coherent, intense, and directional beams via stimulated emission between atomic states. Pumping creates population inversion (N2 > N1) in 3-level (Ruby) and 4-level (He-Ne) systems. Fiber optics utilizes Total Internal Reflection (n1 > n2) with critical angle θ_c = sin^-1(n2/n1). Acceptance angle θ_a = sin^-1(NA) defines the acceptance cone, where Numerical Aperture NA = √(n1² - n2²). Fibers are classified as single-mode or multi-mode, and step-index or graded-index (GRIN).",
          "hinglish": "Unit II Lasers & Fiber Optics Revision: Lasers stimulated emission ke zariye highly coherent aur monochromatic light generate karti hain. Population inversion (N2 > N1) pumping se achieve hota hai. He-Ne laser 4-level system hai jo 632.8 nm emit karta hai. Fiber optics Total Internal Reflection (TIR) par chalti hai jisme core ka refractive index cladding se zyada hota hai (n1 > n2). NA = √(n1² - n2²) aur θ_a = sin^-1(NA) light collection capability measure karte hain.",
          "hi": "इकाई II लेजर और फाइबर ऑप्टिक्स सारांश: लेजर उद्दीपित उत्सर्जन द्वारा एकवर्णी, कला-संबद्ध और तीव्र किरण पुंज उत्पन्न करता है। समष्टि प्रतिलोमन (N2 > N1) अनिवार्य है। हीलियम-नियॉन लेजर 632.8 nm पर कार्य करता है। फाइबर ऑप्टिक्स पूर्ण आंतरिक परावर्तन (n1 > n2) के सिद्धांत पर कार्य करता है। संख्यात्मक द्वारक NA = √(n1² - n2²) और स्वीकरण कोण θ_a = sin^-1(NA) होता है।"
        },
        "shortNotes": [
          {
            "topic": "Einstein Relations",
            "content": {
              "en": "B12 = B21 (stimulated absorption probability equals stimulated emission probability). A21 / B21 = 8πhν³ / c³.",
              "hinglish": "B12 = B21 hota hai aur A21/B21 = 8πhν³/c³.",
              "hi": "उद्दीपित अवशोषण और उत्सर्जन की प्रायिकता समान होती है (B12 = B21)।"
            }
          },
          {
            "topic": "Ruby vs He-Ne Laser",
            "content": {
              "en": "Ruby laser: 3-level solid-state, pulsed output at 694.3 nm, optical xenon flash pumping. He-Ne laser: 4-level gas, continuous output at 632.8 nm, electric discharge pumping.",
              "hinglish": "Ruby: 3-level pulsed (694.3 nm). He-Ne: 4-level continuous (632.8 nm).",
              "hi": "रूबी लेजर स्पंदित (694.3 nm) है जबकि हीलियम-नियॉन लेजर सतत (632.8 nm) है।"
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Numerical Aperture",
            "formula": "\\text{NA} = \\sqrt{n_1^2 - n_2^2} = n_1 \\sqrt{2\\Delta}",
            "units": "Dimensionless",
            "note": "Light gathering power"
          },
          {
            "name": "Acceptance Angle",
            "formula": "\\theta_a = \\sin^{-1}(\\text{NA})",
            "units": "Degrees (°)",
            "note": "Max entry angle in air"
          },
          {
            "name": "Critical Angle",
            "formula": "\\theta_c = \\sin^{-1}\\left(\\frac{n_2}{n_1}\\right)",
            "units": "Degrees (°)",
            "note": "TIR threshold"
          },
          {
            "name": "Fractional Index Change",
            "formula": "\\Delta = \\frac{n_1 - n_2}{n_1}",
            "units": "Dimensionless",
            "note": "Typically 0.01 to 0.03"
          }
        ],
        "mindMap": [
          {
            "node": "Lasers & Fiber Optics",
            "children": [
              "Laser Fundamentals",
              "Laser Types (Ruby, He-Ne, Semiconductor)",
              "Optical Fiber Waveguides",
              "Optical Communication"
            ]
          },
          {
            "node": "Laser Fundamentals",
            "children": [
              "Absorption",
              "Spontaneous Emission",
              "Stimulated Emission",
              "Population Inversion (N2 > N1)"
            ]
          },
          {
            "node": "Optical Fibers",
            "children": [
              "Total Internal Reflection",
              "Numerical Aperture (NA)",
              "Step vs Graded Index",
              "Single vs Multi-mode"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Step-Index Fiber",
            "conceptB": "Graded-Index (GRIN) Fiber",
            "comparisonPoints": [
              {
                "feature": "Core Index",
                "a": "Uniform refractive index n1 throughout core, steps down sharply at cladding",
                "b": "Refractive index is highest at center axis and decreases smoothly (parabolically)"
              },
              {
                "feature": "Light Trajectory",
                "a": "Zig-zag reflection at boundary",
                "b": "Smooth continuous sinusoidal refraction"
              },
              {
                "feature": "Intermodal Dispersion",
                "a": "High (different rays take different travel times)",
                "b": "Very low (outer rays travel faster in lower index glass)"
              },
              {
                "feature": "Bandwidth",
                "a": "Lower bandwidth (~20-50 MHz·km)",
                "b": "High bandwidth (>1 GHz·km)"
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "What is the full form of LASER?",
            "back": "Light Amplification by Stimulated Emission of Radiation."
          },
          {
            "front": "Why is a 4-level laser more efficient than a 3-level laser?",
            "back": "Because the lower laser level is above the ground state and virtually empty at room temperature, requiring much less pump power to achieve population inversion."
          },
          {
            "front": "What is the condition for Total Internal Reflection?",
            "back": "Light must travel from denser to rarer medium (n1 > n2) and angle of incidence must exceed critical angle θ_c."
          },
          {
            "front": "What is the wavelength of a standard He-Ne laser?",
            "back": "632.8 nm (Red light)."
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "What is meant by population inversion and why is it essential for lasing?",
            "answer": "It is the non-equilibrium state where the population of atoms in a higher excited energy state exceeds that of the lower state (N2 > N1). It ensures that stimulated emission dominates over absorption."
          }
        ],
        "longAnswerQuestions": [
          {
            "question": "Describe the construction and working of a He-Ne gas laser with suitable energy level diagram.",
            "outline": "1. Introduction and specification (4-level gas laser, 632.8 nm).\n2. Tube construction (He:Ne ratio 10:1, Brewster windows, mirrors).\n3. Pumping mechanism (electron impact of He atoms).\n4. Resonant energy transfer to Neon 3s and 2s levels.\n5. Population inversion in Neon.\n6. Transitions (3s to 2p produces 632.8 nm red laser).\n7. De-excitation to ground state via tube wall collisions."
          }
        ],
        "numericalPractice": [
          {
            "question": "An optical fiber has NA = 0.25 and core index n1 = 1.48. Find the cladding refractive index n2.",
            "given": "NA = 0.25, n1 = 1.48",
            "formula": "n_2 = \\sqrt{n_1^2 - \\text{NA}^2}",
            "solution": "n2 = √(1.48² - 0.25²) = √(2.1904 - 0.0625) = √2.1279 ≈ 1.4587."
          }
        ]
      }
    },
    {
      "id": "physics-u3",
      "unitNumber": "Unit III",
      "title": "Quantum Physics",
      "description": "Explore the breakdown of classical physics, Planck’s quantum hypothesis, photoelectric effect, de Broglie matter waves, Davisson-Germer experiment, wave packets, and Heisenberg uncertainty principle.",
      "topics": [
        "Limitations of classical physics (Blackbody radiation, Photoelectric effect)",
        "Planck’s quantum hypothesis and energy quantization (E = nhν)",
        "Photoelectric effect and Einstein’s photoelectric equation",
        "de Broglie hypothesis and matter waves (λ = h/p)",
        "Wave-particle duality of radiation and matter",
        "Davisson–Germer experiment (Electron diffraction)",
        "Wave packets, phase velocity (v_p), and group velocity (v_g)",
        "Relation between group velocity and particle velocity",
        "Heisenberg’s uncertainty principle (Δx·Δp ≥ ℏ/2)",
        "Physical significance and applications of uncertainty principle"
      ],
      "lessons": [
        {
          "id": "phy-u3-l1",
          "unitId": "physics-u3",
          "subjectId": "applied-physics",
          "title": "Photoelectric Effect & Matter Waves",
          "durationMinutes": 25,
          "difficulty": "Beginner",
          "prerequisites": [
            "Photons",
            "Kinetic energy"
          ],
          "realLifeQuestion": {
            "en": "Why does shining an ultra-bright red spotlight on a metal sheet release zero electrons, but a faint, dim ultraviolet light instantly knocks electrons out?",
            "hinglish": "Bohot tezz red light metal par marne par ek bhi electron kyu nahi nikalta, jabki halki si dim UV light turant electrons nikal deti hai?",
            "hi": "धातु पर अत्यधिक तीव्र लाल प्रकाश डालने पर भी इलेक्ट्रॉन क्यों नहीं निकलते, जबकि हल्की पराबैंगनी (UV) रोशनी तुरंत इलेक्ट्रॉन निकाल देती है?"
          },
          "simpleExplanation": {
            "en": "Light consists of discrete energy packets called photons. Each photon has energy E = hν. An electron in a metal needs a minimum threshold energy (the work function Φ) to break free. A red photon has low frequency and lacks the energy to liberate an electron no matter how many red photons arrive. A UV photon carries high frequency and enough punch to eject an electron in a single one-on-one collision.",
            "hinglish": "Light chhote packets me aati hai jinhe photons kehte hain (E = hν). Metal ke electron ko bahar nikalne ke liye minimum energy (Work Function Φ) chahiye hoti hai. Red light ke photon me dam kam hota hai, chahe kitni bhi bright ho. UV light ke har photon me kafi energy hoti hai jo aate hi electron ko bahar fek deti hai.",
            "hi": "प्रकाश ऊर्जा के छोटे पैकेटों (फोटॉन) से मिलकर बना है जिनकी ऊर्जा E = hν होती है। धातु से इलेक्ट्रॉन निकालने के लिए न्यूनतम ऊर्जा (कार्यफलन Φ) आवश्यक है। लाल प्रकाश के फोटॉन में यह ऊर्जा नहीं होती, जबकि UV फोटॉन में पर्याप्त ऊर्जा होती है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine a vending machine that costs $5 for a soda. If you throw a thousand $1 bills one by one into an unreachable slot, nothing happens. But insert one single $5 bill, and the soda drops instantly.",
              "hinglish": "Ek vending machine 50 rupaye ka coin mangti hai. Agar tum 10-10 ke 100 sikke alag-alag daalo toh machine accept nahi karegi, par 50 ka ek coin daalte hi saman bahar!",
              "hi": "जैसे किसी वेंडिंग मशीन में 10 रुपये की वस्तु के लिए 10 रुपये का सिक्का चाहिए; कम मूल्य के सिक्के काम नहीं करते।"
            },
            "limitations": {
              "en": "Vending machines store coins, while an electron cannot accumulate energy over time from multiple sub-threshold photons.",
              "hinglish": "Vending machine paise store kar sakti hai, par electron sub-threshold photons ki energy store nahi karta.",
              "hi": "इलेक्ट्रॉन एक साथ कई फोटॉनों की ऊर्जा संचित नहीं कर सकता; टक्कर एक-पर-एक होती है।"
            }
          },
          "terminology": [
            {
              "term": "Work Function (कार्यफलन, Φ)",
              "definition": {
                "en": "The minimum energy required to eject an electron from the surface of a metal (Φ = hν₀).",
                "hinglish": "Metal ki surface se electron ko azaad karne ke liye zaroori minimum energy.",
                "hi": "किसी धातु की सतह से इलेक्ट्रॉन मुक्त करने के लिए आवश्यक न्यूनतम ऊर्जा।"
              }
            },
            {
              "term": "Threshold Frequency (देहली आवृत्ति, ν₀)",
              "definition": {
                "en": "The minimum frequency of incident light below which no photoelectrons are emitted regardless of intensity.",
                "hinglish": "Wo minimum frequency jiske niche light padne par koi electron nahi nikalta.",
                "hi": "आपतित प्रकाश की वह न्यूनतम आवृत्ति जिसके नीचे कोई प्रकाश-इलेक्ट्रॉन उत्सर्जित नहीं होता।"
              }
            },
            {
              "term": "de Broglie Wavelength (λ = h / p)",
              "definition": {
                "en": "The wavelength associated with any moving material particle of momentum p: λ = h / (mv).",
                "hinglish": "Kisi bhi chalte hue particle ke sath judi wave ki wavelength: λ = h / p.",
                "hi": "p संवेग से गतिमान किसी भी कण से संबद्ध तरंगदैर्ध्य: λ = h / p।"
              }
            }
          ],
          "visualType": "quantum",
          "visualData": {
            "simulationMode": "photoelectric",
            "metalWorkFunction": 2.2,
            "initialWavelength": 400
          },
          "underlyingPrinciple": {
            "en": "Einstein’s Photoelectric Equation: Energy of incident photon = Work Function + Maximum Kinetic Energy of emitted electron: hν = Φ + KE_max = hν₀ + (1/2)m v_max².",
            "hinglish": "Einstein Photoelectric Equation: Aane wale photon ki energy = Work Function (Φ) + Nikle hue electron ki maximum kinetic energy (KE_max). hν = hν₀ + KE_max.",
            "hi": "आइंस्टीन का प्रकाश-विद्युत समीकरण: आपतित फोटॉन की ऊर्जा = कार्यफलन + अधिकतम गतिज ऊर्जा (hν = Φ + KE_max)।"
          },
          "formulaLogic": {
            "formula": "h\\nu = \\Phi + \\text{KE}_{\\max} = h\\nu_0 + eV_s",
            "description": {
              "en": "Einstein’s photoelectric equation relates photon energy hν to the metal work function Φ and stopping potential V_s.",
              "hinglish": "Photoelectric equation photon energy, work function aur stopping potential ko jodti hai.",
              "hi": "प्रकाश-विद्युत समीकरण फोटॉन ऊर्जा, कार्यफलन और निरोधी विभव को संबंधित करता है।"
            },
            "symbols": [
              {
                "symbol": "h",
                "meaning": "Planck’s constant = 6.626 × 10^-34",
                "unit": "J·s"
              },
              {
                "symbol": "ν",
                "meaning": "Frequency of incident radiation",
                "unit": "Hz (s^-1)"
              },
              {
                "symbol": "Φ",
                "meaning": "Work function of target metal",
                "unit": "Joules (J) or eV"
              },
              {
                "symbol": "V_s",
                "meaning": "Stopping potential needed to halt the fastest electron",
                "unit": "Volts (V)"
              },
              {
                "symbol": "e",
                "meaning": "Electronic charge = 1.6 × 10^-19",
                "unit": "Coulombs (C)"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "The work function of cesium is 2.14 eV. Find (a) the threshold frequency for cesium, and (b) the stopping potential when light of wavelength 400 nm falls on it.",
              "hinglish": "Cesium ka work function 2.14 eV hai. (a) Threshold frequency ν₀ aur (b) 400 nm light ke liye stopping potential V_s nikalo.",
              "hi": "सीजियम का कार्यफलन 2.14 eV है। (a) देहली आवृत्ति तथा (b) 400 nm तरंगदैर्ध्य के लिए निरोधी विभव ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate Threshold Frequency ν₀",
                "explanation": {
                  "en": "Φ = hν₀ ⇒ ν₀ = Φ / h. Here Φ = 2.14 eV = 2.14 × 1.6 × 10^-19 J = 3.424 × 10^-19 J.",
                  "hinglish": "ν₀ = Φ / h = (2.14 × 1.6 × 10^-19) / 6.626 × 10^-34 ≈ 5.17 × 10^14 Hz.",
                  "hi": "देहली आवृत्ति ν₀ = Φ / h = 5.17 × 10^14 Hz।"
                },
                "math": "\\nu_0 = \\frac{2.14 \\times 1.6 \\times 10^{-19}}{6.626 \\times 10^{-34}} \\approx 5.17 \\times 10^{14}\\,\\text{Hz}"
              },
              {
                "stepNumber": 2,
                "title": "Calculate Energy of Incident Photon (E = hc / λ)",
                "explanation": {
                  "en": "E = (6.626 × 10^-34 × 3 × 10^8) / (400 × 10^-9) = 4.97 × 10^-19 J = 4.97 × 10^-19 / (1.6 × 10^-19) = 3.106 eV.",
                  "hinglish": "Photon energy E = 3.11 eV.",
                  "hi": "फोटॉन ऊर्जा E = 3.11 eV।"
                },
                "math": "E = \\frac{hc}{\\lambda} = 3.106\\,\\text{eV}"
              },
              {
                "stepNumber": 3,
                "title": "Calculate Stopping Potential V_s",
                "explanation": {
                  "en": "KE_max = E - Φ = 3.106 eV - 2.14 eV = 0.966 eV. Since KE_max = e V_s, the stopping potential V_s = 0.966 V.",
                  "hinglish": "KE_max = 3.106 - 2.14 = 0.966 eV. Isliye stopping potential V_s = 0.966 Volts.",
                  "hi": "निरोधी विभव V_s = 3.11 - 2.14 = 0.97 वोल्ट।"
                },
                "math": "e V_s = 3.106\\,\\text{eV} - 2.14\\,\\text{eV} = 0.966\\,\\text{eV} \\implies V_s = 0.966\\,\\text{V}"
              }
            ],
            "finalAnswer": "Threshold Frequency = 5.17 × 10^14 Hz, Stopping Potential = 0.97 V."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Believing increasing light intensity increases the kinetic energy of emitted electrons.",
                "hinglish": "Yeh sochna ki intensity badhane se electron ki speed ya kinetic energy badhegi.",
                "hi": "यह सोचना कि प्रकाश की तीव्रता बढ़ाने से इलेक्ट्रॉनों की गतिज ऊर्जा बढ़ती है।"
              },
              "correction": {
                "en": "Intensity only increases the NUMBER of photons arriving per second, hence increasing the photocurrent (number of electrons). Kinetic energy depends ONLY on photon frequency (color)!",
                "hinglish": "Intensity badhane se sirf electrons ki sankhya (current) badhti hai. Electron ki speed/energy sirf frequency par depend karti hai!",
                "hi": "तीव्रता बढ़ाने से केवल उत्सर्जित इलेक्ट्रॉनों की संख्या (धारा) बढ़ती है; गतिज ऊर्जा केवल आवृत्ति पर निर्भर करती है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "phy-p6",
              "level": "Beginner",
              "question": {
                "en": "What is the de Broglie wavelength of an electron accelerated through a potential difference of V volts?",
                "hinglish": "V volts se accelerate kiye gaye electron ki de Broglie wavelength ka shortcut formula kya hai?",
                "hi": "V विभव से त्वरित इलेक्ट्रॉन की दे ब्रॉग्ली तरंगदैर्ध्य का सूत्र क्या है?"
              },
              "options": [
                "λ = 12.27 / √V Å (or 1.227 / √V nm)",
                "λ = √V / 12.27 Å",
                "λ = 12.27 × V Å",
                "λ = 1.227 × √V Å"
              ],
              "correctAnswer": 0,
              "explanation": {
                "en": "λ = h / √(2m e V). Substituting values of h, m, and e yields λ = 12.27 / √V Angstroms (1.227 / √V nm).",
                "hinglish": "h, m, e ki values daalne par shortcut formula banta hai: λ = 12.27 / √V Å.",
                "hi": "λ = h / √(2meV) में स्थिरांकों के मान रखने पर λ = 12.27 / √V Å प्राप्त होता है।"
              },
              "hint": {
                "en": "For V = 100 V, λ ≈ 1.227 Å.",
                "hinglish": "100 V par 1.227 Å aayega.",
                "hi": "100 वोल्ट पर 1.227 Å आता है।"
              }
            }
          ],
          "summary": {
            "en": [
              "Photoelectric effect proves the particle nature of light (photons).",
              "Energy of photon E = hν. Threshold frequency ν₀ is required for emission.",
              "Kinetic energy depends on frequency, while photocurrent depends on intensity.",
              "de Broglie hypothesis: Every moving particle has wave nature with λ = h / p."
            ],
            "hinglish": [
              "Photoelectric effect light ke particle nature ko prove karta hai.",
              "Photon energy E = hν. Emission ke liye threshold frequency zaroori hai.",
              "Kinetic energy frequency par aur current intensity par depend karta hai.",
              "de Broglie hypothesis: Har chalte particle ke sath wave hoti hai (λ = h / p)."
            ],
            "hi": [
              "प्रकाश-विद्युत प्रभाव प्रकाश की कण प्रकृति (फोटॉन) को सिद्ध करता है।",
              "फोटॉन की ऊर्जा E = hν होती है। उत्सर्जन हेतु देहली आवृत्ति आवश्यक है।",
              "गतिज ऊर्जा केवल आवृत्ति पर और धारा केवल तीव्रता पर निर्भर करती है।",
              "दे ब्रॉग्ली परिकल्पना: गतिशील कण से संबद्ध तरंगदैर्ध्य λ = h / p होती है।"
            ]
          },
          "quiz": [
            {
              "id": "phy-q6",
              "question": {
                "en": "According to Heisenberg’s Uncertainty Principle, the product of uncertainties in position and momentum for a particle is:",
                "hinglish": "Heisenberg ke Uncertainty Principle ke anusaar position aur momentum ke uncertainties ka product kitna hota hai?",
                "hi": "हाइजेनबर्ग के अनिश्चितता सिद्धांत के अनुसार स्थिति और संवेग की अनिश्चितताओं का गुणनफल होता है:"
              },
              "options": [
                "Δx · Δp ≥ ℏ / 2  (where ℏ = h / 2π)",
                "Δx · Δp = 0",
                "Δx · Δp ≤ ℏ / 2",
                "Δx / Δp = h"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "Heisenberg’s uncertainty principle states that Δx · Δp ≥ ℏ/2 = h / 4π. It is impossible to simultaneously measure both position and momentum of a subatomic particle with absolute certainty.",
                "hinglish": "Heisenberg principle ke mutabik Δx · Δp ≥ ℏ/2 (h / 4π). Position aur momentum dono ko ek sath 100% accurately nahi naapa ja sakta.",
                "hi": "हाइजेनबर्ग के अनुसार Δx · Δp ≥ ℏ/2। किसी कण की स्थिति और संवेग दोनों को एक साथ यथार्थता से नहीं मापा जा सकता।"
              },
              "hint": {
                "en": "Remember the lower bound contains h / 4π.",
                "hinglish": "Lower limit h / 4π hoti hai.",
                "hi": "न्यूनतम सीमा h / 4π होती है।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Unit III Quantum Physics Summary: Classical mechanics failed to explain blackbody radiation and the photoelectric effect. Planck introduced energy quantization (E = nhν). Einstein explained the photoelectric effect (hν = Φ + KE_max). de Broglie proposed wave-particle duality (λ = h/p), confirmed experimentally by Davisson and Germer using electron diffraction. Wave packets represent localized particles with group velocity v_g = dω/dk equaling particle velocity. Heisenberg’s uncertainty principle (Δx·Δp ≥ ℏ/2 and ΔE·Δt ≥ ℏ/2) establishes fundamental measurement limits in quantum mechanics.",
          "hinglish": "Unit III Quantum Physics Revision: Classical physics blackbody radiation aur photoelectric effect ko explain nahi kar saki. Planck ne bataya ki energy packets (quanta) me aati hai (E = hν). Einstein ne photoelectric equation di (hν = Φ + KE_max). de Broglie ne matter waves di (λ = h/p), jise Davisson-Germer experiment ne electron diffraction se prove kiya. Heisenberg uncertainty principle ke mutabik Δx·Δp ≥ ℏ/2 hota hai.",
          "hi": "इकाई III क्वांटम भौतिकी सारांश: चिरसम्मत भौतिकी प्रकाश-विद्युत प्रभाव को समझाने में विफल रही। प्लांक ने ऊर्जा क्वांटीकरण (E = hν) दिया। आइंस्टीन ने प्रकाश-विद्युत समीकरण दिया। दे ब्रॉग्ली ने पदार्थ तरंगों (λ = h/p) की परिकल्पना की जिसे डेविसन-जर्मर प्रयोग ने सिद्ध किया। हाइजेनबर्ग का अनिश्चितता सिद्धांत (Δx·Δp ≥ ℏ/2) क्वांटम मापन की मौलिक सीमा तय करता है।"
        },
        "shortNotes": [
          {
            "topic": "Phase vs Group Velocity",
            "content": {
              "en": "Phase velocity v_p = ω/k is the speed of individual wave crests. Group velocity v_g = dω/dk is the velocity of the wave packet envelope, which corresponds to the physical particle velocity.",
              "hinglish": "Phase velocity v_p = ω/k wave crest ki speed hai. Group velocity v_g = dω/dk pure wave packet ki speed hai jo actual particle ki speed hoti hai.",
              "hi": "कला वेग v_p = ω/k तरंग शिखा का वेग है। समूह वेग v_g = dω/dk तरंग पैकेट का वेग है जो वास्तविक कण वेग के बराबर होता है।"
            }
          },
          {
            "topic": "Davisson–Germer Experiment",
            "content": {
              "en": "Accelerated 54 V electrons scattered off a Nickel crystal produced a sharp diffraction peak at angle 50°, confirming electron wave nature with λ = 1.66 Å matching de Broglie theory.",
              "hinglish": "54 V par electrons Nickel crystal par takra kar 50° par peak banate hain, jisse electron ka wave nature prove hua.",
              "hi": "54 वोल्ट पर इलेक्ट्रॉनों का निकिल क्रिस्टल से 50° पर विवर्तन दे ब्रॉग्ली तरंग सिद्धांत की पुष्टि करता है।"
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Einstein Photoelectric Equation",
            "formula": "h\\nu = \\Phi + \\frac{1}{2}m v_{\\max}^2 = h\\nu_0 + eV_s",
            "units": "Energy in Joules/eV",
            "note": "Linear graph of Vs vs ν"
          },
          {
            "name": "de Broglie Wavelength",
            "formula": "\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{1.227}{\\sqrt{V}}\\,\\text{nm}",
            "units": "λ in meters/nm",
            "note": "For accelerated electron"
          },
          {
            "name": "Heisenberg Uncertainty Principle",
            "formula": "\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2} = \\frac{h}{4\\pi}",
            "units": "J·s",
            "note": "Position-momentum limit"
          },
          {
            "name": "Energy-Time Uncertainty",
            "formula": "\\Delta E \\cdot \\Delta t \\ge \\frac{\\hbar}{2}",
            "units": "J·s",
            "note": "Excited state lifetime"
          }
        ],
        "mindMap": [
          {
            "node": "Quantum Physics",
            "children": [
              "Wave-Particle Duality",
              "Matter Waves",
              "Uncertainty Principle",
              "Schrödinger Equation"
            ]
          },
          {
            "node": "Particle Nature of Light",
            "children": [
              "Blackbody Radiation (Planck)",
              "Photoelectric Effect (Einstein)",
              "Compton Scattering"
            ]
          },
          {
            "node": "Wave Nature of Matter",
            "children": [
              "de Broglie Hypothesis (λ = h/p)",
              "Davisson-Germer Experiment",
              "Electron Microscope"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Classical Mechanics",
            "conceptB": "Quantum Mechanics",
            "comparisonPoints": [
              {
                "feature": "Energy states",
                "a": "Continuous values possible",
                "b": "Quantized discrete energy levels (E = nhν)"
              },
              {
                "feature": "Determinism",
                "a": "Exact position and velocity known simultaneously",
                "b": "Probabilistic (Heisenberg uncertainty principle)"
              },
              {
                "feature": "Light & Matter",
                "a": "Treated strictly as either pure wave or pure particle",
                "b": "Wave-particle duality applies to both"
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "What is stopping potential?",
            "back": "The minimum negative potential applied to the collector plate that reduces the photoelectric current to exactly zero."
          },
          {
            "front": "Why do everyday objects not show de Broglie wave properties?",
            "back": "Because macroscopic objects have huge mass (m), making their momentum p very large and de Broglie wavelength λ = h/p infinitely small (~10^-34 m), which is undetectable."
          },
          {
            "front": "Can electrons exist inside an atomic nucleus?",
            "back": "No! According to the uncertainty principle, confining an electron to the nuclear radius (~10^-14 m) would require kinetic energy > 20 MeV, whereas observed beta electrons have only 2-3 MeV."
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Why does an electron microscope have vastly superior resolution compared to an optical microscope?",
            "answer": "Because high-speed electrons have de Broglie wavelengths of ~0.05 Å (100,000 times shorter than visible light photons), reducing diffraction limits and drastically increasing resolving power."
          }
        ],
        "longAnswerQuestions": [
          {
            "question": "Describe the Davisson-Germer experiment and explain how it proved the wave nature of electrons.",
            "outline": "1. Experimental setup (electron gun, nickel crystal target, movable collector).\n2. Electron acceleration by potential V.\n3. Peak observed at V = 54 V and scattering angle θ = 50°.\n4. Bragg’s law calculation: 2d sin(θ) = nλ.\n5. Comparison with de Broglie wavelength λ = 12.27 / √54 = 1.67 Å.\n6. Perfect agreement confirms electron matter waves."
          }
        ],
        "numericalPractice": [
          {
            "question": "An electron has a speed of 600 m/s with an accuracy of 0.005%. Calculate the certainty with which the position of the electron can be located.",
            "given": "v = 600 m/s, accuracy = 0.005%, m = 9.1 × 10^-31 kg",
            "formula": "\\Delta p = m \\times \\Delta v, \\quad \\Delta x \\ge \\frac{\\hbar}{2\\Delta p}",
            "solution": "Δv = 600 × (0.005/100) = 0.03 m/s. Δp = 9.1 × 10^-31 × 0.03 = 2.73 × 10^-32 kg·m/s. Δx ≥ (6.626 × 10^-34) / (4π × 2.73 × 10^-32) ≈ 1.93 × 10^-3 m = 1.93 mm."
          }
        ]
      }
    },
    {
      "id": "physics-u4",
      "unitNumber": "Unit IV",
      "title": "Electromagnetic Theory",
      "description": "Master Faraday’s law, Lenz’s law, induced electric fields, displacement current, Maxwell’s equations in vacuum and non-conducting media, and electromagnetic wave propagation.",
      "topics": [
        "Faraday’s law of electromagnetic induction (integral and differential forms)",
        "Lenz’s law and conservation of energy",
        "Electric fields induced by time-varying magnetic fields (∇ × E = -∂B/∂t)",
        "Energy stored in magnetic fields",
        "Inadequacy of Ampere’s circuital law and Displacement Current",
        "Maxwell’s modification of Ampere’s law (∇ × B = μ₀J + μ₀ε₀∂E/∂t)",
        "Maxwell’s equations in differential and integral forms",
        "Physical significance of all four Maxwell equations",
        "Electromagnetic wave equation in free space",
        "Velocity of light from fundamental constants (c = 1 / √(μ₀ε₀))",
        "Poynting vector and energy transport"
      ],
      "lessons": [
        {
          "id": "phy-u4-l1",
          "unitId": "physics-u4",
          "subjectId": "applied-physics",
          "title": "Faraday’s Law & Maxwell’s Equations",
          "durationMinutes": 30,
          "difficulty": "Intermediate",
          "prerequisites": [
            "Electric flux",
            "Magnetic flux",
            "Vector curl & divergence"
          ],
          "realLifeQuestion": {
            "en": "How does your phone charge wirelessly just by resting on a plastic charging pad without any physical metallic wires touching it?",
            "hinglish": "Phone bina kisi wire ke wireless charging pad par rakhte hi charge kaise hone lagta hai?",
            "hi": "बिना किसी तार के केवल पैड पर रखने से फोन वायरलेस तरीके से कैसे चार्ज हो जाता है?"
          },
          "simpleExplanation": {
            "en": "Inside the charging pad, an alternating electric current continuously changes the magnetic field thousands of times a second. According to Faraday’s Law, this fluctuating magnetic field reaches into the back of your phone and induces an electric voltage in a receiver coil, powering the battery without a physical wire.",
            "hinglish": "Charging pad ke andar aisi coil hoti hai jisme AC current se magnetic field lagatar badalti rehti hai. Faraday law kehta hai: Badalti hui magnetic field electric current bana sakti hai! Yehi magnetic field phone ki receiver coil me electric current induce karti hai.",
            "hi": "चार्जिंग पैड में बदलता हुआ चुंबकीय क्षेत्र उत्पन्न होता है। फैराडे के नियमानुसार समय के साथ बदलता चुंबकीय क्षेत्र फोन की कुंडली में विद्युत वाहक बल (EMF) उत्पन्न करता है।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Think of wind turning the blades of a windmill. The moving wind (changing magnetic field) pushes the stationary blades into motion (creates electric current).",
              "hinglish": "Hawa chalne par pawan-chakki (windmill) ghoomne lagti hai. Waise hi changing magnetic field electron ko dhakka dekar current banati hai.",
              "hi": "जैसे बहती हवा पवन चक्की को घुमा देती है, वैसे ही बदलता चुंबकीय क्षेत्र इलेक्ट्रॉनों को गति देकर धारा बनाता है।"
            },
            "limitations": {
              "en": "Wind is macroscopic physical matter, while electromagnetic induction is a fundamental force between vector fields mediated by virtual photons.",
              "hinglish": "Hawa physical matter hai, jabki induction vector fields ke interaction se hota hai.",
              "hi": "हवा भौतिक पदार्थ है जबकि विद्युत-चुंबकीय प्रेरण क्षेत्र सिद्धान्त पर आधारित है।"
            }
          },
          "terminology": [
            {
              "term": "Faraday’s Law of Induction",
              "definition": {
                "en": "Induced electromotive force (EMF) in any closed circuit is equal to the negative time rate of change of magnetic flux through the circuit: ε = -dΦ_B / dt.",
                "hinglish": "Circuit me banne wala voltage (EMF) magnetic flux ke badalne ki speed ke barabar hota hai (ε = -dΦ_B / dt).",
                "hi": "किसी बंद परिपथ में प्रेरित विद्युत वाहक बल चुंबकीय फ्लक्स के परिवर्तन की ऋणात्मक दर के बराबर होता है।"
              }
            },
            {
              "term": "Displacement Current (J_d = ε₀ ∂E/∂t)",
              "definition": {
                "en": "The effective current arising from a time-varying electric field, completing Ampere’s law across capacitor dielectric gaps.",
                "hinglish": "Badalti hui electric field ke karan banne wala current jo capacitor ke beech me circuit ko complete karta hai.",
                "hi": "समय के साथ बदलते विद्युत क्षेत्र के कारण उत्पन्न धारा जो संधारित्र की प्लेटों के बीच परिपथ पूरा करती है।"
              }
            }
          ],
          "visualType": "em-induction",
          "visualData": {
            "simulationMode": "faraday-coil",
            "magnetSpeed": 5,
            "coilTurns": 10
          },
          "underlyingPrinciple": {
            "en": "Maxwell’s Four Equations form the bedrock of classical electrodynamics: (1) Gauss’s Law for Electrostatics (∇·E = ρ/ε₀), (2) Gauss’s Law for Magnetism (∇·B = 0), (3) Faraday’s Law of Induction (∇ × E = -∂B/∂t), (4) Maxwell-Ampere Law (∇ × B = μ₀J + μ₀ε₀∂E/∂t). In free space (ρ=0, J=0), these equations predict self-propagating electromagnetic waves traveling at c = 1/√(μ₀ε₀) ≈ 3 × 10^8 m/s.",
            "hinglish": "Maxwell ke 4 niyam saari electricity aur magnetism ko jodte hain. Inhi 4 equations se proof hota hai ki electric field aur magnetic field ek doosre ko create karte hue light ki speed (c = 3 × 10^8 m/s) se space me travel karte hain.",
            "hi": "मैक्सवेल के चार समीकरण विद्युत और चुंबकत्व का संपूर्ण आधार हैं। निर्वात में ये समीकरण विद्युत-चुंबकीय तरंगों के अस्तित्व की भविष्यवाणी करते हैं जिनका वेग c = 1/√(μ₀ε₀) होता है।"
          },
          "formulaLogic": {
            "formula": "\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}, \\quad \\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t}",
            "description": {
              "en": "The two curl equations of Maxwell showing how changing magnetic fields generate electric fields, and changing electric fields generate magnetic fields.",
              "hinglish": "Maxwell ke do curl equations jo dikhate hain ki badalti magnetic field electric field banati hai aur badalti electric field magnetic field banati hai.",
              "hi": "मैक्सवेल के कर्ल समीकरण: परिवर्तनशील चुंबकीय क्षेत्र विद्युत क्षेत्र बनाता है और परिवर्तनशील विद्युत क्षेत्र चुंबकीय क्षेत्र बनाता है।"
            },
            "symbols": [
              {
                "symbol": "E",
                "meaning": "Electric field vector",
                "unit": "V/m or N/C"
              },
              {
                "symbol": "B",
                "meaning": "Magnetic flux density vector",
                "unit": "Tesla (T)"
              },
              {
                "symbol": "μ₀",
                "meaning": "Permeability of free space = 4π × 10^-7",
                "unit": "H/m"
              },
              {
                "symbol": "ε₀",
                "meaning": "Permittivity of free space = 8.854 × 10^-12",
                "unit": "F/m"
              },
              {
                "symbol": "J_d",
                "meaning": "Displacement current density = ε₀ ∂E/∂t",
                "unit": "A/m²"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A parallel plate capacitor with circular plates of radius 10 cm is being charged by a current of 0.5 A. Calculate (a) the displacement current passing between the plates, and (b) the magnetic field induced at a distance r = 5 cm from the central axis.",
              "hinglish": "10 cm radius ki circular plates wale capacitor ko 0.5 A current se charge kiya ja raha hai. (a) Plates ke beech displacement current I_d kitna hai? (b) Center se 5 cm doori par induced magnetic field B kitna hoga?",
              "hi": "10 सेमी त्रिज्या वाली वृत्ताकार प्लेटों के संधारित्र को 0.5 A की धारा से आवेशित किया जा रहा है। (a) विस्थापन धारा I_d ज्ञात करें। (b) अक्ष से 5 सेमी दूरी पर प्रेरित चुंबकीय क्षेत्र B ज्ञात करें।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Determine Displacement Current I_d",
                "explanation": {
                  "en": "By Maxwell’s continuity condition, the total displacement current between the plates must exactly equal the conduction current in the connecting wires: I_d = I_c = 0.5 A.",
                  "hinglish": "Continuity ke mutabik capacitor plates ke beech displacement current bahar ki conduction current ke bilkul barabar hota hai: I_d = 0.5 A.",
                  "hi": "परिपथ की निरंतरता के अनुसार विस्थापन धारा चालन धारा के बराबर होती है: I_d = 0.5 A।"
                },
                "math": "I_d = I_c = 0.5\\,\\text{A}"
              },
              {
                "stepNumber": 2,
                "title": "Calculate fraction of displacement current enclosed inside radius r = 5 cm",
                "explanation": {
                  "en": "Plate radius R = 10 cm = 0.1 m, loop radius r = 5 cm = 0.05 m. The enclosed displacement current is I_d(enclosed) = I_d × (π r² / π R²) = 0.5 × (5 / 10)² = 0.5 × 0.25 = 0.125 A.",
                  "hinglish": "5 cm ke loop me enclosed current = Total current × (r / R)² = 0.5 × (1/4) = 0.125 A.",
                  "hi": "r = 5 सेमी के भीतर परिबद्ध विस्थापन धारा = 0.5 × (5/10)² = 0.125 A।"
                },
                "math": "I_{d,\\text{enc}} = I_d \\left(\\frac{r}{R}\\right)^2 = 0.5 \\times \\left(\\frac{0.05}{0.10}\\right)^2 = 0.125\\,\\text{A}"
              },
              {
                "stepNumber": 3,
                "title": "Apply Ampere-Maxwell Law: ∮ B · dl = μ₀ I_{d,enc}",
                "explanation": {
                  "en": "B × (2π r) = μ₀ I_{d,enc} ⇒ B = (μ₀ I_{d,enc}) / (2π r) = (4π × 10^-7 × 0.125) / (2π × 0.05) = (2 × 10^-7 × 0.125) / 0.05 = 5.0 × 10^-7 T = 0.5 μT.",
                  "hinglish": "B = (μ₀ I_{d,enc}) / (2π r) = 5.0 × 10^-7 T = 0.5 μT.",
                  "hi": "B = (μ₀ I_{d,enc}) / (2π r) = 5.0 × 10^-7 टेस्ला।"
                },
                "math": "B = \\frac{\\mu_0 I_{d,\\text{enc}}}{2\\pi r} = \\frac{4\\pi \\times 10^{-7} \\times 0.125}{2\\pi \\times 0.05} = 5.0 \\times 10^{-7}\\,\\text{T} = 0.5\\,\\mu\\text{T}"
              }
            ],
            "finalAnswer": "Displacement Current = 0.5 A, Induced Magnetic Field at r = 5 cm is 0.5 μT (5 × 10^-7 T)."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Believing displacement current involves actual movement of physical charges (electrons).",
                "hinglish": "Yeh sochna ki displacement current me koi electrons travel karte hain.",
                "hi": "यह सोचना कि विस्थापन धारा में वास्तविक इलेक्ट्रॉन गति करते हैं।"
              },
              "correction": {
                "en": "Displacement current is NOT a flow of physical charge! It is purely due to the time-rate of change of electric flux (∂E/∂t) in space or dielectric, yet it generates a magnetic field exactly like a real current.",
                "hinglish": "Displacement current me koi charge nahi behta! Ye electric field ke change hone se banti hai, par magnetic field bilkul real current jaisa banati hai.",
                "hi": "विस्थापन धारा में कोई आवेश प्रवाह नहीं होता; यह बदलते विद्युत क्षेत्र का प्रभाव है जो चुंबकीय क्षेत्र उत्पन्न करता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "phy-p7",
              "level": "Intermediate",
              "question": {
                "en": "What is the physical meaning of Maxwell’s second equation ∇ · B = 0 (Gauss’s law for magnetism)?",
                "hinglish": "Maxwell ke second equation ∇ · B = 0 ka physical meaning kya hai?",
                "hi": "मैक्सवेल के द्वितीय समीकरण ∇ · B = 0 का भौतिक अर्थ क्या है?"
              },
              "options": [
                "Isolated magnetic monopoles do not exist; magnetic field lines are always continuous closed loops",
                "Magnetic fields cannot pass through vacuum",
                "Magnetic field is always zero everywhere",
                "Electric and magnetic fields are always parallel"
              ],
              "correctAnswer": 0,
              "explanation": {
                "en": "∇ · B = 0 means magnetic flux divergence is zero everywhere. Isolated north or south magnetic monopoles do not exist in nature; every magnet has both poles and field lines form closed loops.",
                "hinglish": "Iska matlab nature me akele North ya South pole (monopole) exist nahi karte. Hamesha dipole hota hai aur lines closed loops banati hain.",
                "hi": "इसका अर्थ है कि प्रकृति में एकल चुंबकीय ध्रुव (मोनोपोल) का कोई अस्तित्व नहीं है; चुंबकीय रेखाएं सदैव बंद लूप बनाती हैं।"
              },
              "hint": {
                "en": "Can you ever break a bar magnet to get an isolated North pole alone?",
                "hinglish": "Kya chumbak ko todkar akela North pole banaya ja sakta hai?",
                "hi": "क्या चुंबक को तोड़कर केवल उत्तरी ध्रुव प्राप्त किया जा सकता है?"
              }
            }
          ],
          "summary": {
            "en": [
              "Faraday’s law: Changing magnetic flux induces an EMF (ε = -dΦ/dt).",
              "Lenz’s law enforces energy conservation: induced current opposes its cause.",
              "Displacement current I_d = ε₀(dΦ_E/dt) bridges the gap in Ampere’s law.",
              "Maxwell’s 4 equations unify electricity, magnetism, and light.",
              "EM waves travel in vacuum at c = 1/√(μ₀ε₀) ≈ 3 × 10^8 m/s."
            ],
            "hinglish": [
              "Faraday law: Changing magnetic field voltage induce karti hai.",
              "Lenz law energy conservation par based hai: induced current cause ka virodh karta hai.",
              "Displacement current capacitor plates ke beech Ampere law ko valid banati hai.",
              "Maxwell ki 4 equations ne physics me electricity, magnetism aur light ko unify kiya.",
              "Vacuum me EM wave speed c = 1/√(μ₀ε₀) = 3 × 10^8 m/s hoti hai."
            ],
            "hi": [
              "फैराडे नियम: परिवर्ती चुंबकीय फ्लक्स प्रेरित विद्युत वाहक बल उत्पन्न करता है।",
              "लेंज का नियम ऊर्जा संरक्षण पर आधारित है: प्रेरित धारा अपने कारण का विरोध करती है।",
              "विस्थापन धारा संधारित्र के भीतर एम्पीयर नियम की असंगति दूर करती है।",
              "मैक्सवेल के समीकरणों ने सिद्ध किया कि प्रकाश एक विद्युत-चुंबकीय तरंग है।",
              "निर्वात में प्रकाश का वेग c = 1/√(μ₀ε₀) होता है।"
            ]
          },
          "quiz": [
            {
              "id": "phy-q7",
              "question": {
                "en": "What is the Poynting vector S and what does it physically represent?",
                "hinglish": "Poynting vector S kya hota hai aur ye kya represent karta hai?",
                "hi": "पॉइन्टिंग सदिश S क्या है और यह क्या दर्शाता है?"
              },
              "options": [
                "S = (1/μ₀) (E × B), representing rate of energy flow per unit area in an EM wave",
                "S = E · B, representing electric potential",
                "S = μ₀ (E × B), representing magnetic pressure",
                "S = E / B, representing wave velocity"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "The Poynting vector S = (E × B) / μ₀ points in the direction of wave propagation and its magnitude gives the power transported by the electromagnetic wave per unit area (W/m²).",
                "hinglish": "Poynting vector S = (E × B)/μ₀ hota hai jo batata hai ki wave kis direction me kitni power (Watts/m²) le ja rahi hai.",
                "hi": "पॉइन्टिंग सदिश S = (E × B)/μ₀ विद्युत-चुंबकीय तरंग द्वारा प्रति इकाई क्षेत्रफल ऊर्जा संचरण की दर (W/m²) दर्शाता है।"
              },
              "hint": {
                "en": "Cross product between E and B divided by μ₀.",
                "hinglish": "E aur B ka cross product.",
                "hi": "E और B का सदिश गुणनफल देखें।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Unit IV Electromagnetic Theory Summary: Time-dependent magnetic fields induce electric fields (Faraday-Lenz Law: ∇ × E = -∂B/∂t). Maxwell recognized that Ampere’s Law violated continuity during capacitor charging, adding the displacement current term J_d = ε₀∂E/∂t. The four Maxwell equations in differential form are: ∇·E = ρ/ε₀, ∇·B = 0, ∇ × E = -∂B/∂t, and ∇ × B = μ₀(J + ε₀∂E/∂t). In free space, combining the curl equations yields the electromagnetic wave equation with wave velocity c = 1/√(μ₀ε₀) = 3 × 10^8 m/s, demonstrating that light is an electromagnetic wave.",
          "hinglish": "Unit IV Electromagnetic Theory Revision: Badalti magnetic field electric field banati hai (∇ × E = -∂B/∂t). Ampere law capacitor me fail ho raha tha jise Maxwell ne displacement current (J_d = ε₀∂E/∂t) jodkar theek kiya. Chaar Maxwell equations ne prove kiya ki EM waves c = 1/√(μ₀ε₀) ki speed se travel karti hain. Poynting vector S = (E × B)/μ₀ wave ki energy transfer rate ko represent karta hai.",
          "hi": "इकाई IV विद्युत-चुंबकीय सिद्धांत सारांश: समय-परिवर्ती चुंबकीय क्षेत्र विद्युत क्षेत्र उत्पन्न करता है। मैक्सवेल ने विस्थापन धारा J_d = ε₀∂E/∂t जोड़कर एम्पीयर नियम को पूर्ण किया। मैक्सवेल के चार समीकरण विद्युत और चुंबकत्व को जोड़ते हैं। निर्वात में प्रकाश का वेग c = 1/√(μ₀ε₀) = 3 × 10^8 m/s प्राप्त होता है। पॉइन्टिंग सदिश ऊर्जा प्रवाह दर दर्शाता है।"
        },
        "shortNotes": [
          {
            "topic": "Displacement Current vs Conduction Current",
            "content": {
              "en": "Conduction current J_c = σE is due to actual drift of physical charges (electrons) in a conductor. Displacement current J_d = ε₀∂E/∂t is due to time rate of change of electric field in dielectrics or vacuum.",
              "hinglish": "Conduction current electrons ke chalne se banti hai, displacement current electric field ke change hone se banti hai.",
              "hi": "चालन धारा आवेशों की वास्तविक गति से उत्पन्न होती है, जबकि विस्थापन धारा विद्युत क्षेत्र के परिवर्तन से उत्पन्न होती है।"
            }
          },
          {
            "topic": "Transverse Nature of EM Waves",
            "content": {
              "en": "In free space, ∇·E = 0 and ∇·B = 0 prove that both electric and magnetic field oscillations are strictly perpendicular to the direction of wave propagation (k ⊥ E ⊥ B).",
              "hinglish": "Electric field, magnetic field aur wave propagation direction teeno aapas me perpendicular (90°) hote hain.",
              "hi": "विद्युत क्षेत्र E, चुंबकीय क्षेत्र B तथा संचरण दिशा k तीनों परस्पर लंबवत होते हैं।"
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Faraday’s Law (Differential)",
            "formula": "\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}",
            "units": "V/m²",
            "note": "Induced electric field"
          },
          {
            "name": "Ampere-Maxwell Law",
            "formula": "\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t}",
            "units": "T/m",
            "note": "Includes displacement current"
          },
          {
            "name": "Speed of Light in Vacuum",
            "formula": "c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8\\,\\text{m/s}",
            "units": "m/s",
            "note": "Fundamental constants link"
          },
          {
            "name": "Poynting Vector",
            "formula": "\\mathbf{S} = \\frac{1}{\\mu_0} (\\mathbf{E} \\times \\mathbf{B})",
            "units": "W/m²",
            "note": "Direction of power flow"
          }
        ],
        "mindMap": [
          {
            "node": "Electromagnetic Theory",
            "children": [
              "Induction (Faraday & Lenz)",
              "Displacement Current",
              "Maxwell’s Equations",
              "EM Wave Propagation"
            ]
          },
          {
            "node": "Maxwell’s Equations",
            "children": [
              "Gauss Law Electrostatics (∇·E = ρ/ε₀)",
              "Gauss Law Magnetism (∇·B = 0)",
              "Faraday Law (∇ × E = -∂B/∂t)",
              "Ampere-Maxwell Law (∇ × B = μ₀J + μ₀ε₀∂E/∂t)"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Electrostatic Electric Field",
            "conceptB": "Induced Electric Field",
            "comparisonPoints": [
              {
                "feature": "Source",
                "a": "Static electric charges (ρ)",
                "b": "Time-varying magnetic fields (-∂B/∂t)"
              },
              {
                "feature": "Nature",
                "a": "Conservative (∮ E · dl = 0, ∇ × E = 0)",
                "b": "Non-conservative (∮ E · dl ≠ 0, ∇ × E ≠ 0)"
              },
              {
                "feature": "Field Lines",
                "a": "Begin on positive charges and terminate on negative charges",
                "b": "Form continuous closed concentric loops without starting or ending on charges"
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "Why did Maxwell modify Ampere’s Law?",
            "back": "Because original Ampere’s law violated the equation of continuity (∇·J = -∂ρ/∂t) for time-varying fields, such as inside a charging capacitor."
          },
          {
            "front": "What is the ratio of magnitudes of E and B in an EM wave?",
            "back": "E / B = c = 3 × 10^8 m/s."
          },
          {
            "front": "State Lenz’s law and its fundamental basis.",
            "back": "The direction of induced EMF/current always opposes the change in magnetic flux that causes it. It is a direct consequence of the Law of Conservation of Energy."
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Show that the dimension of 1/√(μ₀ε₀) is that of velocity (m/s).",
            "answer": "By substituting units: μ₀ = N/A² = kg·m/(s²·A²), and ε₀ = C²/(N·m²) = A²·s⁴/(kg·m³). Product μ₀ε₀ = s²/m², so 1/√(μ₀ε₀) = m/s (velocity)."
          }
        ],
        "longAnswerQuestions": [
          {
            "question": "State Maxwell’s equations in differential and integral forms and discuss their physical significance.",
            "outline": "1. Gauss law for electrostatics.\n2. Gauss law for magnetism (no monopoles).\n3. Faraday’s law of induction.\n4. Ampere-Maxwell law with displacement current.\n5. Physical interpretation of each equation in tabular format."
          }
        ],
        "numericalPractice": [
          {
            "question": "The electric field of an EM wave in vacuum is given by E_y = 60 sin(10^8 t - kx) V/m. Find the magnitude and direction of the magnetic field B.",
            "given": "E_y = 60 V/m, propagation along +x direction",
            "formula": "B_0 = \\frac{E_0}{c}",
            "solution": "B_0 = 60 / (3 × 10^8) = 2.0 × 10^-7 T = 0.2 μT. Since propagation is along +x and E is along +y, B must oscillate along +z because E × B points along +x. Hence, B_z = 2.0 × 10^-7 sin(10^8 t - kx) T."
          }
        ]
      }
    },
    {
      "id": "physics-u5",
      "unitNumber": "Unit V",
      "title": "Nanoscience and Technology",
      "description": "Explore nanomaterials, quantum confinement, density of states, 0D, 1D, 2D, 3D nanostructures, top-down and bottom-up synthesis, and characterization with SEM and TEM.",
      "topics": [
        "Introduction to Nanoscience (1 to 100 nm regime)",
        "Surface-to-volume ratio and quantum confinement effects",
        "Classification of nanomaterials based on dimensionality (0D, 1D, 2D, 3D)",
        "Density of states (DOS) in bulk, quantum wells, wires, and quantum dots",
        "Properties of nanomaterials (Physical, Chemical, Electrical, Optical, Magnetic)",
        "Synthesis approaches: Top-down (Ball milling, Lithography) vs Bottom-up (Sol-Gel, CVD)",
        "Carbon Nanotubes (CNTs) and Graphene",
        "Characterization: Scanning Electron Microscope (SEM) construction and working",
        "Characterization: Transmission Electron Microscope (TEM) construction and working",
        "Comparison of SEM vs TEM and applications of nanotechnology"
      ],
      "lessons": [
        {
          "id": "phy-u5-l1",
          "unitId": "physics-u5",
          "subjectId": "applied-physics",
          "title": "Nanomaterials & Electron Microscopy (SEM/TEM)",
          "durationMinutes": 25,
          "difficulty": "Beginner",
          "prerequisites": [
            "Atomic structure",
            "Electron wavelength"
          ],
          "realLifeQuestion": {
            "en": "Why is bulk gold shiny yellow and chemically inert, but when crushed into 5 nanometer particles, it turns ruby red and behaves as an active catalyst?",
            "hinglish": "Normal sona (gold) yellow hota hai, par jab use 5 nanometer ke nanodots me todte hain toh wo ruby red kyu dikhta hai aur chemical reaction tez kar deta hai?",
            "hi": "सामान्य सोना पीला और निष्क्रिय होता है, परंतु 5 नैनोमीटर के कणों में तोड़ने पर यह रूबी लाल क्यों दिखता है?"
          },
          "simpleExplanation": {
            "en": "When material size drops below 100 nm, two dramatic effects emerge: (1) Surface-to-Volume Ratio skyrockets, placing a massive fraction of atoms on the surface with dangling bonds ready to react, and (2) Quantum Confinement restricts electron motion, splitting continuous energy bands into discrete levels and fundamentally altering optical absorption.",
            "hinglish": "Jab kisi cheez ka size 100 nanometer se chota ho jata hai toh do bade changes aate hain: (1) Surface Area bohot zyada badh jata hai jisse reaction tez hoti hai, aur (2) Quantum Confinement ki wajah se electrons ki energy bands chote discrete levels me bat jaate hain jisse color badal jata hai.",
            "hi": "जब कणों का आकार 100 नैनोमीटर से छोटा होता है तो पृष्ठीय क्षेत्रफल बहुत अधिक बढ़ जाता है तथा क्वांटम परिरोधन (Quantum Confinement) के कारण ऊर्जा स्तर विविक्त (discrete) हो जाते हैं जिससे गुण बदल जाते हैं।"
          },
          "familiarAnalogy": {
            "analogy": {
              "en": "Imagine a whole solid apple. You can only bite the outer skin. But slice it into millions of microscopic crumbs, and virtually every atom of apple flesh is exposed to the air at once.",
              "hinglish": "Ek poora seb (apple) lo, sirf upar ka chilka bahar hai. Par use crush karke barik pees do toh har hissa bahar expose ho jata hai.",
              "hi": "जैसे एक ठोस सेब का केवल छिलका बाहर होता है, परंतु उसे महीन टुकड़ों में काट देने पर उसका अधिकांश भाग सीधे हवा के संपर्क में आ जाता है।"
            },
            "limitations": {
              "en": "Apple crumbs remain chemically apple, whereas nanoparticles change their fundamental quantum electronic and optical properties entirely.",
              "hinglish": "Seb ka taste waisa hi rehta hai, par nanoparticles ke electronic aur optical properties quantum level par badal jaate hain.",
              "hi": "सेब के गुण नहीं बदलते जबकि नैनोकणों के इलेक्ट्रॉनिक और प्रकाशीय गुण मौलिक रूप से बदल जाते हैं।"
            }
          },
          "terminology": [
            {
              "term": "Quantum Confinement",
              "definition": {
                "en": "The spatial confinement of electrons and holes within dimensions comparable to or smaller than the de Broglie wavelength / Bohr exciton radius.",
                "hinglish": "Jab electron ko itni choti jagah me bandh diya jaye ki uski energy discrete quantum levels me divide ho jaye.",
                "hi": "जब इलेक्ट्रॉन और होल का संचलन दे ब्रॉग्ली तरंगदैर्ध्य के तुल्य सूक्ष्म क्षेत्र में सीमित हो जाता है।"
              }
            },
            {
              "term": "Scanning Electron Microscope (SEM)",
              "definition": {
                "en": "An electron microscope that scans a focused electron beam across a specimen to produce high-resolution 3D-like images from secondary and backscattered electrons.",
                "hinglish": "Ek microscope jo electron beam ko sample par scan karke uski surface ka 3D image banata hai.",
                "hi": "एक इलेक्ट्रॉन सूक्ष्मदर्शी जो सतह पर इलेक्ट्रॉन बीम स्कैन करके द्वितीयक इलेक्ट्रॉनों से 3D छवि बनाता है।"
              }
            },
            {
              "term": "Transmission Electron Microscope (TEM)",
              "definition": {
                "en": "An electron microscope where an electron beam transmits directly THROUGH an ultra-thin specimen (<100 nm) to reveal internal atomic lattice structure.",
                "hinglish": "Microscope jisme electron beam patle sample ke aar-paar guzar kar internal atomic structure dikhati hai.",
                "hi": "सूक्ष्मदर्शी जिसमें इलेक्ट्रॉन किरण अति-पतले नमूने के आर-पार निकलकर आंतरिक परमाणु संरचना दिखाती है।"
              }
            }
          ],
          "visualType": "nanoscale",
          "visualData": {
            "initialScale": 50,
            "nanostructure": "quantum-dot"
          },
          "underlyingPrinciple": {
            "en": "Nanomaterial Dimensionality: 0D (Quantum Dot: confined in all 3 dimensions), 1D (Quantum Wire / Nanotube: confined in 2 dimensions, free in 1), 2D (Quantum Well / Graphene: confined in 1 dimension, free in 2), 3D (Bulk nanocrystalline: nano-grains in all 3 dimensions). Density of States (DOS) transitions from continuous parabolic E^(1/2) in 3D to step-like in 2D, spike-like E^(-1/2) in 1D, and delta function peaks in 0D.",
            "hinglish": "Nanomaterials ki classification: 0D (Quantum dot - teeno dimension me bandha), 1D (Nanowire/CNT - do dimension me bandha), 2D (Graphene - ek dimension me bandha). Inka Density of States alag-alag hota hai.",
            "hi": "नैनोमटेरियल का वर्गीकरण: 0D (क्वांटम डॉट), 1D (नैनोवायर), 2D (ग्राफीन)। ऊर्जा स्तरों का घनत्व (DOS) 3D के सतत वक्र से बदलकर 0D में डेल्टा फलनों के रूप में अलग-अलग हो जाता है।"
          },
          "formulaLogic": {
            "formula": "\\frac{\\text{Surface Area}}{\\text{Volume}} = \\frac{4\\pi r^2}{\\frac{4}{3}\\pi r^3} = \\frac{3}{r} \\quad \\text{(For spherical nanoparticle)}",
            "description": {
              "en": "Surface-to-volume ratio is inversely proportional to particle radius r. As radius drops from micrometers to nanometers, the specific surface area increases by orders of magnitude.",
              "hinglish": "Surface to volume ratio radius r ke inversely proportional hota hai (3/r). Radius jitna chota hoga surface area utna hi zabardast badhega.",
              "hi": "पृष्ठीय क्षेत्रफल और आयतन का अनुपात 3/r होता है; त्रिज्या घटने पर पृष्ठीय अनुपात अत्यधिक बढ़ जाता है।"
            },
            "symbols": [
              {
                "symbol": "r",
                "meaning": "Radius of the spherical nanoparticle",
                "unit": "meters (m) or nm"
              },
              {
                "symbol": "Surface Area",
                "meaning": "4πr²",
                "unit": "m²"
              },
              {
                "symbol": "Volume",
                "meaning": "(4/3)πr³",
                "unit": "m³"
              }
            ]
          },
          "workedExample": {
            "problem": {
              "en": "A solid cube of gold with side 1 cm is subdivided into microscopic nanocubes, each with side 10 nm. Calculate (a) the number of nanocubes formed, and (b) the total surface area increase factor.",
              "hinglish": "1 cm side wale gold cube ko 10 nm ke chhote nanocubes me tod diya. (a) Kitne nanocubes banenge? (b) Total surface area kitne guna badh jayega?",
              "hi": "1 सेमी भुजा वाले सोने के घन को 10 nm के नैनो-घनों में विभाजित किया गया। (a) नैनो-घनों की संख्या, तथा (b) कुल पृष्ठीय क्षेत्रफल में वृद्धि का अनुपात ज्ञात कीजिए।"
            },
            "steps": [
              {
                "stepNumber": 1,
                "title": "Calculate Number of Nanocubes N",
                "explanation": {
                  "en": "Original cube volume V_initial = (1 cm)³ = (10^-2 m)³ = 10^-6 m³. Each nanocube volume V_nano = (10 nm)³ = (10 × 10^-9 m)³ = (10^-8 m)³ = 10^-24 m³. N = V_initial / V_nano = 10^-6 / 10^-24 = 10^18 nanocubes.",
                  "hinglish": "N = 10^-6 / 10^-24 = 10^18 cubes banenge (1 quintillion cubes!).",
                  "hi": "नैनो-घनों की संख्या N = 10^-6 / 10^-24 = 10^18।"
                },
                "math": "N = \\frac{(10^{-2})^3}{(10^{-8})^3} = 10^{18}\\,\\text{nanocubes}"
              },
              {
                "stepNumber": 2,
                "title": "Calculate Initial Surface Area A_initial",
                "explanation": {
                  "en": "A single cube has 6 faces: A_initial = 6 × (1 cm)² = 6 × (10^-2 m)² = 6 × 10^-4 m² = 6 cm².",
                  "hinglish": "Initial surface area = 6 × 1 cm² = 6 cm² = 6 × 10^-4 m².",
                  "hi": "प्रारंभिक क्षेत्रफल = 6 × (1 सेमी)² = 6 सेमी²।"
                },
                "math": "A_{\\text{initial}} = 6 \\times (10^{-2})^2 = 6 \\times 10^{-4}\\,\\text{m}^2"
              },
              {
                "stepNumber": 3,
                "title": "Calculate Final Surface Area A_final and Ratio",
                "explanation": {
                  "en": "Each nanocube has area 6 × (10^-8 m)² = 6 × 10^-16 m². Total area = N × A_single = 10^18 × (6 × 10^-16) = 6 × 10^2 m² = 600 m²! Increase factor = 600 m² / (6 × 10^-4 m²) = 1,000,000 times (1 million times increase)!",
                  "hinglish": "Total area = 10^18 × 6 × 10^-16 = 600 square meters! Yaani 10 lakh guna zyada surface area!",
                  "hi": "कुल अंतिम क्षेत्रफल = 600 वर्ग मीटर! पृष्ठीय क्षेत्रफल 10 लाख गुना बढ़ गया!"
                },
                "math": "A_{\\text{final}} = 10^{18} \\times 6 \\times (10^{-8})^2 = 600\\,\\text{m}^2, \\quad \\frac{A_{\\text{final}}}{A_{\\text{initial}}} = 10^6"
              }
            ],
            "finalAnswer": "Number of nanocubes = 10^18; Total surface area increases by a factor of 1,000,000 (from 6 cm² to 600 m²)."
          },
          "commonMistakes": [
            {
              "misconception": {
                "en": "Confusing SEM and TEM imaging modes.",
                "hinglish": "SEM aur TEM ke functions ko mix kar dena.",
                "hi": "SEM और TEM के अंतर को स्पष्ट न समझना।"
              },
              "correction": {
                "en": "SEM scans reflected/secondary electrons from the SURFACE giving a 3D topographical view of thick samples. TEM transmits electrons THROUGH an ultra-thin sample giving 2D atomic projection with up to 0.1 nm resolution.",
                "hinglish": "SEM surface ka 3D view deta hai. TEM sample ke aar-paar jaakar atoms ka 2D internal view deta hai.",
                "hi": "SEM सतह का 3D चित्र देता है जबकि TEM पतले नमूने के आर-पार निकलकर आंतरिक परमाणु संरचना का 2D चित्र देता है।"
              }
            }
          ],
          "practiceQuestions": [
            {
              "id": "phy-p8",
              "level": "Beginner",
              "question": {
                "en": "Which of the following is an example of a zero-dimensional (0D) nanomaterial?",
                "hinglish": "Inme se kaunsa 0D nanomaterial ka example hai?",
                "hi": "निम्न में से कौन-सा शून्य-विमीय (0D) नैनोमटेरियल का उदाहरण है?"
              },
              "options": [
                "Quantum Dot / Nanoparticle",
                "Carbon Nanotube (CNT)",
                "Graphene sheet",
                "Bulk gold block"
              ],
              "correctAnswer": 0,
              "explanation": {
                "en": "In a quantum dot, all three spatial dimensions (x, y, z) are confined within the nanoscale (<100 nm), leaving zero degrees of freedom for electron motion, making it 0D.",
                "hinglish": "Quantum dot me teeno dimensions nanoscale me confined hoti hain, isliye ye 0D hota hai.",
                "hi": "क्वांटम डॉट में तीनों विमाएं नैनोमीटर स्तर पर सीमित होती हैं, अतः यह 0D है।"
              },
              "hint": {
                "en": "Confined in all 3 directions like a point.",
                "hinglish": "Point ki tarah teeno taraf se chota.",
                "hi": "तीनों दिशाओं में सीमित।"
              }
            }
          ],
          "summary": {
            "en": [
              "Nanoscale regime: 1 nm to 100 nm.",
              "Dominant mechanisms: High surface-to-volume ratio and quantum confinement.",
              "Dimensionality: 0D (dots), 1D (wires/tubes), 2D (graphene/films), 3D (bulk nanocomposites).",
              "SEM scans surface topography using secondary electrons (3D image).",
              "TEM passes electrons through ultra-thin slices for atomic-scale resolution (~0.1 nm)."
            ],
            "hinglish": [
              "Nanoscale: 1 nm se 100 nm tak.",
              "Do mukhya karan: Zabardast surface-to-volume ratio aur quantum confinement.",
              "Classification: 0D (Quantum dot), 1D (Nanotube), 2D (Graphene).",
              "SEM surface ka 3D view deta hai secondary electrons se.",
              "TEM internal atomic structure dikhata hai transmitted electrons se."
            ],
            "hi": [
              "नैनोस्केल परास: 1 nm से 100 nm।",
              "मुख्य प्रभाव: अत्यधिक पृष्ठीय क्षेत्रफल और क्वांटम परिरोधन।",
              "वर्गीकरण: 0D (डॉट), 1D (तार/ट्यूब), 2D (ग्राफीन परत)।",
              "SEM सतह का 3D चित्र देता है।",
              "TEM आंतरिक परमाणु संरचना का 2D चित्र देता है।"
            ]
          },
          "quiz": [
            {
              "id": "phy-q8",
              "question": {
                "en": "In the synthesis of nanomaterials, which method is an example of a \"bottom-up\" approach?",
                "hinglish": "Nanomaterials banane me \"Bottom-Up\" approach ka example kaun sa hai?",
                "hi": "नैनोमटेरियल निर्माण में \"बॉटम-अप\" विधि का उदाहरण कौन-सा है?"
              },
              "options": [
                "Sol-Gel chemical synthesis and Chemical Vapor Deposition (CVD)",
                "High-energy ball milling of large metal chunks",
                "Mechanical grinding",
                "Optical photolithography"
              ],
              "correctIndex": 0,
              "explanation": {
                "en": "Bottom-up approaches build nanostructures atom-by-atom or molecule-by-molecule through chemical reactions (e.g., Sol-Gel, CVD, self-assembly). Ball milling and grinding are top-down (breaking down large bulk materials).",
                "hinglish": "Bottom-up me atoms aur molecules ko jod-jod kar nanostructure banaya jata hai (jaise Sol-Gel, CVD). Milling aur grinding top-down methods hain.",
                "hi": "बॉटम-अप विधि में परमाणुओं और अणुओं को रासायनिक अभिक्रियाओं द्वारा जोड़कर नैनोसंरचनाएं बनाई जाती हैं (जैसे सोल-जेल, CVD)।"
              },
              "hint": {
                "en": "Building up from atoms and molecules rather than crushing large boulders.",
                "hinglish": "Chhote atoms ko aapas me jod kar banana.",
                "hi": "अणुओं को जोड़कर बड़ा ढांचा तैयार करना।"
              }
            }
          ]
        }
      ],
      "revision": {
        "onePageSummary": {
          "en": "Unit V Nanoscience & Technology Summary: Nanomaterials possess structural dimensions between 1 and 100 nm. The dramatic shift in physical and chemical properties arises from two key phenomena: massive surface-to-volume ratio (3/r) and quantum confinement. Nanomaterials are classified by dimensionality: 0D (quantum dots, delta-function DOS), 1D (nanowires/nanotubes, E^(-1/2) DOS), 2D (quantum wells/graphene, step DOS), and 3D (bulk nanocrystals, E^(1/2) DOS). Synthesis is categorized into Top-Down (ball milling, lithography) and Bottom-Up (sol-gel, chemical vapor deposition). Characterization is achieved through SEM (secondary electron surface topography) and TEM (transmitted electron atomic lattice imaging).",
          "hinglish": "Unit V Nanoscience Revision: Nanomaterials 1-100 nm range me aate hain. Inke badle hue properties high surface-to-volume ratio aur quantum confinement ke karan hote hain. Classification: 0D (quantum dots), 1D (nanowires), 2D (graphene), 3D (bulk nanocomposites). Banane ke tarike: Top-down (bada tod kar chota karna) aur Bottom-up (atoms jod kar banana). Characterization: SEM surface ka 3D view deta hai aur TEM transmitted beam se atomic resolution deta hai.",
          "hi": "इकाई V नैनोविज्ञान और प्रौद्योगिकी सारांश: नैनोमटेरियल का आकार 1 से 100 nm होता है। इनके विशिष्ट गुण उच्च पृष्ठीय क्षेत्रफल और क्वांटम परिरोधन के कारण होते हैं। वर्गीकरण: 0D (क्वांटम डॉट), 1D (नैनोवायर), 2D (ग्राफीन)। संश्लेषण विधियाँ: टॉप-डाउन (बॉल मिलिंग) और बॉटम-अप (सोल-जेल, CVD)। लक्षण-वर्णन: SEM द्वारा सतह का 3D परीक्षण तथा TEM द्वारा आंतरिक परमाणु संरचना का परीक्षण किया जाता है।"
        },
        "shortNotes": [
          {
            "topic": "Carbon Nanotubes (CNTs)",
            "content": {
              "en": "Rolled-up seamless cylinders of graphene sheets. Can be Single-Walled (SWCNT, ~1-2 nm diameter) or Multi-Walled (MWCNT). Possess tensile strength 100x steel and high thermal conductivity.",
              "hinglish": "Graphene sheet ke bane cylinder taar. Single-walled ya multi-walled hote hain. Steel se 100 guna zyada strong hote hain.",
              "hi": "ग्राफीन चादरों के बेलनाकार रूप। स्टील से 100 गुना अधिक मजबूत और उत्कृष्ट चालक।"
            }
          },
          {
            "topic": "SEM vs TEM",
            "content": {
              "en": "SEM: Resolves ~1-5 nm, uses reflected/secondary electrons, thick samples OK, 3D surface view. TEM: Resolves ~0.1 nm (atomic lattice), uses transmitted electrons, sample must be ultra-thin (<100 nm), 2D internal view.",
              "hinglish": "SEM: Surface ka 3D view (1-5 nm). TEM: Atoms ka 2D view aar-paar dekh kar (~0.1 nm).",
              "hi": "SEM सतह की 3D छवि देता है। TEM पतले नमूने के आर-पार निकलकर 0.1 nm परमाणु विभेदन देता है।"
            }
          }
        ],
        "keyFormulas": [
          {
            "name": "Surface-to-Volume Ratio (Sphere)",
            "formula": "\\frac{S}{V} = \\frac{3}{r}",
            "units": "m⁻¹",
            "note": "Inversely proportional to radius"
          },
          {
            "name": "Bragg’s Law (Electron Diffraction)",
            "formula": "2d \\sin(\\theta) = n\\lambda",
            "units": "d, λ in meters/Å",
            "note": "Used in TEM / XRD analysis"
          },
          {
            "name": "de Broglie Electron Wavelength",
            "formula": "\\lambda = \\frac{1.227}{\\sqrt{V}}\\,\\text{nm}",
            "units": "nm",
            "note": "In TEM at 200 kV, λ ≈ 0.027 Å"
          }
        ],
        "mindMap": [
          {
            "node": "Nanoscience & Nanotechnology",
            "children": [
              "Fundamentals (Surface/Volume, Quantum Confinement)",
              "Dimensionality (0D, 1D, 2D, 3D)",
              "Synthesis Approaches",
              "Characterization Tools"
            ]
          },
          {
            "node": "Synthesis",
            "children": [
              "Top-Down (Milling, Etching)",
              "Bottom-Up (Sol-Gel, CVD, Colloidal)"
            ]
          },
          {
            "node": "Characterization",
            "children": [
              "SEM (Scanning Electron Microscopy)",
              "TEM (Transmission Electron Microscopy)",
              "AFM / XRD"
            ]
          }
        ],
        "differences": [
          {
            "conceptA": "Scanning Electron Microscope (SEM)",
            "conceptB": "Transmission Electron Microscope (TEM)",
            "comparisonPoints": [
              {
                "feature": "Electron Path",
                "a": "Scans over specimen surface; detects reflected/secondary electrons",
                "b": "Transmits directly THROUGH an ultra-thin slice of specimen"
              },
              {
                "feature": "Resolution",
                "a": "Moderate resolution (~1 nm to 5 nm)",
                "b": "Extremely high sub-atomic resolution (~0.05 nm to 0.1 nm)"
              },
              {
                "feature": "Sample Thickness",
                "a": "Can accommodate thick, bulk solid samples",
                "b": "Specimen MUST be ultra-thin (<100 nm)"
              },
              {
                "feature": "Image Type",
                "a": "Direct 3D-like topographical surface morphology",
                "b": "2D projection of internal crystalline and atomic defects"
              }
            ]
          }
        ],
        "flashcards": [
          {
            "front": "What is the size range of the nanoscale?",
            "back": "1 nanometer to 100 nanometers (10^-9 m)."
          },
          {
            "front": "Why does the melting point of gold decrease at the nanoscale?",
            "back": "Because a huge percentage of atoms reside on the surface with fewer neighboring bonds, requiring significantly less thermal energy to overcome cohesive forces."
          },
          {
            "front": "Give an example of a 2D nanomaterial.",
            "back": "Graphene (a single atomic layer of carbon atoms arranged in a 2D hexagonal honeycomb lattice)."
          }
        ],
        "shortAnswerQuestions": [
          {
            "question": "Why must electron microscopes operate under high vacuum?",
            "answer": "To prevent electrons in the beam from colliding with and being scattered by ambient gas/air molecules, ensuring an uninterrupted trajectory and preventing filament burnout."
          }
        ],
        "longAnswerQuestions": [
          {
            "question": "Explain the working principle and optical column of a Transmission Electron Microscope (TEM) with a labeled diagram.",
            "outline": "1. Electron source (field emission gun) generating high-energy beam (100-300 kV).\n2. Electromagnetic condenser lenses to focus beam.\n3. Specimen holder accommodating thin specimen (<100 nm).\n4. Objective lens forming first intermediate image.\n5. Projector lenses magnifying image onto fluorescent screen or CCD detector.\n6. Contrast mechanisms (mass-thickness and diffraction contrast)."
          }
        ],
        "numericalPractice": [
          {
            "question": "In a TEM, electrons are accelerated by a voltage of 100 kV. Calculate the de Broglie wavelength of these electrons neglecting relativistic effects.",
            "given": "V = 100,000 V = 10^5 V",
            "formula": "\\lambda = \\frac{1.227}{\\sqrt{V}}\\,\\text{nm}",
            "solution": "λ = 1.227 / √100,000 = 1.227 / 316.23 ≈ 0.00388 nm = 0.0388 Å."
          }
        ]
      }
    }
  ],
  "examQuestions": [
    {
      "id": "phy-u1-eq1",
      "unitNumber": "Unit I",
      "type": "Short",
      "marks": 5,
      "question": "Why does a soap film appear black just before rupturing, and why do thin films show colors in white light?",
      "solution": "1. Dark appearance before bursting: When a vertical soap film drains under gravity, its top thickness approaches zero (t << λ). At normal incidence, the optical path difference is Δ = 2μt - λ/2 ≈ -λ/2. The two reflected waves are 180° out of phase across all visible wavelengths, producing destructive interference and complete darkness. 2. Colors in white light: White light contains a spectrum from 400 nm to 700 nm. At any given thickness t, the constructive condition 2μt cos r = (2m - 1)λ/2 is satisfied for one specific wavelength, causing that color to be reflected strongly while complementary colors are transmitted. As film thickness varies, different colors are amplified in different regions, producing vibrant rainbow interference patterns."
    },
    {
      "id": "phy-u1-eq2",
      "unitNumber": "Unit I",
      "type": "Long",
      "marks": 10,
      "question": "Derive the expression for the optical path difference in a plane parallel thin film illuminated by light, and obtain the conditions for constructive and destructive interference in reflected light. Explain Stokes’ phase shift.",
      "solution": "1. Ray Path & Geometry: Consider a plane parallel dielectric film of thickness t and refractive index μ. An incident ray AB strikes the top surface at angle i. Part reflects as ray BC (Ray 1), and part refracts at angle r along BD into the film. At bottom point D, it reflects along DE, hits the top surface at E, and refracts into air as ray EF (Ray 2) parallel to BC. Drop perpendicular BM from B to EF. 2. Optical Path Difference: Δ = Path(AB + BD + DE in film) - Path(BM in air) = μ(BD + DE) - BM. From right triangle BDE, BD = DE = t / cos r. From right triangle BME, BM = BE sin i. Distance BE = 2t tan r, so BM = 2t tan r sin i = 2t (sin r / cos r)(μ sin r) = 2μt sin² r / cos r. Substituting into Δ: Δ = μ(2t / cos r) - (2μt sin² r / cos r) = (2μt / cos r)(1 - sin² r) = 2μt cos r. 3. Stokes’ Law: When reflection occurs at the top boundary from a rarer to a denser medium, an intrinsic phase reversal of π radians (equivalent to λ/2 path length) occurs on Ray 1. No phase shift occurs at the bottom internal reflection. Total effective path difference in reflection: Δ_eff = 2μt cos r - λ/2. 4. Conditions: (a) Constructive (Bright): Δ_eff = mλ => 2μt cos r = (2m - 1)λ/2. (b) Destructive (Dark): Δ_eff = (2m - 1)λ/2 => 2μt cos r = mλ."
    },
    {
      "id": "phy-u1-eq3",
      "unitNumber": "Unit I",
      "type": "Long",
      "marks": 10,
      "question": "Derive the expressions for the diameters of dark and bright rings in Newton’s rings reflected system. How can this experiment be used to determine the refractive index of a liquid?",
      "solution": "1. Geometry: A plano-convex lens of large radius of curvature R rests on a flat glass plate. By circle sagitta theorem: r² = t(2R - t) ≈ 2Rt => t = r² / (2R), where t is the air film thickness at distance r from the contact point. 2. Interference Condition: For normal incidence, reflected path difference is Δ = 2t + λ/2 = r²/R + λ/2. (a) Dark rings: Δ = (2n + 1)λ/2 => r_n²/R = nλ => r_n² = n R λ. Diameter Dn = 2 r_n => Dn² = 4 n R λ. (b) Bright rings: Δ = nλ => r_n²/R = (2n - 1)λ/2 => Dn² = 2(2n - 1) R λ. 3. Liquid Refractive Index: (a) In air, D_{n+p}² - D_n² = 4 p R λ. (b) When a liquid of index μ is placed between lens and plate, the path difference becomes 2μt + λ/2, giving (D_{n+p}² - D_n²)_liquid = 4 p R λ / μ. (c) Dividing the air equation by the liquid equation yields: μ = (D_{n+p}² - D_n²)_air / (D_{n+p}² - D_n²)_liquid. By measuring ring diameters in air and liquid using a traveling microscope, μ is determined with high precision."
    },
    {
      "id": "phy-u1-eq4",
      "unitNumber": "Unit I",
      "type": "Numerical",
      "marks": 10,
      "question": "In a Newton’s rings experiment, the diameter of the 5th dark ring is 0.33 cm and that of the 25th dark ring is 0.67 cm. If the radius of curvature of the lens is 100 cm, calculate: (a) the wavelength of the monochromatic light used, and (b) the diameter of the 15th dark ring.",
      "solution": "Given: n = 5, D5 = 0.33 cm => D5² = 0.1089 cm²; n + p = 25 => p = 20, D25 = 0.67 cm => D25² = 0.4489 cm²; R = 100 cm. (a) Wavelength λ: Formula: λ = (D_{n+p}² - D_n²) / (4 p R) = (0.4489 - 0.1089) / (4 × 20 × 100) = 0.3400 / 8000 = 4.25 × 10^-5 cm = 425 nm. (b) Diameter of 15th dark ring (n = 15): D_n² = 4 n R λ => D15² = 4 × 15 × 100 cm × (4.25 × 10^-5 cm) = 6000 × 4.25 × 10^-5 = 0.2550 cm² => D15 = √(0.2550) = 0.505 cm."
    },
    {
      "id": "phy-u1-eq5",
      "unitNumber": "Unit I",
      "type": "Long",
      "marks": 10,
      "question": "Derive the intensity distribution for Fraunhofer diffraction through a single slit of width a, and establish the conditions for the central maximum, secondary maxima, and minima.",
      "solution": "1. Setup: A plane monochromatic wavefront of wavelength λ strikes a single slit AB of width a. Huygens secondary wavelets emitted at angle θ travel to a convex lens and focus at point P on the screen. 2. Wavelet Integration: Divide the slit into infinite infinitesimal strips of width dy. The phase difference between wavelets from the origin and strip at distance y is δ(y) = (2π/λ) y sin θ. The resultant electric field is E = (A/a) ∫_{-a/2}^{a/2} e^{i (ky sin θ - ωt)} dy. Substituting β = (π a sin θ) / λ: E = A [sin β / β] e^{-i ωt}. 3. Intensity Distribution: I = |E|² = I0 [sin(β) / β]², where I0 is the intensity at the center. 4. Conditions: (a) Central Maximum: As θ -> 0, β -> 0, lim_{β->0} [sin β / β] = 1, so I = I0 (broad and intense). (b) Minima: I = 0 when sin β = 0 with β != 0 => β = mπ => (π a sin θ)/λ = mπ => a sin θ = m λ (m = ±1, ±2...). (c) Secondary Maxima: Setting dI/dβ = 0 yields tan β = β. Intersection of y = tan β and y = β occurs at β ≈ ±1.43π, ±2.46π, ±3.47π. The relative intensities are I1/I0 = [sin(1.43π)/(1.43π)]² ≈ 1/22 (4.5%) and I2/I0 ≈ 1/61 (1.6%)."
    },
    {
      "id": "phy-u1-eq6",
      "unitNumber": "Unit I",
      "type": "Numerical",
      "marks": 10,
      "question": "A diffraction grating has 15,000 lines per inch. (a) Find the angle of diffraction for the second order of light of wavelength λ = 500 nm. (b) Can a fourth order be observed with this grating for this wavelength? Justify mathematically.",
      "solution": "Given: N = 15,000 lines/inch. 1 inch = 2.54 cm = 0.0254 m. Grating element (a + b) = 0.0254 / 15000 = 1.6933 × 10^-6 m = 1693.3 nm. λ = 500 nm. (a) For second order (n = 2): Grating equation: (a + b) sin θ = n λ => sin θ = (2 × 500 nm) / 1693.3 nm = 1000 / 1693.3 = 0.5905. Angle θ = arcsin(0.5905) = 36.19° (or 36° 11'). (b) For fourth order (n = 4): sin θ = (4 × 500 nm) / 1693.3 nm = 2000 / 1693.3 = 1.181. Since sin θ cannot exceed 1.0 (sin θ ≤ 1), sin θ = 1.181 is mathematically and physically impossible. Therefore, the fourth order CANNOT be observed."
    },
    {
      "id": "phy-u1-eq7",
      "unitNumber": "Unit I",
      "type": "Long",
      "marks": 10,
      "question": "Explain the phenomenon of Double Refraction in uniaxial crystals. Describe the construction and working of a Nicol Prism with a neat ray diagram.",
      "solution": "1. Double Refraction: When unpolarized light enters an anisotropic crystal like Calcite or Quartz, it splits into two plane-polarized refracted rays vibrating at right angles to each other. (a) Ordinary Ray (O-ray): Obeys Snell’s law, has constant velocity vo, and forms a spherical wavefront. (b) Extraordinary Ray (E-ray): Does not obey Snell’s law, velocity ve varies with direction, and forms an ellipsoidal wavefront. 2. Calcite Constants: Calcite is a negative uniaxial crystal with μ_o = 1.658 and μ_e = 1.486 (ve > vo). 3. Nicol Prism Construction: A calcite rhomb with length-to-breadth ratio 3:1 is taken, and its end faces are ground to reduce angles from 71° to 68°. The rhomb is cut into two halves along a plane passing through both blunt corners, polished, and cemented back together with Canada balsam (refractive index μ = 1.550). 4. Working & Total Internal Reflection: Unpolarized light enters the end face and divides into O-ray and E-ray. (a) For O-ray (μ_o = 1.658): It travels from denser calcite to rarer Canada balsam (μ = 1.550). The critical angle is θc = arcsin(1.550 / 1.658) = 69.3°. Because the prism dimensions ensure the O-ray strikes the balsam interface at an angle > 69.3°, it undergoes Total Internal Reflection (TIR), gets deflected to the side, and is absorbed by the black-painted casing. (b) For E-ray (μ_e = 1.486): It travels from rarer calcite to denser balsam (1.486 < 1.550). TIR cannot occur, so the E-ray transmits through the balsam without hindrance and emerges as 100% plane-polarized light."
    },
    {
      "id": "phy-u1-eq8",
      "unitNumber": "Unit I",
      "type": "Numerical",
      "marks": 10,
      "question": "A 20 cm tube containing 25 cm³ of a sugar solution produces an optical rotation of 13.2°. If the specific rotation of sugar is 66° / (dm · g/cm³), calculate: (a) the concentration c of the sugar solution, and (b) the total mass of sugar dissolved in the tube.",
      "solution": "Given: Tube length l = 20 cm = 2.0 dm. Optical rotation θ = 13.2°. Specific rotation S = 66° / (dm · g/cm³). Volume of solution V = 25 cm³. (a) Concentration c: Formula: S = θ / (l · c) => c = θ / (l · S) = 13.2° / (2.0 dm × 66°) = 13.2 / 132 = 0.10 g/cm³ (or 100 g/L). (b) Total mass of sugar dissolved: Mass = Concentration × Volume = 0.10 g/cm³ × 25 cm³ = 2.50 grams."
    },
    {
      "id": "phy-eq-3",
      "unitNumber": "Unit II",
      "type": "Long",
      "marks": 10,
      "question": "Explain the principle, construction, and working of a Helium-Neon (He-Ne) gas laser with energy level diagram. Why is a 4-level laser superior to a 3-level laser?",
      "solution": "1. Principle: Four-level continuous gas laser emitting at 632.8 nm.\n2. Construction: Discharge tube containing 10:1 mixture of He and Ne gases at low pressure (~1 mm Hg). Brewster windows and parallel confocal mirrors.\n3. Pumping: Electric discharge excites He atoms to metastable 20.61 eV level.\n4. Energy Transfer: Resonant collision transfers energy from He to Ne (3s levels).\n5. Lasing Transition: Stimulated emission occurs between Ne 3s and 2p levels emitting 632.8 nm photons.\n6. Superiority over 3-level: In a 3-level laser (like Ruby), the terminal level is the ground state, which is naturally packed with atoms, requiring immense pumping power to keep N2 > N1. In a 4-level laser, the lower laser level (level 2) is well above ground and rapidly empties, so even a modest population in level 3 easily achieves population inversion."
    },
    {
      "id": "phy-eq-4",
      "unitNumber": "Unit II",
      "type": "Numerical",
      "marks": 5,
      "question": "Calculate the Numerical Aperture and Acceptance Angle of an optical fiber having core refractive index 1.55 and cladding refractive index 1.50.",
      "solution": "Given: n1 = 1.55, n2 = 1.50.\nNumerical Aperture NA = √(n1² - n2²) = √(1.55² - 1.50²) = √(2.4025 - 2.25) = √0.1525 ≈ 0.3905.\nAcceptance Angle θ_a = sin^-1(NA) = sin^-1(0.3905) ≈ 22.98° (or 23°)."
    },
    {
      "id": "phy-eq-5",
      "unitNumber": "Unit III",
      "type": "Short",
      "marks": 5,
      "question": "State Heisenberg’s Uncertainty Principle. Using it, prove that electrons cannot reside inside an atomic nucleus of radius ~10^-14 m.",
      "solution": "Heisenberg principle: Δx · Δp ≥ ℏ/2.\nIf an electron exists inside a nucleus, its position uncertainty is at most the nuclear diameter: Δx ≈ 2 × 10^-14 m.\nMinimum momentum uncertainty: Δp ≥ ℏ / (2Δx) = (1.054 × 10^-34) / (2 × 2 × 10^-14) ≈ 2.635 × 10^-21 kg·m/s.\nRelativistic energy: E ≈ p·c = (2.635 × 10^-21) × (3 × 10^8) = 7.9 × 10^-13 J ≈ 4.9 MeV (or > 20 MeV non-relativistically).\nBeta decay experiments show emitted electrons possess energies only around 2 to 3 MeV. Hence, free electrons cannot reside inside the nucleus before emission."
    },
    {
      "id": "phy-eq-6",
      "unitNumber": "Unit IV",
      "type": "Long",
      "marks": 10,
      "question": "Derive Maxwell’s four equations in differential form and explain the concept of displacement current. How does it fix the inconsistency in Ampere’s Law?",
      "solution": "1. Inconsistency in Ampere’s law: ∇ × B = μ₀J. Taking divergence: ∇ · (∇ × B) = 0, which requires ∇ · J = 0. However, the continuity equation requires ∇ · J = -∂ρ/∂t, which is non-zero for time-varying charge distributions (e.g. charging capacitor).\n2. Maxwell’s displacement current fix: Substitute ρ = ε₀(∇ · E) from Gauss’s law into continuity equation: ∇ · (J + ε₀∂E/∂t) = 0. Maxwell introduced displacement current density J_d = ε₀∂E/∂t.\n3. Four equations in differential form:\n- ∇ · E = ρ / ε₀ (Gauss law)\n- ∇ · B = 0 (No magnetic monopoles)\n- ∇ × E = -∂B / ∂t (Faraday’s law)\n- ∇ × B = μ₀J + μ₀ε₀(∂E / ∂t) (Ampere-Maxwell law)."
    },
    {
      "id": "phy-eq-7",
      "unitNumber": "Unit V",
      "type": "Long",
      "marks": 10,
      "question": "What are nanomaterials? Differentiate between 0D, 1D, 2D, and 3D nanomaterials with suitable examples. Describe the working of a Scanning Electron Microscope (SEM).",
      "solution": "1. Nanomaterials definition: Materials with at least one dimension between 1 nm and 100 nm.\n2. Dimensionality:\n- 0D: Confined in all 3 dimensions (Quantum dots, fullerenes, nanoparticles).\n- 1D: Confined in 2 dimensions, free in 1 (Nanowires, nanorods, Carbon Nanotubes).\n- 2D: Confined in 1 dimension, free in 2 (Graphene, MoS2 sheets, thin films).\n- 3D: Bulk nanocrystalline materials composed of nanoscale grains.\n3. SEM working: Electron gun emits high-energy electron beam (1-30 kV). Condenser and objective lenses focus it to a probe spot (~1 nm). Scan coils raster beam across specimen. Emitted secondary and backscattered electrons are collected by Everhart-Thornley detector and mapped to display monitor to form a high-depth-of-field 3D surface image."
    }
  ]
};
