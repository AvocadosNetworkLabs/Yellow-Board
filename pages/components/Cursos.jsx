import React from 'react'
import cursosActivos from '../../styles/cursos.module.scss';

const Cursos = () => {
    return (
        <>
            <div className={cursosActivos.mainCard}>
                <a className={cursosActivos.viewcourses}>Ver cursos</a>
                <a className={cursosActivos.createExam}>Crear exámen</a>
                <p className={cursosActivos.team}>Matemáticas</p>
            </div>
        </>
    )
}

export default Cursos
