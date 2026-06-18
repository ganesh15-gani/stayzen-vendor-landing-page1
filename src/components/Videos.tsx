import "../styles/Videos.css";

import vendor1 from "../assets/vendor1.mp4";
import vendor2 from "../assets/vendor2.mp4";
import vendor3 from "../assets/vendor3.mp4";

const videos = [
  {
    title: "Get More Bookings With Stayzen",
    description:
      "Showcase your property to thousands of verified students and working professionals through StayZen.",
    badge: "500+ Properties",
    video: vendor1,
    reverse: false,
  },

  {
    title: "Smart Property Management",
    description:
      "Attract quality tenants, reduce Vacancies and maximize property performance with Stayzen.",
    badge: "95% Occupancy",
    video: vendor2,
    reverse: true,
  },

  {
    title: "Drive Consistent Growth",
    description:
      "Increase bookings and monthly revenue with StayZen's powerful marketing and vendor support ecosystem.",
    badge: "50K+ Bookings",
    video: vendor3,
    reverse: false,
  },
];

function Videos() {
  return (
    <section className="videos-section" id="videos">

      <div className="videos-header">
        <span>SUCCESS STORIES</span>

        <h2>
          See How StayZen
          Helps Vendors Grow
        </h2>

        <p>
          From better visibility to higher occupancy,
          StayZen empowers property owners to
          achieve consistent growth.
        </p>
      </div>

      {videos.map((item, index) => (
        <div
          key={index}
          className={`video-showcase ${
            item.reverse ? "reverse" : ""
          }`}
        >

          <div className="video-content">

            <div className="small-title">
              Vendor Success
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className="video-stats">

              <div className="stat-card">
                <h4>500+</h4>
                <span>Properties</span>
              </div>

              <div className="stat-card">
                <h4>95%</h4>
                <span>Occupancy</span>
              </div>

              <div className="stat-card">
                <h4>50K+</h4>
                <span>Bookings</span>
              </div>

            </div>

            <button>
              Become A Partner
            </button>

          </div>

          <div className="video-wrapper">

            <video
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src={item.video}
                type="video/mp4"
              />
            </video>

            <div className="video-overlay">
              {item.badge}
            </div>

          </div>

        </div>
      ))}
    </section>
  );
}

export default Videos;