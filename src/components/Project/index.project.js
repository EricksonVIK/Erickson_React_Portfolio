import React, { useState } from "react";
import noteTaker from "../../assets/images/noteTaker2.png";
import weatherApp from "../../assets/images/weatherApp.png";
import textEditor from "../../assets/images/JATE_screenshot.png";
import YodaIM from "../../assets/images/yodaIM.png";
import github from "../../assets/images/GitHub-icon.png";
import TeamProfile from "../../assets/images/Team_Profile_Generator_Screenshot.png";
import socialApp from "../../assets/images/social_app.png";
import StockBuddy from "../../assets/images/stockbuddy.png";
import contactCard from "../../assets/images/contact-card.png";
import personalSunrise from "../../assets/images/personalSunrise.png"

function Project() {
  // code in project array -- need to add more
  const projects = [
    {
      src: personalSunrise,
      title: "Rental MVP",
      tools: "React, MongoDB, Apollo Server",
      deploy: "http://personal-sunrise-test.herokuapp.com/",
      github:"https://github.com/EricksonVIK/Erickson_React_Portfolio"
    },
    {
      src: noteTaker,
      title: "Note Taker",
      tools: "Express.js, Node.js",
      deploy: "https://whispering-escarpment-89419.herokuapp.com/",
      github: "https://github.com/EricksonVIK/Note_Taker",
    },
    {
      src: weatherApp,
      title: "Weather Finder",
      tools: "HTML, CSS, JavaScript",
      deploy: "https://ericksonvik.github.io/Weather-Finder/",
      github: "https://github.com/EricksonVIK/Weather-Finder",
    },
    {
      src: textEditor,
      title: "Text Editor",
      tools: "PWA, WebPack, IndexedDB",
      deploy: "https://serene-anchorage-57681.herokuapp.com/",
      github: "https://github.com/EricksonVIK/text-editor",
    },
    {
      src: YodaIM,
      title: "GifYoda",
      tools: "Materialize CSS, REST API's",
      deploy: "https://ericksonvik.github.io/YodaIM/",
      github: "https://github.com/EricksonVIK/YodaIM",
    },
    {
      src: TeamProfile,
      title: "Team Profile Generator",
      tools: "JavaScript, Jest, Inquirer",
      deploy: "https://drive.google.com/file/d/1yexOgNoF0Dy3-Qm0oL7rWXfJ99mAL8IU/view",
      github: "https://github.com/EricksonVIK/Team_Profile_Generator"
    },
    {
      src: socialApp,
      title: "Social App Backend",
      tools: "MongoDB, Moongoose, Insomnia",
      deploy: "https://drive.google.com/file/d/1Ap2ACvgVpkWPLYSzHRNggEDcIagVW0nJ/view",
      github: "https://github.com/EricksonVIK/social-app"
    },
    {
      src: StockBuddy,
      title: "Stock Buddy",
      tools: "MySQL, Sequelize, Express, Node, bcrypt",
      deploy: "https://murmuring-spire-79055.herokuapp.com/",
      github:"https://github.com/EricksonVIK/Stock_Buddy"
    },
    {
      src: contactCard,
      title: "Contact Card",
      tools: "Concurrently, Node, Webpack",
      deploy: "https://pacific-woodland-23884.herokuapp.com/",
      github:"https://github.com/EricksonVIK/contact-card/blob/main/package.json"
    }
  ];

  const [projectCard, setProjectCard] = useState(projects[0]);
  const [hover, setHover] = useState(false);

  //jsx
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-section">
        {projects.map((project) => (
          <div
            key={project.title}
            className="container"
            onMouseEnter={() => {
              setHover(true);
              setProjectCard(project);
            }}
            onMouseLeave={() => {
              setHover(false);
              setProjectCard(project);
            }}
          >
            {hover && projectCard.title === project.title ? (
              <>
                <img src={`${project.src}`} alt="" className="img"></img>
                <div className="project-details">
                  <span className="flex-row">
                    <a
                      href={`${project.deploy}`}
                      target="blank"
                      className="deployed"
                    >
                      {project.title}
                    </a>
                    <a href={`${project.github}`} target="blank">
                      <img
                        className="github-icon"
                        alt="github icon"
                        src={`${github}`}
                      />
                    </a>
                  </span>
                  <p className="tools">{project.tools}</p>
                </div>
              </>
            ) : (
              <img
                src={`${project.src}`}
                alt={`${project.title}`}
                className="image"
              ></img>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
