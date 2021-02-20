import React from "react";
import WebsitePage from "./WebsitePage";
import WebsiteContent from "./WebsiteContent";
import { Link } from "react-router-dom";
import WebsiteList from "./WebsiteList";

const Website = () => (
  <>
    <WebsiteList articles={WebsiteContent} />
  </>
);
export default Website;
