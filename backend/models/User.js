import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'student'], default: 'student' },
  batch: { type: Number, required: true },
  department: { type: String, required: true },
  institute: { type: String, required: true },

  subjects: [{
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    totalClasses: { type: Number, default: 0, min: 0 },
    presentDays: { type: Number, default: 0, min: 0 }
  }]
}, { timestamps: true });


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Static method to compare passwords
userSchema.statics.comparePassword = async function(candidatePassword, hashedPassword) {
  return await bcrypt.compare(candidatePassword, hashedPassword);
};

const User = mongoose.model('User', userSchema);
export default User;