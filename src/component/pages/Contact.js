import React from 'react'
import './style/contact.css';

const Contact = () => {
  return (
    <div className='container'>
      <div className="whole-contaner">
        <h2 className="common-heading">Contact page</h2>
        <div className="">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1102.0987181330252!2d90.41031654267675!3d24.03610260608182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755db1f5ef2c94b%3A0xe80a8378c1f15f1c!2sSPCBL%20Officers%E2%80%99%20Quarter!5e1!3m2!1sen!2sbd!4v1680357925681!5m2!1sen!2sbd" 
              width="100%" 
              height="280" 
              // style="border:0;"
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="message-section"></div>
        </div>

        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeqdgwnq"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" className='simlr-btn' value="send" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
