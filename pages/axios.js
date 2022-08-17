import React from "react";
import axios from "axios";
const api = () => {
  const getCountry = () => {
    try {
      axios.get("https://restcountries.com/v3.1/all").then((res) => {
        console.log(res);
      });
    } catch (error) {}
  };
  return <></>;
};

export default api;
