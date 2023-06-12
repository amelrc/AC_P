import styled from "styled-components";
import Logo from "./images/assets/LOGOS/logo.svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { NavTop, NavBot } from "./components/Nav";

import BSP from "./pages/bspSoftware";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Logos from "./pages/logos";
import Rubrics from "./pages/rubrics";
import Freelance from "./pages/freelance";

const App = () => {
  return (
    <Router>
      <div id="app" style={{ position: "relative", minHeight: "100vh" }}>
        <NavTop style={{ position: "fixed", top: 0, zIndex: 100 }} />
        <Switch>
          <Route path="/software/blue-star-planning" component={BSP} />
          <Route path="/branding/logos" component={Logos} />
          <Route path="/software/rubrics" component={Rubrics} />
          <Route path="/freelance" component={Freelance} />
          <Route path="/work" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
        <NavBot style={{ position: "fixed", bottom: 0, zIndex: 100 }} />
      </div>
    </Router>
  );
};
export default App;
