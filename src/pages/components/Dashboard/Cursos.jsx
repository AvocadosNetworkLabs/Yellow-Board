import React from 'react';
import cursosActivos from '../../../styles/cursos.module.scss';
import { Button } from 'react-bootstrap';

const Cursos = ({ userCourses, userType }) => {
  return (
    <div className={cursosActivos.mainCont}>
      <div className={cursosActivos.mainCard}>
        <Button variant="dark" className={cursosActivos.viewcourses}>
          Ver cursos
        </Button>
        {userType === 'm' ? (
          <Button
            variant="outline-success"
            className={cursosActivos.createExam}
          >
            Crear exámen
          </Button>
        ) : null}
        <div className={cursosActivos.datacont}>
          <p className={cursosActivos.team}>{userCourses.courseName}</p>
          {userType === 'm' ? (
            <p className={cursosActivos.data}>{userCourses.students} / 15</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Cursos;
