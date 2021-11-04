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
            .status(404)
            .json({ Success: false, data: null, msg: 'Users does not exists' });
        return res
          .status(200)
          .json({ Success: true, data: oneUsers, msg: `User found` });
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case 'PUT':
      try {
        const updatedUsers = await Users.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });
        if (!updatedUsers)
          return res.status(404).json({ msg: 'Users does not exists' });
        return res
          .status(200)
          .json({ Success: true, data: updatedUsers, msg: `User found` });
      } catch (err) {
        return res
          .status(400)
          .json({ Success: true, data: null, msg: err.message });
      }
    case 'DELETE':
      try {
        const deletedUsers = await Users.findByIdAndDelete(id);
        if (!deletedUsers)
          return res.status(404).json({ msg: 'Users does not exists' });
        return res.status(204).json();
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    default:
      return res.status(400).json({ msg: 'This method is not supported' });
  }
};
