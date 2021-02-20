import React from "react";
import { Link } from "react-router-dom";
const Hello = () => {
  return (
    <div className="text-center p-3 p-md-5">
      <h3>
        <strong>Hello World</strong>
      </h3>
      <img
        className="img-fluid rounded-circle"
        src="https://avatars.githubusercontent.com/u/52827888?s=400&u=de9fa591939c3b3ba0819a3863bc60272e711eee&v=4"
      />
      <p>Taste of freedom with open source code project.</p>
    </div>
  );
};
export default Hello;
