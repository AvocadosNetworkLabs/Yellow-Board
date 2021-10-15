import React, {useState} from 'react';
import Navbar from './Navbar';
import mainStyles from '../../styles/main.module.scss';
import Banner from './Banner';
import Incentivos from './Incentivos';
import Footer from './Footer';

const Main = ({Mquery}) => {
    return (
        <>
            <Navbar Mquery={Mquery}/>
            <Banner/>
            <Incentivos/>
            <Footer Mquery={Mquery}/>
        </>  
    )
}

export default Main
