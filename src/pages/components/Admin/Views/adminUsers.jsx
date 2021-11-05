import React, { useEffect, useState } from 'react';
import Navbar from 'pages/components/Utils/Navbar';
import Footer from 'pages/components/Utils/Footer';
import mainStyles from '../../../../styles/main.module.scss';
import axios from 'axios';
import { Button, Card, Modal, Alert } from 'react-bootstrap';
import AdminStyles from '../../../../styles/admin.module.scss';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { PacmanLoader, HashLoader } from 'react-spinners';

const adminUsers = ({ cookies }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [users, setUsers] = useState([]);
  const [RespUsers, setRespUsers] = useState([]);
  const [uptade, setuptade] = useState(false);
  const [Succes, setSucces] = useState(3);
  const [MSG, setMSG] = useState('');
  const session = Cookies.get('session');
  var datas;

  const removealert = () => {
    setTimeout(() => {
      setSucces(3);
    }, 4000);
  };

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

  const [defaultval, setDefault] = useState({
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

  const onSearch = (e) => {
    const data = RespUsers;
    const query = e.target.value;
    console.log(query);
    const usersFiltere = data.filter((names) => {
      return (
        names.name.toLowerCase().includes(query.toLowerCase()) ||
        names.lastname.toLowerCase().includes(query.toLowerCase()) ||
        names.username.toLowerCase().includes(query.toLowerCase())
      );
    });

    if (query === '') {
      setUsers(RespUsers);
      console.log(users);
    } else {
      setUsers(usersFiltere);
      console.log(users);
    }
  };

  const [AlertEdit, setAlertEdit] = useState(false);
  const showAlertEdit = () => setAlertEdit(true);
  const hideAlertEdit = () => setAlertEdit(false);

  const [AlertState, setAlertState] = useState(false);
  const showAlert = () => setAlertState(true);
  const hideAlert = () => setAlertState(false);

  useEffect(async () => {
    setstate({ ...state, loading: true });
    let res = await axios.get('/api/getUsers/');
    let data = res.data;
    setUsers(data.data);
    setRespUsers(data.data);
    setTimeout(() => setstate({ ...state, loading: false }), 1000);
  }, []);

  useEffect(async () => {
    setstate({ ...state, loading: true });
    let res = await axios.get('/api/getUsers/');
    let data = res.data;
    setUsers(data.data);
    setRespUsers(data.data);
    setTimeout(() => setstate({ ...state, loading: false }), 1000);
  }, [uptade]);

  const setValue = (e) => {
    setstate({
      ...state,
      data: { ...state.data, [e.target.name]: e.target.value },
    });
  };

  const setValueEdit = (e) => {
    setOneUser({
      ...oneUser,
      [e.target.name]: e.target.value,
    });
  };

  if (cookies.userData) {
    if (session === 'true') datas = JSON.parse(cookies.userData);
  } else {
    if (time < 0) {
      setTime(0);
      setTimeout(() => {
        setShow(true);
      }, 500);
    } else {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    setTimeout(() => {
      Router.push('/');
    }, 5000);
    return (
      <>
        <Navbar Mquery={Mquery} cookies={cookies} />
        <div className={mainStyles.perload}>
          <div className={mainStyles.preloadCard}>
            <p className={mainStyles.preloadTitle}>
              You need to login redirecting {time}
            </p>
            <HashLoader color="#ffc400" loading={loading} size={100} />
            {Show ? (
              <p className={mainStyles.preloadTitle}>
                ⚠️ Your internet is slow please wait
              </p>
            ) : null}
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar cookies={cookies} />
      {Succes === 1 ? (
        <Alert className={AdminStyles.alert} variant="primary">
          {MSG}
        </Alert>
      ) : Succes === 2 ? (
        <Alert className={AdminStyles.alert} variant="danger">
          {MSG}
        </Alert>
      ) : null}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={AlertState}
        onHide={hideAlert}
      >
        <Modal.Header className={AdminStyles.ModalHeader}>
          <Modal.Title className={AdminStyles.Title}>
            Borrar Usuario
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          <p className={AdminStyles.Text}>
            Si borra este usuario se elimanara por completo del sistema, seguro
            que desea continuar?
          </p>
        </Modal.Body>
        <Modal.Footer className={AdminStyles.ModalFooter}>
          <Button
            variant="danger"
            className={AdminStyles.HeaderBtn}
            onClick={async () => {
              hideAlert();
              let res = await axios.delete(`/api/getUsers/${oneUser._id}`);
              let data = res.data;
              setSucces(data.Success);
              setMSG(JSON.stringify(data.msg));
              setuptade(!uptade);
              setOneUser(defaultval);
              removealert();
            }}
          >
            Borrar
          </Button>
          <Button
            variant="dark"
            className={AdminStyles.HeaderBtn}
            onClick={async () => {
              hideAlert();
            }}
          >
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
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
        <Modal.Footer className={AdminStyles.ModalFooter}>
          <Button
            variant="secondary"
            className={AdminStyles.HeaderBtn}
            onClick={handleClose}
          >
            Cancelar
          </Button>

          <Button
            variant="primary"
            className={AdminStyles.HeaderBtn}
            onClick={async () => {
              handleClose();
              let res = await axios.post('/api/signup', state.data);
              let data = res.data;
              setSucces(data.Success);
              setMSG(JSON.stringify(data.msg));
              setuptade(!uptade);
              removealert();
            }}
          >
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={AlertEdit}
        onHide={hideAlertEdit}
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
                  onChange={(e) => setValueEdit(e)}
                  value={oneUser.name}
                />
              </label>
              <label>
                <span>LastName</span>
                <input
                  className={AdminStyles.addInputs}
                  type="text"
                  name="lastname"
                  onChange={(e) => setValueEdit(e)}
                  value={oneUser.lastname}
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
                  onChange={(e) => setValueEdit(e)}
                  value={oneUser.username}
                />
              </label>
              <label>
                <span>Password</span>
                <input
                  className={AdminStyles.addInputs}
                  type="password"
                  name="password"
                  onChange={(e) => setValueEdit(e)}
                  value={oneUser.password}
                />
              </label>
            </div>
            <label>
              <span>Type</span>

              <select
                className={AdminStyles.addInputs}
                name="userType"
                onChange={(e) => setValueEdit(e)}
                value={oneUser.userType}
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
                onChange={(e) => setValueEdit(e)}
                value={oneUser.mail}
              />
            </label>
            <label>
              <span>Direccion</span>
              <textarea
                className={AdminStyles.addInputs}
                type="text"
                name="direccion"
                onChange={(e) => setValueEdit(e)}
                value={oneUser.direccion}
              ></textarea>
            </label>
            <div className={AdminStyles.formstwo}>
              <label>
                <span>Phone</span>
                <input
                  className={AdminStyles.addInputs}
                  type="text"
                  name="phone"
                  onChange={(e) => setValueEdit(e)}
                  value={oneUser.phone}
                />
              </label>
              <label>
                <span>Birthday</span>
                <input
                  className={AdminStyles.addInputs}
                  type="date"
                  name="birthday"
                  onChange={(e) => setValueEdit(e)}
                  value={oneUser.birthday}
                />
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className={AdminStyles.ModalFooter}>
          <Button
            variant="secondary"
            className={AdminStyles.HeaderBtn}
            onClick={hideAlertEdit}
          >
            Cerrar
          </Button>
          <Button
            variant="primary"
            className={AdminStyles.HeaderBtn}
            onClick={async () => {
              hideAlertEdit();
              console.log(oneUser);
              let res = await axios.put(
                `/api/getUsers/${oneUser._id}`,
                oneUser
              );
              let data = res.data;
              setSucces(data.Success);
              setMSG(JSON.stringify(data.msg));
              setuptade(!uptade);
              setOneUser(defaultval);
              removealert();
            }}
          >
            Confirmar
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
              Crear Usuario
            </Button>
            <Button
              className={AdminStyles.HeaderBtn}
              onClick={() => {
                Router.push('/admin');
              }}
              variant="dark"
            >
              Regresar
            </Button>
          </div>
        </div>
        <div className={AdminStyles.adminUsers}>
          <div className={AdminStyles.adminUsersContSearch}>
            <input
              placeholder="Buscar usuario | Nombre Apellido | Matricula"
              onChange={(e) => onSearch(e)}
              className={AdminStyles.adminUsersSearch}
            />
            <div className={AdminStyles.adminUsersLeft}>
              <div className={AdminStyles.adminUsersCont}>
                {state.loading === true ? (
                  <div className={AdminStyles.loadingUsers}>
                    <HashLoader size={50} />
                  </div>
                ) : users.length === 0 ? (
                  <div className={AdminStyles.coursesAlert}>
                    <Alert
                      className={AdminStyles.coursesAlertText}
                      variant="info"
                    >
                      No hay usuarios registrados 🦐
                    </Alert>
                  </div>
                ) : (
                  users.map((item, key) => (
                    <div key={key}>
                      <Card
                        className={AdminStyles.Card}
                        onClick={async (e) => {
                          let res = await axios.get(
                            `/api/getUsers/${item._id}`
                          );
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
                  ))
                )}
              </div>
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
                {oneUser.name === 'Admin' ? (
                  <>
                    <Button disabled variant="danger">
                      Borrar
                    </Button>
                    <Button disabled variant="dark">
                      Editar
                    </Button>
                  </>
                ) : oneUser._id === 'Not set' ? (
                  <>
                    {oneUser._id != datas.id ? (
                      <Button disabled variant="danger">
                        Borrar
                      </Button>
                    ) : null}
                    <Button disabled variant="dark">
                      Editar
                    </Button>
                  </>
                ) : (
                  <>
                    {oneUser._id != datas.id ? (
                      <Button
                        variant="danger"
                        onClick={() => {
                          showAlert();
                        }}
                      >
                        Borrar
                      </Button>
                    ) : null}
                    <Button
                      variant="dark"
                      onClick={() => {
                        showAlertEdit();
                      }}
                    >
                      Editar
                    </Button>
                  </>
                )}
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
