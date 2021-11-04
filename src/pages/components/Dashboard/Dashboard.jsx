import React, { useState, useEffect, lazy, Suspense } from 'react';
import mainStyles from '../../../styles/main.module.scss';
import cursosActivos from '../../../styles/cursos.module.scss';
import Router from 'next/router';
import { PacmanLoader, HashLoader } from 'react-spinners';

// import Menu from './Menu';
import Navbar from '../Utils/Navbar';
import Footer from '../Utils/Footer';
// import ButtonNew from './ButtonNew';
// import ActivityCard from './ActivityCard';
// import Profile from './Profile';
// import Cursos from './Cursos';
import axios from 'axios';
import Cookies from 'js-cookie';

const ButtonNew = lazy(() => import('./ButtonNew'));
const ActivityCard = lazy(() => import('./ActivityCard'));
const Menu = lazy(() => import('./Menu'));
const Profile = lazy(() => import('./Profile'));
const Cursos = lazy(() => import('./Cursos'));
// const ActivityCard = lazy(() => import('./ActivityCard'));

const Dashboard = ({ Mquery, cookies }) => {
  const TheLoading = () => <HashLoader />;

  const [time, setTime] = useState(5);
  const [view, setViews] = useState('tareas');
  const session = Cookies.get('session');

  const [state, setstate] = useState({
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
    }, 5000);
  }, []);

  useEffect(async () => {
    if (view === 'cursos') {
      const { id } = data;
      setstate({ ...state, loading: true });

      setTimeout(async () => {
        let res = await axios.post('api/courses', { id: id });
        let results = res.data;
        setstate({
          ...state,
          loading: false,
          userCourses: results.data,
        });
      }, 2000);

      // console.log('cursos', state.userCourses);
    } else if (view === 'tareas') {
    } else if (view === 'perfil') {
    }
  }, [view]);

  if (cookies.userData) {
    if (session === 'true') data = JSON.parse(cookies.userData);
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

  if (data.userType === 'a') {
    setTimeout(() => {
      Router.push('/admin ');
    }, 5000);
  }

  return (
    <>
      <Navbar Mquery={Mquery} cookies={cookies} />
      {view === 'tareas' ? (
        <>
          {data.userType === 'u' ? (
            <Suspense fallback={TheLoading}>
              <div className={mainStyles.globalCont}>
                <Menu view={view} data={data} setView={setView} />
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
            </Suspense>
          ) : data.userType === 'm' ? (
            <Suspense fallback={TheLoading}>
              <div className={mainStyles.globalCont}>
                <Menu view={view} data={data} setView={setView} />
                <div className={mainStyles.leftCont}>
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
            </Suspense>
          ) : null}
        </>
      ) : view === 'cursos' ? (
        <>
          {data.userType === 'u' ? (
            <Suspense fallback={TheLoading}>
              <div className={mainStyles.globalCont}>
                <Menu view={view} data={data} setView={setView} />
                <div className={mainStyles.leftCont}>
                  <div className={mainStyles.postmContainer}>
                    {state.loading === true ? (
                      <div className={mainStyles.preloadCard}>
                        <p className={mainStyles.preloadTitle2}>Loading...</p>
                        <HashLoader />
                      </div>
                    ) : state.userCourses.length === 0 ? (
                      <p className={mainStyles.preloadTitle2}>
                        No esta registrado en ningun cursos
                      </p>
                    ) : (
                      state.userCourses.map((item) => (
                        <>
                          <Cursos
                            userType={data.userType}
                            userCourses={item.userCourses}
                          />
                        </>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </Suspense>
          ) : data.userType === 'm' ? (
            <Suspense fallback={TheLoading}>
              <div className={mainStyles.globalCont}>
                <Menu view={view} data={data} setView={setView} />
                <div className={mainStyles.leftCont}>
                  <div className={mainStyles.postmContainer}>
                    {state.loading === true ? (
                      <div className={mainStyles.preloadCard}>
                        <p className={mainStyles.preloadTitle2}>Loading...</p>
                        <HashLoader />
                      </div>
                    ) : state.userCourses.length === 0 ? (
                      <p className={mainStyles.preloadTitle2}>
                        No esta registrado en ningun cursos
                      </p>
                    ) : (
                      state.userCourses.map((item) => (
                        <>
                          <Cursos
                            userType={data.userType}
                            userCourses={item.userCourses}
                          />
                        </>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </Suspense>
          ) : null}
        </>
      ) : view === 'perfil' ? (
        <>
          <div>
            {data.userType === 'u' ? (
              <Suspense fallback={TheLoading}>
                <div className={mainStyles.globalCont}>
                  <Menu view={view} data={data} setView={setView} />
                  <div className={mainStyles.leftCont}>
                    <div className={mainStyles.postmContainer}>
                      <Profile data={data} />
                    </div>
                  </div>
                </div>
              </Suspense>
            ) : data.userType === 'm' ? (
              <Suspense fallback={TheLoading}>
                <div className={mainStyles.globalCont}>
                  <Menu view={view} data={data} setView={setView} />
                  <div className={mainStyles.leftCont}>
                    <div className={mainStyles.postmContainer}>
                      <Profile data={data} />
                    </div>
                  </div>
                </div>
              </Suspense>
            ) : null}
          </div>
        </>
      ) : null}
      <Footer />
    </>
  );
};

export default Dashboard;
