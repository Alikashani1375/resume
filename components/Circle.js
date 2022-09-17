import circleStyle from '../styles/Circle.module.css'


const Circle = () => {
  return (
    <div className={circleStyle.box}>
        <div className={circleStyle.percent}>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle  cx="70" cy="70" r="70"></circle>
            </svg>
        <div className={circleStyle.number}>
            <h2>90<span>%</span></h2>
        </div>
        </div>
        <h2 className={circleStyle.text}>FRONT-END WEB <br />DEVELOPMENT</h2>
    </div>
  )
}

export default Circle