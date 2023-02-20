import React from 'react'
import worksStyles from '../styles/Works.module.css'
import Image from 'next/image'
import Slideshow from './Slideshow'

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
          
       <Slideshow />
       
        </div>
    </div>
  )
}

export default Works