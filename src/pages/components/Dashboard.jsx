import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import mainStyles from '../../styles/main.module.scss';
import Router from 'next/router';
import { PacmanLoader, HashLoader } from 'react-spinners';

import Menu from './Menu';
import Footer from './Footer';
import ButtonNew from './ButtonNew';
import ActivityCard from './ActivityCard';
import Profile from './Profile';
import Cursos from './Cursos';
import Admin from './Admin';
import axios from 'axios';

const Dashboard = ({ Mquery, cookies }) => {
  const [time, setTime] = useState(5);
  const [view, setViews] = useState('tareas');

  const [state, setstate] = useState({
    session: false,
    loading: false,
    error: null,
    userCourses: [],
    userTasks: [],
  });

  var data;

  const [loading, setloading] = useState(false);
  const [Show, setShow] = useState(false);

  const setView = (view) => {
    setViews(view);
  };

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5500);
  }, []);

  useEffect(() => {
    if (view === 'cursos') {
      let res = axios.post('/api/courses', data);
      let results = res.data;
      setstate({
        ...state,
        userCourses: results,
      });
      console.log('cursos', state.userCourses);
    } else if (view === 'tareas') {
    } else if (view === 'perfil') {
    }
  }, [view]);

  if (cookies.userData) {
    data = JSON.parse(cookies.userData);
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

  if (loading === true) {
    return (
      <>
        <Navbar Mquery={Mquery} cookies={cookies} />
        <div className={mainStyles.perload}>
          <div className={mainStyles.preloadCard}>
            <p className={mainStyles.preloadTitle}>Welcome back {data.name}!</p>
            <HashLoader color="#ffc400" loading={loading} size={100} />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      {view === 'tareas' ? (
        <>
          <Navbar Mquery={Mquery} cookies={cookies} />
          <div>
            {data.userType === 'u' ? (
              <div className={mainStyles.globalCont}>
                <Menu data={data} setView={setView} />
                <div className={mainStyles.taskCont}>
                  <div className={mainStyles.headerM}>
                    <p>Actividades</p>
                  </div>
                  <div className={mainStyles.postuContainer}>
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                  </div>
                </div>
              </div>
            ) : data.userType === 'm' ? (
              <div className={mainStyles.globalCont}>
                <Menu data={data} setView={setView} />
                <div className={mainStyles.taskCont}>
                  <div className={mainStyles.headerM}>
                    <p>Actividades</p>
                    <ButtonNew />
                  </div>
                  <div className={mainStyles.postmContainer}>
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                  </div>
                </div>
              </div>
            ) : data.userType === 'a' ? (
              <div>
                <Admin />
              </div>
            ) : null}
          </div>
          <Footer />
        </>
      ) : view === 'cursos' ? (
        <>
          <Navbar Mquery={Mquery} cookies={cookies} />
          <div>
            {data.userType === 'u' ? (
              <div className={mainStyles.globalCont}>
                <Menu data={data} setView={setView} />
                <Cursos />
              </div>
            ) : data.userType === 'm' ? (
              <div className={mainStyles.globalCont}>
                <Menu data={data} setView={setView} />
                <Cursos />
              </div>
            ) : data.userType === 'a' ? (
              <div>
                <Admin />
              </div>
            ) : null}
          </div>
          <Footer />
        </>
      ) : view === 'perfil' ? (
        <>
          <Navbar Mquery={Mquery} cookies={cookies} />
          <div>
            {data.userType === 'u' ? (
              <div className={mainStyles.globalCont}>
                <Menu data={data} setView={setView} />
                <Profile data={data} />
              </div>
            ) : data.userType === 'm' ? (
              <div className={mainStyles.globalCont}>
                <Menu data={data} setView={setView} />
                <Profile data={data} />
              </div>
            ) : data.userType === 'a' ? (
              <div>
                <Admin />
              </div>
            ) : null}
          </div>
          <Footer />
        </>
      ) : null}
    </>
  );
};

export default Dashboard;
