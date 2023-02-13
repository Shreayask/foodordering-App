import React from "react";

const Carousel: React.FC = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img
              src={
                "https://cdn.dribbble.com/users/8300847/screenshots/15967671/untitled-1_4x.jpg"
              }
              className="d-block w-100 h-100 opacity-3"
              alt="pic"
            />

            <div className="carousel-caption "></div>
          </div>
          <div className="carousel-item">
            <img
              src={
                "https://static.picmaker.com/scene-prebuilts/thumbnails/FA-0009.png"
              }
              className="d-block w-100 h-100 opacity-3"
              alt="pic"
            />

            <div className="carousel-caption "></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
