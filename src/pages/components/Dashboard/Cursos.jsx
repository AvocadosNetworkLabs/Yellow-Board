import React, { useEffect, useState } from 'react';
import cursosActivos from '../../../styles/cursos.module.scss';
import Router from 'next/router';
import axios from 'axios';

import { Button } from 'react-bootstrap';

const Cursos = ({ userCourses, cookieData, id }) => {
  const [userList, setuserList] = useState([]);
  const [ifchange, setifchange] = useState([]);

  useEffect(() => {
    const getusers = async () => {
      let obj = {
        _id: id,
      };
      let res = await axios.post('/api/getUsers/bycourse', obj);
      let data = res.data;
      setuserList(data.data.length);
    };
    getusers();
  }, []);
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
          ) : (
            <Button
              variant="ligth"
              onClick={() => Router.push(`/dashboard/Exams/do/${id}`)}
              className={cursosActivos.MainCardOptionsCreateExam}
            >
              Hacer examen
            </Button>
          )}
        </div>
        <div className={cursosActivos.MainCardData}>
          <div>
            <p className={cursosActivos.MainCardDataName}>
              {userCourses.courseName}
            </p>
            {cookieData === 'm' ? (
              <p className={cursosActivos.MainCardDataStudents}>
                {userList} / 15
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
