import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div className="container">
      <div className="container-profile">
        <div className="container-add-user">
          <h1 >Add New User</h1>
          <form className="container-input" onSubmit={saveUser}>
            <p >{msg}</p>
            <div >
              <label>Name</label>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>
            <div>
              <label>Email</label>
              <div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="******"
                />
              </div>
            </div>
            <div>
              <label>Confirm Password</label>
              <div>
                <input
                  type="password"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  placeholder="******"
                />
              </div>
            </div>
            <div>
              <label>Role</label>
              <div>
                <div className="options">
                  <select 
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div>
                <button type="submit" className="btn-edit">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default FormAddUser;
