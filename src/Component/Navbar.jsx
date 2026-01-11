import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser, setUser } = use(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    signOutUser()
      .then((res) => {
        console.log(res);
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row border justify-between   items-center w-11/12 mx-auto py-3">
        <h1 className="text-2xl font-bold">ToyTopia</h1>
        <div className="flex gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/myprofile">My profile</NavLink>
          {user && <NavLink to="/seller">Seller</NavLink>}
        </div>
        <div className="flex items-center gap-4">
          {user ? <img className="w-[40px] rounded-full" src={user.photoURL} alt="" /> : ""}
          {user ? (
            <Link to="/" onClick={handleLogOut} className="btn">
              Log Out
            </Link>
          ) : (
            <Link to="/auth/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
