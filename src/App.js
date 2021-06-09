import "./App.css";
import HomePart from "./Components/HomeComponents/HomePart/HomePart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./Components/LogInComponents/LoginPage/LoginPage";
import { createContext, useState, useEffect } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import DashboardMain from "./Components/DashboardComponents/DashboardMainPart/DashboardMain";
import { initializeFramework } from "./Components/LogInComponents/LoginManegment/LoginManegment";
import firebase from "firebase/app";
import "firebase/auth";

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    initializeFramework();
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  }, []);
  console.log(user?.displayName);
  
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePart />
          </Route>
          <Route path="/home">
            <HomePart />
          </Route>
          <PrivateRoute path="/dashboard">
            <DashboardMain />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
