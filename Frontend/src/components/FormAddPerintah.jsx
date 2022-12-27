import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddPerintah = () => {
    const [keterangan, setKeterangan] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const savePerintah = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/perintah", {
        keterangan: keterangan,
      });
      navigate("/perintah");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Perintah</h1>
      <h2 className="subtitle">Add New Perintah</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={savePerintah}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Keterangan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                    placeholder="Keterangan"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAddPerintah