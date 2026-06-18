import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../styles/Faq.css";

const faqData = [
  {
    question: "How long does onboarding take?",
    answer:
      "Most properties are onboarded within 24–48 hours after successful verification and approval.",
  },
  {
    question: "Are there any registration fees?",
    answer:
      "StayZen offers transparent pricing with no hidden charges. Our team will guide you through all available plans.",
  },
  {
    question: "Can I manage multiple properties?",
    answer:
      "Yes. You can manage multiple PGs, hostels, coliving spaces, and apartments from a single partner account.",
  },
  {
    question: "How do I receive bookings?",
    answer:
      "Bookings, inquiries, and leads are delivered directly through the StayZen partner dashboard.",
  },
  {
    question: "Do you provide partner support?",
    answer:
      "Absolutely. Our dedicated partner support team is available throughout onboarding and daily operations.",
  },
  {
    question: "What property types can join StayZen?",
    answer:
      "PGs, Hostels, Coliving Spaces, Rental Apartments, Student Housing, and other accommodation providers can join.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        {/* Left Side */}
        <motion.div
          className="faq-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="faq-badge">
            Frequently Asked Questions
          </span>

          <h2>
            Everything You Need To Know About
            <span> StayZen Partnership</span>
          </h2>

          <p>
            Learn how StayZen helps property owners increase
            occupancy, streamline operations, and grow revenue
            through a powerful partner ecosystem.
          </p>

          <div className="faq-stats">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Partner Properties</p>
            </div>

            <div className="stat-card">
              <h3>95%</h3>
              <p>Partner Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="faq-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {faqData.map((faq, index) => (
            <div
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                {activeIndex === index ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}