import React from "react";
import { Link } from "react-router-dom";
const OrderApp = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <h3>Order App</h3>
        <div className="card bg-light">
          <img
            src="https://1.bp.blogspot.com/-gDj92yIMWA8/YC5tcKqbOdI/AAAAAAAAM5c/IjI91-oomgEGw_nGU2r3NNM1L2UeVwBBQCLcBGAsYHQ/s460/240_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
            className="card-img-top"
            alt="contact Kasir"
          />
          <div className="card-body">
            <p className="card-title">Order Layanan</p>
            <p>
              <small>
                Lakukan transfer sesuai dengan price layanan,ke rekening account
                bank kami :<br />
                BCA Bank 8290363021 <br />
                A/n Rica Anggraini
                <br />
                Dan konfirmasikan bukti pembayaran dengan menghubungi team kami
                ,
                <Link to="/contact" className="text-dark">
                  konfirmasi →
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderApp;
