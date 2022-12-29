import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditPerintah = () => {
  const [keterangan, setKeterangan] = useState("");
  const [nominal, setNominal] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getPerintahById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/perintah/${id}`);
        setKeterangan(response.data.keterangan);
        setNominal(response.data.nominal);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getPerintahById();
  }, [id]);

  const updatePerintah = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/perintah/${id}`, {
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
          <h1>Edit Perintah</h1>
          <form onSubmit={updatePerintah}>
            <p>{msg}</p>
            <div className="field">
              <label className="label">Keterangan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={keterangan}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama Pembayaran"
                />
              </div>

              <label className="label">Nominal</label>
              <div className="control">
              <input
                  type="text"
                  className="input"
                  value={nominal}
                  onChange={(e) => setNominal(e.target.value)}
                  placeholder="nominal"/>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button type="submit" className="btn-bayar">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormEditPerintah;
