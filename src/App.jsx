import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./pages/Login";
import Summaries from "./pages/Summaries";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Summaries />
        </Route>

        <Route exact path="/login/">
          <Login />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
