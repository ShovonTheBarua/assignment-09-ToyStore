import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
  const { createUser } = use(AuthContext);
  const [show, setShow] = useState(false);
  
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordVerify = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordVerify.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
      return;
    }
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        // setUser(res.user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className=" ">
      <div className="min-h-screen flex flex-col justify-center items-center w-full gap-3">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Register</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              {/* photo */}
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
              />
              {/* Email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* password */}
              <div className=" relative cursor-pointer">
                <label className="label">Password</label>
                <input
                  name="password"
                  type={`${show ? "text" : "password"}`}
                  className="input"
                  placeholder="Password"
                />
                <p  onClick={()=> setShow(!show)}>
                  {show ? (
                  <FiEye className="absolute right-[30px] top-[35px]" />
                ) : (
                  <FiEyeOff className="absolute right-[30px] top-[35px]" />
                )}
                </p>
              </div>

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>

              {/* Google */}
              <button className="btn bg-white text-black border-[#e5e5e5] ">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p className="text-center">
                Already have an account? Please{" "}
                <Link
                  to="/auth/login"
                  className="text-purple-700 font-semibold"
                >
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
