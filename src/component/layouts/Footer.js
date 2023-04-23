import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './footer.css';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className="get-start">
        <div className="get-start-text">
          <h3>Ready to get started?</h3>
          <h3>Talk to us today</h3>
        </div>
        <button className="get-start-btn simlr-btn">
          <NavLink to="/" className="start-link"> Get Started </NavLink>
        </button>
      </div>

      <footer>
        <div className="footer-about">
          <div className="footer-text">
            <h3>Mohammad Umair(Omor)</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore facilis deleniti fugiat?</p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" name="email" placeholder="Enter Your E-mail" />
              <button type='submit' className='simlr-btn footer-btn'>subscribe</button>
            </form>
          </div>
          <div className="footer-social">
            <h3>follow us</h3>
            <div className="social-icons">
              <div><Link to="https://www.facbook.com" target="_blank"><FaFacebook className="icons" /></Link></div>
              <div><Link to="https://www.instagram.com" target="_blank"><FaInstagram className="icons" /></Link></div>
              <div><Link to="https://www.youtube.com" target="_blank"><FaYoutube className="icons" /></Link></div>
              <div><Link to="https://www.twitter.com" target="_blank"><FaTwitter className="icons" /></Link></div>
            </div>
          </div>
          <div className="footer-call">
            <h3>Call Us</h3>
            <h3 className='numb'>+088 12345678978</h3>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p>@{new Date().getFullYear()} Mohammad Umair(Omor). All Rights Reserved</p>
          <div className='footer-last'>
            <p>privicy policy</p>
            <p>terms & conditions</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
