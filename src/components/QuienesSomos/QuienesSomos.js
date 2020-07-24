import React from "react";
import styles from "./QuienesSomos.module.css";

const QuienesSomos = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title} id="quienes-somos">
          ¿Quiénes Somos?
        </div>
        <div className={styles.subtitle}>Nuestra Misión</div>
        <div className={styles.text}>
          Impulsar el desarrollo científico, tecnológico, social y personal,
          mediante equipos multidisciplinarios para promover el bienestar del
          ser humano.
        </div>
        <div className={styles.subtitle}>Nuestra Visión</div>
        <div className={styles.text}>
          Conjuntar esfuerzos e inspirar el cambio.
        </div>
        <div className={styles.subtitle}>Nuestros Valores</div>
        <div className={styles.text}>
          <ul>
            <li>
              Compañerismo: Relación amistosa de colaboración y solidaridad
              entre los integrantes.{" "}
            </li>
            <li>
              Respeto: Considerar y tomar en cuenta las aportaciones de los
              integrantes.
            </li>
            <li>
              Responsabilidad: Fomentar la conciencia en la repercusión de
              nuestras acciones.
            </li>
            <li>Bondad: Virtud propia del ser humano para hacer el bien.</li>
            <li>
              Interés por el conocimiento: La cualidad reflexiva del ser humano
              para entender sus causas y efectos en el universo.
            </li>
            <li>Comunicación: Saber compartir el conocimiento generado.</li>
            <li>
              Colaboración: Entendiendo que todos somos parte de un ecosistema,
              contribuimos para el crecimiento del mismo.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
