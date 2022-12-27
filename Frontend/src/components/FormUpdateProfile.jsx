import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FormUpdateProfile = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [noKtp, setNoKtp] = useState("");
    const [noRumah, setNoRumah] = useState("");

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/profile`
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

    const UpdateProfile = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/profile/update`, {
                name: name,
                gender: gender,
                birthDate: birthDate,
                noKtp: noKtp,
                noRumah: noRumah
            });
            navigate("/profile");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <div className="container">
            <div className="container-profile">
                <h1>Profile</h1>
                <div className="profile-data">
                    <form onSubmit={UpdateProfile}>
                        <label htmlFor="name">Nama</label>
                        <input value={name} onChange={(e) => setName(e.target.value)}></input>
                        <label htmlFor="gender">Jenis Kelamin</label>
                        <input value={gender} onChange={(e) => setGender(e.target.value)}></input>
                        <label htmlFor="tanggal lahir">Tanggal Lahir</label>
                        <input value={birthDate} onChange={(e) => setBirthDate(e.target.value)}></input>
                        <label htmlFor="nomor ktp">Nomor KTP</label>
                        <input value={noKtp} onChange={(e) => setNoKtp(e.target.value)}></input>
                        <label htmlFor="nomor rumah">Nomor Rumah</label>
                        <input value={noRumah} onChange={(e) => setNoRumah(e.target.value)}></input>
                        <button type="submit" className="btn-edit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default FormUpdateProfile;
