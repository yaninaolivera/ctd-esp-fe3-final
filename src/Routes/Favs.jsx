import React from "react";
import Card from '../Components/Card';
import {useContextGlobal} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {
    state: { theme, favs },
  } = useContextGlobal();
  return (
    <>
      <div className={`px-5 py-3 ${theme === "light" ? "bg-white" : "bg-secondary"}`}>
        <h1>Dentist Favs</h1>
        <div className='row'>
          {favs.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>  
  );
};

export default Favs;
