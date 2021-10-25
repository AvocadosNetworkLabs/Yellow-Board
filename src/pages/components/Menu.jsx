import React, {useState} from 'react'
import Link from 'next/link'
import StylesMenu from '../../styles/menu.module.scss';
const Menu = ({setView, data}) => {
    return (
        <>
            <aside className={StylesMenu.menu}>
                {data.userType === 'a'?<>
                    <p className={StylesMenu.user}>Bienvenid@ Administrador</p>
                    <a href="#" onClick={() =>setView('cursos')}>Cursos</a>
                    <a href="#" onClick={() =>setView('usuarios')}>Usuarios</a>
                    <a href="#" onClick={() =>setView('perfil')}>Perfil</a>
                    </>:data.userType === 'm'?<>
                    <p className={StylesMenu.user}>Bienvenid@ {data.name}</p>
                    <a href="#" onClick={() =>setView('cursos')}>Cursos</a>
                    <a href="#" onClick={() =>setView('tareas')}>Tareas</a>
                    <a href="#" onClick={() =>setView('perfil')}>Perfil</a>
                    </>:data.userType === 'u'?<>
                    <p className={StylesMenu.user}>Bienvenid@ {data.name}</p>
                    <a href="#" onClick={() =>setView('cursos')}>Cursos</a>
                    <a href="#" onClick={() =>setView('tareas')}>Tareas</a>
                    <a href="#" onClick={() =>setView('perfil')}>Perfil</a>
                    </>
                    // :data.userType === 'p'?<>
                    // <p>Bienvenido padre de {data.name}</p>
                    // <Link href="#">Cursos</Link>
                    // <Link href="#">Perfil</Link>  
                    // </>
                    :<>
                    <p className={StylesMenu.user}>Comete este camaron</p>
                    <Link href="#">🍤</Link> 
                    </>}
            </aside>
        </>
    )
}

export default Menu
