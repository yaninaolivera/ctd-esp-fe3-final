import React from 'react'
import Card from '../Components/Card';
import {useContextGlobal} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {
    state: { theme, data },
  } = useContextGlobal();
  return (
    <>
      <div className={`px-5 py-3 ${theme === "light" ? "bg-white" : "bg-secondary"}`}>
        <h1>Home</h1>
        <div className='row'>
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>  
  );
};

export default Home