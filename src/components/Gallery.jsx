import React from "react";
import datas  from "./images";
import "../App.css";
function Gallery() {
  const dataGallery = datas.map((data) => {
    <img src={data.img} alt="people" className="carousel-item__img" />;
  });
  return (
    <div>
      {/* <div className="background"></div>
      <div className="background-texture"></div> */}

      <section className="carousel">
        <div className="carousel__container">
          <div className="carousel-item">
            {dataGallery}
            {/* <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h5 className="carousel-item__details--title">Descriptive Title</h5>
              <h6 className="carousel-item__details--subtitle">
                Date and Duration
              </h6>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
