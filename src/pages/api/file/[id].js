import { dbConnect } from '../../../utils/db';
import Posts from '../../../models/posts';
var fs = require('fs');

dbConnect();

export default async (req, res) => {
  const {
    method,
    query: { id },
    body,
  } = req;

  switch (method) {
    case 'DELETE':
      try {
        console.log(body);
        const deletedPosts = await Posts.findByIdAndDelete(id);
        fs.unlink(`./public${body.filePath}`, function (err) {
          if (err) console.log(err);
          console.log('File deleted!');
        });
        if (!deletedPosts)
          return res
            .status(200)
            .json({ Success: 0, data: null, msg: 'Users does not exists' });
        return res
          .status(200)
          .json({ Success: 1, data: null, msg: 'Usuario borrado' });
      } catch (err) {
        return res.status(200).json({
          Success: 0,
          data: null,
          msg: '⚠️ Error al comunicarse',
        });
      }
    default:
      return res
        .status(200)
        .json({ Success: 0, data: null, msg: 'method not suported 🐣' });
  }
};
