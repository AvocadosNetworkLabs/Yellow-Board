import { dbConnect } from 'utils/db';
import Users from 'models/users';
import cookie from "cookie";

dbConnect();

export default async function handler(req, res) {

    const { method , body,  } = req;
    const { user, psw } = body; 

    console.log(method, req.url);
    console.log(body);

    switch(method){
    //   case 'GET':
    //   try{
    //     const users = await Users.find();
    //     return res.status(200).json(users);
    //   }catch(err){
    //     return res.status(500).json({err: err.message});
    //   }

      case 'POST':
      try{
        console.log(body);
        const newUser = new Users(body);
        const savedUser = await newUser.save();
        return res.status(200).json(savedUser);
      }catch(err){
        return res.status(404).json({err: err.message});
      }

      default:
        return res.status(400).json({msg: 'method not suported'})
    }
}