import express from 'express';
import {
  addSubject,
  getSubjects,
  deleteSubject,
  markAttendance,
  getAttendanceBySubject
} from '../controllers/attendanceController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/subject', auth, addSubject);
router.get('/subject', auth, getSubjects);
router.delete('/subject/:id', auth, deleteSubject);

router.post('/:subjectId', auth, markAttendance);
router.get('/:subjectId', auth, getAttendanceBySubject);

export default router;