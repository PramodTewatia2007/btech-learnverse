import React, { useState } from 'react';
import { Volume2, Mic, Play, CheckCircle2, Info, Headphones, Sparkles } from 'lucide-react';

interface PhonemeCard {
  symbol: string;
  name: string;
  exampleWords: string[];
  tip: string;
}

const PHONEMES: PhonemeCard[] = [
  { symbol: '/θ/', name: 'Voiceless Dental Fricative', exampleWords: ['Think', 'Theory', 'Math', 'Thermodynamics'], tip: 'Place tongue tip lightly between teeth, blow air without vibrating vocal cords.' },
  { symbol: '/ð/', name: 'Voiced Dental Fricative', exampleWords: ['This', 'Therefore', 'Although', 'Algorithm'], tip: 'Same mouth position as /θ/, but vibrate your vocal cords.' },
  { symbol: '/ʃ/', name: 'Voiceless Post-alveolar Fricative', exampleWords: ['Shear', 'Efficiency', 'Friction', 'Machine'], tip: 'Round your lips slightly, push air gently through teeth.' },
  { symbol: '/tʃ/', name: 'Voiceless Post-alveolar Affricate', exampleWords: ['Charge', 'Circuit', 'Switch', 'Structure'], tip: 'Combine /t/ stop with /ʃ/ release, like "ch" in chocolate.' },
  { symbol: '/dʒ/', name: 'Voiced Post-alveolar Affricate', exampleWords: ['Joule', 'Bridge', 'Logic', 'Engine'], tip: 'Voiced counterpart to /tʃ/, like "j" in jump.' },
  { symbol: '/ŋ/', name: 'Velar Nasal', exampleWords: ['Ring', 'Spring', 'Engineering', 'Coding'], tip: 'Back of tongue touches soft palate; sound resonates through nose.' }
];

const STRESS_WORDS = [
  { word: 'ENGINEER', stress: 'en-gi-NEER (Stress on 3rd syllable)', meaning: 'Noun / Verb' },
  { word: 'TECHNOLOGY', stress: 'tech-NOL-o-gy (Stress on 2nd syllable)', meaning: 'Noun' },
  { word: 'DEVELOPMENT', stress: 'de-VEL-op-ment (Stress on 2nd syllable)', meaning: 'Noun' },
  { word: 'PRESENT (Noun)', stress: 'PRE-sent (Gift)', meaning: 'Noun / Adjective' },
  { word: 'PRESENT (Verb)', stress: 'pre-SENT (To deliver or show)', meaning: 'Verb' }
];

export const EnglishAudioTrainer: React.FC = () => {
  const [selectedPhoneme, setSelectedPhoneme] = useState<PhonemeCard>(PHONEMES[0]);
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85; // Slightly slower for clarity
      utterance.pitch = 1.0;
      utterance.lang = 'en-US';
      setPlayingWord(text);
      utterance.onend = () => setPlayingWord(null);
      utterance.onerror = () => setPlayingWord(null);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported by your browser.');
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl text-white">
      {/* Header */}
      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Headphones className="w-5 h-5 text-pink-400" />
          <span className="font-semibold text-sm sm:text-base text-slate-100">
            Interactive English Lab & Phonetics Trainer
          </span>
        </div>
        <div className="text-xs text-pink-300 font-medium flex items-center gap-1.5">
          <Volume2 className="w-4 h-4" />
          <span>Interactive Audio Synthesis</span>
        </div>
      </div>

      <div className="p-5 sm:p-6 bg-slate-950 space-y-6">
        {/* Phoneme Grid */}
        <div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
            Select an IPA Consonant Sound to Practice
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {PHONEMES.map((p) => (
              <button
                key={p.symbol}
                onClick={() => setSelectedPhoneme(p)}
                className={`p-3 rounded-xl border text-center transition-all ${
                  selectedPhoneme.symbol === p.symbol
                    ? 'bg-pink-600/20 border-pink-500 text-pink-300 font-bold shadow-md ring-1 ring-pink-500'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="font-mono text-xl">{p.symbol}</div>
                <div className="text-[10px] text-slate-400 truncate mt-1">{p.exampleWords[0]}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Phoneme Details & Audio Playback */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-3xl font-extrabold text-pink-400">{selectedPhoneme.symbol}</span>
                <span className="text-base font-semibold text-white">{selectedPhoneme.name}</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{selectedPhoneme.tip}</p>
            </div>

            <button
              onClick={() => speakText(selectedPhoneme.exampleWords.join(', '))}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-medium text-xs sm:text-sm shadow-md transition-all shrink-0"
            >
              <Volume2 className="w-4 h-4" />
              <span>Hear All Examples</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
            {selectedPhoneme.exampleWords.map((word) => (
              <button
                key={word}
                onClick={() => speakText(word)}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                  playingWord === word
                    ? 'bg-pink-600 text-white border-pink-400 font-bold shadow-lg'
                    : 'bg-slate-950/80 border-slate-800 text-slate-200 hover:border-slate-700'
                }`}
              >
                <span className="text-xs font-medium">{word}</span>
                <Play className={`w-3.5 h-3.5 ${playingWord === word ? 'text-white' : 'text-slate-500'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Word Stress & Intonation Practice */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Syllable Stress & Accent Rules in Engineering English
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {STRESS_WORDS.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3"
              >
                <div>
                  <div className="font-bold text-xs text-white">{item.word}</div>
                  <div className="font-mono text-xs text-pink-300 mt-0.5">{item.stress}</div>
                  <div className="text-[10px] text-slate-500">{item.meaning}</div>
                </div>

                <button
                  onClick={() => speakText(item.word.split(' ')[0])}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Listen"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
