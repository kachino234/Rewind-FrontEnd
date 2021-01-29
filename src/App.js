import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//PAGES
import { Signup } from "./pages";
import { Dashboard } from "./pages";
import { Footer } from "./components";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/sign-up" component={Signup} />
          <Route path="/dash" component={Dashboard} />
          <Route path="/footer" component={Footer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
