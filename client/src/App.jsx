import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./utils/auth"; // Assuming you have an auth utility to check login status
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Hero from "./pages/Hero.jsx";
import ForgotPass from "./pages/ForgotPass.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import "./App.css"; // Assuming you have some global styles
import Home from "./pages/Home.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Fallback route to Hero page */}
          <Route path="*" element={<Hero />} />{" "}
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route
            path="/"
            element={
              isLoggedIn() ? <Home /> : <Hero />
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
