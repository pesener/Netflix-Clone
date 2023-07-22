import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      {" "}
      <h1 className="text-4xl text-[#E50914] font-bold cursor-pointer">
        {" "}
        NETFLIX{" "}
      </h1>
      <div>
        <button className="pr-4 rounded cursor-pointer text-white">
          Sign In
        </button>
        <button className="bg-[#E50914] px-6 py-2 rounded cursor-pointer text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
