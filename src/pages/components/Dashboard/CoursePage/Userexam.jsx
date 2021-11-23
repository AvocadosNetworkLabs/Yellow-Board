import React, { useState, useEffect } from 'react';
import StylesoneCourse from 'styles/oneCourse.module.scss';
import Styles from 'styles/Exam.module.scss';
import { Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { HashLoader } from 'react-spinners';
import router from 'next/router';

const Userexam = ({ state, course, cookies, courseId }) => {
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

  const [questions, setquestions] = useState([]);
  const [Alerts, setAlerts] = useState('');
  const [AlertType, setAlertType] = useState('success');
  const [theresult, setresult] = useState(0);
  useEffect(async () => {
    const GetQuestions = async () => {
      let obj = {
        _id: course._id,
      };

      let res = await axios.post('/api/questions/getquestionsexam', obj);
      let data = res.data;
      // console.log(res);
      setquestions(data.data);
    };

    GetQuestions();
  }, []);

  const [theLoading, settheLoading] = useState();
  const [uanswers, setuanswers] = useState([]);
  const [theview, settheview] = useState('exam');

  const calificar = (correctas, incorrectas) => {
    let final;
    return (final = (correctas * 10) / (correctas + incorrectas));
  };

  if (course._id != 404) {
    console.log(questions);
    if (state.userCourses.some((el) => el.courseId == course._id) === true) {
      return (
        <div className={StylesoneCourse.Main}>
          {Alerts != '' ? (
            <Alert className={Styles.alert} variant={AlertType}>
              {Alerts}
            </Alert>
          ) : null}
          <div className={Styles.MainContainer}>
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

            {theLoading === true ? (
              <div className={Styles.Main}>
                <div className={Styles.MainContainer}>
                  <div className={Styles.Loading}>
                    <HashLoader />
                  </div>
                </div>
              </div>
            ) : (
              <div className={Styles.MainContent}>
                {questions.length > 0 ? (
                  questions.map((question, key) => {
                    return (
                      <div
                        key={key}
                        id={`C${key}`}
                        className={Styles.MainContentActivitys}
                      >
                        <div>
                          <p
                            className={Styles.MainContentQuestionPreRCTitle}
                          >{`¿ ${question.question} ?`}</p>
                        </div>
                        <div className={Styles.MainContentQuestionPre}>
                          {question.answers.map((answers, key2) => {
                            let name;
                            switch (key2) {
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
                              <label
                                key={key2}
                                className={Styles.MainContentPInput}
                                htmlFor="answare"
                              >
                                <input
                                  name={`${question.question}`}
                                  id={`Q${key2}`}
                                  type="radio"
                                  value={name}
                                  onChange={(e) => {
                                    if (
                                      question.correctAns === e.target.value
                                    ) {
                                      uanswers[key] = true;
                                      console.log(typeof uanswers[0]);
                                    } else {
                                      uanswers[key] = false;
                                    }
                                  }}
                                />
                                <span>{` ${name}) ${answers} `}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <Alert variant="danger"> Aun no hay examen </Alert>
                )}

                <div>
                  <div className={Styles.Footer}>
                    <Button
                      className={Styles.FooterBtn}
                      variant="dark"
                      id="end"
                      onClick={() => {
                        settheLoading(true);
                        console.log(uanswers);

                        let correct = 0;
                        let inc = 0;
                        let notempty = uanswers.every((el) => {
                          if (
                            el === '' ||
                            el === undefined ||
                            el === null ||
                            el === 'empty'
                          )
                            return true;
                        });
                        let someempty = uanswers.length < questions.length;
                        console.log(notempty);
                        console.log(someempty);
                        if (notempty === true || someempty === true) {
                          setAlerts('Faltan preguntas por responder');
                          setAlertType('danger');

                          setTimeout(() => {
                            setAlerts('');
                          }, 5000);
                        } else {
                          uanswers.map((items, key) => {
                            if (items === true) {
                              correct += 1;
                              let Card = document.getElementById(`C${key}`);
                              Card.classList.add(`${Styles.Calc}`);
                            } else {
                              inc += 1;
                              let Card = document.getElementById(`C${key}`);
                              Card.classList.add(`${Styles.Cale}`);
                            }
                            setAlerts('Enviando examen');
                            setAlertType('info');

                            let input = document.getElementById(`Q${key}`);

                            let btn = document.getElementById('end');
                            input.disabled = true;
                            btn.disabled = true;
                          });

                          setTimeout(() => {
                            let results = calificar(correct, inc);
                            setAlerts(
                              `Su calificacion es de ${results.toFixed(2)}`
                            );

                            if (results < 6) {
                              setAlertType('danger');
                            } else {
                              setAlertType('success');
                            }

                            setresult(results);
                            settheview('cal');
                          }, 5000);
                        }
                        settheLoading(false);
                      }}
                    >
                      Finalizar
                    </Button>
                    {theview === 'cal' ? (
                      <Button
                        className={Styles.FooterBtn}
                        variant="dark"
                        onClick={() => router.push('/dashboard')}
                      >
                        Regresar
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
  }
  return (
    <>
      {theLoading === true ? (
        <div className={Styles.Main}>
          <div className={Styles.MainContainer}>
            <div className={Styles.Loading}>
              <HashLoader />
            </div>
          </div>
        </div>
      ) : (
        <div className={Styles.Main}>
          <div className={Styles.MainContainer}>
            <div className={Styles.the404}>
              <div className={Styles.MainHeader}></div>
              <center>
                <p className={Styles.the404Text}>No Existe este examen</p>
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
                <Button
                  variant="dark"
                  onClick={() => router.push('/dashboard')}
                >
                  Regresar
                </Button>
              </center>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Userexam;
