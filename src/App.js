import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Component } from "react";
import Auth from "./Auth/Auth";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import Home from "./views/Home";
import Repository from "./views/Repository";
import RepoIssues from "./views/RepoIssues";
import Comments from "./views/Comments";

//Init Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      // authorization: `Bearer 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`,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  }),
  credentials: "same-origin",
});

const history = createBrowserHistory();
console.log(history);

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Layout className="App" auth={this.auth}>
          <Router history={history}>
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
          </Router>
        </Layout>
      </ApolloProvider>
    );
  }
}

export default App;
