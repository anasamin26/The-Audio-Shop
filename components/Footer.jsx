import React from "react";
import Link from "next/link";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 THE AUDIO SHOP All rights reserved</p>
      <p className="icons">
        <Link href="https://www.linkedin.com/in/anas-amin-446a24175/">
          <AiFillLinkedin />
        </Link>
        <Link href="https://github.com/anasamin26">
          <AiFillGithub />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
