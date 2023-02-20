import React, { useEffect } from "react";
import SideBar from "../../screens/admin/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../actions/orderAction";
import Loader from "../Loader";
import Error from "../Error";

import type { RootState, AppDispatch } from '../../store';

//Order interface
interface OrderInterface {
  id: string;
  orderAmount: number;
  shippingAddress: string;
  phoneNumber: string;
  orderitems: any[];
  message: string;
  created_at: string;
  isDelivered: boolean;
  isPaid: boolean;
}

const AllOrder: React.FC = () => {
  const allOrdersState = useSelector((state: RootState) => state.allUserOrdersReducer);
  const { loading, orders, error } = allOrdersState as {
    loading: string,
    orders: OrderInterface[];
    error: string
  };
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <div className="container mt-3 p-0" style={{ backgroundColor: "#8bc34a1c" }}>
        <h3
          className="text-center bg-dark text-light   p-2 "
          style={{ width: "100%", margin: "auto" }}
        >
          Admin Panel
        </h3>

        <div className="row mt-1">
          <SideBar />
          {loading && <Loader />}
          {error && <Error error="Admin order request fail" />}
          <div className="col-9 col-lg-9 col-md-9 col-sm-9">
            <div
              className="mt-2 "
              style={{
                padding: "0px",
                margin: "auto",
                height: "70vh",
                overflowY: "auto",
                overflowX: "auto"
              }}
            >
              <table className="table " style={{ width: "1143px" }}>
                <thead>
                  <tr>
                    <th>Sn</th>
                    <th scope="col">Order </th>
                    <th scope="col">Amount</th>
                    <th scope="col">Address</th>
                    <th scope="col">Ph No.</th>
                    <th scope="col">Message</th>
                    <th scope="col">Date</th>
                    <th scope="col">Delivery Status</th>
                    <th scope="col">Paid Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders &&
                    orders.map((order, index) => (
                      <tr key={order.id}>
                        <td>{index + 1}</td>
                        <td>{order.orderitems.map((item) => (
                          <p>{item.name}({item.varient})&nbsp;&nbsp;&nbsp;<b>Qty:&nbsp;{item.quantity}</b><hr></hr></p>
                        ))}</td>
                        <td>Rs {order.orderAmount}/-</td>
                        <td>{order.shippingAddress}</td>
                        <td>{order.phoneNumber}</td>
                        <td>{order.message}</td>
                        <td>{order.created_at.substring(0, 10)}</td>
                        <td>{order.isDelivered}</td>
                        <td>{order.isPaid ? "Paid" : "Not Paid"}</td>
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

export default AllOrder;
