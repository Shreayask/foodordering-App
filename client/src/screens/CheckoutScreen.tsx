import React, { useState } from "react";
import Checkout from "../components/Checkout";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from '../store';
import { placeOrder } from "../actions/orderAction";
import "./css/cartscreen.css";

interface CheckoutInfo {
  address: string;
  number: string;
  message: string;
  subTotal: number;
}

interface itemInterface {
  id: string,
  name: string,
  image: string,
  quantity: number,
  varient: string,
  prices: any[],
  pizza: number
}

const CheckoutScreen: React.FC = () => {
  const cartState = useSelector((state: RootState) => state.cartReducer);
  const cartItems: itemInterface[] = cartState.cartItems;
  const subTotal: number = cartItems.reduce((x: number, item: itemInterface) => {
    return x + item.quantity * item.prices[0][item.varient];
  }, 0);

  const [address, setAddress] = useState<String>(""); //State for storing user address
  const [number, setNumber] = useState<String>(""); //State for storing user phonenumber
  const [message, setMessage] = useState<String>(""); //State for storing user messages
  const checkoutInfo = { address, number, message, subTotal } as CheckoutInfo;

  const dispatch: AppDispatch = useDispatch();
  const checkoutHandler = () => {
    dispatch(placeOrder(checkoutInfo));
  };

  return (
    <div>
      <div className="container mt-2 pt-5">
        <div className="row" style={{ marginTop: "5rem" }} id="cart-container">
          <div
            className="col-12 col-lg-8 col-md-8 col-sm-12"
            style={{ backgroundColor: "rgb(178 185 143 / 32%)" }}
          >
            <h2 style={{ color: "rgb(66 60 39 / 91%)" }}>Cart Items</h2>
            <div className="row  mt-3">
              {cartItems.map((item, index) => (
                <>
                  <Checkout item={item} sn={index} />
                  <hr />
                </>
              ))}
            </div>
          </div>
          <div
            className="col-12 col-lg-4 col-md-4 col-sm-12 "
            style={{ backgroundColor: "#d3dd9deb" }}
          >
            <h2 style={{ color: "rgb(37 40 18 / 82%)" }}>Payment Info</h2>
            <h5 style={{ color: "#362905" }}>
              Sub Total: &nbsp;RS. {subTotal}/-
            </h5>
            <div>
              <form
                style={{
                  border: "solid 1px #cbbaba",
                  borderRadius: "5px",
                  marginTop: "20px",
                  padding: "15px",
                }}
              >
                <div className="mb-3">
                  <label className="form-label">Phone number</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <button
                    type="button"
                    style={{
                      width: "100px",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                    className="btn btn-warning"
                    onClick={checkoutHandler}
                  >
                    Place order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
