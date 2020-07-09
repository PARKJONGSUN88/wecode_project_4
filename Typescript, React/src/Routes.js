import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import RatingPage from "./pages/RatingPage/RatingPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/rating" component={RatingPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
