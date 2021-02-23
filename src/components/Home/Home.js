import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="searchbar">
          <button className="filter">Filter</button>
          <input />
          <button className="newIssue">New Issue</button>
        </div>
        <div className="issuesTable"></div>
      </div>
    );
  }
}

export default Home;
