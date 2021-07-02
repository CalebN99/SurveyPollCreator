import { GET_POLL, CREATE_POLL } from "../actions/types";
//   import { startSession } from "mongoose";

const initialState = {
  poll: [],
  loading: false,
};

export default function foo(state = initialState, action) {
  switch (action.type) {
    case GET_POLL:
      return {
        ...state,
        poll: action.payload,
        loading: false,
      };
    case CREATE_POLL:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}
