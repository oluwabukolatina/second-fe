import { useEffect, useReducer } from 'react';
import showReducer from '../reducer/showReducer';
import * as type from '../type/showTypes';

const API_URL = 'https://api.tvmaze.com/shows?page=';
const useShows = () => {
  const [{ shows, loading }, dispatch] = useReducer(showReducer, { shows: [], loading: false });
  const getShows = () => {
    dispatch({ type: type.STOP_LOADING, payload: true });

    fetch(`${API_URL}1`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: type.GET_SHOWS, payload: data });
      })
      .catch(() => dispatch({ type: type.STOP_LOADING, payload: false }));
  };
  useEffect(() => {
    getShows();
  }, []);

  return { shows, loading };
};
export default useShows;
