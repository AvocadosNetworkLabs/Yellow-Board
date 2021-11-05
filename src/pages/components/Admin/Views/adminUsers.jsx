import React, { useEffect, useState } from 'react';
import Navbar from 'pages/components/Utils/Navbar';
import Footer from 'pages/components/Utils/Footer';
import axios from 'axios';
import { Button, Card, Modal } from 'react-bootstrap';
import AdminStyles from '../../../../styles/admin.module.scss';
import Cookies from 'js-cookie';
import Router from 'next/router';

const adminUsers = ({ cookies }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [users, setUsers] = useState([]);
  const [uptade, setuptade] = useState(false);

  const [oneUser, setOneUser] = useState({
    birthday: 'Fecha Nacimiento',
    courses: [],
    direccion: 'Direccion',
    lastname: 'Apellido',
    mail: 'e-mail',
    name: 'Nombre',
    password: 'Contrasena',
    phone: 'telefono',
    updatedAt: '',
    url: '/assets/profile/default.png',
    userType: 'n',
    username: 'Matricula',
    _id: 'Not set',
  });
  const [state, setstate] = useState({
    data: {},
    session: false,
    loading: false,
    error: null,
  });

  useEffect(async () => {
    let res = await axios.get('/api/getUsers/');
    console.log('response: ', res);
    let data = res.data;
    console.log('users Data: ', data);
    setUsers(data.data);
  }, []);

  useEffect(async () => {
    let res = await axios.get('/api/getUsers/');
    console.log('response: ', res);
    let data = res.data;
    console.log('users Data: ', data);
    setUsers(data.data);
  }, [uptade]);

  const setValue = (e) => {
    setstate({
      ...state,
      data: { ...state.data, [e.target.name]: e.target.value },
    });
  };

  return (
    <>
      <Navbar cookies={cookies} />
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className={AdminStyles.ModalHeader}>
          <Modal.Title className={AdminStyles.Title}>Crear Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={AdminStyles.forms}>
            <div className={AdminStyles.formstwo}>
              <label>
                <span>Name</span>
                <input
                  className={AdminStyles.addInputs}
                  type="text"
                  name="name"
                  onChange={(e) => setValue(e)}
                />
              </label>
              <label>
                <span>LastName</span>
                <input
                  className={AdminStyles.addInputs}
                  type="text"
                  name="lastname"
                  onChange={(e) => setValue(e)}
                />
              </label>
            </div>
            <div className={AdminStyles.formstwo}>
              <label>
                <span>Matricula</span>
                <input
                  className={AdminStyles.addInputs}
                  type="text"
                  name="username"
                  onChange={(e) => setValue(e)}
                />
              </label>
              <label>
                <span>Password</span>
                <input
                  className={AdminStyles.addInputs}
                  type="password"
                  name="password"
                  onChange={(e) => setValue(e)}
                />
              </label>
            </div>
            <label>
              <span>Type</span>

              <select
                className={AdminStyles.addInputs}
                name="userType"
                onChange={(e) => setValue(e)}
              >
                <option value="u">Alumno</option>
                <option value="m">Maestro</option>
                <option value="a">Administrador</option>
              </select>
            </label>
            <label>
              <span>Email</span>
              <input
                className={AdminStyles.addInputs}
                type="email"
                name="mail"
                onChange={(e) => setValue(e)}
              />
            </label>
            <label>
              <span>Direccion</span>
              <textarea
                className={AdminStyles.addInputs}
                type="text"
                name="direccion"
                onChange={(e) => setValue(e)}
              ></textarea>
            </label>
            <div className={AdminStyles.formstwo}>
              <label>
                <span>Phone</span>
                <input
                  className={AdminStyles.addInputs}
                  type="text"
                  name="phone"
                  onChange={(e) => setValue(e)}
                />
              </label>
              <label>
                <span>Birthday</span>
                <input
                  className={AdminStyles.addInputs}
                  type="date"
                  name="birthday"
                  onChange={(e) => setValue(e)}
                />
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className={AdminStyles.HeaderBtn}
            onClick={handleClose}
          >
            Cerrar
          </Button>
          <Button
            variant="primary"
            className={AdminStyles.HeaderBtn}
            onClick={async () => {
              handleClose();
              console.log(state.data);
              await axios.post('/api/signup', state.data);
              setuptade(!uptade);
            }}
          >
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
      <div className={AdminStyles.usersGobal}>
        <div className={AdminStyles.Header}>
          <p className={AdminStyles.HeaderTitle}>Usuarios</p>
          <div className={AdminStyles.HeaderButtonCont}>
            <Button
              className={AdminStyles.HeaderBtn}
              onClick={handleShow}
              variant="dark"
            >
              crear usuario
            </Button>
            <Button
              className={AdminStyles.HeaderBtn}
              onClick={() => {
                Router.push('/admin');
              }}
              variant="dark"
            >
              regresar
            </Button>
          </div>
        </div>
        <div className={AdminStyles.adminUsers}>
          <div className={AdminStyles.adminUsersLeft}>
            <input
              placeholder="Buscar usuario"
              className={AdminStyles.adminUsersSearch}
            />
            <div className={AdminStyles.adminUsersCont}>
              {users.map((item, key) => (
                <div key={key}>
                  <Card
                    className={AdminStyles.Card}
                    onClick={async (e) => {
                      let res = await axios.get(`/api/getUsers/${item._id}`);
                      let data = res.data;
                      setOneUser(data.data);
                      console.log(oneUser);
                    }}
                  >
                    <Card.Img variant="top" src={item.url} />
                    <Card.Body className={AdminStyles.CardBody}>
                      <Card.Title>{`${item.name} ${item.lastname}`}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className={AdminStyles.adminUsersRight}>
            <Card className={AdminStyles.CardProfile}>
              <Card.Img
                className={AdminStyles.CardProfileImg}
                variant="top"
                src={oneUser.url}
              />
              <Card.Body className={AdminStyles.CardProfileBody}>
                <Card.Text>
                  <div>
                    <div>
                      <div className={AdminStyles.userInfo}>
                        <p>ID: </p>
                        <p>{oneUser._id}</p>
                      </div>
                      <p>Datos personales</p>
                      <hr />
                      <div className={AdminStyles.userInfo}>
                        <p>Nombre: </p>
                        <p>{`${oneUser.name} ${oneUser.lastname}`}</p>
                      </div>
                      <div className={AdminStyles.userInfo}>
                        <p>Matricula: </p>
                        <p>{oneUser.username}</p>
                      </div>
                      <div className={AdminStyles.userInfo}>
                        <p>Fecha de Nacimiento: </p>
                        <p>{oneUser.birthday}</p>
                      </div>
                      <div className={AdminStyles.userInfo}>
                        <p>Rol: </p>
                        {oneUser.userType === 'u' ? (
                          <p>Alumno</p>
                        ) : oneUser.userType === 'm' ? (
                          <p>Maestro</p>
                        ) : oneUser.userType === 'a' ? (
                          <p>Administrador</p>
                        ) : (
                          <p>Rol desconocido 🦐</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <p>Datos de contacto</p>
                      <hr />

                      <div className={AdminStyles.userInfo}>
                        <p>E-Mail: </p>
                        <p>{oneUser.mail}</p>
                      </div>
                      <div className={AdminStyles.userInfoDireccion}>
                        <p>Direccion: </p>
                        <p>{oneUser.direccion}</p>
                      </div>
                      <div className={AdminStyles.userInfo}>
                        <p>Telefono: </p>
                        <p>{oneUser.phone}</p>
                      </div>
                    </div>
                    <hr />
                    <div className={AdminStyles.userInfo}>
                      <p>ultima modificacion: </p>
                      <p>{oneUser.updatedAt}</p>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
              <Card.Footer className={AdminStyles.CardFooter}>
                {oneUser.name != 'Admin' ? (
                  <>
                    <Button
                      variant="danger"
                      onClick={async () => {
                        await axios.delete(`/api/getUsers/${oneUser._id}`);
                        setuptade(!uptade);
                      }}
                    >
                      Borrar
                    </Button>
                    <Button variant="dark">Editar</Button>
                  </>
                ) : null}
              </Card.Footer>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default adminUsers;
