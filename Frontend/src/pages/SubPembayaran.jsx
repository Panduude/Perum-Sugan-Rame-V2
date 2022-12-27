import React, { useEffect } from "react";
import Layout from "./Layout";
import SubPembayaranList from "../components/SubPembayaranList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const SubPembayaran = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);
  
    useEffect(() => {
      dispatch(getMe());
    }, [dispatch]);
  
    useEffect(() => {
      if (isError) {
        navigate("/");
      }
    }, [isError, navigate]);
    return (
      <Layout>
        <SubPembayaranList />
      </Layout>
    );
  };
  
  export default SubPembayaran;