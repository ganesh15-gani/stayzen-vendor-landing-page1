import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaPlay,
  FaBuilding,
  FaUsers,
  FaCalendarCheck,
} from "react-icons/fa";
import "../styles/Hero.css";

const images = [
  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [properties, setProperties] = useState(0);
  const [bookings, setBookings] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(slider);
  }, []);

  useEffect(() => {
    let p = 0;
    let b = 0;
    let c = 0;

    const counter = setInterval(() => {
      if (p < 500) p += 5;
      if (b < 50000) b += 500;
      if (c < 10000) c += 100;

      setProperties(Math.min(p, 500));
      setBookings(Math.min(b, 50000));
      setClients(Math.min(c, 10000));

      if (p >= 500 && b >= 50000 && c >= 10000) {
        clearInterval(counter);
      }
    }, 20);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="hero-content">
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
            Join hundreds of property owners across India.
            Increase occupancy, automate bookings and maximize
            revenue through StayZen's smart property ecosystem.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Enroll Property
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              <FaPlay />
              Watch Demo
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <FaBuilding />
              <h3>{properties}+</h3>
              <p>Properties</p>
            </div>

            <div className="stat-card">
              <FaCalendarCheck />
              <h3>{bookings.toLocaleString()}+</h3>
              <p>Bookings</p>
            </div>

            <div className="stat-card">
              <FaUsers />
              <h3>{clients.toLocaleString()}+</h3>
              <p>Clients</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-stack">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="StayZen Property"
                className="main-image"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              />
            </AnimatePresence>

            <img
              className="small-image top-image"
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
              alt=""
            />

            <img
              className="small-image bottom-image"
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800"
              alt=""
            />

            <div className="floating-card rating-card">
              ⭐ 4.9 Vendor Rating
            </div>

            <div className="floating-card booking-card">
              🔥 1200+ Monthly Bookings
            </div>

            <div className="floating-card revenue-card">
              📈 +35% Revenue Growth
            </div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}

export default Hero;