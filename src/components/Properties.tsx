
import "../styles/Properties.css";


const properties = [
  {
    id: "01",
    title: "Maximize Occupancy Rates",
    description:
      "Reach thousands of verified students, professionals, and families actively searching for accommodation every day through StayZen's growing network.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
    points: [
      "Higher Property Visibility",
      "Verified Customer Leads",
      "Instant Booking Requests",
    ],
    button: "Partner With StayZen",
  },

  {
    id: "02",
    title: "Smart Vendor Dashboard",
    description:
      "Manage bookings, occupancy, customer inquiries, and revenue from one powerful dashboard designed specifically for property owners.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200",
    points: [
      "Booking Management",
      "Revenue Analytics",
      "Real-Time Updates",
    ],
    button: "Explore Features",
    reverse: true,
  },

  {
    id: "03",
    title: "Grow Revenue Faster",
    description:
      "StayZen's marketing ecosystem helps vendors attract more customers and increase monthly revenue consistently.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
    points: [
      "Digital Marketing Support",
      "Dedicated Vendor Assistance",
      "Faster Property Discovery",
    ],
    button: "Start Growing",
  },
];

function PropertiesShowcase() {
  return (
    <section className="property-showcase" id="properties">
      <div className="showcase-header">
        <span>FEATURED BENEFITS</span>

        <h2>
          Why Property Owners
          <br />
          Choose StayZen
        </h2>

        <p>
          Empowering vendors with technology,
          visibility and growth opportunities.
        </p>
      </div>

      {properties.map((item, index) => (
        <div
          key={index}
          className={`showcase-item ${
            item.reverse ? "reverse" : ""
          }`}
        >
          <div className="showcase-image">
            <img src={item.image} alt={item.title} />

            <div className="image-badge">
              {item.id}
            </div>
          </div>

          <div className="showcase-content">
            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className="showcase-features">
              {item.points.map((point, idx) => (
                <div key={idx} className="feature">
                  ✓ {point}
                </div>
              ))}
            </div>

            <button>
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PropertiesShowcase;