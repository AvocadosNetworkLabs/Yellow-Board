import React, {useState} from 'react';
import Navbar from './Navbar';
import mainStyles from '../../styles/main.module.scss';

import Menu from './Menu';
import MasterPost from './MasterPost';
import Fileupload from './Fileupload';
import Footer from './Footer';

const Dashboard = ({Mquery}) => {
    return (
        <>
            <Navbar Mquery={Mquery}/>
            <div className={mainStyles.globalCont}>
                {/* componente menu */}
                <Menu/>
                <Fileupload/>
                {/* otro componente */}
                {/* <MasterPost tipoUsr='p'/> */}
            </div>
            <Footer />
        </>  
    )
}



export default Dashboard
