import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const DataProfile = () => {
    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [noKtp, setNoKtp] = useState("");
    const [noRumah, setNoRumah] = useState("");
    const navigate = useNavigate();

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
        
        <div className="container-cardprofile">
            <label htmlFor="">Identitas</label>
            <input value={name}></input>
            <label htmlFor="">Gender</label>
            <input value={gender}></input>                <label htmlFor="">Tanggal Lahir</label>
            <input value={birthDate}></input>
            <label htmlFor="">Nomor KTP</label>                <input value={noKtp}></input>
            <label htmlFor="">Nomor Rumah</label>
            <input value={noRumah}></input>
        </div>    
    )
};

export default DataProfile;
