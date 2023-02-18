import React from 'react'
import resumeStyles from '../styles/Resume.module.css'
import Image from 'next/image'

const Resume = () => {
  return (
    <div className={resumeStyles.container} id="about">
        <div className={resumeStyles.who}>
            <div className='animate__animated animate__fadeInRight animate__slow'>
                <div className={resumeStyles.banner} >
                    Resume
                </div>
            </div>
            <div className={resumeStyles.backabout}>
            <div className='animate__animated animate__fadeInRight animate__slow'>
                EXPERIENCE
            </div>
            </div>
        </div>
        <div className={resumeStyles.aboutfont}>
        <div className='animate__animated animate__zoomIn animate__slower'>
        EXPERIENCE
            </div>
        </div>
        <div className={resumeStyles.underline}>   
        </div>
        <div className={resumeStyles.main}>
          
            <div className={resumeStyles.textcontainer}>
            <div className='animate__animated animate__fadeIn animate__slow'>
                <div className={resumeStyles.firsttext}>
                    TOLOE LOTOS HIRKAN
                </div>
                <div className={resumeStyles.secondtext}>
                    WEB DEVELOPER / APP DEVELOPER
                </div>
                <div className={resumeStyles.thirdtext}>
          Create React Native Apps
          <br/>
          Create Websites For Customers And Company
          <br/>
          Teach Junior Programmers
          <br/>
          10/4/2022 - 10/1/2023

                </div>
                </div>
             
            </div>
        </div>
    </div>
  )
}

export default Resume