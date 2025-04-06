import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";
import Logo from "../../../assets/Icons/DevGroup.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <Link to="/contact">
              <button className='btn5'>Contact Us Today</button>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          {/* Column 1 - Logo & Newsletter */}
          <div className='box'>
            <div className='logo'>
              <img src={Logo} alt='DevGroup Logo' />
              <h2>Need Help With Anything?</h2>
              <p>Receive updates, hot deals, and more directly to your inbox.</p>
              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className='box'>
            <h3>{footer[0].title}</h3>
            <ul>
              {footer[0].text.map((item, i) => {
                console.log("item", item);
                return (
                  <li key={i}>
                    <Link to={item.path}>
                      {item.list}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className='box contact-info'>
            <h3>Contact Info</h3>
            <ul>
              <li>
                <FaMapMarkerAlt /> &nbsp; Shop no.-24,New Vijaya Bhuvan Society, Dadiseth Road,S V Road,Malad(w),Mumbai-64
              </li>
              <li>
                <FaEnvelope /> &nbsp; devgroup2211@gmail.com
              </li>
              <li>
                <FaPhoneAlt /> &nbsp; +91 9876543210
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className='box social'>
            <h3>Follow Us</h3>
            <div className='social-icons'>
              <a href='https://facebook.com' target='_blank' rel='noreferrer'><FaFacebookF /></a>
              <a href='https://instagram.com' target='_blank' rel='noreferrer'><FaInstagram /></a>
              <a href='https://linkedin.com' target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
              <a href='https://youtube.com' target='_blank' rel='noreferrer'><FaYoutube /></a>
              <a href='https://twitter.com' target='_blank' rel='noreferrer'><FaTwitter /></a>
            </div>
          </div>
        </div>
      </footer>

      <div className='legal'>
        <span>© 2025 DevGroup. Designed By AKASH MISHRA.</span>
      </div>
    </>
  );
};

export default Footer;
