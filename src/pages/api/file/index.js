import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParse: false,
  },
};

export default async (res, req) => {
  const { method, body } = req;

  switch (method) {
    case 'POST':
      const form = new formidable.IncomingForm();
      form.parse(req, async function (err, fields, files) {
        console.log(files.file);
        await saveFile(files.file);
      });
      return res.status(201).send('');
    default:
      return res.status(200).json({ msg: 'method not suported 🐣' });
  }
};

const saveFile = async (file) => {
  const data = fs.readFileSync(file.path);
  fs.writeFileSync(`./public/documents/${file.name}`, data);
  await fs.unlinkSync(file.path);
  return;
};
