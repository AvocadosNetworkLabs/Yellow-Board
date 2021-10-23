import { dbConnect } from '../../../utils/db';
import Users from '../../../models/users';
import cookie from "cookie";
// import cookieCutter from 'cookie-cutter';
// import Cookies from 'cookies';

dbConnect();

export default async function handler(req, res) {

    const { method , body } = req;
    const { user, psw } = body; 

    console.log(req.method, req.url);

    switch(method){
      case 'GET':
      try{
        const users = await Users.find();
        return res.status(200).json(users);
      }catch(err){
        return res.status(500).json({err: err.message});
      }

      case 'POST':
      try{
        // console.log(user + ' ' + psw);
        // const newUsers = new Users(body);
        const savedUser = await Users.find({
            $and: [
                { $or: [{username: user}, {mail: user}]},
                { password: psw},
                { sta: 1 }
            ],
            "$project": { "_id": { "$toString": "$_id" } }
        });

        // console.log(savedUser);
        
        if(savedUser.length > 0){

          let obj = JSON.stringify(savedUser[0]).replace('\n', '').replace('_', '')

          res.setHeader("Set-Cookie", cookie.serialize("userData", obj, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,//Duracion de 1 semana
            sameSite: "strict",
            path: "/"
          }));
          // res.setHeader("Set-Cookie", cookie.serialize("session", true, {
          //   httpOnly: true,
          //   maxAge: 60 * 60,
          //   sameSite: "strict",
          //   path: "/"
          // }))
          return res.status(200).json({ Success: true, data: savedUser[0], msg: `Bienvenido ${savedUser[0].username} 🍪` });
        }else{
          // res.setHeader("Set-Cookie", cookie.serialize("userData", null, {
          //   httpOnly: true,
          //   maxAge: 60 * 60,
          //   sameSite: "strict",
          //   path: "/"
          // }))
          // res.setHeader("Set-Cookie", cookie.serialize("session", false, {
          //   httpOnly: true,
          //   maxAge: 60 * 60,
          //   sameSite: "strict",
          //   path: "/"
          // }))
          return res.status(200).json({ Success: false, data: null, msg: `You are not in ourdatabase 👿 `  });
        } 
        
        
      }catch(err){
        return res.status(200).json({Success: false, msg: err});
      }

      default:
        return res.status(200).json({msg: 'method not suported 🐣'})
    }
}
