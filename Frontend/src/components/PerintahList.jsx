import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const PerintahList = () => {
  const [perintah, setPerintah] = useState([]);
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    getPerintah();
  }, []);

  const getPerintah = async () => {
    const response = await axios.get("http://localhost:5000/perintah");
    setPerintah(response.data);
  };

  const deletePerintah = async (perintahId) => {
    await axios.delete(`http://localhost:5000/perintah/${perintahId}`);
    getPerintah();
  }
  return (
    <div className="container">
      <div className="container-perintah">
        <h1>Perintah</h1>
        <Link to="/perintah/add">
          <button className="btn-add">Add New</button>
        </Link>
        <table>
          <thead>
            <tr>
              <th className="index">No</th>
              <th>Keterangan</th>
              <th>Nominal</th>
              <th>Created By</th>
              <th className="action">Actions</th>
            </tr>
          </thead>
          <tbody>
            {perintah.map((perintah, index) => (
              <tr key={perintah.uuid}>
                <td>{index + 1}</td>
                <td>{perintah.keterangan}</td>
                <td>{perintah.nominal}</td>
                <td>{perintah.user.name}</td>
                <td>
                  
                <Link
                    to={`/perintah/accept/${perintah.uuid}`}
                  > <button className="btn-acc">Accept</button>
                  </Link>
                  <button className="btn-merah"
                    onClick={() => deletePerintah(perintah.uuid)}
                  >Delete
                  </button>
                  <Link
                    to={`/perintah/accept/${perintah.uuid}`}
                  > <button className="btn-kuning">Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PerintahList