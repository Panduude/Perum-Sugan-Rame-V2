import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css/style.css";

const SubPembayaranList = () => {
  return (
    <div className="container">
        <div className="header-subpembayaran">
            <h4>Pembayaran jenisPembayaran
            </h4>
            <h4>Tahun 2022</h4>

                {/* {fungsi.map((tabeldatabase) => (
                    <div className="card-pembayaran">
                        <h4>Bulan  </h4>
                        {(() => {
                            if (item.status_pembayaran==true) {
                               return (
                                <button className="lunas">Sudah Bayar</button>
                               )
                            }
                            else {
                                return(
                                <button onclick="location.href='/proses-pembayaran/<%= item.id_pembayaran %>'" className="belum-lunas">Bayar</button>
                                )
                            }
                        })()}
                    </div>
                ))} */}
        </div>
    </div>
  )
}

export default SubPembayaranList