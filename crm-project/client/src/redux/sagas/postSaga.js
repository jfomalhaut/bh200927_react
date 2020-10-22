import axios from "axios";
import { fork, all, call, put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  POSTS_LOADING_FAILURE,
  POSTS_LOADING_REQUEST,
  POSTS_LOADING_SUCCESS,
} from "../types";

// ALL POSTS LOAD
const loadPostsAPI = () => {
  return axios.get("/api/post");
};

function* loadPosts() {
  try {
    const result = yield call(loadPostsAPI);
    console.log(result, "LoadPostsResult");
    yield put({
      type: POSTS_LOADING_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: POSTS_LOADING_FAILURE,
      payload: e,
    });
    //   실패가 된다면 push 를 통해 홈페이지로 보낸다.
    yield push("/");
  }
}

function* watchLoadPosts() {
  yield takeEvery(POSTS_LOADING_REQUEST, loadPosts);
}

export default function* postSaga() {
  yield all([fork(watchLoadPosts)]);
}
