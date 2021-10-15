import React, {useState, useEffect} from 'react'
import Dstyles from '../../styles/navbar.module.scss'
import Dstyles2 from '../../styles/banner.module.scss';
import router, { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { User_Data } from '../../redux/types';

const Banner = () => {
    const dispatch = useDispatch();

    const [userData, setuserData] = useState([]);
    // const [code, setCode] = useState(404);
    const [onLogin, setOnLoin] = useState(false);

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');


    if(userData.status === 200){
        router.push('/dashboard');
    }

    useEffect(() => {
        if(!onLogin) {
            return false;
         }
         sendData();
      }, [onLogin])

    const sendData = async () =>{
        const response = await fetch('/api/signin', {
            method: 'POST',
            body: JSON.stringify({username: user, psw: pass}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setuserData(data);
            setOnLoin(false);
            dispatch({   
                type: User_Data,                    
                payload: data,             
            })
        }).catch(err => {
           console.log(err);
           setOnLoin(false);
        })
    }

        
    const SetValue = (e) => {
        e.target.name === 'username'? setUser(e.target.value): e.target.name === 'psw'? setPass(e.target.value): null;
    }

    return (
        <>
            <section className={Dstyles.LogoBanner}>
                <p>
                   We are not just another <i>board</i>
                </p>
            </section>
            <div className={Dstyles2.Foreground}>
                {userData === null ? <p></p> : userData.status === 200 ? <p className={Dstyles2.alertGreen}> 🟢 Bienvenido!</p>: userData.status === 300 ? <p className={Dstyles2.alert}>⚠️ Debe ingresar algun dato</p>: userData.status === 404 ? <p className={Dstyles2.alert}>⚠️ Credenciales erroneas</p>: null}
                <input name='username' id='username' onChange={(e) => SetValue(e)} type="text" placeholder="Username" className={Dstyles2.Username}/>
                <input name='psw' onChange={(e) => SetValue(e)} id='pws' type="password" placeholder="Password" className={Dstyles2.Password}/>
                <button type='button' onClick={() => {
                setOnLoin(true);
        }} className={Dstyles2.Ingresar}>Ingresar</button>
            </div>
        </>
    )
}

export default Banner
