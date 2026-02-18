// src/components/footer/Footer.tsx

import React from "react";
import "./Footer.scss";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaReact,
  FaReddit,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/sairamgottipati"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:sairamgottipati2001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail />
          </a>

          <a
            href="https://github.com/sairam-gottipati"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sairam-gottipati/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/@sairamgottipati"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.reddit.com/user/No-Letterhead-4868/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReddit />
          </a>
        </div>
        <p>Sai Ram Gottipati's Portfolio.</p>

        <p className="tech-used">
          🛠 Built with React 19, confetti, Vite, TypeScript, EmailJS, SCSS, and
          GitHub Pages
        </p>

        <p className="copy-right">
          © 2026 All rights reserved. Designed and Developed By <FaReact />{" "}
          React , TypeScript and SCSS
        </p>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
