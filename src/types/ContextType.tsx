import { ShowProps } from './ShowProps';

export type ContextType = {
  shows: ShowProps[];
  loading: boolean;
  getShowDetails: (id: number) => void;
};
