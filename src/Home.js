import { useState, useEffect } from "react"; //importing the useState hook into React
import BlogList from "./BlogList";
import useFetch from "./useFetch";

// Don't store useEffect in a constant, just need to pass a function as an argument. Can use to fetch data or comm with authentifiction services
const Home = () => {
  const {
    data: blogs,
    isPending,
    Error,
  } = useFetch("http://localhost:8000/blogs"); // When you click the VSCode thing after typing in 'useFetch', it auto imports it at the top (line 3)

  return (
    <div className="home">
      {Error && <div>{Error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}{" "}
      {/*Conditional template*/}
    </div>
  );
};

export default Home;
