import axios from "axios";
import { createContext, useEffect, useContext, useReducer } from "react";
import { reducer } from  "../../reducers/reducer";

export const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const initialState = {
  theme: "light", 
  favs: lsFavs,
  data: []
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        dispatch({type: "GET_DATA", payload: res.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};


export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);

/*La API a utilizar sera la siguiente: https://jsonplaceholder.typicode.com/users

Y para cada dentista en especifico: https://jsonplaceholder.typicode.com/users/:id*/