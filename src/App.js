import Feat01 from "./features/feat-01";
import Feat02 from "./features/feat-02";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Feat01 />
        </Route>
        <Route path="/feat02">
          <Feat02 />
        </Route>
      </Switch>
    </Router>
  );
};
