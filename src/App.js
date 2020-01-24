import React from "react";

import "./App.css";
import Counter from "./components/Counter";
import FruitsFilter from "./components/fruitFilter";
// import TestingAxios from "./components/TestingAxios";
import {BrowserRouter, Link, Route } from "react-router-dom"
// import Axios from "axios";
// import { render } from '@testing-library/react';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/counter">Counter</Link>
        <Link to="/filter">Filter</Link>
        {/* <Link to="/axios">Axios</Link> */}
      </header>
    
      <div>
        <Route path="/counter" component={Counter} />
        <Route path="/filter" component={FruitsFilter} />
        {/* <Route path="/axios" component={TestingAxios} /> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
