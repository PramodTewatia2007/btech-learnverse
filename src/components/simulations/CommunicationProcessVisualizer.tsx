import React, { useState } from 'react';
import { 
  Radio, 
  VolumeX, 
  Volume2, 
  Sparkles, 
  ArrowRight, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle,
  Send,
  UserCheck,
  MessageSquare,
  ShieldAlert
} from 'lucide-react';

export const CommunicationProcessVisualizer: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [noiseLevel, setNoiseLevel] = useState<number>(20); // 0 to 100%
  const [activeScenario, setActiveScenario] = useState<'classroom' | 'interview' | 'workplace'>('classroom');

  const stages = [
    { name: '1. Sender', role: 'Source of the Idea', desc: 'The person initiating communication with a thought, objective, or information to share.' },
    { name: '2. Encoding', role: 'Converting Thought to Code', desc: 'Translating internal thoughts into symbolic form: words, diagrams, body language, or gestures.' },
    { name: '3. Message', role: 'The Physical Output', desc: 'The actual verbal utterance, written email, or visual report containing the encoded idea.' },
    { name: '4. Channel', role: 'Transmission Medium', desc: 'Air soundwaves, telephone cable, email server, or face-to-face video stream carrying the signal.' },
    { name: '5. Receiver', role: 'The Intended Audience', desc: 'The person or group receiving the physical sensory stimulus through hearing or reading.' },
    { name: '6. Decoding', role: 'Interpreting Meaning', desc: 'The mental process where the receiver assigns meaning to the symbols based on their own background.' },
    { name: '7. Feedback', role: 'Loop Completion', desc: 'The receiver’s response (nod, answer, confirmation) proving whether understanding occurred.' }
  ];

  const scenarios = {
    classroom: {
      title: 'Classroom Lecture Scenario',
      sender: 'Professor explains Kirchhoff’s Voltage Law (KVL)',
      message: '"Sum of potential drops around a closed loop is zero."',
      channel: 'Acoustic soundwaves in college lecture hall',
      noiseExample: 'Backbench chatter, ceiling fan squeaking, student mental fatigue',
      feedback: 'Student raises hand: "Sir, do we take clockwise or anticlockwise signs?"'
    },
    interview: {
      title: 'Campus Placement Interview',
      sender: 'Candidate introduces final year technical project',
      message: '"I implemented an ESP32 IoT node with MQTT telemetry to Firebase."',
      channel: 'Face-to-face interview room or Google Meet video stream',
      noiseExample: 'Microphone packet loss, candidate nervousness, rapid speech speed',
      feedback: 'Interviewer nods and asks: "What was your latency over 4G?"'
    },
    workplace: {
      title: 'Engineering Workplace Email',
      sender: 'Project Lead assigns sprint deliverables',
      message: '"Please submit the thermal simulation reports before 5 PM Friday."',
      channel: 'Corporate Outlook email and PDF attachment',
      noiseExample: 'Ambiguous subject line, spam filter delay, technical jargon differences',
      feedback: 'Engineer replies: "Reports submitted on shared drive."'
    }
  };

  const currentScen = scenarios[activeScenario];
  const isHighNoise = noiseLevel > 50;

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl text-white">
      {/* Header */}
      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-rose-400" />
          <span className="font-semibold text-sm sm:text-base text-slate-100">
            Interactive Communication Process & Noise Model
          </span>
        </div>

        {/* Scenario Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          {(['classroom', 'interview', 'workplace'] as const).map(scen => (
            <button
              key={scen}
              onClick={() => setActiveScenario(scen)}
              className={`px-3 py-1 rounded-lg transition-all font-medium capitalize ${
                activeScenario === scen ? 'bg-rose-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              {scen}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-6 bg-slate-950 space-y-6">
        {/* Visual Process Stages Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {stages.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`p-3 rounded-xl border text-left transition-all ${
                activeStage === idx
                  ? 'bg-rose-600/20 border-rose-500 text-rose-200 ring-1 ring-rose-500 shadow-md'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="font-bold text-xs text-white">{st.name}</div>
              <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">{st.role}</div>
            </button>
          ))}
        </div>

        {/* Selected Stage Detail & Scenario Trace */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: Stage Theoretical Role */}
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
              Stage Focus: {stages[activeStage].name}
            </div>
            <div className="font-bold text-sm text-white">{stages[activeStage].role}</div>
            <p className="text-xs text-slate-300 leading-relaxed">{stages[activeStage].desc}</p>
          </div>

          {/* Right: Live Scenario Demonstration */}
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {currentScen.title} in Action
            </div>
            <div className="text-xs text-slate-300">
              <strong className="text-slate-200">Sender Action: </strong>{currentScen.sender}
            </div>
            <div className="text-xs text-slate-300">
              <strong className="text-slate-200">Encoded Message: </strong>
              <span className="italic text-cyan-300">{currentScen.message}</span>
            </div>
            <div className="text-xs text-slate-300">
              <strong className="text-slate-200">Feedback Received: </strong>
              <span className="text-emerald-300">{currentScen.feedback}</span>
            </div>
          </div>
        </div>

        {/* Noise Slider & Interference Simulation */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Radio className="w-4 h-4 text-amber-400" />
              <span>Channel Noise & Communication Barriers ({noiseLevel}%)</span>
            </span>
            <span className={`font-mono font-bold ${isHighNoise ? 'text-rose-400' : 'text-emerald-400'}`}>
              {isHighNoise ? '⚠️ Severe Distortion / Misunderstanding' : '✓ Clean High-Fidelity Signal'}
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={noiseLevel}
            onChange={(e) => setNoiseLevel(Number(e.target.value))}
            className="w-full accent-rose-500 cursor-pointer"
          />

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Active Barrier Example: </strong>
              {currentScen.noiseExample}. 
              {isHighNoise ? (
                <span className="text-rose-300 block mt-0.5">
                  Result: Decoding fails! Receiver misunderstands deadline or technical values due to noise.
                </span>
              ) : (
                <span className="text-emerald-300 block mt-0.5">
                  Result: Effective transmission. Receiver decodes with accurate intended meaning and returns positive feedback.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 7 Cs of Effective Communication */}
        <div className="space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            The 7 C's of Effective Communication
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {[
              { c: 'Clear', tip: 'Unambiguous purpose' },
              { c: 'Concise', tip: 'No filler words' },
              { c: 'Concrete', tip: 'Facts & data' },
              { c: 'Correct', tip: 'Accurate syntax & facts' },
              { c: 'Coherent', tip: 'Logical flow' },
              { c: 'Complete', tip: 'All required info' },
              { c: 'Courteous', tip: 'Polite & respectful' }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center">
                <div className="font-bold text-xs text-rose-300">{item.c}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{item.tip}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
