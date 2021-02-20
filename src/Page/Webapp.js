import React from "react";
import { Link } from "react-router-dom";
const Webapp = () => {
  return (
    <div className="text-center p-3 p-md-5">
      <h3>Web Apps</h3>
      <p>Our Product Web Apps</p>
      <Link to="/aplikasirestoran">Restaurant Apps</Link>
      <hr />
      <Link to="/aplikasitoko">POS Shop Apps</Link>
      <hr />
      <Link to="/aplikasisekolah">School Apps</Link>
      <hr />
      <Link to="/office">Office Apps</Link>
      <hr />
      <Link to="/pembuatanwebsite">Web Design</Link>
      <hr />
      <Link to="/hardware">Hardware POS</Link>
    </div>
  );
};
export default Webapp;
