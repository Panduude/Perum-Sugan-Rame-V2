import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css/style.css";

const PembayaranList = () => {
  return (
    <div className="container">
        <a href="/subpembayaran" class="link-containerPembayaran">
        <div className="container-pembayaran">
            <h4>Pembayaran Keamanan</h4>
            <i class="bi bi-shield-shaded icon-pembayaran"></i>
        </div>
        </a>
        <a href="/subpembayaran" class="link-containerPembayaran">
        <div class="container-pembayaran">
            <h4>Pembayaran Kebersihan</h4>
            <i class="bi bi-trash icon-pembayaran"></i>
        </div>
        </a>
    </div>
  )
}

export default PembayaranList