import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const KeuanganList = () => {
  const [keuangan, setKeuangan] = useState([]);
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    getKeuangan();
  }, []);

  const getKeuangan = async () => {
    const response = await axios.get("http://localhost:5000/keuangan");
    setKeuangan(response.data);
  };
  return (
    <div className="container">
      <div className="container-perintah">
        <h1>Keuangan</h1>
        <table>
          <thead>
            <tr>
              <th className="index">No</th>
              <th>Keterangan</th>
              <th>Nominal</th>
            </tr>
          </thead>
          <tbody>
            {keuangan.map((keuangan, index) => (
              <tr key={keuangan.uuid}>
                <td>{index + 1}</td>
                <td>{keuangan.keterangan}</td>
                <td>{keuangan.nominal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default KeuanganList