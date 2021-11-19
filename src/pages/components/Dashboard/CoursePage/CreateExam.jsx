import React, { useState, useEffect, useLayoutEffect } from 'react';
import StylesoneCourse from 'styles/oneCourse.module.scss';
import Styles from 'styles/Exam.module.scss';
import { Button, Alert } from 'react-bootstrap';
import router from 'next/router';
import { HashLoader } from 'react-spinners';
import axios from 'axios';

const CreateExam = ({ state, course, cookies, courseId }) => {
  const [NoPreguntas, setNoPreguntas] = useState(0);

  const [states, setstates] = useState({
    pregunta: 'aqui se vera tu pregunta',
    resp: ['Respuesta 1', 'Respuesta 2', 'Respuesta 3', 'Respuesta 4'],
  });

  const [cookieData, setcookiedata] = useState({
    userData: {
      id: '',
      username: '',
      name: '',
      lastname: '',
      password: '',
      userType: '',
      mail: '',
      url: '/assets/profile/default.png',
      direccion: '',
      phone: '',
      birthday: '',
    },
  });

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (cookies.userData) {
      setcookiedata(JSON.parse(cookies.userData));
    }
    // GetPosts(courseId);
    setLoading(false);
  }, [courseId]);

  // const GetPosts = async (coursID) => {
  //   const sendData = {
  //     courseId: coursID,
  //   };
  //   const res = await axios.post('/api/posts/AllPosts', sendData);
  //   const data = res.data;
  //   setCourseList(data.data);
  // };

  if (course) {
    if (state.userCourses.some((el) => el.courseId == course._id) === true) {
      return (
        <div className={StylesoneCourse.Main}>
          <div className={StylesoneCourse.MainContainer}>
            <div className={StylesoneCourse.MainHeader}>
              <p className={StylesoneCourse.MainHeaderTitle}>
                Examen de {course.courseName}
              </p>
              <div>
                <Button
                  variant="dark"
                  onClick={() => router.push('/dashboard')}
                >
                  Regresar
                </Button>
              </div>
            </div>

            <hr />
            <div className={Styles.MainContent}>
              <p
                className={Styles.MainContentQ}
              >{`Pregunta ${NoPreguntas} / 25 `}</p>
              <div className={Styles.MainContentQuestion}>
                <div className={Styles.MainContentP}>
                  <span className={Styles.MainContentPTitle}>¿</span>
                  <input
                    className={Styles.MainContentPInput}
                    placeholder="Cuanto es 2 + 2"
                    type="text"
                  />
                  <span className={Styles.MainContentPTitle}>?</span>
                </div>
                <div className={Styles.MainContentQuestionPre}>
                  <p className={Styles.MainContentQTitle}>Respuestas</p>
                  <div className={Styles.MainContentQuestionPreRC}>
                    <p className={Styles.MainContentQuestionPreRCTitle}>
                      Respuesta correcta:
                    </p>
                    <select className={Styles.MainContentQuestionPreRCSel}>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </div>
                  <div>
                    <div className={Styles.Respuesta}>
                      <p className={Styles.RespuestaTitle}>A)</p>
                      <input
                        className={Styles.MainContentPInput}
                        type="text"
                        onchange={() => {
                          var index = states.resp.indexOf('Respuesta 1');

                          if (index !== -1) {
                            items[index] = 'se esta cambiando';
                          }
                        }}
                      />
                    </div>
                    <div className={Styles.Respuesta}>
                      <p className={Styles.RespuestaTitle}>B)</p>
                      <input className={Styles.MainContentPInput} type="text" />
                    </div>
                    <div className={Styles.Respuesta}>
                      <p className={Styles.RespuestaTitle}>C)</p>
                      <input className={Styles.MainContentPInput} type="text" />
                    </div>
                    <div className={Styles.Respuesta}>
                      <p className={Styles.RespuestaTitle}>D)</p>
                      <input className={Styles.MainContentPInput} type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={Styles.MainContentActivitys}>
                <div>
                  <p>{`¿ ${states.pregunta} ?`}</p>
                </div>
                <div>
                  {states.resp.map((resp, key) => {
                    let name;

                    switch (key) {
                      case 0:
                        name = 'A';
                        break;
                      case 1:
                        name = 'B';
                        break;
                      case 2:
                        name = 'C';
                        break;
                      case 3:
                        name = 'D';
                        break;
                    }
                    return (
                      <label htmlFor={name} key={key}>
                        <input name="cal" type="radio" />
                        <span>{`${name} ${states.resp[key]}`}</span>
                      </label>
                    );
                  })}
                  {/* <label htmlFor="B">
                    <span>{state.resp[1]}</span>
                    <input name="B" type="radio" />
                  </label>
                  <label htmlFor="C">
                    <span>{state.resp[2]}</span>
                    <input name="C" type="radio" />
                  </label>
                  <label htmlFor="D">
                    <span>{state.resp[3]}</span>
                    <input name="D" type="radio" />
                  </label> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className={Styles.Main}>
      <div className={Styles.MainContainer}>
        <div className={Styles.the404}>
          <div className={Styles.MainHeader}></div>
          <center>
            <p className={Styles.the404Text}>No Existe este curso</p>
            <p className={Styles.the404TextSmall}>
              Si crees que es un error contacta a tu administrador
            </p>
            <br />
            <img
              className={Styles.the404Img}
              src="https://cdn-images-1.medium.com/max/800/1*qdFdhbR00beEaIKDI_WDCw.gif"
              alt="404"
            />
            <br />
            <br />
            <Button variant="dark" onClick={() => router.push('/dashboard')}>
              Regresar
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default CreateExam;
