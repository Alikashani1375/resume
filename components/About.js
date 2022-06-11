import React from 'react'
import aboutStyles from '../styles/About.module.css'
import Image from 'next/image'
import {FaInstagram} from "react-icons/fa"

const About = () => {
  return (
    <div className={aboutStyles.container} id="#about">
        <div className={aboutStyles.who}>
            <div className={aboutStyles.banner}>
                WHO I AM
            </div>
            <div className={aboutStyles.backabout}>
                ABOUT
            </div>
        </div>
        <div className={aboutStyles.aboutfont}>
            ABOUT
        </div>
        <div className={aboutStyles.underline}>   
        </div>
        <div className={aboutStyles.main}>
            <div className={aboutStyles.pic}>
                <Image src='/me.jpeg' width={350} height={358} />
            </div>
            <div className={aboutStyles.textcontainer}>
                <div className={aboutStyles.firsttext}>
                    Ali Kashani
                </div>
                <div className={aboutStyles.secondtext}>
                WEB DEVELOPER FROM IRAN
                </div>
                <div className={aboutStyles.thirdtext}>
                    hello im ali, this page is about my skills
                </div>
                <div className={aboutStyles.follow}>
                    <div className={aboutStyles.textfollow}>
                    FOLLOW ME ON
                    </div>
                    <div className={aboutStyles.insta}>
                        <a href='https://www.instagram.com/kashaniali_/'>
                            <span> <FaInstagram /></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About