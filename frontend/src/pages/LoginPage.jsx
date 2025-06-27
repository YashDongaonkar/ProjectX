// FIXES NEEDED

import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen min-w-screen flex items-center justify-center">
      <div className="bg-white w-100 p-6 rounded-lg shadow-md text-zinc-950">
        <h2 className="text-lg font-semibold mb-8 flex items-center justify-center ">
          ProjectX
        </h2>
        <form
          action={"/api/login"}
          method="POST"
          className="space-y-4 max-w-md mx-auto p-6 rounded-lg w-full flex flex-col"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
            <p className="mt-4 text-sm text-gray-500 text-right">
              <Link to="/forgot-password" className="text-blue-500">
                Forgot your password?
              </Link>
            </p>
          </div>
          <button
            className=" bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 w-50 m-auto"
            type="submit"
          >
            Login
          </button>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Don't have an account?
            <Link to="/register" className="text-blue-500 ml-2.5">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;