import React from "react";
import { Link } from "react-router-dom";
const OrderKasir = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-12 p-3 p-md-5">
        <h3>Order Hardware</h3>
        <div className="card bg-light">
          <img
            src="https://1.bp.blogspot.com/-3TlPkumS8Mo/YC5tbO4uvxI/AAAAAAAAM5Q/fhDQSNjeOogB0kNzskLKIERz30J7alnrgCLcBGAsYHQ/s320/240_F_299275719_GzaxRQrMyua31S4iQ5aE6kY6Yrl0YDOe.jpg"
            className="card-img-top"
            alt="Order mesin kasir"
          />
          <div className="card-body">
            <p className="card-title">Order Hardware</p>
            <p>
              <small>
                Lakukan transfer sesuai dengan price include dengan ongkos kirim
                dan biaya packing,ke rekening account bank kami :<br />
                BCA Bank 8290363021 <br />
                A/n Rica Anggraini
                <br />
                Dan konfirmasikan bukti pembayaran dengan menghubungi team kami
                ,
                <Link to="/contact" className="text-white">
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
export default OrderKasir;
