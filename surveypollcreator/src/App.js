import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Poll from "./components/Poll";
import store from "./store";
import { connect } from "react-redux";
import { Provider } from "react-redux";

import { createPoll, getPoll } from "./actions/itemAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/polls/:id" poll={this.props.poll}>
                <Poll />
              </Route>
            </Switch>
          </div>
        </Router>
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
})(App);
