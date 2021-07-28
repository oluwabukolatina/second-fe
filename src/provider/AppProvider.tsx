import React, { FC, ReactNode } from 'react';
import AppContext from '../context/AppContext';
import useShows from '../components/shows/hooks/useShows';

const AppProvider: FC<ReactNode> = ({ children }) => {
  const { shows, loading, getShowDetails, show, fetchMore, addToWatchlist } = useShows();
  return (
    <AppContext.Provider
      value={{
        shows,
        loading,
        getShowDetails,
        show,
        fetchMore,
        addToWatchlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
