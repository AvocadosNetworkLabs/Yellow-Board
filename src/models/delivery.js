import { Schema, model, models, Types } from 'mongoose';

const deliverySchema = new Schema(
  {
    userDeliver: {
      type: Types.ObjectId,
      required: [true, 'Title is required'],
    },
    courseDeliver: {
      type: Types.ObjectId,
      required: [true, 'Title is required'],
    },
    fileDeliver: {
      type: String,
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

export default models.delivery || model('delivery', deliverySchema);
