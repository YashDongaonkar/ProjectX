import LandingNav from "../components/LandingNav";
import LandingBody from "../components/LandingBody"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <LandingNav />
      <LandingBody />
    </div>
  );
};

export default LandingPage;
