import React from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer " id="footer">
      <div className="containerfooter">
        <div className="footer-section links">
          <h3 className="footer-heading">Links</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <Link className="footer-link">Home</Link>
            </li>
            <li className="footer-item">
              <Link href="/aboutus" className="footer-link">
                About
              </Link>
            </li>

            <li className="footer-item">
              <Link href="/products" className="footer-link">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3 className="footer-heading">Contact Info</h3>
          <p className="footer-text">
            123 Main Street
            <br />
            Lahore, LHR 10001
            <br />
            (+92)322 8046811
            <br />
            anasamin26@gmail.com
          </p>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/anas-amin-446a24175/"
              className="footer-icon"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/anasamin26" className="footer-icon">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className=" copy">
          <p className="ftext">
            &copy; {`2023 The Audio Shop. All Rights Reserved.`}
          </p>
        </div>
      </div>
    </footer>

    // <div className="footer-container">
    //   <p>2023 THE AUDIO SHOP All rights reserved</p>
    //   <p className="icons">
    //     <Link href="https://www.linkedin.com/in/anas-amin-446a24175/">
    //       <AiFillLinkedin />
    //     </Link>
    //     <Link href="https://github.com/anasamin26">
    //       <AiFillGithub />
    //     </Link>
    //   </p>
    // </div>
  );
};

export default Footer;
