import "./App.css";
import { FcSearch } from "react-icons/fc";
import { useContext, useState } from "react";
import FetchData from "./components/FetchData";
import { MovieContext } from "./components/Context";
import Card from "./components/Card";

function App() {
  const { state, dispatch } = useContext(MovieContext);
  const [search, setSearch] = useState("");
  console.log(search);
  console.log("App File", state);

  const handleClick = () => {
    dispatch({ type: "SearchedInput", payload: search });
  };

  return (
    <div className="App flex flex-col justify-center items-center ">
      <FetchData />

      <div className="flex my-4 gap-5">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2"
          type="text"
          placeholder="Search for a movie"
        />
        <button onClick={handleClick}>
          <FcSearch />
        </button>
      </div>

      <Card />
    </div>
  );
}

export default App;
