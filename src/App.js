import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Issue from "./components/Issue/Issue";
function App() {
  return (
    <Layout className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/profile" exact component={Issue} />
      </Switch>
    </Layout>
  );
}

export default App;
