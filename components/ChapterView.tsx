
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
        <p key={i} className={`${className} mb-6 last:mb-0`}>
          {paragraph}
        </p>
      ));
    }
    return <p className={className}>{content}</p>;
  };

  switch (section.type) {
    case 'paragraph':
      return (
        <div className={`mb-10 text-lg md:text-xl leading-relaxed text-jose-dark font-serif text-justify opacity-90`}>
           {index === 0 && typeof section.content === 'string' ? (
             <p>
               <span className="float-left text-8xl font-display text-jose-primary mr-4 mt-2 line-height-1">
                 {section.content.charAt(0)}
               </span>
               {section.content.slice(1)}
             </p>
           ) : (
             renderContent(section.content, "")
           )}
        </div>
      );
    case 'subtitle':
      return (
        <h3 className="text-2xl md:text-3xl font-display font-bold text-jose-primary mt-16 mb-8 border-b-2 border-jose-gold/30 pb-2 inline-block">
          {section.content}
        </h3>
      );
    case 'highlight':
      return (
        <div className="my-12 p-10 bg-gradient-to-br from-[#fff9c4]/30 to-transparent border-l-8 border-jose-gold italic font-serif text-2xl text-jose-dark shadow-sm">
           "{section.content}"
        </div>
      );
    case 'lesson-box':
      return (
        <div className="my-12 p-10 bg-jose-dark text-[#f4f1ea] rounded-sm shadow-2xl border-t-4 border-jose-gold relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45l8.1 14.1H3.9L12 5.45zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/></svg>
          </div>
          <div className="text-xl md:text-2xl font-serif leading-loose italic text-justify opacity-90 relative z-10">
             {renderContent(section.content, "")}
          </div>
        </div>
      );
    case 'list':
      return (
        <div className="space-y-8 my-10">
          {(section.content as string[]).map((item, i) => (
            <div key={i} className="flex gap-6 items-start bg-white p-6 rounded-sm border-l-4 border-jose-gold shadow-sm">
              <span className="text-jose-gold text-2xl mt-1">✦</span>
              <p className="font-serif text-xl text-jose-dark leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

export const ChapterView: React.FC<ChapterViewProps> = ({ chapter, onNext, onPrev, hasPrev, hasNext, onBack }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [chapter.id]);

  return (
    <div className="min-h-screen pb-40 bg-[#f4f1ea] selection:bg-jose-gold/30">
      {/* Hero Section Master */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img 
          src={chapter.image} 
          alt={chapter.title} 
          className="w-full h-full object-cover grayscale-[0.1] contrast-110 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f4f1ea] via-[#f4f1ea]/40 to-black/70"></div>
        
        <button 
          onClick={onBack}
          className="absolute top-10 left-10 z-50 flex items-center gap-3 text-white font-display text-sm tracking-[0.3em] hover:text-jose-gold transition-all group"
        >
          <span className="group-hover:-translate-x-2 transition-transform">←</span> 
          ÍNDICE DE ESTUDOS
        </button>

        <div className="absolute bottom-20 left-0 w-full px-6 md:px-20 text-center md:text-left">
          <div className="max-w-5xl mx-auto">
            <span className="text-jose-gold font-display font-bold tracking-[0.5em] text-sm md:text-base uppercase mb-6 block drop-shadow-lg">
              Mestrado em Sabedoria Bíblica • Cap. {chapter.id}
            </span>
            <h1 className="text-5xl md:text-8xl font-display text-jose-dark mb-6 leading-tight drop-shadow-sm uppercase">
              {chapter.title}
            </h1>
            <p className="text-xl md:text-3xl font-serif italic text-jose-primary max-w-3xl border-l-4 border-jose-gold pl-6 py-2">
              {chapter.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-10">
        {/* Bloco de Versículo Premium */}
        <div className="bg-white p-12 md:p-24 shadow-2xl border-t-[12px] border-jose-dark text-center mb-24 rounded-b-sm relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-jose-gold text-jose-dark px-8 py-2 font-display font-bold text-xs tracking-widest shadow-lg">
            A ESCRITURA SÁBIA
          </div>
          <p className="text-3xl md:text-4xl font-serif text-jose-dark leading-[1.6] italic mb-10 opacity-90">
            "{chapter.verse}"
          </p>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-12 h-[1px] bg-jose-gold"></div>
            <p className="text-jose-primary font-display font-bold tracking-[0.4em] text-lg uppercase">
              {chapter.verseReference}
            </p>
            <div className="w-12 h-[1px] bg-jose-gold"></div>
          </div>
        </div>

        {/* Conteúdo do Estudo Denso */}
        <div className="space-y-4">
          {chapter.sections.map((section, idx) => (
            <RenderSection key={idx} section={section} index={idx} />
          ))}
        </div>

        {/* Seção de Oração Profunda */}
        <div className="mt-32 p-16 md:p-24 bg-jose-dark text-white rounded-sm shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-jose-gold/5 rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-1000"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-jose-primary/20 rounded-full -ml-32 -mb-32"></div>
           
           <div className="relative z-10 text-center">
             <span className="text-jose-gold font-display text-5xl mb-10 block">🙏</span>
             <h4 className="font-display text-2xl tracking-[0.4em] mb-10 text-jose-gold uppercase">Consagração Profética</h4>
             <p className="text-2xl md:text-4xl font-serif italic leading-[1.8] text-jose-light max-w-4xl mx-auto opacity-90">
               "{chapter.prayer}"
             </p>
           </div>
        </div>

        {/* Navegação Inferior de Luxo */}
        <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-jose-dark/20 pt-16">
           <button 
             onClick={onPrev} 
             disabled={!hasPrev}
             className={`group flex flex-col items-start gap-2 ${!hasPrev ? 'opacity-0' : 'hover:-translate-x-2'} transition-all`}
           >
             <span className="text-jose-gold font-display text-xs tracking-widest uppercase">Anterior</span>
             <span className="text-jose-primary font-display font-bold text-xl">← CAPÍTULO {chapter.id - 1}</span>
           </button>
           
           <div className="flex flex-col items-center flex-1 max-w-xs w-full">
              <span className="text-[10px] font-display text-jose-primary tracking-[0.6em] uppercase mb-3 opacity-60">Progresso da Imersão</span>
              <div className="w-full h-[2px] bg-gray-200 relative">
                 <div className="bg-jose-gold h-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(212,175,55,0.8)]" style={{ width: `${(chapter.id / 50) * 100}%` }}></div>
              </div>
              <span className="mt-3 font-display text-sm tracking-widest text-jose-gold font-bold">{chapter.id} / 50</span>
           </div>

           <button 
             onClick={onNext} 
             disabled={!hasNext}
             className={`group flex flex-col items-end gap-2 bg-jose-primary hover:bg-jose-dark text-white px-12 py-6 rounded-sm transition-all shadow-2xl ${!hasNext ? 'opacity-50' : 'hover:scale-105'}`}
           >
             <span className="text-jose-gold font-display text-xs tracking-widest uppercase">Próximo Nível</span>
             <span className="font-display font-bold text-xl flex items-center gap-3">
               {hasNext ? `CAPÍTULO ${chapter.id + 1}` : 'FINALE'} <span>→</span>
             </span>
           </button>
        </div>
      </div>
    </div>
  );
};
