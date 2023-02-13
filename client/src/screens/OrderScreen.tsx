import React, { useEffect } from "react";
import { getUserOrders } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from '../store';
import "./css/order.css";

interface UserState {
  currentUser: {
    user: [
      {
        name: string;
      }
    ];
  };
}

interface OrderState {
  orders: [
    {
      orderitems: [
        {
          name: string;
          varient: string;
          quantity: number;
          pizza: number;
          image: string;
        }
      ];
      shippingAddress: string;
      phoneNumber: string;
      message: string;
      isDelivered: string;
      orderAmount: number;
      isPaid: boolean;
    }
  ];
}

const OrderScreen: React.FC = () => {
  const orderState = useSelector((state: RootState) => state.getUserOrdersReducer);
  const userState = useSelector((state: RootState) => state.loginUserReducer);
  const { currentUser } = userState as UserState;
  const { orders } = orderState as OrderState;
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  return (
    <div>
      <div className="container mt-5">
        <div
          style={{
            width: "50%",
            margin: "auto",
            textAlign: "center",
            marginTop: "6rem",
          }}
        >
          <img
            src={
              "https://pnp-hybris-media-prod.s3-eu-west-1.amazonaws.com/media/2021/FAQ/img/Self-Help-Landing-Page-info-My-order.png"
            }
            style={{ width: "20%", height: "15%", borderRadius: "5rem" }}
            alt=""
          />
          <br /> <h3>Welcome &nbsp;{currentUser.user[0].name}</h3>
        </div>
        {orders &&
          orders.map((order) => (
            <div>
              <div className="row mt-4 p-1" id="order-container">
                <div className="col-12 col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-2">
                  <h4 className="heading"> Order Items</h4>
                  <hr />

                  {order.orderitems.map((item) => (
                    <div>
                      <h6>
                        {item.name}&nbsp;[{item.varient}]
                      </h6>
                      <h6>Quantity: &nbsp;{item.quantity}</h6>
                      <h6>Subtotal: &nbsp;{item.pizza}</h6>
                      <br></br>
                      <div>
                        <img
                          src={item.image}
                          style={{ height: "150px", width: "70%" }}
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-12 col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-2">
                  <h4 className="heading">Delivery Detail</h4>
                  <hr />
                  <h6>Delivery address:&nbsp; {order.shippingAddress}</h6>
                  <h6>Phone number: &nbsp; {order.phoneNumber}</h6>
                  <h6>Message: &nbsp;{order.message}</h6>
                  <h6>Delivery Status: &nbsp;{order.isDelivered}</h6>
                  <br></br>
                  <h4 className="heading">Payment Detail</h4>
                  <hr></hr>
                  <h6>Total Amount:&nbsp;Rs. {order.orderAmount}</h6>
                  <h6>
                    Payment Status: &nbsp;{" "}
                    {order.isPaid ? <>Paid</> : <>Not Paid</>}
                  </h6>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderScreen;
