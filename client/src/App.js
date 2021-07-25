import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import Order from "./components/Order";
function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/">
            <AddUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
