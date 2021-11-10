import React from 'react';
import cursosActivos from '../../../styles/cursos.module.scss';
import Router from 'next/router';

import { Button } from 'react-bootstrap';

const Cursos = ({ userCourses, userType, id }) => {
  return (
    <div className={cursosActivos.Main}>
      <div className={cursosActivos.MainCard}>
        <div className={cursosActivos.MainCardOptions}>
          <Button
            variant="dark"
            onClick={() => Router.push(`/dashboard/courses/${id}`)}
            className={cursosActivos.MainCardOptionsViewcourses}
          >
            Ver cursos
          </Button>
          {userType === 'm' ? (
            <Button
              variant="ligth"
              className={cursosActivos.MainCardOptionsCreateExam}
            >
              Crear exámen
            </Button>
          ) : null}
        </div>
        <div className={cursosActivos.MainCardData}>
          <div>
            <p className={cursosActivos.MainCardDataName}>
              {userCourses.courseName}
            </p>
            {userType === 'm' ? (
              <p className={cursosActivos.MainCardDataStudents}>
                {userCourses.students} / 15
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
