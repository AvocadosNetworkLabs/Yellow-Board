import React, {useState} from 'react';
// import Navbar from './Navbar';
import mainStyles from '../../styles/main.module.scss';
import profileStyles from '../../styles/profile.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = ({Mquery, data}) => {
    return (
            <div className={mainStyles.globalCont}>
                <div className={profileStyles.contenido}>
                    <img  className={profileStyles.profilePicture} src={data.url} alt={`profile picture of ${data.name}`}/>
                    <div className={profileStyles.cardProfile} >
                        <span>{`${data.name} ${data.lastname}`}</span>
                        <div className={profileStyles.continue}>
                            <h2>E-mail:</h2> <p>{data.mail}</p>
                        </div>
                        <div className={profileStyles.continue}>
                            <h2>Password:</h2> <input type='password' disabled value={data.password}></input>
                        </div>
                    </div>
                </div>
            </div> 
    )
}



export default Profile
