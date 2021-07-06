import React from "react";
import store from "../store";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import "./Poll.css";
import { createPoll, getPoll } from "../actions/itemAction";
import { useParams } from "react-router-dom";

function Poll(props) {
  // componentDidMount() {
  //   const {
  //     match: { params },
  //   } = this.props;
  //   getPoll(params.id);
  // }

  let { id } = useParams();

  return (
    <Provider store={store}>
      <div className="homeContainer">
        <form className="createGroupForm">
          <h1>Poll</h1>
          <h1>{id}</h1>
          <button onClick={() => console.log(props)}>Props</button>
        </form>
      </div>
    </Provider>
  );
}

const mapStateToProps = (state) => ({
  poll: state.poll.poll,
});
export default connect(mapStateToProps, {
  createPoll,
  getPoll,
})(Poll);
