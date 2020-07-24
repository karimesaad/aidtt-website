import React from "react";
import styles from "./Cursos.module.css";

const Cursos = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title} id="cursos">
          Cursos
        </div>
        <div className={styles.text}>
          <ul>
            <li> Curso 1</li>
            <li> Curso 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
