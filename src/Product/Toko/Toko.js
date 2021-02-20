import React from "react";
import TokoPage from "./TokoPage";
import TokoContent from "./TokoContent";
import { Link } from "react-router-dom";
import TokoList from "./TokoList";

const Toko = () => (
  <>
    <TokoList articles={TokoContent} />
  </>
);
export default Toko;
