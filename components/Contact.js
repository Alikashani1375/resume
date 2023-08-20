import contactStyle from "../styles/Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useState, useEffect } from "react";
const Contact = () => {
  const [show, setShow] = useState(false);

  useEffect(function changebg() {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 1150) {
        setShow(true);
      }
    });
  });
  //   {show ? (<></>):(<></>)}
  return (
    <div id="contact">
      <div id={contactStyle.container}>
        <div id={contactStyle.underline}></div>
        {show ? (
          <>
            <div
              id={contactStyle.banner}
              className="animate__animated animate__fadeInRight animate__slow"
            >
              GET IN TOUCH
            </div>
          </>
        ) : (
          <>
            <div id={contactStyle.banner}>GET IN TOUCH</div>
          </>
        )}
        {show ? (
          <>
            <div
              id={contactStyle.backcontact}
              className="animate__animated animate__fadeIn animate__slow"
            >
              CONTACT
            </div>
          </>
        ) : (
          <>
            <div id={contactStyle.backcontact}>CONTACT</div>
          </>
        )}
        {show ? (
          <>
            <div
              id={contactStyle.contacttext}
              className="animate__animated animate__zoomIn animate__slower"
            >
              CONTACT
            </div>
          </>
        ) : (
          <>
            <div id={contactStyle.contacttext}>CONTACT</div>
          </>
        )}

        <div id={contactStyle.underlineC}></div>
        <div id={contactStyle.intouch}>LET'S KEEP IN TOUCH</div>
        <div id={contactStyle.lastcontainer}>
          <div id={contactStyle.number}>
            <span>
              <FaPhoneAlt />
            </span>{" "}
            09309113021
          </div>
          <div id={contactStyle.address}>
            <GoLocation /> GORGAN , IRAN
          </div>
          <div id={contactStyle.email}>
            <span>
              <AiOutlineMail />
            </span>{" "}
            S.A.S.KASHANI33@GMAIL.COM
          </div>
        </div>
        <div id={contactStyle.underlinel}></div>
      </div>
      <div id={contactStyle.end}>
        <p>Ali kashani | 2022</p>
      </div>
    </div>
  );
};

export default Contact;
