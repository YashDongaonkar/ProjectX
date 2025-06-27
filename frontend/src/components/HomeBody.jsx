import { Link } from "react-router-dom";
import { BookOpen, Calendar, ClipboardList, Megaphone, Repeat, Users } from "lucide-react";

const features = [
  { name: "Attendance", path: "/attendance", icon: Users },
  { name: "Announcements", path: "/announcements", icon: Megaphone },
  { name: "Polls", path: "/polls", icon: ClipboardList },
  { name: "To-Dos", path: "/todos", icon: BookOpen },
  { name: "Calendar", path: "/calendar", icon: Calendar },
];

const LandingBody = () => {
  return (
    
    <main className="relative flex-1 flex flex-col items-center justify-start py-12 px-4 sm:px-8  min-h-screen " style={{ backgroundImage: "url('/bg-img.jpg')", backgroundRepeat: "no-repeat",backgroundSize: "cover" }}>
      
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-10 animate-fade-in">
        Welcome to Your Dashboard
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full ">
        {features.map(({ name, path, icon: Icon }) => (
          <Link
            key={name}
            to={path}
            className="bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-1 rounded-xl p-6 flex flex-col items-center justify-center text-center border border-gray-200 hover:border-indigo-400"
          >
            <div className="bg-indigo-100 p-3 rounded-full mb-3">
              <Icon className="w-8 h-8 text-indigo-600 " />
            </div>
            <h2 className="text-md font-semibold text-gray-800 group-hover:text-indigo-600 hover:text-blue-500">
              {name.toUpperCase()}
            </h2>
          </Link>
        ))}
      </div>
      


      
    </main>
  );
};

export default LandingBody;
