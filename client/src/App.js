import "./App.css";
import { LoginPage } from "./components/login";
import { Switch, BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./components/privateRoute";
import PublicRoute from "./components/publicRoute";
import { UserDetailsPage } from "./components/userDetailsPage";
import { UsersList } from "./components/usersList";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={true} component={LoginPage} path="/" exact />
        <PrivateRoute component={UserDetailsPage} path="/userdetails" exact />
        <PrivateRoute component={UsersList} path="/userdetailslist" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
