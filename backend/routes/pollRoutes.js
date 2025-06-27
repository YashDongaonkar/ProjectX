import express from 'express';
import {
  createPoll,
  votePoll,
  getPolls,
  deletePoll
} from '../controllers/pollController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', auth, createPoll); // Admin only
router.post('/:pollId/vote', auth, votePoll);
router.get('/', auth, getPolls);
router.delete('/:id', auth, deletePoll);

export default router;
