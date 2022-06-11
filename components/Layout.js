import React from 'react'
import styles from "../styles/Layout.module.css"
import About from './About'
import Contact from './Contact'
import Facts from './Facts'
import Nav from './Nav'
import Pics from './Pics'
import Skills from './Skills'

const Layout = ({children}) => {
  return (
    <div>
        <Nav />
        <div className={styles.container}>
            <div className={styles.pics}>
                <Pics />
            </div>
            <div className={styles.main}>
                <About />
                <Facts />
                <Skills />
                <Contact />
            </div>
        </div>
    </div>
  )
}

export default Layout