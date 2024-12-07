import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useContextGlobal} from '../Components/utils/global.context'

const Detail = () => {
  const {state: { theme } } = useContextGlobal();

  const [item, setItem] = useState({});
  const params = useParams();
  console.log(params);
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setItem(res.data);
    });
  }, []);

  return (
    <>
      <div className={`px-5 py-3 ${theme === "light" ? "bg-white" : "bg-secondary"}`}>
        <h1>Detalle Dentist {params.id}</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Detail;
