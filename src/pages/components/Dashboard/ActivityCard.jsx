import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ActivityCardStyles from '../../../styles/activitycard.module.scss';
import axios from 'axios';
import Link from 'next/link';

const ActivityCard = ({ item, setonAdd, onAdd }) => {
  let date = new Date(item.createdAt);
  let PostDate = `${date.getMonth()} / ${date.getDate()} / ${date.getFullYear()}`;

  return (
    <>
      <div className={ActivityCardStyles.activityCard}>
        <div className={ActivityCardStyles.activityCardHeader}>
          <div className={ActivityCardStyles.activityCardHeaderCont}>
            <Button variant="dark">Edit</Button>
            <Button
              onClick={async () => {
                let resfile = await axios.delete(`/api/file/${item._id}`, {
                  data: {
                    filePath: item.file,
                  },
                });
                let data = resfile.data;
                // console.log('onAdd antes: ', onAdd);
                setonAdd(!onAdd);
                // console.log('onAdd despues: ', onAdd);
              }}
              variant="danger"
            >
              Delete
            </Button>
          </div>
        </div>
        <div className={ActivityCardStyles.header1}>
          <span>{`Actividad ${item.activityNum}`}</span>
          <span>{item.CoursData.courseName}</span>
        </div>
        <div className={ActivityCardStyles.metadata}>
          <p>
            <span>Fecha de publicación:</span>
            {PostDate}
          </p>
          <p>
            <span>Subido por:</span>{' '}
            {`${item.userDatas.name} ${item.userDatas.lastname}`}
          </p>
        </div>
        <h3>{item.postTitle}</h3>
        <p className={ActivityCardStyles.contend}>{item.content}</p>
        <p className={ActivityCardStyles.ext}>Material Extra </p>
        {item.extraResource.length > 0 ? (
          item.extraResource.map((link, key) => (
            <div key={key} className={ActivityCardStyles.ExtraLinks}>
              <Link target="_blank" href={link}>
                <div className={ActivityCardStyles.ExtraLinksCard}>
                  <p
                    className={ActivityCardStyles.ExtraLinksCardTitle}
                  >{`Material Extra ${key + 1}`}</p>
                  <p
                    className={ActivityCardStyles.ExtraLinksCardDescription}
                  >{`Material de clase con el que te podras apoyar visita: ${link}`}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No hay materia extra</p>
        )}
        <div className={ActivityCardStyles.footerAct}>
          <a className={ActivityCardStyles.showfile} href={item.file} download>
            Click para descargar documento
          </a>

          <Button className={ActivityCardStyles.btn} variant="dark">
            Subir actividad
          </Button>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
