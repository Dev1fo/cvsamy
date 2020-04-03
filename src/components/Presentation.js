import React from "react";
import docImg from "../docImg/photo-mini.png";
const Presentation = () => {
  return (
    <div id="left_col">
      <div className="profile_frame">
        <div className="profile_picture">
          <img src={docImg} alt="profile" height="280px" />
        </div>
      </div>
      <div className="hello_content">
        <h2>Salut!</h2>
        <p>
          Autodidacte et passionné, disponible, réactif, professionnel, j’aime
          être au service de mes clients pour la réussite de leur projet.{" "}
        </p>
      </div>
      <div className="contact_details_content">
        <h2>Contact details</h2>
        <p className="purple">Phone:</p>
        <p>+33 6 03 23 68 69</p>
        <p className="purple">Email:</p>
        <p>samy.liani@gmail.com</p>
        <p className="purple">Adress:</p>
        <p>7 avenue Georges Clemenceau</p>
        <p>Massy, France</p>
        <p>91300</p>
      </div>
      <a href="mailto:samy.liani@gmail.com" className="send_message_button">
        <span className="cut1"></span>
        <span className="cut2"></span>
        <span className="content">
          Me contacter <span className="fontawesome-double-angle-right"></span>
        </span>
      </a>
      <div className="get_social_content">
        <h2>Get social</h2>
        <ul className="social_icons horizontal_list">
          <li>
            <a className="facebook" href="https://www.facebook.com/metrosix">
              <span className="entypo-facebook-circled"></span>
              <span className="invisible">Facebook</span>
            </a>
          </li>

          <li>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/samy-liani-96172214a/"
            >
              <span className="entypo-linkedin-circled"></span>
              <span className="invisible">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Presentation;
