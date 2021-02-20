import React from "react";
const Share = () => {
  return (
    <div
      className="modal fade"
      id="share"
      tabIndex="-1"
      aria-labelledby="share"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="share">
              Mesin Kasir Shared Data
            </h5>
          </div>
          <div className="modal-body">
            <h3 className=" text-danger">
              Demo Mesin Kasir Share dengan divisi
            </h3>
            <div className="embed-responsive embed-responsive-16by9 shadow rounded">
              <iframe
                title="mesin kasir online"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/9z6i5hifCOk"
                allowFullScreen
              />
            </div>
            <p>
              Demo operasional penggunaan mesin kasir share divisi contoh demo
              untuk restoran dapat juga digunakan untuk toko minimarket.
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
export default Share;
