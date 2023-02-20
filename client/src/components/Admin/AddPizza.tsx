import React, { useState } from "react";
import SideBar from "../../screens/admin/SideBar";
import { addPizza } from "../../actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Error from "../Error";
import Success from "../Success";

import type { RootState, AppDispatch } from '../../store';


//Pizza Interface
interface pizzaI {
  name: string,
  prices: {
    small: number | undefined,
    medium: number | undefined,
    large: number | undefined
  },
  category: string,
  image: string,
  description: string
}


const AddPizza: React.FC = () => {
  const [name, setName] = useState<string>("");                 //State to set value for name
  const [smallPrice, setSmallPrice] = useState<number>();       //State to set value for smallPrice
  const [largePrice, setLargePrice] = useState<number>();       //State to set value for largePrice
  const [mediumPrice, setMediumPrice] = useState<number>();     //State to set value for mediuemPrice
  const [image, setImage] = useState<string>("");                 //State to set value for image
  const [description, setDescription] = useState<string>("");     //State to set value for description
  const [category, setCategory] = useState<string>("");           //State to set value for category

  const addPizzaState = useSelector((state: RootState) => state.addPizzaReducer);
  const { loading, error, success } = addPizzaState;

  const dispatch: AppDispatch = useDispatch();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pizza: pizzaI = {
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
    dispatch(addPizza(pizza));
  };

  return (
    <div style={{ marginTop: "4rem", marginBottom: "5rem" }}>
      {loading && <Loader />}
      {error && <Error error="add new pizza error" />}
      {success && <Success success="pizza added successfully" />}
      <div
        className="container mt-3 p-0"
        id="admin-container"
        style={{ backgroundColor: "#8bc34a1c" }}
      >
        <h3
          className="text-center bg-dark text-light   p-2 "
          style={{ width: "100%", margin: "auto" }}
        >
          Admin Panel
        </h3>
        <div className="row mt-1">
          <SideBar />
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
                  onChange={(e) => setName(e.target.value as string)}
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
                  Add new
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPizza;
