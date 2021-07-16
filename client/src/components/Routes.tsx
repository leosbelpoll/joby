import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="*">
          <Error code={404} message="" />
        </Route>
      </Switch>
    </Router>
  );
}
