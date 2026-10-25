import { Subject } from '../types';

export const ENVIRONMENTAL_SCIENCE: Subject = {
  id: 'environmental-science',
  title: 'Environmental Science',
  category: 'Theory',
  description: 'Understand Indian indigenous environmental systems, atmospheric layers, traditional water harvesting, ecosystems, pollution control, solid/liquid waste management, and key environmental legislation.',
  icon: 'Leaf',
  color: 'from-green-600 to-emerald-700',
  isOfficial: true,
  syllabusSource: 'Official University Syllabus (B.Tech 1st Year)',
  unitsCount: 4,
  units: [
    {
      id: 'evs-u1',
      unitNumber: 'Unit I',
      title: 'Indian Knowledge System — Indigenous Practices, Air and Environment',
      description: 'Environment nature and scope, need for public awareness, renewable and non-renewable resources, atmospheric layers, traditional agriculture (organic farming, crop rotation, intercropping), traditional water management (Stepwells, Tankas, Baolis), and forest conservation (Sacred groves, Agroforestry).',
      topics: [
        'Environment: nature, scope, and importance; Need for public awareness',
        'Renewable and non-renewable resources: Energy, mineral, and land resources',
        'Atmosphere: introduction and detailed vertical thermal layers (Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere)',
        'Traditional agricultural practices: Organic farming, crop rotation, and intercropping for soil fertility',
        'Indigenous water management techniques: Stepwells (Vavs/Baolis), Tankas, and Johads for rainwater conservation',
        'Forest management and conservation methods: Sacred groves (Devrais) and Agroforestry systems'
      ],
      lessons: [
        {
          id: 'evs-u1-l1',
          unitId: 'evs-u1',
          subjectId: 'environmental-science',
          title: 'Atmospheric Layers & Traditional Water Systems',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic geography and science'],
          realLifeQuestion: {
            en: 'How did communities in the arid Thar desert of Rajasthan thrive for centuries without modern piped water or electric borewells?',
            hinglish: 'Rajasthan ke Thar registan me bina borewell aur motor ke hazaron saal log paani kaise preserve karte the?',
            hi: 'राजस्थान के थार मरुस्थल में बिना मोटर और बोरवेल के प्राचीन समुदाय वर्ष भर पानी का प्रबंधन कैसे करते थे?'
          },
          simpleExplanation: {
            en: 'Ancient Indian civil engineering developed decentralized rainwater harvesting systems like Stepwells (Baolis/Vavs) and Tankas (underground lime-plastered cisterns). These structures caught seasonal monsoon runoff, filtered it through sand beds, and stored it underground where desert heat could not evaporate it. Simultaneously, Earth’s atmosphere shields us across five distinct thermal layers, notably the Stratosphere holding the protective Ozone Layer.',
            hinglish: 'Prachin Bharat ke civil engineers ne Stepwells (Baolis) aur Tankas banaye. Barish ke paani ko subterranean cisterns me store kiya jata tha jahan dhoop se evaporation zero hota tha aur paani saal bhar thanda aur peene yogya rehta tha. Sath hi hamari atmosphere 5 layers me bati hai, jisme Stratosphere me ozone layer hume bachati hai.',
            hi: 'प्राचीन भारतीय जल प्रबंधन में बावड़ियों (Stepwells) और टांका (Tankas) का उपयोग किया जाता था जो वर्षा जल को भूमिगत सुरक्षित रखते थे ताकि वाष्पीकरण न हो सके।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'A Tanka is like a subterranean thermos flask: closed, cool, and dark, preventing sunlight from growing green algae or evaporating precious drinking water.',
              hinglish: 'Tanka ek zameen ke andar bane thermos flask jaisa hai: dhoop aur hawa band hone se paani kharab nahi hota.',
              hi: 'टांका जमीन के नीचे बने थर्मस की तरह है जो वाष्पीकरण और शैवाल से पानी की रक्षा करता है।'
            },
            limitations: {
              en: 'A thermos holds a few liters, whereas community stepwells held millions of liters and doubled as cool architectural gathering hubs.',
              hinglish: 'Baoli lakhon liter paani store karti thi aur community gathering place bhi thi.',
              hi: 'बावड़ी लाखों लीटर पानी संचित करती थी और सामाजिक केंद्र भी थी।'
            }
          },
          terminology: [
            {
              term: 'Baolis (Stepwells / Vavs)',
              definition: {
                en: 'Architectural subterranean reservoirs with descending stone steps that allowed access to fluctuating groundwater and collected seasonal monsoon runoff.',
                hinglish: 'Seedi-daar kuye jahan zameen ke andar utar kar paani tak pahuche.',
                hi: 'सीढ़ीदार कुएं जो भूजल स्तर के अनुसार पानी तक पहुंचने की सुविधा देते थे।'
              }
            },
            {
              term: 'Tankas',
              definition: {
                en: 'Traditional covered underground cylindrical rainwater storage chambers built in Thar desert homesteads with filtered catchment aprons (Agors).',
                hinglish: 'Ghar ke aangan me bana underground pakka tanka jisme barish ka paani filter hoke store hota hai.',
                hi: 'थार मरुस्थल के घरों में वर्षा जल संचयन हेतु निर्मित भूमिगत कुण्ड।'
              }
            },
            {
              term: 'Stratosphere',
              definition: {
                en: 'The atmospheric layer extending from 12 km to 50 km altitude, containing the ozone layer (O3) which absorbs lethal solar UV-B radiation.',
                hinglish: '12 se 50 km ki atmospheric layer jisme Ozone Layer hoti hai.',
                hi: '12 से 50 किमी की वायुमंडलीय परत जिसमें पराबैंगनी किरणों को सोखने वाली ओजोन परत स्थित है।'
              }
            }
          ],
          visualType: 'atmosphere-layers',
          underlyingPrinciple: {
            en: 'Atmospheric stratification is governed by temperature lapse rates, with temperature rising in the stratosphere due to exothermic ozone photolysis. Traditional Indian hydrology follows natural gravity filtration and subterranean thermal insulation.',
            hinglish: 'Atmosphere ke layers temperature gradient par based hain. Indian water systems gravity filtration aur underground insulation par kaam karte hain.',
            hi: 'वायुमंडलीय परतें तापमान प्रवणता पर आधारित हैं, और पारंपरिक जल प्रणालियां गुरुत्वाकर्षण निस्पंदन और थर्मल इन्सुलेशन पर आधारित हैं।'
          },
          workedExample: {
            problem: {
              en: 'Calculate the volume of drinking water collected annually by a residential rooftop Tanka having a catchment area of 80 m² in an arid zone with 350 mm annual rainfall, assuming 80% collection runoff efficiency.',
              hinglish: '80 m² chhat aur 350 mm barish wale area me ek Tanka kitna paani collect karega (80% efficiency)?',
              hi: '80 वर्ग मीटर छत और 350 मिमी वर्षा वाले क्षेत्र में 80% दक्षता पर संचित जल की गणना करें।'
            },
            steps: [
              { stepNumber: 1, title: 'Convert Units', explanation: { en: 'Annual rainfall depth h = 350 mm = 0.35 m. Catchment Area A = 80 m².', hinglish: 'Rainfall h = 0.35 m, Area A = 80 m².', hi: 'वर्षा h = 0.35 मीटर, क्षेत्रफल = 80 वर्ग मीटर।' } },
              { stepNumber: 2, title: 'Total Rainfall Volume', explanation: { en: 'V_total = Area × depth = 80 m² × 0.35 m = 28 m³.', hinglish: 'V_total = 80 × 0.35 = 28 m³.', hi: 'कुल वर्षा = 28 घन मीटर।' } },
              { stepNumber: 3, title: 'Apply Runoff Efficiency', explanation: { en: 'V_collected = 28 m³ × 0.80 = 22.4 m³ = 22,400 Liters.', hinglish: 'V = 28 × 0.80 = 22.4 m³ = 22,400 Liters.', hi: 'संचित जल = 22,400 लीटर।' } }
            ],
            finalAnswer: 'Harvested Water = 22,400 Liters (sufficient for a family of 5 drinking water for ~370 days at 12 L/day).'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Assuming modern concrete dams and borewells are always technologically superior to indigenous stepwells and tankas.',
                hinglish: 'Yeh sochna ki sirf borewell aur concrete dam hi sahi hain.',
                hi: 'यह मानना कि आधुनिक बोरवेल पारंपरिक जल प्रणालियों से हमेशा बेहतर हैं।'
              },
              correction: {
                en: 'Deep borewells cause catastrophic groundwater depletion and arsenic/fluoride contamination; indigenous tankas and stepwells recharge aquifers without energy costs.',
                hinglish: 'Borewell se groundwater khatam ho jata hai; stepwells aur tankas se water level upar aata hai.',
                hi: 'बोरवेल से भूजल स्तर घटता है जबकि पारंपरिक प्रणालियां जल स्तर को पुनर्भरण करती हैं।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'evs-u1-p1',
              level: 'Beginner',
              question: {
                en: 'Which layer of the atmosphere contains the protective ozone layer?',
                hinglish: 'Ozone layer atmosphere ke kaun se layer me hoti hai?',
                hi: 'ओजोन परत वायुमंडल की किस परत में स्थित है?'
              },
              options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
              correctIndex: 1,
              explanation: {
                en: 'The Stratosphere (12–50 km) houses the ozone layer which filters out hazardous solar UV-B rays.',
                hinglish: 'Stratosphere me ozone layer hoti hai jo UV rays ko rokati hai.',
                hi: 'समताप मंडल (Stratosphere) में ओजोन परत स्थित है।'
              },
              hint: { en: 'Above troposphere.', hinglish: 'Troposphere ke upar.', hi: 'क्षोभमंडल के ऊपर।' }
            }
          ],
          summary: {
            en: [
              'Atmosphere features 5 thermal layers: Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere.',
              'Indigenous Indian water conservation (Stepwells, Tankas, Baolis) harnesses rainfall with subterranean thermal cooling.',
              'Traditional agriculture (Organic farming, crop rotation, intercropping) preserves topsoil microbiome.',
              'Sacred groves are community-protected biological gene banks protecting endemic biodiversity.'
            ],
            hinglish: [
              'Atmosphere ke 5 layers hote hain, Stratosphere me ozone hoti hai.',
              'Indian indigenous systems jaise Baolis aur Tankas barish ka paani bachate hain.',
              'Sacred groves vano aur aushadhiya paudho ki raksha karte hain.'
            ],
            hi: [
              'वायुमंडल में 5 परतें होती हैं; समताप मंडल में ओजोन परत स्थित है।',
              'बावड़ी और टांका जैसी स्वदेशी प्रणालियां जल संरक्षण की मिसाल हैं।',
              'पवित्र उपवन (Sacred Groves) जैव विविधता के प्राकृतिक बैंक हैं।'
            ]
          },
          quiz: [
            {
              id: 'evs-u1-q1',
              question: {
                en: 'What is a "Sacred Grove" (Devrai / Oran) in Indian environmental conservation?',
                hinglish: 'Indian environmental conservation me "Sacred Grove" ka kya matlab hai?',
                hi: 'भारतीय पर्यावरण संरक्षण में "पवित्र उपवन" (Sacred Grove) का क्या अर्थ है?'
              },
              options: [
                'A commercial timber plantation of eucalyptus trees',
                'A forest patch communally protected through cultural/religious sanctity that acts as a biodiversity gene bank',
                'An artificial greenhouse in an agricultural university',
                'A deforested area cleared for solar panels'
              ],
              correctIndex: 1,
              explanation: {
                en: 'Sacred groves are pristine forest pockets preserved by indigenous communities through cultural taboos, conserving rare flora and water springs.',
                hinglish: 'Sacred groves gaon walo dwara dharmik aadar se bachaye gaye jungle hote hain jahan ped kaatna mana hota hai.',
                hi: 'समुदाय द्वारा संरक्षित प्राकृतिक वन क्षेत्र जो दुर्लभ पौधों और जीवों की शरणस्थली हैं।'
              },
              hint: { en: 'Community-preserved forest.', hinglish: 'Community protected forest.', hi: 'सामुदायिक संरक्षित वन।' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'Indian Environmental Knowledge Systems emphasize symbiotic living with nature: 5 atmospheric layers shield the Earth, indigenous hydrology (Baolis, Tankas, Johads) maximizes water resilience, and agroforestry alongside sacred groves safeguards regional biodiversity.',
          hinglish: 'Indian Knowledge System me Baolis, Tankas aur Sacred Groves ke zariye prakriti ke sath santulan banaya gaya tha.',
          hi: 'भारतीय ज्ञान प्रणाली में प्रकृति के साथ सह-अस्तित्व पर बल दिया गया है जिसमें बावड़ियां, टांका और पवित्र उपवन प्रमुख हैं।'
        },
        shortNotes: [
          { topic: 'Atmospheric Layers', content: { en: 'Troposphere (weather), Stratosphere (Ozone), Mesosphere (meteors burn), Thermosphere (auroras/ionosphere), Exosphere (satellites).', hinglish: 'Troposphere me mausam, Stratosphere me ozone.', hi: 'क्षोभमंडल में मौसम, समताप मंडल में ओजोन।' } }
        ],
        keyFormulas: [],
        mindMap: [{ node: 'Unit I: Indian Knowledge & Air', children: ['5 Atmospheric Layers', 'Renewable vs Non-renewable', 'Stepwells & Tankas', 'Organic Farming & Crop Rotation', 'Sacred Groves & Agroforestry'] }],
        differences: [
          {
            conceptA: 'Traditional Rainwater Tanka',
            conceptB: 'Modern Deep Borewell',
            comparisonPoints: [
              { feature: 'Water Source', a: 'Direct surface rainwater runoff (pure, zero salts)', b: 'Deep fossil groundwater (often high in fluorides/arsenic)' },
              { feature: 'Energy Consumption', a: 'Zero electricity; gravity flow', b: 'Continuous high power pumping required' },
              { feature: 'Aquifer Impact', a: 'Recharges regional water table', b: 'Depletes and mines underground water table' }
            ]
          }
        ],
        flashcards: [
          { front: 'What is Rani ki Vav in Gujarat?', back: 'An intricately engineered multi-tiered stepwell (UNESCO World Heritage Site) demonstrating historic Indian water conservation architecture.' },
          { front: 'Why does temperature increase with altitude in the Stratosphere?', back: 'Due to exothermic absorption of solar ultraviolet radiation by ozone molecules (O3).' }
        ],
        shortAnswerQuestions: [
          { question: 'Define agroforestry and explain two environmental advantages it offers over monoculture.', answer: 'Agroforestry is the deliberate integration of trees and shrubs with agricultural crops on the same land. Advantages: 1. Deep tree roots prevent topsoil erosion and cycle subsoil nutrients. 2. Provides windbreaks and microclimate shading that reduces crop evaporation losses.' }
        ],
        longAnswerQuestions: [
          { question: 'Describe the five vertical layers of the atmosphere with their altitude ranges, temperature profiles, and physical significance.', outline: '1. Troposphere (0-12 km, negative lapse rate, holds 75% mass and all clouds/weather).\n2. Stratosphere (12-50 km, temperature rises, houses ozone layer absorbing UV-B).\n3. Mesosphere (50-80 km, coldest layer at -90C, burns meteoroids).\n4. Thermosphere (80-700 km, ionosphere reflecting radio waves, auroras).\n5. Exosphere (>700 km, transition to outer space).' }
        ],
        numericalPractice: []
      }
    },
    {
      id: 'evs-u2',
      unitNumber: 'Unit II',
      title: 'Ecosystems',
      description: 'Concept of an ecosystem, structure and function, energy flow, biogeochemical cycles (Carbon, Nitrogen, Water, Phosphorus), and major ecosystem types: Forest, Grassland, Desert, and Aquatic ecosystems.',
      topics: [
        'Concept of an ecosystem: Biotic (producers, consumers, decomposers) and Abiotic components (temperature, soil, water, pH)',
        'Structure and functional attributes: Productivity, decomposition, nutrient cycling, and energy flow',
        'Energy flow in ecosystems: Lindeman’s 10% law and thermodynamic unidirectionality',
        'Food chains (Grazing vs. Detritus), food webs, and ecological pyramids of number, biomass, and energy',
        'Biogeochemical cycles: Carbon cycle, Nitrogen cycle (fixation, nitrification, denitrification), and Hydrologic cycle',
        'Types of ecosystems: Forest ecosystems (Tropical, Deciduous, Coniferous), Grasslands, Desert ecosystems, and Aquatic ecosystems (Lotic, Lentic, Estuarine, Marine)'
      ],
      lessons: [
        {
          id: 'evs-u2-l1',
          unitId: 'evs-u2',
          subjectId: 'environmental-science',
          title: 'Ecosystem Structure, Energy Flow & Biogeochemical Cycles',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic biology'],
          realLifeQuestion: {
            en: 'Why can an ecosystem have thousands of trees and millions of insects, but only a tiny handful of apex tigers or eagles?',
            hinglish: 'Kisi jungle me lakho ped aur keede hote hain par tiger sirf kuch hi kyu hote hain?',
            hi: 'किसी भी पारिस्थितिकी तंत्र में लाखों पेड़ और कीट होने के बावजूद शीर्ष शिकारी (बाघ या चील) बहुत कम क्यों होते हैं?'
          },
          simpleExplanation: {
            en: 'Energy flow in nature obeys the Second Law of Thermodynamics and Lindeman’s 10% Law! At each trophic step (plants to herbivores to carnivores), approximately 90% of the ingested energy is dissipated as metabolic respiration heat. Because energy diminishes by a factor of 10 at every link, food chains cannot sustain more than 4 or 5 trophic levels.',
            hinglish: 'Ecosystem me Lindeman ka 10% rule lagta hai! Ghaas ki sirf 10% energy hiran me jaati hai, aur hiran ki sirf 10% sher me. 90% energy metabolic heat ke roop me waste ho jaati hai, isliye apex predators hamesha ginti ke hote hain.',
            hi: 'पारिस्थितिक तंत्र में लिंडेमैन का 10% नियम लागू होता है। प्रत्येक स्तर पर 90% ऊर्जा ऊष्मा के रूप में नष्ट हो जाती है, जिससे शीर्ष पर अत्यंत कम ऊर्जा बचती है।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'Imagine shipping a bucket of ice cream across four desert checkpoints. If 90% melts at every checkpoint, only a single melting spoonful reaches the 4th stop.',
              hinglish: 'Char checkpoints par ice cream le jaana: har stop par 90% pighal gayi, aakhri stop par bas ek chammach bachi.',
              hi: 'जैसे हर पड़ाव पर 90% सामग्री कम होती जाए तो अंत में नाममात्र ही बचता है।'
            },
            limitations: {
              en: 'Ice cream melts passively, whereas biological organisms actively burn chemical energy to maintain body warmth, pump blood, and hunt.',
              hinglish: 'Jeevo me energy chalne-phirne aur breathing me active use hoti hai.',
              hi: 'जीव ऊर्जा का सक्रिय उपयोग श्वसन और गति में करते हैं।'
            }
          },
          terminology: [
            {
              term: 'Biogeochemical Cycle',
              definition: {
                en: 'The cyclical pathways through which essential chemical elements (Carbon, Nitrogen, Phosphorus, Water) move through biotic and abiotic reservoirs.',
                hinglish: 'Carbon aur Nitrogen jaise elements ka nature aur jeevo ke beech ghoomna.',
                hi: 'तत्वों का जैविक और अजैविक घटकों के बीच चक्रीय प्रवाह।'
              }
            },
            {
              term: 'Ecological Pyramid of Energy',
              definition: {
                en: 'A graphical representation of energy captured per unit area per unit time across trophic tiers; ALWAYS upright due to thermodynamic dissipation.',
                hinglish: 'Energy ka pyramid jo hamesha seedha (upright) hota hai.',
                hi: 'ऊर्जा का पिरामिड जो सदैव सीधा (Upright) होता है।'
              }
            }
          ],
          visualType: 'environmental',
          underlyingPrinciple: {
            en: 'Energy flows unidirectionally through an ecosystem and is continuously lost as entropy heat. Nutrients, in contrast, cycle indefinitely through biogeochemical pathways.',
            hinglish: 'Energy ek disha me flow karti hai aur waste hoti hai, lekin nutrients cycle hoke wapas aate hain.',
            hi: 'ऊर्जा का प्रवाह एकदिशीय होता है जबकि पोषकों का चक्रीय प्रवाह होता है।'
          },
          workedExample: {
            problem: {
              en: 'If primary photosynthetic producers capture 50,000 kJ of solar chemical energy, how much energy is available to secondary carnivores under Lindeman’s 10% Law?',
              hinglish: 'Agar plants 50,000 kJ energy banate hain toh secondary carnivores ko kitni milegi?',
              hi: 'यदि प्राथमिक उत्पादक 50,000 kJ ऊर्जा बनाते हैं तो द्वितीयक मांसाहारी को कितनी ऊर्जा मिलेगी?'
            },
            steps: [
              { stepNumber: 1, title: 'Trophic Level 1 (Producers)', explanation: { en: 'Energy in green plants = 50,000 kJ.', hinglish: 'Plants = 50,000 kJ.', hi: 'उत्पादक = 50,000 kJ।' } },
              { stepNumber: 2, title: 'Trophic Level 2 (Herbivores)', explanation: { en: 'Primary consumers receive 10% of 50,000 kJ = 5,000 kJ.', hinglish: 'Herbivores = 5,000 kJ.', hi: 'शाकाहारी = 5,000 kJ।' } },
              { stepNumber: 3, title: 'Trophic Level 3 (Secondary Carnivores)', explanation: { en: 'Secondary consumers receive 10% of 5,000 kJ = 500 kJ.', hinglish: 'Secondary Carnivores = 500 kJ.', hi: 'द्वितीयक उपभोक्ता = 500 kJ।' } }
            ],
            finalAnswer: 'Energy Available to Secondary Carnivores = 500 kJ (1% of initial plant energy).'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Believing that energy pyramids can be inverted like pyramids of numbers (e.g. tree parasites).',
                hinglish: 'Yeh sochna ki energy pyramid bhi ulta (inverted) ho sakta hai.',
                hi: 'यह सोचना कि ऊर्जा का पिरामिड भी उल्टा हो सकता है।'
              },
              correction: {
                en: 'Energy pyramids are mathematically and thermodynamically ALWAYS upright because energy is unavoidably lost as heat at each transfer.',
                hinglish: 'Energy pyramid hamesha seedha (upright) hota hai thermodynamics ke 2nd law ki wajah se.',
                hi: 'ऊष्मागतिकी के दूसरे नियम के अनुसार ऊर्जा का पिरामिड सदैव सीधा होता है।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'evs-u2-p1',
              level: 'Beginner',
              question: {
                en: 'Why is an ecological pyramid of energy always upright?',
                hinglish: 'Energy ka ecological pyramid hamesha upright kyu hota hai?',
                hi: 'पारिस्थितिक ऊर्जा पिरामिड सदैव सीधा क्यों होता है?'
              },
              options: [
                'Because carnivores are smaller than herbivores',
                'Because energy is lost as metabolic heat at every successive trophic level according to thermodynamics',
                'Because decomposers do not use energy',
                'Because sunlight is unlimited'
              ],
              correctIndex: 1,
              explanation: {
                en: 'Thermodynamics dictates that ~90% of energy dissipates at each transfer, so higher tiers strictly have less energy.',
                hinglish: 'Har level par 90% energy metabolic heat ke roop me kharch ho jaati hai.',
                hi: 'प्रत्येक पोषण स्तर पर 90% ऊर्जा ऊष्मा के रूप में नष्ट हो जाती है।'
              },
              hint: { en: 'Second Law of Thermodynamics.', hinglish: '10% law and heat loss.', hi: 'ऊष्मागतिकी का नियम।' }
            }
          ],
          summary: {
            en: [
              'Ecosystems comprise biotic communities and abiotic physical environments in dynamic equilibrium.',
              'Energy flow is strictly unidirectional and obeys Lindeman’s 10% Law.',
              'Ecological pyramids of energy are always upright.',
              'Biogeochemical cycles (Carbon, Nitrogen, Water) circulate chemical matter between living and non-living spheres.'
            ],
            hinglish: [
              'Ecosystem me biotic aur abiotic components hote hain.',
              'Energy flow ek-tarfa hota hai aur 90% heat waste hoti hai.',
              'Nutrients biogeochemical cycles ke through circulate hote hain.'
            ],
            hi: [
              'पारिस्थितिक तंत्र जैविक और अजैविक घटकों से मिलकर बनता है।',
              'ऊर्जा का प्रवाह एकदिशीय है और लिंडेमैन के 10% नियम का पालन करता है।'
            ]
          },
          quiz: [
            {
              id: 'evs-u2-q1',
              question: {
                en: 'In the Nitrogen cycle, the biological conversion of atmospheric N2 into ammonia (NH3) is termed:',
                hinglish: 'Nitrogen cycle me N2 ko ammonia (NH3) me convert karne ko kya kehte hain?',
                hi: 'नाइट्रोजन चक्र में वायुमंडलीय N2 को अमोनिया में बदलने की क्रिया क्या कहलाती है?'
              },
              options: ['Denitrification', 'Nitrogen Fixation', 'Ammonification', 'Assimilation'],
              correctIndex: 1,
              explanation: {
                en: 'Nitrogen fixation is performed by diazotrophs (like Rhizobium, Azotobacter) converting inert N2 into bioavailable ammonia.',
                hinglish: 'Rhizobium bacteria N2 ko ammonia me fix karte hain.',
                hi: 'राइजोबियम जैसे जीवाणुओं द्वारा नाइट्रोजन यौगिकीकरण (Nitrogen Fixation) किया जाता है।'
              },
              hint: { en: 'Fixing inert nitrogen.', hinglish: 'Nitrogen fix karna.', hi: 'नाइट्रोजन स्थिरीकरण।' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'Ecosystems represent the basic functional unit of ecology. Primary producers convert solar radiation into biomass; energy moves in a single direction losing 90% at each step (Lindeman 10% Law), while nutrients cycle continuously through carbon and nitrogen biogeochemical pathways.',
          hinglish: 'Ecosystems me energy 10% rule se aage badhti hai aur nutrients circulate hote hain.',
          hi: 'पारिस्थितिक तंत्र में ऊर्जा का एकदिशीय प्रवाह और पोषकों का चक्रीय प्रवाह होता है।'
        },
        shortNotes: [
          { topic: 'Food Chain vs Food Web', content: { en: 'Food chain = single linear feeding line; Food web = interconnected complex network of multiple food chains providing ecosystem stability.', hinglish: 'Food chain seedhi line hoti hai, Food web aapas me judi jaal hoti hai.', hi: 'खाद्य श्रृंखला एकल मार्ग है, खाद्य जाल अंतर्संबंधित जटिल नेटवर्क है।' } }
        ],
        keyFormulas: [
          { name: 'Lindeman 10% Law', formula: 'E_{n+1} \\approx 0.10 \\times E_n', units: 'Joules (J)', note: '90% lost as metabolic respiration heat' }
        ],
        mindMap: [{ node: 'Unit II: Ecosystems', children: ['Biotic & Abiotic Components', 'Lindeman 10% Energy Flow', 'Carbon & Nitrogen Cycles', 'Forest & Grassland Ecosystems', 'Aquatic & Desert Ecosystems'] }],
        differences: [
          {
            conceptA: 'Grazing Food Chain',
            conceptB: 'Detritus Food Chain',
            comparisonPoints: [
              { feature: 'Starting Point', a: 'Living green photosynthetic plants', b: 'Dead decaying organic matter and litter' },
              { feature: 'Primary Source', a: 'Direct solar energy', b: 'Decomposer bacteria and fungi recycling waste' },
              { feature: 'Energy Fraction', a: 'Dominant in aquatic ecosystems', b: 'Carries majority of energy in terrestrial forests' }
            ]
          }
        ],
        flashcards: [
          { front: 'Why are food chains rarely longer than 4 to 5 links?', back: 'Because with 90% energy dissipation at each trophic transfer, insufficient energy remains to support a viable population of higher predators.' },
          { front: 'What is an estuary in aquatic ecosystems?', back: 'A semi-enclosed coastal body of water where freshwater from rivers mixes with saline seawater, forming one of the most productive ecosystems on Earth.' }
        ],
        shortAnswerQuestions: [
          { question: 'What is ecological succession? Differentiate primary from secondary succession.', answer: 'Ecological succession is the gradual predictable replacement of biological communities in an ecosystem over time. Primary succession begins on barren, soil-less terrain (e.g. cooled volcanic lava). Secondary succession occurs where a pre-existing community was disturbed (e.g. burned forest with intact soil).' }
        ],
        longAnswerQuestions: [
          { question: 'Describe the biological Nitrogen Cycle explaining fixation, nitrification, assimilation, ammonification, and denitrification with representative bacteria.', outline: '1. Nitrogen Fixation (N2 to NH3 by Rhizobium/Azotobacter).\n2. Nitrification (NH3 to NO2- by Nitrosomonas, then to NO3- by Nitrobacter).\n3. Assimilation (Plants absorb nitrates into amino acids).\n4. Ammonification (Decomposers break dead proteins back to NH3).\n5. Denitrification (Pseudomonas converts NO3- back to atmospheric N2).' }
        ],
        numericalPractice: []
      }
    },
    {
      id: 'evs-u3',
      unitNumber: 'Unit III',
      title: 'Environmental Pollution',
      description: 'Definition, causes, effects, and control measures for air, water, soil, marine, noise, and thermal pollution; global environmental crises: Climate change, global warming, acid rain, and ozone layer depletion.',
      topics: [
        'Environmental Pollution: Definition, pollutant classifications (biodegradable vs. non-biodegradable, primary vs. secondary)',
        'Air Pollution: Criteria pollutants (PM2.5, PM10, SO2, NOx, CO, VOCs), photochemical smog, and control devices (Cyclone separators, Electrostatic Precipitators - ESP, Wet Scrubbers)',
        'Water Pollution: Point and non-point sources, sewage, eutrophication, BOD (Biochemical Oxygen Demand) and COD, biomagnification (Minamata disease)',
        'Soil and Marine Pollution: Heavy metals, plastic waste, oil spills, and agricultural pesticides',
        'Noise and Thermal Pollution: Decibel scale (dB), acoustic thresholds, cooling water discharge impacts on dissolved oxygen',
        'Global Environmental Issues: Mechanism of Climate Change and Global Warming (Greenhouse Effect vs. Global Warming Potential)',
        'Acid Rain: Sulfur dioxide and nitrogen oxide atmospheric oxidation ($H_2SO_4$, $HNO_3$), marble cancer of monuments',
        'Stratospheric Ozone Layer Depletion: Catalytic chlorine radical mechanism from CFCs and the Montreal Protocol'
      ],
      lessons: [
        {
          id: 'evs-u3-l1',
          unitId: 'evs-u3',
          subjectId: 'environmental-science',
          title: 'Pollution Control & Global Crises (Ozone vs. Climate Change)',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic chemistry'],
          realLifeQuestion: {
            en: 'Why do so many students mistakenly think that "the hole in the ozone layer causes global warming" when they are completely different scientific phenomena?',
            hinglish: 'Ozone hole aur Global warming me log confuse kyu hote hain jabki dono ka mechanism alag hai?',
            hi: 'अक्सर छात्र ओजोन परत के क्षरण और ग्लोबल वार्मिंग में भ्रमित क्यों हो जाते हैं, जबकि दोनों की कार्यप्रणाली पूरी तरह भिन्न है?'
          },
          simpleExplanation: {
            en: 'Global warming is a heat-trapping phenomenon in the lower Troposphere caused by greenhouse gases ($CO_2, CH_4$) absorbing outgoing infrared radiation. Ozone depletion is a chemical destruction in the upper Stratosphere where CFCs break down $O_3$ molecules via chlorine radicals, allowing lethal ultraviolet-B (UV-B) rays to reach Earth. They occur in different atmospheric layers, involve different chemicals, and cause different harms!',
            hinglish: 'Global Warming Troposphere (neeche) me hoti hai kyunki CO2 aur CH4 infrared heat ko trap kar leti hain. Ozone hole Stratosphere (upar) me hota hai kyunki CFCs chlorine chhodkar O3 ko todte hain, jisse UV-B radiation aati hai. Dono bilkul alag problems hain!',
            hi: 'ग्लोबल वार्मिंग क्षोभमंडल में ग्रीनहाउस गैसों द्वारा ऊष्मा रोकने से होती है। ओजोन क्षरण समताप मंडल में सीएफसी द्वारा ओजोन परत के नष्ट होने से होता है।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'Global warming is like sleeping under a thick wool blanket that traps your body heat. Ozone depletion is like someone punching a hole in your sunglasses, letting harmful UV rays burn your eyes.',
              hinglish: 'Global warming moti rajai ki tarah hai jo garmi trap karti hai. Ozone hole chashme me ched jaisa hai jo harmful dhoop ko aane deta hai.',
              hi: 'ग्लोबल वार्मिंग गर्म कंबल की तरह है जो गर्मी को रोकता है। ओजोन क्षरण सनग्लास में छेद की तरह है जो पराबैंगनी किरणों को आने देता है।'
            },
            limitations: {
              en: 'A blanket is passive fabric, whereas atmospheric gases interact dynamically with solar and terrestrial wavelengths.',
              hinglish: 'Atmosphere me gases photochemical reactions karti hain.',
              hi: 'वायुमंडल में गैसें विभिन्न तरंगदैर्ध्य की किरणों के साथ रासायनिक क्रियाएं करती हैं।'
            }
          },
          terminology: [
            {
              term: 'BOD (Biochemical Oxygen Demand)',
              definition: {
                en: 'The amount of dissolved oxygen required by aerobic microorganisms to biologically oxidize organic waste in water over 5 days at 20 °C.',
                hinglish: 'Paani me organic kachre ko decompose karne ke liye bacteria ko kitni oxygen chahiye.',
                hi: 'जल में जैविक अपशिष्ट को विघटित करने हेतु आवश्यक घुलित ऑक्सीजन की मात्रा।'
              }
            },
            {
              term: 'Photochemical Smog',
              definition: {
                en: 'A toxic haze formed when vehicular NOx and volatile organic compounds (VOCs) react in the presence of sunlight to produce ground-level ozone and PAN (Peroxyacetyl nitrate).',
                hinglish: 'Dhoop aur gaadiyo ke dhuein se banne wala zehreela smog.',
                hi: 'सूर्य के प्रकाश में नाइट्रोजन ऑक्साइड और वाष्पशील यौगिकों से उत्पन्न विषैला स्मॉग।'
              }
            }
          ],
          visualType: 'environmental',
          underlyingPrinciple: {
            en: 'Industrial air pollution is controlled by physical mechanisms: Electrostatic Precipitators (ESP) charge fly-ash particles with high voltage to collect on oppositely charged plates (99% efficiency), while wet scrubbers neutralize acidic SO2 with alkaline limestone slurries.',
            hinglish: 'ESP me high voltage se ash particles ko attract karke pakadte hain, aur scrubbers se acid gas saaf hoti hai.',
            hi: 'ईएसपी (ESP) उच्च वोल्टेज द्वारा कणों को आवेशित कर अलग करता है तथा स्क्रबर अम्लीय गैसों को निष्प्रभावी करता है।'
          },
          workedExample: {
            problem: {
              en: 'A river water sample has an initial Dissolved Oxygen (DO) concentration of 9.0 mg/L. After a 5-day incubation at 20 °C, the remaining DO is 2.5 mg/L. Calculate the BOD5 of the river water and evaluate its pollution status.',
              hinglish: 'River sample ka initial DO = 9.0 mg/L tha, 5 din baad 2.5 mg/L bacha. BOD calculate karein.',
              hi: 'नदी के जल का प्रारंभिक DO 9.0 mg/L और 5 दिन बाद 2.5 mg/L है। BOD5 ज्ञात करें।'
            },
            steps: [
              { stepNumber: 1, title: 'BOD Formula', explanation: { en: 'BOD5 = Initial DO - Final DO.', hinglish: 'BOD = Initial DO - Final DO.', hi: 'BOD5 = प्रारंभिक DO - अंतिम DO।' } },
              { stepNumber: 2, title: 'Calculation', explanation: { en: 'BOD5 = 9.0 mg/L - 2.5 mg/L = 6.5 mg/L.', hinglish: 'BOD = 9.0 - 2.5 = 6.5 mg/L.', hi: 'BOD5 = 6.5 mg/L।' } },
              { stepNumber: 3, title: 'Evaluate Pollution Status', explanation: { en: 'Clean river water has BOD < 3 mg/L. A BOD of 6.5 mg/L indicates moderate to heavy organic pollution from untreated domestic sewage.', hinglish: 'Clean river me BOD < 3 hota hai. 6.5 ka matlab sewage pollution hai.', hi: '6.5 mg/L का मान दर्शाता है कि जल जैविक रूप से प्रदूषित है।' } }
            ],
            finalAnswer: 'BOD5 = 6.5 mg/L (Indicates untreated organic sewage contamination; aquatic fish face suffocation risks).'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Believing that higher Biochemical Oxygen Demand (BOD) means the water contains more healthy oxygen for fish.',
                hinglish: 'Yeh sochna ki high BOD ka matlab paani me zyada oxygen hai.',
                hi: 'यह सोचना कि उच्च बीओडी का अर्थ जल में अधिक ऑक्सीजन है।'
              },
              correction: {
                en: 'High BOD means bacteria are demanding all the oxygen to rot organic waste, leaving zero dissolved oxygen for fish, causing massive fish kills!',
                hinglish: 'High BOD ka matlab kachra bohot zyada hai aur bacteria saari oxygen choos rahe hain, machhliya mar jayengi.',
                hi: 'उच्च बीओडी का अर्थ है कि जल में अत्यधिक प्रदूषण है और घुलित ऑक्सीजन की भारी कमी है।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'evs-u3-p1',
              level: 'Beginner',
              question: {
                en: 'Which industrial device removes fine fly-ash particulate matter from thermal power plant chimneys using high-voltage electrostatic charges?',
                hinglish: 'Thermal power plant ke dhuein se fly-ash hatane ke liye kaun sa device use hota hai?',
                hi: 'थर्मल पावर प्लांट की चिमनी से राख के कणों को अलग करने हेतु कौन सा उपकरण प्रयोग किया जाता है?'
              },
              options: ['Catalytic Converter', 'Electrostatic Precipitator (ESP)', 'Septic Tank', 'Venturi meter'],
              correctIndex: 1,
              explanation: {
                en: 'Electrostatic Precipitators (ESP) use high voltage ionization to capture up to 99% of particulate fly ash.',
                hinglish: 'ESP high voltage se fly ash ko 99% tak saaf kar deta hai.',
                hi: 'इलेक्ट्रोस्टैटिक प्रेसिपिटेटर (ESP) कणों को 99% तक हटा देता है।'
              },
              hint: { en: 'Electrostatic charge.', hinglish: 'Electrostatic Precipitator.', hi: 'इलेक्ट्रोस्टैटिक प्रेसिपिटेटर।' }
            }
          ],
          summary: {
            en: [
              'Pollution affects air, water, soil, oceans, noise, and thermal water bodies.',
              'Air pollution particulate matter is captured using Electrostatic Precipitators (ESPs).',
              'High BOD indicates severe organic pollution depleting aquatic dissolved oxygen.',
              'Global warming (Troposphere IR trapping) and Ozone depletion (Stratosphere UV-B filtering loss) are distinct phenomena.'
            ],
            hinglish: [
              'Pollution air, water, soil aur noise me failta hai.',
              'High BOD sewage pollution dikhata hai.',
              'Ozone hole aur Global warming bilkul alag concepts hain.'
            ],
            hi: [
              'प्रदूषण वायु, जल, मृदा और ध्वनि को प्रभावित करता है।',
              'उच्च बीओडी जल में गंभीर जैविक प्रदूषण का संकेत है।',
              'ओजोन क्षरण और ग्लोबल वार्मिंग भिन्न वायुमंडलीय परिघटनाएं हैं।'
            ]
          },
          quiz: [
            {
              id: 'evs-u3-q1',
              question: {
                en: 'Which international treaty is celebrated as the most successful environmental agreement for phasing out chlorofluorocarbons (CFCs)?',
                hinglish: 'CFCs ko ban karne ke liye kaun sa international treaty banaya gaya tha?',
                hi: 'ओजोन परत की रक्षा हेतु सीएफसी पर प्रतिबंध लगाने वाली संधि कौन सी है?'
              },
              options: ['Kyoto Protocol', 'Montreal Protocol (1987)', 'Paris Agreement', 'Basel Convention'],
              correctIndex: 1,
              explanation: {
                en: 'The Montreal Protocol (1987) phased out ozone-depleting substances like CFCs, allowing the stratospheric ozone layer to recover.',
                hinglish: 'Montreal Protocol ne CFCs par ban lagakar ozone layer ko bachaya.',
                hi: 'मॉन्ट्रियल प्रोटोकॉल (1987) ने सीएफसी को प्रतिबंधित कर ओजोन परत की रक्षा की।'
              },
              hint: { en: 'Signed in Canada in 1987.', hinglish: 'Montreal protocol.', hi: 'मॉन्ट्रियल संधि।' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'Environmental pollution disrupts planetary health across air, water, soil, and marine ecosystems. Control strategies rely on engineering devices (ESPs, scrubbers, STPs). Students must clearly distinguish tropospheric greenhouse warming from stratospheric catalytic ozone depletion.',
          hinglish: 'Pollution control ke liye ESP, scrubbers aur STP zaroori hain. Global warming aur ozone depletion alag hain.',
          hi: 'प्रदूषण नियंत्रण के लिए ईएसपी और एसटीपी जैसी प्रणालियां आवश्यक हैं।'
        },
        shortNotes: [
          { topic: 'Acid Rain Chemistry', content: { en: 'SO2 and NOx gases oxidize to form sulfuric (H2SO4) and nitric (HNO3) acids, corroding limestone structures (marble cancer) and dropping soil pH below 4.5.', hinglish: 'SO2 aur NOx barish me milkar acid banate hain.', hi: 'सल्फर और नाइट्रोजन ऑक्साइड मिलकर अम्लीय वर्षा करते हैं।' } }
        ],
        keyFormulas: [
          { name: 'BOD Calculation', formula: '\\text{BOD}_5 = \\text{DO}_0 - \\text{DO}_5', units: 'mg/L', note: 'Higher BOD signifies more polluted water' }
        ],
        mindMap: [{ node: 'Unit III: Pollution', children: ['Air Pollution & ESPs', 'Water Pollution & BOD/COD', 'Ozone Depletion vs Global Warming', 'Acid Rain & Smog', 'Noise & Thermal Pollution'] }],
        differences: [
          {
            conceptA: 'Global Warming',
            conceptB: 'Ozone Layer Depletion',
            comparisonPoints: [
              { feature: 'Atmospheric Layer', a: 'Troposphere (0–12 km)', b: 'Stratosphere (12–50 km)' },
              { feature: 'Primary Agents', a: 'Greenhouse gases: CO2, CH4, N2O', b: 'Ozone depleting substances: CFCs, Halons, CCl4' },
              { feature: 'Physical Mechanism', a: 'Trapping outgoing terrestrial infrared heat', b: 'Catalytic chlorine breakdown of O3 into O2' },
              { feature: 'Impact', a: 'Sea-level rise, heatwaves, melting glaciers', b: 'Skin carcinomas, eye cataracts, UV damage to crops' }
            ]
          }
        ],
        flashcards: [
          { front: 'What is Biomagnification?', back: 'The progressive increase in concentration of persistent non-biodegradable toxins (e.g. DDT, mercury) at successively higher trophic levels of a food chain.' },
          { front: 'What causes marble cancer on the Taj Mahal?', back: 'Acid rain containing sulfuric acid (H2SO4) reacting with calcium carbonate marble: CaCO3 + H2SO4 -> CaSO4 + H2O + CO2.' }
        ],
        shortAnswerQuestions: [
          { question: 'Differentiate between primary and secondary air pollutants with two examples of each.', answer: 'Primary pollutants are emitted directly from sources (e.g. Carbon Monoxide from car exhaust, Sulfur Dioxide from coal burning). Secondary pollutants are formed through atmospheric reactions of primary pollutants (e.g. Ozone formed from NOx + VOCs in sunlight; Peroxyacetyl Nitrate - PAN).' }
        ],
        longAnswerQuestions: [
          { question: 'Explain the working principle and schematic design of an Electrostatic Precipitator (ESP) used in coal thermal plants.', outline: '1. Principle: High negative DC voltage (50-100 kV) creates corona discharge around cathode wires.\n2. Ionization: Air molecules ionize, imparting negative charge to passing fly ash particles.\n3. Collection: Negatively charged dust is drawn by electrostatic attraction to grounded positive collector plates.\n4. Rapping: Mechanical hammers rap plates to drop accumulated ash into bottom hoppers.\n5. Efficiency: Exceeds 99% particulate removal.' }
        ],
        numericalPractice: []
      }
    },
    {
      id: 'evs-u4',
      unitNumber: 'Unit IV',
      title: 'Waste Management, Environmental Policies and Legislation',
      description: 'Solid waste management (biocomposting, vermicomposting, incineration, sanitary landfills), liquid waste management, CPCB wastewater discharge standards, ETP & STP processes, and environmental acts: Wildlife Protection 1972, Forest Conservation 1980, Water Act 1974, Air Act 1981, and Environment Protection Act 1986.',
      topics: [
        'Solid Waste Management: Source segregation (wet, dry, hazardous, sanitary), municipal solid waste handling rules',
        'Solid waste processing techniques: Biocomposting, vermicomposting (earthworms Eisenia fetida), incineration (pyrolysis), and sanitary engineered landfills (leachate collection liners)',
        'Liquid Waste Management: Primary, secondary (biological aeration), and tertiary wastewater treatment',
        'Industrial Effluent Treatment Plant (ETP) and municipal Sewage Treatment Plant (STP) stages',
        'Central Pollution Control Board (CPCB) wastewater discharge standards: pH (5.5-9.0), BOD (<30 mg/L), COD (<250 mg/L), TSS (<100 mg/L)',
        'Key Environmental Legislation: Wildlife Protection Act, 1972 (schedules of endangered species)',
        'Forest Conservation Act, 1980 (restriction on de-reservation of forests for non-forest purposes)',
        'Water (Prevention and Control of Pollution) Act, 1974 (establishment of central and state pollution boards)',
        'Air (Prevention and Control of Pollution) Act, 1981 (air pollution control areas and vehicle emission standards)',
        'Environment (Protection) Act, 1986 (umbrella legislation enacted post-Bhopal gas tragedy granting sweeping central powers)'
      ],
      lessons: [
        {
          id: 'evs-u4-l1',
          unitId: 'evs-u4',
          subjectId: 'environmental-science',
          title: 'Waste Management, ETP/STP & Environmental Acts',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic biology and chemistry'],
          realLifeQuestion: {
            en: 'What happens to the millions of liters of sewage generated by a city every single day before it can be legally released into a river?',
            hinglish: 'Sheher ka lakho liter ganda paani nadi me chhodne se pehle STP aur ETP me kaise saaf hota hai?',
            hi: 'शहरों के सीवेज और औद्योगिक अपशिष्ट जल को नदियों में छोड़ने से पहले एसटीपी (STP) में कैसे शुद्ध किया जाता है?'
          },
          simpleExplanation: {
            en: 'Municipal sewage and industrial effluent must pass through Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP) to meet Central Pollution Control Board (CPCB) standards (BOD < 30 mg/L). In primary treatment, physical screens and sedimentation remove floating plastics and heavy sludge. In secondary treatment, aerobic microbes in aeration tanks digest dissolved organic waste. Solid waste is segregated at source into biodegradable wet waste (converted to fertilizer via vermicomposting) and dry waste, with inert residue buried in engineered sanitary landfills with leachate liners.',
            hinglish: 'Gande paani ko STP me 3 steps me saaf karte hain: Primary (screening aur kachra baithana), Secondary (aeration tank me bacteria dwara kachra khilana), aur Tertiary (disinfection/chlorine). CPCB ke rule ke mutabik nadi me daalne se pehle BOD 30 mg/L se kam hona chahiye. Solid waste me composting aur sanitary landfills use hote hain.',
            hi: 'सीवेज ट्रीटमेंट प्लांट में प्राथमिक (भौतिक छनन), द्वितीयक (जैविक वातन) और तृतीयक (कीटाणुशोधन) उपचार किया जाता है ताकि सीपीसीबी के मानकों के अनुसार बीओडी 30 mg/L से कम हो सके।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'A Sewage Treatment Plant is like an artificial human digestive tract operating in reverse: large solids are strained out, and billions of beneficial aerobic bacteria consume and digest the dissolved waste in bubbling aeration tanks.',
              hinglish: 'STP ek artificial digestive system jaisa hai: pehle mota kachra filter hota hai, fir bacteria ghule hue kachre ko digest karke paani saaf karte hain.',
              hi: 'एसटीपी एक जैविक पाचन तंत्र की तरह है जहां वातन टैंकों में अरबों जीवाणु जैविक कचरे को पचाकर जल को शुद्ध करते हैं।'
            },
            limitations: {
              en: 'Digestive tracts absorb nutrients into the body, whereas wastewater treatment separates clean effluent from microbial sludge for agricultural manure.',
              hinglish: 'STP saaf paani ko nadi me bhejta hai aur sludge ko khaad banata hai.',
              hi: 'एसटीपी साफ जल को बाहर निकालता है और कीचड़ को जैविक खाद में बदलता है।'
            }
          },
          terminology: [
            {
              term: 'Sewage Treatment Plant (STP)',
              definition: {
                en: 'A facility that purifies domestic wastewater through physical screening, primary clarifiers, and biological aeration tanks before discharge.',
                hinglish: 'Ghar ke gande paani ko saaf karne ka plant.',
                hi: 'घरेलू सीवेज को शुद्ध करने का संयंत्र।'
              }
            },
            {
              term: 'Sanitary Landfill',
              definition: {
                en: 'An engineered waste disposal site with impermeable clay and geomembrane liners designed to collect and treat toxic leachate liquid and capture methane gas.',
                hinglish: 'Engineering landfill jisme neeche plastic sheet hoti hai taaki toxic paani (leachate) zameen me na ghuse.',
                hi: 'वैज्ञानिक रूप से निर्मित लैंडफिल जिसमें लीचेट संग्रहण हेतु नीचे अस्तर लगा होता है।'
              }
            },
            {
              term: 'Environment (Protection) Act, 1986',
              definition: {
                en: 'India’s umbrella environmental legislation enacted post-Bhopal Gas Tragedy granting the Central Government sweeping powers to regulate pollution standards, hazardous substances, and industrial closures.',
                hinglish: 'Bhopal gas tragedy ke baad bana umbrella kanoon jo pollution control ke kade niyam deta hai.',
                hi: 'भोपाल गैस त्रासदी के बाद 1986 में बना प्रमुख भारतीय पर्यावरण कानून।'
              }
            }
          ],
          visualType: 'environmental',
          underlyingPrinciple: {
            en: 'The CPCB enforces strict effluent standards under Section 24 of the Water Act 1974. Biological wastewater treatment relies on Monod bacterial growth kinetics: providing dissolved oxygen ($DO ge 2,\text{mg/L}$) allows activated sludge to rapidly consume organic carbon.',
            hinglish: 'Water Act 1974 aur EPA 1986 factory par strict limits lagate hain. CPCB standard ke bina paani discharge karna apradh hai.',
            hi: 'जल अधिनियम 1974 और पर्यावरण संरक्षण अधिनियम 1986 के तहत सीपीसीबी मानकों का उल्लंघन दंडनीय अपराध है।'
          },
          workedExample: {
            problem: {
              en: 'Match the Indian environmental legislation to its correct year and primary focus: 1. Wildlife Protection Act, 2. Water Act, 3. Air Act, 4. Environment (Protection) Act, 5. Forest Conservation Act.',
              hinglish: 'Sahi year aur act match karein: Wildlife, Water, Air, EPA, Forest.',
              hi: 'भारतीय पर्यावरण अधिनियमों को उनके सही वर्ष और उद्देश्य से सुमेलित करें।'
            },
            steps: [
              { stepNumber: 1, title: 'Wildlife Protection Act', explanation: { en: '1972 — Enacted to protect endangered fauna and flora and create national parks and sanctuaries.', hinglish: '1972 — Vanya jeev aur national parks ke liye.', hi: '1972 — वन्यजीव संरक्षण और राष्ट्रीय उद्यान।' } },
              { stepNumber: 2, title: 'Water Act', explanation: { en: '1974 — Established Central and State Pollution Control Boards (CPCB/SPCB) to prevent water pollution.', hinglish: '1974 — CPCB aur SPCB boards banaye gaye.', hi: '1974 — जल प्रदूषण नियंत्रण बोर्डों की स्थापना।' } },
              { stepNumber: 3, title: 'Forest Conservation Act', explanation: { en: '1980 — Restricts state governments from de-reserving reserved forests without prior Central approval.', hinglish: '1980 — Jungle ki zameen ko non-forest kaam me lene par rok.', hi: '1980 — वनों की कटाई और गैर-वन उपयोग पर रोक।' } },
              { stepNumber: 4, title: 'Air Act & EPA Act', explanation: { en: 'Air Act: 1981 (air pollution control areas); Environment (Protection) Act: 1986 (umbrella legislation post-Bhopal).', hinglish: 'Air Act: 1981; EPA Act: 1986 (Bhopal gas tragedy ke baad).', hi: 'वायु अधिनियम: 1981; पर्यावरण संरक्षण अधिनियम: 1986।' } }
            ],
            finalAnswer: 'Correct Timeline: Wildlife (1972) -> Water (1974) -> Forest (1980) -> Air (1981) -> EPA Umbrella Act (1986).'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Confusing an open dumping ground with an engineered sanitary landfill.',
                hinglish: 'Khule kachre ke dher ko sanitary landfill samajhna.',
                hi: 'खुले कचरे के ढेर को वैज्ञानिक लैंडफिल मान लेना।'
              },
              correction: {
                en: 'Open dumps generate fires and poison groundwater with black toxic leachate; sanitary landfills use impermeable geomembrane liners, leachate drains, and methane gas collection wells.',
                hinglish: 'Sanitary landfill me neeche plastic liner hoti hai jo toxic leachate ko groundwater me milne se rokti hai.',
                hi: 'वैज्ञानिक लैंडफिल में जियोमेम्ब्रेन लाइनर और लीचेट उपचार प्रणाली होती है।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'evs-u4-p1',
              level: 'Beginner',
              question: {
                en: 'What catastrophic industrial disaster prompted the enactment of the umbrella Environment (Protection) Act of 1986 in India?',
                hinglish: 'Kis industrial tragedy ke baad Environment Protection Act 1986 banaya gaya?',
                hi: 'किस औद्योगिक आपदा के परिणामस्वरूप भारत में पर्यावरण संरक्षण अधिनियम 1986 पारित हुआ?'
              },
              options: ['Chernobyl Nuclear Disaster', 'Bhopal Gas Tragedy (1984)', 'Fukushima Disaster', 'Exxon Valdez Oil Spill'],
              correctIndex: 1,
              explanation: {
                en: 'The 1984 Bhopal Gas Tragedy (toxic methyl isocyanate leak) exposed legal loopholes, compelling parliament to pass the comprehensive EPA in 1986.',
                hinglish: '1984 Bhopal Gas Tragedy ke baad EPA 1986 laya gaya.',
                hi: '1984 की भोपाल गैस त्रासदी के बाद 1986 का अधिनियम पारित हुआ।'
              },
              hint: { en: 'Occurred in Madhya Pradesh in 1984.', hinglish: 'Bhopal tragedy.', hi: 'भोपाल त्रासदी।' }
            }
          ],
          summary: {
            en: [
              'Solid waste must be segregated at source; wet organics are composted and inert waste goes to sanitary landfills.',
              'STP wastewater treatment progresses through primary (screening), secondary (aeration/bacteria), and tertiary disinfection.',
              'CPCB discharge standards require treated effluent BOD < 30 mg/L before river release.',
              'Environmental legislative milestones: Wildlife Act (1972), Water Act (1974), Forest Act (1980), Air Act (1981), EPA (1986).'
            ],
            hinglish: [
              'Solid waste ka segregation zaroori hai (composting aur landfill).',
              'STP me primary, secondary (biological) aur tertiary treatment hota hai.',
              'Key Acts: Wildlife (1972), Water (1974), Forest (1980), Air (1981), EPA (1986).'
            ],
            hi: [
              'अपशिष्ट पृथक्करण और वैज्ञानिक लैंडफिल प्रबंधन आवश्यक है।',
              'एसटीपी में प्राथमिक, द्वितीयक और तृतीयक उपचार किया जाता है।',
              'मुख्य पर्यावरण अधिनियम 1972 से 1986 के मध्य पारित हुए।'
            ]
          },
          quiz: [
            {
              id: 'evs-u4-q1',
              question: {
                en: 'According to Central Pollution Control Board (CPCB) standards, what is the maximum permissible BOD for treated sewage discharged into inland surface waters?',
                hinglish: 'CPCB ke mutabik treated sewage ka maximum BOD kitna hona chahiye nadi me daalne ke liye?',
                hi: 'सीपीसीबी मानकों के अनुसार अंतर्देशीय जल में छोड़े जाने वाले उपचारित सीवेज का अधिकतम बीओडी कितना होना चाहिए?'
              },
              options: ['100 mg/L', '30 mg/L', '250 mg/L', '500 mg/L'],
              correctIndex: 1,
              explanation: {
                en: 'CPCB mandates that treated municipal sewage must have a BOD not exceeding 30 mg/L (and TSS < 100 mg/L) to safeguard aquatic river ecosystems.',
                hinglish: 'CPCB standard ke mutabik treated wastewater ka BOD 30 mg/L se kam hona chahiye.',
                hi: 'सीपीसीबी के अनुसार उपचारित सीवेज का बीओडी 30 mg/L से कम होना चाहिए।'
              },
              hint: { en: 'Less than 50 mg/L.', hinglish: '30 mg/L.', hi: '30 मिलीग्राम/लीटर।' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'Waste management and environmental governance protect human health. Solid waste demands source segregation and engineered landfills, liquid wastewater must be treated in STPs to meet CPCB limits (BOD < 30 mg/L), and environmental legislation (Wildlife 1972, Water 1974, Forest 1980, Air 1981, EPA 1986) provides statutory enforcement mechanisms.',
          hinglish: 'Waste management aur kanoon (EPA 1986, Water Act, Air Act) environment ko bachate hain.',
          hi: 'अपशिष्ट प्रबंधन और पर्यावरण कानून सतत विकास की आधारशिला हैं।'
        },
        shortNotes: [
          { topic: 'Leachate in Landfills', content: { en: 'Toxic black liquid formed when rainwater percolates through decomposing waste; collected by HDPE liners and pumped to wastewater treatment plants.', hinglish: 'Kachre ke dher se nikalne wala zehreela kaala paani.', hi: 'कचरे से रिसने वाला विषैला तरल।' } }
        ],
        keyFormulas: [
          { name: 'CPCB BOD Limit', formula: '\\text{BOD}_{\\text{discharge}} \\le 30 \\text{ mg/L}', units: 'mg/L', note: 'Standard for discharge into inland surface waters' }
        ],
        mindMap: [{ node: 'Unit IV: Waste & Law', children: ['Solid Waste & Composting', 'Sanitary Landfill Design', 'STP & ETP Biological Treatment', 'CPCB Discharge Standards', 'Key Environmental Acts (1972-1986)'] }],
        differences: [
          {
            conceptA: 'Sewage Treatment Plant (STP)',
            conceptB: 'Effluent Treatment Plant (ETP)',
            comparisonPoints: [
              { feature: 'Influent Type', a: 'Domestic residential sewage (high organic BOD, low heavy metals)', b: 'Industrial wastewater from factories (heavy metals, toxic chemicals, high COD)' },
              { feature: 'Core Treatment', a: 'Biological activated sludge and secondary clarification', b: 'Chemical coagulation, neutralization, and advanced oxidation before biological treatment' }
            ]
          }
        ],
        flashcards: [
          { front: 'What is Vermicomposting?', back: 'A biological composting method utilizing earthworms (e.g. Eisenia fetida) to convert organic food waste into rich nutrient humus.' },
          { front: 'Why is the Environment (Protection) Act of 1986 called an "Umbrella Legislation"?', back: 'Because it coordinates the activities of various central and state authorities established under earlier laws (like the Water and Air Acts) under one comprehensive framework.' }
        ],
        shortAnswerQuestions: [
          { question: 'What is the role of an Effluent Treatment Plant (ETP) in industrial estates?', answer: 'An ETP treats complex industrial wastewater containing heavy metals, oils, acids, and toxic chemicals through physical equalization, chemical coagulation, flocculation, and biological treatment so that effluent meets statutory CPCB limits before disposal.' }
        ],
        longAnswerQuestions: [
          { question: 'Explain the sequential stages of a modern municipal Sewage Treatment Plant (STP) with a neat block flow diagram.', outline: '1. Preliminary: Bar screens and grit chambers remove rags and sand.\n2. Primary Treatment: Primary clarifier separates heavy settleable sludge.\n3. Secondary Biological: Aeration tank with activated sludge aerobic bacteria digesting organic matter.\n4. Secondary Clarifier: Settles biomass sludge (some returned as RAS).\n5. Tertiary Treatment: Sand filtration and chlorination/UV disinfection before discharge.' }
        ],
        numericalPractice: []
      }
    }
  ],
  examQuestions: [
    {
      id: 'evs-eq1',
      unitNumber: 'Unit I',
      type: 'Long',
      marks: 10,
      question: 'Discuss traditional Indian water harvesting systems with special reference to Stepwells (Baolis) and Tankas. Explain their engineering architecture and ecological advantages over deep borewells.',
      solution: '1. Introduction: Arid and semi-arid regions of India developed indigenous water harvesting suited to erratic monsoons.\n2. Stepwells (Baolis / Vavs): Multi-tiered subterranean stone structures with stairs leading down to the water table. Architectural features: porous masonry, cool underground microclimate preventing evaporation, community gathering space.\n3. Tankas: Covered cylindrical underground cisterns built in Thar desert homesteads. Features: plastered circular catchment (Agor), silt traps, sealed dark storage preventing algal growth.\n4. Comparison with deep borewells: Borewells cause groundwater depletion, high energy consumption, and fluoride/arsenic contamination. Indigenous systems recharge aquifers naturally with zero electricity consumption.'
    },
    {
      id: 'evs-eq2',
      unitNumber: 'Unit II',
      type: 'Short',
      marks: 5,
      question: 'State Lindeman’s 10% law. If 100,000 Joules of sunlight is captured by green plants, calculate the energy available at the tertiary consumer level.',
      solution: '1. Lindeman’s 10% Law: Only ~10% of the energy captured at one trophic level is transferred to the next higher trophic level; 90% is dissipated as metabolic respiration heat.\n2. Plants (Producers): 100,000 J.\n3. Herbivores (Primary Consumers): 10% of 100,000 J = 10,000 J.\n4. Primary Carnivores (Secondary Consumers): 10% of 10,000 J = 1,000 J.\n5. Tertiary Consumers: 10% of 1,000 J = 100 Joules.'
    },
    {
      id: 'evs-eq3',
      unitNumber: 'Unit III',
      type: 'Long',
      marks: 10,
      question: 'Clearly distinguish between Stratospheric Ozone Layer Depletion and Tropospheric Global Warming. Discuss the atmospheric layers involved, chemical agents, physical mechanisms, and environmental impacts.',
      solution: 'Tabular Comparison:\n1. Layer: Global Warming occurs in the Troposphere (0-12 km); Ozone Depletion occurs in the Stratosphere (12-50 km).\n2. Causal Agents: Global Warming is driven by greenhouse gases (CO2, CH4, N2O); Ozone Depletion is driven by chlorofluorocarbons (CFCs), Halons, and carbon tetrachloride.\n3. Mechanism: Global Warming traps outgoing terrestrial infrared thermal radiation; Ozone Depletion involves catalytic chlorine radical breakdown of O3 molecules under solar UV photolysis (Cl + O3 -> ClO + O2).\n4. Impacts: Global Warming causes polar ice melt, thermal expansion of oceans, sea-level rise, and climate extremes; Ozone Depletion causes higher ground-level UV-B radiation leading to skin cancers, cataracts, and marine phytoplankton mortality.\n5. Treaties: Paris Agreement for climate change; Montreal Protocol (1987) for ozone layer protection.'
    },
    {
      id: 'evs-eq4',
      unitNumber: 'Unit IV',
      type: 'Long',
      marks: 10,
      question: 'Explain the working of a municipal Sewage Treatment Plant (STP). Differentiate between primary and secondary treatment and state the CPCB standards for effluent discharge.',
      solution: '1. Primary Treatment (Physical): Bar screens remove floating debris; grit chambers settle sand; primary clarifiers settle heavy organic sludge via gravity.\n2. Secondary Treatment (Biological): Wastewater enters aeration tanks where air is continuously bubbled. Aerobic activated sludge microorganisms digest dissolved organic matter. Effluent moves to secondary clarifiers where biomass settles.\n3. Tertiary Treatment (Chemical/Physical): Filtration and disinfection using chlorination or UV radiation.\n4. CPCB Effluent Standards for discharge into inland surface waters: pH = 5.5 to 9.0; BOD <= 30 mg/L; Total Suspended Solids (TSS) <= 100 mg/L; Chemical Oxygen Demand (COD) <= 250 mg/L.'
    }
  ]
};

export const DISRUPTIVE_TECHNOLOGY: Subject = {
  id: 'disruptive-technology',
  title: 'Introduction to Disruptive Technology',
  category: 'Theory',
  description: 'Explore the modern technological revolution: Technology Evolution, Industry 4.0 & 5.0, Artificial Intelligence, Machine Learning, Generative AI, Big Data, IoT, Cloud Computing, Blockchain, Cybersecurity, Robotics, AR/VR, Digital Twins, and Quantum Computing.',
  icon: 'Cpu',
  color: 'from-violet-600 to-purple-800',
  isOfficial: true,
  syllabusSource: 'Official University Syllabus (B.Tech 1st Year)',
  unitsCount: 5,
  units: [
    {
      id: 'dt-u1',
      unitNumber: 'Unit I',
      title: 'Introduction to Disruptive Technologies',
      description: 'Technology evolution, digital transformation, Industry 4.0 and Industry 5.0, characteristics of disruptive technologies, emerging technology landscape, and impact of disruptive technologies on society and industry.',
      topics: [
        'Technology evolution: From the First Industrial Revolution (Mechanization) to the Fifth (Human-centric)',
        'Digital transformation: Digitization, digitalization, and business model transformation',
        'Industry 4.0 (Cyber-physical systems, smart factories, automation) vs. Industry 5.0 (Human-robot collaboration, resilience, sustainability)',
        'Characteristics of disruptive technologies (Clayton Christensen framework: low cost, accessibility, redefining value propositions)',
        'Emerging technology landscape: AI, IoT, Cloud, Blockchain, XR, Quantum, and Robotics',
        'Socio-economic impact of disruption: Workforce displacement, new job creation, ethical and societal implications'
      ],
      lessons: [
        {
          id: 'dt-u1-l1',
          unitId: 'dt-u1',
          subjectId: 'disruptive-technology',
          title: 'Evolution of Technology & Disruptive Innovation',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic digital awareness'],
          realLifeQuestion: {
            en: 'Why did giant companies like Kodak and Blockbuster go bankrupt almost overnight when digital cameras and streaming services emerged?',
            hinglish: 'Kodak aur Blockbuster jaisi vishal companies digital cameras aur Netflix aane par achanak band kyu ho gayi?',
            hi: 'डिजिटल कैमरा और स्ट्रीमिंग सेवाओं के आने पर कोडक और ब्लॉकबस्टर जैसी दिग्गज कंपनियां रातों-रात दिवालिया क्यों हो गईं?'
          },
          simpleExplanation: {
            en: 'A disruptive technology is an innovation that initially appears simpler or cheaper than existing solutions, but improves rapidly, eventually displacing established market leaders (as defined by Harvard professor Clayton Christensen). The evolution from Industry 1.0 (steam power) through Industry 4.0 (smart cyber-physical automation) and now Industry 5.0 (human-centric sustainable AI collaboration) fundamentally redefines human labor, production, and society.',
            hinglish: 'Disruptive technology wo innovation hoti hai jo shuru me sasti ya simple lagti hai par dheere-dheere purani saari market ko khatam karke nayi economy bana deti hai. Industry 1.0 (steam engine) se lekar Industry 4.0 (automation/IoT) aur Industry 5.0 (human + AI collaboration) tak technology ne duniya ko badal diya hai.',
            hi: 'विघटनकारी प्रौद्योगिकी (Disruptive Technology) वह नवाचार है जो पारंपरिक बाजारों और उद्योगों को पूरी तरह विस्थापित कर नई व्यवस्था स्थापित करता है।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'Think of smartphones replacing physical pocket torches, calculators, wristwatches, road maps, and MP3 players all inside a single device. That is technological disruption in the palm of your hand.',
              hinglish: 'Smartphone ne ghadi, torch, calculator, tape recorder aur camera sabko ek hi device me khatam kar diya. Yeh hai disruption.',
              hi: 'स्मार्टफोन ने टॉर्च, कैलकुलेटर, घड़ी और कैमरे को एक ही डिवाइस में समाहित कर विस्थापित कर दिया।'
            },
            limitations: {
              en: 'A smartphone combines existing electronic gadgets, whereas quantum computing and genetic engineering create fundamentally new physical paradigms.',
              hinglish: 'Smartphone purani cheezon ko jodta hai, jabki quantum computing physics ke naye niyam banata hai.',
              hi: 'स्मार्टफोन मौजूदा तकनीकों का संयोजन है, जबकि क्वांटम तकनीक पूरी तरह नए प्रतिमान बनाती है।'
            }
          },
          terminology: [
            {
              term: 'Disruptive Technology',
              definition: {
                en: 'An innovation that significantly alters the way consumers, industries, or businesses operate, displacing established market leaders.',
                hinglish: 'Aisi nayi technology jo purani market aur business ko poori tarah badal de.',
                hi: 'वह तकनीक जो स्थापित बाजार और कार्यप्रणाली को मौलिक रूप से परिवर्तित कर दे।'
              }
            },
            {
              term: 'Industry 4.0 vs 5.0',
              definition: {
                en: 'Industry 4.0 focuses on automated cyber-physical systems and IoT; Industry 5.0 re-integrates human creativity, sustainability, and collaborative robotics (Cobots).',
                hinglish: 'Industry 4.0 pure automation hai; Industry 5.0 human aur robot ke sath milkar kaam karne aur sustainability par focus karta hai.',
                hi: 'उद्योग 4.0 पूर्ण स्वचालन पर केंद्रित है, जबकि उद्योग 5.0 मानव और रोबोट के सह-अस्तित्व और स्थिरता पर आधारित है।'
              }
            }
          ],
          visualType: 'disruptive-tech',
          underlyingPrinciple: {
            en: 'Moore’s Law and Metcalfe’s Network Law accelerate technological disruption. Exponential growth in computing power coupled with interconnected network effects leads to non-linear adoption curves.',
            hinglish: 'Moore ka niyam aur network effects se nayi technology exponentially adopt hoti hai.',
            hi: 'मूर के नियम और नेटवर्क प्रभावों के कारण नई प्रौद्योगिकियों का विस्तार घातांकीय गति से होता है।'
          },
          workedExample: {
            problem: {
              en: 'Categorize the key industrial transition: Identify the power source and primary breakthrough for Industry 1.0, 2.0, 3.0, 4.0, and 5.0.',
              hinglish: 'Industry 1.0 se 5.0 tak ke mukhya power source aur breakthrough identify karein.',
              hi: 'उद्योग 1.0 से 5.0 तक की मुख्य क्रांतियों और ऊर्जा स्रोतों का वर्गीकरण करें।'
            },
            steps: [
              { stepNumber: 1, title: 'Industry 1.0 & 2.0', explanation: { en: 'Industry 1.0: Steam engine and mechanization (~1780s). Industry 2.0: Electrical power and assembly-line mass production (~1870s).', hinglish: '1.0 = Steam engine; 2.0 = Electricity aur mass production.', hi: '1.0 = भाप इंजन; 2.0 = विद्युत और असेंबली लाइन।' } },
              { stepNumber: 2, title: 'Industry 3.0', explanation: { en: 'Industry 3.0: Electronics, microprocessors, PLCs, and early computing (~1970s).', hinglish: '3.0 = Computers, PLC aur microchips.', hi: '3.0 = कंप्यूटर और माइक्रोप्रोसेसर।' } },
              { stepNumber: 3, title: 'Industry 4.0 & 5.0', explanation: { en: 'Industry 4.0: Cyber-Physical Systems, IoT, Cloud, and Big Data (~2010s). Industry 5.0: Collaborative robotics, human-centric design, and circular sustainability (Present).', hinglish: '4.0 = Smart IoT factories; 5.0 = Human + Cobots aur sustainability.', hi: '4.0 = स्मार्ट साइबर-फिजिकल सिस्टम; 5.0 = मानव-केंद्रित सहयोगी रोबोटिक्स।' } }
            ],
            finalAnswer: '5 Industrial Paradigms: 1.0 (Steam) -> 2.0 (Electricity) -> 3.0 (Computing) -> 4.0 (IoT/CPS) -> 5.0 (Human-Centric & Cobots).'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Believing that Industry 5.0 aims to completely eliminate all human workers through total automation.',
                hinglish: 'Yeh sochna ki Industry 5.0 me saare insaano ki jagah robot le lenge.',
                hi: 'यह सोचना कि उद्योग 5.0 में सभी इंसानों को रोबोट से बदल दिया जाएगा।'
              },
              correction: {
                en: 'That was the early vision of Industry 4.0. Industry 5.0 explicitly restores human craftsmanship, empathy, and oversight alongside safe Collaborative Robots (Cobots).',
                hinglish: 'Industry 5.0 me insaan aur robot sath me team ki tarah kaam karte hain.',
                hi: 'उद्योग 5.0 मानव कौशल और सहयोगी रोबोट (Cobots) के सामंजस्य पर आधारित है।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'dt-u1-p1',
              level: 'Beginner',
              question: {
                en: 'What distinguishes Industry 5.0 from Industry 4.0?',
                hinglish: 'Industry 5.0 aur Industry 4.0 me kya mukhya antar hai?',
                hi: 'उद्योग 5.0 को उद्योग 4.0 से क्या भिन्न बनाता है?'
              },
              options: [
                'Industry 5.0 uses steam engines',
                'Industry 5.0 emphasizes human-centricity, sustainability, and human-robot collaboration (Cobots)',
                'Industry 5.0 eliminates computers',
                'Industry 5.0 is only used in agriculture'
              ],
              correctIndex: 1,
              explanation: {
                en: 'Industry 5.0 places human well-being, environmental sustainability, and collaborative robotics at the center of production.',
                hinglish: 'Industry 5.0 insaano aur nature ke hit ko dhyaan me rakh kar technology banata hai.',
                hi: 'उद्योग 5.0 मानव-केंद्रित दृष्टिकोण और स्थिरता पर बल देता है।'
              },
              hint: { en: 'Human and sustainability focus.', hinglish: 'Human centric.', hi: 'मानव-केंद्रित।' }
            }
          ],
          summary: {
            en: [
              'Disruptive technologies transform existing business models and social workflows.',
              'The industrial evolution spans from Steam (1.0) to Electricity (2.0), Computing (3.0), IoT (4.0), and Human-Centric AI (5.0).',
              'Digital transformation changes organizational processes from analog records to agile digital platforms.',
              'Responsible disruption must address workforce adaptation and ethical boundaries.'
            ],
            hinglish: [
              'Disruptive technology purane tariko ko badal kar nayi economy banati hai.',
              'Industry 1.0 se 5.0 tak ka safar.',
              'Human-centric design aur sustainability Industry 5.0 ka core hai.'
            ],
            hi: [
              'विघटनकारी प्रौद्योगिकी उद्योग और समाज के संचालन को पुनर्परिभाषित करती है।',
              'उद्योग 1.0 से 5.0 तक की विकास यात्रा।',
              'उद्योग 5.0 में मानव-रोबोट सहयोग प्रमुख है।'
            ]
          },
          quiz: [
            {
              id: 'dt-u1-q1',
              question: {
                en: 'Who popularized the concept and theory of "Disruptive Innovation"?',
                hinglish: '"Disruptive Innovation" theory kisne di thi?',
                hi: '"विघटनकारी नवाचार" (Disruptive Innovation) का सिद्धांत किसने प्रतिपादित किया?'
              },
              options: ['Clayton Christensen', 'Alan Turing', 'Bill Gates', 'Steve Jobs'],
              correctIndex: 0,
              explanation: {
                en: 'Harvard Business School professor Clayton Christensen introduced the concept in his 1997 book "The Innovator’s Dilemma".',
                hinglish: 'Clayton Christensen ne yeh theory 1997 me di thi.',
                hi: 'हार्वर्ड के प्रोफेसर क्लेटन क्रिस्टेंसन ने यह सिद्धांत दिया।'
              },
              hint: { en: 'Harvard Professor.', hinglish: 'Clayton Christensen.', hi: 'क्लेटन क्रिस्टेंसन।' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'Disruptive technology redefines human civilization. The industrial trajectory moves through five waves, culminating in Industry 5.0 where collaborative robotics and artificial intelligence partner with human creativity to achieve resilient, sustainable production.',
          hinglish: 'Technology evolution Industry 1.0 se 5.0 tak phunch chuki hai.',
          hi: 'प्रौद्योगिकी का विकास उद्योग 1.0 से 5.0 तक मानव-केंद्रित क्रांति बन चुका है।'
        },
        shortNotes: [
          { topic: 'Cobots (Collaborative Robots)', content: { en: 'Robots engineered with force-limiting sensors designed to safely share physical workspaces with human workers without protective safety cages.', hinglish: 'Aise robots jo insaano ke sath safe tareeqe se kaam karte hain.', hi: 'सहयोगी रोबोट जो इंसानों के साथ सुरक्षित कार्य करते हैं।' } }
        ],
        keyFormulas: [],
        mindMap: [{ node: 'Unit I: Disruptive Tech', children: ['Evolution 1.0 to 5.0', 'Disruptive Innovation Framework', 'Digital Transformation', 'Socio-economic Impact', 'Emerging Tech Overview'] }],
        differences: [
          {
            conceptA: 'Industry 4.0',
            conceptB: 'Industry 5.0',
            comparisonPoints: [
              { feature: 'Primary Goal', a: 'Automated efficiency and machine connectivity', b: 'Human empowerment, resilience, and sustainability' },
              { feature: 'Role of Human', a: 'Supervising autonomous automated production lines', b: 'Active creative collaborator working alongside Cobots' },
              { feature: 'Environmental Focus', a: 'Secondary consideration', b: 'Core pillar (zero-waste, circular green economy)' }
            ]
          }
        ],
        flashcards: [
          { front: 'What is a "Cyber-Physical System" (CPS)?', back: 'An engineered integration of physical mechanisms (actuators, sensors) monitored and controlled by computer-based algorithms connected over networks.' },
          { front: 'What is Digitization vs Digitalization?', back: 'Digitization is converting analog data into bits (e.g. paper to PDF); Digitalization is transforming business processes and workflows using digital tech.' }
        ],
        shortAnswerQuestions: [
          { question: 'Define digital transformation and give an engineering example.', answer: 'Digital transformation is the holistic integration of digital technology into all areas of an enterprise, fundamentally changing how it delivers value. Example: A jet engine manufacturer shifting from selling physical engines to selling "power-by-the-hour" thrust enabled by real-time IoT cloud sensor telemetry.' }
        ],
        longAnswerQuestions: [
          { question: 'Trace the evolution of industrial revolutions from Industry 1.0 to Industry 5.0, detailing the core technologies and human labor paradigms of each stage.', outline: '1. Industry 1.0: Steam power, mechanization, textile looms.\n2. Industry 2.0: Electrical grids, Ford assembly line, mass manufacturing.\n3. Industry 3.0: Computers, microprocessors, automated PLCs.\n4. Industry 4.0: Smart factories, IoT, big data, cyber-physical systems.\n5. Industry 5.0: Collaborative robotics (Cobots), human-centricity, and green sustainability.' }
        ],
        numericalPractice: []
      }
    },
    {
      id: 'dt-u2',
      unitNumber: 'Unit II',
      title: 'Artificial Intelligence and Data Technologies',
      description: 'Artificial Intelligence, Machine Learning, Generative AI, Data Science, Big Data Analytics (Volume, Velocity, Variety, Veracity), applications in healthcare, banking, finance, education, and manufacturing; limitations, algorithmic bias, privacy, and responsible AI.',
      topics: [
        'Artificial Intelligence: Definition, Turing Test, Narrow AI (ANI) vs. General AI (AGI)',
        'Machine Learning: Supervised learning, Unsupervised learning, and Reinforcement learning',
        'Generative AI: Large Language Models (LLMs), Transformer architecture, diffusion models, and prompt engineering',
        'Data Science lifecycle: Data collection, cleaning, feature engineering, modeling, and visualization',
        'Big Data Analytics: The 4 Vs (Volume, Velocity, Variety, Veracity) and distributed computing frameworks',
        'Real-world AI applications: Healthcare diagnostics, fraud detection in banking, algorithmic trading, predictive maintenance in factories',
        'Responsible AI and Ethics: Algorithmic bias, data privacy (GDPR), hallucinations, explainable AI (XAI), and copyright concerns'
      ],
      lessons: [
        {
          id: 'dt-u2-l1',
          unitId: 'dt-u2',
          subjectId: 'disruptive-technology',
          title: 'AI, Machine Learning & Generative AI Foundations',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic mathematics and logic'],
          realLifeQuestion: {
            en: 'How can an AI model like ChatGPT compose an original poem or analyze Python code in seconds when computers traditionally only understand 1s and 0s?',
            hinglish: 'ChatGPT ya AI models insaano ki tarah baatein kaise kar lete hain jabki computer sirf 1 aur 0 samajhta hai?',
            hi: 'एआई मॉडल इंसानों की तरह नई कविताएं और कोड कैसे लिख लेते हैं, जबकि कंप्यूटर केवल 0 और 1 समझता है?'
          },
          simpleExplanation: {
            en: 'Traditional computer programs follow rigid hardcoded if-else rules written by a human. Machine Learning turns this inside out: we feed the computer millions of examples of data and desired outputs, and the algorithm learns the underlying mathematical statistical patterns on its own! Generative AI takes this further using the Transformer architecture (Attention mechanism) to predict the most probable next token across vast semantic vectors.',
            hinglish: 'Purane programs me human rules likhta tha (if-else). Machine Learning me computer ko lakho examples diye jaate hain aur wo patterns khud seekhta hai! Generative AI (Transformer models) agla sabse logical word predict karke naya content generate karta hai.',
            hi: 'पारंपरिक प्रोग्रामिंग में मानव नियम लिखता है, जबकि मशीन लर्निंग में कंप्यूटर डेटा से स्वयं पैटर्न सीखता है। जनरेटिव एआई भाषा के गणितीय प्रतिमानों से नया कंटेंट बनाता है।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'Traditional coding is like giving a chef a strict step-by-step recipe. Machine Learning is like letting a chef taste 10,000 gourmet dishes until their palate learns the exact balance of spices independently.',
              hinglish: 'Traditional code ek fixed recipe jaisa hai. Machine Learning ek chef ki tarah hai jisne 10,000 dishes taste karke khud samajh liya ki masale kaise milane hain.',
              hi: 'पारंपरिक कोडिंग एक बंधी-बंधाई रेसिपी है, जबकि मशीन लर्निंग हजारों व्यंजन चखकर स्वयं स्वाद का संतुलन सीखने जैसा है।'
            },
            limitations: {
              en: 'Chefs understand human joy and nutritional health, whereas an AI model is optimizing mathematical loss functions without conscious subjective understanding.',
              hinglish: 'AI me emotions aur consciousness nahi hoti, wo sirf statistics optimize karta hai.',
              hi: 'एआई में मानवीय चेतना नहीं होती, वह केवल सांख्यिकीय गणनाएं करता है।'
            }
          },
          terminology: [
            {
              term: 'Supervised Learning',
              definition: {
                en: 'Training a machine learning model on labeled data where both the input features (X) and correct target labels (Y) are provided.',
                hinglish: 'Aisa model jisme input aur sahi answer dono training ke waqt diye jaate hain.',
                hi: 'मशीन लर्निंग जिसमें इनपुट के साथ सही उत्तर (लेबल) भी दिए जाते हैं।'
              }
            },
            {
              term: 'Generative AI (Transformers)',
              definition: {
                en: 'Deep neural networks utilizing self-attention mechanisms to generate novel text, images, or audio by modeling probability distributions.',
                hinglish: 'Naya text, image ya code create karne wala AI model.',
                hi: 'स्व-ध्यान तंत्र (Self-Attention) द्वारा नया टेक्स्ट, चित्र या कोड उत्पन्न करने वाला एआई।'
              }
            },
            {
              term: 'Algorithmic Bias',
              definition: {
                en: 'Systematic and repeatable errors in an AI system that create unfair outcomes, typically caused by unrepresentative or historical prejudices in the training data.',
                hinglish: 'Data me bhedbhav hone ki wajah se AI dwara galat faisla lena.',
                hi: 'प्रशिक्षण डेटा के कारण एआई मॉडल में उत्पन्न होने वाला पक्षपात।'
              }
            }
          ],
          visualType: 'disruptive-tech',
          underlyingPrinciple: {
            en: 'Neural networks are universal function approximators (Hornik’s Theorem). Through backpropagation and gradient descent, millions of parameters (weights and biases) adjust iteratively to minimize prediction error.',
            hinglish: 'Neural networks backpropagation aur gradient descent se weights adjust karke error ko zero ke kareeb laate hain.',
            hi: 'न्यूरल नेटवर्क बैकप्रॉपैगेशन और ग्रेडिएंट डिसेंट द्वारा त्रुटि को न्यूनतम करते हैं।'
          },
          workedExample: {
            problem: {
              en: 'Classify the learning paradigm: 1. Predicting house prices based on square footage and bedrooms; 2. Grouping e-commerce customers into purchasing segments without predefined labels; 3. Teaching a robotic arm to walk by rewarding distance.',
              hinglish: 'Machine learning paradigm classify karein: House price prediction, Customer segmentation, Robot walking.',
              hi: 'मशीन लर्निंग के प्रकार बताएं: मकान की कीमत का अनुमान, ग्राहकों का वर्गीकरण, रोबोट को चलना सिखाना।'
            },
            steps: [
              { stepNumber: 1, title: 'Case 1: House Prices', explanation: { en: 'Supervised Learning (Regression) — input features mapped to continuous target price labels.', hinglish: 'Supervised Learning (Regression).', hi: 'सुपरवाइज्ड लर्निंग (रिग्रेशन)।' } },
              { stepNumber: 2, title: 'Case 2: Customer Segments', explanation: { en: 'Unsupervised Learning (Clustering / K-Means) — discovering hidden patterns without ground-truth labels.', hinglish: 'Unsupervised Learning (Clustering).', hi: 'अनसुपरवाइज्ड लर्निंग (क्लस्टरिंग)।' } },
              { stepNumber: 3, title: 'Case 3: Robotic Arm Walking', explanation: { en: 'Reinforcement Learning — agent learns optimal policy through trial, error, states, actions, and rewards.', hinglish: 'Reinforcement Learning (Reward-based).', hi: 'रीइन्फोर्समेंट लर्निंग (इनाम आधारित)।' } }
            ],
            finalAnswer: 'Case 1: Supervised; Case 2: Unsupervised; Case 3: Reinforcement Learning.'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Assuming that Artificial Intelligence and Machine Learning are completely identical terms.',
                hinglish: 'AI aur ML ko ek hi cheez maan lena.',
                hi: 'एआई और मशीन लर्निंग को एक ही मान लेना।'
              },
              correction: {
                en: 'AI is the broad umbrella discipline of building smart systems; Machine Learning is a specific subset of AI where systems learn from data; Deep Learning is a subset of ML using deep neural nets.',
                hinglish: 'AI sabse bada circle hai, ML uska ek hissa hai, aur Deep Learning ML ka hissa hai.',
                hi: 'एआई व्यापक विषय है, एमएल उसका उप-भाग है और डीप लर्निंग एमएल का उप-भाग है।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'dt-u2-p1',
              level: 'Beginner',
              question: {
                en: 'Which Machine Learning paradigm learns by interacting with an environment through rewards and penalties?',
                hinglish: 'Kaun si ML technique reward aur penalty ke zariye seekhti hai?',
                hi: 'मशीन लर्निंग का कौन सा प्रकार पुरस्कार और दंड के माध्यम से सीखता है?'
              },
              options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Linear Regression'],
              correctIndex: 2,
              explanation: {
                en: 'Reinforcement Learning trains agents via trial-and-error using reward and penalty signals (e.g. AlphaGo, autonomous driving).',
                hinglish: 'Reinforcement Learning me trial and error se rewards milte hain.',
                hi: 'रीइन्फोर्समेंट लर्निंग पुरस्कार आधारित परीक्षण से सीखती है।'
              },
              hint: { en: 'Reward-driven.', hinglish: 'Rewards and penalties.', hi: 'पुरस्कार आधारित।' }
            }
          ],
          summary: {
            en: [
              'Artificial Intelligence seeks to automate cognitive tasks.',
              'Machine Learning learns statistical representations directly from data (Supervised, Unsupervised, Reinforcement).',
              'Generative AI (Transformers) synthesizes novel text, images, and software code.',
              'Responsible AI mandates mitigating bias, ensuring transparency, and protecting user privacy.'
            ],
            hinglish: [
              'AI data se pattern seekhta hai.',
              'ML ke 3 types: Supervised, Unsupervised, Reinforcement.',
              'Generative AI Transformers ke zariye naya content banata hai.'
            ],
            hi: [
              'एआई संज्ञानात्मक कार्यों को स्वचालित करता है।',
              'मशीन लर्निंग डेटा से स्वतः सीखती है।',
              'जिम्मेदार एआई में गोपनीयता और निष्पक्षता अनिवार्य है।'
            ]
          },
          quiz: [
            {
              id: 'dt-u2-q1',
              question: {
                en: 'What are the classic "4 Vs" that characterize Big Data?',
                hinglish: 'Big Data ke 4 Vs kaun se hote hain?',
                hi: 'बिग डेटा की पहचान करने वाले 4 V कौन से हैं?'
              },
              options: [
                'Voltage, Volume, Vector, Velocity',
                'Volume, Velocity, Variety, Veracity',
                'Variable, Value, View, Valid',
                'Vision, Virtual, Value, Vast'
              ],
              correctIndex: 1,
              explanation: {
                en: 'Big Data is characterized by Volume (scale), Velocity (speed of generation), Variety (formats), and Veracity (trustworthiness).',
                hinglish: 'Big Data = Volume, Velocity, Variety, Veracity.',
                hi: 'वॉल्यूम (मात्रा), वेलोसिटी (गति), वैरायटी (विविधता), वेरासिटी (सत्यता)।'
              },
              hint: { en: 'Scale, speed, variety, truth.', hinglish: 'Volume, Velocity, Variety, Veracity.', hi: 'वॉल्यूम, वेलोसिटी...' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'Artificial Intelligence and Data Technologies transform every branch of engineering. ML parses historical data to predict future behavior, Generative AI models generate novel functional artifacts, and Big Data platforms process high-velocity telemetry, demanding rigorous adherence to Responsible AI and bias mitigation.',
          hinglish: 'AI, ML aur Big Data engineering me predictive analytics aur automation laate hain.',
          hi: 'एआई और डेटा प्रौद्योगिकियां पूर्वानुमान और स्वचालन की रीढ़ हैं।'
        },
        shortNotes: [
          { topic: 'Big Data 4 Vs', content: { en: 'Volume (Petabytes of data), Velocity (real-time stream rates), Variety (structured SQL, unstructured audio/video), Veracity (data cleanliness and trust).', hinglish: 'Volume, Velocity, Variety, Veracity.', hi: 'मात्रा, गति, विविधता, सत्यता।' } }
        ],
        keyFormulas: [],
        mindMap: [{ node: 'Unit II: AI & Data', children: ['AI vs ML vs Deep Learning', 'Supervised / Unsupervised / RL', 'Generative AI & LLMs', 'Big Data 4 Vs', 'Responsible AI & Bias'] }],
        differences: [
          {
            conceptA: 'Supervised Learning',
            conceptB: 'Unsupervised Learning',
            comparisonPoints: [
              { feature: 'Training Data', a: 'Input features with labeled ground-truth answers', b: 'Raw unlabeled data without target outputs' },
              { feature: 'Objective', a: 'Predict labels or numeric values for new inputs', b: 'Discover hidden clusters, patterns, or groupings' },
              { feature: 'Examples', a: 'Spam classification, medical disease diagnosis', b: 'Customer market segmentation, anomaly detection' }
            ]
          }
        ],
        flashcards: [
          { front: 'What is an "AI Hallucination"?', back: 'A phenomenon where a generative AI model confidently produces text or facts that are plausible-sounding but factually incorrect or fabricated.' },
          { front: 'What is the Turing Test?', back: 'A test proposed by Alan Turing (1950) evaluating whether a machine can exhibit conversational behavior indistinguishable from a human.' }
        ],
        shortAnswerQuestions: [
          { question: 'What is algorithmic bias in machine learning and how does it arise?', answer: 'Algorithmic bias occurs when an AI system produces systematically prejudiced results. It arises primarily from historical biases present in the training datasets, non-representative sampling, or flawed proxy metrics chosen by engineers.' }
        ],
        longAnswerQuestions: [
          { question: 'Discuss the applications of Artificial Intelligence and Data Analytics across Healthcare, Banking, and Manufacturing.', outline: '1. Healthcare: AI diagnostics (radiology imaging, tumor detection), personalized genomics, drug discovery.\n2. Banking & Finance: Real-time credit card fraud detection, automated credit scoring, algorithmic high-frequency trading.\n3. Manufacturing: Predictive maintenance of turbines via acoustic sensors, automated optical inspection on assembly lines, supply chain optimization.' }
        ],
        numericalPractice: []
      }
    },
    {
      id: 'dt-u3',
      unitNumber: 'Unit III',
      title: 'Internet of Things and Cloud Computing',
      description: 'Internet of Things (IoT), smart devices and connected systems, smart cities, industrial IoT (IIoT), cloud computing fundamentals, cloud service models (IaaS, PaaS, SaaS) and deployment models, sensor-to-cloud data flow, and security considerations.',
      topics: [
        'Internet of Things (IoT): Architectural layers (Perception, Network, Middleware, Application)',
        'Smart devices and embedded connected systems: Microcontrollers (ESP32, Arduino, Raspberry Pi) and sensor integration',
        'Smart Cities and Industrial IoT (IIoT): Smart grids, connected traffic management, predictive factory maintenance',
        'Communication protocols in IoT: MQTT, CoAP, Zigbee, LoRaWAN, Bluetooth Low Energy (BLE), and 5G cellular',
        'Cloud Computing Fundamentals: Virtualization, elastic on-demand computing, multi-tenancy, and economies of scale',
        'Cloud Service Models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS)',
        'Cloud Deployment Models: Public Cloud, Private Cloud, Hybrid Cloud, and Multi-Cloud architectures',
        'Security and Privacy in Connected Systems: Edge device vulnerabilities, firmware patching, DDoS attacks, and encrypted MQTT telemetry'
      ],
      lessons: [
        {
          id: 'dt-u3-l1',
          unitId: 'dt-u3',
          subjectId: 'disruptive-technology',
          title: 'IoT Architecture, Cloud Services & Connected Cities',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic internet and networking'],
          realLifeQuestion: {
            en: 'How can a municipal smart water meter detect a pipe burst underground and shut off a valve miles away within milliseconds without human intervention?',
            hinglish: 'Smart meter zameen ke andar pipe leak hone par hazaron kilometer door valve ko milliseconds me kaise band kar deta hai?',
            hi: 'स्मार्ट वाटर मीटर जमीन के अंदर पाइप फटने का पता लगाकर बिना इंसानी हस्तक्षेप के कुछ ही मिलीसेकंड में वाल्व कैसे बंद कर देता है?'
          },
          simpleExplanation: {
            en: 'The Internet of Things (IoT) bridges the physical and digital worlds: embedded pressure sensors detect an abrupt drop, an edge microcontroller transmits telemetry via lightweight protocols like MQTT to Cloud Computing platforms (AWS/Azure/GCP). Serverless cloud functions analyze the anomaly in real time and broadcast a command back down to a motorized actuator valve to shut off water.',
            hinglish: 'IoT physical world ko internet se jodta hai: Sensors pressure drop detect karte hain, MQTT protocol se cloud par data bhejte hain, aur cloud AI turant actuator ko valve band karne ka signal bhej deta hai. Cloud computing me hum bina physical server khareede unlimited compute aur storage rent karte hain.',
            hi: 'आईओटी भौतिक सेंसरों को इंटरनेट से जोड़ता है। सेंसर डेटा को क्लाउड पर भेजते हैं जहां एल्गोरिदम तुरंत मोटर चालित वाल्व को बंद करने का आदेश देते हैं।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'IoT sensors are like human nerve endings in your fingers; the network cable is your spinal cord; Cloud Computing is the central brain analyzing pain; and actuator motors are your hand muscles pulling your finger away from a hot stove.',
              hinglish: 'Sensors haath ki nasein hain, network reedh ki haddi hai, Cloud dimag hai, aur Actuators muscles hain jo haath turant peeche kheench lete hain.',
              hi: 'सेंसर तंत्रिकाएं हैं, नेटवर्क रीढ़ की हड्डी है, क्लाउड मस्तिष्क है और एक्ट्यूएटर मांसपेशियां हैं।'
            },
            limitations: {
              en: 'Nerves use biological bio-electricity, whereas IoT systems require battery management, radio spectrum licensing, and cybersecurity firewalls.',
              hinglish: 'IoT devices me battery aur cybersecurity threats ka dhyan rakhna padta hai.',
              hi: 'आईओटी में बैटरी प्रबंधन और साइबर सुरक्षा अनिवार्य है।'
            }
          },
          terminology: [
            {
              term: 'MQTT (Message Queuing Telemetry Transport)',
              definition: {
                en: 'A lightweight publish-subscribe network protocol designed for constrained remote IoT devices with low bandwidth and high latency.',
                hinglish: 'IoT devices ke liye lightweight protocol jo kam internet data me kaam karta hai.',
                hi: 'आईओटी उपकरणों के लिए हल्का पब्लिश-सब्सक्राइब प्रोटोकॉल।'
              }
            },
            {
              term: 'IaaS vs PaaS vs SaaS',
              definition: {
                en: 'IaaS rents raw virtual machines/storage (AWS EC2); PaaS provides a managed environment to deploy code without managing OS (Heroku, Firebase); SaaS delivers complete end-user software (Gmail, Office365).',
                hinglish: 'IaaS = raw computer rent karna; PaaS = coding platform rent karna; SaaS = bana-banaya app use karna.',
                hi: 'IaaS = बुनियादी ढांचा; PaaS = मंच; SaaS = तैयार सॉफ्टवेयर सेवा।'
              }
            }
          ],
          visualType: 'disruptive-tech',
          underlyingPrinciple: {
            en: 'Cloud computing utilizes hypervisor hardware virtualization to decouple software operating systems from underlying physical silicon, enabling dynamic elasticity and pay-as-you-go pricing.',
            hinglish: 'Virtualization ki wajah se ek physical server par hazaron virtual computers chal sakte hain.',
            hi: 'वर्चुअलाइजेशन तकनीक से सॉफ्टवेयर भौतिक हार्डवेयर से स्वतंत्र होकर काम करता है।'
          },
          workedExample: {
            problem: {
              en: 'A startup needs: 1. Raw Linux virtual machines with custom kernel drivers; 2. A managed runtime to deploy Python web APIs without server patching; 3. Corporate email software for employees. Identify the appropriate cloud service model (IaaS, PaaS, SaaS) for each.',
              hinglish: 'Cloud service model pehchanein: Raw Linux VMs, Python deployment runtime, Corporate email.',
              hi: 'क्लाउड सर्विस मॉडल बताएं: रॉ लिनक्स वीएम, पायथन रनटाइम, कॉर्पोरेट ईमेल।'
            },
            steps: [
              { stepNumber: 1, title: 'Requirement 1: Custom Virtual Machines', explanation: { en: 'Infrastructure as a Service (IaaS) — grants full root OS control.', hinglish: 'IaaS (jaise AWS EC2).', hi: 'IaaS (इंफ्रास्ट्रक्चर एज अ सर्विस)।' } },
              { stepNumber: 2, title: 'Requirement 2: Managed Python Runtime', explanation: { en: 'Platform as a Service (PaaS) — developer focuses purely on code.', hinglish: 'PaaS (jaise Google App Engine / Firebase).', hi: 'PaaS (प्लेटफॉर्म एज अ सर्विस)।' } },
              { stepNumber: 3, title: 'Requirement 3: Corporate Email', explanation: { en: 'Software as a Service (SaaS) — turnkey application accessible via browser.', hinglish: 'SaaS (jaise Google Workspace / Office 365).', hi: 'SaaS (सॉफ्टवेयर एज अ सर्विस)।' } }
            ],
            finalAnswer: '1: IaaS; 2: PaaS; 3: SaaS.'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Believing that "the cloud" is an ethereal wireless storage zone in the sky.',
                hinglish: 'Yeh sochna ki cloud aakash me hota hai.',
                hi: 'यह सोचना कि क्लाउड आकाश में कोई आभासी जगह है।'
              },
              correction: {
                en: 'The cloud is simply someone else’s massive physical data center filled with thousands of cooled servers connected by undersea fiber-optic cables.',
                hinglish: 'Cloud kisi aur company (Google, AWS) ka vishal data center hota hai jo zameen par hai.',
                hi: 'क्लाउड वास्तव में अत्यधिक सुरक्षित और विशाल भौतिक डेटा सेंटर होते हैं।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'dt-u3-p1',
              level: 'Beginner',
              question: {
                en: 'Which cloud computing service model provides developers with a pre-configured execution environment so they can deploy code without managing servers or operating systems?',
                hinglish: 'Kaun sa cloud model developer ko bina server manage kiye seedha code run karne deta hai?',
                hi: 'कौन सा क्लाउड मॉडल डेवलपर्स को बिना सर्वर प्रबंधन के कोड चलाने की सुविधा देता है?'
              },
              options: ['IaaS', 'PaaS', 'SaaS', 'Bare Metal'],
              correctIndex: 1,
              explanation: {
                en: 'Platform as a Service (PaaS) abstracts away operating systems, networking, and server maintenance.',
                hinglish: 'PaaS me server OS manage nahi karna padta, sirf code run hota hai.',
                hi: 'PaaS (प्लेटफॉर्म एज अ सर्विस) में ऑपरेटिंग सिस्टम का प्रबंधन स्वतः होता है।'
              },
              hint: { en: 'Platform for code.', hinglish: 'Platform as a Service.', hi: 'प्लेटफॉर्म एज अ सर्विस।' }
            }
          ],
          summary: {
            en: [
              'IoT connects physical sensors and actuators to digital networks across 4 architectural layers.',
              'MQTT is the dominant lightweight publish-subscribe protocol for constrained IoT telemetry.',
              'Cloud Computing delivers elastic, on-demand compute and storage over the internet.',
              'The three service models are IaaS (Infrastructure), PaaS (Platform), and SaaS (Software).'
            ],
            hinglish: [
              'IoT me sensors se lekar cloud tak data flow hota hai.',
              'MQTT lightweight IoT protocol hai.',
              'Cloud models: IaaS, PaaS, SaaS.'
            ],
            hi: [
              'आईओटी सेंसरों और एक्ट्यूएटर्स को इंटरनेट से जोड़ता है।',
              'क्लाउड कंप्यूटिंग मांग पर लचीली कंप्यूटिंग सेवाएं प्रदान करती है।',
              'तीन मुख्य मॉडल: IaaS, PaaS और SaaS हैं।'
            ]
          },
          quiz: [
            {
              id: 'dt-u3-q1',
              question: {
                en: 'Why is MQTT preferred over HTTP for battery-powered remote IoT sensor nodes?',
                hinglish: 'IoT sensors ke liye HTTP ke bajaye MQTT kyu use hota hai?',
                hi: 'बैटरी चालित आईओटी सेंसरों के लिए HTTP की तुलना में MQTT को प्राथमिकता क्यों दी जाती है?'
              },
              options: [
                'MQTT has much lower header packet overhead (as small as 2 bytes) and uses less battery and bandwidth',
                'HTTP is illegal in IoT',
                'MQTT requires high power desktop computers',
                'MQTT cannot transmit numbers'
              ],
              correctIndex: 0,
              explanation: {
                en: 'HTTP headers are large (>800 bytes) and require heavy handshakes; MQTT has minimal 2-byte header overhead and keeps persistent lightweight sockets.',
                hinglish: 'MQTT ka packet bohot chhota hota hai (sirf 2 bytes) jisse battery aur data dono bachte hain.',
                hi: 'MQTT का हेडर बहुत छोटा (2 बाइट्स) होता है जिससे बैटरी और डेटा की भारी बचत होती है।'
              },
              hint: { en: 'Small header and low power.', hinglish: 'Chhota packet overhead.', hi: 'कम डेटा और बैटरी की खपत।' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'The Internet of Things and Cloud Computing form a symbiotic technological backbone. IoT devices collect real-world physical telemetry and route it via lightweight protocols (MQTT) to cloud platforms offering elastic infrastructure (IaaS), developer runtimes (PaaS), and turnkey enterprise software (SaaS).',
          hinglish: 'IoT physical data collect karta hai aur Cloud computing use process karke applications chalati hai.',
          hi: 'आईओटी और क्लाउड कंप्यूटिंग आधुनिक डिजिटल दुनिया का तकनीकी आधार हैं।'
        },
        shortNotes: [
          { topic: 'Edge Computing', content: { en: 'Processing sensor data locally on the gateway device rather than transmitting all raw streams to the cloud, reducing latency and bandwidth.', hinglish: 'Cloud par data bhejne se pehle device par hi processing karna.', hi: 'डेटा को क्लाउड पर भेजने के बजाय स्थानीय स्तर पर प्रोसेस करना।' } }
        ],
        keyFormulas: [],
        mindMap: [{ node: 'Unit III: IoT & Cloud', children: ['4 IoT Layers', 'MQTT Protocol', 'Smart Cities & IIoT', 'IaaS vs PaaS vs SaaS', 'Public vs Private vs Hybrid Cloud'] }],
        differences: [
          {
            conceptA: 'Cloud Computing',
            conceptB: 'Edge Computing',
            comparisonPoints: [
              { feature: 'Location', a: 'Centralized mega data centers hundreds of miles away', b: 'Local physical microcontrollers situated at the sensor site' },
              { feature: 'Latency', a: 'Higher round-trip latency (50–200 ms)', b: 'Near-instantaneous real-time latency (<5 ms)' },
              { feature: 'Compute Power', a: 'Virtually unlimited scalable clusters', b: 'Constrained low-power embedded processors' }
            ]
          }
        ],
        flashcards: [
          { front: 'What is a Hybrid Cloud?', back: 'An integrated computing environment combining on-premises private cloud infrastructure with third-party public cloud services.' },
          { front: 'What are the four architectural layers of IoT?', back: 'Perception Layer (sensors), Network Layer (transmission), Middleware Layer (cloud/storage), and Application Layer (user interface/analytics).' }
        ],
        shortAnswerQuestions: [
          { question: 'What is Industrial IoT (IIoT) and how does it prevent factory downtime?', answer: 'IIoT integrates interconnected sensors across factory machinery to monitor real-time vibration, temperature, and acoustics. By applying predictive maintenance algorithms to this telemetry, engineers replace worn bearings before catastrophic mechanical breakdown occurs.' }
        ],
        longAnswerQuestions: [
          { question: 'Explain the three cloud service models: IaaS, PaaS, and SaaS, outlining the division of responsibility between the cloud provider and the client.', outline: '1. IaaS: Provider manages hardware and virtualization; Client manages OS, runtime, middleware, data, and applications.\n2. PaaS: Provider manages hardware, OS, runtime, and scaling; Client manages only application code and data.\n3. SaaS: Provider manages the entire stack end-to-end; Client simply consumes the application through a web browser.' }
        ],
        numericalPractice: []
      }
    },
    {
      id: 'dt-u4',
      unitNumber: 'Unit IV',
      title: 'Blockchain and Cyber Security',
      description: 'Blockchain fundamentals, cryptocurrencies, smart contracts, decentralized applications, cybersecurity fundamentals (CIA Triad: Confidentiality, Integrity, Availability), digital privacy, cyber threats (phishing, ransomware, DDoS, malware), and defensive security awareness.',
      topics: [
        'Blockchain Fundamentals: Distributed ledger technology (DLT), cryptographic hashing (SHA-256), immutability, and decentralization',
        'Consensus Mechanisms: Proof of Work (PoW) vs. Proof of Stake (PoS)',
        'Smart Contracts: Self-executing code on blockchain networks (Ethereum, Solidity) and decentralized applications (DApps)',
        'Enterprise Blockchain Applications: Supply chain traceability, digital academic credential verification, and healthcare records',
        'Cybersecurity Fundamentals: The CIA Triad (Confidentiality, Integrity, Availability) and defense-in-depth principles',
        'Cyber Threats and Attack Vectors: Phishing, social engineering, Ransomware, Man-in-the-Middle (MitM), and Distributed Denial of Service (DDoS)',
        'Digital Privacy and Security Hygiene: Multi-Factor Authentication (MFA), password salting/hashing, zero-trust architecture, and safe browsing'
      ],
      lessons: [
        {
          id: 'dt-u4-l1',
          unitId: 'dt-u4',
          subjectId: 'disruptive-technology',
          title: 'Blockchain Immutability, Smart Contracts & Cybersecurity Hygiene',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic internet security awareness'],
          realLifeQuestion: {
            en: 'How can a group of people who do not know or trust each other maintain a shared financial or academic record that is mathematically impossible to tamper with or counterfeit?',
            hinglish: 'Bina kisi bank ya central authority ke, anjaan log aapas me aisi ledger kaise maintain kar sakte hain jisme koi fraud ya badlav na kar sake?',
            hi: 'बिना किसी केंद्रीय बैंक या संस्था के, विभिन्न व्यक्ति मिलकर ऐसा बहीखाता (Ledger) कैसे रख सकते हैं जिसमें कोई भी धोखाधड़ी या हेरफेर न कर सके?'
          },
          simpleExplanation: {
            en: 'Blockchain solves the trust problem through cryptographic mathematics and decentralization. Instead of a single central bank server, thousands of independent computers keep an identical copy of the ledger. Each block contains transactions, a cryptographic hash, and the hash of the previous block. Changing even one byte alters that block’s hash, breaking the entire cryptographic chain across the network. Cybersecurity defends our systems using the CIA Triad: Confidentiality (encryption), Integrity (hashing), and Availability (resilience against DDoS).',
            hinglish: 'Blockchain me koi central boss nahi hota; hazaron computers ke paas same copy hoti hai. Har block me transactions, uska hash aur pichle block ka hash hota hai. Agar koi ek number bhi badalta hai toh poori chain break ho jaati hai aur network use reject kar deta hai. Cybersecurity me CIA triad (Confidentiality, Integrity, Availability) sabse important foundation hai.',
            hi: 'ब्लॉकचेन में क्रिप्टोग्राफिक हैशिंग द्वारा रिकॉर्ड्स को जोड़ा जाता है। एक भी रिकॉर्ड में बदलाव करने पर पूरी चेन टूट जाती है। साइबर सुरक्षा में गोपनीयता, अखंडता और उपलब्धता (CIA Triad) सर्वोपरि हैं।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'A traditional ledger is like a single teacher’s notebook that could be erased or stolen. Blockchain is like the teacher announcing a score aloud and all 60 students writing it in their own notebooks simultaneously; no single person can forge their grade because 59 others hold the true record.',
              hinglish: 'Normal register ek teacher ke paas hota hai jo kho sakta hai. Blockchain jaise class ke sabhi 60 baccho ki notebook me same score likha ho; koi akela apna number nahi badal sakta.',
              hi: 'ब्लॉकचेन कक्षा के सभी 60 छात्रों की कॉपियों में एक साथ लिखे रिकॉर्ड की तरह है, जिसे कोई अकेला छात्र नहीं बदल सकता।'
            },
            limitations: {
              en: 'Students can collude verbally, whereas blockchain consensus mechanisms (PoW/PoS) require immense computational work or economic stake to validate blocks.',
              hinglish: 'Blockchain me consensus mathematical algorithms par chalta hai.',
              hi: 'ब्लॉकचेन में सर्वसम्मति गणितीय एल्गोरिदम द्वारा निर्धारित होती है।'
            }
          },
          terminology: [
            {
              term: 'Cryptographic Hash (SHA-256)',
              definition: {
                en: 'A one-way mathematical function that converts any input text into a unique fixed-size 256-bit string; even a tiny change in input drastically changes the output hash (avalanche effect).',
                hinglish: 'Ek aisi mathematical function jisme input badalne par output hash bilkul badal jata hai.',
                hi: 'एकतरफा गणितीय फलन जो किसी भी इनपुट को निश्चित लंबाई के अद्वितीय कोड में बदलता है।'
              }
            },
            {
              term: 'Smart Contract',
              definition: {
                en: 'Self-executing digital code stored on a blockchain that automatically triggers agreements or payments when predetermined conditions are verified.',
                hinglish: 'Aisa code jo shart poori hone par bina kisi beech ke insaan ke apne aap execute ho jata hai.',
                hi: 'ब्लॉकचेन पर सुरक्षित स्व-चालित कोड जो शर्तें पूरी होने पर स्वतः निष्पादित होता है।'
              }
            },
            {
              term: 'CIA Triad',
              definition: {
                en: 'The three core security pillars: Confidentiality (only authorized eyes see data), Integrity (data is unmodified), and Availability (systems stay online).',
                hinglish: 'Cybersecurity ke 3 pillars: Confidentiality, Integrity, Availability.',
                hi: 'साइबर सुरक्षा के तीन आधार: गोपनीयता, अखंडता और उपलब्धता।'
              }
            }
          ],
          visualType: 'disruptive-tech',
          underlyingPrinciple: {
            en: 'Blockchain immutability relies on pre-image resistance and collision resistance of cryptographic hashing. In cybersecurity, defense-in-depth enforces security at every layer (MFA, firewalls, encryption-at-rest, and endpoint hygiene).',
            hinglish: 'Blockchain immutability SHA-256 hash aur consensus par chalti hai. Cybersecurity me defense-in-depth strategy use hoti hai.',
            hi: 'ब्लॉकचेन क्रिप्टोग्राफिक हैशिंग की अपरिवर्तनीयता पर आधारित है और साइबर सुरक्षा बहु-स्तरीय रक्षा पर निर्भर करती है।'
          },
          workedExample: {
            problem: {
              en: 'Identify which pillar of the CIA Triad is violated in: 1. A hacker decrypts an engineer’s confidential bank password; 2. An attacker alters telemetry data on a bridge strain gauge; 3. A DDoS attack overwhelms a university portal during exam registration.',
              hinglish: 'CIA Triad me se kaun sa pillar break hua: Password leak, Telemetry data badalna, Website down hona.',
              hi: 'सीआईए ट्राइएॉड (CIA Triad) का कौन सा घटक प्रभावित हुआ है?'
            },
            steps: [
              { stepNumber: 1, title: 'Case 1: Password Decrypted', explanation: { en: 'Confidentiality violated — unauthorized party gained access to protected credentials.', hinglish: 'Confidentiality break hui.', hi: 'गोपनीयता (Confidentiality) का हनन।' } },
              { stepNumber: 2, title: 'Case 2: Telemetry Data Altered', explanation: { en: 'Integrity violated — data was modified in transit or storage without authorization.', hinglish: 'Integrity break hui (data me tampering hui).', hi: 'अखंडता (Integrity) का उल्लंघन।' } },
              { stepNumber: 3, title: 'Case 3: University Portal Down', explanation: { en: 'Availability violated — legitimate users denied access to active digital service.', hinglish: 'Availability break hui (system offline ho gaya).', hi: 'उपलब्धता (Availability) की बाधा।' } }
            ],
            finalAnswer: 'Case 1: Confidentiality; Case 2: Integrity; Case 3: Availability.'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Confusing Bitcoin with Blockchain as if they were the exact same thing.',
                hinglish: 'Bitcoin aur Blockchain ko ek hi cheez samajhna.',
                hi: 'बिटकॉइन और ब्लॉकचेन को एक ही मान लेना।'
              },
              correction: {
                en: 'Bitcoin is merely one financial cryptocurrency application; Blockchain is the underlying distributed database technology used for supply chains, medical records, and credential verification.',
                hinglish: 'Bitcoin sirf ek application hai; Blockchain wo underlying technology hai jispe hazaron cheezein chal sakti hain.',
                hi: 'बिटकॉइन केवल एक एप्लिकेशन है, जबकि ब्लॉकचेन वह मूल डेटाबेस तकनीक है।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'dt-u4-p1',
              level: 'Beginner',
              question: {
                en: 'What happens to a block in a blockchain if an attacker tampers with its transaction data?',
                hinglish: 'Agar koi blockchain ke kisi block ka data badal de toh kya hoga?',
                hi: 'यदि कोई ब्लॉकचेन के डेटा में हेरफेर करने का प्रयास करे तो क्या होगा?'
              },
              options: [
                'All computers silently accept the change',
                'The block’s cryptographic hash changes, breaking the link with subsequent blocks, causing network consensus to reject the fraudulent block',
                'The computer gets formatted',
                'Nothing happens'
              ],
              correctIndex: 1,
              explanation: {
                en: 'Because block hashes are cryptographically chained, altering any single transaction invalidates its hash and all downstream blocks, triggering rejection.',
                hinglish: 'Hash badal jayega aur baaki sabhi computers us nakli block ko turant reject kar denge.',
                hi: 'हैश बदलते ही पूरी कड़ी टूट जाएगी और नेटवर्क उस अवैध ब्लॉक को खारिज कर देगा।'
              },
              hint: { en: 'Cryptographic chain breaks.', hinglish: 'Hash badal jayega aur chain toot jayegi.', hi: 'कड़ी टूट जाएगी।' }
            }
          ],
          summary: {
            en: [
              'Blockchain is a decentralized, immutable distributed ledger secured by cryptographic hashes.',
              'Smart contracts are deterministic, self-executing programs running on blockchains.',
              'The CIA Triad constitutes Confidentiality, Integrity, and Availability.',
              'Cyber hygiene mandates Multi-Factor Authentication (MFA), patching, and phishing vigilance.'
            ],
            hinglish: [
              'Blockchain ek decentralized ledger hai jise badla nahi ja sakta.',
              'Smart contracts self-executing code hote hain.',
              'Cybersecurity me CIA triad: Confidentiality, Integrity, Availability.'
            ],
            hi: [
              'ब्लॉकचेन एक अपरिवर्तनीय विकेंद्रीकृत बहीखाता है।',
              'स्मार्ट कॉन्ट्रैक्ट स्वतः निष्पादित होने वाले डिजिटल समझौते हैं।',
              'सीआईए ट्राइएॉड साइबर सुरक्षा के तीन मुख्य स्तंभ हैं।'
            ]
          },
          quiz: [
            {
              id: 'dt-u4-q1',
              question: {
                en: 'A deceptive email pretending to be from your university IT department asking you to click a link and verify your password is an example of:',
                hinglish: 'University IT department ban kar fake email bhej kar password maangna kis tarah ka attack hai?',
                hi: 'विश्वविद्यालय का फर्जी ईमेल भेजकर पासवर्ड चुराने का प्रयास किस प्रकार का हमला है?'
              },
              options: ['DDoS Attack', 'Phishing Attack', 'Hardware Trojan', 'SQL Injection'],
              correctIndex: 1,
              explanation: {
                en: 'Phishing is a social engineering attack that tricks victims into revealing sensitive credentials by masquerading as a trusted entity.',
                hinglish: 'Phishing ek fraud email/message attack hota hai jo password churata hai.',
                hi: 'फ़िशिंग एक ऐसा हमला है जिसमें फर्जी पहचान बनाकर क्रेडेंशियल चुराए जाते हैं।'
              },
              hint: { en: 'Social engineering deception.', hinglish: 'Phishing attack.', hi: 'फ़िशिंग हमला।' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'Blockchain establishes decentralized trust through cryptographic hashing (SHA-256) and consensus mechanisms, enabling tamper-proof ledgers and smart contracts. Cybersecurity defends digital assets across the CIA Triad through layered defensive controls including encryption, MFA, and threat awareness.',
          hinglish: 'Blockchain trust aur immutability laati hai, aur Cybersecurity systems ko protect karti hai.',
          hi: 'ब्लॉकचेन विकेंद्रीकृत विश्वास बनाती है और साइबर सुरक्षा प्रणालियों की रक्षा करती है।'
        },
        shortNotes: [
          { topic: 'Zero-Trust Security', content: { en: 'A cybersecurity architecture based on the strict principle: "Never trust, always verify" — every request is authenticated and encrypted regardless of network perimeter.', hinglish: 'Har request ko verify karna chahe wo internal network se hi kyu na ho.', hi: 'कभी भरोसा न करें, सदैव सत्यापित करें।' } }
        ],
        keyFormulas: [],
        mindMap: [{ node: 'Unit IV: Blockchain & Cyber', children: ['Distributed Ledger & SHA-256', 'Proof of Work vs Stake', 'Smart Contracts', 'CIA Triad Pillars', 'Phishing, Malware & MFA'] }],
        differences: [
          {
            conceptA: 'Proof of Work (PoW)',
            conceptB: 'Proof of Stake (PoS)',
            comparisonPoints: [
              { feature: 'Validation Mechanism', a: 'Miners solve intensive cryptographic mathematical puzzles', b: 'Validators are selected based on the number of tokens staked' },
              { feature: 'Energy Consumption', a: 'Extremely high electricity consumption (ASIC mining rigs)', b: '99.9% lower energy consumption' },
              { feature: 'Primary Example', a: 'Bitcoin', b: 'Ethereum (post-Merge)' }
            ]
          }
        ],
        flashcards: [
          { front: 'What is Multi-Factor Authentication (MFA)?', back: 'An identity verification mechanism requiring two or more independent credentials: something you know (password), something you have (phone/token), and something you are (biometrics).' },
          { front: 'What is Ransomware?', back: 'Malicious software that encrypts a victim’s files and databases, demanding a ransom payment (often in cryptocurrency) to restore access.' }
        ],
        shortAnswerQuestions: [
          { question: 'What is a Distributed Denial of Service (DDoS) attack and which CIA pillar does it target?', answer: 'A DDoS attack floods a target server or network with overwhelming malicious traffic from a coordinated botnet of compromised devices, exhausting its bandwidth and processing capacity. It directly targets and destroys the Availability pillar of the CIA Triad.' }
        ],
        longAnswerQuestions: [
          { question: 'Explain how a block in a blockchain is constructed and chained to its predecessor, demonstrating why altering historic transactions is computationally infeasible.', outline: '1. Anatomy of a Block: Block index, timestamp, transaction list, Nonce, Previous Hash, and Current Hash.\n2. Cryptographic chaining: Block N contains the SHA-256 hash of Block N-1.\n3. The Avalanche Effect: Altering any single byte changes that block’s hash entirely.\n4. Broken chain: The altered hash no longer matches the "Previous Hash" stored in Block N+1.\n5. Re-mining cost: To falsify a historic block, the attacker must re-calculate all subsequent proof-of-work hashes faster than the rest of the 51% network combined, which is computationally infeasible.' }
        ],
        numericalPractice: []
      }
    },
    {
      id: 'dt-u5',
      unitNumber: 'Unit V',
      title: 'Future Technologies and Innovation',
      description: 'Robotics and intelligent automation, Extended Reality (AR/VR/MR), Digital Twins, Quantum Computing fundamentals, Green and sustainable technologies, future technology trends, and innovation opportunities for engineers.',
      topics: [
        'Robotics and Intelligent Automation: Industrial robots, Cobots, Autonomous Mobile Robots (AMRs), and Robotic Process Automation (RPA)',
        'Extended Reality (XR): Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR) in engineering visualization and training',
        'Digital Twins: Virtual software replicas of physical assets, real-time sensor syncing, and predictive lifecycle simulation',
        'Quantum Computing Overview: Qubits, superposition, quantum entanglement, and quantum speedup (Shor’s & Grover’s algorithms conceptually without advanced math)',
        'Green and Sustainable Technologies: Renewable energy grid integration, battery energy storage systems (BESS), carbon capture, and green hydrogen',
        'Future Technology Trends and Engineering Innovation: Convergence of AI+IoT+Quantum, engineering entrepreneurship, and ethics of emerging tech'
      ],
      lessons: [
        {
          id: 'dt-u5-l1',
          unitId: 'dt-u5',
          subjectId: 'disruptive-technology',
          title: 'Robotics, XR, Digital Twins & Quantum Horizons',
          durationMinutes: 20,
          difficulty: 'Beginner',
          prerequisites: ['Basic physics and computing'],
          realLifeQuestion: {
            en: 'How can an aerospace engineer test a rocket engine in a virtual wind tunnel with 100% physical fidelity before a single metal bolt is ever manufactured?',
            hinglish: 'Rocket engine ko bina banaye computer me 100% real conditions me test kaise kar lete hain?',
            hi: 'वास्तविक रॉकेट इंजन बनाने से पहले कंप्यूटर में 100% सटीक परिस्थितियों में उसका परीक्षण कैसे किया जाता है?'
          },
          simpleExplanation: {
            en: 'A Digital Twin is a living virtual replica of a physical machine or factory, continuously updated with real-time IoT sensor telemetry to simulate performance, wear, and failure. Extended Reality (AR/VR) overlays holographic schematics directly onto an engineer’s field of view. Quantum Computing harnesses quantum mechanics (Superposition and Entanglement) using qubits that can exist as both 0 and 1 simultaneously, solving complex molecular and cryptographic calculations in minutes that would take classical supercomputers thousands of years!',
            hinglish: 'Digital Twin kisi machine ka exact 3D computer model hota hai jo real sensors se live connect rehta hai. AR/VR se engineers 3D holograms dekh sakte hain. Aur Quantum Computing me Qubits (0 aur 1 dono ek sath) use hote hain jisse lakho saal ki calculation kuch minutes me ho jaati hai!',
            hi: 'डिजिटल ट्विन किसी वास्तविक मशीन का सजीव आभासी मॉडल है। क्वांटम कंप्यूटिंग में क्यूबिट्स (Qubits) सुपरपोजिशन द्वारा जटिल गणनाओं को कुछ ही मिनटों में हल कर देते हैं।'
          },
          familiarAnalogy: {
            analogy: {
              en: 'Classical computing is like a person navigating a maze by walking down one path at a time. A Quantum computer is like a wave of water flooding all maze corridors simultaneously to instantly find the exit.',
              hinglish: 'Classical computer maze me ek-ek rasta chal ke check karta hai. Quantum computer paani ki tarah saare raasto par ek sath daudta hai aur turant rasta dhoondh leta hai.',
              hi: 'क्लासिकल कंप्यूटर भूलभुलैया में एक-एक रास्ता परखता है, जबकि क्वांटम कंप्यूटर पानी की तरह सभी रास्तों की एक साथ जांच करता है।'
            },
            limitations: {
              en: 'Water fills spaces physically, whereas quantum states rely on delicate subatomic phase interference that collapses (decoheres) if exposed to tiny heat vibrations.',
              hinglish: 'Quantum states bohot delicate hoti hain aur heat se collapse ho jaati hain.',
              hi: 'क्वांटम अवस्थाएं अत्यंत संवेदनशील होती हैं और तापमान से डिकोहेरेंस का शिकार हो जाती हैं।'
            }
          },
          terminology: [
            {
              term: 'Digital Twin',
              definition: {
                en: 'A dynamic, virtual software representation of a physical asset, process, or system that mirrors its real-world condition using continuous IoT sensor feeds.',
                hinglish: 'Real machine ka live virtual duplicate jo real-time sensors se update hota hai.',
                hi: 'किसी भौतिक मशीन का सजीव आभासी प्रतिरूप जो वास्तविक सेंसरों से जुड़ा रहता है।'
              }
            },
            {
              term: 'Qubit & Superposition',
              definition: {
                en: 'The quantum basic unit of information (Qubit) that can exist in a linear combination of states |0⟩ and |1⟩ simultaneously until measured.',
                hinglish: 'Quantum bit jo 0 aur 1 dono states me ek sath reh sakta hai.',
                hi: 'क्वांटम सूचना की इकाई जो एक साथ 0 और 1 दोनों अवस्थाओं में रह सकती है।'
              }
            },
            {
              term: 'Extended Reality (XR)',
              definition: {
                en: 'An umbrella term encompassing Augmented Reality (AR overlays data onto reality), Virtual Reality (VR creates total immersion), and Mixed Reality (MR blends interactive holograms).',
                hinglish: 'AR, VR aur Mixed Reality ka collective naam.',
                hi: 'संवर्धित वास्तविकता (AR), आभासी वास्तविकता (VR) और मिश्रित वास्तविकता (MR) का समूह।'
              }
            }
          ],
          visualType: 'disruptive-tech',
          underlyingPrinciple: {
            en: 'Quantum supremacy arises because N entangled qubits represent $2^N$ simultaneous quantum states. Adding just 1 qubit doubles the processing capacity exponentially.',
            hinglish: 'N qubits $2^N$ states represent karte hain. 50 qubits classical supercomputers se aage nikal jaate hain.',
            hi: 'N क्यूबिट्स एक साथ $2^N$ अवस्थाओं का प्रतिनिधित्व करते हैं जिससे घातांकीय गति प्राप्त होती है।'
          },
          workedExample: {
            problem: {
              en: 'Compare the information capacity: How many simultaneous states can be represented by 3 classical bits versus 3 entangled quantum qubits?',
              hinglish: '3 classical bits aur 3 quantum qubits me kitni simultaneous states store ho sakti hain?',
              hi: '3 क्लासिकल बिट्स और 3 क्वांटम क्यूबिट्स में कितनी अवस्थाएं हो सकती हैं?'
            },
            steps: [
              { stepNumber: 1, title: 'Classical Bits', explanation: { en: '3 classical bits can hold exactly ONE of 8 possible states at any given instant (e.g. 101 or 011).', hinglish: 'Classical bits kisi ek waqt par sirf 1 combination store kar sakte hain.', hi: 'क्लासिकल बिट्स एक समय में केवल 1 अवस्था रख सकते हैं।' } },
              { stepNumber: 2, title: 'Quantum Qubits Formula', explanation: { en: 'N entangled qubits can exist in superposition across all 2^N states simultaneously.', hinglish: 'States = 2^N = 2^3 = 8 states.', hi: 'अवस्थाएं = 2^N = 2^3 = 8 अवस्थाएं।' } },
              { stepNumber: 3, title: 'Conclusion', explanation: { en: '3 qubits hold all 8 probability states simultaneously: a|000⟩ + b|001⟩ + ... + h|111⟩.', hinglish: '3 qubits aatho combinations ko ek sath hold karte hain.', hi: '3 क्यूबिट्स सभी 8 अवस्थाओं को एक साथ धारण करते हैं।' } }
            ],
            finalAnswer: 'Classical bits: Exactly 1 state at a time. Quantum Qubits: All 8 states (2^3) processed simultaneously in superposition.'
          },
          commonMistakes: [
            {
              misconception: {
                en: 'Assuming quantum computers will replace all consumer home laptops and smartphones.',
                hinglish: 'Yeh sochna ki sabke ghar me quantum laptop aa jayega.',
                hi: 'यह मानना कि क्वांटम कंप्यूटर सभी घरेलू लैपटॉप की जगह ले लेंगे।'
              },
              correction: {
                en: 'Quantum computers require extreme near-absolute-zero cryogenic cooling (~15 millikelvin) and are built for specialized molecular, optimization, and cryptographic problems, not playing videos or typing docs.',
                hinglish: 'Quantum computers ko -273°C cooling chahiye aur ye specific scientific problems ke liye hain, general games ya video dekhne ke liye nahi.',
                hi: 'क्वांटम कंप्यूटरों को अत्यधिक शीतलन की आवश्यकता होती है और वे जटिल वैज्ञानिक गणनाओं के लिए होते हैं।'
              }
            }
          ],
          practiceQuestions: [
            {
              id: 'dt-u5-p1',
              level: 'Beginner',
              question: {
                en: 'What is a "Digital Twin" in modern engineering manufacturing?',
                hinglish: 'Engineering me "Digital Twin" ka kya matlab hai?',
                hi: 'आधुनिक इंजीनियरिंग में "डिजिटल ट्विन" का क्या अर्थ है?'
              },
              options: [
                'Two engineers who look identical',
                'A dynamic virtual software replica of a physical machine continuously synced with real-time IoT sensor telemetry',
                'A backup computer stored in a warehouse',
                'A duplicate invoice copy'
              ],
              correctIndex: 1,
              explanation: {
                en: 'A Digital Twin models a physical machine in real time to predict component wear, failure, and performance optimization.',
                hinglish: 'Real machine ka computer 3D model jo live sensor data se chalta hai.',
                hi: 'किसी भौतिक मशीन का वास्तविक समय सेंसर डेटा से जुड़ा आभासी प्रतिरूप।'
              },
              hint: { en: 'Virtual copy synced with sensors.', hinglish: 'Virtual copy of physical machine.', hi: 'आभासी प्रतिरूप।' }
            }
          ],
          summary: {
            en: [
              'Cobots and autonomous robotics collaborate safely alongside human workers.',
              'Digital Twins provide living virtual simulation mirrors of real engineering assets.',
              'Extended Reality (AR/VR/MR) delivers immersive spatial holographic interfaces.',
              'Quantum Computing leverages Superposition and Entanglement to process exponential state spaces.'
            ],
            hinglish: [
              'Digital Twins physical machines ke virtual mirrors hote hain.',
              'Cobots insaano ke sath safe kaam karte hain.',
              'Quantum computing superposition aur entanglement par kaam karti hai.'
            ],
            hi: [
              'डिजिटल ट्विन भौतिक परिसंपत्तियों के सजीव आभासी सिमुलेशन हैं।',
              'सहयोगी रोबोट इंसानों के साथ सुरक्षित कार्य करते हैं।',
              'क्वांटम कंप्यूटिंग सुपरपोजिशन और एंटैंगलमेंट पर आधारित है।'
            ]
          },
          quiz: [
            {
              id: 'dt-u5-q1',
              question: {
                en: 'The quantum phenomenon where the state of one qubit instantaneously determines the state of another, regardless of physical distance, is known as:',
                hinglish: 'Do qubits ke aapas me jude hone ke quantum phenomenon ko kya kehte hain?',
                hi: 'क्वांटम भौतिकी की वह परिघटना जिसमें दो क्यूबिट्स दूरी की परवाह किए बिना आपस में जुड़े रहते हैं, क्या कहलाती है?'
              },
              options: ['Superposition', 'Quantum Entanglement', 'Decoherence', 'Quantum Tunneling'],
              correctIndex: 1,
              explanation: {
                en: 'Quantum Entanglement connects qubits such that measuring one immediately reveals the state of its entangled partner (described by Einstein as "spooky action at a distance").',
                hinglish: 'Quantum Entanglement me do particles aapas me inextricably link ho jaate hain.',
                hi: 'क्वांटम एंटैंगलमेंट में दो कण एक दूसरे से अभिन्न रूप से जुड़े रहते हैं।'
              },
              hint: { en: 'Entangled particles.', hinglish: 'Quantum Entanglement.', hi: 'क्वांटम एंटैंगलमेंट।' }
            }
          ]
        }
      ],
      revision: {
        onePageSummary: {
          en: 'Future technologies converge robotics, spatial Extended Reality (XR), and Digital Twins with the revolutionary computational paradigms of Quantum Computing. Engineers who grasp these emerging frontiers will lead sustainable innovation across green hydrogen, smart cities, and next-generation deep tech.',
          hinglish: 'Future technologies me Robotics, Digital Twins, AR/VR aur Quantum Computing shamil hain.',
          hi: 'भविष्य की प्रौद्योगिकियों में रोबोटिक्स, डिजिटल ट्विन और क्वांटम कंप्यूटिंग प्रमुख हैं।'
        },
        shortNotes: [
          { topic: 'Quantum Superposition', content: { en: 'A qubit exists as a linear combination alpha|0> + beta|1> where |alpha|^2 + |beta|^2 = 1, until measurement collapses it to a classical state.', hinglish: 'Measure hone se pehle qubit 0 aur 1 dono hota hai.', hi: 'मापने से पहले क्यूबिट 0 और 1 दोनों अवस्थाओं में होता है।' } }
        ],
        keyFormulas: [
          { name: 'Quantum State Capacity', formula: '\\text{States} = 2^N', units: 'simultaneous states', note: 'N = number of entangled qubits' }
        ],
        mindMap: [{ node: 'Unit V: Future Tech', children: ['Cobots & Industrial Robotics', 'Digital Twins & Predictive Models', 'AR/VR/MR Spatial Computing', 'Quantum Qubits & Superposition', 'Green Energy & Innovation'] }],
        differences: [
          {
            conceptA: 'Augmented Reality (AR)',
            conceptB: 'Virtual Reality (VR)',
            comparisonPoints: [
              { feature: 'Environment', a: 'Digital holograms overlaid onto real physical world', b: 'User fully immersed in synthetic 100% digital virtual world' },
              { feature: 'Hardware', a: 'Smart glasses (HoloLens) or mobile camera screens', b: 'Enclosed opaque headsets (Oculus/Meta Quest, HTC Vive)' },
              { feature: 'Engineering Use', a: 'Engineers viewing wiring schematics overlaid on actual engine', b: 'Virtual reality training for offshore oil rig emergencies' }
            ]
          }
        ],
        flashcards: [
          { front: 'What is a Cobot?', back: 'A Collaborative Robot designed with safety force-sensors to work side-by-side with human operators without requiring protective cages.' },
          { front: 'What is Quantum Decoherence?', back: 'The loss of quantum coherence where delicate qubits interact with environmental thermal noise and collapse into ordinary classical bits.' }
        ],
        shortAnswerQuestions: [
          { question: 'What is a Digital Twin and how does it revolutionize aerospace engineering?', answer: 'A Digital Twin is a real-time virtual replica of a physical aerospace asset (e.g. a turbine engine) continuously fed telemetry from IoT sensors. Engineers simulate thermal stress, airflow turbulence, and wear under extreme flight conditions, enabling predictive maintenance before physical metal fatigue occurs.' }
        ],
        longAnswerQuestions: [
          { question: 'Explain the fundamental concepts of Quantum Computing: Qubits, Superposition, and Quantum Entanglement. Discuss how quantum computers achieve exponential speedup over classical computers.', outline: '1. Classical Bit vs. Qubit: Bits are binary (0 or 1); Qubits exist in superposition of states |0⟩ and |1⟩.\n2. Mathematical state: |psi⟩ = alpha|0⟩ + beta|1⟩.\n3. Quantum Entanglement: Non-local correlation where measuring one qubit determines its partner instantly.\n4. Exponential State Space: N entangled qubits evaluate 2^N states simultaneously.\n5. Applications: Molecular simulation for drug discovery, optimization of logistics, and breaking RSA cryptography.' }
        ],
        numericalPractice: []
      }
    }
  ],
  examQuestions: [
    {
      id: 'dt-eq1',
      unitNumber: 'Unit I',
      type: 'Long',
      marks: 10,
      question: 'Trace the evolution of industrial revolutions from Industry 1.0 to Industry 5.0. Highlight the primary power source, key technological breakthroughs, and the evolving role of human labor at each stage.',
      solution: '1. Industry 1.0 (Mechanization, ~1780s): Steam engines and water power; mechanical textile looms; shifted manual labor to factories.\n2. Industry 2.0 (Mass Production, ~1870s): Electrical power grids, assembly line methodology (Henry Ford); mass manufacturing and division of labor.\n3. Industry 3.0 (Automation, ~1970s): Microprocessors, PLCs, early computers, and robotics; routine manual tasks automated.\n4. Industry 4.0 (Cyber-Physical Systems, ~2010s): Smart factories, IoT sensors, cloud computing, big data analytics, and autonomous machine-to-machine (M2M) communication.\n5. Industry 5.0 (Human-Centric & Sustainable, Present): Synergy between humans and collaborative robots (Cobots); places human creativity, resilience, and environmental sustainability at the center of manufacturing.'
    },
    {
      id: 'dt-eq2',
      unitNumber: 'Unit II',
      type: 'Short',
      marks: 5,
      question: 'Differentiate between Supervised, Unsupervised, and Reinforcement Learning with an engineering application for each.',
      solution: '1. Supervised Learning: Trained on labeled input-output pairs. Application: Predicting structural fatigue life of aircraft wings from strain gauge data.\n2. Unsupervised Learning: Discovers hidden patterns in unlabeled data. Application: Clustering factory vibration anomalies to detect uncatalogued machine defects.\n3. Reinforcement Learning: Learns through environmental trial, error, actions, and rewards. Application: Training autonomous drones to navigate GPS-denied tunnels.'
    },
    {
      id: 'dt-eq3',
      unitNumber: 'Unit III',
      type: 'Long',
      marks: 10,
      question: 'Describe the 4-tier architectural framework of the Internet of Things (IoT). Explain why the MQTT protocol is preferred over HTTP for remote sensor telemetry.',
      solution: '1. Perception Tier: Physical sensors (temperature, pressure, vibration) and actuators interfacing with the analog physical world.\n2. Network Tier: Edge gateways (ESP32, Raspberry Pi) transmitting data over communication networks (MQTT, LoRaWAN, 5G, Zigbee).\n3. Middleware Tier: Cloud platforms (AWS IoT Core, Azure IoT) providing distributed storage, message broking, and stream processing.\n4. Application Tier: User dashboards, mobile alerts, and AI predictive maintenance analytics.\n5. MQTT vs HTTP: HTTP has large text header overhead (>800 bytes per request) and requires continuous TCP connection teardown/re-establishment. MQTT is a lightweight publish-subscribe binary protocol with headers as small as 2 bytes, reducing network bandwidth, power draw, and packet loss on battery-operated remote nodes.'
    },
    {
      id: 'dt-eq4',
      unitNumber: 'Unit IV',
      type: 'Long',
      marks: 10,
      question: 'Explain the three pillars of the CIA Triad in cybersecurity. How does cryptographic hashing ensure data integrity in a distributed blockchain network?',
      solution: '1. Confidentiality: Ensuring sensitive data is accessible only to authorized entities through encryption (AES, RSA) and access controls.\n2. Integrity: Safeguarding accuracy and completeness of data, ensuring it is not altered by unauthorized parties.\n3. Availability: Ensuring authorized users have uninterrupted access to critical systems and networks, defended against DDoS and power outages.\n4. Blockchain Integrity Mechanism: Blocks are linked using SHA-256 cryptographic hashes. If an attacker tampers with even one byte of a transaction, that block’s hash changes drastically due to the avalanche effect. Because subsequent blocks store the original hash as their "Previous Hash", the cryptographic chain breaks. The network consensus nodes immediately identify the mismatch and reject the tampered block.'
    },
    {
      id: 'dt-eq5',
      unitNumber: 'Unit V',
      type: 'Long',
      marks: 10,
      question: 'What is a Digital Twin? Explain its operational architecture and how real-time IoT telemetry enables predictive maintenance in industrial manufacturing.',
      solution: '1. Definition: A Digital Twin is an active, dynamic virtual software replica of a physical machine, process, or asset, continuously synchronized with its real-world counterpart.\n2. Operational Architecture:\n   - Physical Asset: Machine equipped with vibration, temperature, acoustic, and pressure sensors.\n   - Data Pipeline: High-speed edge gateways transmitting telemetry via MQTT/Kafka to the cloud.\n   - Virtual Model: 3D physics-based digital model running finite element analysis (FEA) and computational fluid dynamics (CFD).\n   - AI Analytics: Machine learning algorithms comparing live sensor streams with expected nominal physics behavior.\n3. Predictive Maintenance: When telemetry reveals subtle harmonic deviations indicating bearing micro-wear, the Digital Twin predicts the exact remaining useful life (RUL) and schedules replacement before catastrophic breakdown occurs.'
    }
  ]
};
