import React from "react";
import { Link } from "react-router-dom";
const Check = () => {
  return (
    <div className="row">
      <Link to="/hardware" className="btn">
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
      <div className="col-12 col-md-12 p-3 p-md-5">
        <h3>Price Checker</h3>
        <div className="card bg-light">
          <img
            src="https://1.bp.blogspot.com/-18p4FhfPOeE/Xc2FQxOZg0I/AAAAAAAAJkc/yIYgnSf2GewErpxaZUBlVauwh1wuIdymACLcBGAsYHQ/s1600/premium%2Bprice%2Bchecker.jpg"
            className="card-img-top"
            alt="Price Checker"
          />
          <div className="card-body">
            <p className="card-title">Price Checker.</p>
            <p>
              <small>
                Alat untuk kebutuhan cek harga dengan integrasi mesin kasir set
                kami, dengan menggunakan apps tambahan ini dapat membantu dalam
                cek harga produk secara cepat. karena secara fungsi dikhusus kan
                untuk memindai kode barcode produk include dengan harga nya.
                <br />
                Paket Set :
                <br />
                + 1 Tab Windows
                <br />+ Laser barcode
                <br />
                + Software Program price check
                <br />
                <button
                  type="button"
                  className="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#check"
                >
                  Demo
                </button>
              </small>
            </p>
            <hr />
            <p>Price Set : Rp.7.500.000</p>
            <p>
              <small>Program + Installasi Saja</small>
              <br />
              Rp.500.000
            </p>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="check"
        tabIndex="-1"
        aria-labelledby="check"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="check">
                Price Checker
              </h5>
            </div>
            <div className="modal-body">
              <h3 className=" text-danger">Demo Price Checker</h3>
              <div className="embed-responsive embed-responsive-21by9 shadow rounded">
                <iframe
                  title="penggunaan alarm security video"
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/B864Ctl6Dqs"
                  allowFullScreen
                />
              </div>
              <p>Demo penggunaan operasional Price Checker</p>
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
  );
};
export default Check;
