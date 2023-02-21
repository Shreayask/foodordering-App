import React, { useEffect } from "react";
import SideBar from "../../screens/admin/SideBar";
// import Pizza from "../Pizza";

import { useDispatch, useSelector } from "react-redux";
import { deletePizza, getAllPizzas } from "../../actions/pizzaAction";
import { Link } from "react-router-dom";
import type { RootState, AppDispatch } from '../../store';

//Pizza INterface
interface Pizza {
  id: string;
  name: string;
  prices: {
    small: number;
    medium: number;
    large: number;
  }[];
  category: string;
}

const AllPizzas = () => {
  const dispatch: AppDispatch = useDispatch();
  const pizzaState = useSelector((state: RootState) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState as {
    loading: string,
    pizzas: Pizza[],
    error: string
  };

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <div style={{ marginTop: "6rem", marginBottom: "5rem" }}>
      <div
        className="container mt-3 p-0"
        style={{
          backgroundColor: "#8bc34a1c",
          marginTop: "8rem",
          marginBottom: "5rem",
        }}
      >
        <h3
          className="text-center bg-dark text-light   p-2 "
          style={{ width: "100%", margin: "auto" }}
        >
          Admin Panel
        </h3>
        <div className="row mt-1">
          <SideBar />
          <div className="col-9 col-lg-9 col-md-9 col-sm-9">
            {loading ? (
              <h1>Loading....</h1>
            ) : error ? (
              <h1>Error while fetching pizzas</h1>
            ) : (
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
                      <th scope="col">Pizza name</th>
                      <th>Price</th>
                      <th scope="col">Category</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody style={{}}>
                    {pizzas &&
                      pizzas.map((pizza, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{pizza.name}</td>
                          <td>
                            Small:&nbsp;Rs.{pizza.prices[0]["small"]}
                            <br></br>Medium:&nbsp;Rs.{pizza.prices[0]["medium"]}
                            <br />
                            Large:&nbsp;Rs.{pizza.prices[0]["large"]}
                          </td>
                          <td>{pizza.category}</td>
                          <td>
                            <Link to={`/admin/editpizza/${pizza.id}`}>
                              <i
                                className="bi bi-pen-fill"
                                style={{ cursor: "pointer" }}
                              ></i>
                              &nbsp; &nbsp;
                              <i
                                className="bi bi-trash-fill"
                                style={{ color: "red", cursor: "pointer" }}
                                onClick={() => {
                                  dispatch(deletePizza(pizza.id));
                                }}
                              ></i>
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPizzas;
