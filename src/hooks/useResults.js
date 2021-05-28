import punkapi from "../api/punkapi";
import React from "react";

export default () => {
  const [results, setResults] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("No Results Found");

  const searchApi = async (searchTerm, num_page = 1) => {
    try {
      // console.log("searchApi", searchTerm, num_page);
      const response = await punkapi.get("/beers", {
        params: {
          food: searchTerm,
          page: num_page,
          per_page: 8,
        },
      });

      setResults(response.data);

      if (results.length > 0) {
        console.log("Results Found");
        setErrorMessage("");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong");
    }
  };

  React.useEffect(() => {
    // console.log("useEffect");
    searchApi();
  }, []); // Empty array as dependency, useEffect is invoked once

  return [searchApi, results, errorMessage];
};
