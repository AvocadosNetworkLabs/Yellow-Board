import React from 'react';
import adminStyles from '../../../styles/admin.module.scss';

import Adminbtn from './Adminbtn';

const Admin = () => {
  return (
    <div className={adminStyles.admin}>
      <div className={adminStyles.adminCont}>
        <Adminbtn
          path="alumnos"
          title="Administrar alumnos"
          icon="/assets/icons/user.png"
        />
        <Adminbtn
          path="alumnos"
          title="Administrar cursos"
          icon="/assets/icons/user.png"
        />
        <Adminbtn
          path="alumnos"
          title="Administrar publicaciones"
          icon="/assets/icons/user.png"
        />
        <Adminbtn
          path="alumnos"
          title="Administrar archivos"
          icon="/assets/icons/user.png"
        />
        <Adminbtn
          path=""
          title="administrar calificaciones"
          icon="/assets/icons/user.png"
        />
      </div>
    </div>
  );
};

export default Admin;
