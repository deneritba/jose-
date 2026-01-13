
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
        <p key={i} className={`${className} mb-5 last:mb-0`}>
          {paragraph}
        </p>
      ));
    }
    return <p className={className}>{content}</p>;
  };

  switch (section.type) {
    case 'paragraph':
      return (
        <div className={`mb-8 text-base md:text-xl leading-[1.8] text-jose-dark font-serif text-justify opacity-90`}>
           {index === 0 && typeof section.content === 'string' ? (
             <p>
               <span className="float-left text-6xl md:text-8xl font-display text-jose-primary mr-3 mt-1 line-height-1">
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
        <h3 className="text-xl md:text-3xl font-display font-bold text-jose-primary mt-12 mb-6 border-b border-jose-gold/20 pb-2">
          {section.content}
        </h3>
      );
    case 'highlight':
      return (
        <div className="my-10 p-6 md:p-10 bg-gradient-to-br from-[#fff9c4]/20 to-transparent border-l-4 md:border-l-8 border-jose-gold italic font-serif text-lg md:text-2xl text-jose-dark shadow-sm italic">
           "{section.content}"
        </div>
      );
    case 'lesson-box':
      return (
        <div className="my-10 p-6 md:p-10 bg-jose-dark text-jose-light rounded-sm shadow-xl border-t-2 border-jose-gold relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-5">
             <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45l8.1 14.1H3.9L12 5.45zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/></svg>
          </div>
          <div className="text-lg md:text-2xl font-serif leading-relaxed italic text-justify opacity-95 relative z-10">
             {renderContent(section.content, "")}
          </div>
        </div>
      );
    case 'list':
      return (
        <div className="space-y-4 md:space-y-6 my-8">
          {(section.content as string[]).map((item, i) => (
            <div key={i} className="flex gap-4 items-start bg-white/60 p-4 md:p-6 rounded-sm border-l-2 border-jose-gold shadow-sm">
              <span className="text-jose-gold text-xl">✦</span>
              <p className="font-serif text-base md:text-xl text-jose-dark leading-relaxed">{item}</p>
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

  // Função para limpar o título se ele repetir "Capítulo X:"
  const displayTitle = chapter.title.includes(':') ? chapter.title.split(':')[1].trim() : chapter.title;
  const chapterPrefix = chapter.title.includes(':') ? chapter.title.split(':')[0].trim() : `CAPÍTULO ${chapter.id}`;

  return (
    <div className="min-h-screen pb-24 md:pb-40 bg-[#f4f1ea] selection:bg-jose-gold/30">
      {/* Hero Section Refinada */}
      <div className="relative h-[45vh] md:h-[75vh] w-full overflow-hidden">
        <img 
          src={chapter.image} 
          alt={chapter.title} 
          className="w-full h-full object-cover contrast-[1.15] brightness-90"
        />
        {/* Gradiente mais suave para não lavar a imagem no mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f4f1ea] via-black/10 to-black/60"></div>
        
        <button 
          onClick={onBack}
          className="absolute top-5 left-5 md:top-10 md:left-10 z-50 flex items-center gap-2 text-white font-display text-[9px] md:text-xs tracking-[0.3em] hover:text-jose-gold transition-all bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10"
        >
          <span>←</span> ÍNDICE
        </button>

        <div className="absolute bottom-6 md:bottom-16 left-0 w-full px-6 md:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
               <span className="bg-jose-gold text-jose-dark font-display font-bold tracking-widest text-[8px] md:text-xs px-2 py-0.5 rounded-sm">
                 ESTUDO DE CASO
               </span>
               <span className="text-white/80 font-display text-[8px] md:text-xs tracking-widest uppercase">
                 {chapterPrefix}
               </span>
            </div>
            
            <h1 className="text-2xl md:text-7xl font-display text-jose-dark md:text-white mb-2 md:mb-6 leading-tight uppercase drop-shadow-md">
              {displayTitle}
            </h1>
            
            <div className="max-w-xl border-l-2 border-jose-gold pl-3 md:pl-6 py-0.5">
              <p className="text-[11px] md:text-xl font-serif italic text-jose-primary md:text-white/90 leading-snug">
                {chapter.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-0 -mt-6 md:-mt-12 relative z-10">
        {/* Bloco de Versículo com escala ajustada */}
        <div className="bg-white p-6 md:p-20 shadow-xl border-t-[6px] md:border-t-[12px] border-jose-dark text-center mb-12 md:mb-24 rounded-sm">
          <p className="text-lg md:text-3xl font-serif text-jose-dark leading-[1.7] italic mb-6 md:mb-8 opacity-90">
            "{chapter.verse}"
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-6 h-[1px] bg-jose-gold/50"></div>
            <p className="text-jose-primary font-display font-bold tracking-[0.25em] text-[9px] md:text-sm uppercase">
              {chapter.verseReference}
            </p>
            <div className="w-6 h-[1px] bg-jose-gold/50"></div>
          </div>
        </div>

        {/* Conteúdo do Estudo */}
        <div className="article-body">
          {chapter.sections.map((section, idx) => (
            <RenderSection key={idx} section={section} index={idx} />
          ))}
        </div>

        {/* Oração Ativação */}
        <div className="mt-16 md:mt-32 p-8 md:p-20 bg-jose-dark text-white rounded-sm shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-jose-gold/5 rounded-full -mr-16 -mt-16"></div>
           <div className="relative z-10 text-center">
             <span className="text-jose-gold font-display text-2xl md:text-5xl mb-6 md:mb-10 block">🙏</span>
             <h4 className="font-display text-[10px] md:text-xl tracking-[0.4em] mb-6 md:mb-8 text-jose-gold uppercase opacity-70">Ativação de Governo</h4>
             <p className="text-base md:text-3xl font-serif italic leading-relaxed text-jose-light max-w-3xl mx-auto opacity-95">
               "{chapter.prayer}"
             </p>
           </div>
        </div>

        {/* Navegação Refinada */}
        <div className="mt-16 md:mt-32 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-jose-dark/10 pt-10">
           <div className="flex items-center justify-between w-full md:w-auto md:gap-12">
             <button 
               onClick={onPrev} 
               disabled={!hasPrev}
               className={`flex flex-col items-start gap-1 ${!hasPrev ? 'opacity-0 pointer-events-none' : 'active:scale-95 transition-all'}`}
             >
               <span className="text-[9px] text-jose-gold font-display tracking-widest uppercase">Anterior</span>
               <span className="text-jose-primary font-display font-bold text-xs md:text-lg">← CAP. {chapter.id - 1}</span>
             </button>

             <button 
               onClick={onNext} 
               disabled={!hasNext}
               className={`md:hidden flex flex-col items-end gap-1 ${!hasNext ? 'opacity-0 pointer-events-none' : 'active:scale-95 transition-all'}`}
             >
               <span className="text-[9px] text-jose-gold font-display tracking-widest uppercase">Próximo</span>
               <span className="text-jose-primary font-display font-bold text-xs">CAP. {chapter.id + 1} →</span>
             </button>
           </div>
           
           <div className="flex flex-col items-center flex-1 max-w-[180px] md:max-w-xs w-full">
              <div className="w-full h-[1px] bg-gray-200 relative mb-2">
                 <div className="bg-jose-gold h-full transition-all duration-700 shadow-[0_0_5px_rgba(212,175,55,0.5)]" style={{ width: `${(chapter.id / 50) * 100}%` }}></div>
              </div>
              <span className="font-display text-[8px] md:text-[10px] tracking-widest text-jose-gold/60 font-bold uppercase">{chapter.id} / 50 LIÇÕES</span>
           </div>

           <button 
             onClick={onNext} 
             disabled={!hasNext}
             className={`hidden md:flex flex-col items-end gap-1 bg-jose-primary hover:bg-jose-dark text-white px-10 py-5 rounded-sm transition-all shadow-lg ${!hasNext ? 'opacity-50' : ''}`}
           >
             <span className="text-jose-gold font-display text-[10px] tracking-widest uppercase">Avançar</span>
             <span className="font-display font-bold text-lg flex items-center gap-2">
               {hasNext ? `PRÓXIMO NÍVEL` : 'CONCLUIR'} <span>→</span>
             </span>
           </button>
        </div>
      </div>
    </div>
  );
};
