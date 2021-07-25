export type ShowProps = {
  id: number;
  image: { medium: string };
  name: string;
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
  summary: string;
  schedule: { time: string };
  rating: { average: number };
};
