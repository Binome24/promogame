export interface Prediction {
  match: string;
  league: string;
  analysis: string;
  prediction: string;
  odds: string;
  confidence: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface FaqItem {
  question: string;
  answer: string;
}