// import React, { useEffect } from "react";
// import Layout from "./Layout";
// import UpdateProfile from "../components/UpdateProfile";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getMe } from "../features/authSlice";

// const UpdateProfile = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isError } = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(getMe());
//   }, [dispatch]);

//   useEffect(() => {
//     if (isError) {
//       navigate("/");
//     }
//   }, [isError, navigate]);
//   return (
//     <Layout>
//       <UpdateProfile />
//     </Layout>
//   );
// };

// export default UpdateProfile;