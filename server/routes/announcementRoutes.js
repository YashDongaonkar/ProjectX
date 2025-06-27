import express from 'express';
import {
  createAnnouncement,
  getAnnouncements,
  deleteAnnouncement
} from '../controllers/announcementController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', auth, createAnnouncement); // Admin only (check in controller)
router.get('/', auth, getAnnouncements);
router.delete('/:id', auth, deleteAnnouncement);

export default router;