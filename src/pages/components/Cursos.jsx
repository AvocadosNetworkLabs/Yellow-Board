import React from 'react';
import cursosActivos from '../../styles/cursos.module.scss';

const Cursos = () => {
  return (
    <>
      <div className={cursosActivos.mainCard}>
        <a
          href="http://localhost:3000/stadistics"
          className={cursosActivos.viewcourses}
        >
          Ver cursos
        </a>
        <a href="#" className={cursosActivos.createExam}>
          Crear exámen
        </a>
        <p className={cursosActivos.team}>Matemáticas</p>
      </div>
    </>
  );
};

export default Cursos;
