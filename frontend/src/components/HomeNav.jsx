import { Link } from "react-router-dom"

const HomeNav = () => {
  return (
    <nav className="navbar hero fixed top-0 z-50 bg-base-100 shadow-lg px-4 md:px-8 flex justify-between items-center">

      <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide navbar-start">
        Project<span className="text-secondary">X</span>
      </h2>

      <div className="navbar-end">
        <Link to="/">
          <button className="btn btn-lg btn-ghost text-base bg-black text-white hover:bg-gray-700">LOGOUT</button>
        </Link>
      </div>

    </nav >
  )
}

export default HomeNav