import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="dashboard">
      <h1>Hallo! <strong>{user && user.name}</strong></h1>
      <h2>
        Selamat Datang Di Website Perum Sugan Rame
      </h2>
    </div>
  );
};

export default Welcome;
