import "./styles.css";

import { HashRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/nav";
import TSS from "./pages/tss";
import Menu from "./pages/menu";
import Home from "./pages/home";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/the-side-studio" component={TSS} />
          {/* <Route exact path="/gallery" component={Gallery} /> */}
          <Nav />
        </Switch>
      </HashRouter>
    </div>
  );
};
export default App;
