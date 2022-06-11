import skillsStyles from '../styles/Skills.module.css'
import Circle from './Circle'


const Skills = () => {
  return (
    <div className={skillsStyles.container}>
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
                        <div className={skillsStyles.Nextjs}></div>
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
                        <div className={skillsStyles.full}></div>
                    </div>   
                       
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>HTML5-CSS</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>100%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                        <div className={skillsStyles.full}></div>
                    </div>   
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>JavaScript</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>100%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                        <div className={skillsStyles.full}></div>
                    </div>   
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>Bootstrap</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>100%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                        <div className={skillsStyles.full}></div>
                    </div>   
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>Tailwind</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>100%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                        <div className={skillsStyles.full}></div>
                    </div>   
                    <div className={skillsStyles.showskills}>
                        <div className={skillsStyles.nameskill}>
                            <p>Git</p>
                        </div>
                        <div className={skillsStyles.percent}>
                            <p>80%</p>
                        </div>
                    </div>
                    <div className={skillsStyles.bgbar}>
                        <div className={skillsStyles.git}></div>
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
                        <div className={skillsStyles.redux}></div>
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
                        <div className={skillsStyles.typescript}></div>
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
                        <div className={skillsStyles.stylecomponent}></div>
                    </div>   
                    
                        
            </div>
        </div>
    </div>
  )
}

export default Skills