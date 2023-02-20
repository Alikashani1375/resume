import factStyles from '../styles/Facts.module.css'

const Facts = () => {
  return (
    <div className={factStyles.container}>
        <div className={factStyles.banner}>
            <p>Some<br /> Facts</p>
        </div>
        <div className={factStyles.projects}>
            <div className={factStyles.hprojects}>
              10
            </div>
            <div>
            FINISHED PROJECTS
            </div>
        </div>
        <div className={factStyles.projects}>
            <div className={factStyles.hprojects}>
              1500
            </div>
            <div>
            WORKING HOURS
            </div>
        </div>
    </div>
  )
}

export default Facts