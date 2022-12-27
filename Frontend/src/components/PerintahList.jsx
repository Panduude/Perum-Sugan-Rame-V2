import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PerintahList = () => {
  const [perintah, setPerintah] = useState([]);

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
  };

  return (
    <div>
      <h1 className="title">Perintah</h1>
      <h2 className="subtitle">List Perintah</h2>
      <Link to="/perintah/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Keterangan</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {perintah.map((perintah, index) => (
            <tr key={perintah.uuid}>
              <td>{index + 1}</td>
              <td>{perintah.keterangan}</td>
              <td>{perintah.user.name}</td>
              <td>
                <Link
                  to={`/perintah/edit/${perintah.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deletePerintah(perintah.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PerintahList