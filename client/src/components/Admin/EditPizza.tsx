import React, { useEffect, useState } from "react";
import SideBar from "../../screens/admin/SideBar";
import "../../screens/admin/adminScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaById, updatePizza } from "../../actions/pizzaAction";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import Error from "../Error";
import Success from "../Success";

import type { RootState, AppDispatch } from '../../store';


interface pizzaUpdate{
    
  id: String | undefined,
  name:string,
  image:string,
  description:string,
  category:string,
  prices: {
    small: number |undefined,
    medium: number|undefined,
    large: number|undefined,
  
}
}
const EditPizza: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [smallPrice, setSmallPrice] = useState<number>();
  const [largePrice, setLargePrice] = useState<number>();
  const [mediumPrice, setMediumPrice] = useState<number>();
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();
  const { pizzaId } = useParams();
  const getPizzaByState = useSelector((state: RootState) => state.getPizzaByIDReducer);
  const { loading, error, pizza } = getPizzaByState;
  const updatePizzaState = useSelector((state: RootState) => state.updatePizzaByIDReducer);
  const { updateloading, updatesuccess, updateerror } = updatePizzaState;
  useEffect(() => {
    if (pizza) {
      if (pizza[0].id === pizzaId) {
        setName(pizza[0].name);
        setDescription(pizza[0].description);
        setCategory(pizza[0].category);
        setImage(pizza[0].image);
        setSmallPrice(pizza[0].prices[0]["small"]);
        setMediumPrice(pizza[0].prices[0]["medium"]);
        setLargePrice(pizza[0].prices[0]["large"]);
      } else {
        dispatch(getPizzaById(pizzaId));
      }
    } else {
      dispatch(getPizzaById(pizzaId));
    }
  }, [pizza, dispatch]);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedPizza:pizzaUpdate = {
      id: pizzaId,
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(updatePizza(updatedPizza));
  };
  return (
    <div style={{ marginTop: "6rem", marginBottom: "5rem" }}>
      {updateloading && <Loader />}
      {error && <Error error="updating pizza fail" />}
      <div className="container mt-3 p-0" style={{ backgroundColor: "#8bc34a1c" }}>
        <h3
          className="text-center bg-dark text-light   p-2 "
          style={{ width: "100%", margin: "auto" }}
        >
          Admin Panel
        </h3>
        <div className="row mt-1">
          <>
            <SideBar />
            {console.log("hiiii", name, category)}
            <div className="col-8 col-lg-8 col-md-8 col-sm-12">
              <form className="row g-3" onSubmit={submitForm}>
                <div className="col-12">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputSmallPrice" className="form-label">
                    Small Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={smallPrice}
                    onChange={(e) => setSmallPrice(Number(e.target.value))}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputMediumPrice" className="form-label">
                    Medium Price
                    <input
                      type="text"
                      className="form-control"
                      value={mediumPrice}
                      onChange={(e) => setMediumPrice(Number(e.target.value))}
                    />
                  </label>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputLargePrice" className="form-label">
                    Large Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={largePrice}
                    onChange={(e) => setLargePrice(Number(e.target.value))}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputImage" className="form-label">
                    Image
                  </label>
                  <input
                    type="type"
                    className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputDescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id="inputDescription"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputCategory" className="form-label">
                    Category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    id="inputCategory"
                  />
                </div>

                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
                    Update Pizza
                  </button>
                </div>
              </form>
            </div>
          </>
        </div>
      </div>
    </div>

  );
};

export default EditPizza;
