import { SET_LOADING, GET_DEALERS, DEALERS_ERROR } from "../action/types";

const initialState = {
  dealers: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEALERS:
      return {
        ...state,
        dealers: action.payload,
        loading: false,
      };
    case DEALERS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
