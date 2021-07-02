import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import "./Home.css";
import { createPoll, getPoll } from "../actions/itemAction";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poll: [],
      pollQ: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: "",
    };
  }

  handleNewPoll = (event) => {
    const newPoll = {
      PollQuestion: this.state.pollQ,
      Answer1: this.state.answer1,
      Answer2: this.state.answer2,
      Answer3: this.state.answer3,
      Answer4: this.state.answer4,
      Answer5: this.state.answer5,
      A3: 0,
      A4: 0,
      A5: 0,
    };

    this.props.createPoll(newPoll);
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
  };

  render() {
    return (
      <Provider store={store}>
        <div className="homeContainer">
          <form className="createGroupForm" onSubmit={this.handleNewPoll}>
            <h2>Create Poll</h2>
            <br />
            <label>
              <input
                type="text"
                name="pollQ"
                value={this.state.pollQ}
                onChange={this.handleChange}
                placeholder="Enter Poll Question.."
              />
            </label>
            <label>
              <input
                type="text"
                name="answer1"
                value={this.state.answer1}
                onChange={this.handleChange}
                placeholder="Enter Poll Answer.."
              />
            </label>
            <label>
              <input
                type="text"
                name="answer2"
                value={this.state.answer2}
                onChange={this.handleChange}
                placeholder="Enter Poll Answer.."
              />
            </label>
            <input type="submit" value="Create Poll!" />
          </form>
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  poll: state.poll,
});
export default connect(mapStateToProps, {
  createPoll,
  getPoll,
})(Home);
