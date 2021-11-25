import React, { useState, useEffect } from 'react';
// import mainStyles from '../../styles/main.module.scss';
import profileStyles from '../../../styles/profile.module.scss';
import axios from 'axios';

const Profile = ({ Mquery, data: userData }) => {
  const [state, setstate] = useState({});
  const [updatedata, setupdatedata] = useState(true);
  useEffect(() => {
    GetProfileData();
  }, []);
  const GetProfileData = async () => {
    let obj = { id: userData._id };
    let res = await axios.post('/api/profile/', obj);
    console.log(userData._id);
  };
  return (
    <div className={profileStyles.contenido}>
      <img
        className={profileStyles.profilePicture}
        src={userData.url || ''}
        alt={`profile picture of ${userData.name}`}
      />
      <div className={profileStyles.cardProfile}>
        <span>{`${userData.name || ''} ${userData.lastname || ''}`}</span>
        <div className={profileStyles.continue}>
          <h2>E-mail:</h2> <p>{userData.mail || ''}</p>
        </div>
        <div className={profileStyles.continue}>
          <h2>Password:</h2>
          <input
            type="password"
            disabled
            value={userData.password || ''}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Profile;
