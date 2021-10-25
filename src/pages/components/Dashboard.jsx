import React, {useState} from 'react';
import Navbar from './Navbar';
import mainStyles from '../../styles/main.module.scss';
import Dstyles from '../../styles/navbar.module.scss';
import Router from 'next/router';

import Menu from './Menu';
import MasterPost from './MasterPost';
import Fileupload from './Fileupload';
import Footer from './Footer';
import ButtonNew from './ButtonNew';
import ActivityCard from './ActivityCard'
import {Modal, Button} from 'react-bootstrap';
import Profile from './Profile'; 
import Cursos from './Cursos'; 


const Dashboard = ({Mquery, cookies}) => {

    const [time, setTime] = useState(5);

    // const session = Cookies.get('session');
    const [view, setViews] = useState('') 
    
    
    const setView= (view) => {
        setViews(view);
    }

    if(cookies.userData){
        var data = JSON.parse(cookies.userData);
    }else{

        for (let i = 5; i == 0; i--) {
            setTimeout(() => {
              setTime(i);
            }, 1000)
          }

        setTimeout(()=>{
            Router.push('/');
        }, 5000)
        return (
            <>
                <Navbar Mquery={Mquery} cookies={cookies}/>
                <div className={Dstyles.Modal}>
                    <Modal.Dialog className={Dstyles.ModalCart}>
                        <Modal.Header>
                            <Modal.Title>UPS!, there was an error</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Firs login</p>
                            <p>Redirecting to login!</p>
                            <p>{time}</p>
                        </Modal.Body>

                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
                <Footer />
            </>
        )
    }

    if(view === 'tareas'){
        return (
            <>
                <Navbar Mquery={Mquery} cookies={cookies}/>
                <div>
                    {/* componente menu */}
                    {data.userType === 'u'? 
                        <div className={mainStyles.globalCont}>
                            <Menu data={data} setView={setView}/>
                            <div className={mainStyles.taskCont}>
                                <div className={mainStyles.headerM}>
                                    <p>Actividades</p>
                                </div>
                                <div className={mainStyles.postuContainer}>
                                    <ActivityCard/>
                                    <ActivityCard/>
                                    <ActivityCard/>
                                </div>
                            </div>
                        </div>
                    
                    :data.userType === 'm'?
                    <div className={mainStyles.globalCont}>
                        <Menu data={data} setView={setView}/>
                        <div className={mainStyles.taskCont}>
                            <div className={mainStyles.headerM}>
                                <p>Actividades</p>
                                <ButtonNew/>
                            </div>
                            <div className={mainStyles.postmContainer}>
                                <ActivityCard/>
                                <ActivityCard/>
                                <ActivityCard/>
                            </div>
                        </div>
                    </div>:null}
            
                    {/* <Fileupload/> */}
                    </div>
                <Footer />
            </>  
        )
    }
    if(view === 'perfil'){
        return (
            <>
                <Navbar Mquery={Mquery} cookies={cookies}/>
                <div>

                    {data.userType === 'u'? 
                        <div className={mainStyles.globalCont}>
                            <Menu data={data} setView={setView}/>
                            <Profile data={data}/>
                        </div>
                    
                    :data.userType === 'm'?
                        <div className={mainStyles.globalCont}>
                            <Menu data={data} setView={setView}/>
                            <Profile data={data}/>
                        </div>
                    :null}
            
                    {/* <Fileupload/> */}
                    </div>
                <Footer />
            </>  
        )
    }
    if(view === 'cursos'){
        return (
            <>
                <Navbar Mquery={Mquery} cookies={cookies}/>
                <div>
                    {data.userType === 'u'? 
                        <div className={mainStyles.globalCont}>
                            <Menu data={data} setView={setView}/>
                            <Cursos />
                        </div>
                    
                    :data.userType === 'm'?
                        <div className={mainStyles.globalCont}>
                            <Menu data={data} setView={setView}/>
                            <Cursos />
                        </div>
                    :null}
            
                    {/* <Fileupload/> */}
                    </div>
                <Footer />
            </>  
        )
    }


    if(view === 'usuarios'){
        return (
            <>
                <Navbar Mquery={Mquery} cookies={cookies}/>
                <div className={mainStyles.globalCont}>
                    {/* componente menu */}
                    <Menu data={data} setView={setView}/>
                    {/* {data.} */}

                    {data.userType === 'u'? 
                        <div>
                            Notiene permisos
                        </div>
                    
                    :data.userType === 'm'?
                        <div>
                            Notiene permisos
                        </div>
                    :null}
            
                    {/* <Fileupload/> */}
                    </div>
                <Footer />
            </>  
        )
    }

    return (
        <>
            <Navbar Mquery={Mquery} cookies={cookies}/>
            <div>
                {data.userType === 'u'? 
                    <div className={mainStyles.globalCont}>
                        <Menu data={data} setView={setView}/>
                        <div className={mainStyles.taskCont}>
                            <div className={mainStyles.headerM}>
                                <p>Actividades</p>
                            </div>
                            <div className={mainStyles.postuContainer}>
                                <ActivityCard/>
                                <ActivityCard/>
                                <ActivityCard/>
                            </div>
                        </div>

                    </div>
                
                :data.userType === 'm'?
                <div className={mainStyles.globalCont}>
                    <Menu data={data} setView={setView}/>
                    <div className={mainStyles.taskCont}>
                        <div className={mainStyles.headerM}>
                            <p>Actividades</p>
                            <ButtonNew/>
                        </div>
                        <div className={mainStyles.postmContainer}>
                            <ActivityCard/>
                            <ActivityCard/>
                            <ActivityCard/>
                        </div>
                    </div>
                </div>: data.userType === 'a'?
                    <div>
                        <div>
                            panel de admin
                        </div>
                    </div>
                :null}
        
                {/* <Fileupload/> */}
                </div>
            <Footer />
        </>  
    )


}


export default Dashboard
