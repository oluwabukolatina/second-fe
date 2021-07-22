import { ReactChild, ReactFragment, ReactPortal } from 'react';
export type ShowProps = {
  id: number;
  image: { medium: string };
  name: ReactChild | ReactFragment | ReactPortal;
  programType: string;
  releaseYear: number;
  url: string;
  type: string;
  language: string;
  genres: string;
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  schedule: { time: string };
};
