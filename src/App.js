import React from "react";
import {Landingpage} from "./pages";
import {Landingpagenav} from "./widgets"
// import {Card} from "./components"
import './App.css';

function App() {
  return (
    <div className="App">
      <Landingpagenav/>
      <Landingpage/>
      {/* <Card/> */}
    </div>
  );
}

export default App;
