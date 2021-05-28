import React from "react";
import BeerPreviewGrid from "../Components/BeerPreviewGrid";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import { Route, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";

function BrowseBeersScreen(props) {
  const itemsPerPage = 8;

  const [term, setTerm] = React.useState("");
  const [searchApi, results, errorMessage] = useResults();
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(Math.ceil(100 / itemsPerPage));
  const params = useParams();

  const handleChange = (event, value) => {
    setPage(value);
    if (term === "") searchApi(undefined, value);
    else searchApi(term, value);
  };

  return (
    <div>
      <SearchBar
        term={term}
        onChangeTerm={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => {
          handleChange();
        }}
      ></SearchBar>
      <Route
        path="/"
        onEnter={() => {
          handleChange();
        }}
      >
        <BeerPreviewGrid results={results}></BeerPreviewGrid>
      </Route>
      <br></br>

      <Grid container spacing={2} justify="center">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          variant="outlined"
          shape="rounded"
          value={page}
        />
      </Grid>
    </div>
  );
}

export default BrowseBeersScreen;
