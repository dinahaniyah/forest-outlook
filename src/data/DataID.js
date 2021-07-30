import React, { useState, useEffect } from "react";
import axios from "axios";

const DataID = () => {
  const [id, setId] = useState([]);

  let administrations = [];

  administrations.push(id.map((key, index) => key.provinsi));
  console.log(administrations);

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(
        `https://forest.wri-indonesia.tech/api/idn_administration`
      );
      setId(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <p>{administrations}</p>
    </>
  );
};

export default DataID;
