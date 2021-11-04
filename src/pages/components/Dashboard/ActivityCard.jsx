import React from 'react';
import { Button } from 'react-bootstrap';
import ActivityCardStyles from '../../../styles/activitycard.module.scss';

const ActivityCard = () => {
  return (
    <>
      <div className={ActivityCardStyles.activityCard}>
        <div className={ActivityCardStyles.header1}>
          <span>Actividad 1</span>
          <span>Matemáticas</span>
        </div>
        <div className={ActivityCardStyles.metadata}>
          <p>
            <span>Fecha de publicación:</span> 26/09/2021
          </p>
          <p>
            <span>Subido por:</span> Dr. Profesor Patricio
          </p>
        </div>
        <h3>Multiplicaciones y divisiones dentro de integrales definidas</h3>
        <p className={ActivityCardStyles.contend}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
          sodales leo. Morbi eget ullamcorper urna, eu vulputate ex. Etiam
          vestibulum nisi in libero pellentesque feugiat. Suspendisse pretium
          magna eget erat accumsan, vel rhoncus purus convallis. Proin aliquet
          interdum fermentum. Vivamus at lacus velit. Vivamus sed massa sapien.
          Curabitur suscipit dictum ex ut eleifend. In malesuada tristique
          augue, id sollicitudin diam interdum a. Mauris vel nisl a ex aliquam
          efficitur. Maecenas non egestas mi, nec dictum eros. Nulla a auctor
          ante. Nam sed tortor risus. Donec id lectus vitae tortor porttitor
          finibus. Vivamus ligula sem, ultricies sed leo nec, bibendum accumsan
          nulla. Aliquam erat volutpat. Etiam vitae ultricies mauris, sed
          facilisis eros. Nulla a leo eget felis egestas scelerisque. Ut at
          massa tristique, mattis quam in, consequat massa. Duis et ligula et
          quam vehicula rhoncus. Nulla rhoncus quam vel augue congue gravida.
          Integer congue fermentum ante et fermentum. Curabitur laoreet nulla
          risus.
        </p>
        <a className={ActivityCardStyles.showfile}>Mostrar file.pdf</a>

        <Button className={ActivityCardStyles.btn} variant="dark">
          Subir actividad
        </Button>
      </div>
    </>
  );
};

export default ActivityCard;
