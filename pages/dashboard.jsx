import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import Dashboard from './components/Dashboard'; 

const index = () => {
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
    return isDesktopOrLaptop ? <Dashboard Mquery='D'/>: isTablet ? <Dashboard Mquery='T'/>: isMobile ? <Dashboard Mquery='M'/>: null
}
export default index;
