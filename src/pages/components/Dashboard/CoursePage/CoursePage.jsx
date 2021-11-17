import React, { useState, useEffect, useLayoutEffect } from 'react';
import ActivityCard from '../ActivityCard';
import Styles from 'styles/oneCourse.module.scss';
import mainStyles from '../../../../styles/main.module.scss';
import { Button, Alert } from 'react-bootstrap';
import router from 'next/router';
import ButtonNew from '../ButtonNew';
import { HashLoader } from 'react-spinners';
import axios from 'axios';

const CoursePage = ({ state, course, cookies, courseId }) => {
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

  const [courseList, setCourseList] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (cookies.userData) {
      setcookiedata(JSON.parse(cookies.userData));
    }
    GetPosts(courseId);
    setLoading(false);
  }, [courseId]);

  const GetPosts = async (coursID) => {
    const sendData = {
      courseId: coursID,
    };
    const res = await axios.post('/api/posts/AllPosts', sendData);
    const data = res.data;
    setCourseList(data.data);
  };

  if (course) {
    if (state.userCourses.some((el) => el.courseId == course._id) === true) {
      return (
        <div className={Styles.Main}>
          <div className={Styles.MainContainer}>
            <div className={Styles.MainHeader}>
              <p className={Styles.MainHeaderTitle}>{course.courseName}</p>
              <div>
                <Button
                  variant="dark"
                  onClick={() => router.push('/dashboard')}
                >
                  Regresar
                </Button>
                {cookieData.userType === 'm' ? (
                  <ButtonNew
                    GetPosts={GetPosts}
                    setLoading={setLoading}
                    setCourseList={setCourseList}
                    cookieData={cookieData}
                    courseId={course._id}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>

            <hr />
            <div className={Styles.MainContent}>
              <p className={Styles.MainContentTitle}>Actividades</p>
              <div className={Styles.MainContentActivitys}>
                {Loading === true ? (
                  <div className={mainStyles.preloadCard}>
                    <p className={mainStyles.preloadTitle2}>Loading...</p>
                    <HashLoader />
                  </div>
                ) : courseList.length > 0 ? (
                  courseList.map((item, key) => (
                    <ActivityCard
                      cookieData={cookieData}
                      setCourseList={setCourseList}
                      setLoading={setLoading}
                      item={item}
                      key={key}
                    />
                  ))
                ) : (
                  <div className={mainStyles.nothingCount}>
                    <p className={mainStyles.nothing}>
                      Upsss!... No tienes actividades
                    </p>
                    <center>
                      <img
                        className={mainStyles.nothingImg}
                        src="https://media.tenor.com/images/d8ebb04280fd50216a4f846d330c5d3a/tenor.gif"
                        alt="error loading"
                      />
                    </center>
                  </div>
                )}
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

export default CoursePage;
