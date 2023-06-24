import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Festival from "./pages/Festival";
import FullProgram from "./pages/FullProgram";
import Friday from "./pages/Friday";
import Saturday from "./pages/Saturday";
import Sunday from "./pages/Sunday";
import Informations from "./pages/Informations";
import Summaries from "./pages/Summaries";
import SingleSummary from "./pages/SingleSummary";
import './App.css';

function App() {

  return (
    <div className="App">
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/festival/">
            <Festival />
          </Route>
          <Route exact path="/fullProgram/">
            <FullProgram />
          </Route>
          <Route exact path="/fullProgram/friday/">
            <Friday />
          </Route>
          <Route exact path="/fullProgram/saturday/">
            <Saturday />
          </Route>
          <Route exact path="/fullProgram/sunday/">
            <Sunday />
          </Route>
          <Route exact path="/informations/">
            <Informations />
          </Route>
          <Route exact path="/summaries/">
            <Summaries />
          </Route>
          <Route exact path="/summaries/:id">
            <SingleSummary />
          </Route>
          </Switch>
        </div>
        <Footer />
    </div>
  );
}

export default App;
