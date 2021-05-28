import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AppsIcon from "@material-ui/icons/Apps";
import { NavLink } from "react-router-dom";
function NavigationBar(props) {
  // style
  const classes = useStyles();

  // hooks
  const [value, setValue] = React.useState(1);

  //functions
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab label="BuddyBeer" disabled />

          <Tab
            icon={
              <NavLink to="/">
                <AppsIcon fontSize="large" />
              </NavLink>
            }
            label="Browse Beers"
          />
          <Tab
            icon={
              <NavLink to="/favorites">
                <FavoriteIcon />
              </NavLink>
            }
            label="Favorite Beers"
          />
        </Tabs>
      </Paper>
    </div>
  );
}
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
  },
});

export default NavigationBar;
