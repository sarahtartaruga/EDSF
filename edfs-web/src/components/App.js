import "../css/App.css";
import React, { Component } from "react";
import NavigationBar from "./NavigationBar.js";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header.js";
import Page from "./Page.js";

import EdsfMarkdown0 from "../EDSF.wiki/EDSFhome.md";
import EdsfMarkdown1 from '../EDSF.wiki/Webinar-MATES-ED2MIT-2021-"Introduction-to-Big-Data-and-Data-Management-for-Maritime-Industry".md';
import EdsfMarkdown2 from "../md-files/Webinar-MATES-ED2MIT-Introduction-to-Big-Data-and-Data-Management-for-Maritime-Industry.md";
import EdsfMarkdown3 from "../EDSF.wiki/(1)-DTW2019-Data-Teaching-Workshop-September-2019,-San-Diego.md";
import EdsfMarkdown4 from "../EDSF.wiki/(1)-DTW2019-Data-Teaching-Workshop-September-2019,-San-Diego.md";
import EdsfMarkdown5 from "../EDSF.wiki/(2)-EDSF-Release-4-Design-Workshop-20-November-2019.md";
import EdsfMarkdown6 from "../EDSF.wiki/(4)-BDIT4DA-Tutorial-HPCS2019.md";
import EdsfMarkdown7 from "../EDSF.wiki/(5)-FAIR-Competences-for-Higher-Education-Design-Workshop-8-9-October-2020-Agenda-and-documents.md";
import EdsfMarkdown8 from "../EDSF.wiki/Agenda---EDSFr3-Design-Workshop-(18-19-July-2018).md";
import EdsfMarkdown9 from "../EDSF.wiki/EDISON-Workshop-31-May-2018-Denmark.md";
import EdsfMarkdown10 from "../EDSF.wiki/EDSF-Release-3-Design-Workshop-18-19-July-2018-(UvA).md";

class App extends Component {
  constructor() {
    super();

    this.categories = [
      "Home",
      "MATES ED2MIT 2021",
      "MATES Webinar ED2MIT 2020",
      "FAIR Competences for Higher Education 2020",
      "DTW 2019",
      "EDFS Release 4 Workshop 2019",
      "EDFS Tutorial Summer 2019",
      "BDIT4DA Tutorial HPCS2019",
      "EDSF r3 Design Workshop 2018",
      "EDISON Workshop Denmark 2018",
      "EDFS Release 3 Workshop 2018",
    ];

    this.categoriesPath = [
      "/home",
      "/mates-ed2mit-2021",
      "/webinar-mates-2020",
      "/fair-competences",
      "/dtw-2019",
      "/edfs-release-4",
      "/edfs-tutorial-2019",
      "/bdit4da-tutorial-hpcs-2019",
      "/edsfr3-design-workshop",
      "/edison-workshop-denmark-2018",
      "/edfs-release-3",
    ];

    this.markdowns = [
      EdsfMarkdown0,
      EdsfMarkdown1,
      EdsfMarkdown2,
      EdsfMarkdown3,
      EdsfMarkdown4,
      EdsfMarkdown5,
      EdsfMarkdown6,
      EdsfMarkdown7,
      EdsfMarkdown8,
      EdsfMarkdown9,
      EdsfMarkdown10,
    ];
  }

  createPages() {
    const res = [];
    for (let i = 0; i < this.categories.length; i++) {
      res.push(
        <Route
          path={this.categoriesPath[i]}
          component={(props) => (
            <Page edsfMarkdown={this.markdowns[i]} title={this.categories[i]} />
          )}
        />
      );
    }

    return res;
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
              <Redirect to={this.categoriesPath[0]} />
            </Route>
            {this.createPages()}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
