import React from "react";
import store from "../store";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { createPoll, getPoll } from "../actions/itemAction";
import { useParams } from "react-router-dom";
import Poll from "./Poll";

function PollSetup() {
  console.log("yo");

  let { ID } = useParams();

  return (
    <Provider store={store}>
      <Poll id={ID} />
    </Provider>
  );
}

const mapStateToProps = (state) => ({
  poll: state.poll.poll,
  setID: state.setID,
});
export default connect(mapStateToProps, {
  createPoll,
  getPoll,
})(PollSetup);
