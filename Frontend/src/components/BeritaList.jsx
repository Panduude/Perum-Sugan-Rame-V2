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
        <div className="card-body">
          <p>{berita.title}</p>
          <img ></img>
          <p>{berita.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BeritaList;
