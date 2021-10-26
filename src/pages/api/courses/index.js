import { dbConnect } from '../../../utils/db';
import Courses from '../../../models/courses';
import { Types } from "mongoose";
const ObjectId = Types.ObjectId;

dbConnect();
export default async function handler(req, res) {
    const { method , body } = req;
    const { idUsr, teacher} = body
    switch(method){
      case 'GET':
      try{
        console.log(body);

        //inerjoin
        const results = await Courses.aggregate(
            [
                {
                    $lookup:{
                        from: "users", //users
                        localField: "teacher", // profesor
                        foreignField: "_id", //id user users
                        as: "userCourses"
                    }
                },{$unwind: "$userCourses"},
                {$match:{ teacher: ObjectId(teacher) }}
            ]
        )
        console.log(results);

        return res.status(200).json(results);
      }catch(err){
        return res.status(500).json({err: err.message});
      }

      case 'POST':
          try{
            const newCourse = new Courses(body);
            const savedCourse = await newCourse.save();
            return res.status(200).json(savedCourse);

        }catch(err){
            return res.status(200).json({ msg: err });
        }
      default:
        return res.status(200).json({msg: 'method not suported 🐣'})
    }
}
