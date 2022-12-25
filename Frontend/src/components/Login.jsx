import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import "./css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
      <div className="loginpage">
      <div className="pembungkus">
        <div className="pembungkus-form">
          <div className="title">
            <span>Login</span>
            <div className="garis"></div>
          </div>

          <form onSubmit={Auth}>
            {isError && <p className="has-text-centered">{message}</p>}
            <div className="input-field">
              <input
                className="input-form"
                name="email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter email.."
                required
              />
            </div>
            <div className="input-field">
              <input
                name="pass"
                className="input-form"
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="Enter password.."
                required
              />
            </div>
            <div className="input-field-button">
              <button
                type="submit"
                className="button-form"
              >
                {isLoading ? "Loading.." : "LOGIN"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
