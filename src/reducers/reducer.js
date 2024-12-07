export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DATA":
        return { ...state, data: action.payload };
      case "ADD_FAV":
        return { ...state, favs: [...state.favs, action.payload] };
      case "DELETE_FAV": //Acción extra
        const filterFavs = state.favs.filter(
          (fav) => fav.id !== action.payload.id
        );
        return { ...state, favs: filterFavs };
      case "TOGGLE_THEME":
        return {...state, theme: state.theme === "light" ? "dark" : "light"};
    }
  };
  