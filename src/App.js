import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {Landingpage} from "./pages";
import {Landingpagenav} from "./widgets";
// import {Card} from "./components"
// import {RecoverPassword} from './pages';
// import {L}
import './App.css';
import { Landingpage, SignUp, SignIn, Movieplayer } from "./pages";
// import {SearchFn} from "./widgets"


function App() {

  return (
    <>
    
    {/* <Landingpagenav/> */}
    
    {/* <SignUp/> */}
    <Router>
        
        <Route exact path="/" render={props => (
          <React.Fragment>
                <Landingpage/>
          </React.Fragment>
        )}/>
        <Route path="/Movieplayer" component={Movieplayer}/>
        <Route path="/SignIn" component={SignIn}/>
         {/* <Route path="/ProductDesignPage" component={ProductDesignPage}/>
        <Route path="/ApplyPage" component={ApplyPage}/>
        <Route path="/JournalPage" component={JournalPage}/>
        <Route path="/FaqPage" component={FaqPage}/>
        <Footer/> */}
     </Router> 
  </>
  );
}

export default App;
