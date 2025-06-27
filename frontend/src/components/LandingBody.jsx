import { Link } from "react-router-dom";

const LandingBody = () => {
    return (
        <section className="flex flex-center justify-center">
            <div className="flex flex-col flex-center justify-center">
                <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide">
                    Manage Smarter, <span className="text-secondary">Study Better</span>
                </h1>
                <p className="text-lg opacity-90">
                    ProjectX helps students and admins organize attendance, updates, tasks, and schedules — all from one central dashboard.
                </p>
                <div className="flex justify-center md:justify-start gap-4 pt-4">
                    <Link to="/login">
                        <button className="btn btn-primary btn-lg">
                            Login
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className="btn btn-secondary btn-lg">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LandingBody;