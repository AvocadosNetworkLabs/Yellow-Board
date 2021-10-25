import React, {useState, useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';
import Test from './test/test';
import Router from 'next/router'
import Cookies from 'js-cookie';
import Main from './components/Main'; 

const index = ({cookies}) => {
    
    
    
    const session = Cookies.get('session');
    
    
    // useEffect(() => {
    //     if(session === 'true'){
    //         console.log('hola soy un 🥜 y se cerro la sesion');
    //         Router.push('/dashboard');
    //     }}, [session]);
    
    const [test, settest] = useState(false);
    
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTablet = useMediaQuery({ 
        minWidth: 600,
        maxWidth: 1224,
    })
    const isMobile = useMediaQuery({ 
        query: '(max-width: 599px)' 
    })


    
        if(test=== true){
            return <Test />

        }
        if(test === false)
            return isDesktopOrLaptop ? <Main Mquery='D' cookies={cookies}/>: isTablet ? <Main Mquery='T' cookies={cookies}/>: isMobile ? <Main Mquery='M' cookies={cookies}/>: null
        
}


export const getServerSideProps = async (ctx) => {
    const { req, res } = ctx
    const {cookies} = req
    
    // console.log('this is a little cookie', cookies)
    
    return { props: { cookies: cookies } }
}
        
export default index;