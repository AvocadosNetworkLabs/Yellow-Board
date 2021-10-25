import React, {useState} from 'react'
import Link from 'next/link'
import StylesMenu from '../../styles/menu.module.scss';
const Menu = ({setView, data}) => {
    return (
        <>
            <aside className={StylesMenu.menu}>
                {/* {isLogged?true:fasle} */}
                {data.userType === 'a'?<>
                    <h1 className={StylesMenu.user}>Bienvenid@ Administrador</h1>
                    <a href="#" onClick={() =>setView('cursos')}>Cursos</a>
                    <a href="#" onClick={() =>setView('usuarios')}>Usuarios</a>
                    <a href="#" onClick={() =>setView('perfil')}>Perfil</a>
                    </>:data.userType === 'm'?<>
                    <h1>Bienvenid@ profesor {data.name}</h1>
                    <a href="#" onClick={() =>setView('cursos')}>Cursos</a>
                    <a href="#" onClick={() =>setView('tareas')}>Tareas</a>
                    <a href="#" onClick={() =>setView('perfil')}>Perfil</a>
                    </>:data.userType === 'u'?<>
                    <h1>Bienvenid@ {data.name}</h1>
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
                    <h1>Comete este camaron</h1>
                    <Link href="#">🍤</Link> 
                    </>}
            </aside>
        </>
    )
}

export default Menu
