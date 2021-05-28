import React from "react";
import BeerPreviewGrid from "../Components/BeerPreviewGrid";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";

function FavoriteBeersScreen(props) {
  // Redux
  const favoriteList = useSelector((state) => state.favoriteList);
  const dispatch = useDispatch();

  //hooks
  const [open, setOpen] = React.useState(false);
  const [isEmplty, setIsEmpty] = React.useState(false);

  React.useEffect(() => {
    if (favoriteList.length === 0) setIsEmpty(true);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <h2>Favorite Beers</h2>
        </Grid>
      </Grid>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        disabled={isEmplty}
      >
        Delete Favorites
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete all the favorites?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
              dispatch({ type: "removeAll" });
              setIsEmpty(true);
            }}
            color="primary"
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <br></br>
      <br></br>
      <BeerPreviewGrid
        results={favoriteList}
        favoritePage={true}
      ></BeerPreviewGrid>
    </div>
  );
}

export default FavoriteBeersScreen;
