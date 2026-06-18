import { motion } from "framer-motion";
import "../styles/AboutPartner.css";

function AboutPartner() {
  return (
    <section className="partner-section">

      <div className="partner-container">

        <motion.div
          className="partner-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200"
            alt="StayZen Property"
          />
        </motion.div>

        <motion.div
          className="partner-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">
            Why StayZen
          </span>

          <h2>
            Partner With StayZen &
            Grow Faster
          </h2>

          <p>
            Join a trusted platform helping
            property owners increase occupancy,
            simplify operations and attract
            verified tenants across India.
          </p>

          <div className="benefits">

            <div className="benefit">
              ✅ More Bookings
            </div>

            <div className="benefit">
              ✅ Higher Revenue
            </div>

            <div className="benefit">
              ✅ Verified Tenants
            </div>

            <div className="benefit">
              ✅ Smart Management
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default AboutPartner;