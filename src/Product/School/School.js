import React from "react";
import SchoolPage from "./SchoolPage";
import SchoolContent from "./SchoolContent";
import { Link } from "react-router-dom";
import SchoolList from "./SchoolList";

const School = () => (
  <>
    <SchoolList articles={SchoolContent} />
  </>
);
export default School;
