import React from 'react';
import adminStyles from '../../styles/admin.module.scss';

import Adminbtn from './Adminbtn';

const Admin = () => {
  return (
    <div className={adminStyles.admin}>
      <div className={adminStyles.adminCont}>
        <Adminbtn title="Administrar alumnos" icon="/assets/icons/user.png" />
        <Adminbtn title="Administrar cursos" icon="/assets/icons/user.png" />
        <Adminbtn
          title="Administrar publicaciones"
          icon="/assets/icons/user.png"
        />
        <Adminbtn title="Administrar archivos" icon="/assets/icons/user.png" />
        <Adminbtn
          title="administrar calificaciones"
          icon="/assets/icons/user.png"
        />
      </div>
    </div>
  );
};

export default Admin;
