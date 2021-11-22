import React, { useState, useEffect } from 'react';
import StylesoneCourse from 'styles/oneCourse.module.scss';
import Styles from 'styles/Exam.module.scss';
import { Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import router from 'next/router';
import Preguntas from './Preguntas';

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

  const [Loading, setLoading] = useState(false);
  const [uanswers, setuanswers] = useState([]);
  const [canswers, setcanswers] = useState([]);

  if (course._id != 404) {
    console.log(questions);
    if (state.userCourses.some((el) => el.courseId == course._id) === true) {
      return (
        <div className={StylesoneCourse.Main}>
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
            <div className={Styles.MainContent}>
              {questions.length > 0 ? (
                questions.map((question, key) => (
                  <div key={key}>
                    <Preguntas
                      question={question}
                      uanswers={uanswers}
                      setuanswers={setuanswers}
                      setcanswers={setcanswers}
                      canswers={canswers}
                      key={key}
                    />
                  </div>
                ))
              ) : (
                <Alert variant="danger"> Aun no hay examen </Alert>
              )}
            </div>
            <div>
              <Button
                onClick={() => {
                  let uresp = Object.values(uanswers);
                  console.log(uresp);
                  console.log(canswers);
                  // let cat = [];

                  // var cat;

                  let yFilter = canswers.map((itemY, key) => {
                    return itemY;
                  });
                  console.log('y', yFilter);

                  let count = 0;
                  let cat = uresp.filter((itemX, key) => {
                    yFilter.forEach((seg, key) => {
                      if (seg === itemX) {
                        count += 1;
                      }
                      console.log('primer: ', seg);
                      console.log('segundo', itemX);
                    });
                  });

                  console.log(count);
                  console.log(cat);

                  // canswers.forEach((el) =>
                  //   uresp.forEach((el2) => {
                  //     if (el === el2) {
                  //       console.log('1', el);
                  //       console.log('2', el2);
                  //       cat.push(el);
                  //       call = call + 1;
                  //     }
                  //   })
                  // );
                }}
              >
                Finalizar
              </Button>
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <>
      {Loading === true ? (
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
