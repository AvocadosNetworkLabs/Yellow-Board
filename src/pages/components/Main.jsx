import React, {useState} from 'react';
import Navbar from './Navbar';
import mainStyles from '../../styles/main.module.scss';
import Banner from './Banner';
import Incentivos from './Incentivos';
import Footer from './Footer';

export default function Main({Mquery, cookies}){
    return (
        <>
            <Navbar Mquery={Mquery} cookies={cookies}/>
            <Banner cookies={cookies}/>
            <Incentivos/>
            <Footer Mquery={Mquery}/>
        </>  
    )
}