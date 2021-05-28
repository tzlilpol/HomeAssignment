// import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import BrowsePage from "./Pages/BrowsePage";
import FavoritePage from "./Pages/FavoritePage";

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Switch>
        <Route path="/favorites">
          <FavoritePage />
        </Route>
        <Route path="/">
          <BrowsePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
