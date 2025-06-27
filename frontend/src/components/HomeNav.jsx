import { Link } from "react-router-dom"

const HomeNav = () => {
  return (
    <nav className="navbar">

      <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide navbar-start">
        Project<span className="text-secondary">X</span>
      </h1>

      <div className="navbar-end">
        <Link to="/">
          <button className="btn btn-lg btn-ghost text-base">LOGOUT</button>
        </Link>
      </div>

    </nav >
  )
}

export default HomeNav