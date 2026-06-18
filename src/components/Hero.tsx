import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/Hero.css";

function Hero() {
  const [properties, setProperties] = useState(0);
  const [bookings, setBookings] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    let p = 0;
    let b = 0;
    let c = 0;

    const interval = setInterval(() => {
      if (p < 500) p += 5;
      if (b < 50000) b += 500;
      if (c < 10000) c += 100;

      setProperties(Math.min(p, 500));
      setBookings(Math.min(b, 50000));
      setClients(Math.min(c, 10000));

      if (p >= 500 && b >= 50000 && c >= 10000) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">

        {/* LEFT CONTENT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">
            🚀 India's Fast Growing PG Partner Network
          </span>

          <h1>
            Grow Your Property
            <span> With StayZen</span>
          </h1>

          <p>
            Join hundreds of property owners already
            partnering with StayZen. Increase occupancy,
            streamline operations, and maximize revenue
            with our smart property management platform.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Enroll Now
            </button>

            <button className="secondary-btn">
              Watch Demo
            </button>
          </div>

          {/* STATS */}

          <div className="hero-stats">

            <div className="stat-card">
              <h3>{properties}+</h3>
              <p>Properties</p>
            </div>

            <div className="stat-card">
              <h3>{bookings.toLocaleString()}+</h3>
              <p>Bookings</p>
            </div>

            <div className="stat-card">
              <h3>{clients.toLocaleString()}+</h3>
              <p>Clients</p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200"
            alt="StayZen Property"
          />

          <div className="floating-card top-card">
            ⭐ 4.9 Vendor Rating
          </div>

          <div className="floating-card bottom-card">
            🏠 500+ Active Properties
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;