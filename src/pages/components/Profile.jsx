import React, {useState} from 'react';
import Navbar from './Navbar';
import mainStyles from '../../styles/main.module.scss';
import profileStyles from '../../styles/profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Menu from './Menu';
const Profile = ({Mquery}) => {
    return (
        <>
            <div className={mainStyles.globalCont}>
                {/* componente menu */}
                <Menu/>
                <div className={profileStyles.contenido}>
                    <img  className={profileStyles.profilePicture} src="https://tvazteca.brightspotcdn.com/dims4/default/c38ab44/2147483647/strip/true/crop/1920x1080+0+0/resize/968x545!/format/jpg/quality/80/?url=https%3A%2F%2Ftvazteca.brightspotcdn.com%2Fa9%2F34%2Fa04d1aa04a45b5e87f8a9f034a4b%2Fagregar-un-subtitulo-8.jpg" alt="profile"/>
                    <div className={profileStyles.cardProfile} >
                        <span>Dr. Profesor Patricio</span>
                        <div className={profileStyles.continue}>
                            <h2>E-mail:</h2> <p>patrico@avocadosnetwork.com</p>
                        </div>
                        <div className={profileStyles.continue}>
                            <h2>Password:</h2> <input disabled value="*******"></input>
                        </div>
                    </div>
                </div>
            </div>
        </>  
    )
}



export default Profile
