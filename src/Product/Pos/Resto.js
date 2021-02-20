import React from "react";
const Resto = () => {
  return (
    <div
      className="modal fade"
      id="resto"
      tabIndex="-1"
      aria-labelledby="resto"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="resto">
              Mesin Kasir Restoran Rumah Makan Cafe
            </h5>
          </div>
          <div className="modal-body">
            <h3 className=" text-danger">Demo Kuliner</h3>
            <div className="embed-responsive embed-responsive-16by9 shadow rounded">
              <iframe
                title="mesin kasir restoran"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/gGZcHO32mh4"
                allowFullScreen
              />
            </div>
            <p>
              Demo operasional penggunaan mesin kasir untuk restoran cafe rumah
              makan
            </p>
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
  );
};
export default Resto;
