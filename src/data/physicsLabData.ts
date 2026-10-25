import { Subject } from '../types';

export const APPLIED_PHYSICS_LAB: Subject = {
  id: 'applied-physics-lab',
  title: 'Applied Physics Lab',
  category: 'Laboratory',
  description: '12 hands-on virtual laboratory experiments covering LCR resonance, Helmholtz coils, e/m cathode ray ratio, He-Ne laser diffraction, photoelectric effect, and Millikan oil drop.',
  icon: 'FlaskConical',
  color: 'from-cyan-600 to-blue-700',
  isOfficial: true,
  syllabusSource: 'Official University Lab Syllabus (B.Tech 1st Year)',
  unitsCount: 12,
  units: [], // Labs use experiments array
  experiments: [
    {
      id: 'phy-lab-1',
      expNumber: 1,
      title: 'Study of Series and Parallel LCR Resonance Circuits',
      aim: 'To determine the resonant frequency, bandwidth, and quality factor (Q-factor) of series and parallel LCR circuits.',
      learningObjectives: [
        'Understand inductive reactance (X_L) and capacitive reactance (X_C).',
        'Observe how series resonance causes maximum current and minimum impedance.',
        'Calculate resonant frequency f_0 = 1 / (2π√(LC)) and Quality Factor Q = (ω_0 L) / R.'
      ],
      apparatus: [
        'Audio frequency function generator (10 Hz – 100 kHz)',
        'Inductor coil (L = 10 mH – 100 mH)',
        'Capacitor box (C = 0.01 μF – 0.1 μF)',
        'Decade resistance box (R = 50 Ω – 500 Ω)',
        'Digital AC Multimeter / Cathode Ray Oscilloscope (CRO)',
        'Connecting leads'
      ],
      theory: {
        en: 'In a series LCR circuit, the impedance Z is given by Z = √[R² + (ωL - 1/ωC)²]. At resonance, the inductive reactance cancels capacitive reactance (X_L = X_C), making impedance minimum (Z = R) and current maximum (I = V/R). The resonant frequency is f_0 = 1 / (2π√(LC)). The sharpness of the resonance curve is measured by the Quality factor Q = f_0 / (f_2 - f_1).',
        hinglish: 'Series LCR circuit me impedance Z = √[R² + (X_L - X_C)²] hota hai. Resonant frequency par X_L = X_C ho jata hai, jisse circuit ka resistance sabse kam (Z = R) aur current sabse zyada (I = V/R) ho jata hai. Is condition ko resonance kehte hain.',
        hi: 'श्रेणी LCR परिपथ में अनुनाद पर प्रेरकीय प्रतिघात और धारितीय प्रतिघात बराबर हो जाते हैं (X_L = X_C), जिससे परिपथ की प्रतिबाधा न्यूनतम (Z = R) तथा धारा अधिकतम हो जाती है।'
      },
      equations: [
        { formula: 'f_0 = \\frac{1}{2\\pi \\sqrt{LC}}', symbolDefs: 'f_0 = Resonant frequency (Hz), L = Inductance (H), C = Capacitance (F)' },
        { formula: 'Q = \\frac{f_0}{f_2 - f_1} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}', symbolDefs: 'Q = Quality factor, f_1, f_2 = Half-power frequencies (-3dB points)' }
      ],
      diagramDescription: 'Circuit schematic showing Function Generator connected in series with Resistor R, Inductor L, and Capacitor C with Voltmeter across Resistor.',
      safetyPrecautions: [
        'Keep signal generator voltage low (< 5V peak-to-peak) to prevent component overheating.',
        'Ensure all connections are tight to avoid spurious contact resistance.',
        'Never connect CRO probes directly across live mains supply.'
      ],
      procedure: [
        '1. Connect the series LCR circuit using R = 100 Ω, L = 50 mH, and C = 0.05 μF.',
        '2. Set the function generator to sine wave output at 2.0 V amplitude.',
        '3. Vary the frequency from 1 kHz to 10 kHz in steps of 500 Hz.',
        '4. Measure the voltage across resistor V_R (which is proportional to current I = V_R / R) at each frequency.',
        '5. Plot Current (I) versus Frequency (f) graph and find the peak frequency f_0.',
        '6. Identify half-power frequencies f_1 and f_2 where current drops to I_max / √2 (0.707 I_max) to calculate Q-factor.'
      ],
      simulationType: 'circuit-lcr',
      defaultParams: {
        resistance: 100, // ohms
        inductance: 50, // mH
        capacitance: 0.05, // uF
        voltage: 5 // V
      },
      observationColumns: [
        { key: 'freq', label: 'Frequency (f)', unit: 'kHz' },
        { key: 'vr', label: 'Resistor Voltage (V_R)', unit: 'Volts' },
        { key: 'current', label: 'Current (I = V_R / R)', unit: 'mA' }
      ],
      sampleObservations: [
        { freq: 1.0, vr: 0.42, current: 4.2 },
        { freq: 2.0, vr: 0.95, current: 9.5 },
        { freq: 2.5, vr: 1.80, current: 18.0 },
        { freq: 3.18, vr: 4.85, current: 48.5 }, // Resonance peak
        { freq: 3.5, vr: 2.40, current: 24.0 },
        { freq: 4.0, vr: 1.30, current: 13.0 },
        { freq: 5.0, vr: 0.65, current: 6.5 }
      ],
      calculationGuide: 'From the resonance curve: Peak frequency f_0 = 3.18 kHz. Half-power frequencies where I = 48.5 × 0.707 = 34.3 mA are f_1 = 2.85 kHz and f_2 = 3.55 kHz. Bandwidth Δf = f_2 - f_1 = 0.70 kHz. Q = 3.18 / 0.70 = 4.54.',
      resultInterpretation: 'Experimental resonant frequency f_0 = 3.18 kHz closely matches theoretical value f_0 = 1 / (2π√(50×10^-3 × 0.05×10^-6)) = 3.183 kHz with <0.5% error.',
      sourcesOfError: [
        'Internal resistance of the inductor coil was neglected in basic formula.',
        'Stray capacitance of connecting leads and breadboard.'
      ],
      vivaQuestions: [
        { question: 'Why is a series LCR circuit called an "Acceptor Circuit"?', answer: 'Because at resonant frequency, the impedance drops to its lowest value (Z = R), allowing maximum current to pass, thereby "accepting" signals of that specific frequency.' },
        { question: 'What happens to the sharpness of resonance if the resistance R is increased?', answer: 'Increasing resistance R reduces the peak current and broadens the curve, decreasing the Quality factor (lower selectivity).' }
      ],
      revisionQuiz: [
        {
          id: 'phy-lab-q1',
          question: {
            en: 'At series resonance, the phase difference between applied voltage and circuit current is:',
            hinglish: 'Series resonance par voltage aur current ke beech phase difference kitna hota hai?',
            hi: 'श्रेणी अनुनाद पर आरोपित वोल्टता और परिपथ धारा के मध्य कलान्तर कितना होता है?'
          },
          options: ['0 degrees (in phase)', '90 degrees (voltage leads)', '90 degrees (current leads)', '180 degrees'],
          correctIndex: 0,
          explanation: {
            en: 'At resonance, inductive and capacitive reactances cancel (X_L = X_C), making the net reactance zero. The circuit behaves as a pure resistance, so voltage and current are in phase (φ = 0°).',
            hinglish: 'Resonance par reactive components cancel ho jaate hain aur circuit purely resistive ban jata hai, isliye phase angle 0° hota hai.',
            hi: 'अनुनाद पर X_L = X_C होने से परिपथ पूर्णतः प्रतिरोधी बन जाता है, अतः कलान्तर शून्य होता है।'
          },
          hint: {
            en: 'tan φ = (X_L - X_C) / R. What is tan φ when X_L = X_C?',
            hinglish: 'tan φ = 0 jab X_L = X_C.',
            hi: 'tan φ = (X_L - X_C) / R सूत्र देखें।'
          }
        }
      ]
    },
    {
      id: 'phy-lab-2',
      expNumber: 2,
      title: 'Magnetic Field of a Helmholtz Coil & Superposition Principle',
      aim: 'To determine the variation of magnetic field along the central axis of a circular current-carrying coil and verify the uniform field of a Helmholtz coil.',
      learningObjectives: [
        'Study Biot-Savart law for a circular loop.',
        'Observe how placing two identical coaxial coils at a distance equal to their radius (d = R) produces a remarkably uniform central magnetic field.',
        'Verify the magnetic superposition principle.'
      ],
      apparatus: [
        'Helmholtz coil apparatus with two identical coaxial coils',
        'DC regulated power supply (0 - 5 A)',
        'Digital Gaussmeter / Hall effect probe with scale',
        'Ammeter and rheostat',
        'Connecting wires'
      ],
      theory: {
        en: 'The magnetic field along the axis of a single circular coil of N turns and radius R at distance x is B(x) = (μ₀ N I R²) / [2(R² + x²)^(3/2)]. When two identical coils carrying current in the same direction are separated by distance equal to their radius (d = R), the second derivative of the magnetic field vanishes at the midpoint (d²B/dx² = 0). This creates a highly uniform magnetic field B_center = [8 μ₀ N I] / [5^(3/2) R] ≈ 0.7155 (μ₀ N I / R).',
        hinglish: 'Ek single circular coil ke axis par magnetic field center se door jaane par tezi se ghati hai. Par jab do same coils ko unke radius jitni doori (d = R) par rakha jata hai, toh center me magnetic field bilkul flat aur uniform ho jaati hai.',
        hi: 'हेल्महोल्ट्ज़ कुण्डली में दो समाक्षीय कुंडलियों को उनकी त्रिज्या के बराबर दूरी पर रखने पर दोनों के मध्य क्षेत्र अत्यंत समरूप (uniform) हो जाता है।'
      },
      equations: [
        { formula: 'B_1(x) = \\frac{\\mu_0 N I R^2}{2(R^2 + x^2)^{3/2}}', symbolDefs: 'Field due to single coil at distance x' },
        { formula: 'B_{\\text{Helmholtz}} = \\frac{8 \\mu_0 N I}{5\\sqrt{5} R} = 0.7155 \\frac{\\mu_0 N I}{R}', symbolDefs: 'Uniform field at midpoint between two coils' }
      ],
      diagramDescription: 'Two vertical parallel circular coils spaced distance R apart, with a Hall effect probe sliding along the common central axis.',
      safetyPrecautions: [
        'Do not exceed maximum rated current through coils to avoid insulation melting.',
        'Keep ferromagnetic materials (keys, iron stands) away from the Hall probe.'
      ],
      procedure: [
        '1. Set up the two coils with common axis and adjust separation d = R (e.g. R = 15 cm).',
        '2. Connect coils in series so current flows in the same direction in both.',
        '3. Adjust current I = 2.0 A using the regulated DC power supply.',
        '4. Slide the Hall probe along the axis from -15 cm to +15 cm in steps of 1 cm, recording magnetic field B in Gauss.',
        '5. Repeat with only one coil energized to observe single-coil dropoff and confirm superposition B_total = B_1 + B_2.'
      ],
      simulationType: 'helmholtz-coil',
      defaultParams: {
        coilRadius: 15, // cm
        turns: 100,
        current: 2.0, // A
        separation: 15 // cm
      },
      observationColumns: [
        { key: 'dist', label: 'Distance from Center (x)', unit: 'cm' },
        { key: 'b1', label: 'Field Coil 1 Only (B_1)', unit: 'Gauss' },
        { key: 'b2', label: 'Field Coil 2 Only (B_2)', unit: 'Gauss' },
        { key: 'btotal', label: 'Both Coils (B_total)', unit: 'Gauss' }
      ],
      sampleObservations: [
        { dist: -10, b1: 8.5, b2: 1.2, btotal: 9.7 },
        { dist: -5, b1: 12.1, b2: 3.4, btotal: 15.5 },
        { dist: 0, b1: 8.4, b2: 8.4, btotal: 16.8 }, // Uniform midpoint
        { dist: 5, b1: 3.4, b2: 12.1, btotal: 15.5 },
        { dist: 10, b1: 1.2, b2: 8.5, btotal: 9.7 }
      ],
      calculationGuide: 'Verify theoretical field: B = (8 × 4π×10^-7 × 100 × 2.0) / (5√5 × 0.15) ≈ 1.20 × 10^-3 T = 12.0 Gauss.',
      resultInterpretation: 'The magnetic field remains uniform within ±3% over the central region between x = -3 cm to +3 cm, verifying the Helmholtz condition.',
      sourcesOfError: [
        'Earth’s ambient magnetic field (~0.5 Gauss) not zeroed out prior to measurement.',
        'Imperfect alignment of the axial translation track.'
      ],
      vivaQuestions: [
        { question: 'Why must the distance between two Helmholtz coils be equal to their radius (d = R)?', answer: 'Because at d = R, the second derivative d²B/dx² becomes zero at the midpoint, making the field gradient flat and producing maximum uniformity.' }
      ],
      revisionQuiz: [
        {
          id: 'phy-lab-q2',
          question: {
            en: 'In a Helmholtz coil setup, what condition ensures maximum uniformity of the central field?',
            hinglish: 'Helmholtz coil me maximum uniformity ke liye kya condition honi chahiye?',
            hi: 'हेल्महोल्ट्ज़ कुण्डली में अधिकतम समरूपता के लिए क्या शर्त है?'
          },
          options: ['Separation d = R', 'Separation d = 2R', 'Separation d = R/2', 'Separation d = 4R'],
          correctIndex: 0,
          explanation: {
            en: 'When the coil separation equals the coil radius (d = R), the second derivative of B with respect to distance x vanishes at the midpoint, producing a maximally flat, uniform field.',
            hinglish: 'Separation d = R hone par second derivative zero ho jata hai jisse field uniform banti hai.',
            hi: 'दूरी d = R होने पर मध्य बिंदु पर चुंबकीय क्षेत्र का द्वितीय अवकलज शून्य हो जाता है।'
          },
          hint: {
            en: 'Separation equals the radius of the coil.',
            hinglish: 'Radius ke barabar separation.',
            hi: 'दूरी त्रिज्या के समान होती है।'
          }
        }
      ]
    },
    {
      id: 'phy-lab-3',
      expNumber: 3,
      title: 'Electromagnetic Induction and Electromagnetic Braking',
      aim: 'To study Faraday’s law of induction by measuring induced EMF as a function of magnet velocity and observe eddy current electromagnetic damping.',
      learningObjectives: [
        'Observe how induced EMF scales linearly with magnet entry velocity.',
        'Understand eddy currents generated inside non-magnetic conductors (copper/aluminum tubes).',
        'Measure the terminal falling velocity of a magnet inside conductive vs plastic tubes.'
      ],
      apparatus: [
        'Induction coil with high-speed photogate sensors',
        'Strong cylindrical Neodymium magnet',
        'Solid copper tube, aluminum tube, and non-conductive plastic tube of identical dimensions',
        'Digital storage oscilloscope or data acquisition interface',
        'Stopwatch and ruler'
      ],
      theory: {
        en: 'By Faraday’s Law, ε = -dΦ/dt = -N (dΦ/dx)(dx/dt) = -N (dΦ/dx) v. The induced EMF peak is directly proportional to magnet speed v. Furthermore, as a magnet drops through a copper tube, the changing magnetic field induces swirling eddy currents in the pipe walls. By Lenz’s law, these eddy currents produce an opposing magnetic field, exerting an upward magnetic drag force F_drag = -k v. The magnet quickly reaches a slow terminal velocity.',
        hinglish: 'Faraday law ke mutabik jab magnet coil me tezi se girti hai toh zyada voltage induce hota hai. Jab magnet copper tube me girti hai toh tube ki deewaron me eddy currents paida hote hain jo magnet ki motion ka virodh karte hain, jisse magnet hawa me dheere-dheere tairti hui girti hai (electromagnetic braking).',
        hi: 'फैराडे नियमानुसार प्रेरित ईएमएफ चुंबक के वेग के समानुपाती होता है। तांबे की नली में भंवर धाराएं (Eddy currents) उत्पन्न होकर चुंबक की गति को धीमा कर देती हैं।'
      },
      equations: [
        { formula: '\\varepsilon_{\\text{peak}} = k \\cdot v', symbolDefs: 'Induced peak voltage is proportional to velocity' },
        { formula: 'm g - k v_{\\text{terminal}} = 0 \\implies v_{\\text{terminal}} = \\frac{m g}{k}', symbolDefs: 'Terminal velocity during electromagnetic braking' }
      ],
      diagramDescription: 'A vertical conductive tube with a cylindrical magnet dropping through it, showing circulating circular eddy currents and opposing magnetic poles.',
      safetyPrecautions: [
        'Strong Neodymium magnets can pinch fingers; handle with care.',
        'Keep electronic cards, smartphones, and watches away from the magnet.'
      ],
      procedure: [
        '1. Drop the magnet through the coil from heights h = 10, 20, 30, 40, and 50 cm.',
        '2. Record the peak-to-peak induced EMF voltage on the oscilloscope for each drop height.',
        '3. Calculate magnet velocity v = √(2gh) and plot Peak EMF vs Velocity to confirm linearity.',
        '4. Drop the magnet down a 1-meter plastic tube and measure fall time (~0.45 s).',
        '5. Drop the same magnet down a 1-meter copper tube and observe the dramatic slowdown (fall time ~4 to 8 s) due to eddy-current braking.'
      ],
      simulationType: 'em-braking',
      defaultParams: {
        tubeMaterial: 1, // Copper
        magnetMass: 50, // grams
        magnetStrength: 1.2 // Tesla
      },
      observationColumns: [
        { key: 'height', label: 'Drop Height (h)', unit: 'cm' },
        { key: 'velocity', label: 'Calculated Velocity (v = √(2gh))', unit: 'm/s' },
        { key: 'emf', label: 'Peak Induced EMF', unit: 'Volts' }
      ],
      sampleObservations: [
        { height: 10, velocity: 1.40, emf: 0.85 },
        { height: 20, velocity: 1.98, emf: 1.22 },
        { height: 30, velocity: 2.42, emf: 1.49 },
        { height: 40, velocity: 2.80, emf: 1.72 },
        { height: 50, velocity: 3.13, emf: 1.93 }
      ],
      calculationGuide: 'Graph of Peak EMF vs Velocity yields a straight line passing through the origin, verifying Faraday’s Law of Induction.',
      resultInterpretation: 'EMF increases linearly with magnet velocity. In the copper tube, fall time increased by >1000%, demonstrating electromagnetic braking used in high-speed bullet trains.',
      sourcesOfError: [
        'Air resistance during long drops.',
        'Magnet tumbling rather than falling straight axially.'
      ],
      vivaQuestions: [
        { question: 'Why does an aluminum or copper tube slow the magnet even though copper is non-magnetic?', answer: 'Because copper is an excellent electrical conductor. The changing magnetic flux induces circulating eddy currents in the copper wall, and by Lenz’s law these currents generate an opposing magnetic field that acts like an invisible brake.' }
      ],
      revisionQuiz: [
        {
          id: 'phy-lab-q3',
          question: {
            en: 'What fundamental law of physics dictates that induced eddy currents must oppose the falling magnet?',
            hinglish: 'Kaun sa basic physics law kehta hai ki induced current magnet ki motion ko rokegi?',
            hi: 'भौतिकी का कौन-सा मौलिक नियम यह निर्धारित करता है कि प्रेरित धारा चुंबक की गति का विरोध करेगी?'
          },
          options: ['Lenz’s Law (Conservation of Energy)', 'Coulomb’s Law', 'Boyle’s Law', 'Snell’s Law'],
          correctIndex: 0,
          explanation: {
            en: 'Lenz’s law states that induced currents always oppose the change that produces them, preserving the principle of conservation of energy.',
            hinglish: 'Lenz law energy conservation par based hai, isliye induced current hamesha cause ka virodh karti hai.',
            hi: 'लेंज का नियम ऊर्जा संरक्षण पर आधारित है और प्रेरित धारा सदैव अपने कारण का विरोध करती है।'
          },
          hint: {
            en: 'Named after Russian physicist Heinrich Lenz.',
            hinglish: 'Lenz ka niyam.',
            hi: 'लेंज का नियम।'
          }
        }
      ]
    },
    {
      id: 'phy-lab-4',
      expNumber: 4,
      title: 'Cathode Ray Experiment: Measurement of Specific Charge (e/m) of Electron',
      aim: 'To study the deflection of an electron beam under crossed electric and magnetic fields (Lorentz force) and determine the specific charge (e/m) of the electron.',
      learningObjectives: [
        'Observe Lorentz force F = -e (E + v × B) in an evacuated cathode ray tube.',
        'Use Thomson’s crossed-field method where magnetic force balances electric force (eE = evB).',
        'Calculate specific charge e/m ≈ 1.7588 × 10^11 C/kg.'
      ],
      apparatus: [
        'Cathode Ray Tube (CRT) with internal electrostatic deflection plates',
        'Pair of Helmholtz coils to produce uniform perpendicular magnetic field',
        'High voltage power supply (0 - 1000 V) for electron acceleration',
        'Regulated DC current power supply for Helmholtz coils',
        'Digital DC voltmeter and ammeter'
      ],
      theory: {
        en: 'Electrons accelerated through anode voltage V acquire kinetic energy (1/2)mv² = eV ⇒ v = √(2eV/m). In a transverse magnetic field B, the Lorentz force F = evB curves the electron trajectory into a circular arc of radius r, where evB = mv²/r ⇒ e/m = v / (Br). In Thomson’s velocity filter method, a transverse electric field E is simultaneously applied so electrostatic and magnetic forces balance: eE = evB ⇒ v = E/B. Substituting v into kinetic energy gives e/m = E² / (2 V B²).',
        hinglish: 'Cathode ray tube me electron beam electric aur magnetic fields me bend hoti hai. Dono fields ko aapas me balance karke (eE = evB) electron ki speed v nikaalte hain, aur fir electron ka specific charge e/m = 1.76 × 10^11 C/kg calculate karte hain.',
        hi: 'थॉमसन विधि में क्रॉसित विद्युत और चुंबकीय क्षेत्रों को संतुलित करके इलेक्ट्रॉन का विशिष्ट आवेश e/m ज्ञात किया जाता है।'
      },
      equations: [
        { formula: 'v = \\frac{E}{B}', symbolDefs: 'Velocity selector condition (zero net deflection)' },
        { formula: '\\frac{e}{m} = \\frac{E^2}{2 V B^2} = \\frac{V_d^2}{2 V d^2 B^2}', symbolDefs: 'Specific charge formula (V_d = deflection plate voltage, d = plate separation)' }
      ],
      diagramDescription: 'Evacuated glass tube showing electron gun, two horizontal deflection plates, circular Helmholtz coils, and a glowing green spot on the fluorescent zinc sulfide screen.',
      safetyPrecautions: [
        'Anode voltages reach 500V - 1000V; do not touch exposed high-voltage terminals.',
        'Cathode ray tubes are fragile glass vacuum tubes; handle gently to avoid implosion.'
      ],
      procedure: [
        '1. Switch on CRT filament and apply accelerating anode voltage V = 400 V to obtain a sharp green central spot on the screen.',
        '2. Apply deflection voltage V_d = 50 V to electric plates, observing the spot deflect upward by distance y.',
        '3. Energize the Helmholtz coils and adjust coil current I until the green spot returns exactly to the undeflected center (E and B forces balanced).',
        '4. Calculate magnetic field B from coil current I and electric field E = V_d / d.',
        '5. Compute e/m and repeat for several anode voltages (V = 500V, 600V, 700V).'
      ],
      simulationType: 'lorentz-tube',
      defaultParams: {
        anodeVoltage: 500, // V
        deflectionVoltage: 60, // V
        helmholtzCurrent: 1.5 // A
      },
      observationColumns: [
        { key: 'anodeV', label: 'Anode Voltage (V)', unit: 'Volts' },
        { key: 'plateV', label: 'Plate Voltage (V_d)', unit: 'Volts' },
        { key: 'currentI', label: 'Balancing Coil Current (I)', unit: 'Amperes' },
        { key: 'em', label: 'Calculated e/m', unit: '×10^11 C/kg' }
      ],
      sampleObservations: [
        { anodeV: 400, plateV: 50, currentI: 1.25, em: 1.74 },
        { anodeV: 500, plateV: 60, currentI: 1.38, em: 1.76 },
        { anodeV: 600, plateV: 70, currentI: 1.51, em: 1.75 },
        { anodeV: 700, plateV: 80, currentI: 1.63, em: 1.77 }
      ],
      calculationGuide: 'Average experimental specific charge e/m = (1.74 + 1.76 + 1.75 + 1.77) / 4 = 1.755 × 10^11 C/kg.',
      resultInterpretation: 'Experimental value of e/m = 1.755 × 10^11 C/kg agrees with the accepted standard value 1.7588 × 10^11 C/kg within 0.22% error.',
      sourcesOfError: [
        'Non-uniformity of electric field near the edges of deflection plates (fringing fields).',
        'Parallax error when reading the glowing spot position on the curved glass graticule.'
      ],
      vivaQuestions: [
        { question: 'What was the revolutionary historical importance of J.J. Thomson’s e/m experiment?', answer: 'It proved that cathode rays are composed of subatomic, negatively charged particles (electrons) with a mass over 1800 times lighter than a hydrogen atom, showing that atoms are divisible.' }
      ],
      revisionQuiz: [
        {
          id: 'phy-lab-q4',
          question: {
            en: 'In Thomson’s velocity selector, why does an electron travel in a straight line without deflection?',
            hinglish: 'Thomson velocity selector me electron bina mude seedha kyu nikal jata hai?',
            hi: 'थॉमसन वेग वरणकर्ता में इलेक्ट्रॉन बिना विक्षेपित हुए सीधा क्यों निकल जाता है?'
          },
          options: [
            'Electrostatic force eE is equal in magnitude and opposite in direction to magnetic Lorentz force evB',
            'Both fields are completely switched off',
            'Gravity cancels the electric field',
            'The electron loses its electric charge'
          ],
          correctIndex: 0,
          explanation: {
            en: 'Net Lorentz force is F = q(E + v × B). When E and B are crossed and v = E/B, the downward electric force exactly cancels the upward magnetic force, yielding net force = 0.',
            hinglish: 'Electric force aur magnetic force barabar aur opposite hote hain (eE = evB), jisse net force zero ho jata hai.',
            hi: 'विद्युत बल और चुंबकीय बल परिमाण में बराबर और विपरीत दिशा में होने से कुल बल शून्य हो जाता है।'
          },
          hint: {
            en: 'Opposing forces balance each other.',
            hinglish: 'Dono forces ek dusre ko cancel karte hain.',
            hi: 'विपरीत बल एक दूसरे को निष्प्रभावी करते हैं।'
          }
        }
      ]
    },
    {
      id: 'phy-lab-5',
      expNumber: 5,
      title: 'Experimental Verification of Heisenberg’s Uncertainty Principle',
      aim: 'To verify Heisenberg’s uncertainty principle (Δx · Δp_x ≥ ℏ/2) using single-slit laser diffraction.',
      learningObjectives: [
        'Understand that narrowing a physical slit (reducing position uncertainty Δx) broadens the diffraction pattern (increasing transverse momentum uncertainty Δp_x).',
        'Measure central diffraction maximum width as a function of slit aperture.',
        'Calculate product Δx · Δp_x and confirm it satisfies quantum bounds.'
      ],
      apparatus: [
        'He-Ne laser (λ = 632.8 nm, 2 mW)',
        'Precision micrometer adjustable single-slit aperture (0.02 mm - 0.50 mm)',
        'Photodetector mounted on a motorized linear translation stage with micrometer readout',
        'Optical rail and screen at distance D = 2.0 m'
      ],
      theory: {
        en: 'When a beam of photons passes through a narrow slit of width w = Δx, its position in the transverse direction is localized with uncertainty Δx = w. Due to Fraunhofer diffraction, the beam spreads into a diffraction pattern where the first minimum occurs at angle θ given by w sin(θ) = λ. The photon acquires an uncertain transverse momentum component Δp_x = p sin(θ) = (h/λ) sin(θ). Multiplying: Δx · Δp_x = w · (h/λ) (λ/w) = h > ℏ/2, verifying Heisenberg’s uncertainty relation.',
        hinglish: 'Jab laser light ko bohot patli slit (width = Δx) se guzara jata hai toh screen par pattern fail jata hai. Slit jitni patli karenge (Δx kam karenge), pattern utna hi chouda (Δp_x bada) ho jata hai. Dono ka product Δx · Δp_x hamesha h/4π se bada hota hai.',
        hi: 'जब लेजर किरण को संकीर्ण स्लिट (चौड़ाई Δx) से गुजारा जाता है, तो विवर्तन पैटर्न चौड़ा हो जाता है जो संवेग अनिश्चितता Δp_x की वृद्धि को दर्शाता है।'
      },
      equations: [
        { formula: 'w \\sin(\\theta) = \\lambda \\implies \\sin(\\theta) \\approx \\frac{y}{D} = \\frac{\\lambda}{w}', symbolDefs: 'Diffraction first minimum condition' },
        { formula: '\\Delta x \\cdot \\Delta p_x = w \\cdot \\left(\\frac{h}{\\lambda} \\sin\\theta\\right) \\approx h \\ge \\frac{\\hbar}{2}', symbolDefs: 'Verification of uncertainty product' }
      ],
      diagramDescription: 'Laser shining through a variable slit of width w onto a screen at distance D, showing central peak width 2y and transverse momentum spread.',
      safetyPrecautions: [
        'NEVER look directly into the laser beam or its specular reflections (permanent retina damage).',
        'Wear appropriate optical laser safety goggles during alignment.'
      ],
      procedure: [
        '1. Align the He-Ne laser beam normally onto the adjustable single slit placed on the optical bench.',
        '2. Place the observation screen at distance D = 2.0 meters.',
        '3. Set slit width w to 0.10 mm and measure the width of the central maximum (2y).',
        '4. Gradually narrow the slit to 0.05 mm and observe the counter-intuitive phenomenon: narrowing the slit causes the central laser patch on the wall to spread out wider!',
        '5. Record slit widths and corresponding central peak widths to calculate Δx · Δp_x.'
      ],
      simulationType: 'heisenberg-slit',
      defaultParams: {
        slitWidth: 0.10, // mm
        laserWavelength: 632.8, // nm
        screenDistance: 2.0 // m
      },
      observationColumns: [
        { key: 'w', label: 'Slit Width w (Δx)', unit: 'mm' },
        { key: 'width2y', label: 'Central Fringe Width (2y)', unit: 'cm' },
        { key: 'theta', label: 'Diffraction Half-Angle (θ)', unit: 'rad' },
        { key: 'product', label: 'Product (Δx · Δp_x / h)', unit: 'h' }
      ],
      sampleObservations: [
        { w: 0.20, width2y: 1.27, theta: 0.00316, product: 1.00 },
        { w: 0.15, width2y: 1.69, theta: 0.00422, product: 1.00 },
        { w: 0.10, width2y: 2.53, theta: 0.00633, product: 1.00 },
        { w: 0.05, width2y: 5.06, theta: 0.01266, product: 1.00 }
      ],
      calculationGuide: 'For slit width w = 0.10 mm: 2y = 2.53 cm ⇒ y = 1.265 cm. sin(θ) = y / D = 0.01265 / 2.0 = 0.006325 rad. Δp_x = (h / λ) sin(θ) = (6.626×10^-34 / 632.8×10^-9) × 0.006325 = 6.622 × 10^-30 kg·m/s. Product Δx · Δp_x = (1.0 × 10^-4 m) × (6.622 × 10^-30) = 6.62 × 10^-34 J·s ≈ h > ℏ/2.',
      resultInterpretation: 'In every measurement, the product Δx · Δp_x ≈ h, which strictly satisfies the quantum bound Δx · Δp_x ≥ ℏ/2, confirming the Heisenberg Uncertainty Principle.',
      sourcesOfError: [
        'Diffraction pattern intensity drops near edges, introducing subjective error in identifying exact minimum.',
        'Slit jaw non-parallelism at ultra-narrow micrometer settings.'
      ],
      vivaQuestions: [
        { question: 'Why does narrowing a slit make the central bright spot get wider instead of narrower?', answer: 'By Heisenberg’s uncertainty principle, narrowing the slit reduces the position uncertainty Δx of the photons. In response, nature forces the momentum uncertainty Δp_x in the sideways direction to increase, causing photons to shoot out at wider angles.' }
      ],
      revisionQuiz: [
        {
          id: 'phy-lab-q5',
          question: {
            en: 'If the slit width Δx in a single-slit diffraction experiment is halved, the angular spread θ of the central maximum will:',
            hinglish: 'Agar slit width Δx ko aadha kar diya jaye toh central maximum ka angular spread kitna ho jayega?',
            hi: 'यदि स्लिट की चौड़ाई Δx को आधा कर दिया जाए, तो केंद्रीय उच्चिष्ठ का कोणीय फैलाव:'
          },
          options: ['Double (2× wider)', 'Halve (0.5× narrower)', 'Remain unchanged', 'Quadruple (4×)'],
          correctIndex: 0,
          explanation: {
            en: 'From sin(θ) ≈ λ / w, the angular spread is inversely proportional to slit width w. Halving the slit width doubles the angular diffraction spread.',
            hinglish: 'Formula sin θ = λ/w hota hai. Width aadhi karne par angular spread dugna (double) ho jata hai.',
            hi: 'sin(θ) ≈ λ/w के अनुसार स्लिट की चौड़ाई आधी करने पर कोणीय फैलाव दोगुना हो जाता है।'
          },
          hint: {
            en: 'Check the inverse relationship θ ∝ 1/w.',
            hinglish: 'θ aur w ulte (inversely proportional) hain.',
            hi: 'θ व्युत्क्रमानुपाती 1/w होता है।'
          }
        }
      ]
    },
    {
      id: 'phy-lab-6',
      expNumber: 6,
      title: 'Determination of He-Ne Laser Wavelength using Double-Slit Interference',
      aim: 'To determine the wavelength of He-Ne laser light using Young’s double-slit interference pattern.',
      learningObjectives: [
        'Observe clear, high-contrast double-slit interference fringes using coherent laser light.',
        'Measure fringe width β with a traveling microscope or screen grid.',
        'Calculate laser wavelength λ = (β · d) / D.'
      ],
      apparatus: [
        'Helium-Neon (He-Ne) Laser (λ ≈ 632.8 nm)',
        'Standard double slit slide (slit separation d = 0.25 mm to 0.50 mm)',
        'Optical rail and uprights',
        'Screen with millimetric grid or digital detector at distance D = 1.5 m'
      ],
      theory: {
        en: 'When coherent, monochromatic laser light passes through two parallel narrow slits separated by distance d, the wavefront splits into two cylindrical waves that superimpose on a screen at distance D. The condition for constructive interference (bright fringes) is d sin(θ) = nλ. For small angles, fringe separation (fringe width β) between successive bright fringes is constant: β = (λ · D) / d. Rearranging gives wavelength λ = (β · d) / D.',
        hinglish: 'Laser light jab double slit (separation d) se guzarti hai toh screen par equal spacing wali fringes banti hain. Fringe width β = λD/d formula se laser ki wavelength λ = βd/D nikali jaati hai.',
        hi: 'यंग के द्वि-स्लिट प्रयोग में फ्रिंज चौड़ाई β = λD/d होती है। इससे लेजर की तरंगदैर्ध्य λ = (β·d)/D ज्ञात की जाती है।'
      },
      equations: [
        { formula: '\\beta = \\frac{\\lambda D}{d}', symbolDefs: 'Fringe width equation' },
        { formula: '\\lambda = \\frac{\\beta \\cdot d}{D}', symbolDefs: 'Wavelength calculation formula' }
      ],
      diagramDescription: 'Laser beam passing through double slit with separation d, projecting evenly spaced interference fringes on distant screen at distance D.',
      safetyPrecautions: [
        'Avoid direct eye exposure to laser beam.',
        'Mount laser securely on stable optical bench to prevent jitter.'
      ],
      procedure: [
        '1. Place the He-Ne laser on one end of the optical rail and direct the beam normally through the double-slit slide.',
        '2. Position the screen at D = 1.50 m.',
        '3. Observe the sharp red fringe pattern consisting of alternating bright and dark lines.',
        '4. Measure the span of 10 consecutive fringes to obtain an accurate average fringe width β = (Span of 10 fringes) / 10.',
        '5. Repeat for different screen distances D = 1.8 m and 2.0 m.'
      ],
      simulationType: 'laser-double-slit',
      defaultParams: {
        slitSeparation: 0.30, // mm
        screenDist: 1.5, // m
        laserWavelength: 632.8 // nm
      },
      observationColumns: [
        { key: 'distD', label: 'Screen Distance (D)', unit: 'm' },
        { key: 'span10', label: 'Width of 10 Fringes', unit: 'mm' },
        { key: 'beta', label: 'Fringe Width (β)', unit: 'mm' },
        { key: 'lambda', label: 'Calculated Wavelength (λ)', unit: 'nm' }
      ],
      sampleObservations: [
        { distD: 1.20, span10: 25.3, beta: 2.53, lambda: 632.5 },
        { distD: 1.50, span10: 31.6, beta: 3.16, lambda: 632.0 },
        { distD: 1.80, span10: 38.0, beta: 3.80, lambda: 633.3 },
        { distD: 2.00, span10: 42.2, beta: 4.22, lambda: 633.0 }
      ],
      calculationGuide: 'Average λ = (632.5 + 632.0 + 633.3 + 633.0) / 4 = 632.7 nm.',
      resultInterpretation: 'Experimental wavelength of the He-Ne laser is 632.7 nm, which matches the manufacturer specification (632.8 nm) within 0.02% precision.',
      sourcesOfError: [
        'Uncertainty in measuring slit separation d (requires pre-calibration under travelling microscope).',
        'Slight non-perpendicularity of the screen.'
      ],
      vivaQuestions: [
        { question: 'Why does a laser make a much better interference source than a sodium lamp with pinholes?', answer: 'Because a laser possesses exceptional spatial and temporal coherence and high monochromatic intensity, forming exceptionally sharp, bright fringes without needing an initial pinhole filter.' }
      ],
      revisionQuiz: [
        {
          id: 'phy-lab-q6',
          question: {
            en: 'In Young’s double slit experiment, what happens to the fringe width β if the entire apparatus is immersed in water (μ = 1.33)?',
            hinglish: 'Agar poore double slit apparatus ko paani me dubo diya jaye toh fringe width par kya farak padega?',
            hi: 'यदि पूरे द्वि-स्लिट उपकरण को पानी (μ = 1.33) में डुबो दिया जाए, तो फ्रिंज चौड़ाई:'
          },
          options: ['Decreases by factor of 1.33 (β / 1.33)', 'Increases by factor of 1.33', 'Remains unchanged', 'Becomes infinite'],
          correctIndex: 0,
          explanation: {
            en: 'In water, the wavelength decreases: λ’ = λ / μ = λ / 1.33. Since fringe width β = λD/d, the fringe width decreases proportionally by a factor of 1.33.',
            hinglish: 'Paani me wavelength kam ho jati hai (λ/1.33), isliye fringe width bhi 1.33 guna kam ho jayegi.',
            hi: 'जल में तरंगदैर्ध्य λ/μ हो जाती है, अतः फ्रिंज चौड़ाई 1.33 गुना घट जाएगी।'
          },
          hint: {
            en: 'Light travels slower in water, so wavelength is shorter.',
            hinglish: 'Paani me light ki wavelength kam hoti hai.',
            hi: 'पानी में तरंगदैर्ध्य कम हो जाती है।'
          }
        }
      ]
    },
    {
      id: 'phy-lab-7',
      expNumber: 7,
      title: 'Photoelectric Effect: Determination of Planck’s Constant & Work Function',
      aim: 'To determine Planck’s constant (h) and the work function of a photocell material, and verify the inverse-square law for light intensity.',
      learningObjectives: [
        'Measure stopping potential V_s for various spectral colors/wavelengths.',
        'Plot Stopping Potential V_s versus Frequency ν to determine slope h/e and intercept.',
        'Verify that photocurrent obeys the inverse-square law with distance I ∝ 1/r².'
      ],
      apparatus: [
        'Photoelectric apparatus with enclosed vacuum phototube (Cesium/Potassium photocathode)',
        'Monochromatic color filters (Yellow 578 nm, Green 546 nm, Blue 436 nm, Violet 405 nm)',
        'Mercury vapor lamp light source on calibrated bench',
        'Ultra-sensitive nanoammeter and variable reverse DC bias voltage supply (-3V to +3V)'
      ],
      theory: {
        en: 'By Einstein’s photoelectric equation, hν = Φ + eV_s, where V_s is the stopping potential. Rearranging: V_s = (h/e)ν - (Φ/e). A graph of V_s on the y-axis against frequency ν on the x-axis yields a straight line with slope m = h/e. Multiplying the slope by the known electronic charge e (1.602 × 10^-19 C) yields Planck’s constant h. The negative y-intercept gives the work function in electron-volts: Φ = e · |intercept|.',
        hinglish: 'Einstein equation V_s = (h/e)ν - (Φ/e) ke mutabik Stopping potential V_s aur frequency ν ka graph straight line hota hai. Is graph ka slope nikaal kar use e se multiply karne par Planck’s constant h milta hai aur y-intercept se work function Φ milta hai.',
        hi: 'निरोधी विभव V_s और आवृत्ति ν का ग्राफ एक सरल रेखा होता है जिसकी प्रवणता (slope) h/e होती है। इससे प्लांक नियतांक h और कार्यफलन Φ ज्ञात होता है।'
      },
      equations: [
        { formula: 'V_s = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\Phi}{e}', symbolDefs: 'Linear stopping potential vs frequency equation' },
        { formula: 'h = e \\cdot (\\text{Slope}), \\quad \\Phi = e \\cdot |V_0|', symbolDefs: 'Calculation of Planck’s constant and work function' }
      ],
      diagramDescription: 'Photocell in an opaque housing connected to variable reverse voltage supply and nanoammeter, illuminated through optical color filters.',
      safetyPrecautions: [
        'Mercury vapor lamps emit dangerous ultraviolet (UV) radiation; never view the lamp without UV-blocking filters.',
        'Do not touch hot lamp housing.'
      ],
      procedure: [
        '1. Place the 546 nm (green) filter in front of the photocell.',
        '2. Turn on lamp and observe positive photocurrent on the nanoammeter.',
        '3. Slowly increase negative reverse potential until the photocurrent drops to EXACTLY zero; record this as stopping potential V_s.',
        '4. Repeat for all available filters: 578 nm, 436 nm, 405 nm, and 365 nm.',
        '5. Plot V_s vs ν, calculate slope, and determine h and Φ.'
      ],
      simulationType: 'photoelectric-lab',
      defaultParams: {
        filterWavelength: 546,
        lampDistance: 30, // cm
        reverseVoltage: 0.0
      },
      observationColumns: [
        { key: 'color', label: 'Filter Color', unit: '' },
        { key: 'wavelength', label: 'Wavelength (λ)', unit: 'nm' },
        { key: 'freq', label: 'Frequency (ν)', unit: '×10^14 Hz' },
        { key: 'vs', label: 'Stopping Potential (V_s)', unit: 'Volts' }
      ],
      sampleObservations: [
        { color: 'Yellow', wavelength: 578, freq: 5.19, vs: 0.38 },
        { color: 'Green', wavelength: 546, freq: 5.49, vs: 0.51 },
        { color: 'Blue', wavelength: 436, freq: 6.88, vs: 1.09 },
        { color: 'Violet', wavelength: 405, freq: 7.41, vs: 1.31 },
        { color: 'Ultraviolet', wavelength: 365, freq: 8.22, vs: 1.64 }
      ],
      calculationGuide: 'Slope m = ΔV_s / Δν = (1.64 - 0.38) / (8.22 - 5.19) × 10^-14 = 1.26 / (3.03 × 10^14) = 4.158 × 10^-15 V·s. Planck’s constant h = m × e = (4.158 × 10^-15) × (1.602 × 10^-19) = 6.66 × 10^-34 J·s. Work function Φ = e × |intercept| ≈ 1.77 eV.',
      resultInterpretation: 'Experimental Planck’s constant h = 6.66 × 10^-34 J·s agrees within 0.5% of accepted value (6.626 × 10^-34 J·s). Work function of photocathode is 1.77 eV (Cesium-Antimony surface).',
      sourcesOfError: [
        'Anode reverse emission caused by stray light reflecting onto the collector anode.',
        'Contact potential difference between cathode and anode materials.'
      ],
      vivaQuestions: [
        { question: 'Why does stopping potential depend on frequency of light but not on its intensity?', answer: 'Stopping potential is determined strictly by the maximum kinetic energy of the fastest ejected electron (eV_s = KE_max). By Einstein’s theory, each photon delivers energy hν in a 1-to-1 collision, so kinetic energy depends solely on photon frequency (color).' }
      ],
      revisionQuiz: [
        {
          id: 'phy-lab-q7',
          question: {
            en: 'In the graph of Stopping Potential (V_s) versus Frequency (ν), what does the slope of the line represent?',
            hinglish: 'Stopping potential V_s aur frequency ν ke graph ka slope kya represent karta hai?',
            hi: 'निरोधी विभव V_s और आवृत्ति ν के ग्राफ की प्रवणता क्या दर्शाती है?'
          },
          options: ['h / e (Planck’s constant divided by electronic charge)', 'Planck’s constant h', 'Work function Φ', 'Speed of light c'],
          correctIndex: 0,
          explanation: {
            en: 'From V_s = (h/e)ν - Φ/e, the equation is of form y = mx + c. The slope m is equal to h/e.',
            hinglish: 'Equation V_s = (h/e)ν - Φ/e se slope m = h/e hota hai.',
            hi: 'समीकरण V_s = (h/e)ν - Φ/e में प्रवणता h/e होती है।'
          },
          hint: {
            en: 'Notice that multiplying the slope by e gives h.',
            hinglish: 'Slope ko charge e se guna karne par h milta hai.',
            hi: 'प्रवणता को e से गुणा करने पर h मिलता है।'
          }
        }
      ]
    },
    {
      id: 'phy-lab-8',
      expNumber: 8,
      title: 'Study of Lorentz Force on an Electron Beam in a Vacuum Tube',
      aim: 'To observe the helical and circular motion of electrons under magnetic fields and study magnetic deflection.',
      learningObjectives: [
        'Demonstrate that magnetic force F = -e (v × B) acts perpendicular to both velocity and magnetic field.',
        'Observe circular trajectory when v ⊥ B and helical trajectory when v is at an oblique angle.',
        'Measure radius of curvature of electron beam as a function of magnetic field.'
      ],
      apparatus: [
        'Fine-beam tube containing low-pressure helium gas (gas-filled diode)',
        'Helmholtz coils around the tube',
        'Power supply with adjustable accelerating voltage (0 - 300 V)',
        'Helmholtz coil current supply (0 - 2 A)'
      ],
      theory: {
        en: 'In the fine-beam tube, electrons collide with trace helium atoms, exciting them. When the helium atoms de-excite, they emit a glowing blue-green luminous ring tracing the exact circular path of the electron beam. The centripetal force is provided by the Lorentz magnetic force: m v² / r = e v B ⇒ r = (m v) / (e B) = √(2m V) / (e B √e). By measuring the luminous ring diameter 2r for known V and B, Lorentz force dynamics are directly confirmed.',
        hinglish: 'Fine-beam tube me helium gas hoti hai jo electrons ke takrane se neele-hare rang me chamakti hai, jisse electron ka circular path saaf dikhta hai. Is path ka radius r = mv / eB hota hai.',
        hi: 'हीलियम गैस से भरी नली में चुंबकीय क्षेत्र के प्रभाव से इलेक्ट्रॉन किरण वृत्ताकार पथ पर घूमती है जो हरी-नीली चमक के रूप में साक्षात् दिखाई देती है।'
      },
      equations: [
        { formula: 'r = \\frac{m v}{e B} = \\frac{1}{B} \\sqrt{\\frac{2m V}{e}}', symbolDefs: 'Radius of electron circle in magnetic field' },
        { formula: '\\frac{e}{m} = \\frac{2V}{B^2 r^2}', symbolDefs: 'Specific charge determination from beam radius' }
      ],
      diagramDescription: 'Spherical glass bulb surrounded by two large circular coils, containing a glowing cyan-green circular loop of electrons inside.',
      safetyPrecautions: [
        'Operate tube in a darkened room for clear visibility of the luminous beam.',
        'Do not exceed maximum anode voltage (300V) or beam will overheat the glass.'
      ],
      procedure: [
        '1. Set accelerating voltage to V = 150 V. A straight horizontal electron beam appears as a thin pencil of light.',
        '2. Slowly increase Helmholtz coil current I. Watch the beam curve downward into a perfect circular glowing hoop!',
        '3. Use the internal mirror scale to measure the diameter 2r of the glowing circle.',
        '4. Increase coil current and note that higher B shrinks the circle (r ∝ 1/B).',
        '5. Tilt the tube slightly to observe the circular ring stretch into a beautiful 3D glowing helix (helical motion).'
      ],
      simulationType: 'lorentz-tube',
      defaultParams: {
        anodeVoltage: 180,
        deflectionVoltage: 0,
        helmholtzCurrent: 1.2
      },
      observationColumns: [
        { key: 'voltageV', label: 'Accelerating Voltage (V)', unit: 'Volts' },
        { key: 'currentI', label: 'Coil Current (I)', unit: 'A' },
        { key: 'fieldB', label: 'Magnetic Field (B)', unit: 'mT' },
        { key: 'radiusR', label: 'Orbit Radius (r)', unit: 'cm' }
      ],
      sampleObservations: [
        { voltageV: 150, currentI: 1.0, fieldB: 0.78, radiusR: 5.3 },
        { voltageV: 150, currentI: 1.3, fieldB: 1.01, radiusR: 4.1 },
        { voltageV: 150, currentI: 1.6, fieldB: 1.25, radiusR: 3.3 },
        { voltageV: 200, currentI: 1.3, fieldB: 1.01, radiusR: 4.7 },
        { voltageV: 250, currentI: 1.3, fieldB: 1.01, radiusR: 5.3 }
      ],
      calculationGuide: 'Calculate e/m = (2 × 150) / [(0.78 × 10^-3)² × (0.053)²] = 300 / [6.084 × 10^-7 × 2.809 × 10^-3] ≈ 1.756 × 10^11 C/kg.',
      resultInterpretation: 'The circular orbit radius is directly proportional to √V and inversely proportional to B, verifying Lorentz force law F = q(v × B).',
      sourcesOfError: [
        'Parallax error when aligning the mirrored scale behind the luminous beam.',
        'Residual non-uniformity of the Helmholtz coil field near the bulb periphery.'
      ],
      vivaQuestions: [
        { question: 'Why does the electron beam form a helix instead of a circle when the tube is tilted?', answer: 'When velocity v makes an angle θ with B, the velocity component parallel to B (v_parallel = v cos θ) is unaffected by magnetic force, causing constant linear motion, while the perpendicular component (v_perp = v sin θ) executes uniform circular motion. The combination of uniform translation and circular rotation forms a helix.' }
      ],
      revisionQuiz: [
        {
          id: 'phy-lab-q8',
          question: {
            en: 'What is the work done by the magnetic Lorentz force on a moving electron?',
            hinglish: 'Chalte hue electron par magnetic Lorentz force kitna work (karya) karti hai?',
            hi: 'गतिमान इलेक्ट्रॉन पर चुंबकीय लॉरेंट्ज़ बल द्वारा किया गया कार्य कितना होता है?'
          },
          options: ['Strictly Zero', 'Positive work equal to (1/2)mv²', 'Negative work', 'Infinite'],
          correctIndex: 0,
          explanation: {
            en: 'Because magnetic force F = q(v × B) is always strictly perpendicular to the velocity vector v (F ⊥ v), the dot product F · v = 0. Hence, work done is always zero; magnetic fields can change direction but NEVER change speed or kinetic energy.',
            hinglish: 'Force hamesha velocity ke perpendicular (90°) hoti hai, isliye work done F · d = 0 hota hai. Magnetic field speed nahi badal sakti, sirf disha badalti hai.',
            hi: 'चुंबकीय बल सदैव वेग के लंबवत होता है, अतः F·v = 0 होने से किया गया कार्य सदैव शून्य होता है।'
          },
          hint: {
            en: 'Force is always perpendicular to motion.',
            hinglish: 'Force aur motion 90 degree par hote hain.',
            hi: 'बल और विस्थापन परस्पर लंबवत होते हैं।'
          }
        }
      ]
    },
    {
      id: 'phy-lab-9',
      expNumber: 9,
      title: 'Electron Spin Resonance (ESR) Spectrometer Experiment',
      aim: 'To study electron spin resonance in DPPH (Diphenyl Picryl Hydrazyl) and determine Landé’s g-factor of a free electron.',
      learningObjectives: [
        'Understand Zeeman splitting of unpaired electron spin states in a magnetic field.',
        'Observe microwave/RF resonance absorption when hν = g μ_B B.',
        'Calculate Landé g-factor and compare with Dirac theoretical value g ≈ 2.0023.'
      ],
      apparatus: [
        'ESR spectrometer basic unit with RF oscillator probe (10 MHz – 20 MHz)',
        'DPPH free-radical sample tube',
        'Pair of Helmholtz coils to produce variable DC magnetic field with 50 Hz modulation',
        'Dual-trace Oscilloscope'
      ],
      theory: {
        en: 'An unpaired electron has intrinsic spin angular momentum S = 1/2 with two magnetic dipole states (m_s = ±1/2). In an external magnetic field B, these states split by the Zeeman effect: ΔE = g μ_B B, where μ_B = eℏ / (2m) is the Bohr magneton. When radiofrequency radiation of frequency ν satisfies the resonance condition hν = g μ_B B, photons are absorbed, triggering spin flips. Measuring resonance field B for various frequencies ν allows determination of the Landé g-factor: g = (h ν) / (μ_B B).',
        hinglish: 'Unpaired electron ka spin magnetic field me do energy levels me split ho jata hai (Zeeman effect). Jab aane wali RF wave ki frequency hν = g μ_B B se match karti hai toh electron energy absorb karke spin flip karta hai. Is absorption peak se Landé g-factor nikalte hain.',
        hi: 'चुंबकीय क्षेत्र में अयुग्मित इलेक्ट्रॉन के चक्रण ऊर्जा स्तर विभक्त हो जाते हैं। अनुनाद शर्त hν = g μ_B B पर अवशोषण शिखर प्राप्त होता है जिससे लांडे g-गुणांक ज्ञात किया जाता है।'
      },
      equations: [
        { formula: 'h\\nu = g \\mu_B B', symbolDefs: 'Resonance condition (h = Planck const, μ_B = Bohr magneton = 9.274 × 10^-24 J/T)' },
        { formula: 'g = \\frac{h \\nu}{\\mu_B B}', symbolDefs: 'Landé g-factor formula' }
      ],
      diagramDescription: 'DPPH sample located inside RF tank coil between Helmholtz coils, connected to an oscilloscope displaying symmetrical absorption resonance dips.',
      safetyPrecautions: [
        'Do not drop the fragile DPPH sealed glass ampoule.',
        'Avoid high RF levels to prevent sample heating.'
      ],
      procedure: [
        '1. Insert the DPPH sample into the RF oscillator coil.',
        '2. Set the RF frequency to ν = 15.0 MHz.',
        '3. Switch on the oscilloscope in X-Y mode and gradually increase the DC current to the Helmholtz coils.',
        '4. Observe the two resonance absorption peaks on the screen and adjust phase to make them coincide symmetrically.',
        '5. Record the coil current at resonance, determine the resonant magnetic field B, and calculate g.',
        '6. Repeat at frequencies 12.0 MHz, 14.0 MHz, 16.0 MHz, and 18.0 MHz.'
      ],
      simulationType: 'esr-spectrometer',
      defaultParams: {
        rfFrequency: 15.0, // MHz
        helmholtzCurrent: 0.65
      },
      observationColumns: [
        { key: 'freqNu', label: 'RF Frequency (ν)', unit: 'MHz' },
        { key: 'currentI', label: 'Resonant Current (I)', unit: 'A' },
        { key: 'fieldB', label: 'Resonant Magnetic Field (B)', unit: 'Gauss' },
        { key: 'gFactor', label: 'Calculated Landé g-factor', unit: 'Dimensionless' }
      ],
      sampleObservations: [
        { freqNu: 12.0, currentI: 0.36, fieldB: 4.28, gFactor: 2.00 },
        { freqNu: 14.0, currentI: 0.42, fieldB: 4.99, gFactor: 2.00 },
        { freqNu: 16.0, currentI: 0.48, fieldB: 5.71, gFactor: 2.00 },
        { freqNu: 18.0, currentI: 0.54, fieldB: 6.42, gFactor: 2.00 }
      ],
      calculationGuide: 'For ν = 15.0 MHz and B = 5.35 Gauss = 5.35 × 10^-4 T: g = (6.626 × 10^-34 × 15 × 10^6) / (9.274 × 10^-24 × 5.35 × 10^-4) = (9.939 × 10^-27) / (4.962 × 10^-27) = 2.003.',
      resultInterpretation: 'Experimental Landé g-factor g = 2.003 is in outstanding agreement with the theoretical QED value for a free electron g = 2.0023.',
      sourcesOfError: [
        'Calibration inaccuracy of the Helmholtz coil field factor.',
        '50 Hz AC phase shift between X and Y channels on the oscilloscope.'
      ],
      vivaQuestions: [
        { question: 'Why is DPPH used as a standard reference sample in ESR experiments?', answer: 'DPPH (Diphenyl Picryl Hydrazyl) is a stable organic solid possessing one completely free, uncoupled electron per molecule with negligible spin-orbit coupling, yielding an exceptionally sharp and reproducible ESR resonance peak at g = 2.0036.' }
      ],
      revisionQuiz: [
        {
          id: 'phy-lab-q9',
          question: {
            en: 'What quantum mechanical property is directly probed in an ESR experiment?',
            hinglish: 'ESR experiment me electron ki kaun si quantum property directly probe ki jaati hai?',
            hi: 'ESR प्रयोग में इलेक्ट्रॉन के किस क्वांटम गुण का प्रत्यक्ष परीक्षण किया जाता है?'
          },
          options: ['Electron spin angular momentum and magnetic moment', 'Nuclear charge', 'Atomic mass number', 'Valence electron bonding'],
          correctIndex: 0,
          explanation: {
            en: 'ESR measures the transition between electron spin magnetic dipole moments (Zeeman sublevels) excited by resonance electromagnetic radiation.',
            hinglish: 'ESR electron ke intrinsic spin aur magnetic moment ko measure karta hai.',
            hi: 'ESR इलेक्ट्रॉन के आंतरिक चक्रण चुंबकीय आघूर्ण और जीमान स्तरों के मध्य संक्रमण को मापता है।'
          },
          hint: {
            en: 'The name is Electron SPIN Resonance.',
            hinglish: 'Naam me hi Spin hai.',
            hi: 'नाम में ही चक्रण (Spin) निहित है।'
          }
        }
      ]
    },
    {
      id: 'phy-lab-10',
      expNumber: 10,
      title: 'Determination of He-Ne Laser Wavelength using Diffraction Grating',
      aim: 'To determine the wavelength of He-Ne laser light using a transmission plane diffraction grating.',
      learningObjectives: [
        'Understand N-slit Fraunhofer diffraction by a plane transmission grating.',
        'Measure diffraction angles for multiple orders (n = 1, 2, 3).',
        'Verify grating equation (a + b) sin(θ) = nλ.'
      ],
      apparatus: [
        'He-Ne laser (λ = 632.8 nm)',
        'Diffraction grating (15,000 lines/inch or 600 lines/mm)',
        'Optical rail, grating holder, and flat screen at distance D = 1.0 m',
        'Measuring scale'
      ],
      theory: {
        en: 'A diffraction grating consists of a large number N of closely spaced parallel transparent slits separated by opaque lines. The grating element is d = (a + b) = 1/N. When monochromatic laser light shines normally on the grating, constructive interference between wavelets from all slits occurs at angles θ satisfying: (a + b) sin(θ) = nλ, where n is the diffraction order (1, 2, 3...). Measuring the spot distance x_n on the screen at distance D gives tan(θ) = x_n / D ⇒ sin(θ) = x_n / √(D² + x_n²). Wavelength is calculated as λ = [(a + b) sin(θ)] / n.',
        hinglish: 'Diffraction grating me hazaron barik slits hoti hain. Grating element d = 1/N hota hai. Formula (a + b) sin θ = nλ hota hai. Screen par central spot se n-th order ke spot ki doori naap kar laser ki wavelength λ nikaali jaati hai.',
        hi: 'समतल विवर्तन ग्रेटिंग में (a + b) sin(θ) = nλ समीकरण का उपयोग कर विभिन्न कोटियों के विवर्तन कोण मापकर लेजर की तरंगदैर्ध्य ज्ञात की जाती है।'
      },
      equations: [
        { formula: '(a + b) \\sin(\\theta_n) = n\\lambda', symbolDefs: 'Grating equation (a+b = grating element = 1/N, n = order)' },
        { formula: '\\sin(\\theta_n) = \\frac{x_n}{\\sqrt{D^2 + x_n^2}}', symbolDefs: 'Angle calculation from screen geometry' }
      ],
      diagramDescription: 'Laser beam passing normally through a vertical grating, projecting bright, discrete diffraction spots on a horizontal scale at distance D.',
      safetyPrecautions: [
        'Do not touch the delicate ruled surface of the optical grating.',
        'Ensure the laser beam is precisely normal (perpendicular) to the grating surface.'
      ],
      procedure: [
        '1. Mount the diffraction grating (e.g., 600 lines/mm) on the holder perpendicular to the laser beam.',
        '2. Set the screen at distance D = 1.0 m.',
        '3. Identify the central direct beam (0th order, n = 0) and the symmetric first-order (n = 1) and second-order (n = 2) bright spots on both sides.',
        '4. Measure the distance 2x_1 between left and right first-order spots to eliminate alignment error: x_1 = 2x_1 / 2.',
        '5. Calculate sin(θ_1) and wavelength λ. Repeat for second order (n = 2).'
      ],
      simulationType: 'grating-diffraction',
      defaultParams: {
        gratingLines: 600, // lines/mm
        laserWavelength: 632.8, // nm
        screenDist: 1.0 // m
      },
      observationColumns: [
        { key: 'order', label: 'Order (n)', unit: '' },
        { key: 'dist2x', label: 'Total Span 2x', unit: 'cm' },
        { key: 'distX', label: 'Distance x', unit: 'cm' },
        { key: 'sinTheta', label: 'sin(θ)', unit: '' },
        { key: 'lambda', label: 'Wavelength (λ)', unit: 'nm' }
      ],
      sampleObservations: [
        { order: 1, dist2x: 78.4, distX: 39.2, sinTheta: 0.3797, lambda: 632.8 },
        { order: 2, dist2x: 187.2, distX: 93.6, sinTheta: 0.7593, lambda: 632.7 }
      ],
      calculationGuide: 'Grating element d = (a + b) = 1 mm / 600 = 1.6667 × 10^-6 m. For n = 1: sin(θ_1) = 0.3797 ⇒ λ = (1.6667 × 10^-6 × 0.3797) / 1 = 6.328 × 10^-7 m = 632.8 nm.',
      resultInterpretation: 'Calculated wavelength of the He-Ne laser is 632.8 nm, in perfect agreement with standard scientific value.',
      sourcesOfError: [
        'Grating not mounted strictly perpendicular to incident laser beam.',
        'Error in measuring screen distance D.'
      ],
      vivaQuestions: [
        { question: 'What is the maximum number of diffraction orders observable with a given grating?', answer: 'Since sin(θ) cannot exceed 1, the maximum order n_max is the largest integer less than or equal to (a + b) / λ.' }
      ],
      revisionQuiz: [
        {
          id: 'phy-lab-q10',
          question: {
            en: 'What is the grating element (a + b) of a grating having 15,000 lines per inch?',
            hinglish: '15,000 lines per inch wali grating ka grating element (a + b) kitna hota hai?',
            hi: '15,000 रेखाएं प्रति इंच वाली ग्रेटिंग का ग्रेटिंग तत्व (a + b) क्या होगा?'
          },
          options: ['2.54 cm / 15,000 = 1.693 × 10^-4 cm', '15,000 cm', '1 / 15,000 mm', '2.54 × 15,000 cm'],
          correctIndex: 0,
          explanation: {
            en: '1 inch = 2.54 cm. Grating element is the reciprocal of lines per unit length: (a + b) = 2.54 cm / 15,000 = 1.693 × 10^-4 cm = 1.693 μm.',
            hinglish: '1 inch = 2.54 cm hota hai. (a + b) = 2.54 / 15,000 = 1.693 × 10^-4 cm.',
            hi: '1 इंच = 2.54 सेमी होता है, अतः (a + b) = 2.54 / 15,000 = 1.693 × 10^-4 सेमी।'
          },
          hint: {
            en: 'Convert inches to centimeters first (1 inch = 2.54 cm).',
            hinglish: '1 inch me 2.54 cm hote hain.',
            hi: '1 इंच = 2.54 सेमी।'
          }
        }
      ]
    },
    {
      id: 'phy-lab-11',
      expNumber: 11,
      title: 'Millikan’s Oil Drop Experiment: Measurement of Elementary Charge (e)',
      aim: 'To measure the terminal velocity of microscopic charged oil droplets under gravity and electric fields, and determine the elementary electronic charge e.',
      learningObjectives: [
        'Apply Stokes’ law for viscous drag force on microscopic spheres falling through air.',
        'Balance gravitational force, buoyant force, and electrostatic force (qE).',
        'Demonstrate that electric charge is quantized in integer multiples of e ≈ 1.6 × 10^-19 C.'
      ],
      apparatus: [
        'Millikan oil drop chamber with parallel capacitor plates',
        'Atomizer with non-volatile oil (density ρ = 875 kg/m³)',
        'High-voltage DC power supply (0 - 500 V) with reversing switch',
        'Measuring microscope with calibrated reticle scale',
        'Halogen illumination lamp and digital stopwatch'
      ],
      theory: {
        en: 'A tiny oil drop falling under gravity reaches terminal velocity v_1 when downward gravitational force balances upward viscous drag: (4/3)π r³ (ρ - σ) g = 6πηr v_1. This allows calculating the droplet radius r = √[9η v_1 / (2(ρ - σ)g)]. When an electric field E = V/d is switched on, the upward electrostatic force qE opposes gravity, causing the drop to rise with terminal velocity v_2: qE - (4/3)π r³ (ρ - σ) g = 6πηr v_2 ⇒ q = [6πηr (v_1 + v_2)] / E. Calculating charge q for dozens of drops proves that every charge is an exact integer multiple: q = n · e, where e = 1.602 × 10^-19 C.',
        hinglish: 'Millikan experiment me oil drop hawa me terminal velocity v_1 se girti hai (Stokes law: F = 6πηrv). Jab voltage on karte hain toh electric force qE drop ko upar kheenchti hai speed v_2 se. In dono speeds se drop ka charge q nikaalte hain. Har drop ka charge 1.6 × 10^-19 C ka integer multiple (ne) nikalta hai, jisse charge quantization prove hua.',
        hi: 'मिलिकन के तेल की बूंद प्रयोग में श्यान बल (स्टोक्स नियम) और विद्युत बल को संतुलित करके बूंद का आवेश q ज्ञात किया जाता है। सभी आवेश e = 1.6 × 10^-19 C के पूर्ण गुणज पाए जाते हैं।'
      },
      equations: [
        { formula: 'r = \\sqrt{\\frac{9\\eta v_1}{2(\\rho - \\sigma)g}}', symbolDefs: 'Droplet radius from terminal fall velocity' },
        { formula: 'q = \\frac{6\\pi \\eta r (v_1 + v_2) d}{V}', symbolDefs: 'Charge on the oil droplet (d = plate gap, V = voltage)' }
      ],
      diagramDescription: 'Two horizontal condenser plates with an atomiser spraying droplets into a viewing chamber illuminated by an intense horizontal light beam.',
      safetyPrecautions: [
        'Condenser plates carry up to 500 V DC; do not touch high-voltage terminals.',
        'Use heat-absorbing glass filter to prevent convection air currents in the chamber.'
      ],
      procedure: [
        '1. Spray a mist of oil droplets into the chamber using the atomizer.',
        '2. Look through the microscope and locate a clearly visible pinpoint of light (an illuminated drop).',
        '3. With electric field OFF, measure the time t_1 for the drop to fall a distance of 1.0 mm between reticle lines to calculate v_1 = 1.0 mm / t_1.',
        '4. Switch ON the electric field (V = 300 V). If the drop rises, measure the rise time t_2 over the same 1.0 mm distance to get v_2 = 1.0 mm / t_2.',
        '5. Calculate radius r and charge q. Repeat for multiple drops to find the greatest common divisor e.'
      ],
      simulationType: 'millikan-oil',
      defaultParams: {
        plateVoltage: 300, // V
        plateDistance: 5.0, // mm
        oilDensity: 875 // kg/m^3
      },
      observationColumns: [
        { key: 'dropNo', label: 'Drop #', unit: '' },
        { key: 'fallTime', label: 'Fall Time t_1', unit: 's' },
        { key: 'riseTime', label: 'Rise Time t_2', unit: 's' },
        { key: 'chargeQ', label: 'Calculated Charge (q)', unit: '×10^-19 C' },
        { key: 'nElectrons', label: 'Integer n (q / e)', unit: 'Integer' }
      ],
      sampleObservations: [
        { dropNo: 1, fallTime: 18.2, riseTime: 14.5, chargeQ: 3.21, nElectrons: 2 },
        { dropNo: 2, fallTime: 22.0, riseTime: 9.8, chargeQ: 4.82, nElectrons: 3 },
        { dropNo: 3, fallTime: 15.4, riseTime: 24.1, chargeQ: 1.61, nElectrons: 1 },
        { dropNo: 4, fallTime: 19.8, riseTime: 11.2, chargeQ: 6.41, nElectrons: 4 }
      ],
      calculationGuide: 'Comparing charges: q_1 ≈ 2e, q_2 ≈ 3e, q_3 ≈ 1e, q_4 ≈ 4e. Greatest Common Divisor e = 1.604 × 10^-19 C.',
      resultInterpretation: 'Every measured droplet carried a charge that was an integer multiple of e = 1.60 × 10^-19 C, conclusively proving that electric charge is quantized.',
      sourcesOfError: [
        'Brownian motion of tiny droplets causing random trajectory wobbles.',
        'Stokes’ law assumes a continuous medium; Cunningham slip-flow correction factor must be applied for drops < 1 μm.'
      ],
      vivaQuestions: [
        { question: 'What does "Quantization of Charge" mean?', answer: 'It means electric charge cannot exist in arbitrary continuous quantities; it only exists as discrete packets that are integer multiples of the fundamental elementary charge e (q = ±n·e, where n = 1, 2, 3...).' }
      ],
      revisionQuiz: [
        {
          id: 'phy-lab-q11',
          question: {
            en: 'In Millikan’s oil drop experiment, which force balances gravity during the free unpowered fall of a drop?',
            hinglish: 'Millikan experiment me free fall ke time gravity ko kaun sa force balance karta hai?',
            hi: 'मिलिकन प्रयोग में मुक्त पतन के समय गुरुत्वाकर्षण को कौन-सा बल संतुलित करता है?'
          },
          options: ['Viscous drag force of air (Stokes’ Law: 6πηrv)', 'Magnetic Lorentz force', 'Nuclear force', 'Centrifugal force'],
          correctIndex: 0,
          explanation: {
            en: 'During free fall without electric fields, the downward gravitational force is balanced by the upward viscous drag force given by Stokes’ law (F = 6πηrv) plus minor buoyancy.',
            hinglish: 'Free fall ke dauran hawa ka viscous drag force (Stokes law 6πηrv) gravity ko balance karta hai jisse terminal velocity aati hai.',
            hi: 'मुक्त पतन के समय स्टोक्स के नियमानुसार वायु का श्यान घर्षण बल गुरुत्वाकर्षण को संतुलित करता है।'
          },
          hint: {
            en: 'Stokes’ Law for spheres moving in fluids.',
            hinglish: 'Stokes law yaad karo.',
            hi: 'स्टोक्स का नियम।'
          }
        }
      ]
    },
    {
      id: 'phy-lab-12',
      expNumber: 12,
      title: 'Numerical Solution of 1D Schrödinger Equation for Harmonic Potential using C & Python',
      aim: 'To numerically solve the time-independent 1D Schrödinger equation (-ℏ²/2m d²ψ/dx² + V(x)ψ = Eψ) for a quantum harmonic oscillator potential V(x) = (1/2)mω²x² using the Numerov / Finite Difference algorithm.',
      learningObjectives: [
        'Convert second-order differential equation into finite-difference matrix representation.',
        'Implement the shooting / Numerov algorithm in C and Python.',
        'Compute discrete bound-state energy eigenvalues E_n = (n + 1/2)ℏω and plot wavefunctions ψ_n(x).'
      ],
      apparatus: [
        'PC workstation with GCC C compiler and Python (NumPy, SciPy, Matplotlib)',
        'Code editor and terminal'
      ],
      theory: {
        en: 'The one-dimensional time-independent Schrödinger equation is d²ψ/dx² = [2m/ℏ² (V(x) - E)] ψ. For a harmonic potential V(x) = 1/2 mω²x², analytical solutions are Hermite polynomials with equispaced energy eigenvalues E_n = (n + 1/2)ℏω (n = 0, 1, 2...). Numerically, using finite differences with grid spacing Δx = h: d²ψ/dx² ≈ [ψ(x + h) - 2ψ(x) + ψ(x - h)] / h². The problem transforms into finding eigenvalues of a tridiagonal Hamiltonian matrix.',
        hinglish: 'Schrödinger equation d²ψ/dx² = [2m/ℏ² (V(x) - E)] ψ ko computer program se solve karte hain. Harmonic oscillator ke liye potential V(x) = 1/2 k x² parabolic hota hai. Finite difference method se Hamiltonian matrix banakar eigenvalues nikaalte hain jo E_n = (n + 1/2)ℏω aate hain.',
        hi: 'समय-अनाश्रित 1D श्रोडिंगर समीकरण को परिमित अंतर (Finite Difference) विधि द्वारा हल करके क्वांटम आवर्ती दोलक के ऊर्जा मान E_n = (n + 1/2)ℏω प्राप्त किए जाते हैं।'
      },
      equations: [
        { formula: '-\\frac{\\hbar^2}{2m} \\frac{d^2\\psi}{dx^2} + \\frac{1}{2}m\\omega^2 x^2 \\psi(x) = E\\psi(x)', symbolDefs: 'Time-independent Schrödinger equation' },
        { formula: 'E_n = \\left(n + \\frac{1}{2}\\right)\\hbar\\omega \\quad (n = 0, 1, 2, \\dots)', symbolDefs: 'Equispaced discrete energy eigenvalues' }
      ],
      diagramDescription: 'Parabolic potential well V(x) with discrete horizontal energy rungs E_0 = 0.5ℏω, E_1 = 1.5ℏω, E_2 = 2.5ℏω, and overlaid oscillating wavefunctions ψ_n(x).',
      safetyPrecautions: [
        'Ensure correct boundary conditions: wavefunction ψ(x) must decay to 0 as |x| → ∞.',
        'Choose sufficiently small grid step h = 0.01 to avoid numerical instability.'
      ],
      procedure: [
        '1. Define dimensionless spatial coordinate ξ = x / x_0 where x_0 = √(ℏ/mω).',
        '2. Set up a 1D grid from ξ_min = -5.0 to ξ_max = +5.0 with N = 1000 intervals (h = 0.01).',
        '3. Construct the discretized Hamiltonian matrix H with diagonal elements H_ii = 1/h² + V(x_i) and off-diagonal elements H_{i, i±1} = -1/(2h²).',
        '4. Diagonalize matrix H in Python using `scipy.linalg.eigh` or in C using QR algorithm.',
        '5. Extract the first four lowest eigenvalues E_0, E_1, E_2, E_3 and plot normalized wavefunctions.'
      ],
      simulationType: 'schrodinger-solver',
      defaultParams: {
        quantumN: 0, // Ground state
        potentialType: 1 // Harmonic Oscillator
      },
      observationColumns: [
        { key: 'quantumState', label: 'Quantum State (n)', unit: '' },
        { key: 'theoryE', label: 'Theoretical E_n (ℏω)', unit: 'ℏω' },
        { key: 'computedE', label: 'Numerical E_n (C/Python)', unit: 'ℏω' },
        { key: 'errorPercent', label: 'Relative Error', unit: '%' }
      ],
      sampleObservations: [
        { quantumState: 0, theoryE: 0.5000, computedE: 0.5002, errorPercent: 0.04 },
        { quantumState: 1, theoryE: 1.5000, computedE: 1.5006, errorPercent: 0.04 },
        { quantumState: 2, theoryE: 2.5000, computedE: 2.5012, errorPercent: 0.05 },
        { quantumState: 3, theoryE: 3.5000, computedE: 3.5019, errorPercent: 0.05 }
      ],
      calculationGuide: 'Python script snippet: \n```python\nimport numpy as np, scipy.linalg as la\nN, L = 1000, 10.0\nx = np.linspace(-L/2, L/2, N)\nh = x[1] - x[0]\nV = 0.5 * x**2\nT = (-0.5 / h**2) * (np.diag(-2*np.ones(N)) + np.diag(np.ones(N-1), 1) + np.diag(np.ones(N-1), -1))\nH = T + np.diag(V)\nvals, vecs = la.eigh(H)\nprint("E0, E1, E2:", vals[:3])\n```',
      resultInterpretation: 'Numerical eigenvalues yield E_0 = 0.5002 ℏω, E_1 = 1.5006 ℏω, confirming zero-point energy E_0 = (1/2)ℏω and equispaced quantum levels ΔE = ℏω with <0.05% numerical error.',
      sourcesOfError: [
        'Finite grid boundary truncation error (truncating space at |x| = 5 rather than true infinity).',
        'Finite difference discretization error O(h²).'
      ],
      vivaQuestions: [
        { question: 'Why can the ground-state energy of a quantum harmonic oscillator never be zero?', answer: 'Due to Heisenberg’s Uncertainty Principle. If energy were zero, the particle would sit completely motionless (p = 0) at the exact bottom of the well (x = 0), meaning Δx = 0 and Δp = 0, which violates Δx · Δp ≥ ℏ/2. Hence, a non-zero zero-point energy E_0 = (1/2)ℏω is fundamentally mandatory.' }
      ],
      revisionQuiz: [
        {
          id: 'phy-lab-q12',
          question: {
            en: 'What is the Zero-Point Energy of a one-dimensional quantum harmonic oscillator of frequency ω?',
            hinglish: '1D quantum harmonic oscillator ki Zero-Point Energy kitni hoti hai?',
            hi: 'एकविमीय क्वांटम आवर्ती दोलक की शून्य-बिंदु ऊर्जा (Zero-Point Energy) कितनी होती है?'
          },
          options: ['E_0 = (1/2) ℏω', 'E_0 = 0', 'E_0 = ℏω', 'E_0 = 2 ℏω'],
          correctIndex: 0,
          explanation: {
            en: 'Substituting quantum number n = 0 into E_n = (n + 1/2)ℏω yields the non-zero ground state energy E_0 = (1/2)ℏω.',
            hinglish: 'Formula E_n = (n + 1/2)ℏω me n = 0 rakhne par E_0 = (1/2)ℏω aata hai.',
            hi: 'सूत्र E_n = (n + 1/2)ℏω में n = 0 रखने पर न्यूनतम ऊर्जा E_0 = (1/2)ℏω प्राप्त होती है।'
          },
          hint: {
            en: 'Put n = 0 in E_n = (n + 1/2)ℏω.',
            hinglish: 'n = 0 rakho.',
            hi: 'n = 0 रखें।'
          }
        }
      ]
    }
  ],
  examQuestions: [
    {
      id: 'phy-lab-eq1',
      unitNumber: 'Experiment 1',
      type: 'Viva',
      marks: 5,
      question: 'What is the condition of resonance in an LCR circuit and how is Q-factor related to bandwidth?',
      solution: 'Resonance condition: X_L = X_C ⇒ ωL = 1/(ωC) ⇒ f_0 = 1 / (2π√(LC)).\nAt series resonance, impedance is purely resistive and minimum Z = R, resulting in maximum current.\nQ-factor is the ratio of resonant frequency to bandwidth: Q = f_0 / (f_2 - f_1) = (ω_0 L) / R. A higher Q-factor indicates a narrower bandwidth and sharper selectivity.'
    },
    {
      id: 'phy-lab-eq2',
      unitNumber: 'Experiment 4',
      type: 'Viva',
      marks: 5,
      question: 'In Thomson’s method for e/m determination, why is it necessary to balance both electric and magnetic fields?',
      solution: 'Balancing electric and magnetic forces (eE = evB) allows direct determination of the electron beam velocity v = E/B without needing to measure travel time directly. Substituting this known velocity into kinetic energy (1/2)mv² = eV yields e/m = E² / (2VB²).'
    },
    {
      id: 'phy-lab-eq3',
      unitNumber: 'Experiment 7',
      type: 'Viva',
      marks: 5,
      question: 'How does Einstein’s explanation of the photoelectric effect refute classical wave theory?',
      solution: '1. Classical theory predicted that electron kinetic energy would increase with light intensity; experiment showed kinetic energy depends only on frequency.\n2. Classical theory predicted a significant time delay (~hours) for faint light to deliver enough energy; experiment showed instantaneous emission (<10^-9 s).\n3. Classical theory could not explain the existence of a sharp threshold frequency ν_0 below which no electrons are emitted regardless of intensity.'
    }
  ]
};
