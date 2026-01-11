import React from "react";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <div className="flex text-center justify-center items-center min-h-screen bg-red-200">
      <Helmet>
        <title>Error</title>
        <meta name="description" content="Best toys for kids" />
      </Helmet>
      <div>
        <h1 className="text-7xl font-bold">404!!!</h1>
        <p className="text-2xl font-semibold">Page not found</p>
      </div>
    </div>
  );
};

export default Error;
