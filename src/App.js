//App.js is our root component. First component that gets rooted to the Dom. Sits at the top of the component tree. Index.js renders it.
import Navbar from "./Navbar"; //Importing Navbar.js function into this component (Root component). Then nest it in the JS function below.
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/*Nest Navbar.js into this JS function*/}
        <div className="content">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/create">
                <Create />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
