import mongoose from 'mongoose';

const calendarEventSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  label: {
    type: String,
    enum: ['holiday', 'exam', 'assignment'],
    required: true
  },
  color: { type: String },
  targetBatches: [{ type: Number }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.model('CalendarEvent', calendarEventSchema);