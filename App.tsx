
import React, { useState, useEffect } from 'react';
import { CHAPTERS } from './constants';
import { ViewState } from './types';
import { ChapterView } from './components/ChapterView';

function App() {
  const [view, setView] = useState<ViewState>('HOME');
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [readChapters, setReadChapters] = useState<number[]>([]);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    });

    const saved = localStorage.getItem('jose-progress');
    if (saved) {
      setReadChapters(JSON.parse(saved));
    }
  }, []);

  const markAsRead = (id: number) => {
    if (!readChapters.includes(id)) {
      const newRead = [...readChapters, id];
      setReadChapters(newRead);
      localStorage.setItem('jose-progress', JSON.stringify(newRead));
    }
  };

  const handleInstall = () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choiceResult: any) => {
        setInstallPrompt(null);
      });
    }
  };

  const renderHome = () => (
    <div className="min-h-screen bg-jose-dark relative overflow-hidden flex flex-col items-center justify-center text-center px-6">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      <img src="https://images.unsplash.com/photo-1599668045963-c35d4872cb04?auto=format&fit=crop&w=1000&q=80" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 z-0" alt="Background" />

      <div className="z-10 relative max-w-lg w-full flex flex-col items-center">
        <div className="mb-8 border border-jose-gold/30 rounded-full px-5 py-1.5 backdrop-blur-sm">
          <span className="text-jose-gold text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">Mestrado em Prosperidade</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-display text-white mb-4 leading-tight">
          A SABEDORIA <br /> <span className="text-jose-gold italic font-serif">DE JOSÉ</span>
        </h1>
        
        <div className="w-16 h-[2px] bg-jose-gold mb-8"></div>
        
        <p className="text-base md:text-lg text-jose-light/70 font-serif italic mb-12 leading-relaxed max-w-sm">
          "Onde a fé encontra a gestão e a providência forja o governador."
        </p>

        <div className="w-full space-y-4 max-w-xs">
          <button 
            onClick={() => setView('LIST')}
            className="w-full bg-jose-gold text-jose-dark font-display font-bold text-sm py-5 rounded-sm shadow-2xl hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest"
          >
            Começar Imersão
          </button>
          
          {installPrompt && (
            <button 
              onClick={handleInstall}
              className="w-full bg-white/5 border border-white/10 text-white/60 hover:text-white font-display text-[10px] py-3 rounded-sm transition-all uppercase tracking-widest"
            >
              Instalar Aplicativo
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const renderList = () => (
    <div className="min-h-screen bg-[#f4f1ea] pb-20">
      <header className="sticky top-0 z-20 bg-jose-dark/95 backdrop-blur-md text-[#f4f1ea] px-6 py-5 shadow-lg flex justify-between items-center">
        <h2 className="font-display font-bold text-sm tracking-widest cursor-pointer uppercase" onClick={() => setView('HOME')}>A Sabedoria de José</h2>
        <div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
          <div className="bg-jose-gold h-full" style={{ width: `${(readChapters.length / 50) * 100}%` }}></div>
        </div>
      </header>

      <div className="p-6 max-w-2xl mx-auto space-y-6">
        <div className="text-center py-10">
          <h3 className="text-3xl font-display text-jose-dark uppercase tracking-tighter">Sumário de Estudos</h3>
          <p className="text-jose-primary italic mt-2 text-sm">Desenvolva a mentalidade de governo</p>
        </div>

        <div className="grid gap-4">
          {CHAPTERS.map((chapter, idx) => {
            const isRead = readChapters.includes(chapter.id);
            return (
              <div 
                key={chapter.id}
                onClick={() => {
                  setCurrentChapterIndex(idx);
                  setView('READING');
                }}
                className={`group relative bg-white p-6 rounded-sm shadow-sm border-l-[3px] cursor-pointer hover:shadow-md transition-all flex items-center gap-6 ${isRead ? 'border-green-800' : 'border-jose-gold'}`}
              >
                <div className={`text-2xl font-display font-bold ${isRead ? 'text-green-800' : 'text-jose-gold/40'}`}>
                  {chapter.id.toString().padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-display text-jose-dark leading-snug group-hover:text-jose-primary transition-colors">{chapter.title}</h4>
                  <p className="text-xs text-jose-primary/60 mt-1 font-serif italic truncate max-w-[200px] md:max-w-md">{chapter.subtitle}</p>
                </div>
                {isRead && (
                  <div className="text-green-800">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {view === 'HOME' && renderHome()}
      {view === 'LIST' && renderList()}
      {view === 'READING' && (
        <ChapterView 
          chapter={CHAPTERS[currentChapterIndex]}
          hasPrev={currentChapterIndex > 0}
          hasNext={currentChapterIndex < CHAPTERS.length - 1}
          onPrev={() => setCurrentChapterIndex(prev => prev - 1)}
          onNext={() => {
            markAsRead(CHAPTERS[currentChapterIndex].id);
            setCurrentChapterIndex(prev => prev + 1);
          }}
          onBack={() => setView('LIST')}
        />
      )}
    </div>
  );
}

export default App;
