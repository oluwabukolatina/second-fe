import { useEffect, useReducer } from 'react';
import { ShowProps } from '../../../types/ShowProps';
import showReducer from '../reducer/showReducer';
import * as type from '../type/showTypes';
import { useToasts } from 'react-toast-notifications';

const API_URL = 'https://api.tvmaze.com/shows';
const WATCHLIST_URL = 'https://second-company.herokuapp.com/api/v1/second-company/watchlist';

const useShows = () => {
  const { addToast } = useToasts();
  const [{ shows, loading, show, watchlist }, dispatch] = useReducer(showReducer, {
    shows: [],
    loading: false,
    show: {},
    watchlist: [],
  });
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
    const data = {
      name: show.name,
      id: show.id,
      image: show.image.medium,
      premiered: show.premiered,
      summary: show.summary,
      rating: show.rating.average,
    };
    fetch(`${WATCHLIST_URL}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
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
    async function getWatchlist() {
      dispatch({ type: type.START_LOADING, payload: true });
      fetch(`${WATCHLIST_URL}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === true && data.data) {
            dispatch({ type: type.GET_WATCHLIST, payload: data.data });
          } else {
            addToast(`Unable to get watchlist`, { appearance: 'error' });
          }
        })
        .catch(() => dispatch({ type: type.STOP_LOADING, payload: false }));
    }
    getWatchlist();
  }, []);

  return { shows, loading, getShowDetails, show, fetchMore, addToWatchlist, watchlist };
};
export default useShows;
