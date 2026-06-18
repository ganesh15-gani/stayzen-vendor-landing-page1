import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-line"></div>

      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-brand">
          <h2>
            Stay<span>Zen</span>
          </h2>

          <p>
            Helping property owners increase occupancy,
            streamline operations, and maximize revenue
            through a modern partner ecosystem.
          </p>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#properties">Properties</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Column 3 */}
        <div className="footer-links">
          <h4>Resources</h4>

          <a href="#">Partner Guide</a>
          <a href="#">Benefits</a>
          <a href="#">Support</a>
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* Column 4 */}
        <div className="footer-links">
          <h4>Contact</h4>

          <p>support@stayzen.in</p>
          <p>+91 XXXXX XXXXX</p>
          <p>Hyderabad, India</p>

          <div className="footer-badge">
            24/7 Partner Support
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 StayZen. All Rights Reserved.
        </p>

        <p>
          Built for Modern Property Owners.
        </p>
      </div>
    </footer>
  );
}