import React from "react";
import { Link } from "react-router-dom";
const Alarm = () => {
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
        <h3>Alarm Security</h3>
        <div className="card bg-light">
          <img
            src="https://1.bp.blogspot.com/-HplosmWCgqo/X97iNdW9snI/AAAAAAAALxU/e3YiPD-Lx9A27Ihn6rxrfhMbqsYHRkwVQCLcBGAsYHQ/s505/alarm%2Bsecurity%2B%25281%2529.jpg"
            className="card-img-top"
            alt="Alarm security"
          />
          <div className="card-body">
            <p className="card-title">Alarm security toko baju butik.</p>
            <p>
              <small>
                Alarm security untuk menjaga produk produk anda dari tindakan
                kriminal pencurian. alarm ini akan seketika berbunyi ketika ada
                product yang masih terdapat tag sensor. Mudah digunakan dengan
                plug and play siap pakai.
                <br />
                Paket Set :
                <br />
                + 1 Antena Alarm Sensor
                <br />+ 100 Tags Sensor
                <br />
                + 1 Pelepas Tags Sensor
                <br />
                <button
                  type="button"
                  className="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#alarm"
                >
                  Demo
                </button>
              </small>
            </p>
            <hr />
            <p>Price : Rp.21.500.000</p>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="alarm"
        tabIndex="-1"
        aria-labelledby="alarm"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="alarm">
                Alarm Security
              </h5>
            </div>
            <div className="modal-body">
              <h3 className=" text-danger">Demo Alarm Security</h3>
              <div className="embed-responsive embed-responsive-16by9 shadow rounded">
                <iframe
                  title="penggunaan alarm security video"
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/JUM7ZPjBK4Y"
                  allowFullScreen
                />
              </div>
              <p>Demo penggunaan operasional alarm security</p>
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
export default Alarm;
