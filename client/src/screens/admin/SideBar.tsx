import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-3 col-lg-3 col-md-3 col-sm-3" id="adminPanel">
        <div
          className="btn-group-vertical"
          role="group"
          style={{ height: "75vh", width: "90%" }}
          aria-label="Vertical button group"
        >
          <button
            type="button"
            onClick={() => {
              navigate("/admin/userlist");
            }}
            className="btn btn-dark"
            style={{ borderRadius: "0px" }}
          >
            View Users
          </button>

          <button
            type="button"
            onClick={() => {
              navigate("/admin/pizzalist");
            }}
            className="btn btn-dark"
            style={{ border: "1px solid grey", borderRadius: "0px" }}
          >
            View Pizzas
          </button>

          <button
            type="button"
            onClick={() => {
              navigate("/admin/addnewpizza");
            }}
            className="btn btn-dark"
            style={{ border: "1px solid grey", borderRadius: "0px" }}
          >
            Add Pizza
          </button>

          <button
            type="button"
            onClick={() => {
              navigate("/admin/orderlist");
            }}
            className="btn btn-dark"
            style={{ border: "1px solid grey", borderRadius: "0px" }}
          >
            View Order
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
