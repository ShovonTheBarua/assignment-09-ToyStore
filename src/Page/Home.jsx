import React from "react";
import Slider from "../Component/Slider";
import { useLoaderData } from "react-router";
import PopularToys from "../Component/PopularToys";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const ToyData = useLoaderData();
  // console.log(ToyData)

  return (
    <div className="space-y-5 w-11/12 mx-auto">
      <Helmet>
        <title>Toy Store | Home</title>
        <meta name="description" content="Best toys for kids" />
      </Helmet>

      <Slider></Slider>
      <PopularToys ToyData={ToyData}></PopularToys>
    </div>
  );
};

export default Home;
