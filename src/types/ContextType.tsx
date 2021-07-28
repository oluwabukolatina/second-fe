import { ShowProps } from './ShowProps';

export type ContextType = {
  shows: ShowProps[];
  loading: boolean;
  getShowDetails: (id: number) => void;
  fetchMore: (selector: { selected: number }) => void;
  addToWatchlist: (show: ShowProps) => void;
};
