import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page from "./page";
import Homepage from "./homepage";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route
            exact
            path="/service"
            render={() => <Page name="SERVICE" />}
          ></Route>
          <Route path="/home" exact>
            <Homepage />
          </Route>
          <Route
            path="/works/all"
            exact
            render={() => <Page name="ALL" />}
          ></Route>
          <Route
            path="/works/graphic"
            exact
            render={() => <Page name="GRAPHIC" />}
          ></Route>
          <Route
            path="/works/design"
            exact
            render={() => <Page name="DESIGN" />}
          ></Route>
          <Route
            path="/works/website"
            exact
            render={() => <Page name="WEBSITE" />}
          ></Route>
          <Route
            path="/works/logo"
            exact
            render={() => <Page name="LOGO" />}
          ></Route>
          <Route
            path="/aboutme"
            exact
            render={() => <Page name="ABOUT ME" />}
          ></Route>
          <Route
            path="/contact"
            exact
            render={() => <Page name="CONTACT" />}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
