import React from "react";

const Contactus: React.FC = () => {
  return (
    <>
      <div className="view-container mt-5" >
        <div className="row" style={{ margin: "auto", marginTop: "10rem", width: "80%" }}>
          <div className="col-4 col-md-4 col-sm-4 col-lg-4">
            <img src={"https://img.restaurantguru.com/r395-Camion-PIZZA-MANIA-advertisement.jpg"}
              style={{ width: "100%", height: "300px", borderRadius: "7rem" }} alt='' />
          </div>
          <div className="col-8 col-md-8 col-sm-8 col-lg-8 ">
            <table className="table" style={{ width: "80%", margin: "auto", marginTop: "5rem" }}>
              <thead>
                <tr>
                  <th
                    colSpan={3}
                    scope="cols"
                    style={{
                      textAlign: "center",
                      backgroundColor: "rgb(211, 202, 122, 60%)",
                      fontSize: "20px",
                    }}
                  >
                    Contact Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="bi bi-telephone-fill"></i>
                  </td>
                  <td>Phone</td>
                  <td>9841450010</td>
                </tr>
                <tr>
                  <td>
                    <i className="bi bi-envelope-at-fill"></i>
                  </td>
                  <td>Email</td>
                  <td>pizzamania@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    <i className="bi bi-geo-alt-fill"></i>
                  </td>
                  <td>Location</td>
                  <td>Imadol, Kathmandu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
