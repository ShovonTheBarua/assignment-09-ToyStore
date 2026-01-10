import React from "react";
import ToyCard from "./ToyCard";

const PopularToys = ({ ToyData }) => {
  console.log(ToyData);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Popular Toys</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {ToyData.map((data) => (
          <ToyCard data={data}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default PopularToys;
