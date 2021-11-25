import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./FooterLastPart.css";

const FooterLastPart = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center  ">
      <div className="copyRightAlert">
        <h6>©2020 BiCycle-Master . All Rights Reserved</h6>
      </div>
      <div className="socialLinks">
        <a
          href="https://www.facebook.com/MinhajSadik13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>

        <a href="https://twitter.com/MinhajSadik1" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>

        <a href="https://www.youtube.com/" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutubeSquare} />
        </a>
      </div>
    </div>
  );
};

export default FooterLastPart;
