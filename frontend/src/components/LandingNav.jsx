import { Link } from "react-router-dom"

import { isLoggedIn } from "../utils/auth"; // Assuming you have an auth utility to check login status

const navElements = [
  { to: "/login", label: "LOGIN", isVisible: !isLoggedIn() },
  { to: "/register", label: "REGISTER", isVisible: !isLoggedIn() },
  { to: "/dashboard", label: "DASHBOARD", isVisible: isLoggedIn() },
];

const LandingNav = () => {
  return (
    <nav className="navbar fixed top-0 z-50 bg-base-100 shadow-lg px-4 md:px-8 flex justify-between items-center">

      <h1 className="text-xl md:text-2xl font-extrabold text-primary tracking-wide navbar-start">
        Project<span className="text-secondary">X</span>
      </h1>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {navElements.map((element, index) => (
            element.isVisible && (
              <li key={index}>
                <Link to={element.to} className="btn btn-ghost text-base">
                  {element.label}
                </Link>
              </li>
            )
          ))}
        </ul>
      </div>
    </nav >
  )
}

export default LandingNav