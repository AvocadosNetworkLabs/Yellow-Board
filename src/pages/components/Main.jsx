import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Incentivos from './Incentivos';
import Footer from './Footer';
import Router from 'next/router';
import { PacmanLoader, HashLoader } from 'react-spinners';
import mainStyles from '../../styles/main.module.scss';
import Cookies from 'js-cookie';

export default function Main({ Mquery, cookies }) {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const session = Cookies.get('session');

    if (session === 'true') {
      Router.push('/dashboard');
    }
  });

  if (loading === true) {
    return (
      <>
        <Navbar Mquery={Mquery} cookies={cookies} />
        <div className={mainStyles.perload}>
          <div className={mainStyles.preloadCard}>
            <p className={mainStyles.preloadTitle}>Page loading...</p>
            <HashLoader color="#ffc400" loading={loading} size={100} />
          </div>
        </div>
        <Footer Mquery={Mquery} />
      </>
    );
  }

  return (
    <>
      <Navbar Mquery={Mquery} cookies={cookies} />
      <Banner />
      <Incentivos />
      <Footer Mquery={Mquery} />
    </>
  );
}
