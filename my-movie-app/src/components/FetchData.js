import React, { useContext, useEffect } from "react";
import { MovieContext } from "./Context";

const FetchData = () => {
  const { state, dispatch } = useContext(MovieContext);

  console.log(state.searchItem);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        ` http://www.omdbapi.com/?apikey=b332a202&s=${state.searchItem}`
      );

      const data = await response.json();

      console.log("data", data);

      dispatch({ type: "SendData", payload: data.Search });
    };

    getData();
  }, [state.searchItem]);
};

export default FetchData;
