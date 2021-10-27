import React, { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import mainStyles from '../../styles/main.module.scss';
import buttonNew from '../../styles/buttonnew.module.scss';
import Fileupload from './Fileupload';

const ButtonNew = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        className={buttonNew.buttonnew}
        variant="dark"
        onClick={handleShow}
      >
        Agregar tarea
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={buttonNew.tituloActividad}>
            Agregar actividad
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={buttonNew.body}>
          <p>Titulo de la actividad</p>
          <input type="text"></input>
          <p>Materia</p>
          <select name="Materia">
            <option value="volvo">Mat 1</option>
            <option value="saab">Mat 2</option>
            <option value="mercedes">Mat 3</option>
            <option value="audi">Mat 4</option>
          </select>
          <p>Instrucciones | Explicacion</p>
          <textarea name="textarea" rows="10" cols="50"></textarea>
          <p>Fecha límite de entrega</p>
          <input type="date"></input>
          <p>Material</p>
          <Fileupload />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ButtonNew;
