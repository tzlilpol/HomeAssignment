import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector, useDispatch } from "react-redux";
import BeerRank from "./BeerRank";
function BeerPreview(props) {
  // style
  const classes = useStyles();

  // hooks
  const [expanded, setExpanded] = React.useState(false);
  const [color, setColor] = React.useState("inherit");
  const [cardContent, setCardContent] = React.useState("");

  // Redux
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favoriteList);

  React.useEffect(() => {
    const beer = favoriteList.find((item) => item.id === props.beer.id);
    if (beer !== undefined) {
      setColor("primary");
      props.beer["rank"] = beer.rank;
    } else {
      setColor("inherit");
      props.beer["rank"] = 2;
    }
    if (props.favoritePage === true) {
      setCardContent(
        <CardContent>
          <BeerRank beer={props.beer}></BeerRank>
        </CardContent>
      );
    } else {
      setCardContent("");
    }
  }, []);

  // functions
  const handleChangeColor = () => {
    if (color === "inherit") {
      setColor("primary");
      dispatch({ type: "add", beer: props.beer });
    } else {
      setColor("inherit");
      dispatch({ type: "remove", beer: props.beer });
    }
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.beer.name[0]}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              handleChangeColor();
            }}
          >
            <FavoriteIcon color={color} />
          </IconButton>
        }
        title={props.beer.name}
        subheader={props.beer.tagline}
      ></CardHeader>
      <CardMedia
        className={classes.media}
        image={props.beer.image_url}
        title={props.beer.name}
      />
      {cardContent}

      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{props.beer.description}</Typography>
          <Typography paragraph>
            First Brewed : {props.beer.first_brewed}
          </Typography>
          <Typography paragraph>ABV : {props.beer.abv}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "280px",
  },
  header: {
    height: "60px",
    width: "250px",
  },
  media: {
    position: "relative",
    height: "260px",
    width: "65px",
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#5a1582",
  },
}));

export default BeerPreview;
