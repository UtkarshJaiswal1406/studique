import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      
      <div className="logo">
        <span className="logo-purple">Stud</span>
        <span className="logo-orange">ique</span>
      </div>

      <p className="created-with">
        Created with <span className="heart">❤️</span>
      </p>

      <div className="social">
        <h4 className="join-us">Join us on</h4>
        <div className="social-icons">
         
          <div className="icon">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
            />
          </div>
          
          <div className="icon">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
