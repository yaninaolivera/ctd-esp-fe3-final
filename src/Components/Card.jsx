import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

const Card = ({ item }) => {
  const { dispatch, state } = useContextGlobal();

  const findFav = state.favs.some((fav) => fav.id === item.id);
  console.log(findFav);
  const toggleFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: item });
  };

  return (
    <div className="col-md-2 mb-3">
      <div className="card p-2">
        <Link to={`/detail/${item.id}`} className="card-item">
          <img src="images/doctor.jpg" alt="doctor" />
          <div className="text-center">
            <p className="mt-3">{item.name}</p>
            <span>{item.username}</span>
          </div>
        </Link>
        <br />
        <button type="button" className="btn btn-light" onClick={toggleFav}>{findFav ? "🌟" : "⭐"}</button>
      </div>
    </div>
  );
};

export default Card;

//Lo que había antes en toggleFav
// if (findFav) {
//   dispatch({ type: "DELETE_FAV", payload: char });
// } else {
//   dispatch({ type: "ADD_FAV", payload: char });
// }
// setFavs((favs) => [...favs, char]);
