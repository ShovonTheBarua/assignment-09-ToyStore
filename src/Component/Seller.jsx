import React from "react";
import { useLoaderData } from "react-router";

const Seller = () => {
  const data = useLoaderData();

  const newData = data.slice(0, 3);

  console.log(newData);
  return (
    <div className="w-11/12 mx-auto space-y-5">
      <h1 className="text-center font-semibold text-4xl my-10">All Seller</h1>
      {newData.map((d) => (
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={d.pictureURL}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{d.sellerName}</h1>
              <p className="py-6">{d.description}</p>
              <button className="btn btn-primary">Contact</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Seller;
