import React from "react";
import RestoPage from "./RestoPage";
import RestoContent from "./RestoContent";
import { Link } from "react-router-dom";
import RestoList from "./RestoList";

const Resto = () => (
  <>
    <RestoList articles={RestoContent} />
  </>
);
export default Resto;
