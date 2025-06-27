import { Link } from "react-router-dom";

const LandingBody = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <ul className="menu menu-xl menu-horizontal bg-base-200 rounded-box">
                    <li>
                        <Link to="/attendance" className="btn btn-primary btn-lg p-10">
                            ATTENDANCE
                        </Link>
                    </li>
                    <li>
                        <Link to="/announcements" className="btn btn-primary btn-lg p-10">
                            ANNOUNCEMENTS
                        </Link>
                    </li>
                    <li>
                        <Link to="/polls" className="btn btn-primary btn-lg p-10">
                            POLLS
                        </Link>
                    </li>
                    <li>
                        <Link to="/todos" className="btn btn-primary btn-lg p-10">
                            TO-DOS
                        </Link>
                    </li>
                    <li>
                        <Link to="/calendar" className="btn btn-primary btn-lg p-10">
                            CALENDAR
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LandingBody;