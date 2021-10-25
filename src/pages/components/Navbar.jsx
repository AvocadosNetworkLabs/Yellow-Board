import React,{useEffect} from 'react'
import Dstyles from '../../styles/navbar.module.scss';
import Router from 'next/router';
import Cookies from 'js-cookie';
// import axios from 'axios';

const Navbar = ({Mquery, cookies}) => {

    const session = Cookies.get('session');

    if(cookies.userData){
        var data = JSON.parse(cookies.userData);
    }

    useEffect(() => {
        
        if(session === 'false'){
            console.log('hola soy un 🥜 y se cerro la sesion');
            Router.push('/');
        }}, [session]);


    const logOut = () =>{
        Cookies.set("session", false);
        Router.push('/');
        // axios.post('api/signin/logout')
    }

    console.log(session)
    return (
        <>
            <nav className = {Dstyles.Logo}>
                <img src="https://media.discordapp.net/attachments/829935312657448977/829938123311546378/lt.png" alt="Logo" className={Dstyles.LogoImg}/>
                {session === 'true'?
                <div className={Dstyles.profile}>
                    <img src={data.url} alt={`Profile of ${data.name}`}/>
                    <p className={Dstyles.profileName}>{data.name}<span>{data.lastname}</span></p>
                    <p className={Dstyles.profileLogout} onClick={logOut}>SALIR</p>
                </div>: null}
            </nav>
        </>
    )
}

export default Navbar;
