import React from 'react'
import Dstyles from '../../styles/navbar.module.scss'

const Navbar = ({Mquery}) => {
    return (
        <>
            <nav className = {Dstyles.Logo}>
                <img src="https://media.discordapp.net/attachments/829935312657448977/829938123311546378/lt.png" alt="Logo" className={Dstyles.LogoImg}/>
            </nav>
        </>
    )
}

export default Navbar
