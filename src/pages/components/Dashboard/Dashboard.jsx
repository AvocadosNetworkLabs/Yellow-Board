import React, {
  useState,
  useEffect,
  lazy,
  Suspense,
  useLayoutEffect,
} from 'react';
import mainStyles from '../../../styles/main.module.scss';
import Router from 'next/router';
import { PacmanLoader, HashLoader } from 'react-spinners';
import { Alert } from 'react-bootstrap';

import Navbar from '../Utils/Navbar';
import Footer from '../Utils/Footer';
import axios from 'axios';
import Cookies from 'js-cookie';

const ButtonNew = lazy(() => import('./ButtonNew'));
const ActivityCard = lazy(() => import('./ActivityCard'));
const Menu = lazy(() => import('./Menu'));
const Profile = lazy(() => import('./Profile'));
const Cursos = lazy(() => import('./Cursos'));

const Dashboard = ({ Mquery, cookies }) => {
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
  const TheLoading = () => <HashLoader />;

  const [time, setTime] = useState(5);
  const [view, setViews] = useState('tareas');

  const [state, setstate] = useState({
    userCourses: [],
    userTasks: [],
  });

  const [loading, setloading] = useState(false);
  const setView = (view) => {
    setViews(view);
  };

  useLayoutEffect(() => {
    setloading(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    if (cookies.userData) {
      setcookiedata(JSON.parse(cookies.userData));
    }
  }, []);

  useEffect(async () => {
    if (view === 'cursos') {
      const { id } = cookieData;
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

  if (loading === true) {
    return (
      <>
        <Navbar Mquery={Mquery} cookies={cookies} />
        <div className={mainStyles.perload}>
          <div className={mainStyles.preloadCard}>
            <p className={mainStyles.preloadTitle}>
              Welcome back {cookieData.name}!
            </p>
            <HashLoader color="#ffc400" loading={loading} size={100} />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (cookieData.userType === 'a') {
    setTimeout(() => {
      Router.push('/admin ');
    }, 1500);
  }

  return (
    <>
      <Navbar Mquery={Mquery} cookies={cookies} />
      <div className={mainStyles.bodyAll}>
        {view === 'tareas' ? (
          <>
            <Suspense fallback={TheLoading}>
              <div className={mainStyles.globalCont}>
                <Menu view={view} data={cookieData} setView={setView} />
                <div className={mainStyles.leftCont}>
                  <div className={mainStyles.headerM}>
                    <p>Actividades</p>
                    {cookieData.userType === 'm' ? <ButtonNew /> : <div></div>}
                  </div>
                  <div className={mainStyles.postmContainer}>
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                  </div>
                </div>
              </div>
            </Suspense>
          </>
        ) : view === 'cursos' ? (
          <>
            <Suspense fallback={TheLoading}>
              <div className={mainStyles.globalCont}>
                <Menu view={view} data={cookieData} setView={setView} />
                <div className={mainStyles.leftCont}>
                  <div className={mainStyles.postmContainer}>
                    {state.loading === true ? (
                      <div className={mainStyles.preloadCard}>
                        <p className={mainStyles.preloadTitle2}>Loading...</p>
                        <HashLoader />
                      </div>
                    ) : state.userCourses.length === 0 ? (
                      <div className={mainStyles.coursesAlert}>
                        <Alert
                          className={mainStyles.coursesAlertText}
                          variant="info"
                        >
                          No estas incrito en ningun curso 🦐
                        </Alert>
                      </div>
                    ) : (
                      state.userCourses.map((item) => (
                        <>
                          <Cursos
                            userType={cookieData.userType}
                            userCourses={item.userCourses}
                          />
                        </>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </Suspense>
          </>
        ) : view === 'perfil' ? (
          <>
            <div>
              <Suspense fallback={TheLoading}>
                <div className={mainStyles.globalCont}>
                  <Menu view={view} data={cookieData} setView={setView} />
                  <div className={mainStyles.leftCont}>
                    <div className={mainStyles.postmContainer}>
                      <Profile data={cookieData} />
                    </div>
                  </div>
                </div>
              </Suspense>
            </div>
          </>
        ) : null}
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
