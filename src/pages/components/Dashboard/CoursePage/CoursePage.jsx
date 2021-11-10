import React, { useState, useEffect, useLayoutEffect } from 'react';
import ActivityCard from '../ActivityCard';
import Styles from 'styles/oneCourse.module.scss';
import { Button } from 'react-bootstrap';
import router from 'next/router';

const CoursePage = ({ state, course, cookies }) => {
  useLayoutEffect(() => {}, []);

  if (course) {
    if (state.userCourses.some((el) => el.courseId == course._id) === true) {
      return (
        <div className={Styles.Main}>
          <div className={Styles.MainContainer}>
            <div className={Styles.MainHeader}>
              <p className={Styles.MainHeaderTitle}>{course.courseName}</p>
              <Button variant="dark" onClick={() => router.push('/dashboard')}>
                Regresar
              </Button>
            </div>
            <hr />
            <div className={Styles.MainContent}>
              {cookies.id}
              <p className={Styles.MainContentTitle}>Actividades</p>
              <div className={Styles.MainContentActivitys}>
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
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
