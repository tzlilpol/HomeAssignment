import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

function SearchBar(props) {
  const handleChange = (event) => {
    props.onChangeTerm(event.target.value);
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <h2>Food Paring</h2>
          <TextField
            placeholder="Search ..."
            value={props.term}
            onChange={handleChange}
          />

          <NavLink
            to={{
              pathname: "/",
              search: `?food=${props.term}`,
            }}
          >
            <IconButton
              disabled={props.term === "" ? true : false}
              aria-label="add to favorites"
              onClick={props.onTermSubmit}
            >
              <SearchIcon />
            </IconButton>
          </NavLink>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchBar;
