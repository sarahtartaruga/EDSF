import NavBar from "./NavBar";
import Home from "./Home";
import about from "./EDSF.wiki/EDSFhome.md";
import tutorial2019Bdit4dal from "./EDSF.wiki/(4)-BDIT4DA-Tutorial-HPCS2019.md";
import tutorial2019Edsf from "./EDSF.wiki/(3)-EDSF-Tutorial-Summer-2019:-Data-Science-Competence-and-Education.md";
import tutorial2020MatesBdit4da from './EDSF.wiki/Webinar-MATES-ED2MIT-"Introduction-to-Big-Data-and-Data-Management-for-Maritime-Industry".md';
import tutorial2021MatesDmg from './EDSF.wiki/MATES-ED2MIT-2021-"Industrial-Data-Spaces,-Organisational-Data-Management-&-Governance-for-the-Maritime-Sector".md';
import tutorial2021MatesBdit4da from './EDSF.wiki/MATES-ED2MIT-2021-"Introduction-to-Big-Data-and-Data-Management-for-Maritime-Industry".md';
import workshop2018Edison from "./EDSF.wiki/EDISON-Workshop-31-May-2018-Denmark.md";
import workshop2018Edsfr3Agenda from "./EDSF.wiki/Agenda---EDSFr3-Design-Workshop-(18-19-July-2018).md";
import workshop2018Edsfr3Uva from "./EDSF.wiki/EDSF-Release-3-Design-Workshop-18-19-July-2018-(UvA).md";
import workshop2019Dtw from "./EDSF.wiki/(1)-DTW2019-Data-Teaching-Workshop-September-2019,-San-Diego.md";
import workshop2019Edfsr4 from "./EDSF.wiki/(2)-EDSF-Release-4-Design-Workshop-20-November-2019.md";
import workshop2020Fair from "./EDSF.wiki/(5)-FAIR-Competences-for-Higher-Education-Design-Workshop-8-9-October-2020-Agenda-and-documents.md";
import Box from "@material-ui/core/Box";
import MarkDownComponent from "./MarkDownComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Box>
        <Box height="10vh">
          <NavBar />
        </Box>
        <Box height="90vh">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <MarkDownComponent markdown={about} />
            </Route>
            <Route path="/tutorials-2019-edsf-data-science-competence-and-education">
              <MarkDownComponent markdown={tutorial2019Edsf} />
            </Route>
            <Route path="/tutorials-2019-bdit4da-hpcs">
              <MarkDownComponent markdown={tutorial2019Bdit4dal} />
            </Route>
            <Route path="/tutorials-2020-mates-ed2mit-bdit4da">
              <MarkDownComponent markdown={tutorial2020MatesBdit4da} />
            </Route>
            <Route path="/tutorials-2021-mates-ed2mit-bdit4da-january-february">
              <MarkDownComponent markdown={tutorial2021MatesBdit4da} />
            </Route>
            <Route path="/tutorials-2021-mates-ed2mit-dmg-february">
              <MarkDownComponent markdown={tutorial2021MatesDmg} />
            </Route>
            <Route path="/workshops-2018-edison-may-denmark">
              <MarkDownComponent markdown={workshop2018Edison} />
            </Route>
            <Route path="/workshops-2018-edsf-release3-july-agenda">
              <MarkDownComponent markdown={workshop2018Edsfr3Agenda} />
            </Route>
            <Route path="/workshops-2018-edsf-release3-july-uva">
              <MarkDownComponent markdown={workshop2018Edsfr3Uva} />
            </Route>
            <Route path="/workshops-2019-dtw-september-sandiego">
              <MarkDownComponent markdown={workshop2019Dtw} />
            </Route>
            <Route path="/workshops-2019-edsf-release4-november">
              <MarkDownComponent markdown={workshop2019Edfsr4} />
            </Route>
            <Route path="/workshops-2020-fair-competences-october">
              <MarkDownComponent markdown={workshop2020Fair} />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
