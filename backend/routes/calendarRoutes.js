import express from 'express';
import {
  createEvent,
  getEvents
} from '../controllers/calendarController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', auth, createEvent); // Admin only
router.get('/', auth, getEvents);    // Returns relevant events by batch

export default router;