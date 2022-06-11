import contactStyle from '../styles/Contact.module.css'
import {FaPhoneAlt} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {GoLocation} from "react-icons/go"

const Contact = () => {
  return (
    <div className={contactStyle.container}>
        <div className={contactStyle.underline}>
        </div>
        <div className={contactStyle.banner}>
            GET IN TOUCH
        </div>
        <div className={contactStyle.backcontact}>
            CONTACT
        </div>
        <div className={contactStyle.contacttext}>
            CONTACT
        </div>
        <div className={contactStyle.underlineC}>

        </div>
        <div className={contactStyle.intouch}>
        LET'S KEEP IN TOUCH
        </div>
        <div className={contactStyle.lastcontainer}>
            <div className={contactStyle.number}>
                <span><FaPhoneAlt /></span>  09309113021
            </div>
            <div className={contactStyle.address}>
               <GoLocation/> GORGAN , IRAN
            </div>
            <div className={contactStyle.email}>
              <span><AiOutlineMail/></span>  S.A.S.KASHANI33@GMAIL.COM
            </div>
        </div>
        <div className={contactStyle.underlinel}>
        </div>
        <div className={contactStyle.end}>
            <p>Ali kashani | 2022</p>
        </div>
    </div>
  )
}

export default Contact