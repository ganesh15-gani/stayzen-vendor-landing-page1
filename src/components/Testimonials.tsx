import "../styles/Testimonials.css";

import vendor1 from "../assets/vendor1.jpeg";
import vendor2 from "../assets/vendor2.jpg";
import vendor3 from "../assets/vendor3.jpg";

const testimonials = [
  {
    image: vendor1,
    name: "Ganesh",
    role: "PG Owner • Hyderabad",
    review:
      "StayZen helped us increase occupancy from 65% to 95%. The platform consistently brings quality leads and bookings.",
  },

  {
    image: vendor2,
    name: "Nivas",
    role: "Property Partner • Bengaluru",
    review:
      "Managing bookings became effortless. The dashboard is simple, powerful and saves us hours every week.",
  },

  {
    image: vendor3,
    name: "Jay Vardhan",
    role: "Hostel Owner • Chennai",
    review:
      "Within a few months our enquiries tripled. StayZen has become a key part of our business growth.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">

      <div className="testimonial-header">
        <span>TESTIMONIALS</span>

        <h2>
          Trusted By Property Owners
          Across India
        </h2>

        <p>
          Real stories from vendors who transformed
          their business with StayZen.
        </p>
      </div>

      <div className="testimonial-slider">

        <div className="testimonial-track">

          {testimonials.map(
            (item, index) => (
              <div
                className="testimonial-card"
                key={index}
              >
                <div className="stars">
                  ★★★★★
                </div>

                <p className="review">
                  "{item.review}"
                </p>

                <div className="user">
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;