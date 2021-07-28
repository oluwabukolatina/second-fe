import { useEffect, useReducer } from 'react';
import { ShowProps } from '../../../types/ShowProps';
import showReducer from '../reducer/showReducer';
import * as type from '../type/showTypes';
import { useToasts } from 'react-toast-notifications';

const API_URL = 'https://api.tvmaze.com/shows';
const WATCHLIST_URL = 'https://second-company.herokuapp.com/api/v1/second-company/watchlist';

const useShows = () => {
  const { addToast } = useToasts();
  const [{ shows, loading, show }, dispatch] = useReducer(showReducer, { shows: [], loading: false, show: {} });
  const getShows = () => {
    dispatch({ type: type.STOP_LOADING, payload: true });

    fetch(`${API_URL}?page=1`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: type.GET_SHOWS, payload: data });
      })
      .catch(() => dispatch({ type: type.STOP_LOADING, payload: false }));
  };
  const getShowDetails = (id: number) => {
    dispatch({ type: type.STOP_LOADING, payload: true });
    fetch(`${API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: type.GET_SHOW, payload: data });
      })
      .catch(() => dispatch({ type: type.STOP_LOADING, payload: false }));
  };
  const fetchMore = (val: { selected: number }) => {
    dispatch({ type: type.START_LOADING, payload: true });
    fetch(`${API_URL}?page=${val.selected + 1}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: type.GET_SHOWS, payload: data });
      })
      .catch(() => dispatch({ type: type.STOP_LOADING, payload: false }));
  };
  const addToWatchlist = (show: ShowProps) => {
    const data = { name: show.name, id: show.id };
    fetch(`${WATCHLIST_URL}`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          addToast(`${show.name} added to watchlist`, { appearance: 'success' });
        } else {
          addToast(`Unable to add ${show.name} to watchlist`, { appearance: 'error' });
        }
      })
      .catch(() => {
        addToast(`Something went wrong`, { appearance: 'error' });
      });
  };
  useEffect(() => {
    getShows();
  }, []);

  return { shows, loading, getShowDetails, show, fetchMore, addToWatchlist };
};
export default useShows;
