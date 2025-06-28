import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages

import LandingPage from "./pages/LandingPage";

import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import ForgotPassPage from "./pages/ForgotPassPage"

import HomePage from "./pages/HomePage";

import AttendancePage from "./pages/AttendancePage";
import AddSubjectPage from "./pages/AddSubjectPage";
import SubjectDetailPage from "./pages/SubjectDetailPage"

import PollsPage from "./pages/PollsPage";

import AnnouncementsPage from "./pages/AnnouncementsPage";

import CalendarPage from "./pages/CalendarPage";

import TodoPage from "./pages/TodoPage";

import ProtectedRoute from "./components/ProtectedRoute";

// modules

function App() {
  return (
    <>
      <Router>
        <Routes>

          {/* public */}
          <Route path="*" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassPage />} />

          {/* Protected */}
          {/* UNCOMMENT AFTER COMPLETING AUTHENTICATION */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/attendance/add" element={<AddSubjectPage />} />
            <Route path="/attendance/:subjectId" element={<SubjectDetailPage />} />
            <Route path="/todos" element={<TodoPage />} />
            <Route path="/announcements" element={<AnnouncementsPage />} />
            <Route path="/polls" element={<PollsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
