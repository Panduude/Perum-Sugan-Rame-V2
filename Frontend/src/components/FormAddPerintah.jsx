import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddPerintah = () => {
  const [keterangan, setKeterangan] = useState("");
  const [nominal, setNominal] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const savePerintah = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/perintah", {
        keterangan: keterangan,
        nominal: nominal
      });
      navigate("/perintah");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className='container'>
      <div className='container-profile'>
        <div className='container-add-user'>
          <h1 className="title">Add New Perintah</h1>
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
              <label className="label">Nominal</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nominal}
                  onChange={(e) => setNominal(e.target.value)}
                  placeholder="nominal"
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button type="submit" className="btn-bayar">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default FormAddPerintah