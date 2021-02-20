import React from "react";
import { Link } from "react-router-dom";
import OfficeContent from "./OfficeContent";
import Jump from "./Jump";
const OfficePage = ({ match }) => {
  const name = match.params.name;
  const article = OfficeContent.find(article => article.name === name);
  return (
    <>
      <div className="row">
        <Link to="/office" className="btn">
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
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item rounded shadow"
              src={article.demo}
              allowFullScreen
            />
          </div>
        </div>
        <div className="col-12 col-md-4 p-3 p-md-5 text-center">
          <p>Menu Informasi</p>
          <Jump />
          <div className="row">
            <div className="col-12 col-md-12 text-center">
              <Link to="/orderapp" className="btn btn-block btn-lg btn-dark">
                Order Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 p-3 p-md-5">
          <h3 className=" text-dark">{article.desc}</h3>
          {article.content.map((paragraph, key) => (
            <p key={key} className=" text-dark">
              {paragraph}
            </p>
          ))}
        </div>
        <div
          className="modal fade"
          id="pro"
          tabIndex="-1"
          aria-labelledby="pro"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="pro">
                  Pro Paket Layanan per tahun
                </h5>
              </div>
              <div className="modal-body">
                <h3 className=" text-danger">{article.price3}</h3>
                <p>{article.premium}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary col-12"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="star"
          tabIndex="-1"
          aria-labelledby="star"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="star">
                  Star Paket Layanan per tahun
                </h5>
              </div>
              <div className="modal-body">
                <h3 className=" text-danger">{article.price2}</h3>
                <p>{article.standard}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary col-12"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="basic"
          tabIndex="-1"
          aria-labelledby="basic"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="basic">
                  Basic Paket Layanan per tahun
                </h5>
              </div>
              <div className="modal-body">
                <h3 className=" text-danger">{article.price1}</h3>
                <p>{article.basic}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary col-12"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="fitur"
          tabIndex="-1"
          aria-labelledby="fitur"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="fitur">
                  Features {article.name}
                </h5>
              </div>
              <div className="modal-body">
                <p> {article.fitur}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary col-12"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OfficePage;
