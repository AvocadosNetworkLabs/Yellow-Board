import React, {useState} from 'react';
import Navbar from './Navbar';
import mainStyles from '../../styles/main.module.scss';

import Menu from './Menu';
import MasterPost from './MasterPost';
import Fileupload from './Fileupload';
import Footer from './Footer';
import ButtonNew from './ButtonNew';
import ActivityCard from './ActivityCard'
import Cursos from './Cursos'

const Dashboard = ({Mquery}) => {
    return (
        <>
            <Navbar Mquery={Mquery}/>
            {/* <div className={mainStyles.globalCont}> */}
            <div>
                
            </div>
                {/* componente menu */}
                <Menu/>
                <div className={mainStyles.content}>
                    <ButtonNew/>
                    <ActivityCard/>
                    {/* <Fileupload/> */}
                </div>
            <Footer />
        </>  
    )
}



export default Dashboard
