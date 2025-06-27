import { Link } from "react-router-dom"

const LandingNav = () => {
  return (
    <nav className="navbar">

      <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide navbar-start">
        Project<span className="text-secondary">X</span>
      </h1>

      <div className="navbar-end">
        <Link to="/login">
          <button class="btn btn-ghost text-base">LOGIN</button>
        </Link>

        <Link to="/register">
          <button className="btn btn-ghost text-base">REGISTER</button>
        </Link>
      </div>

    </nav >
  )
}

export default LandingNav