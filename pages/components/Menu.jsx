import React, {useState} from 'react'
import Link from 'next/link'
import mainStyles from '../../styles/main.module.scss';
import StylesMenu from '../../styles/menu.module.scss';
const Menu = () => {
    const [TipoUsr,setTipoUsr] = useState('a');

    return (
        <>
            <aside className={StylesMenu.menu}>
                {/* {isLogged?true:fasle} */}
                {TipoUsr == 'a'?<>
                    <Link href="http://localhost:3000/cursos">Cursos</Link>
                    <Link href="http://localhost:3000/dashboard">Usuarios</Link>
                    <Link href="http://localhost:3000/profile">Perfil</Link>
                    </>:TipoUsr == 'm'?<>
                    <Link href="#">Cursos</Link>
                    <Link href="#">Tareas</Link>
                    <Link href="#">Perfil</Link>
                    </>:TipoUsr == 'u'?<>
                    <Link href="#">Cursos</Link>
                    <Link href="#">Tareas</Link>
                    <Link href="#">Perfil</Link>
                    </>:TipoUsr == 'p'?<>
                    <Link href="#">Cursos</Link>
                    <Link href="#">Perfil</Link>  
                    </>:<>
                    <Link href="#">🍤</Link> 
                    </>}
            </aside>
        </>
    )
}

export default Menu
