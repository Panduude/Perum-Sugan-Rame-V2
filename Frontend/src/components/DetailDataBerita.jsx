import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DetailDataBerita = () => {
  const { id } = useParams();
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [gambar, setGambar] = useState([]);

  useEffect(() => {
    const getBeritaById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/berita/detail/${id}`
        );
        setTitle(response.data.title);
        setContent(response.data.content);
        setGambar(response.data.gambar);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getBeritaById();
  }, [id]);

  return (
    <div className="container">
      <div className="container-berita">
        <h1>
          {title}
        </h1>
        <img className="img-berita" srcSet={gambar} alt="" />
        <div className="content-berita">
          {content}
        </div>
      </div>
    </div>
  );
};

export default DetailDataBerita;
