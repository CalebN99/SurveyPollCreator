import axios from "axios";
import { CREATE_POLL, GET_POLL } from "./types";

export const createPoll = (item) => (dispatch) => {
  axios.post("/api/polls/create", item).then((res) =>
    dispatch({
      type: CREATE_POLL,
      payload: res.data,
    })
  );
};

export const getPoll = (item) => (dispatch) => {
  console.log("Axios GET POLL");
  axios.post(`/api/polls/${item}`).then((res) =>
    dispatch({
      type: GET_POLL,
      payload: res.data,
    })
  );
};
