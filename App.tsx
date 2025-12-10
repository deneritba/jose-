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
    // PWA Install Prompt Listener
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    });

    // Load progress
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
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        setInstallPrompt(null);
      });
    }
  };

  const renderHome = () => (
    <div className="min-h-screen bg-jose-dark relative overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-jose-dark/90 via-jose-dark/80 to-jose-dark z-0"></div>
      {/* Imagem de Fundo Corrigida: Egito Antigo/Pirâmides Dramáticas */}
      <img src="https://images.unsplash.com/photo-1599668045963-c35d4872cb04?auto=format&fit=crop&w=1000&q=80" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 z-0" alt="Background Egito" />

      <div className="z-10 relative max-w-lg w-full">
        <div className="mb-6 inline-block border border-jose-gold/50 rounded-full px-4 py-1">
          <span className="text-jose-gold text-xs uppercase tracking-[0.2em] font-bold">Edição Definitiva</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display text-[#f4f1ea] mb-2 drop-shadow-2xl">
          A Sabedoria <br /> <span className="text-jose-gold italic font-serif">de José</span>
        </h1>
        
        <div className="w-24 h-1 bg-jose-gold mx-auto my-6"></div>
        
        <p className="text-lg text-jose-light/80 font-sans mb-10 leading-relaxed">
          50 Lições de Prosperidade, Gestão e Fé <br /> baseadas na vida do Governador do Egito.
        </p>

        <div className="space-y-4">
          <button 
            onClick={() => setView('LIST')}
            className="w-full bg-gradient-to-r from-jose-gold to-[#bcaaa4] text-jose-dark font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform uppercase tracking-wider"
          >
            Iniciar Leitura
          </button>
          
          {installPrompt && (
            <button 
              onClick={handleInstall}
              className="w-full bg-transparent border border-jose-light/30 text-jose-light hover:bg-white/10 font-medium text-sm py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Instalar App
            </button>
          )}
        </div>

        <p className="mt-8 text-xs text-jose-light/40 font-mono">Baseado em Gênesis 37-50</p>
      </div>
    </div>
  );

  const renderList = () => (
    <div className="min-h-screen bg-[#f4f1ea]">
      <header className="sticky top-0 z-20 bg-jose-dark text-[#f4f1ea] px-6 py-4 shadow-md flex justify-between items-center">
        <h2 className="font-display font-bold text-xl cursor-pointer" onClick={() => setView('HOME')}>José do Egito</h2>
        <div className="text-xs uppercase tracking-widest text-jose-gold">Índice</div>
      </header>

      <div className="p-6 pb-20 max-w-3xl mx-auto space-y-4">
        <div className="text-center py-6">
          <h3 className="text-3xl font-display text-jose-dark">Sua Jornada</h3>
          <p className="text-jose-primary italic mt-2">Selecione um capítulo para começar</p>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-jose-gold h-2.5 rounded-full" style={{ width: `${(readChapters.length / 50) * 100}%` }}></div>
          </div>
          <p className="text-xs text-right mt-1 text-gray-500">{readChapters.length} / 50 Concluídos</p>
        </div>

        {CHAPTERS.map((chapter, idx) => {
          const isRead = readChapters.includes(chapter.id);
          return (
            <div 
              key={chapter.id}
              onClick={() => {
                setCurrentChapterIndex(idx);
                setView('READING');
              }}
              className={`relative bg-white p-5 rounded-lg shadow-sm border-l-4 cursor-pointer hover:shadow-md transition-all group ${isRead ? 'border-green-500 opacity-80' : 'border-jose-gold'}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <span className={`text-xs font-bold uppercase tracking-wider mb-1 block ${isRead ? 'text-green-600' : 'text-gray-400'}`}>
                    {isRead ? 'Lido/Concluído' : `Capítulo ${chapter.id}`}
                  </span>
                  <h4 className="text-xl font-serif text-jose-dark group-hover:text-jose-primary transition-colors">{chapter.title}</h4>
                  <p className="text-sm text-gray-500 mt-1 font-sans">{chapter.subtitle}</p>
                </div>
                <div className="ml-4 flex items-center justify-center h-10 w-10 rounded-full bg-jose-bg text-jose-primary font-bold font-serif shadow-inner">
                  {chapter.id}
                </div>
              </div>
            </div>
          );
        })}
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