import React, { useEffect } from "react";
import '../App.css'
// import AllPizza from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import  {getAllPizzas}  from "../actions/pizzaAction";
import Pizza from "../components/Pizza";
import Loader from "./Loader";
import Error from "./Error";
import "../App.css";
import Carousel from "../screens/Carousel";
import type { RootState, AppDispatch } from '../store';



// Main page displaying banner and pizzas

export const Homescreen : React.FC = ()=> {
  const dispatch : AppDispatch = useDispatch();

  {/** geting  pizzas from getAllPizzaReducers */}
  const pizzaState = useSelector((state: RootState) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState as {
    loading: boolean,
    pizzas: any[],
    error:any
  };

  // calling action to get all the pizzas from reducer
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>

      {/** Front page pizza Banner  */}
      <Carousel />

      {/** main Container Displaying Pizzas  */}
      <div className="container">
        <div
          className="row divider-container "
         style={{margin:"auto"}}
        >
          <div className="col-lg-4 col-4 col-md-4 col-sm-4">
            <div
              id="divider"
              style={{
                width: "100%",
                height: "2px",
                marginTop: "2rem",
                backgroundColor: "#e9b466",
              }}
            ></div>
          </div>
          <div
            className="col-lg-4 col-4 col-md-4 col-sm-4"
            style={{ textAlign: "center" }}
          >
            {/** image of plates and spoons */}
            <img 
              style={{ width: "70px", height: "70px", borderRadius: "15rem" }}
              src={
                "https://thumbs.dreamstime.com/b/restaurant-logo-fork-spoon-gold-86311909.jpg"
              }
              alt=""
            />
          </div>
          {/* Displaying pizzas*/}
          <div className="col-lg-4 col-4 col-md-4 col-sm-4">
            <div
              id="divider"
              style={{
                width: "100%",
                marginTop: "2rem",
                height: "2px",
                backgroundColor: "#e9b466",
              }}
            ></div>
          </div>
        </div>
        {/**If Pizza is loading then display loader   */}
        {/**If error displaying Pizza  then display error message   */}
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="Error while loading" />
        ) : (
          <div
            className="row mt-5"
            style={{ padding: "5px", margin: "auto", marginBottom: "10rem" }}
          >
            <div style={{ textAlign: "center" }}>
              <h3>Available Pizzas</h3>
            </div>

            {/** cards displaying  available Pizzas */}
            {pizzas.map((pizza:any) => (
              <div className="col-12 col-md-6 col-lg-4 col-sm-6 mt-4">
                {/** Pizza component */}
                <Pizza pizza={pizza} />
              </div>
            ))}
          </div>
        )}
        </div>
        <section className="info-list">
	<div className="container">
		<div className="row">
			<div className="col-md-4">
				
				<h4>Quality Food</h4>
				<p>All dishes are crafted using natural ingredients so that each dish is absolutely free of artificial flavor, synthetic essence or imitation color.</p>
			</div>
			<div className="col-md-4">
				<img src={"../images/icon_2.png"} alt="" className="order-img"/>
				<h4>Delicious Receipe</h4>
				<p>Each recipe is our chefs’ original creation inspired from their love for freshest local produce, slow cooking and fragrant flavours.</p>
			</div>
			<div className="col-md-4">
				<img src={"../images/icon_3.png"} alt=""/>
				<h4>Fast Delivery</h4>
				<p>With a unique technology, food is sealed for freshness and temperature-retention; making every bite full of wholesome goodness – just how the chefs intended.</p>
			</div>
		</div>
	</div>
</section>
        <footer className="footer solid-bg-two">
	<div className="tp-footer">
		<div className="newsletter">
				<form>
					<h3>Enjoy Our Pizzas</h3>
					<input type="text" name="" placeholder="Enter Your Email"/>
					<a href=""><button type="submit">Subscribe</button></a>
				</form>
			</div>
		<div className="container">
			<div className="footer-mid">
				<div className="row">
					<div className="col-md-3">
						<h4>Address</h4>
						<p>Libali, Bhaktapur - 8, Nepal</p>
					</div>
					<div className="col-md-3">
						<h4>Contact</h4>
						<p>info@pizzamania.com<br/>Tel: 123-456-7890</p>
					</div>
					<div className="col-md-3">
						<h4>Hours</h4>
						<p>OPEN DAILY<br/>10AM-10PM</p>
					</div>
					<div className="col-md-3">
						<h4>Social Media</h4>
						<i className="fab fa-facebook"></i>
						
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<p>Copyright © 2021. All Rights Reserved.</p>
			</div>
		</div>
	</div>
</footer>
      
    </>
  );
};

