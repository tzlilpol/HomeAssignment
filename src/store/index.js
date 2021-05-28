import { createStore } from "redux";

const favoriteReducer = (state = { favoriteList: [] }, action) => {
  // console.log(action);
  if (action.type === "add")
    return {
      favoriteList: [...state.favoriteList, action.beer],
    };
  if (action.type === "remove")
    return {
      favoriteList: state.favoriteList.filter(
        (item) => item.id !== action.beer.id
      ),
    };
  if (action.type === "removeAll")
    return {
      favoriteList: [],
    };

  if (action.type === "update") {
    const index = state.favoriteList.findIndex(
      (item) => item.id === action.beer.id
    );

    return {
      favoriteList: [
        ...state.favoriteList.slice(0, index),
        { ...state.favoriteList[index], rank: action.beer.rank },
        ...state.favoriteList.slice(index + 1),
      ],
    };
  }
  return state;
};

const store = createStore(favoriteReducer);

export default store;
