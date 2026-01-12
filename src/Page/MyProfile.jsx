import React, { use } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";

const MyProfile = () => {
  const { user } = use(AuthContext);
  const { displayName, email, photoURL } = user;
  return (
    <div>
      <Helmet>
        <title>My Profile</title>
        <meta name="description" content="Best toys for kids" />
      </Helmet>

      <div className="w-11/12 mx-auto mt-5">
        <h1 className="text-3xl font-semibold text-center">Your Profile</h1>

        <div className=" text-center mt-3">
          <h2 className="text-xl text-purple-900">Name: {displayName}</h2>
          <h2 className="text-xl text-purple-900">Email: {email}</h2>
          <h2 className="text-xl text-purple-900">photo URL: {photoURL}</h2>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
