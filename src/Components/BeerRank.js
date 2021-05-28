import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useSelector, useDispatch } from "react-redux";

function BeerRank(props) {
  // Redux
  const dispatch = useDispatch();

  // hooks
  const [value, setValue] = React.useState(props.beer.rank);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rank</Typography>
        <Rating
          name={props.beer.name}
          value={value}
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
            props.beer.rank = newValue;
            dispatch({ type: "update", beer: props.beer });
          }}
        />
      </Box>
    </div>
  );
}

export default BeerRank;
