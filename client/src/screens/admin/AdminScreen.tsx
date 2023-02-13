import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";

const AdminScreen: React.FC = () => {
  const userState = useSelector((state: any) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (
      localStorage.getItem("currentUser") === null ||
      !currentUser.user[0].isAdmin
    ) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div style={{ marginTop: "6rem", marginBottom: "5rem" }}>
      <div className="container mt-3 p-0" style={{ backgroundColor: "#8bc34a1c" }}>
        <h3
          className="text-center bg-dark text-light   p-2 "
          style={{ width: "100%", margin: "auto" }}
        >
          Admin Panel
        </h3>

        <div className="row mt-1">
          <SideBar />
          <div className="col-8 col-lg-8 col-md-8 col-sm-12"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
