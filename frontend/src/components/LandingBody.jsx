import { Link } from "react-router-dom";

const LandingBody = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Manage Smarter, <span className="text-secondary">Study Better</span></h1>
                    <div className="mt-5">
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
            </div>
        </div>
    );
};

export default LandingBody;