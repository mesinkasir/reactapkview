import React from "react";
const Online = () => {
  return (
    <div
      className="modal fade"
      id="online"
      tabIndex="-1"
      aria-labelledby="online"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="online">
              Mesin Kasir Online
            </h5>
          </div>
          <div className="modal-body">
            <h3 className=" text-danger">Demo Mesin Kasir Online</h3>
            <div className="embed-responsive embed-responsive-16by9 shadow rounded">
              <iframe
                title="mesin kasir online"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/KB5zmhpsIxo"
                allowFullScreen
              />
            </div>
            <p>Demo operasional penggunaan mesin kasir Online real time</p>
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
export default Online;
