//A component is a function that returns a JSX template, then is exported at the bottom of the file.
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Moreland Blog</h1>
      <div className="links">
        {/* React uses <Link to> insead of <a href> anchor tags */}
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
