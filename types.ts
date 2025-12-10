export interface ContentSection {
  type: 'paragraph' | 'quote' | 'highlight' | 'lesson-box' | 'list' | 'subtitle';
  content: string | string[];
}

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  verse: string;
  verseReference: string;
  image: string; // URL
  intro: string[];
  sections: ContentSection[];
  prayer: string;
  action: {
    financial: string;
    spiritual: string;
    description: string;
  };
}

export type ViewState = 'HOME' | 'LIST' | 'READING';