import React, { useEffect } from 'react';
import buttonNew from '../../../../styles/buttonnew.module.scss';
import { ProgressBar, Button } from 'react-bootstrap';

const Onefile = () => {
  useEffect(async () => {
    const upload = () => {
      const url = await uploadFile(file);
    };

    upload();
  }, []);
  const uploadFile = (file, onProgress) => {
    const url = '/api/files';

    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();

      xhr.open('POST', url);

      xhr.onload = () => {};

      xhr.onerror = (evt) => rej(evt);
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const porsentaje = (loaded / e.total) * 100;
          onProgress(Math.round(porsentaje));
        }
      };

      const formData = new FormData();
      formData.append('file', file);

      xhr.send(formData);
    });
  };
  return (
    <div key={key} className={buttonNew.Files}>
      <div className={buttonNew.FilesCard}>
        <p>{file.name}</p>
        <div className={buttonNew.FilesCardLeft}>
          <p>{((file.size * 10) / 10000000).toFixed(2)} MB</p>
          <ProgressBar striped variant="success" now={40} />
          <Button
            variant="danger"
            className={buttonNew.buttonnew}
            onClick={() => {
              removeItem(file, key);
            }}
          >
            Borrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onefile;
