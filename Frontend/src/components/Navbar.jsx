import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import('./css/style.css')

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <div className="nav">
        <ul>
          <li><NavLink to={'/dashboard'}>Home</NavLink></li>
          <li><NavLink to={'/berita'}>Berita</NavLink></li>
          <li><NavLink to={''}>Approve Keuangan</NavLink></li>
          <li><NavLink to={''}>Buat Akun</NavLink></li>
          <li><NavLink to={''}>Buat Perintah</NavLink></li>
          <li><NavLink to={'/profile'}>Profile</NavLink></li>
          <li className="">
                <button  className="button-nav" onClick={logout} >
                  <NavLink>Log out</NavLink>
                </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
