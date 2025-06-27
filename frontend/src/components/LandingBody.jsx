import { Link } from "react-router-dom";

const LandingBody = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Manage Smarter,<br/> <span className="text-secondary">Study Better</span></h1>
                    <div className="mt-5 flex justify-center gap-4">
                        <Link to="/login">
                            <button className="btn btn-primary btn-lg rounded-2xl">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-secondary btn-lg rounded-2xl">
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