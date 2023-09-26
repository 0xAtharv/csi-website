import React from "react";
import datas from "./images";
import "../App.css";
// import "../style.css"
function Galleryy() {
  const imgdata = datas.map((data) => (
    <div className="carousel-item" key={data.key}>
      <h2>{data.key}</h2>
      <img src={data.img} alt={data.key} />
    </div>
  ));
  return (
    <div>
      {/* <div className="carousel__container">
        {imgdata}
      </div> */}
      {imgdata}
    </div>
  );
}

export default Galleryy;
