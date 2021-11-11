import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export default async (req, res) => {
  const { method, body } = req;
  console.log(req.method, req.url);
  console.log(req.files);
  switch (method) {
    case 'POST':
      break;
    default:
      return res.status(200).json({ msg: 'method not suported 🐣' });
  }
};
