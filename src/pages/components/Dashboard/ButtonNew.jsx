import React, { useCallback, useState } from 'react';
import { Modal, Button, OverlayTrigger, Tooltip, Alert } from 'react-bootstrap';
import buttonNew from '../../../styles/buttonnew.module.scss';
import Dropzone from 'react-dropzone';
import { ReactTinyLink } from 'react-tiny-link';
import axios from 'axios';
import FileUp from './Fileupload/Fileupload';

const ButtonNew = ({ cookieData }) => {
  const maxFilesize = 10000000;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [filelist, setfilelist] = useState([]);
  const [courses, setcourses] = useState([]);
  const [inputVal, setinputVal] = useState(null);
  const [Errormsg, setErrormsg] = useState(false);
  const [ErrormsgId, setErrormsgId] = useState(false);

  const [state, setstate] = useState({
    extraResources: '',
    extraResource: [],
    files: [],
  });

  const uploadToServer = async () => {
    setstate({ ...state, files: filelist });
    console.log('full state', state);
    let body = new FormData();

    body.append('files', state.files);

    const response = await fetch('/api/file', {
      method: 'POST',
      body,
    });
    // await axios({
    //   url: '/api/file',
    //   method: 'POST',
    //   data: formdata,
    // });
  };

  const setValues = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
    console.log(state);
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
      <p>Boton para editar el curso</p>
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
      <p>Solo puede agregar mas de 1 archivo la primera vez</p>
    </Tooltip>
  );

  const handleOnDrop = (file, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      const rechasado = rejectedFiles[0];
      const filesize = rechasado.file.size;
      const fileType = rechasado.file.type;
      if (filesize > maxFilesize) {
        alert('Archivo muy largo el maximo permitido son 10 MB');
      } else if (
        fileType != '.pdf' ||
        fileType != '.pptx' ||
        fileType != '.docx'
      ) {
        alert('Archivo no soportado debe ser PPTX, PDF o Docx');
      }
    }
    if (filelist.length > 0) {
      setfilelist([...filelist, file[0]]);
      console.log('dentro del if', filelist);
    } else {
      console.log(filelist);
      setfilelist(file);
    }
  };

  const courseCall = async (id) => {
    let res = await axios.post('/api/courses/userToCourseList/byid', {
      id: id,
    });
    let data = res.data;
    setcourses(data.data);
  };

  const removeItem = (file, key) => {
    if (filelist.length > 1) {
      const newArray = filelist.filter((elem) => elem.name !== file.name);

      setfilelist(newArray);
    } else {
      const newArray = [];
      setfilelist(newArray);
    }
  };

  return (
    <>
      <Button
        className={buttonNew.buttonnew}
        variant="dark"
        onClick={() => {
          // console.log(cookieData.id);
          const { id } = cookieData;
          courseCall(id);
          console.log('cursos', courses);
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
                      autocomplete="off"
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
                  autocomplete="off"
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
                {ErrormsgId === true ? (
                  <Alert variant="danger" className={buttonNew.AlertTextDgr}>
                    Error al registrar curso
                  </Alert>
                ) : null}
                <div className={buttonNew.ModalBodyFormsthree}>
                  <input
                    autocomplete="off"
                    name="course"
                    placeholder="Materia"
                    id="coursesList"
                    list="data"
                    onChange={(e) => {
                      setValues(e);
                      let input = document.getElementById('coursesList');
                      if (input.value.length === 24) {
                        input.disabled = true;
                      } else if (
                        input.value.length > 24 ||
                        input.value.length < 24
                      ) {
                        setErrormsgId(true);
                        setTimeout(() => {
                          setErrormsgId(false);
                        }, 5000);
                      }
                    }}
                    className={buttonNew.ModalBodyFormsInput}
                  />
                  <Button
                    onClick={() => {
                      let input = document.getElementById('coursesList');
                      setinputVal(!inputVal);
                      input.disabled = inputVal;
                    }}
                    variant="dark"
                  >
                    Corregir
                  </Button>
                </div>
                <datalist id="data">
                  {courses.map((item, key) => (
                    <option
                      key={key}
                      value={item._id}
                    >{`${item.listCourse.courseName}`}</option>
                  ))}
                </datalist>
              </label>
            </OverlayTrigger>
            <label>
              <span>Instrucciones | Explicacion</span>

              <textarea
                autocomplete="off"
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
                    autocomplete="off"
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
                      agregar
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
                        <div className={buttonNew.ExtraLinksCard}>
                          <ReactTinyLink
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
                          ></ReactTinyLink>
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
                autocomplete="off"
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

                <FileUp filelist={filelist} />
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
                </Dropzone> */}
                {/* <Fileupload /> */}
              </label>
            </OverlayTrigger>
          </form>
        </Modal.Body>
        <Modal.Footer className={buttonNew.ModalFooter}>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            variant="success"
            onClick={() => {
              uploadToServer();
              handleClose();
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
