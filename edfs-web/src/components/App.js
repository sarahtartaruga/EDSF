import "../css/App.css";
import React, { Component } from "react";
import NavigationBar from "./NavigationBar.js";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header.js";
import Page from "./Page.js";

import EdsfMarkdown0 from "../EDSF.wiki/EDSFhome.md";
import EdsfMarkdown1 from "../md-files/Webinar-MATES-ED2MIT-Introduction-to-Big-Data-and-Data-Management-for-Maritime-Industry.md";
import EdsfMarkdown2 from "../EDSF.wiki/(1)-DTW2019-Data-Teaching-Workshop-September-2019,-San-Diego.md";
import EdsfMarkdown3 from "../EDSF.wiki/(1)-DTW2019-Data-Teaching-Workshop-September-2019,-San-Diego.md";
import EdsfMarkdown4 from "../EDSF.wiki/(2)-EDSF-Release-4-Design-Workshop-20-November-2019.md";
import EdsfMarkdown5 from "../EDSF.wiki/(4)-BDIT4DA-Tutorial-HPCS2019.md";
import EdsfMarkdown6 from "../EDSF.wiki/(5)-FAIR-Competences-for-Higher-Education-Design-Workshop-8-9-October-2020-Agenda-and-documents.md";
import EdsfMarkdown7 from "../EDSF.wiki/Agenda---EDSFr3-Design-Workshop-(18-19-July-2018).md";
import EdsfMarkdown8 from "../EDSF.wiki/EDISON-Workshop-31-May-2018-Denmark.md";
import EdsfMarkdown9 from "../EDSF.wiki/EDSF-Release-3-Design-Workshop-18-19-July-2018-(UvA).md";


function importWikiFiles() {
  var con = require.context("../EDSF.wiki", false, /.md$/);
  console.log(con.keys());
}

class App extends Component {
  constructor() {
    super();
    importWikiFiles();

    this.categories = [
      "Home",
      "MATES Webinar ED2MIT 2020",
      "DTW 2019",
      "EDFS Release 4 Workshop 2019",
      "EDFS Tutorial Summer 2019",
      "BDIT4DA Tutorial HPCS2019",
      "FAIR Competences for Higher Education 2020",
      "EDSF r3 Design Workshop 2018",
      "EDISON Workshop Denmark 2018",
      "EDFS Release 3 Workshop 2018"
    ];

    this.categoriesPath = [
      "/home",
      "/webinar-mates",
      "/dtw-2019",
      "/edfs-release-4",
      "/edfs-tutorial-2019",
      "/bdit4da-tutorial-hpcs-2019",
      "/fair-competences",
      "/edsfr3-design-workshop",
      "/edison-workshop-denmark-2018",
      "/edfs-release-4"
    ];
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavigationBar
          categories={this.categories}
          categories_path={this.categoriesPath}
        ></NavigationBar>
        <div className="body">
          <Switch>
            <Route exact path="/">
              <Redirect to="/" />
            </Route>
            <Route
              path={this.categoriesPath[0]}
              component={(props) => (
                <Page edsfMarkdown={EdsfMarkdown0} title={this.categories[0]} />
              )}
            />
            <Route
              path={this.categoriesPath[1]}
              component={(props) => (
                <Page edsfMarkdown={EdsfMarkdown1} title={this.categories[1]} />
              )}
            />
            <Route
              path={this.categoriesPath[2]}
              component={(props) => (
                <Page edsfMarkdown={EdsfMarkdown2} title={this.categories[2]} />
              )}
            />
            <Route
              path={this.categoriesPath[3]}
              component={(props) => (
                <Page edsfMarkdown={EdsfMarkdown3} title={this.categories[3]} />
              )}
            />
            <Route
              path={this.categoriesPath[4]}
              component={(props) => (
                <Page edsfMarkdown={EdsfMarkdown4} title={this.categories[4]} />
              )}
            />
            <Route
              path={this.categoriesPath[5]}
              component={(props) => (
                <Page edsfMarkdown={EdsfMarkdown5} title={this.categories[5]} />
              )}
            />
            <Route
              path={this.categoriesPath[6]}
              component={(props) => (
                <Page edsfMarkdown={EdsfMarkdown6} title={this.categories[6]} />
              )}
            />
            <Route
              path={this.categoriesPath[7]}
              component={(props) => (
                <Page edsfMarkdown={EdsfMarkdown7} title={this.categories[7]} />
              )}
            />
            <Route
              path={this.categoriesPath[8]}
              component={(props) => (
                <Page edsfMarkdown={EdsfMarkdown8} title={this.categories[8]} />
              )}
            />
            <Route
              path={this.categoriesPath[9]}
              component={(props) => (
                <Page edsfMarkdown={EdsfMarkdown9} title={this.categories[9]} />
              )}
            />
            {/* <Route path={this.categoriesPath[6]}>
              <Mates title={this.categories[6]} />
            </Route> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
