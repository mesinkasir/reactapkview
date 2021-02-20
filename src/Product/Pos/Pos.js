import React from "react";
import PosPage from "./PosPage";
import PosContent from "./PosContent";
import { Link } from "react-router-dom";
import PosList from "./PosList";

const Pos = () => (
  <>
    <PosList articles={PosContent} />
  </>
);
export default Pos;
