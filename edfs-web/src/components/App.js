import "../css/App.css";
import React, { Component } from "react";
import NavigationBar from "./NavigationBar.js";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home.js";
import News from "./News.js";


class App extends Component {
  // constructor() {
  //   super();
  // }

  componentWillMount() {
    // // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    // fetch(AppMarkdown)
    //   .then((res) => res.text())
    //   .then((text) => this.setState({ markdown: text }));
  }

  render() {
    return (
    <div className="App">

      <NavigationBar
        categories={[
          "Home",
          "News",
        ]}
        categories_path={[
          "/home",
          "/news",
        ]}
      ></NavigationBar>
      <div className="body">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/news">
            <News title={"News"} />
          </Route>
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;
