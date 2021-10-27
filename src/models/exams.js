import { Schema, model, models, Types } from 'mongoose';

const examsSchema = new Schema(
  {
    courseExam: {
      type: Types.ObjectId,
      required: [true, 'Title is required'],
    },
    gradesTitle: {
      type: String,
    },
    grades: {
      type: Number,
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
