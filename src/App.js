import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Repository from "./components/Repository/Repository";

import { Component } from "react";
import Auth from "./Auth/Auth";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import RepoIssues from "./components/Repository/RepoIssues";
import Comments from "./components/Comments/Comments";

//Init Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  }),
  credentials: "same-origin",
});

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Layout className="App" auth={this.auth}>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home auth={this.auth} {...props} />}
            />
            <Route path="/search" exact component={Repository} />

            <Route path="/:owner/:name" exact component={RepoIssues} />
            <Route path="/:owner/:name/:number" component={Comments} />
          </Switch>
        </Layout>
      </ApolloProvider>
    );
  }
}

export default App;
