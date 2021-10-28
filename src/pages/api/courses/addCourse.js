import { dbConnect } from '../../../utils/db';
import { Types } from 'mongoose';
import Courses from 'models/courses';
const ObjectId = Types.ObjectId;

dbConnect();
export default async function handler(req, res) {
  const { method, body } = req;
  switch (method) {
    case 'POST':
      try {
        const newCourse = new Courses(body);
        const savedCourse = await newCourse.save();
        return res.status(201).json(savedCourse);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    default:
      return res.status(400).json({ msg: 'method not suported 🐣' });
  }
}
