import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import CursosShow from './components/CursosShow'; 

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
    return isDesktopOrLaptop ? <CursosShow Mquery='D'/>: isTablet ? <CursosShow Mquery='T'/>: isMobile ? <CursosShow Mquery='M'/>: null
}
export default index;
