import * as types from '../type/showTypes';

const showReducer = (state: any, action: { payload: any; type: string }) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_SHOWS:
      return { ...state, shows: payload, loading: false };
    case types.START_LOADING:
      return { ...state, loading: payload };
    case types.STOP_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
export default showReducer;
