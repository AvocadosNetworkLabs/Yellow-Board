import React from 'react';
import adminStyles from '../../styles/adminbtn.module.scss';

const Adminbtn = ({ icon, title }) => {
  return (
    <div className={adminStyles.btn}>
      <img
        className={adminStyles.btnImg}
        src={icon}
        alt={`admin icon for ${title}`}
      />
      <p className={adminStyles.btnTitle}>{title}</p>
    </div>
  );
};

export default Adminbtn;
