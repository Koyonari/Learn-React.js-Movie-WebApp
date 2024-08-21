import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

//b690ae75
const API_URL = "http://www.omdbapi.com/?apikey=b690ae75";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);
  return <h1 className="font-bold text-3xl text-cyan-500">App</h1>;
};

export default App;
