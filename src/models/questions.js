import { Schema, model, models, Types } from 'mongoose';

const examsSchema = new Schema(
  {
    exam: {
      type: Types.ObjectId,
      required: [true, 'Title is required'],
    },
    question: {
      type: String,
    },
    answers: {
      answers: [String],
    },
    sta: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.exams || model('exams', examsSchema);
