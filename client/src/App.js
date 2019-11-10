import React, { Component } from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/Search";
import Saved from "./pages/Saved";
import NavTabs from "./components/NavTabs";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavTabs />
        <Switch>
          <Route exact path="/" Component={SearchPage} />
          <Route exact path="/search" Component={SearchPage} />
          <Route exact path="/saved" Component={Saved} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
