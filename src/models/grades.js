import { Schema, model, models, Types } from 'mongoose';

const gradesSchema = new Schema(
  {
    userGrade: {
      type: Types.ObjectId,
      required: [true, 'Title is required'],
    },
    courseGrade: {
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

export default models.grades || model('grades', gradesSchema);
