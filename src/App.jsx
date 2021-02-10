import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./pages/Login";
import Summaries from "./pages/Summaries";
import SingleSummary from "./pages/SingleSummary";
import AddSummary from "./pages/AddSummary";
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
        <Route exact path="/login/">
          <Login />
        </Route>
        <Route exact path="/add/">
          <AddSummary />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
