import Head from 'next/head'
import React from 'react'
import styles from "../styles/Layout.module.css"
import About from './About'
import Contact from './Contact'
import Facts from './Facts'
import Nav from './Nav'
import Pics from './Pics'
import Resume from './Resume'
import Skills from './Skills'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>my resume</title>
        <meta name="description" content="a website about my skills" />
      </Head>
        <Nav />
        <div className={styles.container}>
            <div className={styles.pics}>
                <Pics />
            </div>
            <div className={styles.main}>
                <About />
                <Facts />
                <Skills />
                <Resume />
                <Contact />
            </div>
        </div>
    </div>
  )
}

export default Layout