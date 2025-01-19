export type BookStatus = 'lido' | 'lendo' | 'pendente';

export interface Book {
  id: string;
  title: string;
  author: string;
  status: BookStatus;
  rating?: number;
  review?: string;
}

