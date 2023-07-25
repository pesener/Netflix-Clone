import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.js";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      {" "}
      <Link to="/">
        <h1 className="text-4xl text-[#E50914] font-bold cursor-pointer">
          {" "}
          NETFLIX{" "}
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="pr-4 rounded cursor-pointer text-white">
              Account
            </button>
          </Link>
          <Link to="/login">
            <button
              onClick={handleSignOut}
              className="bg-[#E50914] px-6 py-2 rounded cursor-pointer text-white"
            >
              Sign Out
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4 rounded cursor-pointer text-white">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#E50914] px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
