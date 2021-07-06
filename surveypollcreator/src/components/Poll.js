import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import "./Poll.css";
import { createPoll, getPoll } from "../actions/itemAction";

class Poll extends Component {
  render() {
    console.log(this.props.store);
    return (
      <Provider store={store}>
        <div className="homeContainer">
          <form className="createGroupForm">
            <h1>Poll</h1>
            <h1>{this.props.ID}</h1>
          </form>
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  poll: state.poll.poll,
});
export default connect(mapStateToProps, {
  createPoll,
  getPoll,
})(Poll);
