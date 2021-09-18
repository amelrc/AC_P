import styled from "styled-components";
import Logo from "./images/assets/logo.svg";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/nav";
import BSP from "./pages/bspSoftware";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Logos from "./pages/logos";
import Rubrics from "./pages/rubrics";
import Freelance from "./pages/freelance";

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  right: 0;
  z-index: 1;
`;
const App = () => {
  return (
    <HashRouter>
      <div id="app">
        <LogoWrapper id="logo wrapper">
          <Link to="/" style={{ backgroundColor: "#0d0b33", height: 54 }}>
            <img width="58px" src={Logo} alt="logo" />
          </Link>
        </LogoWrapper>
        <Nav />
        <Switch>
          <Route exact path="/software/blue-star-planning" component={BSP} />
          <Route exact path="/branding/logos" component={Logos} />
          <Route exact path="/software/rubrics" component={Rubrics} />
          <Route exact path="/freelance" component={Freelance} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </HashRouter>
  );
};
export default App;
