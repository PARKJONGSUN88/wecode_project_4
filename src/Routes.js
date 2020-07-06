import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SpeedDialPage from "./pages/SpeedDialPage/SpeedDialPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SpeedDialPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
