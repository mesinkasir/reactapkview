import React from "react";
import { Link } from "react-router-dom";
import PosContent from "./PosContent";
import Toko from "./Toko";
import Online from "./Online";
import Share from "./Share";
import Resto from "./Resto";
import Jump from "./Jump";
const PosPage = ({ match }) => {
  const name = match.params.name;
  const article = PosContent.find(article => article.name === name);
  return (
    <>
      <div className="row">
        <Link to="/mesinkasir" className="btn float-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-arrow-left-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>{" "}
          Back
        </Link>
        <div className="text-center col-12 p-3 p-md-5">
          <h1>
            <strong>{article.title}</strong>
          </h1>
        </div>
        <div className="col-12 col-md-8 p-3 p-md-5">
          <img className="img-fluid" alt="mesin kasir" src={article.img} />
          <h3 className=" text-dark">{article.desc}</h3>
          {article.content.map((paragraph, key) => (
            <p key={key} className=" text-dark">
              {paragraph}
            </p>
          ))}
          <p className="text-dark">Price: {article.price}</p>
        </div>

        <div className="col-12 col-md-4 p-3 p-md-5 text-center uk-animation-slide-left">
          <p>Click Demo</p>
          <Jump />
          <div className="row uk-animation-slide-top">
            <div className="col-12 col-md-12 text-center">
              <Link to="/orderpos" className="btn btn-block btn-lg btn-dark">
                Order Now
              </Link>
            </div>
          </div>
        </div>
        <Toko />
        <Resto />
        <Online />
        <Share />
      </div>
    </>
  );
};
export default PosPage;
