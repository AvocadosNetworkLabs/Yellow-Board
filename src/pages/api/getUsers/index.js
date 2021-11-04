import { dbConnect } from '../../../utils/db';
import Users from '../../../models/users';
import cookie from 'cookie';
// import cookieCutter from 'cookie-cutter';
// import Cookies from 'cookies';

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;
  const { user, psw } = body;

  console.log(req.method, req.url);

  if (user === '' || psw === '') {
    return res
      .status(200)
      .json({ Success: false, data: null, msg: `algun dato esta vacio 🛑` });
  }

  switch (method) {
    case 'GET':
      try {
        const allUsers = await Users.find({});
        return res
          .status(200)
          .json({ Success: true, data: allUsers, msg: 'all users are ok' });
      } catch (err) {
        return res.status(400).json({ Success: false, msg: err.message });
      }
    default:
      return res.status(400).json({ msg: 'method not suported 🐣' });
  }
}
