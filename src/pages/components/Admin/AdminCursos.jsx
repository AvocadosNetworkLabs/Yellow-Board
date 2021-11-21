import React, { useEffect, useState } from 'react';
import AdminStyles from '../../../styles/admin.module.scss';
import { Button, Dropdown } from 'react-bootstrap';
import axios from 'axios';

const Cursos = ({
  item,
  showAlertEdit,
  state,
  setstate,
  showAlert,
  showAlertAddUser,
  showAlertUserList,
}) => {
  return (
    <div className={AdminStyles.mainCont}>
      <div className={AdminStyles.mainCard}>
        <Dropdown className={AdminStyles.dropdown}>
          <Dropdown.Toggle
            className={AdminStyles.dropdownBTN}
            variant="warning"
            id="dropdown-basic"
          >
            Options
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              className={AdminStyles.dropdownItem}
              onClick={() => {
                showAlertEdit();
                setstate({
                  ...state,
                  oneCourse: {
                    _id: item._id,
                    courseName: item.courseName,
                    description: item.description,
                    startDate: item.startDate,
                    students: item.students,
                  },
                });
              }}
            >
              <p>Editar Informacion</p>
            </Dropdown.Item>
            <Dropdown.Item
              className={AdminStyles.dropdownItem}
              onClick={() => {
                showAlertAddUser();
                setstate({
                  ...state,
                  AddUser: {
                    ...state.AddUser,
                    _id: item._id,
                  },
                });
              }}
            >
              <p>Agregra Usuario</p>
            </Dropdown.Item>
            <Dropdown.Item
              className={AdminStyles.dropdownItem}
              onClick={() => {
                showAlertUserList(item._id);
              }}
            >
              <p>Lista de usuarios</p>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              className={(AdminStyles.dropdownItem, AdminStyles.Delete)}
              onClick={() => {
                setstate({
                  ...state,
                  oneCourse: {
                    _id: item._id,
                  },
                });
                showAlert();
              }}
            >
              <p>Borrar Curso</p>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className={AdminStyles.datacont}>
          <div>
            <p className={AdminStyles.team}>{item.courseName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
