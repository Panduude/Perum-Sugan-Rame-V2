import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DataProfile = () => {
    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [noKtp, setNoKtp] = useState("");
    const [noRumah, setNoRumah] = useState("");

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/profile`
                );
                setName(response.data.name);
                setGender(response.data.gender);
                setBirthDate(response.data.birthDate);
                setNoKtp(response.data.noKtp);
                setNoRumah(response.data.noRumah);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getProfile();
    }, []);

    return (
        <div className="container">
            <div className="container-profile">
                <h1>Profile</h1>
                <Link to="/profile/update">
                    <button className="btn-edit">Update Profile</button>
                </Link>
                <div className="profile-data">
                <label htmlFor="name">Nama</label>
                    <input value={name} readOnly></input>
                    <label htmlFor="gender">Jenis Kelamin</label>
                    <input value={gender} readOnly></input>
                    <label htmlFor="tanggal lahir">Tanggal Lahir</label>
                    <input value={birthDate} readOnly></input>
                    <label htmlFor="nomor ktp">Nomor KTP</label>
                    <input value={noKtp} readOnly></input>
                    <label htmlFor="nomor rumah">Nomor Rumah</label>
                    <input value={noRumah} readOnly></input>
                </div>
            </div>
        </div>
    )
};

export default DataProfile;
