import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import Test from './test/test';

import Main from './components/Main'; 

const index = () => {

    const [test, settest] = useState(false)
  
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
            return isDesktopOrLaptop ? <Main Mquery='D'/>: isTablet ? <Main Mquery='T'/>: isMobile ? <Main Mquery='M'/>: null
        
        }

export default index;