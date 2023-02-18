import skillsStyles from '../styles/Skills.module.css'
import Circle from './Circle'
import 'animate.css';
import { useState,useEffect } from 'react';

const Skills = () => {

const [show ,setShow] = useState(false)

useEffect(function changebg() {
    window.addEventListener("scroll", (event)=>{
       if(  window.scrollY > 650 ){
       setShow(true);
       }
    });
  });

  return (
    <div className={skillsStyles.container} id="skills">
        <div className={skillsStyles.underline}>
        </div>
        <div className={skillsStyles.banner}>
             ATTAINMENTS
        </div>
        <div className={skillsStyles.backskill}>
            SKILLS
        </div>
        <div className={skillsStyles.skillsfont}>
            SKILLS
        </div>
        <div className={skillsStyles.underlineS}>

        </div>
        <div className={skillsStyles.lastcontainer}>
            <div className={skillsStyles.frontend}>
                <Circle />
            </div>
            <div className={skillsStyles.main}>      

                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>Next.js</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>90%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                        {show ? (<><div className={skillsStyles.animate90}></div>
                        <div id={skillsStyles.Nextjs} className="wow animate__animated animate__slideInLeft animate__slow" ></div>   </>):(<></>)}
                                        
                    </div>         
                    
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>React.js</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>100%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                    {show ? (<><div className={skillsStyles.animatefull}></div>
                        <div id={skillsStyles.full} className="wow animate__animated animate__slideInLeft animate__slow"></div></>):(<></>)}
                    </div>   
                       
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>Node-Js</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>80%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                    {show ? (<><div className={skillsStyles.animate80}></div>
                        <div id={skillsStyles.nodejs} className="wow animate__animated animate__slideInLeft animate__slow"></div></>):(<></>)}
                        
                    </div>   
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>React-Native</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>60%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                    {show ? (<> <div className={skillsStyles.animate60}></div>
                        <div id={skillsStyles.reactnative} className="wow animate__animated animate__slideInLeft animate__slow"></div></>):(<></>)}
                       
                    </div>   
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>Bootstrap , Tailwind</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>100%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                    {show ? (<><div className={skillsStyles.animatefull}></div>
                        <div id={skillsStyles.full} className="wow animate__animated animate__slideInLeft animate__slow"></div></>):(<></>)}
                    
                    </div>   
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>Jquery</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>100%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                    {show ? (<> <div className={skillsStyles.animatefull}></div>
                        <div id={skillsStyles.full} className="wow animate__animated animate__slideInLeft animate__slow"></div></>):(<></>)}
                       
                    </div>   
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>Html,Css,JavaScript</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>100%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                    {show ? (<><div className={skillsStyles.animatefull}></div>
                        <div id={skillsStyles.full} className="wow animate__animated animate__slideInLeft animate__slow"></div></>):(<></>)}
                        
                    </div>   
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>Redux</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>90%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                    {show ? (<><div className={skillsStyles.animate90}></div>
                        <div id={skillsStyles.full} className="wow animate__animated animate__slideInLeft animate__slow"></div></>):(<></>)}
                        
                    </div>   
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>TypeScript</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>50%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                    {show ? (<><div className={skillsStyles.animate50}></div>
                        <div id={skillsStyles.typescript} className="wow animate__animated animate__slideInLeft animate__slow"></div></>):(<></>)}
                        
                    </div>   
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>Style-Components</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>70%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                    {show ? (<><div className={skillsStyles.animate70}></div>
                        <div id={skillsStyles.stylecomponent}  className="wow animate__animated animate__slideInLeft animate__slow"></div></>):(<></>)}
                        
                    </div>   
                    
                        
            </div>
        </div>
    </div>
  )
}

export default Skills