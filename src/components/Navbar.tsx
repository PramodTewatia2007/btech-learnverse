import React, { useState } from 'react';
import { 
  GraduationCap, 
  Search, 
  Globe, 
  Type, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX, 
  Bot, 
  Bookmark, 
  BookOpen, 
  ChevronRight, 
  Home,
  CheckCircle,
  Sparkles,
  X
} from 'lucide-react';
import { Language, Subject } from '../types';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  fontSize: 'sm' | 'md' | 'lg';
  onFontSizeChange: (size: 'sm' | 'md' | 'lg') => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  isAudioReading: boolean;
  onToggleAudioReading: () => void;
  breadcrumbs: BreadcrumbItem[];
  onOpenAITutor: () => void;
  onOpenSearch: () => void;
  onNavigateHome: () => void;
  onOpenProgress: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  fontSize,
  onFontSizeChange,
  isDarkMode,
  onToggleTheme,
  isAudioReading,
  onToggleAudioReading,
  breadcrumbs,
  onOpenAITutor,
  onOpenSearch,
  onNavigateHome,
  onOpenProgress
}) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState<boolean>(false);
  const [isFontMenuOpen, setIsFontMenuOpen] = useState<boolean>(false);

  const languageLabels: Record<Language, { label: string; code: string; flag: string }> = {
    en: { label: 'English', code: 'EN', flag: '🇬🇧' },
    hinglish: { label: 'Hinglish', code: 'HN-EN', flag: '🇮🇳' },
    hi: { label: 'हिंदी', code: 'HI', flag: '🇮🇳' }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={onNavigateHome}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden min-[420px]:block">
              <div className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent leading-tight">
                BTech LearnVerse
              </div>
              <div className="text-[10px] text-indigo-400 font-medium tracking-wide">
                Learn Everything From Zero
              </div>
            </div>
          </div>

          {/* Quick Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex-1 max-w-xs hidden md:flex items-center justify-between px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300 text-xs transition-all shadow-inner"
          >
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Search subjects, lessons, formulas...</span>
            </div>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700 font-mono">
              Ctrl K
            </kbd>
          </button>

          {/* Controls: Language, Font, TTS, AI Tutor, Bookmarks */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Mobile Search Icon */}
            <button
              onClick={onOpenSearch}
              className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Dropdown Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsLangMenuOpen(!isLangMenuOpen);
                  setIsFontMenuOpen(false);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 transition-colors"
                title="Select Language Mode"
              >
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span className="hidden sm:inline">{languageLabels[language].label}</span>
                <span className="sm:hidden font-mono">{languageLabels[language].code}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1 z-50">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-800">
                    Language Mode
                  </div>
                  {(['en', 'hinglish', 'hi'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        onLanguageChange(lang);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                        language === lang
                          ? 'bg-indigo-600/20 text-indigo-300 font-semibold'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{languageLabels[lang].flag}</span>
                        <span>{languageLabels[lang].label}</span>
                      </div>
                      {language === lang && <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />}
                    </button>
                  ))}
                  <div className="px-3 py-1.5 text-[10px] text-slate-400 border-t border-slate-800">
                    Technical terms remain standard in all modes.
                  </div>
                </div>
              )}
            </div>

            {/* Font Size Adjuster */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsFontMenuOpen(!isFontMenuOpen);
                  setIsLangMenuOpen(false);
                }}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Adjust Text Size"
              >
                <Type className="w-4 h-4" />
              </button>

              {isFontMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1 z-50">
                  <div className="px-3 py-1 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-800">
                    Text Scale
                  </div>
                  {(['sm', 'md', 'lg'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        onFontSizeChange(size);
                        setIsFontMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-1.5 text-xs text-left ${
                        fontSize === size ? 'bg-indigo-600/20 text-indigo-300 font-bold' : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span>{size === 'sm' ? 'Standard (14px)' : size === 'md' ? 'Medium (16px)' : 'Large (18px)'}</span>
                      {fontSize === size && <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Read-Aloud Web Speech TTS Toggle */}
            <button
              onClick={onToggleAudioReading}
              className={`p-2 rounded-xl border transition-colors ${
                isAudioReading
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg animate-pulse'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
              }`}
              title={isAudioReading ? 'Stop Audio Read-Aloud' : 'Read Lesson Aloud (Text-to-Speech)'}
            >
              {isAudioReading ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Progress & Bookmarks */}
            <button
              onClick={onOpenProgress}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              title="My Learning Progress & Notes"
            >
              <Bookmark className="w-4 h-4 text-amber-400" />
            </button>

            {/* Ask AI Tutor Button */}
            <button
              onClick={onOpenAITutor}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span className="hidden sm:inline">Ask AI Tutor</span>
            </button>
          </div>
        </div>

        {/* Breadcrumb Navigation Hierarchy: Subjects → Syllabus → Unit → Lesson */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="py-2 border-t border-slate-800/60 flex items-center gap-1 text-xs text-slate-400 overflow-x-auto whitespace-nowrap scrollbar-none">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1 text-slate-400 hover:text-indigo-400 transition-colors shrink-0"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Subjects</span>
            </button>

            {breadcrumbs.map((item, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className={`transition-colors shrink-0 ${
                      item.active ? 'text-indigo-300 font-semibold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <span className={`shrink-0 ${item.active ? 'text-indigo-300 font-semibold' : 'text-slate-400'}`}>
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
