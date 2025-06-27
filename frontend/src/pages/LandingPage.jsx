import React from "react";
import { Link } from "react-router-dom";
import LandingNav from "../components/LandingNav";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen min-w-screen flex flex-col ">
      <LandingNav />
      <div className="flex flex-col items-center justify-center p-6 m-auto">
        <h1 className="text-4xl font-bold text-center text-white">
          Welcome to ProjectX
        </h1>
        <p className="mt-4 text-lg text-center text-gray-50">
          Your one-stop solution for all your project needs.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/register"
            className="bg-white text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg mr-4"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
