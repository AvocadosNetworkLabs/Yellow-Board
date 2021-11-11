import react from 'react';
import Dropzone from 'react-dropzone';
import buttonNew from '../../../../styles/buttonnew.module.scss';
import { Alert } from 'react-bootstrap';
import { FileError, FileRejection, useDropzone } from 'react-dropzone';
import axios from 'axios';

const Fileupload = ({ filelist }) => {
  const { getRootProps, getInputProps } = useDropzone();

  return (
    <>
      <div className={buttonNew.Dropzone}>
        <div className={buttonNew.DropzoneBorder} {...getRootProps()}>
          <input
            name="filetoupload"
            onChange={uploadingfiles()}
            {...getInputProps()}
          />
          <p>Arrastre su archivo que desee subir o click para subir uno</p>
        </div>
      </div>
      <div className={buttonNew.FilesCont}>
        {filelist.length > 0 ? (
          <div className={buttonNew.FilesContFiles}>
            {filelist.map((file, key) => (
              <Onefile file={file} key={key} />
            ))}
          </div>
        ) : (
          <Alert className={buttonNew.AlertText} variant="info">
            Sube algun archivo para verlo aqui 🦐
          </Alert>
        )}
      </div>
    </>
  );
};

export default Fileupload;
