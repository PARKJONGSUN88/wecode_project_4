import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SpeedDialPage from "./pages/SpeedDialPage/SpeedDialPage";
import Rating from "./pages/RatingPage/RatingPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SpeedDialPage} />
          <Route exact path="/Rating" component={Rating} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
