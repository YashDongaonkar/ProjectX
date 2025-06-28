import { Link } from "react-router-dom"
import { ArrowLeftIcon } from "lucide-react"

const AttendanceNav = () => {
  return (
    <nav className="navbar">

      <Link to="/home">
        <ArrowLeftIcon />
      </Link>

      <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide navbar-start">
        Attendance
      </h2>

    </nav >
  )
}

export default AttendanceNav