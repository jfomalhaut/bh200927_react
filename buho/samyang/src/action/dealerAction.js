import { SET_LOADING, GET_DEALERS, DEALERS_ERROR } from "./types";

// export const getDealers = () => {
//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch("/stores");
//     const data = await res.json();

//     dispatchEvent({
//       type: GET_DEALERS,
//       payload: data,
//     });
//   };
// };

// Get Dealers from server
export const getDealers = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/dealers");
    const data = await res.json();

    dispatch({
      type: GET_DEALERS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: DEALERS_ERROR,
      payload: err.response.data,
    });
  }
};

// Set loading true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
