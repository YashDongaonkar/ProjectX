import NoticeItem from "./NoticeItem";

const NoticeList = ({ notices }) => {
  const handleMarkAsRead = (id) => {
    alert(`Marked notice ${id} as read ✅`);
  };

  if (!notices || notices.length === 0) {
    return <p className="text-gray-600">No announcements yet.</p>;
  }

  return (
    <div>
      {notices.map((notice) => (
        <NoticeItem
          key={notice.id}
          notice={notice}
          onMarkAsRead={handleMarkAsRead}
        />
      ))}
    </div>
  );
};

export default NoticeList;
