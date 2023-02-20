import React from 'react'
import worksStyles from '../styles/Works.module.css'
import Image from 'next/image'

const Works = () => {
  
  return (
    <div className={worksStyles.container} id="about">
        <div className={worksStyles.who}>
            <div className='animate__animated animate__fadeInRight animate__slow'>
                <div className={worksStyles.banner} >
                    Works
                </div>
            </div>
            <div className={worksStyles.backabout}>
            <div className='animate__animated animate__fadeInRight animate__slow'>
                Works
            </div>
            </div>
        </div>
        <div className={worksStyles.aboutfont}>
        <div className='animate__animated animate__zoomIn animate__slower'>
        Works
            </div>
        </div>
        <div className={worksStyles.underline}>   
        </div>
        <div className={worksStyles.main}>
          
            <div className={worksStyles.textcontainer}>
            <div className='animate__animated animate__fadeIn animate__slow'>
                <div className={worksStyles.firsttext}>
                    TOLOE LOTOS HIRKAN
                </div>
                <div className={worksStyles.secondtext}>
                    WEB DEVELOPER / APP DEVELOPER
                </div>
                <div className={worksStyles.thirdtext}>
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

export default Works