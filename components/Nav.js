import React, { useEffect } from "react";
import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={navStyles.container}>
      <div className={navStyles.text}>Ali Kashani</div>
      <div className={navStyles.menu}>
        <a href="#about" className={navStyles.fitem}>
          <div>About</div>
        </a>
        <a href="#skills" className={navStyles.items}>
          <div>Skills</div>
        </a>
        <a href="#contact" className={navStyles.items}>
          <div>Contact</div>
        </a>
      </div>
    </div>
  );
};

export default Nav;
