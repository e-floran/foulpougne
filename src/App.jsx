import { Switch, Route } from "react-router-dom";
import {useState, useEffect} from "react";

import Header from "./components/Header";
import Login from "./pages/Login";
import Summaries from "./pages/Summaries";
import SingleSummary from "./pages/SingleSummary";
import AddSummary from "./pages/AddSummary";
import './App.css';

function App() {
  const [logged, setLogged] = useState(false);

  useEffect(()=>{
    if(localStorage.logged===null){
      setLogged(false);
  } else if (localStorage.logged==="false"){
      setLogged(false);
  } else{
      setLogged(true);
  }
  })

  return (
    <div className="App">
      <Header logged = {logged} />
      <Switch>
        <Route exact path="/">
          <Summaries logged = {logged} />
        </Route>
        <Route exact path="/summaries/:id">
          <SingleSummary />
        </Route>
        <Route exact path="/login/">
          <Login />
        </Route>
        <Route exact path="/add/">
          <AddSummary logged = {logged} />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
