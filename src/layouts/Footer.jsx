import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/logo/Logo";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_logo">
            <Link to="/">
              <Logo logoColor="#f2f2f2" />
            </Link>
          </div>
          <div className="footer_links">
            <h5>Pages</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/students">All Students</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/">Terms & Condititons</Link>
              </li>
            </ul>
          </div>
          <div className="footer_btn">
            <div className="social_icon">
              <Link to="https://www.facebook.com" target="_blank">
                <FaFacebookF className="icon" />
              </Link>
            </div>
            <div className="social_icon">
              <Link to="https://www.linkedin.com" target="_blank">
                <FaLinkedinIn className="icon" />
              </Link>
            </div>
            <div className="social_icon">
              <Link to="https://www.instagram.com" target="_blank">
                <FaInstagram className="icon" />
              </Link>
            </div>
            <div className="social_icon">
              <Link to="https://www.x.com" target="_blank">
                <FaTwitter className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
