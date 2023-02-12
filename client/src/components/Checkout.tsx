import React from 'react';
import { useDispatch, useSelector } from "react-redux";


// type interface for item prop
interface itemInterface{
    name:string,
    varient:string,
    quantity:number,
    prices:any[],
    image:string
  }
  
  // type for props passed to checkout component
  
  type Props = {
    sn: number;
    item: itemInterface;
   
  };
// checkout component displaying pizza items added to cart 
// total price of pizzas added to cart
const Checkout : React.FC< Props > = (props)=> {
    const { sn,item } = props;
    return (
        <>
            <div className="col-6 col-lg-6 col-md-6 col-sm-6 mt-2">
                <h6>
                    {sn + 1}.&nbsp;{item.name} [{item.varient}]
                </h6>
                <h6>
                    {/* calculating prices by multiplying quantity and pizza price  */}
                    {" "}
                    &nbsp;&nbsp;&nbsp;Price: {item.quantity} X{" "}
                    {item.prices[0][item.varient]} ={" "}
                    {item.quantity * item.prices[0][item.varient]}
                </h6>
                <h6>
                    {" "}
                    &nbsp;&nbsp;&nbsp;Quantity: &nbsp;

                    &nbsp;{item.quantity}&nbsp;

                </h6>
            </div>
            <div className="col-6 col-lg-6 col-md-6 col-sm-6 mt-2">
                <img
                    alt={item.name}
                    src={item.image}
                    style={{ width: "80%", height: "90%", textAlign: "left" }}
                />

            </div>
        </>

    )
}

export default Checkout
