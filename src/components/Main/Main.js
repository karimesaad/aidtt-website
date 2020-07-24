import React from "react";
import styles from "./Main.module.css";
import arrowDown from "../../images/arrow-down.svg";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <h1>AIDTT</h1>
        <p>
          Asociación para la Investigación, Desarrollo, y Transferencia de
          Tecnología
        </p>
      </div>
    </main>
  );
};

export default Main;
