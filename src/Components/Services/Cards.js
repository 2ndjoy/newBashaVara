import React from "react";
import { Link } from "react-router-dom";
import home1 from "../imagess/home1.jpg";
const Cards = () => {
  return (
    <div className="my-5 text-black">
      <div className="card h-80  w-80 shadow-xl">
        <figure>
          <img src={home1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">
            Tk: 10000 <small className="font-small font-thin">Monthly</small>
          </h2>
          <p className="">Location: Sylhet</p>
          <p className="">Size: Large</p>
          <div className="card-actions justify-end">
            {/* <PrivateRoute> */}{" "}
            <button className="btn btn-primary btn-sm">
              {" "}
              <Link to="/checkdetails"> Check Now</Link>
            </button>
            {/* </PrivateRoute> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
