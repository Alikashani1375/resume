import React, { useEffect } from 'react';
import navStyles from '../styles/Nav.module.css'
import Link from 'next/link';


const Nav = () => {


  return (
    <div className={navStyles.container}>
        <div className={navStyles.text}>
            Ali Kashani
        </div>
        <div className={navStyles.menu}>
            <div className={navStyles.fitem}>
               <a href='#about'>About</a>
            </div>
            <div className={navStyles.items}>
                <a href='#skills'>Skills</a>
            </div>
            <div className={navStyles.items}>
                <a href='#contact'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Nav