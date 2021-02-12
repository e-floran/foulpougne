import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Summaries from "./pages/Summaries";
import SingleSummary from "./pages/SingleSummary";
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Summaries />
        </Route>
        <Route exact path="/summaries/:id">
          <SingleSummary />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
