import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

function Footer () {
  return (
    <div className="footer">
      <link rel="insta_icon" href="%PUBLIC_URL%/glyph-logo_May2016.png" />
      <a href="https://www.instagram.com/the_kindness_journal" className="instagram">
      <FontAwesomeIcon icon={faInstagram} size="2x" /></a>
      <a href="https://www.twitter.com/kindnessjrnl" className="twitter">
      <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
    </div>
  );
}

export default Footer;