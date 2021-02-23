import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Issues from "./components/Issues/Issues";
import { Component } from "react";
import Auth from "./Auth/Auth";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <Layout className="App" auth={this.auth}>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home auth={this.auth} {...props} />}
          />
          <Route path="/issues" exact component={Issues} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
