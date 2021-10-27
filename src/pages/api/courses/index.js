import { dbConnect } from '../../../utils/db';
import { Types } from 'mongoose';
import userCourses from 'models/coursesandusers';
const ObjectId = Types.ObjectId;

dbConnect();
export default async function handler(req, res) {
  const { method, body } = req;
  const { id } = body;
  switch (method) {
    case 'GET':
      try {
        console.log(body);

        //inerjoin
        const userCoursess = await userCourses.aggregate([
          {
            $lookup: {
              from: 'users', //users
              localField: 'userId', // profesor
              foreignField: '_id', //id user users
              as: 'userCourses',
            },
          },
          {
            $lookup: {
              from: 'courses', //users
              localField: 'courseId', // profesor
              foreignField: '_id', //id user users
              as: 'userCourses',
            },
          },
          { $unwind: '$userCourses' },
          { $match: { sta: 1, userId: ObjectId(id) } },
        ]);
        //para condiciones dentro del query
        // { $match: { teacher: ObjectId(teacher) } },

        console.log(userCoursess);

        return res.status(200).json(userCoursess);
      } catch (err) {
        return res.status(500).json({ err: err.message });
      }

    case 'POST':
      try {
        const newCourse = new Courses(body);
        const savedCourse = await newCourse.save();
        return res.status(200).json(savedCourse);
      } catch (err) {
        return res.status(200).json({ msg: err });
      }
    default:
      return res.status(200).json({ msg: 'method not suported 🐣' });
  }
}
