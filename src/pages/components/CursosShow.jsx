import React, {useState} from 'react';
import Navbar from './Navbar';
import mainStyles from '../../styles/main.module.scss';

import Menu from './Menu';
import Footer from './Footer';
import Cursos from './Cursos'

const Dashboard = ({Mquery}) => {
    return (
        <>
            <Navbar Mquery={Mquery}/>
                <div className={mainStyles.globalCont}>
                    <Menu/>
                    <Cursos/>
                </div>
            <Footer />
        </>  
    )
}



export default Dashboard
