import React from 'react'
import Dstyles from '../../styles/incentivos.module.scss'

const Incentivos = () => {
    return (
        <div className={Dstyles.contIncentivos}>
            <h2 className={Dstyles.hdos}>Tu plataforma educativa de <b>refuerzo</b></h2>
            <section className={Dstyles.informacion}>
                <article className={Dstyles.article}>
                    <p className={Dstyles.intro}>Conoce mas sobre el proyecto Avocados</p>
                    <hr />
                    <img src="https://cdn0.iconfinder.com/data/icons/elementary-school-solid-education-is-growth/512/Glass_flask-256.png" alt="Labs" />
                </article>
                <article className={Dstyles.article}>
                    <p className={Dstyles.intro}>Pagina diseñada para combatir el retraso educativo</p>
                    <hr />
                    <img src="https://cdn0.iconfinder.com/data/icons/elementary-school-solid-education-is-growth/512/Stationery_compass-256.png" alt="Study" />
                </article>
                <article className={Dstyles.article}>
                    <p className={Dstyles.intro}>Especialistas en niños de 6 a 12 años</p>
                    <hr />
                    <img src="https://cdn0.iconfinder.com/data/icons/elementary-school-solid-education-is-growth/512/Locker-256.png" alt="Books" />
                </article>
            </section>
        </div>
    )
}

export default Incentivos
