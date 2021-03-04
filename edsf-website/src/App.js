import NavBar from "./NavBar";
import About from "./Other/About";
import Home from "./Other/Home";
import Tutorial2019Edsf from "./Tutorials/2019/EdsfTutorial";
import Tutorial2019Bdit4dal from "./Tutorials/2019/Bdit4daTutorial";
import Tutorial2020MatesBdit4da from "./Tutorials/2020/MatesEd2mitBdit4da";
import Tutorial2021MatesDmg from "./Tutorials/2021/MatesEd2mitDmg";
import Tutorial2021MatesBdit4da from "./Tutorials/2021/MatesEd2mitBdit4da";
import Workshop2018Edison from "./Workshops/2018/EdisonMayDenmark";
import Workshop2018Edsfr3Agenda from "./Workshops/2018/Edsfr3DesignAgenda";
import Workshop2018Edsfr3Uva from "./Workshops/2018/Edsfr3DesignUva";
import Workshop2019Dtw from "./Workshops/2019/DtwSanDiego";
import Workshop2019Edfsr4 from "./Workshops/2019/Edfsr4DesignNovember";
import Workshop2020Fair from "./Workshops/2020/FairCompetencesOctober";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/tutorials-2019-edsf-data-science-competence-and-education">
            <Tutorial2019Edsf />
          </Route>
          <Route path="/tutorials-2019-bdit4da-hpcs">
            <Tutorial2019Bdit4dal />
          </Route>
          <Route path="/tutorials-2020-mates-ed2mit-bdit4da">
            <Tutorial2020MatesBdit4da />
          </Route>
          <Route path="/tutorials-2021-mates-ed2mit-bdit4da-january-february">
            <Tutorial2021MatesBdit4da />
          </Route>
          <Route path="/tutorials-2021-mates-ed2mit-dmg-february">
            <Tutorial2021MatesDmg />
          </Route>
          <Route path="/workshops-2018-edison-may-denmark">
            <Workshop2018Edison />
          </Route>
          <Route path="/workshops-2018-edsf-release3-july-agenda">
            <Workshop2018Edsfr3Agenda />
          </Route>
          <Route path="/workshops-2018-edsf-release3-july-uva">
            <Workshop2018Edsfr3Uva />
          </Route>
          <Route path="/workshops-2019-dtw-september-sandiego">
            <Workshop2019Dtw />
          </Route>
          <Route path="/workshops-2019-edsf-release4-november">
            <Workshop2019Edfsr4 />
          </Route>
          <Route path="/workshops-2020-fair-competences-october">
            <Workshop2020Fair />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
