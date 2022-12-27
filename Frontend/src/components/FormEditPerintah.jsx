import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditPerintah = () => {
    const [keterangan, setKeterangan] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getPerintahById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/perintah/${id}`
        );
        setKeterangan(response.data.keterangan);
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
      <h2 className="subtitle">Edit Perintah</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updatePerintah}>
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
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
}

export default FormEditPerintah;
