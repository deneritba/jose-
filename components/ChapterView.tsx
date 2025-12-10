import React from 'react';
import { Chapter, ContentSection } from '../types';

interface ChapterViewProps {
  chapter: Chapter;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  onBack: () => void;
}

const RenderSection: React.FC<{ section: ContentSection, index: number }> = ({ section, index }) => {
  const renderContent = (content: string | string[], className: string) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, i) => (
        <p key={i} className={`${className} mb-6`}>
          {paragraph}
        </p>
      ));
    }
    return <p className={className}>{content}</p>;
  };

  switch (section.type) {
    case 'paragraph':
      return (
        <div className={`mb-8 text-lg md:text-xl leading-loose text-jose-dark font-serif text-justify tracking-normal`}>
           {index === 0 && !Array.isArray(section.content) ? (
             <p className="text-lg md:text-xl leading-loose text-jose-dark font-serif text-justify tracking-normal">
               <span className="float-left text-7xl font-display text-jose-primary mr-3 mt-[-10px] line-clamp-2">
                 {(section.content as string).charAt(0)}
               </span>
               {(section.content as string).slice(1)}
             </p>
           ) : (
             renderContent(section.content, "text-lg md:text-xl leading-loose text-jose-dark font-serif text-justify tracking-normal")
           )}
        </div>
      );
    case 'quote':
      return (
        <div className="my-10 relative px-6 py-8 bg-[#f9f7f2] border-l-4 border-jose-gold mx-2 md:mx-6 shadow-sm">
          <p className="text-xl md:text-2xl font-display text-jose-primary text-center leading-relaxed italic">
            "{section.content}"
          </p>
        </div>
      );
    case 'highlight':
      return (
        <div className="my-8 p-6 bg-gradient-to-r from-[#fff8e1] to-transparent border-l-[3px] border-jose-gold rounded-r-md">
          <h5 className="text-xs font-bold uppercase tracking-widest text-jose-gold mb-2 flex items-center gap-2">
            ♦ Insight Teológico
          </h5>
          <div className="font-serif font-medium text-jose-dark text-lg italic leading-relaxed">
             {renderContent(section.content, "")}
          </div>
        </div>
      );
    case 'lesson-box':
      return (
        <div className="my-10 p-8 bg-[#2c1810] text-[#f4f1ea] rounded-sm shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-jose-gold opacity-50"></div>
          <h4 className="text-sm font-display font-bold uppercase tracking-[0.2em] text-jose-gold mb-4 text-center border-b border-white/10 pb-4">
            Princípio de Gestão & Sabedoria
          </h4>
          <div className="text-lg font-serif leading-relaxed opacity-95 text-justify">
             {renderContent(section.content, "")}
          </div>
        </div>
      );
    case 'subtitle':
      return (
        <h3 className="text-2xl font-display font-bold text-jose-dark mt-12 mb-6 border-b border-jose-gold/20 pb-2">
          {section.content}
        </h3>
      );
    case 'list':
      return (
        <ul className="mb-8 ml-4 md:ml-8 space-y-4 border-l border-jose-gold/30 pl-6">
          {(section.content as string[]).map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-lg text-jose-dark font-serif">
              <span className="text-jose-gold text-xl mt-[-2px]">❧</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

export const ChapterView: React.FC<ChapterViewProps> = ({ chapter, onNext, onPrev, hasPrev, hasNext, onBack }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapter.id]);

  return (
    <div className="min-h-screen pb-24 fade-in bg-[#f4f1ea] selection:bg-jose-gold/30 selection:text-jose-dark">
      {/* Cinematic Hero - Simplified to ensure stability and style */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-jose-dark shadow-2xl">
        <img 
          src={chapter.image} 
          alt={chapter.title} 
          className="w-full h-full object-cover opacity-90 sepia-[.3] contrast-125"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#f4f1ea] via-transparent to-black/40 z-10"></div>
        
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 z-50 p-3 rounded-full bg-black/30 backdrop-blur text-white hover:bg-jose-gold/80 transition-all"
        >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
        </button>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-display font-bold tracking-[0.3em] text-jose-gold text-xs uppercase mb-3 block animate-slide-up">
              Capítulo {chapter.id}
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-jose-dark mb-4 drop-shadow-sm leading-tight animate-slide-up animation-delay-100 bg-[#f4f1ea]/90 inline-block px-6 py-2 rounded-sm backdrop-blur-sm">
              {chapter.title}
            </h1>
            <p className="text-lg md:text-xl font-serif italic text-jose-dark font-medium mt-2 animate-slide-up animation-delay-200">
              {chapter.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-8 -mt-8 relative z-30">
        
        {/* Bible Verse Block */}
        <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-jose-primary mb-12">
          <p className="text-center font-serif text-xl md:text-2xl text-jose-dark leading-relaxed mb-4">
            "{chapter.verse}"
          </p>
          <div className="flex items-center justify-center gap-3">
             <span className="h-[1px] w-8 bg-jose-gold"></span>
             <p className="text-center text-jose-primary font-display font-bold text-sm uppercase tracking-widest">
                {chapter.verseReference}
             </p>
             <span className="h-[1px] w-8 bg-jose-gold"></span>
          </div>
        </div>

        {/* Content Body */}
        <article className="mb-20">
           {chapter.sections.map((section, index) => (
             <RenderSection key={index} section={section} index={index} />
           ))}
        </article>

        <div className="flex items-center justify-center mb-16 opacity-30">
           <img src="https://cdn-icons-png.flaticon.com/512/44/44627.png" alt="divider" className="h-6 w-auto grayscale" />
        </div>

        {/* Deep Application Section */}
        <div className="bg-[#fffbf0] border border-jose-gold/30 p-8 md:p-10 rounded-lg shadow-inner mb-12">
            <h3 className="font-display text-2xl text-jose-dark mb-6 text-center">Aplicação Profunda</h3>
            
            <div className="space-y-8">
                <div>
                    <h4 className="font-bold text-jose-primary uppercase tracking-wide text-sm mb-3 border-b border-jose-gold/20 pb-2 inline-block">Vida Espiritual</h4>
                    <p className="text-lg leading-relaxed font-serif text-jose-dark/90 text-justify">
                        {chapter.action.spiritual}
                    </p>
                </div>
                
                <div>
                    <h4 className="font-bold text-jose-primary uppercase tracking-wide text-sm mb-3 border-b border-jose-gold/20 pb-2 inline-block">Vida Financeira & Profissional</h4>
                    <p className="text-lg leading-relaxed font-serif text-jose-dark/90 text-justify">
                        {chapter.action.financial}
                    </p>
                </div>
            </div>
        </div>

        {/* Prayer */}
        <div className="text-center max-w-2xl mx-auto mb-20 px-6">
          <span className="text-4xl text-jose-gold/40 mb-4 block">🙏</span>
          <p className="font-serif italic text-xl text-jose-dark leading-loose">
            "{chapter.prayer}"
          </p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between items-center mb-24 gap-6 pt-10 border-t border-jose-dark/10">
            <button 
                onClick={onPrev}
                disabled={!hasPrev}
                className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all ${!hasPrev ? 'opacity-0' : 'hover:text-jose-primary text-jose-dark/60'}`}
            >
                ← Anterior
            </button>
             <button 
                onClick={onNext}
                disabled={!hasNext}
                className={`px-10 py-4 bg-jose-dark text-[#f4f1ea] font-bold uppercase tracking-widest shadow-lg hover:bg-jose-primary transition-all rounded-sm`}
            >
                {hasNext ? 'Próximo Capítulo' : 'Concluir'} →
            </button>
        </div>

        {/* Mobile Nav Footer */}
        <div className="fixed bottom-0 left-0 w-full bg-[#f4f1ea]/95 backdrop-blur-md border-t border-jose-dark/10 p-4 z-50 flex justify-between items-center md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
             <button onClick={onPrev} disabled={!hasPrev} className={`p-3 ${!hasPrev ? 'opacity-20' : 'text-jose-dark'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
             </button>
             <div className="flex flex-col items-center">
                <span className="font-display text-xs font-bold text-jose-gold uppercase tracking-widest">Capítulo</span>
                <span className="font-serif text-xl font-bold text-jose-dark">{chapter.id}</span>
             </div>
             <button onClick={onNext} disabled={!hasNext} className={`p-3 ${!hasNext ? 'opacity-20' : 'text-jose-dark'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
             </button>
        </div>
      </div>
    </div>
  );
};