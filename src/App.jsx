import { Switch, Route } from "react-router-dom";
import {useState} from "react";

import Header from "./components/Header";
import Login from "./pages/Login";
import Summaries from "./pages/Summaries";
import AddSummary from "./pages/AddSummary";
import './App.css';

function App() {
  const[logged, setLogged] = useState(true);
  return (
    <div className="App">
      <Header logged = {logged} />
      <Switch>
        <Route exact path="/">
          <Summaries logged = {logged} />
        </Route>
        <Route exact path="/login/">
          <Login logged = {logged} />
        </Route>
        <Route exact path="/add/">
          <AddSummary logged = {logged} />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
