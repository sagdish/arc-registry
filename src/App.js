import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";

import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>THIS IS ARC-REGISTRY!</h1>
      <Home />
    </div>
  );
}

export default App;
