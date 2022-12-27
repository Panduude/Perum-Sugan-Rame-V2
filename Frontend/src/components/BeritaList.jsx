import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BeritaList = () => {
  const [beritas, setBerita] = useState([]);

  useEffect(() => {
    getBeritas();
  }, []);

  const getBeritas = async () => {
    const response = await axios.get("http://localhost:5000/berita");
    setBerita(response.data);
  };

  return (
    <div className="container">
      {beritas.map((berita) => (
        <div className="card-body" key={berita.uuid}>
          <p>{berita.title}</p>
          <img srcSet={berita.gambar}></img>
          <p>{berita.deskripsi}</p>
          <Link to={`/berita/detail/${berita.uuid}`}>
            <button className="btn-detail">Details..</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BeritaList;
