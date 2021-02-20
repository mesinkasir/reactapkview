import React from "react";
import OfficePage from "./OfficePage";
import OfficeContent from "./OfficeContent";
import { Link } from "react-router-dom";
import OfficeList from "./OfficeList";

const Office = () => (
  <>
    <OfficeList articles={OfficeContent} />
  </>
);
export default Office;
