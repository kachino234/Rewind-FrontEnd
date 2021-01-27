import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {Landingpage} from "./pages";
import {Landingpagenav} from "./widgets";
// import {Card} from "./components"
// import {RecoverPassword} from './pages';
// import {L}
import './App.css';
import { Landingpage, SignUp, SignIn, Test } from "./pages";
// import {SearchFn} from "./widgets"


function App() {

  return (
    <>
    {/* <Landingpagenav/> */}
    <Landingpage/>
    {/* <SignUp/> */}
    {/* <Router>
        
        <Route exact path="/" render={props => (
          <React.Fragment>
                
          </React.Fragment>
        )}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/SignIn" component={SignIn}/>
        {/* <Route path="/ProductDesignPage" component={ProductDesignPage}/>
        <Route path="/ApplyPage" component={ApplyPage}/>
        <Route path="/JournalPage" component={JournalPage}/>
        <Route path="/FaqPage" component={FaqPage}/>
        <Footer/> */}
    {/* </Router> */} 
  </>
  );
}

export default App;
