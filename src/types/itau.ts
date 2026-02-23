// src/types/itau.ts
export interface Segment {
  id: string;
  name: string;
  slug: string;
  active: boolean;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon?: string;
  link: string;
  category: 'credit' | 'loan' | 'invest' | 'insurance';
}

export interface UserSession {
  agencia: string;
  conta: string;
  isLogged: boolean;
}