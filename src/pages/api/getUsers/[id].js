import { dbConnect } from '../../../utils/db';
import Users from '../../../models/users';

dbConnect();

export default async (req, res) => {
  const {
    method,
    query: { id },
    body,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const oneUsers = await Users.findById(id);
        if (!oneUsers)
          return res
            .status(200)
            .json({ Success: 0, data: null, msg: 'Users does not exists' });
        return res
          .status(200)
          .json({ Success: 1, data: oneUsers, msg: `User found` });
      } catch (err) {
        return res.status(200).json({ msg: err.message });
      }
    case 'PUT':
      try {
        const updatedUsers = await Users.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });
        if (!updatedUsers) return res.status(200).json();
        return res.status(200).json({
          Success: 1,
          data: updatedUsers,
          msg: `Usuario actualizado`,
        });
      } catch (err) {
        return res
          .status(200)
          .json({ Success: 0, data: null, msg: err.message });
      }
    case 'DELETE':
      try {
        const deletedUsers = await Users.findByIdAndDelete(id);
        if (!deletedUsers)
          return res
            .status(200)
            .json({ Success: 0, data: null, msg: 'Users does not exists' });
        return res
          .status(200)
          .json({ Success: 1, data: null, msg: 'Usuario borrado' });
      } catch (err) {
        return res
          .status(200)
          .json({ Success: 0, data: null, msg: err.message });
      }
    default:
      return res
        .status(200)
        .json({ Success: 0, data: null, msg: 'method not suported 🐣' });
  }
};
