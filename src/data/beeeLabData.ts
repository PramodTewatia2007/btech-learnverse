import { Subject } from '../types';

export const BEEE_LAB: Subject = {
  id: 'beee-lab',
  title: 'Basic Electronics & Electrical Engineering Lab',
  category: 'Laboratory',
  description: '12 practical electrical and electronics experiments including Ohm’s law, Kirchhoff’s laws, diode curves, transformer ratio, transistor parameters, motor reversing, and staircase wiring.',
  icon: 'Wrench',
  color: 'from-amber-500 to-red-600',
  isOfficial: true,
  syllabusSource: 'Official University Lab Syllabus (B.Tech 1st Year)',
  unitsCount: 12,
  units: [],
  experiments: [
    {
      id: 'beee-lab-1',
      expNumber: 1,
      title: 'Introduction to Electrical Tools, Materials, and Symbols',
      aim: 'To familiarize students with standard electrical workshop tools, wiring accessories, electrical materials, and standard schematic symbols.',
      learningObjectives: [
        'Identify cutting pliers, nose pliers, wire strippers, screw drivers, and phase tester.',
        'Understand standard symbols for SPST switches, sockets, fuses, circuit breakers, and lamps.',
        'Distinguish between conductors, insulators, and semiconductors.'
      ],
      apparatus: [
        'Combination pliers, side cutting pliers, long nose pliers',
        'Wire stripper and electrician’s knife',
        'Neon phase tester (100V - 500V)',
        'Digital Multimeter (DMM)',
        'Sample switches (SPST, SPDT/two-way, intermediate), sockets, ceiling roses, and MCBs'
      ],
      theory: {
        en: 'Electrical tools are precision instruments specifically insulated with high-dielectric plastics (tested to 1000 V) to protect the electrician against shock. Standard electrical diagrams use universal schematic symbols to convey circuit logic without drawing bulky physical devices. A neon tester uses a 1 MΩ internal safety resistor in series with a neon glow bulb to detect live phase conductors through capacitive ground return through the user’s thumb.',
        hinglish: 'Electrical tools 1000 V tak insulated hote hain taaki shock na lage. Neon tester me 1 Megaohm ka safety resistor hota hai jo current ko microamperes me limit karta hai, jisse ungli lagane par tester glow karta hai bina shock lage.',
        hi: 'विद्युत उपकरण 1000 V तक विद्युतरोधी होते हैं। नियॉन टेकर में 1 MΩ का सुरक्षा प्रतिरोधक होता है जो धारा को अत्यंत सुरक्षित स्तर पर सीमित करता है।'
      },
      equations: [
        { formula: 'I_{\\text{tester}} = \\frac{V}{R_{\\text{internal}} + R_{\\text{body}}} \\approx \\frac{230\\,\\text{V}}{10^6\\,\\Omega} = 0.23\\,\\text{mA}', symbolDefs: 'Safe microampere current through neon tester' }
      ],
      diagramDescription: 'Display board showing labeled collection of combination pliers, wire stripper, phase tester, 2-way switch, and schematic symbols.',
      safetyPrecautions: [
        'Never use uninsulated tools or cracked pliers on electrical equipment.',
        'Never use a neon tester with a cracked transparent plastic body.'
      ],
      procedure: [
        '1. Inspect each workshop tool and note its primary mechanical function and insulation rating.',
        '2. Use the wire stripper to cleanly remove 10 mm of PVC insulation from a 1.5 mm² copper wire without nicking conductor strands.',
        '3. Test a live socket with the neon tester: touch probe to the right socket pin (Phase) with thumb on top brass cap; verify glow.',
        '4. Practice drawing standard symbols for DC battery, AC source, SPST switch, SPDT switch, fuse, MCB, resistor, capacitor, and inductor.'
      ],
      simulationType: 'tools-overview',
      defaultParams: {
        toolSelection: 1
      },
      observationColumns: [
        { key: 'toolName', label: 'Tool / Material Name', unit: '' },
        { key: 'insulationRating', label: 'Insulation Rating', unit: 'Volts' },
        { key: 'primaryUse', label: 'Primary Workshop Function', unit: '' }
      ],
      sampleObservations: [
        { toolName: 'Combination Pliers', insulationRating: 1000, primaryUse: 'Gripping, twisting, and cutting electrical wires' },
        { toolName: 'Neon Phase Tester', insulationRating: 500, primaryUse: 'Detecting live AC phase conductors' },
        { toolName: 'Wire Stripper', insulationRating: 1000, primaryUse: 'Stripping outer PVC insulation cleanly' },
        { toolName: 'Digital Multimeter', insulationRating: 600, primaryUse: 'Measuring V, I, R, and circuit continuity' }
      ],
      calculationGuide: 'Verify neon tester safety current: I = 230 / (1,000,000 + 10,000) = 0.227 mA, well below the human perception threshold of 1 mA.',
      resultInterpretation: 'Familiarity with workshop tools and standard electrical symbols completed successfully.',
      sourcesOfError: ['Using incorrect stripper gauge size resulting in severed copper strands.'],
      vivaQuestions: [
        { question: 'Why does touching the brass contact of a neon tester not cause an electric shock?', answer: 'Inside the tester, a massive current-limiting safety resistor (1 MΩ to 2 MΩ) is connected in series with the neon bulb. At 230 V, the maximum current entering your body is less than 0.2 mA, which is well below the 1 mA threshold of human perception.' }
      ],
      revisionQuiz: [
        {
          id: 'beee-lab-q1',
          question: {
            en: 'In a standard 3-pin wall socket viewed from the front, which pin is the LIVE (Phase) pin?',
            hinglish: 'Front se dekhne par 3-pin socket me LIVE pin kaun sa hota hai?',
            hi: 'सामने से देखने पर 3-पिन सॉकेट में फेज (Live) पिन कौन-सा होता है?'
          },
          options: ['Right pin (marked L)', 'Left pin (marked N)', 'Top large pin (marked E)', 'Center pin'],
          correctIndex: 0,
          explanation: {
            en: 'By standard electrical wiring conventions (IS 732), the RIGHT socket terminal connects to Phase/Live, the LEFT terminal connects to Neutral, and the TOP larger terminal connects to Earth.',
            hinglish: 'Right pin hamesha Live (L) hota hai, Left pin Neutral (N), aur Top pin Earth (E) hota hai.',
            hi: 'भारतीय मानक अनुसार दायाँ पिन फेज (L), बायाँ पिन न्यूट्रल (N) तथा ऊपरी बड़ा पिन अर्थ (E) होता है।'
          },
          hint: {
            en: 'Remember R for Right and Red/Live.',
            hinglish: 'Right = Live.',
            hi: 'दायाँ पिन फेज होता है।'
          }
        }
      ]
    },
    {
      id: 'beee-lab-2',
      expNumber: 2,
      title: 'Verification of Ohm’s Law using a DC Circuit',
      aim: 'To verify Ohm’s law by measuring the current flowing through a fixed resistor as a function of applied DC voltage and determining resistance from the V-I slope.',
      learningObjectives: [
        'Set up a variable DC power supply, ammeter, voltmeter, and load resistor.',
        'Observe linear proportionality between voltage and current (V ∝ I).',
        'Calculate resistance R = ΔV / ΔI from the slope of the V-I line.'
      ],
      apparatus: [
        'Regulated DC variable power supply (0 - 30 V, 2 A)',
        'Standard wire-wound resistors (R = 50 Ω and 100 Ω)',
        'Digital DC Ammeter (0 - 500 mA)',
        'Digital DC Voltmeter (0 - 30 V)',
        'Connecting wires and breadboard'
      ],
      theory: {
        en: 'Ohm’s law states that the current I through a metallic conductor between two points is directly proportional to the voltage V across the two points, provided physical conditions (temperature) remain unchanged: V = I · R. A graph of V on y-axis against I on x-axis is a straight line passing through the origin whose slope represents the resistance R.',
        hinglish: 'Ohm’s law kehta hai ki V = I·R. Voltage badhane par current usi ratio me badhti hai. V aur I ka graph ek seedhi line banta hai jiska slope resistance R hota hai.',
        hi: 'ओम नियमानुसार V = I·R होता है। विभवान्तर और धारा का ग्राफ मूल बिंदु से गुजरने वाली सरल रेखा होती है जिसकी प्रवणता प्रतिरोध R को दर्शाती है।'
      },
      equations: [
        { formula: 'R = \\frac{V}{I} = \\frac{\\Delta V}{\\Delta I}', symbolDefs: 'Resistance from slope of V-I graph' }
      ],
      diagramDescription: 'Circuit showing variable DC power supply connected in series with Ammeter and Resistor, with Voltmeter connected directly across the resistor terminals.',
      safetyPrecautions: [
        'Connect the ammeter in SERIES and voltmeter in PARALLEL. Connecting an ammeter in parallel will cause a dead short circuit!',
        'Do not exceed the resistor power rating (P = V²/R).'
      ],
      procedure: [
        '1. Connect the circuit with ammeter in series with 100 Ω resistor and voltmeter in parallel.',
        '2. Set the power supply to 2.0 V and record the ammeter current.',
        '3. Increase the voltage in steps of 2 V up to 20 V, recording voltage V and current I at each step.',
        '4. Plot V vs I graph and calculate slope R = ΔV / ΔI.',
        '5. Compare experimental slope with the nominal marked resistance value.'
      ],
      simulationType: 'ohms-law-lab',
      defaultParams: {
        testResistance: 100, // ohms
        supplyVoltage: 10 // V
      },
      observationColumns: [
        { key: 'voltage', label: 'Applied Voltage (V)', unit: 'Volts' },
        { key: 'current', label: 'Measured Current (I)', unit: 'mA' },
        { key: 'calcR', label: 'Calculated R (V / I)', unit: 'Ω' }
      ],
      sampleObservations: [
        { voltage: 2.0, current: 20.1, calcR: 99.5 },
        { voltage: 4.0, current: 40.2, calcR: 99.5 },
        { voltage: 6.0, current: 60.3, calcR: 99.5 },
        { voltage: 8.0, current: 80.4, calcR: 99.5 },
        { voltage: 10.0, current: 100.5, calcR: 99.5 }
      ],
      calculationGuide: 'Slope = ΔV / ΔI = (10.0 - 2.0) V / (100.5 - 20.1) × 10^-3 A = 8.0 / (80.4 × 10^-3) = 99.5 Ω.',
      resultInterpretation: 'V-I graph is a straight line through the origin, verifying Ohm’s law. Measured resistance is 99.5 Ω (0.5% tolerance of 100 Ω nominal resistor).',
      sourcesOfError: [
        'Resistor temperature rise causing slight positive temperature coefficient resistance increase at higher voltages.',
        'Internal resistance of the ammeter.'
      ],
      vivaQuestions: [
        { question: 'What is an "Ohmic" versus "Non-Ohmic" conductor?', answer: 'An Ohmic conductor obeys V = IR with a linear straight-line V-I curve (e.g. copper, nichrome). A Non-Ohmic conductor does not obey Ohm’s law and exhibits a curved V-I relationship (e.g. semiconductor diodes, incandescent bulb filaments, vacuum tubes).' }
      ],
      revisionQuiz: [
        {
          id: 'beee-lab-q2',
          question: {
            en: 'Why must an ammeter always be connected in series with the circuit branch?',
            hinglish: 'Ammeter ko hamesha series me kyu lagaya jata hai?',
            hi: 'अमीटर को सदैव परिपथ के श्रेणी क्रम में ही क्यों जोड़ा जाता है?'
          },
          options: [
            'Because an ammeter has nearly zero internal resistance and must sample the entire branch current without creating a short circuit',
            'Because it has infinite resistance',
            'To prevent voltage drop',
            'To increase circuit power'
          ],
          correctIndex: 0,
          explanation: {
            en: 'An ammeter has very low internal resistance (~0.01 Ω). Connecting it in series ensures that all branch current flows through it without adding significant resistance. Connecting it in parallel would cause a catastrophic short circuit, blowing its internal fuse.',
            hinglish: 'Ammeter ka resistance lagbhag zero hota hai. Series me lagane se poori current usme se guzar sakti hai. Parallel me lagane se short circuit ho jayega.',
            hi: 'अमीटर का प्रतिरोध नगण्य होता है। श्रेणी में जोड़ने पर पूरी धारा इससे गुजरती है; समानांतर में लगाने पर शॉर्ट-सर्किट हो जाएगा।'
          },
          hint: {
            en: 'Think about what happens if you connect a zero-ohm wire across a power supply.',
            hinglish: 'Zero resistance taar ko direct battery par lagane se short circuit ho jata hai.',
            hi: 'शून्य प्रतिरोध वाला तार समानांतर में लगाने पर शॉर्ट-सर्किट होता है।'
          }
        }
      ]
    },
    {
      id: 'beee-lab-3',
      expNumber: 3,
      title: 'Verification of Kirchhoff’s Current Law (KCL) & Voltage Law (KVL)',
      aim: 'To verify Kirchhoff’s Current Law (∑I = 0) at a circuit junction and Kirchhoff’s Voltage Law (∑V = 0) in closed circuit loops using a dual-source DC network.',
      learningObjectives: [
        'Wire a multi-loop DC resistive network with multiple independent nodes.',
        'Measure currents entering and leaving a central node to verify KCL.',
        'Measure all branch voltages around loops to verify KVL.'
      ],
      apparatus: [
        'Dual DC regulated power supply (0 - 30 V)',
        'Three resistors (R1 = 100 Ω, R2 = 220 Ω, R3 = 330 Ω)',
        'Digital DC Multimeters (for current and voltage)',
        'Breadboard and connecting leads'
      ],
      theory: {
        en: 'At any circuit node, KCL requires I_1 + I_2 + I_3 = 0. Around any closed circuit loop, KVL requires ∑V = 0. Sign convention: tracing a loop in the direction of branch current gives a negative potential drop (-I·R); passing from negative to positive terminal of a voltage source gives a positive potential rise (+V).',
        hinglish: 'KCL me junction par total incoming current = total outgoing current hota hai. KVL me loop me voltage gains = voltage drops hota hai.',
        hi: 'KCL अनुसार संधि पर आने वाली धारा = जाने वाली धारा। KVL अनुसार लूप में समस्त विभव परिवर्तनों का योग शून्य होता है।'
      },
      equations: [
        { formula: 'I_{\\text{in}} = I_{\\text{out}} \\implies I_1 = I_2 + I_3', symbolDefs: 'KCL at node A' },
        { formula: 'V_1 - I_1 R_1 - I_3 R_3 = 0', symbolDefs: 'KVL around Loop 1' }
      ],
      diagramDescription: 'T-network circuit with two independent DC voltage sources V1 and V2, resistors R1, R2, and central shunt resistor R3 meeting at node A.',
      safetyPrecautions: [
        'Turn off power supplies when altering circuit wiring on the breadboard.',
        'Verify polarities of DC meters before powering on.'
      ],
      procedure: [
        '1. Assemble the circuit: connect R1 (100 Ω) to +12 V supply V1, R2 (220 Ω) to +10 V supply V2, and join their other ends at junction A with R3 (330 Ω) connected to ground.',
        '2. Insert ammeter in series with branch 1, branch 2, and branch 3 to measure currents I1, I2, and I3.',
        '3. Verify that I1 + I2 = I3 (KCL).',
        '4. Measure voltages V_R1, V_R2, and V_R3 with a voltmeter.',
        '5. Sum voltages around loop 1: (V1 - V_R1 - V_R3) and loop 2: (V2 - V_R2 - V_R3) to verify they sum to 0 V (KVL).'
      ],
      simulationType: 'kcl-kvl-lab',
      defaultParams: {
        v1: 12,
        v2: 10,
        r1: 100,
        r2: 220,
        r3: 330
      },
      observationColumns: [
        { key: 'nodeCheck', label: 'Node / Loop', unit: '' },
        { key: 'measured1', label: 'Branch 1', unit: 'mA / V' },
        { key: 'measured2', label: 'Branch 2', unit: 'mA / V' },
        { key: 'measured3', label: 'Branch 3', unit: 'mA / V' },
        { key: 'sumVal', label: 'Algebraic Sum (∑)', unit: 'mA / V' }
      ],
      sampleObservations: [
        { nodeCheck: 'Node A Currents (KCL)', measured1: 43.5, measured2: 10.2, measured3: 53.6, sumVal: 0.1 },
        { nodeCheck: 'Loop 1 Voltages (KVL)', measured1: 12.0, measured2: -4.35, measured3: -7.65, sumVal: 0.0 },
        { nodeCheck: 'Loop 2 Voltages (KVL)', measured1: 10.0, measured2: -2.35, measured3: -7.65, sumVal: 0.0 }
      ],
      calculationGuide: 'KCL check: 43.5 mA + 10.2 mA = 53.7 mA ≈ 53.6 mA (0.1 mA difference due to meter burden voltage). KVL check: 12.0 V - 4.35 V - 7.65 V = 0.00 V (Exact!).',
      resultInterpretation: 'Kirchhoff’s Current Law and Kirchhoff’s Voltage Law verified successfully within experimental limits.',
      sourcesOfError: ['Ammeter burden voltage (small voltage drop inside current meter).'],
      vivaQuestions: [
        { question: 'Why can KCL not be violated at a junction?', answer: 'Because charge is a strictly conserved physical quantity. If currents did not sum to zero (∑I ≠ 0), electric charge would accumulate indefinitely at the point-sized junction, which would create infinite electrostatic potential, an impossibility in physics.' }
      ],
      revisionQuiz: [
        {
          id: 'beee-lab-q3',
          question: {
            en: 'In Kirchhoff’s Voltage Law (KVL), going across a resistor in the opposite direction of the branch current is treated as a:',
            hinglish: 'KVL me current ki ulti disha me resistor paar karne par sign kya liya jata hai?',
            hi: 'KVL में धारा की विपरीत दिशा में प्रतिरोधक को पार करने पर विभव परिवर्तन माना जाता है:'
          },
          options: ['Potential RISE (+I·R)', 'Potential DROP (-I·R)', 'Zero potential change', 'Infinite potential'],
          correctIndex: 0,
          explanation: {
            en: 'Current flows from high potential to low potential across a resistor. Moving in the opposite direction goes from lower potential to higher potential, which represents a potential rise (+I·R).',
            hinglish: 'Current high se low potential behti hai. Ulti taraf jaane par potential badhta hai, isliye +IR rise hota hai.',
            hi: 'धारा उच्च से निम्न विभव की ओर बहती है। विपरीत जाने पर निम्न से उच्च विभव (+IR) वृद्धि होती है।'
          },
          hint: {
            en: 'Going upstream against the current means going uphill.',
            hinglish: 'Dhara ke viruddh jana matlb upar chadhna.',
            hi: 'विपरीत चलना विभव वृद्धि है।'
          }
        }
      ]
    },
    {
      id: 'beee-lab-4',
      expNumber: 4,
      title: 'Resistance Measurement using Resistor Color Coding and Multimeter',
      aim: 'To determine the resistance and tolerance of carbon composition resistors using the 4-band and 5-band color coding system and verify using a Digital Multimeter (DMM).',
      learningObjectives: [
        'Memorize the standard color code mnemonic (BBROY of Great Britain has Very Good Wife).',
        'Read 4-band color codes: Band 1 (1st digit), Band 2 (2nd digit), Band 3 (multiplier 10^x), Band 4 (tolerance).',
        'Measure resistance using a DMM and verify whether it falls within the rated tolerance band.'
      ],
      apparatus: [
        'Assorted carbon film and metal film resistors (10 Ω to 1 MΩ)',
        'Digital Multimeter with test probes',
        'Color code reference chart'
      ],
      theory: {
        en: 'The standard 4-band color code reads: Black (0), Brown (1), Red (2), Orange (3), Yellow (4), Green (5), Blue (6), Violet (7), Gray (8), White (9). Multiplier bands represent powers of 10. Tolerance bands are Gold (±5%), Silver (±10%), and None (±20%). Resistance R = (Digit 1 · 10 + Digit 2) × 10^(Digit 3) ± Tolerance.',
        hinglish: 'Resistor color code: B B R O Y Great Britain Very Good Wife (0 se 9). Pehle do colors digits hote hain, teesra 10 ki power hota hai, aur choutha color Gold (±5%) ya Silver (±10%) tolerance hota hai.',
        hi: 'प्रतिरोधक कलर कोड प्रणाली में प्रथम दो रंग अंक, तीसरा रंग 10 की घात (गुणक) तथा चौथा रंग सह्यता (Tolerance: गोल्ड ±5%, सिल्वर ±10%) दर्शाता है।'
      },
      equations: [
        { formula: 'R = (d_1 \\cdot 10 + d_2) \\times 10^{d_3} \\pm \\text{Tol}\\%', symbolDefs: '4-band color code formula' }
      ],
      diagramDescription: 'Chart displaying color code bands on a cylindrical resistor and DMM probes clipped to its lead wires.',
      safetyPrecautions: [
        'Never touch the metal probe tips with bare fingers when measuring high resistances (>100 kΩ); body resistance in parallel will corrupt readings!',
        'Ensure the resistor is completely disconnected from any powered circuit before measuring resistance.'
      ],
      procedure: [
        '1. Pick a resistor and orient it so the tolerance band (Gold or Silver) is on the far right.',
        '2. Read the colors from left to right: e.g. Brown (1), Black (0), Red (10² = 100), Gold (±5%).',
        '3. Calculate nominal value: 10 × 100 = 1000 Ω (1 kΩ) with acceptable range 950 Ω to 1050 Ω.',
        '4. Set DMM to 2000 Ω range and measure actual resistance across leads.',
        '5. Confirm whether measured value lies within the calculated tolerance limits.'
      ],
      simulationType: 'resistor-color-code',
      defaultParams: {
        band1: 1, // Brown
        band2: 0, // Black
        band3: 2, // Red
        band4: 5  // Gold
      },
      observationColumns: [
        { key: 'resistorNo', label: 'Resistor #', unit: '' },
        { key: 'colors', label: 'Color Bands', unit: '' },
        { key: 'codedVal', label: 'Coded Value & Tol', unit: 'Ω' },
        { key: 'dmmVal', label: 'DMM Measured', unit: 'Ω' },
        { key: 'status', label: 'Within Tolerance?', unit: '' }
      ],
      sampleObservations: [
        { resistorNo: 1, colors: 'Brown-Black-Red-Gold', codedVal: '1000 Ω ± 5%', dmmVal: 994, status: 'YES (Within 950-1050 Ω)' },
        { resistorNo: 2, colors: 'Yellow-Violet-Orange-Gold', codedVal: '47,000 Ω ± 5%', dmmVal: 46820, status: 'YES (Within 44.6k-49.3k Ω)' },
        { resistorNo: 3, colors: 'Red-Red-Brown-Gold', codedVal: '220 Ω ± 5%', dmmVal: 221.5, status: 'YES (Within 209-231 Ω)' },
        { resistorNo: 4, colors: 'Brown-Black-Green-Silver', codedVal: '1,000,000 Ω ± 10%', dmmVal: 982000, status: 'YES (Within 900k-1.1M Ω)' }
      ],
      calculationGuide: 'For Brown-Black-Red-Gold: Nominal = 10 × 10² = 1000 Ω. 5% of 1000 = 50 Ω. Range = 950 Ω to 1050 Ω. DMM reading = 994 Ω (Error = -0.6%, well within 5%).',
      resultInterpretation: 'All tested resistors showed measured values within their specified manufacturer tolerance bands.',
      sourcesOfError: ['Touching probe tips with fingers when measuring high megaohm values.'],
      vivaQuestions: [
        { question: 'What does the term "Tolerance" mean in a resistor?', answer: 'Tolerance is the manufacturer’s guaranteed percentage range around the nominal coded value within which the actual resistance is guaranteed to lie at room temperature (e.g. ±5% for gold band).' }
      ],
      revisionQuiz: [
        {
          id: 'beee-lab-q4',
          question: {
            en: 'What is the nominal resistance and tolerance of a resistor with color bands: Yellow, Violet, Brown, Gold?',
            hinglish: 'Yellow, Violet, Brown, Gold bands wale resistor ki value kitni hogi?',
            hi: 'पीला, बैंगनी, भूरा, सुनहरा (Yellow, Violet, Brown, Gold) रंग कोड वाले प्रतिरोधक का मान क्या होगा?'
          },
          options: ['470 Ω ± 5%', '47 Ω ± 5%', '4.7 kΩ ± 10%', '4700 Ω ± 1%'],
          correctIndex: 0,
          explanation: {
            en: 'Yellow = 4, Violet = 7, Brown = 10^1 (10), Gold = ±5%. Value = 47 × 10 = 470 Ω ± 5%.',
            hinglish: 'Yellow = 4, Violet = 7, Brown = 10^1 = 10, Gold = ±5%. Total = 47 × 10 = 470 Ω ± 5%.',
            hi: 'पीला = 4, बैंगनी = 7, भूरा = 10, गोल्ड = ±5%। मान = 47 × 10 = 470 Ω ± 5%।'
          },
          hint: {
            en: 'Yellow is 4, Violet is 7, Brown multiplier is ×10.',
            hinglish: 'Yellow = 4, Violet = 7.',
            hi: 'पीला 4 और बैंगनी 7 होता है।'
          }
        }
      ]
    },
    {
      id: 'beee-lab-5',
      expNumber: 5,
      title: 'Verification of Series and Parallel Combinations of Resistors',
      aim: 'To verify theoretical expressions for equivalent resistance in series (R_s = R1 + R2 + R3) and parallel (1/R_p = 1/R1 + 1/R2 + 1/R3) circuits.',
      learningObjectives: [
        'Demonstrate that series connection increases total circuit resistance.',
        'Demonstrate that parallel connection decreases total circuit resistance below the smallest individual resistor.',
        'Compare theoretical formula calculations with measured DMM values.'
      ],
      apparatus: [
        'Three precision wire-wound resistors (R1 = 100 Ω, R2 = 220 Ω, R3 = 470 Ω)',
        'Digital Multimeter',
        'Breadboard and jumper wires'
      ],
      theory: {
        en: 'In series, the same current traverses each resistor sequentially: R_s = R1 + R2 + R3. In parallel, the applied voltage is identical across all branches while currents sum: 1/R_p = 1/R1 + 1/R2 + 1/R3 ⇒ R_p = 1 / (1/R1 + 1/R2 + 1/R3).',
        hinglish: 'Series me resistors judte hain (R1 + R2 + R3). Parallel me total resistance sabse chote resistor se bhi kam ho jati hai (1/R_p = 1/R1 + 1/R2 + 1/R3).',
        hi: 'श्रेणी में कुल प्रतिरोध बढ़ता है (R_s = R1+R2+R3)। समानांतर में कुल प्रतिरोध न्यूनतम शाखा से भी कम हो जाता है।'
      },
      equations: [
        { formula: 'R_s = R_1 + R_2 + R_3', symbolDefs: 'Series equivalent resistance' },
        { formula: '\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}', symbolDefs: 'Parallel equivalent resistance' }
      ],
      diagramDescription: 'Breadboard wiring schematics showing three resistors in an end-to-end series chain and in parallel side-by-side ladder configuration.',
      safetyPrecautions: ['Ensure breadboard spring clips make firm mechanical contact.'],
      procedure: [
        '1. Measure individual resistances: R1 = 100 Ω, R2 = 220 Ω, R3 = 470 Ω.',
        '2. Connect R1, R2, R3 in series end-to-end on breadboard. Measure total resistance across outer ends.',
        '3. Calculate theoretical series sum: 100 + 220 + 470 = 790 Ω and compare.',
        '4. Connect R1, R2, R3 in parallel. Measure equivalent resistance across common rails.',
        '5. Calculate theoretical parallel resistance: 1/(1/100 + 1/220 + 1/470) ≈ 60.0 Ω and compare.'
      ],
      simulationType: 'series-parallel-lab',
      defaultParams: {
        r1: 100,
        r2: 220,
        r3: 470
      },
      observationColumns: [
        { key: 'combination', label: 'Circuit Configuration', unit: '' },
        { key: 'theoryVal', label: 'Theoretical R_eq', unit: 'Ω' },
        { key: 'measuredVal', label: 'DMM Measured R_eq', unit: 'Ω' },
        { key: 'errorPct', label: 'Percentage Error', unit: '%' }
      ],
      sampleObservations: [
        { combination: 'Individual R1', theoryVal: 100.0, measuredVal: 99.8, errorPct: 0.2 },
        { combination: 'Individual R2', theoryVal: 220.0, measuredVal: 219.4, errorPct: 0.3 },
        { combination: 'Individual R3', theoryVal: 470.0, measuredVal: 468.2, errorPct: 0.4 },
        { combination: 'Series (R1 + R2 + R3)', theoryVal: 787.4, measuredVal: 787.0, errorPct: 0.05 },
        { combination: 'Parallel (R1 || R2 || R3)', theoryVal: 59.9, measuredVal: 60.1, errorPct: 0.3 }
      ],
      calculationGuide: 'Theoretical R_p = 1 / (1/99.8 + 1/219.4 + 1/468.2) = 1 / (0.01002 + 0.00456 + 0.00214) = 1 / 0.01672 = 59.8 Ω.',
      resultInterpretation: 'Series and parallel resistance laws verified within 0.3% experimental error.',
      sourcesOfError: ['Contact resistance of breadboard spring clips (~0.1 Ω).'],
      vivaQuestions: [
        { question: 'Why does adding more resistors in parallel decrease the equivalent resistance?', answer: 'Because each added parallel resistor provides an additional independent conducting path for electric charge, increasing total conductance (G = 1/R). More paths allow more total current to flow for the same applied voltage, which by Ohm’s law means lower equivalent resistance.' }
      ],
      revisionQuiz: [
        {
          id: 'beee-lab-q5',
          question: {
            en: 'Three identical resistors of 30 Ω each are connected in parallel. What is their equivalent resistance?',
            hinglish: '30 Ω ke 3 identical resistors parallel me jode hain. Equivalent resistance kitna hoga?',
            hi: '30 Ω के तीन समान प्रतिरोधक समानांतर में जुड़े हैं। तुल्य प्रतिरोध क्या होगा?'
          },
          options: ['10 Ω (R / 3)', '90 Ω (3 · R)', '30 Ω', '15 Ω'],
          correctIndex: 0,
          explanation: {
            en: 'For N identical resistors R in parallel, R_eq = R / N. Here R_eq = 30 / 3 = 10 Ω.',
            hinglish: 'Identical resistors parallel me hone par R_eq = R / N hota hai. 30 / 3 = 10 Ω.',
            hi: 'समानांतर में N समान प्रतिरोधकों का तुल्य R/N होता है: 30 / 3 = 10 Ω।'
          },
          hint: {
            en: 'Divide resistance by number of identical branches.',
            hinglish: '30 ko 3 se divide karo.',
            hi: '30 को 3 से भाग दें।'
          }
        }
      ]
    },
    {
      id: 'beee-lab-6',
      expNumber: 6,
      title: 'Study of Single-Phase Induction Motor: Running and Reversing Direction',
      aim: 'To study the working principle of a single-phase capacitor-start capacitor-run induction motor and demonstrate how to reverse its direction of rotation.',
      learningObjectives: [
        'Understand why single-phase induction motors are not self-starting without an auxiliary winding.',
        'Observe how the start capacitor creates a 90° phase shift to produce a rotating magnetic field.',
        'Demonstrate reversing motor rotation by swapping connections of the auxiliary/starting winding.'
      ],
      apparatus: [
        'Single-phase capacitor-start induction motor (0.5 HP, 230 V, 50 Hz)',
        'Motor test bench with reversing DPDT knife switch',
        'Digital tachometer (RPM measurement)',
        'AC Voltmeter, Ammeter, and Wattmeter'
      ],
      theory: {
        en: 'A single-phase AC winding produces a pulsating stationary magnetic field (two counter-rotating fields of equal magnitude, by double field revolving theory). At standstill, forward and backward torques are equal, resulting in zero net starting torque. To make it self-starting, an auxiliary (starting) winding in series with a capacitor is placed 90° electrically in space. This creates an artificial two-phase rotating magnetic field. To REVERSE the direction of rotation, the polarity of either the starting winding OR the running winding (but NOT both!) must be reversed.',
        hinglish: 'Single phase motor khud start nahi ho sakti kyunki single phase me rotating field nahi banti. Isme ek auxiliary winding aur capacitor lagate hain jo 90° ka phase shift dekar rotating magnetic field banata hai. Motor ki ghoomne ki disha (direction) ulti karne ke liye starting winding ke do taaron ko aapas me swap (reverse) kar diya jata hai.',
        hi: 'सिंगल-फेज प्रेरण मोटर स्वतः चालू (Self-starting) नहीं होती। सहायक वाइंडिंग और संधारित्र मिलकर घूर्णी चुंबकीय क्षेत्र बनाते हैं। घूर्णन दिशा उलटने के लिए सहायक वाइंडिंग के संयोजन को उलट दिया जाता है।'
      },
      equations: [
        { formula: 'T_{\\text{start}} \\propto I_m I_a \\sin(\\alpha)', symbolDefs: 'Starting torque (I_m = main winding current, I_a = auxiliary current, α = phase angle ≈ 90°)' }
      ],
      diagramDescription: 'Motor internal schematic showing Main Winding and Auxiliary Winding with series Capacitor and centrifugal switch connected through a DPDT reversing switch.',
      safetyPrecautions: [
        'Ensure the motor base is securely bolted to the test bench before energizing.',
        'Never change the reversing switch while the motor is spinning! Wait until the rotor comes to a complete standstill.'
      ],
      procedure: [
        '1. Connect the single-phase induction motor to 230 V AC supply via DPDT switch wired to the starting winding.',
        '2. Turn switch to Forward position. Energize and observe the motor accelerate smoothly in Clockwise (CW) direction.',
        '3. Measure steady-state speed using the optical tachometer (~1440 RPM).',
        '4. Switch OFF power and allow rotor to come to a COMPLETE stop.',
        '5. Flip the DPDT switch to Reverse position (swapping the auxiliary winding leads). Energize and verify the motor rotates Counter-Clockwise (CCW).'
      ],
      simulationType: 'motor-reversing-lab',
      defaultParams: {
        motorState: 0, // 0 = stopped, 1 = CW, -1 = CCW
        windingSwap: false
      },
      observationColumns: [
        { key: 'switchPos', label: 'DPDT Switch Position', unit: '' },
        { key: 'direction', label: 'Observed Rotation Direction', unit: '' },
        { key: 'speedRpm', label: 'Tachometer Speed', unit: 'RPM' },
        { key: 'currentA', label: 'Running Current', unit: 'Amperes' }
      ],
      sampleObservations: [
        { switchPos: 'Position 1 (Forward)', direction: 'Clockwise (CW)', speedRpm: 1445, currentA: 2.8 },
        { switchPos: 'Position 2 (Reverse)', direction: 'Counter-Clockwise (CCW)', speedRpm: 1442, currentA: 2.8 }
      ],
      calculationGuide: 'Synchronous speed for 4-pole motor: N_s = 120 × 50 / 4 = 1500 RPM. Slip s = (1500 - 1445) / 1500 = 55 / 1500 = 0.0367 (3.67%).',
      resultInterpretation: 'Reversing the terminal connections of the starting winding reverses the direction of the rotating magnetic field, reversing motor rotation from CW to CCW.',
      sourcesOfError: ['Parallax error when measuring speed with handheld optical tachometer.'],
      vivaQuestions: [
        { question: 'What happens if you reverse BOTH the main winding and auxiliary winding simultaneously?', answer: 'The motor will continue rotating in the SAME original direction! To reverse rotation, you must reverse only ONE winding (either main OR auxiliary), which flips the relative 90° phase angle between them.' }
      ],
      revisionQuiz: [
        {
          id: 'beee-lab-q6',
          question: {
            en: 'Why is a capacitor connected in series with the starting winding of a single-phase induction motor?',
            hinglish: 'Single phase motor ke starting winding me capacitor kyu lagaya jata hai?',
            hi: 'सिंगल-फेज प्रेरण मोटर की स्टार्टिंग वाइंडिंग में संधारित्र क्यों लगाया जाता है?'
          },
          options: [
            'To create a ~90° phase difference between main and starting winding currents, producing a rotating magnetic field for starting torque',
            'To reduce supply voltage',
            'To increase mechanical friction',
            'To filter DC noise'
          ],
          correctIndex: 0,
          explanation: {
            en: 'A single-phase supply creates a stationary pulsating field. The series capacitor causes starting winding current to lead main winding current by ~90°, creating a rotating magnetic field that produces starting torque.',
            hinglish: 'Capacitor current me 90° ka phase difference banata hai jisse rotating magnetic field banti hai aur motor start hoti hai.',
            hi: 'संधारित्र 90° का कलान्तर उत्पन्न कर घूर्णी चुंबकीय क्षेत्र बनाता है जिससे प्रारंभिक बलाघूर्ण उत्पन्न होता है।'
          },
          hint: {
            en: 'Phase split to create a 2-phase rotating field.',
            hinglish: '90 degree phase shift banana.',
            hi: '90° कलान्तर उत्पन्न करना।'
          }
        }
      ]
    },
    {
      id: 'beee-lab-7',
      expNumber: 7,
      title: 'Determination of Transformer Turns Ratio and Voltage Transformation',
      aim: 'To determine the transformation ratio (k = V2/V1 = N2/N1) of a single-phase step-down transformer and study voltage regulation.',
      learningObjectives: [
        'Measure primary and secondary voltages under open-circuit conditions.',
        'Calculate transformation ratio k = V2 / V1.',
        'Observe how secondary voltage drops when resistive loads are connected (voltage regulation).'
      ],
      apparatus: [
        'Single-phase transformer (1 kVA, 230 V / 115 V, 50 Hz)',
        'Variac (0 - 270 V AC autotransformer)',
        'Two digital AC voltmeters and two AC ammeters',
        'Variable lamp load bank'
      ],
      theory: {
        en: 'By Faraday’s law of mutual induction, the induced voltages in primary and secondary coils are proportional to their turns: E1 = 4.44 f N1 Φ_m and E2 = 4.44 f N2 Φ_m. The turns ratio is k = E2 / E1 = N2 / N1. Under no-load conditions, terminal voltages V1 and V2 are virtually identical to induced EMFs, giving k = V2 / V1.',
        hinglish: 'Transformer me voltage ratio turns ratio ke barabar hota hai: k = V2 / V1 = N2 / N1. No-load par voltmeter se V1 aur V2 naap kar transformation ratio k calculate karte hain.',
        hi: 'ट्रांसफॉर्मर में रूपांतरण अनुपात k = V2/V1 = N2/N1 होता है। नो-लोड पर प्राथमिक और द्वितीयक वोल्टेज मापकर अनुपात ज्ञात किया जाता है।'
      },
      equations: [
        { formula: 'k = \\frac{V_2}{V_1} = \\frac{N_2}{N_1}', symbolDefs: 'Transformation ratio formula' },
        { formula: '\\%\\,\\text{Regulation} = \\frac{V_{2,\\text{no-load}} - V_{2,\\text{full-load}}}{V_{2,\\text{full-load}}} \\times 100\\%', symbolDefs: 'Voltage regulation formula' }
      ],
      diagramDescription: 'Variac feeding primary winding with voltmeter V1; secondary winding connected to voltmeter V2 and load bank.',
      safetyPrecautions: [
        'Ensure primary voltage does not exceed rated 230 V.',
        'Always set Variac to 0 V before switching on supply.'
      ],
      procedure: [
        '1. Connect primary winding through Variac with voltmeter V1 across primary.',
        '2. Connect voltmeter V2 across secondary terminals with secondary open-circuited (no load).',
        '3. Vary input primary voltage V1 in steps: 50 V, 100 V, 150 V, 200 V, 230 V.',
        '4. Record secondary voltage V2 at each step and calculate k = V2 / V1.',
        '5. Connect load bank to secondary, draw load currents up to 4 A, and observe voltage drop due to winding resistance and leakage reactance.'
      ],
      simulationType: 'transformer-turns-lab',
      defaultParams: {
        primaryVoltage: 230,
        turnsRatioK: 0.5
      },
      observationColumns: [
        { key: 'v1', label: 'Primary Voltage (V1)', unit: 'Volts' },
        { key: 'v2', label: 'Secondary Voltage (V2)', unit: 'Volts' },
        { key: 'ratioK', label: 'Transformation Ratio (k = V2/V1)', unit: 'Dimensionless' }
      ],
      sampleObservations: [
        { v1: 50, v2: 25.1, ratioK: 0.502 },
        { v1: 100, v2: 50.1, ratioK: 0.501 },
        { v1: 150, v2: 75.2, ratioK: 0.501 },
        { v1: 200, v2: 100.2, ratioK: 0.501 },
        { v1: 230, v2: 115.3, ratioK: 0.501 }
      ],
      calculationGuide: 'Average transformation ratio k = 0.501. This is a step-down transformer with a 2:1 turns ratio (N1 = 2 × N2).',
      resultInterpretation: 'Transformation ratio k = 0.501 remains constant across all voltages, verifying linear magnetic core coupling.',
      sourcesOfError: ['Magnetizing current harmonics causing slight wave distortion.'],
      vivaQuestions: [
        { question: 'What is the difference between a step-up and step-down transformer?', answer: 'In a step-down transformer, k < 1 (N2 < N1), so secondary voltage is lower than primary voltage while secondary current is higher. In a step-up transformer, k > 1 (N2 > N1), stepping voltage higher.' }
      ],
      revisionQuiz: [
        {
          id: 'beee-lab-q7',
          question: {
            en: 'If a transformer has 1000 primary turns and 250 secondary turns, and 240 V AC is applied to the primary, what is the secondary voltage?',
            hinglish: 'Primary turns 1000, secondary turns 250, primary voltage 240 V. Secondary voltage kitna hoga?',
            hi: 'यदि प्राथमिक फेरे 1000, द्वितीयक फेरे 250 तथा प्राथमिक वोल्टेज 240 V हो, तो द्वितीयक वोल्टेज क्या होगा?'
          },
          options: ['60 V (Step-down by 4)', '960 V', '120 V', '240 V'],
          correctIndex: 0,
          explanation: {
            en: 'V2 = V1 × (N2 / N1) = 240 × (250 / 1000) = 240 × 0.25 = 60 V.',
            hinglish: 'V2 = 240 × (250 / 1000) = 240 / 4 = 60 V.',
            hi: 'V2 = 240 × (250/1000) = 60 V।'
          },
          hint: {
            en: 'Ratio of turns is 250/1000 = 1/4.',
            hinglish: 'Turns aadhi se bhi kam (1/4) hain.',
            hi: 'फेरे एक-चौथाई (1/4) हैं।'
          }
        }
      ]
    },
    {
      id: 'beee-lab-8',
      expNumber: 8,
      title: 'Study of Diode V-I Characteristics under Forward and Reverse Bias',
      aim: 'To plot the voltage-current (V-I) characteristic curve of a silicon P-N junction diode under forward and reverse bias conditions and determine threshold voltage and static/dynamic resistance.',
      learningObjectives: [
        'Observe exponential forward conduction above cut-in voltage (~0.7 V for Si).',
        'Observe microscopic nanoampere leakage under reverse bias.',
        'Calculate dynamic resistance r_d = ΔV / ΔI in the conduction region.'
      ],
      apparatus: [
        'Silicon diode (1N4007)',
        'Regulated variable DC power supply (0 - 30 V)',
        'Digital milliammeter (0 - 100 mA) for forward bias',
        'Digital microammeter (0 - 100 μA) for reverse bias',
        'Digital DC voltmeter and series resistor R = 1 kΩ'
      ],
      theory: {
        en: 'Under forward bias, as applied voltage approaches cut-in knee voltage V_γ (~0.7 V for Si), the depletion barrier shrinks, and forward current increases exponentially: I = I_0(e^(V/ηV_T) - 1). The dynamic forward resistance is r_d = ΔV_f / ΔI_f. Under reverse bias, the barrier widens, and only minority carriers drift across, producing tiny, constant reverse saturation current I_0 until breakdown.',
        hinglish: 'Forward bias me 0.7 V ke baad barrier toot jata hai aur current tezi se badhti hai. Reverse bias me depletion layer moti ho jaati hai aur current lagbhag zero (microamperes) rehti hai.',
        hi: 'अग्र अभिनति में 0.7 V के बाद धारा चरघातांकी रूप से बढ़ती है। उत्क्रम अभिनति में धारा नगण्य (माइक्रोएम्पीयर) रहती है।'
      },
      equations: [
        { formula: 'r_d = \\frac{\\Delta V_f}{\\Delta I_f}', symbolDefs: 'Dynamic/AC forward resistance' },
        { formula: 'R_D = \\frac{V_F}{I_F}', symbolDefs: 'Static/DC resistance at operating point' }
      ],
      diagramDescription: 'Circuits showing diode biased forward with milliammeter and reverse with microammeter, protected by series 1 kΩ resistor.',
      safetyPrecautions: [
        'Always include a current-limiting resistor (1 kΩ) in series to prevent diode burnout during forward bias.',
        'Never exceed maximum reverse breakdown voltage rating.'
      ],
      procedure: [
        '1. Forward Bias: Connect anode to + supply through 1 kΩ resistor and milliammeter; connect cathode to - terminal.',
        '2. Vary forward voltage across the DIODE from 0 V to 0.8 V in steps of 0.05 V.',
        '3. Record diode voltage V_D and current I_D. Note the sharp knee at ~0.65 V - 0.70 V.',
        '4. Reverse Bias: Reverse diode connections and replace milliammeter with microammeter.',
        '5. Vary reverse voltage up to 20 V, recording tiny reverse leakage current (~0.1 μA).',
        '6. Plot V-I curve across all four quadrants.'
      ],
      simulationType: 'diode-vi-lab',
      defaultParams: {
        biasMode: 1, // 1 = forward, -1 = reverse
        appliedVoltage: 0.75
      },
      observationColumns: [
        { key: 'voltageVD', label: 'Diode Voltage V_D', unit: 'Volts' },
        { key: 'currentID', label: 'Diode Current I_D', unit: 'mA / μA' },
        { key: 'state', label: 'Conduction State', unit: '' }
      ],
      sampleObservations: [
        { voltageVD: 0.2, currentID: 0.0, state: 'Off (Below knee)' },
        { voltageVD: 0.5, currentID: 0.1, state: 'Sub-threshold' },
        { voltageVD: 0.65, currentID: 2.5, state: 'Knee point' },
        { voltageVD: 0.72, currentID: 15.0, state: 'Strong Conduction' },
        { voltageVD: 0.76, currentID: 35.0, state: 'Strong Conduction' },
        { voltageVD: -5.0, currentID: 0.05, state: 'Reverse Leakage (μA)' },
        { voltageVD: -15.0, currentID: 0.06, state: 'Reverse Leakage (μA)' }
      ],
      calculationGuide: 'Dynamic resistance above knee: r_d = ΔV / ΔI = (0.76 - 0.72) V / (35 - 15) mA = 0.04 V / 20 mA = 2.0 Ω.',
      resultInterpretation: 'Knee voltage V_γ = 0.68 V for silicon. Conduction is highly asymmetric, verifying one-way valve rectification.',
      sourcesOfError: ['Diode junction heating if large forward currents are sustained for too long.'],
      vivaQuestions: [
        { question: 'What is the difference between knee voltage of Silicon and Germanium diodes?', answer: 'Silicon has a wider bandgap (1.1 eV) resulting in a higher knee/barrier voltage of ~0.7 V. Germanium has a narrower bandgap (0.67 eV) resulting in a lower knee voltage of ~0.3 V.' }
      ],
      revisionQuiz: [
        {
          id: 'beee-lab-q8',
          question: {
            en: 'What is the dynamic resistance of an ideal diode in the forward-conducting region?',
            hinglish: 'Ideal diode ka forward conducting region me dynamic resistance kitna hota hai?',
            hi: 'अग्र चालन क्षेत्र में एक आदर्श डायोड का गतिक प्रतिरोध कितना होता है?'
          },
          options: ['0 Ω (Zero resistance)', 'Infinite resistance', '0.7 Ω', '100 Ω'],
          correctIndex: 0,
          explanation: {
            en: 'An ideal diode acts as a perfect closed switch in forward bias, having zero resistance (r_d = 0), and a perfect open switch in reverse bias (r_rev = ∞).',
            hinglish: 'Ideal diode forward bias me perfect closed switch (0 Ω) aur reverse bias me open switch (∞ Ω) hota hai.',
            hi: 'आदर्श डायोड का अग्र प्रतिरोध शून्य तथा उत्क्रम प्रतिरोध अनंत होता है।'
          },
          hint: {
            en: 'An ideal conductor offers zero opposition.',
            hinglish: 'Ideal case me zero resistance.',
            hi: 'आदर्श स्थिति में प्रतिरोध शून्य होता है।'
          }
        }
      ]
    },
    {
      id: 'beee-lab-9',
      expNumber: 9,
      title: 'Transistor Characteristics in Common-Collector (CC) Configuration',
      aim: 'To determine input resistance, output resistance, and current gain (gamma γ) of an NPN bipolar junction transistor in Common-Collector (Emitter Follower) configuration.',
      learningObjectives: [
        'Understand common-collector configuration where input is applied to base and output taken from emitter.',
        'Measure input characteristics (I_B vs V_BC) and output characteristics (I_E vs V_EC).',
        'Demonstrate unity voltage gain (~1) and high current gain γ = 1 + β.'
      ],
      apparatus: [
        'NPN Transistor (BC107 / SL100)',
        'Dual variable DC power supplies (0 - 15 V)',
        'Digital microammeter (0 - 200 μA) for Base current I_B',
        'Digital milliammeter (0 - 100 mA) for Emitter current I_E',
        'Digital DC voltmeters'
      ],
      theory: {
        en: 'In Common-Collector (CC) configuration, the collector terminal is common to both input and output circuits. It is widely known as an "Emitter Follower" because emitter output voltage closely tracks base input voltage (voltage gain A_v ≈ 1). Its defining traits are HIGH input resistance (R_in = ΔV_BC / ΔI_B ~hundreds of kΩ), LOW output resistance (R_out = ΔV_EC / ΔI_E ~tens of Ω), and high current gain: γ = ΔI_E / ΔI_B = 1 + β. This makes it an ideal impedance matching buffer.',
        hinglish: 'Common Collector configuration ko Emitter Follower kehte hain. Iska input impedance bohot HIGH hota hai, output impedance bohot LOW hota hai, aur current gain γ = 1 + β hota hai. Iska voltage gain lagbhag 1 hota hai aur ye impedance matching me use hota hai.',
        hi: 'उभयनिष्ठ-संग्राहक (CC) विन्यास को उत्सर्जक अनुयायी (Emitter Follower) कहते हैं। इसका इनपुट प्रतिरोध उच्च, आउटपुट प्रतिरोध निम्न तथा धारा लब्धि γ = 1 + β होती है।'
      },
      equations: [
        { formula: '\\gamma = \\frac{\\Delta I_E}{\\Delta I_B} = 1 + \\beta', symbolDefs: 'Current amplification factor in CC mode' },
        { formula: 'R_{\\text{in}} = \\left.\\frac{\\Delta V_{BC}}{\\Delta I_B}\\right|_{V_{EC} = \\text{const}}, \\quad R_{\\text{out}} = \\left.\\frac{\\Delta V_{EC}}{\\Delta I_E}\\right|_{I_B = \\text{const}}', symbolDefs: 'Input and output dynamic resistances' }
      ],
      diagramDescription: 'Circuit schematic of NPN transistor in CC configuration with collector tied to AC ground, base driven by V_BC, and output taken across emitter load resistor R_E.',
      safetyPrecautions: [
        'Verify transistor pinout (Emitter, Base, Collector) before powering on.',
        'Do not exceed maximum transistor collector power rating P_c,max.'
      ],
      procedure: [
        '1. Wire the CC circuit with base microammeter and emitter milliammeter.',
        '2. Keep V_EC constant at 5.0 V. Vary base voltage V_BC and record base current I_B to plot input characteristics.',
        '3. Keep base current I_B constant at 50 μA. Vary V_EC from 0 to 10 V and record emitter current I_E to plot output characteristics.',
        '4. Calculate current gain γ = ΔI_E / ΔI_B, input resistance R_in, and output resistance R_out.'
      ],
      simulationType: 'transistor-cc-lab',
      defaultParams: {
        baseCurrentMicroA: 50,
        vecVoltage: 5.0
      },
      observationColumns: [
        { key: 'ib', label: 'Base Current (I_B)', unit: 'μA' },
        { key: 'ie', label: 'Emitter Current (I_E)', unit: 'mA' },
        { key: 'gamma', label: 'Current Gain (γ = I_E / I_B)', unit: 'Dimensionless' }
      ],
      sampleObservations: [
        { ib: 20, ie: 2.02, gamma: 101 },
        { ib: 40, ie: 4.04, gamma: 101 },
        { ib: 60, ie: 6.06, gamma: 101 },
        { ib: 80, ie: 8.08, gamma: 101 }
      ],
      calculationGuide: 'Current gain γ = ΔI_E / ΔI_B = (8.08 - 2.02) mA / (80 - 20) μA = 6.06 mA / 60 μA = 101. Since γ = 1 + β, common-emitter gain β = 100.',
      resultInterpretation: 'Common-collector configuration exhibits high current gain γ = 101, high input resistance (~150 kΩ), and low output resistance (~25 Ω), making it an ideal buffer amplifier.',
      sourcesOfError: ['Thermal drift of transistor base-emitter junction during continuous operation.'],
      vivaQuestions: [
        { question: 'Why is the Common-Collector configuration called an "Emitter Follower"?', answer: 'Because the voltage gain is nearly unity (A_v ≈ 0.99), meaning the emitter output voltage follows the base input voltage in both amplitude and phase with zero phase inversion.' }
      ],
      revisionQuiz: [
        {
          id: 'beee-lab-q9',
          question: {
            en: 'What is the primary practical application of a Common-Collector (Emitter Follower) transistor circuit?',
            hinglish: 'Common Collector circuit ka main use kya hota hai?',
            hi: 'उभयनिष्ठ संग्राहक परिपथ का मुख्य व्यावहारिक उपयोग क्या है?'
          },
          options: [
            'Impedance matching buffer (connecting high-impedance source to low-impedance load)',
            'High voltage amplification',
            'High frequency radio transmission',
            'Solar power generation'
          ],
          correctIndex: 0,
          explanation: {
            en: 'Due to its very high input impedance and very low output impedance, the CC amplifier acts as a buffer preventing signal loading between stages (Impedance Matching).',
            hinglish: 'High input impedance aur low output impedance hone ki wajah se ye impedance matching buffer ka kaam karta hai.',
            hi: 'उच्च इनपुट और निम्न आउटपुट प्रतिबाधा के कारण यह प्रतिबाधा मिलान (Impedance Matching) बफर के रूप में कार्य करता है।'
          },
          hint: {
            en: 'Connects high resistance to low resistance without signal loss.',
            hinglish: 'Impedance matching buffer.',
            hi: 'प्रतिबाधा मिलान बफर।'
          }
        }
      ]
    },
    {
      id: 'beee-lab-10',
      expNumber: 10,
      title: 'Troubleshooting Electrical Circuits: Fault Identification & Rectification',
      aim: 'To systematically diagnose, isolate, and rectify common electrical faults including open-circuits, short-circuits, high-resistance loose connections, and earth leakages.',
      learningObjectives: [
        'Master multimeter continuity testing and voltage-drop tracing.',
        'Differentiate between open-circuit (infinite resistance, zero current) and short-circuit (zero resistance, infinite current).',
        'Follow standard lockout/tagout (LOTO) safety troubleshooting procedures.'
      ],
      apparatus: [
        'Specially prepared training fault simulator board with hidden switchable faults',
        'Digital Multimeter with audible continuity buzzer',
        'Test lamp (60 W incandescent in insulated holder)',
        'Insulated screwdriver set and replacement fuses'
      ],
      theory: {
        en: 'Systematic electrical troubleshooting follows a logical 4-step sequence: (1) Symptom analysis, (2) Visual inspection for burnt smells, discolored wire insulation, or tripped MCBs, (3) Dead testing with de-energized power using multimeter continuity/ohmmeter mode to pinpoint open and short circuits, and (4) Live testing with voltmeter to verify voltage availability across each stage.',
        hinglish: 'Electrical troubleshooting me 4 steps follow karte hain: pehle visual check (jalne ki boo ya loose wire), fir power band karke continuity test (open ya short circuit dhoondna), aur fir live voltage test karke fault theek karna.',
        hi: 'विद्युत दोष निवारण में क्रमबद्ध परीक्षण किया जाता है: पहले दृश्य निरीक्षण, फिर पावर बंद करके सांतत्य (continuity) परीक्षण तथा अंत में वोल्टेज परीक्षण कर दोष का निवारण किया जाता है।'
      },
      equations: [
        { formula: 'R_{\\text{open}} = \\infty, \\quad I = 0, \\quad V_{\\text{across open}} = V_{\\text{supply}}', symbolDefs: 'Open-circuit condition' },
        { formula: 'R_{\\text{short}} \\approx 0, \\quad I = \\infty, \\quad V_{\\text{across short}} = 0', symbolDefs: 'Short-circuit condition' }
      ],
      diagramDescription: 'Series-parallel branch board showing inserted faults: broken wire (open), bridge foil (short), and ground leak.',
      safetyPrecautions: [
        'ALWAYS isolate the mains breaker and verify the circuit is completely DEAD with a verified phase tester before touching any conductors.',
        'Never replace a blown fuse with a piece of thick copper wire; this creates a severe fire hazard.'
      ],
      procedure: [
        '1. Inspect the malfunctioning training circuit board. Notice Lamp L2 fails to glow when switch S2 is closed.',
        '2. Isolate power supply and tag out.',
        '3. Set DMM to Continuity / Resistance mode. Place probes across switch S2: switch toggles from 0 Ω to ∞ Ω (Switch is GOOD).',
        '4. Probe wire segment between S2 and L2 holder: meter displays "OL" (infinite resistance, no beep). An internal OPEN-CIRCUIT wire break is identified!',
        '5. Replace the damaged wire segment. Re-test continuity (meter beeps, reading 0.2 Ω).',
        '6. Re-energize and verify Lamp L2 now glows normally.'
      ],
      simulationType: 'troubleshooting-lab',
      defaultParams: {
        faultCase: 1 // Open circuit
      },
      observationColumns: [
        { key: 'testPoint', label: 'Circuit Test Node', unit: '' },
        { key: 'dmmReading', label: 'Continuity / Resistance', unit: 'Ω' },
        { key: 'diagnosis', label: 'Diagnostic Assessment', unit: '' }
      ],
      sampleObservations: [
        { testPoint: 'Across Switch S2', dmmReading: '0.1 Ω (Beep)', diagnosis: 'Switch contacts normal' },
        { testPoint: 'Lead Wire S2 to Lamp L2', dmmReading: 'O.L (Infinite, No beep)', diagnosis: 'FAULT FOUND: Open-circuit wire break' },
        { testPoint: 'Across Lamp L2 Filament', dmmReading: '48.5 Ω (Normal)', diagnosis: 'Filament intact' },
        { testPoint: 'After Wire Replacement', dmmReading: '0.2 Ω (Beep)', diagnosis: 'Fault cleared; circuit restored' }
      ],
      calculationGuide: 'Expected normal resistance across cold 100 W bulb filament is ~40 to 60 Ω. An open broken wire reads infinite resistance (O.L).',
      resultInterpretation: 'Systematic continuity testing rapidly isolated the open-circuit fault without guessing or replacing functional components.',
      sourcesOfError: ['False continuity reading caused by parallel sneak paths through other energized equipment.'],
      vivaQuestions: [
        { question: 'Why is it dangerous to replace a blown fuse with a thick nail or heavy wire?', answer: 'A fuse is an intentional weak link designed to melt safely during overcurrent. Replacing it with an uncalibrated nail removes all overcurrent protection, causing electrical cables inside walls to overheat, melt, and ignite electrical building fires.' }
      ],
      revisionQuiz: [
        {
          id: 'beee-lab-q10',
          question: {
            en: 'When measuring voltage across an open switch in an energized 230 V lighting circuit, the voltmeter reads:',
            hinglish: 'Chalu circuit me khule hue (OFF) switch ke across voltmeter kya read karega?',
            hi: '230 V के चालू परिपथ में खुले (OFF) स्विच के दोनों सिरों पर वोल्टमीटर क्या दर्शाएगा?'
          },
          options: ['Full mains supply voltage (230 V)', '0 V', '115 V', 'Infinite Volts'],
          correctIndex: 0,
          explanation: {
            en: 'Because the switch is open, zero current flows (I = 0). The load lamp experiences zero voltage drop (I·R_lamp = 0). Therefore, by KVL, the entire 230 V mains potential appears directly across the open switch gap!',
            hinglish: 'Switch open hone par current zero hoti hai, isliye lamp par koi drop nahi hota. KVL ke mutabik poora 230 V open switch ke dono terminals par dikhta hai.',
            hi: 'धारा शून्य होने से लैंप पर कोई विभव पात नहीं होता, अतः पूरा 230 वोल्ट विभव खुले स्विच पर दिखाई देता है।'
          },
          hint: {
            en: 'Apply KVL: V_supply - V_lamp - V_switch = 0 where V_lamp = 0.',
            hinglish: 'Poora supply voltage switch par dikhta hai.',
            hi: 'पूरा सप्लाई वोल्टेज स्विच पर आ जाता है।'
          }
        }
      ]
    },
    {
      id: 'beee-lab-11',
      expNumber: 11,
      title: 'Domestic Wiring: Independent Control of Two Lamps and One Socket Outlet',
      aim: 'To wire a domestic switchboard circuit containing two incandescent lamps and one 3-pin socket outlet such that each lamp and the socket are controlled independently by their own dedicated SPST switches.',
      learningObjectives: [
        'Understand standard single-phase 230 V residential wiring topology.',
        'Learn the critical safety rule: switches MUST always be wired into the LIVE (Phase) conductor, NEVER in the neutral.',
        'Properly wire a 3-pin socket with Earth, Neutral, and Switch-controlled Live.'
      ],
      apparatus: [
        'Wooden / PVC wiring model board with conduit pipes',
        'Three SPST one-way flush switches (6 A, 250 V)',
        'One 3-pin shuttered socket outlet (6 A, 250 V)',
        'Two batten lamp holders with 60 W lamps',
        '1.5 mm² single-core copper wire (Red for Live, Black for Neutral, Green for Earth)'
      ],
      theory: {
        en: 'In residential electrical installations, all appliances operate in parallel at 230 V. The Phase (Live) wire enters the switchboard and is linked in common across the bottom terminals of all three SPST switches. The top terminal of Switch 1 routes to Lamp 1; Switch 2 routes to Lamp 2; and Switch 3 routes to the Right terminal of the 3-pin socket. The Neutral conductor loops directly to both lamp holders and the Left socket terminal. The Earth conductor connects directly to the top large socket pin. Placing switches in the Live wire guarantees that opening a switch cuts off high-voltage electricity completely.',
        hinglish: 'Ghar ki wiring me saari cheezein parallel me hoti hain. Phase (Red) wire switch board ke teeno switches ke common bottom terminal me jati hai. Switch 1 se Lamp 1, Switch 2 se Lamp 2, aur Switch 3 se Socket ka right pin connect hota hai. Neutral (Black) saare devices me direct loop hota hai. Switch hamesha Phase wire me hi lagana chahiye taaki switch off karne par device me current na bache.',
        hi: 'घरेलू वायरिंग में सभी भार समानांतर में होते हैं। स्विच सदैव फेज (Live) तार में ही लगाया जाता है ताकि स्विच बंद करने पर उपकरण में कोई वोल्टेज न रहे। न्यूट्रल सीधे उपकरणों में लूप किया जाता है।'
      },
      equations: [
        { formula: 'P_{\\text{total}} = P_{\\text{lamp1}} + P_{\\text{lamp2}} + P_{\\text{socket}}', symbolDefs: 'Parallel load power sum' }
      ],
      diagramDescription: 'Wiring diagram showing Live wire looping into 3 switches in parallel, each controlling its respective lamp or socket pin, with shared neutral and earth lines.',
      safetyPrecautions: [
        'NEVER place a switch or fuse in the Neutral conductor! If placed in neutral, turning off the switch leaves the lamp fully energized at 230 V relative to ground, creating an electrocution hazard during bulb replacement.',
        'Connect the Earth wire firmly to the socket’s top pin.'
      ],
      procedure: [
        '1. Mount three switches, one socket, and two lamp holders on the wiring board.',
        '2. Connect incoming Red (Live) wire to the common bottom terminal rail of all three switches.',
        '3. Run a wire from the top of Switch 1 to Lamp 1, from Switch 2 to Lamp 2, and from Switch 3 to the Socket "L" terminal.',
        '4. Connect Black (Neutral) wire directly to Lamp 1, Lamp 2, and the Socket "N" terminal.',
        '5. Connect Green (Earth) wire directly to the top large "E" terminal of the socket.',
        '6. Perform a continuity check before energizing: verify that closing Switch 1 lights Lamp 1 independently of Switch 2 and the socket.'
      ],
      simulationType: 'domestic-wiring-lab',
      defaultParams: {
        switch1: false,
        switch2: false,
        switchSocket: false
      },
      observationColumns: [
        { key: 'sw1', label: 'Switch 1', unit: '' },
        { key: 'sw2', label: 'Switch 2', unit: '' },
        { key: 'swSock', label: 'Socket Switch', unit: '' },
        { key: 'lamp1', label: 'Lamp 1 State', unit: '' },
        { key: 'lamp2', label: 'Lamp 2 State', unit: '' },
        { key: 'socketStatus', label: 'Socket Live?', unit: '' }
      ],
      sampleObservations: [
        { sw1: 'ON', sw2: 'OFF', swSock: 'OFF', lamp1: 'GLOWS (230V)', lamp2: 'OFF', socketStatus: 'DEAD (0V)' },
        { sw1: 'OFF', sw2: 'ON', swSock: 'OFF', lamp1: 'OFF', lamp2: 'GLOWS (230V)', socketStatus: 'DEAD (0V)' },
        { sw1: 'ON', sw2: 'ON', swSock: 'ON', lamp1: 'GLOWS', lamp2: 'GLOWS', socketStatus: 'ACTIVE (230V)' }
      ],
      calculationGuide: 'Total current when both 60 W lamps and a 500 W drill are running: P_total = 60 + 60 + 500 = 620 W. Total current I = P / V = 620 / 230 ≈ 2.70 A, well within the 6 A switchboard rating.',
      resultInterpretation: 'Independent parallel control of all three electrical points verified successfully without cross-interference.',
      sourcesOfError: ['Loose terminal screw connections creating high resistance and sparking.'],
      vivaQuestions: [
        { question: 'Why must switches always be connected in the Phase (Live) wire and never in the Neutral wire?', answer: 'If a switch is placed in the Neutral wire, turning the switch OFF breaks the return path so the lamp turns off, but the lamp socket remains fully energized at 230 V! Anyone touching the internal brass socket during bulb replacement would suffer a lethal electric shock to ground. Placing the switch in the Phase wire ensures that opening the switch isolates the appliance completely from high voltage.' }
      ],
      revisionQuiz: [
        {
          id: 'beee-lab-q11',
          question: {
            en: 'In household domestic wiring, what type of electrical circuit combination is used for connecting all appliances?',
            hinglish: 'Ghar me appliances ko kis combination me joda jata hai?',
            hi: 'घरेलू वायरिंग में सभी उपकरणों को किस संयोजन में जोड़ा जाता है?'
          },
          options: ['Parallel combination (same 230 V across all points)', 'Series combination', 'Series-Parallel mixed bridge', 'Open loop'],
          correctIndex: 0,
          explanation: {
            en: 'All domestic appliances are wired in parallel so that every point receives the full 230 V mains voltage and each appliance can be switched on or off independently without affecting others.',
            hinglish: 'Parallel connection use hota hai taaki sabko pura 230 V mile aur ek switch band karne par dusra chalta rahe.',
            hi: 'समानांतर संयोजन का उपयोग किया जाता है ताकि प्रत्येक उपकरण को पूरा 230 V मिले और वह स्वतंत्र रूप से कार्य कर सके।'
          },
          hint: {
            en: 'Independent operation requires parallel connection.',
            hinglish: 'Parallel connection.',
            hi: 'समानांतर क्रम।'
          }
        }
      ]
    },
    {
      id: 'beee-lab-12',
      expNumber: 12,
      title: 'Staircase Wiring: Controlling One Lamp from Two Different Locations',
      aim: 'To wire and test a staircase lighting circuit where a single lamp can be switched ON and OFF independently from two separate locations using two SPDT (Two-Way) switches.',
      learningObjectives: [
        'Understand the construction and switching logic of SPDT (Single-Pole Double-Throw / Two-Way) switches.',
        'Wire a standard 2-wire traveler staircase circuit.',
        'Verify truth table logic for staircase lighting control.'
      ],
      apparatus: [
        'Two SPDT two-way switches (6 A, 250 V, each having 3 terminals: L1, Common, L2)',
        'One batten lamp holder with 60 W incandescent bulb',
        'Wiring board with PVC conduits and connecting wires'
      ],
      theory: {
        en: 'A staircase wiring circuit allows a person at the bottom of the stairs to turn the light ON, walk upstairs, and turn the light OFF from the top switch (or vice versa). This is accomplished using two SPDT (Two-Way) switches. Each switch has one central Common terminal and two traveler terminals (1 and 2). Live phase wire is fed to the Common of Switch 1. Two traveler wires connect Terminal 1 of Switch 1 to Terminal 1 of Switch 2, and Terminal 2 to Terminal 2. The Common of Switch 2 routes to the lamp. Neutral connects directly to the lamp. Whenever both switches point to the SAME traveler line, the circuit completes and the lamp glows!',
        hinglish: 'Staircase wiring me do 2-way switches use hote hain. Har switch me 3 terminals hote hain (Common, L1, L2). Neeche se switch on karke light jalao, seedhi chadh kar upar wale switch se wahi light band kar do! Jab dono switch ek hi traveler wire par connect hote hain toh circuit poora hota hai aur bulb jalta hai.',
        hi: 'जीने की वायरिंग (Staircase wiring) में दो 2-वे (SPDT) स्विचों द्वारा एक लैंप को ऊपर और नीचे दोनों स्थानों से स्वतंत्र रूप से चालू और बंद किया जा सकता है।'
      },
      equations: [
        { formula: '\\text{Lamp Output} = (S_1 \\cdot S_2) + (\\overline{S_1} \\cdot \\overline{S_2}) = \\overline{S_1 \\oplus S_2}', symbolDefs: 'XNOR Boolean logic truth table for 2-way staircase switching' }
      ],
      diagramDescription: 'Circuit showing Phase entering Common of Switch 1, two parallel traveler wires running between Switch 1 and Switch 2, and Common of Switch 2 powering the lamp.',
      safetyPrecautions: [
        'Always wire the Live Phase into the switch network and Neutral directly to the lamp.',
        'Ensure all terminal connections are firm inside the switch back-boxes.'
      ],
      procedure: [
        '1. Mount two SPDT two-way switches (Switch A at bottom, Switch B at top) and one lamp holder.',
        '2. Connect Red Live wire to the Common (center terminal) of Switch A.',
        '3. Run two traveler wires between the outer terminals: L1 of Switch A to L1 of Switch B, and L2 of Switch A to L2 of Switch B.',
        '4. Connect the Common (center terminal) of Switch B to one terminal of the lamp holder.',
        '5. Connect Black Neutral wire directly to the remaining terminal of the lamp holder.',
        '6. Energize and test all four switch position combinations to verify the truth table.'
      ],
      simulationType: 'staircase-wiring-lab',
      defaultParams: {
        switchA: 0, // 0 = L1, 1 = L2
        switchB: 0
      },
      observationColumns: [
        { key: 'swA', label: 'Switch A (Bottom)', unit: '' },
        { key: 'swB', label: 'Switch B (Top)', unit: '' },
        { key: 'lampState', label: 'Lamp State', unit: '' },
        { key: 'circuitPath', label: 'Active Conducting Traveler Line', unit: '' }
      ],
      sampleObservations: [
        { swA: 'Position 1 (L1)', swB: 'Position 1 (L1)', lampState: 'GLOWS (ON)', circuitPath: 'Closed via Traveler 1' },
        { swA: 'Position 1 (L1)', swB: 'Position 2 (L2)', lampState: 'OFF', circuitPath: 'Open circuit (No path)' },
        { swA: 'Position 2 (L2)', swB: 'Position 1 (L1)', lampState: 'OFF', circuitPath: 'Open circuit (No path)' },
        { swA: 'Position 2 (L2)', swB: 'Position 2 (L2)', lampState: 'GLOWS (ON)', circuitPath: 'Closed via Traveler 2' }
      ],
      calculationGuide: 'Truth table corresponds to the XNOR gate logic: Output = 1 whenever both switch inputs are matching (0,0 or 1,1).',
      resultInterpretation: 'The staircase circuit operates reliably: toggling either switch changes the state of the lamp from ON to OFF or OFF to ON.',
      sourcesOfError: ['Accidentally connecting Phase or Neutral to the traveler terminals instead of the Common terminal.'],
      vivaQuestions: [
        { question: 'How is a Two-Way switch different from an ordinary One-Way switch?', answer: 'A One-Way switch (SPST) has 2 terminals and simply makes or breaks a single connection. A Two-Way switch (SPDT) has 3 terminals (Common, L1, L2): the Common terminal is permanently connected to either L1 OR L2, redirecting current between two alternative paths rather than interrupting it.' }
      ],
      revisionQuiz: [
        {
          id: 'beee-lab-q12',
          question: {
            en: 'In staircase wiring with two SPDT switches, when does the lamp glow?',
            hinglish: 'Staircase wiring me bulb kab jalta hai?',
            hi: 'जीने की वायरिंग में बल्ब कब जलता है?'
          },
          options: [
            'When both switches connect to the SAME traveler conductor (both UP or both DOWN)',
            'Only when both switches are pointing in opposite directions',
            'Only when the sun sets',
            'When both switches are grounded'
          ],
          correctIndex: 0,
          explanation: {
            en: 'The circuit is completed only when both switches connect to the same traveler line (either both on traveler 1 or both on traveler 2), closing the conducting path from mains to lamp.',
            hinglish: 'Jab dono switch ek hi traveler line par judte hain (dono UP ya dono DOWN), tab circuit complete hota hai aur bulb jalta hai.',
            hi: 'जब दोनों स्विच एक ही संपर्क तार (ट्रैवलर) पर जुड़े होते हैं तभी परिपथ पूरा होता है और बल्ब जलता है।'
          },
          hint: {
            en: 'Both switches must agree on the same line.',
            hinglish: 'Dono switch same position me.',
            hi: 'दोनों स्विच समान स्थिति में होने चाहिए।'
          }
        }
      ]
    }
  ],
  examQuestions: [
    {
      id: 'beee-lab-eq1',
      unitNumber: 'Experiment 2',
      type: 'Viva',
      marks: 5,
      question: 'Why does an ammeter have very low resistance while a voltmeter has very high resistance?',
      solution: 'An ammeter is connected in series to measure full line current; if it had significant resistance, it would reduce the current it is trying to measure (meter loading effect). Hence, an ideal ammeter has zero resistance.\nA voltmeter is connected in parallel across components to measure potential difference; if it had low resistance, it would draw significant current away from the circuit branch. Hence, an ideal voltmeter has infinite resistance.'
    },
    {
      id: 'beee-lab-eq2',
      unitNumber: 'Experiment 6',
      type: 'Viva',
      marks: 5,
      question: 'How do you reverse the direction of rotation of a single-phase capacitor-start induction motor?',
      solution: 'By reversing the connection leads of EITHER the starting (auxiliary) winding OR the running (main) winding (but not both). This reverses the relative phase angle of the rotating magnetic field, reversing motor rotation from clockwise to counter-clockwise.'
    },
    {
      id: 'beee-lab-eq3',
      unitNumber: 'Experiment 11',
      type: 'Viva',
      marks: 5,
      question: 'Why is it strictly prohibited to wire a light switch in the Neutral conductor?',
      solution: 'If a switch is placed in the neutral wire, turning the switch OFF opens the return path, turning off the light. However, the phase (live 230 V) wire remains connected to the lamp socket. Any person touching the socket during bulb replacement or maintenance will complete a circuit to ground through their body, suffering a potentially fatal 230 V electric shock.'
    }
  ]
};
