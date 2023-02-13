import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../screens/admin/SideBar";
import "../../screens/admin/adminScreen.css";
import { getAllUsers } from "../../actions/userAction";

import type { RootState, AppDispatch } from '../../store';


interface User {
  id: string;
  name: string;
  email: string;
}
interface UserState {
  users: User[];
}

const AllUsers: React.FC = () => {
  const userState = useSelector((state: RootState) => state.getAllUsersReducer);
  const { users } = userState as UserState;
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
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
          <div className="col-9 col-lg-9 col-md-9 col-sm-9">
            <div
              className="mt-2 "
              style={{
                padding: "0px",
                margin: "auto",
                height: "70vh",
                overflow: "auto",
              }}
            >
              <table className="table ">
                <thead>
                  <tr>
                    <th scope="col">Sn.</th>
                    <th scope="col">User id</th>
                    <th scope="col">Name</th>

                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody style={{}}>
                  {users &&
                    users.map((user, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{user.id}</td>
                        <td>{user.name} </td>
                        <td>{user.email}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
