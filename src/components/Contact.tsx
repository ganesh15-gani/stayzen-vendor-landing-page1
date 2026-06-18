import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeadset,
} from "react-icons/fa";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-overlay"></div>

      <div className="contact-container">
        {/* Left Side */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="contact-badge">
            Let's Grow Together
          </span>

          <h2>
            Become a <span>StayZen Partner</span>
          </h2>

          <p>
            Join StayZen and unlock higher occupancy,
            better visibility, seamless property
            management, and dedicated partner support.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>support@stayzen.in</p>
              </div>
            </div>

            <div className="contact-card">
              <FaPhoneAlt />
              <div>
                <h4>Phone</h4>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>Hyderabad, India</p>
              </div>
            </div>

            <div className="contact-card">
              <FaHeadset />
              <div>
                <h4>Support</h4>
                <p>24/7 Partner Assistance</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <form className="contact-form">
  <h3>Let's Connect</h3>

  <p>
    Tell us about your property and our team
    will get back to you shortly.
  </p>

  <input type="text" placeholder="Your Name" />
  <input type="tel" placeholder="Phone Number" />
  <textarea placeholder="Tell us about your property"></textarea>

  <button type="submit">
    Become a Partner
  </button>
</form>
        </motion.div>
      </div>
    </section>
  );
}