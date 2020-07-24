import React from "react";
import styles from "./Header.module.css";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo} onClick={() => scroll.scrollToTop()}>
        AIDTT
      </div>
      <div className={styles.links}>
        <Link
          className={styles.menuItem}
          to="quienes-somos"
          smooth={true}
          duration={1000}
          offset={-100}
        >
          Quiénes Somos
        </Link>
        <Link
          className={styles.menuItem}
          to="cursos"
          smooth={true}
          duration={1000}
          offset={-100}
        >
          Cursos
        </Link>
        <Link
          className={styles.menuItem}
          to="contacto"
          smooth={true}
          duration={1000}
          offset={-100}
        >
          Contacto
        </Link>
      </div>
    </header>
  );
};

export default Header;
