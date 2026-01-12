import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ToyCard from "../Component/ToyCard";
import ToyDetailsCard from "../Component/ToyDetailsCard";
import { IoIosStar } from "react-icons/io";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const ToyDetailsPage = () => {
  const { id } = useParams();
  const allData = useLoaderData();
  const [data, setData] = useState({});

  useEffect(() => {
    const cardData = allData.find((singleData) => singleData.toyId == id);
    setData(cardData);
  }, [allData, id]);


 
  const { toyName, pictureURL, price, rating, availableQuantity, description } =
    data;

  return (
    <div className="w-11/12 mx-auto mt-5 w-fit mx-auto">
        <Helmet>
        <title>Toy details</title>
        <meta name="description" content="Best toys for kids" />
      </Helmet>
      <div className="flex flex-col md:flex-row gap-15 p-5 justify-center ">
        <img src={pictureURL} className="h-[400px] object-cover rounded-2xl" alt="" />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{toyName}</h1>
          <p className="text-5xl ">${price}</p>
          <p className="text-xl flex items-center gap-2">
            Rating: {rating}
            <IoIosStar />
          </p>
          <p className="text-xl ">Available Quantity: {availableQuantity}</p>
        </div>
      </div>
      <div className="border-b border-gray-200 my-4 mx-auto"></div>
      <div className="p-5">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{description}</p>
      </div>
      <div className="border-b border-gray-200 my-4 mx-auto"></div>

      {/* form */}
      <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto mt-10 shadow-2xl">
        <div className="card-body">
            <h1 className="text-center text-2xl font-semibold">Try New Toy</h1>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <button type="submit" onClick={()=>{toast.success('Successfully submited')}} className="btn btn-neutral mt-4">Try Now</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsPage;
