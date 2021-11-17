import React from 'react';
import cursosActivos from '../../../styles/cursos.module.scss';
import Router from 'next/router';

import { Button } from 'react-bootstrap';

const Cursos = ({ userCourses, cookieData, id }) => {
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
          {cookieData === 'm' ? (
            <Button
              variant="ligth"
              onClick={() => Router.push(`/dashboard/Exams/${id}`)}
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
            {cookieData === 'm' ? (
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
