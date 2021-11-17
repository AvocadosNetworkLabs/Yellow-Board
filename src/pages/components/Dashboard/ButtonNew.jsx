import React, { useCallback, useState, useEffect } from 'react';
import { Modal, Button, OverlayTrigger, Tooltip, Alert } from 'react-bootstrap';
import buttonNew from '../../../styles/buttonnew.module.scss';
// import Dropzone from 'react-dropzone';
// import { ReactTinyLink } from 'react-tiny-link';
import axios from 'axios';
import Link from 'next/link';
// import FileUp from './Fileupload/Fileupload';

const ButtonNew = ({
  setonAdd,
  onAdd,
  cookieData,
  courseId,
  FormError,
  setFormError,
}) => {
  const maxFilesize = 10000000;
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setstate({
      extraResources: '',
      extraResource: [],
      course: courseId,
      file: '',
      athor: cookieData.id,
    });
  };

  const handleShow = () => setShow(true);
  const [filelist, setfilelist] = useState([]);
  const [Errormsg, setErrormsg] = useState(false);
  const [theFile, settheFile] = useState('');
  // const [FormError, setFormError] = useState('');
  const [state, setstate] = useState({
    extraResources: '',
    extraResource: [],
    course: courseId,
    file: '',
    athor: cookieData.id,
  });

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      let documentOriginalName = i.name;
      let docChange = documentOriginalName.replace(/\s/g, '_');
      setstate({
        ...state,
        file: `/documents/${docChange}`,
      });
      settheFile(i);
    }
  };

  const uploadToServer = async (e) => {
    setonAdd(!onAdd);
    if (
      state.activityNum &&
      state.athor &&
      state.content &&
      state.course &&
      state.date &&
      state.file &&
      state.postTitle
    ) {
      if (state.activityNum == '' || state.activityNum === isNaN) {
        setFormError('⚠️ Error Numero actividad vacio');
        setTimeout(() => {
          setFormError('');
        }, 4000);
      } else if (state.athor == '') {
        setFormError('⚠️ Error al crear tarea');
        setTimeout(() => {
          setFormError('');
        }, 4000);
      } else if (state.content == '') {
        setFormError('⚠️ Error falta una descripcion');
        setTimeout(() => {
          setFormError('');
        }, 4000);
      } else if (state.course == '') {
        setFormError('⚠️ Error falta elegir un curso');
        setTimeout(() => {
          setFormError('');
        }, 4000);
      } else if (state.data == '') {
        setFormError('⚠️ Error falta agregar fecha de entrega');
        setTimeout(() => {
          setFormError('');
        }, 4000);
      } else if (state.file == '') {
        setFormError('⚠️ Error falta agregar un archivo');
        setTimeout(() => {
          setFormError('');
        }, 4000);
      } else if (state.postTitle == '') {
        setFormError('⚠️ Error falta el titulo de la actividad');
        setTimeout(() => {
          setFormError('');
        }, 4000);
      } else {
        const body = new FormData();
        body.append('file', theFile);

        let resFile = axios.post('/api/file', body);
        let res = axios.post('/api/posts', state);
      }
    }
  };

  const setValues = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" className={buttonNew.tooltip} {...props}>
      <h3>🟢 Tip</h3>
      <hr />
      <p>Escribe solo el numero de la actividad</p>
    </Tooltip>
  );
  const renderTooltiptwo = (props) => (
    <Tooltip id="button-tooltip" className={buttonNew.tooltip} {...props}>
      <h3>🟢 Tip</h3>
      <hr />
      <p>La materia se selecciona automaticamente</p>
    </Tooltip>
  );
  const renderTooltipthree = (props) => (
    <Tooltip id="button-tooltip" className={buttonNew.tooltip} {...props}>
      <h3>🟢 Tip</h3>
      <hr />
      <p>
        Puedes agregar cualquier link como material extra para ayudar a tus
        estudiantes
      </p>
    </Tooltip>
  );
  const renderTooltipfour = (props) => (
    <Tooltip id="button-tooltip" className={buttonNew.tooltip} {...props}>
      <h3>🟢 Tip</h3>
      <hr />
      <p>Solo puede agregar 1 archivo y ES OBLIGATORIO SUBIR UN ARCHIVO</p>
    </Tooltip>
  );

  return (
    <>
      <Button
        variant="dark"
        onClick={() => {
          handleShow();
        }}
      >
        Agregar tarea
      </Button>

      <Modal
        show={show}
        centered
        size="lg"
        onHide={handleClose}
        className={buttonNew.Modal}
      >
        <Modal.Header className={buttonNew.ModalHeader}>
          <Modal.Title className={buttonNew.ModalHeaderTitle}>
            Agregar actividad
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={buttonNew.ModalBody}>
          <form
            action="/api/file"
            method="POST"
            encType="multipart/form-data"
            className={buttonNew.ModalBodyForms}
          >
            <div className={buttonNew.ModalBodyFormstwo}>
              <OverlayTrigger
                placement="left"
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltip}
              >
                <label>
                  <span>Numero de Actividad</span>
                  <div className={buttonNew.ModalBodyFormstwo}>
                    <p className={buttonNew.ModalBodyActividad}>Actividad </p>

                    <input
                      autoComplete="off"
                      onChange={(e) => {
                        setValues(e);
                      }}
                      placeholder="1,2,3..."
                      type="number"
                      min="0"
                      name="activityNum"
                      className={buttonNew.ModalBodyFormsInput}
                    />
                  </div>
                </label>
              </OverlayTrigger>
              <label>
                <span>Titulo</span>

                <input
                  autoComplete="off"
                  onChange={(e) => {
                    setValues(e);
                  }}
                  placeholder="Titulo"
                  type="text"
                  name="postTitle"
                  className={buttonNew.ModalBodyFormsInput}
                />
              </label>
            </div>
            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={renderTooltiptwo}
            >
              <label>
                <span>Materia</span>
                <input
                  autoComplete="off"
                  name="course"
                  placeholder="Materia"
                  id="coursesList"
                  list="data"
                  defaultValue={state.course}
                  disabled
                  className={buttonNew.ModalBodyFormsInput}
                />
              </label>
            </OverlayTrigger>
            <label>
              <span>Instrucciones | Explicacion</span>

              <textarea
                autoComplete="off"
                onChange={(e) => {
                  setValues(e);
                }}
                placeholder="Intrucciones de la actividad"
                name="content"
                className={buttonNew.ModalBodyFormsInput}
              ></textarea>
            </label>
            <OverlayTrigger
              placement="left"
              delay={{ show: 100, hide: 100 }}
              overlay={renderTooltipthree}
            >
              <label>
                <span>Material Extra</span>
                {Errormsg != false ? (
                  <Alert variant="danger" className={buttonNew.AlertTextDgr}>
                    No es un enlace
                  </Alert>
                ) : null}
                <div className={buttonNew.ModalBodyFormsthree}>
                  <input
                    autoComplete="off"
                    id="extrares"
                    onChange={(e) => {
                      setValues(e);
                    }}
                    placeholder="Link de Youtube o paginas web"
                    name="extraResources"
                    className={buttonNew.ModalBodyFormsInput}
                  />

                  <div>
                    <Button
                      onClick={() => {
                        let inputextra = document.getElementById('extrares');
                        let match = '';

                        try {
                          match = new URL(inputextra.value);
                        } catch (_) {
                          setErrormsg(true);
                          setTimeout(() => {
                            setErrormsg(false);
                          }, 5000);
                        }

                        if (
                          match.protocol === 'http:' ||
                          match.protocol === 'https:'
                        ) {
                          setstate({
                            ...state,
                            extraResource: [
                              ...state.extraResource,
                              state.extraResources,
                            ],
                            extraResources: '',
                          });
                        }
                        inputextra.value = '';
                      }}
                      variant="dark"
                    >
                      Agregar
                    </Button>
                  </div>
                </div>

                <div className={buttonNew.Extra}>
                  <Button
                    variant="dark"
                    className={buttonNew.buttonnew}
                    onClick={() => {
                      setstate({
                        ...state,
                        extraResource: [],
                      });
                    }}
                  >
                    Limpiar
                  </Button>
                  {state.extraResource.length > 0 ? (
                    <div className={buttonNew.ExtraLinks}>
                      {state.extraResource.map((link, key) => (
                        <div key={key} className={buttonNew.ExtraLinks}>
                          <Link target="_blank" href={link}>
                            <div className={buttonNew.ExtraLinksCard}>
                              <p
                                className={buttonNew.ExtraLinksCardTitle}
                              >{`Material Extra ${key + 1}`}</p>
                              <p
                                className={buttonNew.ExtraLinksCardDescription}
                              >{`Material de clase con el que te podras apoyar visita: ${link}`}</p>
                            </div>
                          </Link>
                          {/* <ReactTinyLink
                            key={key}
                            cardSize="small"
                            showGraphic={true}
                            maxLine={2}
                            minLine={1}
                            header={`Material Extra ${key + 1}`}
                            url={link}
                            autoPlay={true}
                            proxyUrl={link}
                            requestHeaders={true}
                            description={`Material de clase con el que te podras apoyar visita: ${link}`}
                          ></ReactTinyLink> */}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Alert className={buttonNew.AlertText} variant="info">
                      No hay material extra
                    </Alert>
                  )}
                </div>
              </label>
            </OverlayTrigger>
            <label>
              <span>Fecha limite</span>

              <input
                autoComplete="off"
                onChange={(e) => {
                  setValues(e);
                }}
                name="date"
                type="date"
                placeholder="mm/dd/yyyy"
                className={buttonNew.ModalBodyFormsInput}
              />
            </label>

            <OverlayTrigger
              placement="left"
              delay={{ show: 100, hide: 100 }}
              overlay={renderTooltipfour}
            >
              <label>
                <span>Actividad (PDF, DOCX , PPTX)</span>

                <input
                  type="file"
                  name="myFile"
                  accept=".pptx, .pdf, .docx"
                  onChange={uploadToClient}
                  className={buttonNew.ModalBodyFormsInput}
                />
                {/* <Dropzone
                  accept=".pptx, .pdf, .docx"
                  onDrop={handleOnDrop}
                  maxSize={maxFilesize}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div className={buttonNew.Dropzone}>
                      <div
                        className={buttonNew.DropzoneBorder}
                        {...getRootProps()}
                      >
                        <input name="filetoupload" {...getInputProps()} />
                        <p>
                          Arrastre su archivo que desee subir o click para subir
                          uno
                        </p>
                      </div>
                    </div>
                  )}
                </Dropzone>
                <div className={buttonNew.FilesCont}>
                  {filelist.length > 0 ? (
                    <div className={buttonNew.FilesContFiles}>
                      {filelist.map((file, key) => (
                        <div key={key} className={buttonNew.Files}>
                          <div className={buttonNew.FilesCard}>
                            <p>{file.name}</p>
                            <div className={buttonNew.FilesCardLeft}>
                              <p>
                                {((file.size * 10) / 10000000).toFixed(2)} MB
                              </p>
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
                      ))}
                    </div>
                  ) : (
                    <Alert className={buttonNew.AlertText} variant="info">
                      Sube algun archivo para verlo aqui 🦐
                    </Alert>
                  )}
                </div> */}
                {/* <Fileupload /> */}
              </label>
            </OverlayTrigger>
          </form>
        </Modal.Body>
        <Modal.Footer className={buttonNew.ModalFooter}>
          <Button
            className={buttonNew.HeaderBtn}
            variant="danger"
            onClick={handleClose}
          >
            Cerrar
          </Button>
          <Button
            className={buttonNew.HeaderBtn}
            variant="dark"
            type="submit"
            onClick={(e) => {
              uploadToServer(e);

              handleClose();
              setstate({
                extraResources: '',
                extraResource: [],
                course: courseId,
                file: '',
                athor: cookieData.id,
              });
            }}
          >
            Publicar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ButtonNew;
