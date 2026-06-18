import "../styles/Work.css";

const steps = [
  {
    number: "01",
    title: "Register Property",
    description:
      "Submit your property details through the StayZen vendor enrollment process.",
  },

  {
    number: "02",
    title: "Verification",
    description:
      "Our team reviews and verifies your property information for quality assurance.",
  },

  {
    number: "03",
    title: "Go Live",
    description:
      "Your property gets listed on StayZen and becomes visible to thousands of potential tenants.",
  },

  {
    number: "04",
    title: "Receive Bookings",
    description:
      "Start receiving inquiries and bookings from verified students and professionals.",
  },
];

function HowItWorks() {
  return (
    <section className="works-section">

      <div className="works-header">
        <span>HOW IT WORKS</span>

        <h2>
          Start Growing With StayZen
          In Four Simple Steps
        </h2>

        <p>
          Getting started is quick, simple and designed
          to help your property reach more tenants.
        </p>
      </div>

      <div className="works-grid">

        {steps.map((step, index) => (
          <div
            className="work-card"
            key={index}
          >
            <div className="step-number">
              {step.number}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default HowItWorks;