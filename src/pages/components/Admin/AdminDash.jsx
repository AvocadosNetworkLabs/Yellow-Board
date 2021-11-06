import { useState, useEffect } from 'react';
import Navbar from '../Utils/Navbar';
import Footer from '../Utils/Footer';
import Admin from './Admin';
import mainStyles from '../../../styles/main.module.scss';
import AdminStyles from '../../../styles/admin.module.scss';
import HashLoader from 'react-spinners/HashLoader';
import Router from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';

// const Admin = lazy(() => import('./Admin'));

const AdminDash = ({ Mquery, cookies }) => {
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  const TheLoading = () => <HashLoader />;

  const session = Cookies.get('session');
  const [time, setTime] = useState(5);
  const [loading, setloading] = useState(false);
  const [Show, setShow] = useState(false);
  var data;

  if (cookies.userData && session === 'true') {
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

    setTimeout(async () => {
      axios.get('api/logout');
      Cookies.set('session', false);
      Router.push('/');
    }, 1500);
    return (
      <>
        <Navbar Mquery={Mquery} cookies={cookies} />
        <div className={mainStyles.perload}>
          <div className={mainStyles.preloadCard}>
            <p className={mainStyles.preloadTitle}>
              You need to login redirecting {time}
            </p>
            <HashLoader />
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

  if (data.userType != 'a') {
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
      Router.push('/dashboard');
    }, 1500);
    return (
      <>
        <Navbar Mquery={Mquery} cookies={cookies} />
        <div className={mainStyles.perload}>
          <div className={mainStyles.preloadCard}>
            <p className={mainStyles.preloadTitle}>
              You need permissions, redirecting {time}
            </p>
            <HashLoader />
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
    <div>
      <Navbar Mquery={Mquery} cookies={cookies} />
      <div className={AdminStyles.bgcolor}>
        <p className={AdminStyles.HeaderTitleDash}> Panel de Administracion</p>
        <Admin />
      </div>
      <Footer Mquery={Mquery} />
    </div>
  );
};

export default AdminDash;
