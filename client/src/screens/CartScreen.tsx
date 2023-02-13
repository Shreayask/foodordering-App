import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from '../store';
import "./css/cartscreen.css"
import Cart from "../components/Cart";
import { Link } from "react-router-dom";


// type interface for items
interface itemInterface{
    
    id:string,
    name:string,
    image:string,
    quantity:number,
    varient:string,
    prices:any[],
    pizza:number
  }
const CartScreen: React.FC = () => {
    const cartState = useSelector((state: RootState) => state.cartReducer);
    const cartItems: itemInterface[] = cartState.cartItems;
    const userState = useSelector((state:RootState) => state.loginUserReducer);
    const { currentUser } = userState;

    const subTotal :number= cartItems.reduce((x:number, item:itemInterface) => {
        return x + item.quantity * item.prices[0][item.varient];
    }, 0);

    return (
        <>
            <div className="container mt-2 pt-5">

                <div className="row" style={{ marginTop: "5rem" }} id="cart-container">
                    <div style={{ textAlign: "center", marginBottom: "2rem", color: "#54442d" }}>
                        <h2 ><i className="bi bi-cart-check-fill"></i>&nbsp;My cart</h2></div>

                    <div id="cart-items"
                        className="col-12 col-lg-8 col-md-8 col-sm-12 p-2"
                        style={{ backgroundColor: "rgb(191 178 69 / 6%)", margin: "auto" }}
                    >
                        <h3 style={{ color: "rgb(67 74 68)", margin: "auto" }}>Cart Items</h3>

                        <div className="row  mt-3">
                            {cartItems.map((item:itemInterface, index:number) => (

                                <>
                                    <Cart item={item} index={index} />
                                </>
                            ))}
                        </div>
                    </div>
                    <div
                        className="col-12 col-lg-4 col-md-4 col-sm-12 "
                        style={{ backgroundColor: "#95997429" }}
                    >
                        <h3 style={{ color: "rgb(67 74 68)" }}>Payment Info</h3>
                        <h4 style={{ color: "564833", marginTop: "1.5rem" }}>Sub Total: &nbsp;RS: {subTotal}/-</h4>
                        {currentUser ? (<div style={{ textAlign: "center" }}>      <button
                            type="button"
                            style={{ width: "100px", fontSize: "13px", fontWeight: "500", marginTop: "1rem" }}
                            className="btn btn-warning"
                            onClick={() => window.location.href = "/checkout"}
                        >
                            Checkout
                        </button></div>) : (<><Link to="/login"><div style={{ textAlign: "center" }}>      <button
                            type="button"
                            style={{ width: "100px", fontSize: "13px", fontWeight: "500", marginTop: "1rem" }}
                            className="btn btn-warning"

                        >
                            Login
                        </button></div></Link></>)}

                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartScreen;