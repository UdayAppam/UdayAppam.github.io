import React from 'react';
import './sidebar.css';
import { SocialIcon } from 'react-social-icons';

function Sidebar() {
  return (
    <div class="sidebar">
      <div className="sidebar-logo">
        <img src="./Uday_pic.jpg" />
      </div>
      <div className="profile-title">
        <h1>uday_appam</h1>
      </div>
      <div className="contact-list">
        <SocialIcon
          fgColor="#fff"
          url="https://www.linkedin.com/in/uday-appam-707550122/"
        />
        {/* <SocialIcon fgColor="#fff" url="https://twitter.com/AppamUday" /> */}
        <SocialIcon fgColor="#fff" url="https://github.com/UdayAppam" />
        <SocialIcon
          fgColor="#fff"
          url="https://stackoverflow.com/users/6687096/kernal-lora"
        />
        <SocialIcon
          fgColor="#fff"
          url="https://www.facebook.com/uday.krishnasvs/"
        />
      </div>
      <nav className="sidebar-nav">
        <a href="">Home</a>

        <a href="">Skills</a>

        <a href="">Experience</a>

        <a href="">Projects</a>
      </nav>
      <div className="copy-rights">
        <p>© {new Date().getFullYear()}. All rights reserved</p>
      </div>
    </div>
  );
}

export default Sidebar;
