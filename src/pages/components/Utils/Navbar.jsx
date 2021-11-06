import React, { useState, useEffect } from 'react';
import Dstyles from '../../../styles/navbar.module.scss';
import Router from 'next/router';
import { Alert, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import axios from 'axios';

import useSound from 'use-sound';
// import song from '';

const Navbar = ({ Mquery, cookies }) => {
  const [show, setShow] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [Song, setSong] = useState(1);

  const [play, { stop }] = useSound(`/assets/songs/${Song}.mp3`, {
    playbackRate,
    interrupt: true,
    volume: 0.1,
  });

  const [count, setcount] = useState(0);
  const session = Cookies.get('session');

  if (cookies.userData) {
    var data = JSON.parse(cookies.userData);
  }

  const logOut = async () => {
    await axios.get('/api/logout');
    Cookies.set('session', false);
    Router.push('/');
  };

  const theSong = () => {
    console.log(count);
    setcount(count + 1);
    if (count > 10) {
      setShow(true);
    }
  };

  return (
    <>
      {count >= 10 ? (
        <Alert show={show} className={Dstyles.alert} variant="success">
          You click the logo for {count} times! you are very curious
          <b> Play the song!</b>
          <br />
          <center>
            <img
              src="https://c.tenor.com/TbrvG1UPBX8AAAAd/never-gonna-give-you-up-dont-give.gif"
              alt="Rickroll!!!!!1"
            />
          </center>
          <br />
          <center>
            <Button onClick={() => setShow(false)} variant="success">
              Close
            </Button>
          </center>
        </Alert>
      ) : null}
      <nav className={Dstyles.Logo}>
        <div onClick={theSong}>
          <img
            onClick={() => {
              if (data.userType === 'u' || data.userType === 'm') {
                Router.push('/dasboard');
              } else {
                Router.push('/admin');
              }
            }}
            src="https://media.discordapp.net/attachments/829935312657448977/829938121868312586/lt_bl.png"
            alt="Logo"
            className={Dstyles.LogoImg}
          />
          {count >= 10 ? (
            <>
              <Button
                onClick={() => stop()}
                variant="light"
                className={Dstyles.btnm}
              >
                <img
                  src="https://cdn0.iconfinder.com/data/icons/music-sets/500/219-512.png"
                  alt="play button"
                />
              </Button>
              <Button
                onClick={() => play()}
                variant="light"
                className={Dstyles.btnm}
              >
                <img
                  src="https://vectorified.com/images/play-icon-png-14.png"
                  alt="play button"
                />
              </Button>
            </>
          ) : null}
        </div>
        {session === 'true' ? (
          <div className={Dstyles.profile}>
            <img src={data.url} alt={`Profile of ${data.name}`} />
            <p className={Dstyles.profileName}>
              {data.name}
              <span>{data.lastname}</span>
            </p>
            <p className={Dstyles.profileLogout} onClick={logOut}>
              SALIR
            </p>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
