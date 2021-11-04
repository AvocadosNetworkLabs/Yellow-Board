import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import StylesMenu from '../../../styles/menu.module.scss';

const Menu = ({ setView, data, view }) => {
  useEffect(() => {
    if (view === 'cursos') {
      document.getElementById('cursos').classList.add('active');
      document.getElementById('perfil').classList.remove('active');
      document.getElementById('tareas').classList.remove('active');
    }
    if (view === 'perfil') {
      document.getElementById('perfil').classList.add('active');
      document.getElementById('cursos').classList.remove('active');
      document.getElementById('tareas').classList.remove('active');
    }
    if (view === 'tareas') {
      document.getElementById('tareas').classList.add('active');
      document.getElementById('perfil').classList.remove('active');
      document.getElementById('cursos').classList.remove('active');
    }
  }, [view]);

  return (
    <>
      <aside className={StylesMenu.menu}>
        {data.userType === 'm' ? (
          <>
            <p className={StylesMenu.user}>Bienvenid@ {data.name}</p>
            <a
              href="#"
              id="cursos"
              onClick={() => {
                setView('cursos');
              }}
            >
              Cursos
            </a>
            <a
              href="#"
              id="tareas"
              onClick={(e) => {
                setView('tareas');
              }}
            >
              Tareas
            </a>
            <a
              href="#"
              id="perfil"
              onClick={(e) => {
                setView('perfil');
              }}
            >
              Perfil
            </a>
          </>
        ) : data.userType === 'u' ? (
          <>
            <p className={StylesMenu.user}>Bienvenid@ {data.name}</p>
            <a
              href="#"
              id="cursos"
              onClick={(e) => {
                setView('cursos');
              }}
            >
              Cursos
            </a>
            <a
              href="#"
              id="tareas"
              onClick={(e) => {
                setView('tareas');
              }}
            >
              Tareas
            </a>
            <a
              href="#"
              id="perfil"
              onClick={(e) => {
                setView('perfil');
              }}
            >
              Perfil
            </a>
          </>
        ) : (
          <>
            <p className={StylesMenu.user}>Comete este camaron</p>
            <Link href="#">🍤</Link>
          </>
        )}
      </aside>
    </>
  );
};

export default Menu;
