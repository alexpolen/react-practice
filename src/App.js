//App.js is our root component. First component that gets rooted to the Dom. Sits at the top of the component tree. Index.js renders it.
import Navbar from "./Navbar"; //Importing Navbar.js function into this component (Root component). Then nest it in the JS function below.
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const person = { name: 'yoshi', age: 30};   React can't output booleans and objects (array in this case)
  const link = "http://www.google.com"; //anchor tag stored in a dynamic value

  return (
    <div className="App">
      <Navbar /> {/*Nest Navbar.js into this JS function*/}
      <div className="content">
        <div className="content">
          <Home /> {/*Nest Home.js into this JS function*/}
        </div>
      </div>
    </div>
  );
}

export default App;
