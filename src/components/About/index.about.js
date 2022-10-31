import React from "react";

function About() {
  // jsx
  return (
    <section className="about-section">
      <img
        className="profilePhoto"
        src={require("../../assets/images/Black and white profile.png")}
        alt="Chris Erickson Profile Picture"
      />
      <div className="flex-column">
        <h2>About Me</h2>
        <p className="about">
          Need to add text
        </p>
        <p className="about">
          Placeholder for additional text if needed
        </p>
      </div>
    </section>
  );
}

export default About;