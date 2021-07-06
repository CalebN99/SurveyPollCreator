import React from "react";
import store from "../store";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { createPoll, getPoll } from "../actions/itemAction";
import { useParams } from "react-router-dom";
import Poll from "./Poll";

function PollSetup(props) {
  let { id } = useParams();

  return (
    <Provider store={store}>
      <Poll ID={id} />
    </Provider>
  );
}

const mapStateToProps = (state) => ({
  poll: state.poll.poll,
});
export default connect(mapStateToProps, {
  createPoll,
  getPoll,
})(PollSetup);
