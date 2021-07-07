import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import "./Poll.css";
import { createPoll, getPoll } from "../actions/itemAction";

class Poll extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="homeContainer">
          <form className="createGroupForm">
            <h1>Poll</h1>
            <button onClick={() => console.log(this.props.setID)}>
              Check poll
            </button>
          </form>
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  poll: state.poll.poll,
  setID: this.props.id,
  iD: state.iD,
});
export default connect(mapStateToProps, {
  createPoll,
  getPoll,
})(Poll);
