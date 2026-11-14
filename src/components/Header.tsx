import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AppView, TopicId } from '../types/quiz';

interface HeaderProps {
  currentView: AppView;
  activeTopic: TopicId | null;
  onNavigateHome: () => void;
  onNavigateFormulas: () => void;
  onStartTopic: (topic: TopicId) => void;
  onPrimaryStart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  activeTopic,
  onNavigateHome,
  onNavigateFormulas,
  onStartTopic,
  onPrimaryStart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAction = (fn: () => void) => {
    setMobileMenuOpen(false);
    fn();
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-sky-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-15 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title */}
        <button
          type="button"
          onClick={() => handleAction(onNavigateHome)}
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-sky-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md px-1"
        >
          Math Finance
        </button>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          <button
            type="button"
            onClick={onNavigateHome}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer ${
              currentView === 'home'
                ? 'border-sky-600 text-sky-900 font-semibold'
                : 'border-transparent hover:text-sky-800 hover:border-sky-200'
            }`}
          >
            Beranda
          </button>
          <button
            type="button"
            onClick={onNavigateFormulas}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer ${
              currentView === 'formulas'
                ? 'border-sky-600 text-sky-900 font-semibold'
                : 'border-transparent hover:text-sky-800 hover:border-sky-200'
            }`}
          >
            Ringkasan Rumus
          </button>
          <button
            type="button"
            onClick={() => onStartTopic('bunga-tunggal')}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer ${
              (currentView === 'quiz' || currentView === 'result') &&
              activeTopic === 'bunga-tunggal'
                ? 'border-sky-600 text-sky-900 font-semibold'
                : 'border-transparent hover:text-sky-800 hover:border-sky-200'
            }`}
          >
            Bunga Tunggal
          </button>
          <button
            type="button"
            onClick={() => onStartTopic('bunga-majemuk')}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer ${
              (currentView === 'quiz' || currentView === 'result') &&
              activeTopic === 'bunga-majemuk'
                ? 'border-sky-600 text-sky-900 font-semibold'
                : 'border-transparent hover:text-sky-800 hover:border-sky-200'
            }`}
          >
            Bunga Majemuk
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleAction(onPrimaryStart)}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:scale-[0.99] rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            Mulai Latihan
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-slate-700 hover:bg-sky-50 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-sky-100 bg-white px-4 py-3 space-y-1">
          <button
            type="button"
            onClick={() => handleAction(onNavigateHome)}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              currentView === 'home'
                ? 'bg-sky-50 text-sky-900 font-semibold'
                : 'text-slate-700 hover:bg-sky-50/60'
            }`}
          >
            Beranda
          </button>
          <button
            type="button"
            onClick={() => handleAction(onNavigateFormulas)}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              currentView === 'formulas'
                ? 'bg-sky-50 text-sky-900 font-semibold'
                : 'text-slate-700 hover:bg-sky-50/60'
            }`}
          >
            Ringkasan Rumus & Simulasi
          </button>
          <button
            type="button"
            onClick={() => handleAction(() => onStartTopic('bunga-tunggal'))}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-sky-50/60 transition-colors"
          >
            Latihan Bunga Tunggal
          </button>
          <button
            type="button"
            onClick={() => handleAction(() => onStartTopic('bunga-majemuk'))}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-sky-50/60 transition-colors"
          >
            Latihan Bunga Majemuk
          </button>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleAction(onPrimaryStart)}
              className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors"
            >
              Mulai Latihan
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
