import Dashboard from "Pages/Dashboard";
import Home from "Pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;