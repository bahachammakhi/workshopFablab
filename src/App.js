import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";

function App() {
  return (
    <Router>
      <Route path="/">
        <HomeContainer />
      </Route>
    </Router>
  );
}

export default App;
