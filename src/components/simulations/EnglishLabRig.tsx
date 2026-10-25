import React, { useState } from 'react';
import { 
  Headphones, 
  MessageSquare, 
  FileText, 
  UserCheck, 
  Users, 
  Presentation, 
  Handshake, 
  Mail, 
  Mic, 
  Play, 
  Pause, 
  Volume2, 
  CheckCircle2, 
  AlertTriangle,
  Send,
  RotateCcw
} from 'lucide-react';

interface EnglishLabRigProps {
  activityNumber?: number;
  initialMode?: string;
}

export const EnglishLabRig: React.FC<EnglishLabRigProps> = ({
  activityNumber = 1
}) => {
  const [activeActivity, setActiveActivity] = useState<number>(activityNumber);

  // Activity 1: Situational Conversations State
  const [dialogueScenario, setDialogueScenario] = useState<'teacher' | 'interview' | 'classmate'>('teacher');
  const [dialogueChoice, setDialogueChoice] = useState<number | null>(null);

  // Activity 3: Resume Builder State
  const [resumeData, setResumeData] = useState({
    name: 'Rahul Sharma',
    degree: 'B.Tech in Computer Science & Engineering',
    skills: 'C, Python, Data Structures, Git, Circuit Simulation',
    project: 'IoT Automated Smart Energy Meter with Real-time Telemetry'
  });

  // Activity 8: Email Composer State
  const [emailSubject, setEmailSubject] = useState<string>('Request for Summer Internship — Department of Computer Science');
  const [emailGreeting, setEmailGreeting] = useState<string>('Respected Professor Dr. Verma,');
  const [emailTone, setEmailTone] = useState<'formal' | 'informal'>('formal');

  // Activity 9: Public Speaking Timer
  const [speechTimer, setSpeechTimer] = useState<number>(120); // 2 minutes
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  // TTS speak helper
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const activities = [
    { num: 1, name: '1. Situational Conversations', icon: MessageSquare },
    { num: 2, name: '2. Listening Skills', icon: Headphones },
    { num: 3, name: '3. Resume Writing', icon: FileText },
    { num: 4, name: '4. Mock Interviews', icon: UserCheck },
    { num: 5, name: '5. Group Discussion', icon: Users },
    { num: 6, name: '6. Presentation Skills', icon: Presentation },
    { num: 7, name: '7. Negotiation Skills', icon: Handshake },
    { num: 8, name: '8. Email Writing', icon: Mail },
    { num: 9, name: '9. Public Speaking', icon: Mic }
  ];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl text-white">
      {/* Top Header */}
      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Headphones className="w-5 h-5 text-fuchsia-400" />
          <span className="font-semibold text-sm sm:text-base text-slate-100">
            Interactive English Communication Skills Laboratory Rig
          </span>
        </div>

        <div className="text-xs text-fuchsia-300 font-mono">
          9 Prescribed Practical Activities
        </div>
      </div>

      {/* Activity Tabs */}
      <div className="p-3 bg-slate-950 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        {activities.map((act) => {
          const Icon = act.icon;
          return (
            <button
              key={act.num}
              onClick={() => setActiveActivity(act.num)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeActivity === act.num
                  ? 'bg-fuchsia-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{act.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Activity Workspace */}
      <div className="p-5 sm:p-6 bg-slate-950">
        {/* Activity 1: Situational Conversations */}
        {activeActivity === 1 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
                Situational Roleplay & Response Practice
              </div>
              <div className="flex gap-2">
                {(['teacher', 'interview', 'classmate'] as const).map(scen => (
                  <button
                    key={scen}
                    onClick={() => {
                      setDialogueScenario(scen);
                      setDialogueChoice(null);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium capitalize ${
                      dialogueScenario === scen ? 'bg-fuchsia-600 text-white' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    {scen}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-cyan-300">
                  {dialogueScenario === 'teacher' && 'Teacher: "Rahul, why was your laboratory report delayed yesterday?"'}
                  {dialogueScenario === 'interview' && 'Interviewer: "Tell me about a time you encountered a conflict in a group project."'}
                  {dialogueScenario === 'classmate' && 'Classmate: "Could you share the notes for yesterday’s calculus lecture?"'}
                </span>
                <button
                  onClick={() => speakText(
                    dialogueScenario === 'teacher' 
                      ? "Rahul, why was your laboratory report delayed yesterday?"
                      : dialogueScenario === 'interview'
                      ? "Tell me about a time you encountered a conflict in a group project."
                      : "Could you share the notes for yesterday's calculus lecture?"
                  )}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                  title="Listen"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Choices */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase">Choose the most professional response:</div>
                {[
                  dialogueScenario === 'teacher' 
                    ? '1. "Good morning sir. I apologize for the delay; my simulation software crashed during calculations, but I have resolved the errors and completed the manual today."'
                    : '1. "In my semester team project, two members disagreed on the database choice. I organized a comparative bench test, which objectively resolved the dispute."',
                  dialogueScenario === 'teacher'
                    ? '2. "Sir my computer had some issue so I could not do it on time."'
                    : '2. "I don\'t like conflicts, so I just did all the work myself instead of talking."'
                ].map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setDialogueChoice(i)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                      dialogueChoice === i
                        ? i === 0 
                          ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200' 
                          : 'bg-rose-950/80 border-rose-500 text-rose-200'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {dialogueChoice !== null && (
                <div className={`p-3 rounded-xl text-xs ${dialogueChoice === 0 ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-900' : 'bg-rose-950/40 text-rose-300 border border-rose-900'}`}>
                  {dialogueChoice === 0 ? (
                    <div>✓ <strong>Excellent: </strong>Respectful, takes ownership without making crude excuses, and provides an immediate solution!</div>
                  ) : (
                    <div>⚠️ <strong>Needs Improvement: </strong>Too casual or passive-aggressive. Avoid vague excuses in academic and workplace communication.</div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Activity 2: Listening Skills */}
        {activeActivity === 2 && (
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
              Active Listening & Note-Taking Demonstration
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-white">Audio Passage: "The Principle of Conservation of Energy"</div>
                  <div className="text-xs text-slate-400">Listen carefully and extract key numerical constants and principles.</div>
                </div>
                <button
                  onClick={() => speakText("Energy cannot be created or destroyed, only transformed from one form to another. In closed electrical networks, the algebraic sum of all potential drops and electromotive forces equals zero according to Kirchhoff's Voltage Law.")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold text-xs transition-all shadow"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Play Lecture Snippet</span>
                </button>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono">
                "Energy cannot be created or destroyed, only transformed from one form to another. In closed electrical networks, the algebraic sum of all potential drops and electromotive forces equals zero according to Kirchhoff's Voltage Law."
              </div>

              <div className="p-3 bg-fuchsia-950/20 border border-fuchsia-900/40 rounded-xl text-xs text-fuchsia-200">
                <strong>Cornell Note-Taking Tip: </strong>Divide your page into Cues (left column), Main Notes (right column), and 2-sentence Summary (bottom).
              </div>
            </div>
          </div>
        )}

        {/* Activity 3: Resume Writing */}
        {activeActivity === 3 && (
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
              Structured Engineering Resume Builder
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3 text-xs">
                <div className="space-y-1">
                  <label className="text-slate-400 font-semibold">Candidate Full Name:</label>
                  <input
                    type="text"
                    value={resumeData.name}
                    onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}
                    className="w-full bg-slate-950 p-2 rounded-lg border border-slate-800 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-400 font-semibold">Degree / Specialization:</label>
                  <input
                    type="text"
                    value={resumeData.degree}
                    onChange={(e) => setResumeData({ ...resumeData, degree: e.target.value })}
                    className="w-full bg-slate-950 p-2 rounded-lg border border-slate-800 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-400 font-semibold">Technical Skills:</label>
                  <input
                    type="text"
                    value={resumeData.skills}
                    onChange={(e) => setResumeData({ ...resumeData, skills: e.target.value })}
                    className="w-full bg-slate-950 p-2 rounded-lg border border-slate-800 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-400 font-semibold">Key Academic Project:</label>
                  <input
                    type="text"
                    value={resumeData.project}
                    onChange={(e) => setResumeData({ ...resumeData, project: e.target.value })}
                    className="w-full bg-slate-950 p-2 rounded-lg border border-slate-800 text-white"
                  />
                </div>
              </div>

              {/* Resume Sheet Preview */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-inner">
                <div className="border-b border-slate-800 pb-2">
                  <h3 className="font-bold text-base text-white">{resumeData.name}</h3>
                  <div className="text-xs text-indigo-400">{resumeData.degree}</div>
                </div>
                <div className="text-xs space-y-2">
                  <div>
                    <span className="font-bold text-slate-300 block uppercase text-[10px]">Technical Skills:</span>
                    <span className="text-slate-400">{resumeData.skills}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-300 block uppercase text-[10px]">Projects:</span>
                    <span className="text-slate-400">{resumeData.project}</span>
                  </div>
                </div>
                <div className="text-[10px] text-emerald-400 pt-2 border-t border-slate-800">
                  ✓ Clean single-column layout optimized for Applicant Tracking Systems (ATS).
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Activity 8: Email Writing */}
        {activeActivity === 8 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
                Professional Engineering Email Composer
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEmailTone('formal')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold ${emailTone === 'formal' ? 'bg-fuchsia-600 text-white' : 'bg-slate-900 text-slate-400'}`}
                >
                  Formal Email
                </button>
                <button
                  onClick={() => setEmailTone('informal')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold ${emailTone === 'informal' ? 'bg-fuchsia-600 text-white' : 'bg-slate-900 text-slate-400'}`}
                >
                  Informal Warning
                </button>
              </div>
            </div>

            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3 text-xs">
              <div className="space-y-1">
                <label className="text-slate-400 font-semibold">Subject Line (Must be specific & actionable):</label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-white font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-400 font-semibold">Salutation:</label>
                <input
                  type="text"
                  value={emailGreeting}
                  onChange={(e) => setEmailGreeting(e.target.value)}
                  className="w-full bg-slate-950 p-2 rounded-lg border border-slate-800 text-white"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 leading-relaxed font-mono">
                {emailTone === 'formal' ? (
                  `I am writing to respectfully inquire about undergraduate research opportunities in your laboratory for the upcoming summer semester. I have completed foundational coursework in algorithms and microcontrollers and attached my CV for your review.\n\nThank you for your valuable time and consideration.\n\nSincerely,\nRahul Sharma (Roll No: 24CS102)`
                ) : (
                  `Hey professor! send me internship details asap. thx.`
                )}
              </div>

              <div className={`p-2.5 rounded-xl text-xs ${emailTone === 'formal' ? 'bg-emerald-950/30 text-emerald-300 border border-emerald-900' : 'bg-rose-950/30 text-rose-300 border border-rose-900'}`}>
                {emailTone === 'formal' ? '✓ Professional Tone: Clear subject, polite salutation, concise purpose, formal sign-off.' : '⚠️ Avoid: Slang, missing salutations, all-lowercase text, and urgent demanding tones.'}
              </div>
            </div>
          </div>
        )}

        {/* Other Activities Fallback Display */}
        {[4, 5, 6, 7, 9].includes(activeActivity) && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="font-bold text-base text-white">
              {activities.find(a => a.num === activeActivity)?.name}
            </div>

            {activeActivity === 4 && (
              <div className="space-y-2 text-xs text-slate-300">
                <p>Simulated Campus Placement & Technical Mock Interview:</p>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">STAR Technique Guide:</strong>
                  <div><strong>S (Situation): </strong>Describe the context or technical challenge faced.</div>
                  <div><strong>T (Task): </strong>Explain your specific responsibility.</div>
                  <div><strong>A (Action): </strong>Describe the technical steps and engineering logic you applied.</div>
                  <div><strong>R (Result): </strong>Conclude with measurable outcomes (e.g. 20% speedup).</div>
                </div>
              </div>
            )}

            {activeActivity === 5 && (
              <div className="space-y-2 text-xs text-slate-300">
                <p>Group Discussion (GD) Participation Phrases:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <strong className="text-emerald-400 block mb-1">Initiating:</strong>
                    "Good morning everyone. Today we are gathered to discuss..."
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <strong className="text-amber-400 block mb-1">Disagreeing Respectfully:</strong>
                    "I see your point regarding cost, however we must also consider scalability..."
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <strong className="text-indigo-400 block mb-1">Summarizing:</strong>
                    "To consolidate our key points, our team agrees on two primary solutions..."
                  </div>
                </div>
              </div>
            )}

            {activeActivity === 6 && (
              <div className="space-y-2 text-xs text-slate-300">
                <p>Presentation Delivery Checklist:</p>
                <ul className="space-y-1 list-disc pl-4 text-slate-400">
                  <li><strong>Guy Kawasaki's 10/20/30 Rule: </strong>10 slides, 20 minutes maximum, 30 pt minimum font size.</li>
                  <li>Maintain 70% eye contact across all quadrants of the room.</li>
                  <li>Never read verbatim from the presentation slide text.</li>
                </ul>
              </div>
            )}

            {activeActivity === 7 && (
              <div className="space-y-2 text-xs text-slate-300">
                <p>Principled Workplace Negotiation (Harvard Negotiation Project):</p>
                <ul className="space-y-1 list-disc pl-4 text-slate-400">
                  <li>Separate the people from the problem.</li>
                  <li>Focus on underlying interests, not stubborn positional demands.</li>
                  <li>Invent mutually beneficial options for mutual gain.</li>
                  <li>Insist on objective criteria and data metrics.</li>
                </ul>
              </div>
            )}

            {activeActivity === 9 && (
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Public Speaking Practice Countdown Timer:</span>
                  <span className="font-mono font-bold text-lg text-fuchsia-400">{speechTimer} seconds</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      if (!timerRunning) {
                        const interval = setInterval(() => {
                          setSpeechTimer(t => {
                            if (t <= 1) {
                              clearInterval(interval);
                              return 0;
                            }
                            return t - 1;
                          });
                        }, 1000);
                      }
                      setTimerRunning(!timerRunning);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold text-xs transition-colors"
                  >
                    {timerRunning ? 'Pause Timer' : 'Start 2-Minute Speech'}
                  </button>
                  <button
                    onClick={() => {
                      setSpeechTimer(120);
                      setTimerRunning(false);
                    }}
                    className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
