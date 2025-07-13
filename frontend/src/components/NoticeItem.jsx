const NoticeItem = ({ notice, onMarkAsRead }) => {
  const getColorClass = (color) => {
    switch (color) {
      case "blue":
        return "border-l-4 border-blue-500";
      case "green":
        return "border-l-4 border-green-500";
      case "red":
        return "border-l-4 border-red-500";
      case "violet":
        return "border-l-4 border-violet-500";
      default:
        return "border-l-4 border-gray-300";
    }
  };

  return (
    <div className={`card bg-base-300 shadow-md mb-4 mx-2 ${getColorClass(notice.color)}`}>
      <div className="card-body">
        <span className="badge badge-primary mb-2">{notice.category}</span>

        <p className="text-base">{notice.content}</p>
        <small className="text-gray-500">{new Date(notice.date).toLocaleString()}</small>

        <div className="mt-3">
          <button
            onClick={() => onMarkAsRead(notice.id)}
            className="btn btn-sm btn-outline"
          >
            Mark as Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeItem;
