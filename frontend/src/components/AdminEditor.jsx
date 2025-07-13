import { useState } from "react";

const AdminEditor = ({ onPublish }) => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [color, setColor] = useState("blue");

  const handlePublish = () => {
    const newNotice = {
      content,
      category,
      color,
      date: new Date().toISOString(),
    };

    onPublish(newNotice);
    setContent("");
    setCategory("General");
    setColor("blue");
  };

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    // Also map to color for consistency
    switch (selected) {
      case "General":
        setColor("blue");
        break;
      case "Update":
        setColor("green");
        break;
      case "Urgent":
        setColor("red");
        break;
      case "Event":
        setColor("violet");
        break;
      default:
        setColor("blue");
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded mb-6 mx-2 bg-base-300">
      <textarea
        className="w-full border p-2"
        rows="10"
        placeholder="Write your notice..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="mt-2">
        <label className="mr-2">Category:</label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="General" className="bg-base-100">General</option>
          <option value="Update" className="bg-base-100">Update</option>
          <option value="Urgent" className="bg-base-100">Urgent</option>
          <option value="Event" className="bg-base-100">Event</option>
        </select>
      </div>

      <button
        onClick={handlePublish}
        className="btn btn-sm btn-primary mt-4"
      >
        Publish
      </button>
    </div>
  );
};

export default AdminEditor;
