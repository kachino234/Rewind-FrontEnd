import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//PAGES
import { Signup } from "./pages";
// import { Dashboard } from "./pages";
import { Dashboard } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/sign-up" component={Signup} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          <Route path="/dash" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
