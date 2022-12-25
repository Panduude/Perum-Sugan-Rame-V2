import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Topbar/>
      <Navbar />
      <div className="main-layout">
        {/* <div className="column is-2">
          <Sidebar />
        </div> */}
          <main>{children}</main>
        <div className="main-layout-content">
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
