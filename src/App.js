import NavBar from "./screens/navigation/navBar";
import HomePage from "./screens/homePage/homePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
