import React from "react";
import BeerPreview from "./BeerPreview";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

function BeerPreviewGrid(props) {
  // style
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2} justify="center">
        {props.results.map((item) => (
          <Grid item xs={3} key={item.id}>
            <BeerPreview
              beer={item}
              favoritePage={props.favoritePage}
            ></BeerPreview>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
}));
export default BeerPreviewGrid;
