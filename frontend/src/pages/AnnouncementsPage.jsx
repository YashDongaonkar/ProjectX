import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon} from "lucide-react"
import NoticeList from "../components/NoticeList";
import AdminEditor from "../components/AdminEditor";

const AnnouncementPage = () => {
  const isAdmin = true;
 
  
  const [notices, setNotices] = useState([
    {
      id: 1,
      content: "Server maintenance scheduled for tomorrow.",
      date: "2025-07-13T09:00:00Z",
      category: "General",
      color: "blue",
    },
    {
      id: 2,
      content: "New feature released: Dashboard Analytics!",
      date: "2025-07-12T14:30:00Z",
      category: "Update",
      color: "green",
    },
    {
      id: 3,
      content: "Urgent: Security update required by all users.",
      date: "2025-07-11T08:15:00Z",
      category: "Urgent",
      color: "red",
    },
    {
      id: 4,
      content: "Monthly team meeting scheduled next week.",
      date: "2025-07-10T17:45:00Z",
      category: "Event",
      color: "violet",
    },
  ]);

  const handlePublish = (newNotice) => {
    setNotices((prev) => [
      { ...newNotice, id: prev.length + 1 },
      ...prev,
    ]);
  };

  return (
    
    <div className="container mx-auto p-2">
      <div className="navbar">
         <Link to="/home"><ArrowLeftIcon /></Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary navbar-start">Announcements</h1>
      </div>
     
      <div className="flex flex-col md:flex-row gap-5 justify-center">
        {isAdmin && (
          <div className="w-full md:w-[25%] md:mt-10">
            <AdminEditor onPublish={handlePublish} />
          </div>
        )}

        <div className="md:w-[60%] w-full mt-0 md:mt-10">
          <div className="mb-4">
            <button
              onClick={() => {}}
              className="btn btn-sm btn-outline mx-2"
            >
              Mark all as Read
            </button>
          </div>

          <NoticeList notices={notices} />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;