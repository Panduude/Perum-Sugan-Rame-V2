import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ApproveList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await axios.get("http://localhost:5000/approve");
        setData(response.data);
    };

    const deleteApprove = async (dataId) => {
        await axios.delete(`http://localhost:5000/perintah/${dataId}`);
        getData();
    };

    return (
        <div className="container">
            <div className="container-perintah">
                <h1 className="">Approve List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Pembayaran</th>
                            <th>Nominal</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data, index) => (
                            <tr key={data.uuid}>
                                <td>{index + 1}</td>
                                <td>{data.keterangan}</td>
                                <td>{data.nominal}</td>
                                <td className="action">
                                    <Link
                                        to={`/approve/${data.uuid}`}
                                    > <button className="btn-acc">Approve</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveList;
