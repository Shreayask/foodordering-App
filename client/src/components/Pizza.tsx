import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";
import "./css/pizza.css";

import type { RootState, AppDispatch } from '../store';
import { pizzaI } from "src/actions/pizzaAction";

export interface Ipizza {
  id: string,
  name: string,
  image: string,
  quantity: number,
  varients: string[],
  varient: string,
  prices: {
    [key: string]: number;
  }[],
  pizza: number,
  description: string,
}

//props interface of pizza
interface props {
  pizza: Ipizza

}

// component Diplaying a pizza
const Pizza: React.FC<props> = (props) => {
  const { pizza } = props
  const [varient, setVarient] = useState<string>("small"); //State to set value of varient as small by default
  const [quantity, setQuantity] = useState<number>(1); //state to set quantity as 1 by default
  const [show, setshow] = useState<boolean>(false); // state to set show as false by default

  const dispatch: AppDispatch = useDispatch();

  // calling cart action
  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);
  return (
    <>
      {/**  card diplaying Pizza */}
      <div className="card" style={{}}>
        {/** pizza image */}
        <img
          src={pizza.image}
          className="card-img-top"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{ height: "150px", cursor: "pointer" }}
          alt=""
        />
        <div className="card-body">
          {/** pizza name and description */}
          <h5 className="card-title">{pizza.name}</h5>
          <hr></hr>
          <p className="card-text">
            <div className="row">
              <div className="col-6 ">
                <h6>Varient</h6>
                <select onChange={(e) => setVarient(e.target.value)}>
                  {/* diplaying pizza types*/}
                  {pizza.varients.map((varient: string) => (
                    <option value={varient}> {varient}</option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                {/** pizza quantity */}
                <h6>Quantity</h6>
                <select onChange={(e) => setQuantity(Number(e.target.value))}>
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
            </div>
          </p>
          <div className="row">
            <div className="col-6">
              {/**  displaying pizza prices */}
              Price : Rs {pizza.prices[0][varient] * quantity}{" "}
            </div>
            <div className="col-6">
              {/** Add to cart button */}
              <button
                type="button"
                style={{
                  width: "100px",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
                className="btn btn-warning"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/** pop up to display pizza */}
      <div
        className="modal fade"
        id="exampleModal"
        // tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {pizza.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <div>
                <img
                  src={pizza.image}
                  className="card-img-top"
                  style={{ height: "150px", cursor: "pointer" }}
                  alt=""
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <p style={{ fontSize: "20px", fontWeight: "600" }}>
                  {pizza.description}
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // return (
  //   <>
  //     {pizza && <h2>Hi</h2>}
  //     {console.log("Pizza2", pizza)}
  //   </>
  // );
};

export default Pizza;
