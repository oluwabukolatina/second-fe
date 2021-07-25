import { useEffect, useReducer } from 'react';
import showReducer from '../reducer/showReducer';
import * as type from '../type/showTypes';

const API_URL = 'https://api.tvmaze.com/shows?page=';
const GET_SHOW_URL = 'https://api.tvmaze.com/shows';

const useShows = () => {
  const [{ shows, loading, show }, dispatch] = useReducer(showReducer, { shows: [], loading: false, show: {} });
  // const [show, setShow] = useState<any>({ image: { medium: '' } });
  const getShows = () => {
    dispatch({ type: type.STOP_LOADING, payload: true });

    fetch(`${API_URL}1`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: type.GET_SHOWS, payload: data });
      })
      .catch(() => dispatch({ type: type.STOP_LOADING, payload: false }));
  };
  const getShowDetails = (id: number) => {
    dispatch({ type: type.STOP_LOADING, payload: true });
    fetch(`${GET_SHOW_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: type.GET_SHOW, payload: data });
      })
      .catch(() => dispatch({ type: type.STOP_LOADING, payload: false }));
  };
  useEffect(() => {
    getShows();
  }, []);

  return { shows, loading, getShowDetails, show };
};
export default useShows;
