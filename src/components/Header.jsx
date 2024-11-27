import { useState } from "react";
import fechterPortfolioLogo from "../assets/Fechter_Coding_Portfolio.PNG";
import TypewriterComponent from "typewriter-effect";

function Header() {
  const [showFullText, setShowFullText] = useState(false);

  const welcomeText = `Welcome, I would like to introduce myself.`;

  const jamesAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the current date is before the birthdate this year
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const age = jamesAge("1991-08-21");

  const handleTextClick = () => {
    setShowFullText(true);
  };

  const aboutMeText = `
    Hi, I'm James Fechter and I am currently ${age} years old. With over twelve years of experience in Project and Product Management, I've successfully led cross-functional teams, streamlined workflows, and delivered high-impact technical projects. Recently, I've transitioned my focus towards web development, bringing my strong foundation in managing complex projects to my new passion for coding and development.

    I'm currently building my skills in web technologies like React, JavaScript, HTML, CSS, SQL, and more. My background in project management has given me a deep understanding of the development lifecycle, and I apply that knowledge to write clean, efficient code, while also focusing on creating seamless and intuitive user experiences.

    Having worked with diverse teams and product lines, I bring a unique perspective to development—one that emphasizes both the technical and strategic aspects of building robust web applications. With certifications in ScrumMaster and PMP, I am committed to delivering solutions that meet business objectives while maintaining a user-first approach.

    I'm excited to continue my journey as a web developer and welcome opportunities to collaborate on impactful projects.
  `;

  return (
    <header className="header">
      <div className="logo-container">
        <a
          href="https://jafechter.github.io/html-resume/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={fechterPortfolioLogo}
            className="logo"
            alt="FechterDev logo"
          />
        </a>
      </div>
      <div id="about-me">
        <h1>About Me</h1>
        <div
          className={`about-me ${!showFullText ? "cursor-visible" : ""}`}
          onClick={handleTextClick}
        >
          {showFullText ? (
            <p>{aboutMeText}</p>
          ) : (
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString(welcomeText)
                  .pauseFor(2000)
                  .deleteAll(40)
                  .changeDelay(30)
                  .typeString(aboutMeText)
                  .start();
              }}
              options={{
                delay: 30,
                autoStart: true,
                cursor: "|",
              }}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
