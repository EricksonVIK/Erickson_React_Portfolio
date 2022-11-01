import React from "react";
import resume from "../../assets/Erickson_Resume.pdf";

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        To download my resume,<a href={`${resume}`}>click here</a>
      </p>
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>BootStrap, Materialize, Bulma</li>
      </ul>
      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </section>
  );
}

export default Resume;