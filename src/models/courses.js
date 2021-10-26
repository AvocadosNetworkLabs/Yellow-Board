import { Schema, model, models, Types  } from "mongoose";

const coursesSchema = new Schema({
    teacher:{
        type: Types.ObjectId,
        required: [true, 'Title is required'],
    },
    courseName: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    },   
    students: {
        type: Number,
        required: true,
    },
    startDate:{
        type: String,
        required: true,
    },
    sta:{
        type: Number,
        trim: true,
        default: '1'
    },
},{
    timestamps: true,
    versionKey: false,
})


export default models.Courses || model('Courses', coursesSchema);