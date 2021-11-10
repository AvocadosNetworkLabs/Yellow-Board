import React, {
  useState,
  useEffect,
  lazy,
  Suspense,
  useLayoutEffect,
} from 'react';
import Navbar from 'pages/components/Utils/Navbar';
import Footer from 'pages/components/Utils/Footer';
import mainStyles from '../../../styles/main.module.scss';
import Router from 'next/router';
import { HashLoader } from 'react-spinners';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

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
    Router.push('/admin ');
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
                    {cookieData.userType === 'm' ? (
                      <ButtonNew cookieData={cookieData} />
                    ) : (
                      <></>
                    )}
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
                  <div className={mainStyles.headerM}>
                    <p>Cursos</p>
                  </div>
                  <div className={mainStyles.coursesContainer}>
                    {state.loading === true ? (
                      <div className={mainStyles.preloadCard}>
                        <p className={mainStyles.preloadTitle2}>Loading...</p>
                        <HashLoader />
                      </div>
                    ) : state.userCourses.length === 0 ? (
                      <div className={mainStyles.nothingCount}>
                        <p className={mainStyles.nothing}>
                          Upsss!... No estas registrado en ningun curso
                        </p>
                        <center>
                          <img
                            className={mainStyles.nothingImg}
                            src="https://media.tenor.com/images/d8ebb04280fd50216a4f846d330c5d3a/tenor.gif"
                            alt="error loading"
                          />
                        </center>
                      </div>
                    ) : (
                      state.userCourses.map((item) => (
                        <>
                          <Cursos
                            userType={cookieData.userType}
                            userCourses={item.userCourses}
                            id={item.courseId}
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
