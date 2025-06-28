const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
const authRoute = `${backendUrl}/api/auth`;
const attendanceRoute = `${backendUrl}/api/attendance`;
const todoRoute = `${backendUrl}/api/todos`;
const pollRoute = `${backendUrl}/api/polls`;
const calendarRoute = `${backendUrl}/api/calendar`;
const announcementRoute = `${backendUrl}/api/announcements`;

export {
  backendUrl,
  authRoute,
  attendanceRoute,
  todoRoute,
  pollRoute,
  calendarRoute,
  announcementRoute
};