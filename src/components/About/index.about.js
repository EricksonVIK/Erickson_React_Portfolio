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
          Full Stack Developer with an in-depth knowledge of both front and
          back-end development. Currently working as an Application Consultant
          and pursuing an intensive Coding certificate from the University of
          North Carolina. Professionally, I have bolstered a diverse skill set
          including time management, communication/conflict resolution,
          strategic program development, and critical thinking/troubleshooting.
        </p>
        <p className="about">
          Excited to use a developed technical and professional skill set to
          collaborate, continue learning, and contribute as a valuable team asset.
        </p>
      </div>
    </section>
  );
}

export default About;
