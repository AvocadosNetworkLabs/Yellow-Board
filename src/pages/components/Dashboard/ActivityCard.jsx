import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ActivityCardStyles from '../../../styles/activitycard.module.scss';
import buttonNew from '../../../styles/buttonnew.module.scss';
import axios from 'axios';
import Link from 'next/link';
import { Modal, Alert } from 'react-bootstrap';

const ActivityCard = ({ item, setonAdd, onAdd, cookieData, courseId }) => {
  let date = new Date(item.createdAt);
  let PostDate = `${date.getMonth()} / ${date.getDate()} / ${date.getFullYear()}`;
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const [Errormsg, setErrormsg] = useState(false);

  const [state, setstate] = useState({
    _id: item._id,
    activityNum: item.activityNum,
    postTitle: item.postTitle,
    content: item.content,
    extraResources: '',
    extraResource: item.extraResource,
    course: item.course,
    file: item.file,
    athor: cookieData.id,
    date: item.date,
  });
  const setValues = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const uploadToServer = async (e) => {
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
        setonAdd(!onAdd);

        let res = await axios.put(`/api/file/${state._id}`, state);
      }
    }
  };

  const handleShow = () => setShow(true);
  return (
    <>
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
                    value={state.activityNum}
                    name="activityNum"
                    className={buttonNew.ModalBodyFormsInput}
                  />
                </div>
              </label>
              <label>
                <span>Titulo</span>

                <input
                  autoComplete="off"
                  onChange={(e) => {
                    setValues(e);
                  }}
                  placeholder="Titulo"
                  value={state.postTitle}
                  type="text"
                  name="postTitle"
                  className={buttonNew.ModalBodyFormsInput}
                />
              </label>
            </div>
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
            <label>
              <span>Instrucciones | Explicacion</span>

              <textarea
                autoComplete="off"
                onChange={(e) => {
                  setValues(e);
                }}
                value={state.content}
                placeholder="Intrucciones de la actividad"
                name="content"
                className={buttonNew.ModalBodyFormsInput}
              ></textarea>
            </label>
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
                    className={buttonNew.HeaderBtn}
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
                    Confirmar
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
            <label>
              <span>Fecha limite</span>

              <input
                autoComplete="off"
                onChange={(e) => {
                  setValues(e);
                }}
                name="date"
                type="date"
                value={state.date}
                placeholder="mm/dd/yyyy"
                className={buttonNew.ModalBodyFormsInput}
              />
            </label>
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
            }}
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
      <div className={ActivityCardStyles.activityCard}>
        <div className={ActivityCardStyles.header1}>
          <span>{`Actividad ${item.activityNum}`}</span>
          <span>{item.CoursData.courseName}</span>
        </div>
        <div className={ActivityCardStyles.metadata}>
          <p>
            <span>Fecha de publicación:</span>
            {PostDate}
          </p>
          <p>
            <span>Subido por:</span>{' '}
            {`${item.userDatas.name} ${item.userDatas.lastname}`}
          </p>
        </div>
        <h3>{item.postTitle}</h3>
        <p className={ActivityCardStyles.contend}>{item.content}</p>
        <p className={ActivityCardStyles.ext}>Material Extra </p>
        {item.extraResource.length > 0 ? (
          item.extraResource.map((link, key) => (
            <div key={key} className={ActivityCardStyles.ExtraLinks}>
              <Link target="_blank" href={link}>
                <div className={ActivityCardStyles.ExtraLinksCard}>
                  <p
                    className={ActivityCardStyles.ExtraLinksCardTitle}
                  >{`Material Extra ${key + 1}`}</p>
                  <p
                    className={ActivityCardStyles.ExtraLinksCardDescription}
                  >{`Material de clase con el que te podras apoyar visita: ${link}`}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className={ActivityCardStyles.ext}>No hay materia extra</p>
        )}
        <div className={ActivityCardStyles.footerAct}>
          <a className={ActivityCardStyles.showfile} href={item.file} download>
            Click para descargar documento
          </a>
          {cookieData.userType === 'm' ? (
            <div className={ActivityCardStyles.ButtonsTeacher}>
              <Button
                onClick={() => {
                  handleShow(true);
                }}
                variant="dark"
              >
                Editar
              </Button>
              <Button
                onClick={async () => {
                  let resfile = await axios.delete(`/api/file/${item._id}`, {
                    data: {
                      filePath: item.file,
                    },
                  });
                  let data = resfile.data;
                  setonAdd(!onAdd);
                }}
                variant="danger"
              >
                Delete
              </Button>
            </div>
          ) : (
            <Button className={ActivityCardStyles.btn} variant="dark">
              Subir actividad
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
