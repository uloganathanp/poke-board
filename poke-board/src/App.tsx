import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { getPageList } from "./Pages";

function App() {
  //Get all the pages
  const Routes = getPageList();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/">
          <Redirect to="/search" />
      </Route>
      <Switch>
        {Routes.map((page) => {
          return (
            <Route key={page.id} path={page.path} exact>
              {page.element}
            </Route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
