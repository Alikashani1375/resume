import React from "react";
import aboutStyles from "../styles/About.module.css";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className={aboutStyles.container} id="about">
      <div className={aboutStyles.who}>
        <div className="animate__animated animate__fadeInRight animate__slow">
          <div className={aboutStyles.banner}>WHO I AM</div>
        </div>
        <div className={aboutStyles.backabout}>
          <div className="animate__animated animate__fadeInRight animate__slow">
            ABOUT
          </div>
        </div>
      </div>
      <div className={aboutStyles.aboutfont}>
        <div className="animate__animated animate__zoomIn animate__slower">
          ABOUT
        </div>
      </div>
      <div className={aboutStyles.underline}></div>
      <div className={aboutStyles.main}>
        <div className={aboutStyles.pic}>
          <div className="animate__animated animate__fadeIn animate__slow">
            <Image src="/me.jpeg" width={350} height={358} />
          </div>
        </div>
        <div className={aboutStyles.textcontainer}>
          <div className="animate__animated animate__fadeIn animate__slow">
            <div className={aboutStyles.firsttext}>Ali Kashani</div>
            <div className={aboutStyles.secondtext}>
              WEB DEVELOPER FROM IRAN
            </div>
            <div className={aboutStyles.thirdtext}>
              Self-taught front-end developer who knows how to create, design
              and modify web content. Ability to be flexible and learn fast
              during all stages of web development. Possesses strong
              interpersonal skills and is able to work well with others. By now
              searches for an awesome team to join and make the future.
            </div>
          </div>
          <div className={aboutStyles.follow}>
            <div className={aboutStyles.textfollow}>
              <div className="animate__animated animate__fadeInRight animate__slow">
                FOLLOW ME ON
              </div>
            </div>
            <div className={aboutStyles.insta}>
              <a href="https://www.instagram.com/alikashani___/">
                <div className="animate__animated animate__fadeInRight animate__slow">
                  <span>
                    {" "}
                    <FaInstagram />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
