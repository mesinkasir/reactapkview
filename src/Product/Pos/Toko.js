import React from "react";
const Toko = () => {
  return (
    <div
      className="modal fade"
      id="toko"
      tabIndex="-1"
      aria-labelledby="toko"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="toko">
              Mesin Kasir Toko Minimarket Shop
            </h5>
          </div>
          <div className="modal-body">
            <h3 className=" text-danger">Demo Toko</h3>
            <div className="embed-responsive embed-responsive-16by9 shadow rounded">
              <iframe
                title="mesin kasir toko minimarket"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/zQIjZPnGthc"
                allowFullScreen
              />
            </div>
            <p>Demo operasional penggunaan mesin kasir untuk toko</p>
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
export default Toko;
