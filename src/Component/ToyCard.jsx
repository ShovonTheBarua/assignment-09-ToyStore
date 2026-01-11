import React from "react";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router";

const ToyCard = ({ data }) => {
  const {
    pictureURL,
    toyName,
    price,
    rating,
    subCategory,
    toyId,
    sellerEmail,
    sellerName,
    description,
    availableQuantity,
  } = data; 
  console.log(data);
  return (
    <div className="card bg-base-100 w-96 shadow-sm mx-auto border border-gray-300 ">
      <figure className="px-10 pt-10">
        <img
          src={pictureURL}
          alt="Shoes"
          className="rounded-xl w-full h-[200px] object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <div className="flex gap-3">
          <h2 className="card-title ">{toyName}</h2>
          <button className="flex items-center font-semibold gap-1 border px-3 border-gray-500 rounded-2xl">
           {rating} <IoIosStar />
          </button>
        </div>

        <p className="text-gray-700">Quantity: {availableQuantity}</p>

        <p className="text-xl">${price}</p>
        <div className="card-actions">
          <Link to={`/toydetails/${toyId}`} className="btn btn-neutral">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
