import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authRoute } from "../utils/api";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${authRoute}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Important for cookies
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - redirect to dashboard
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("Network error: " + (error.message || "Please try again later."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div className="bg-white w-100 p-6 rounded-lg text-zinc-950 shadow-md">
        <h2 className="text-lg font-semibold mb-8 flex items-center justify-center ">
          ProjectX
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto p-6 rounded-lg w-full flex flex-col"
        >
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
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
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
              required
            />
            <p className="mt-4 text-sm text-gray-500 text-right">
              <Link to="/forgot-password" className="text-blue-500">
                Forgot your password?
              </Link>
            </p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
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