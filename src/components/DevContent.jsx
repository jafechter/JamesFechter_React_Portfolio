import IMG from "../assets/PigGame.PNG";
import IMG2 from "../assets/GuessMyNumber.PNG";
import IMG3 from "../assets/DefiningReactDevelopment.PNG";
import IMG4 from "../assets/PlacePicker.PNG";
import IMG5 from "../assets/Refs and Portals.PNG";
import IMG6 from "../assets/Tic-Tac-Toe.PNG";

const reactProjects = [
  {
    title: "Explaining React with React",
    description:
      "This page provides information around the building blocks of a React application. This includes components, JSX, props, and state management.",
    image: IMG3,
    link: "https://jafechter.github.io/Explaining_React_with_React/",
    source:
      "https://github.com/jafechter/Explaining_React_with_React/tree/master",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "Tic-tac-toe is a two-player game where players take turns marking a 3x3 grid with X's or O's, aiming to align three in a row to win.",
    image: IMG6,
    link: "https://jafechter.github.io/Tic_Tac_Toe/",
    source: "https://github.com/jafechter/Tic_Tac_Toe/tree/master",
  },
  {
    title: "Place Picker",
    description:
      "This application is an example of how to build out HTTP requests via a Node.js Backend. It provides a list of places you may want to visit as a vision board for desired travel.",
    image: IMG4,
    link: "https://jafechter.github.io/HTTP_Request_Locations/",
    source: "https://github.com/jafechter/HTTP_Request_Locations/tree/master",
  },
  {
    title: "Countdown Game",
    description: "Choose your challenge level and get as close as you can.",
    image: IMG5,
    link: "https://jafechter.github.io/Refs_and_Portals/",
    source: "https://github.com/jafechter/Refs_and_Portals/tree/master",
  },
];

const jsProjects = [
  {
    title: "Pig Game",
    description:
      "Utilizing a random number generator from 1 to 6, roll a die and the first to 20 wins the game! If you get a 1 before you hold your points, you will lose all of them and forfeit your turn.",
    image: IMG,
    link: "https://jafechter.github.io/JavaScript-PigGame-Project/",
    source: "https://github.com/jafechter/JavaScript-PigGame-Project",
  },
  {
    title: "Guess My Number",
    description:
      "Guess a number between 1 and 20. Guess correctly and get the highest score possible (20)! With each wrong answer, you lose a point. Don't worry—there are hints to help!",
    image: IMG2,
    link: "https://jafechter.github.io/JavaScript-GuessMyNumber/",
    source: "https://github.com/jafechter/JavaScript-GuessMyNumber",
  },
];

const DevContent = () => {
  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <div key={index} className="project-item">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.title} />
        </a>
        <div className="project-details">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="source-link"
          >
            View Source Code
          </a>
        </div>
      </div>
    ));

  return (
    <>
      <h2>React Projects</h2>
      <div className="project-grid">{renderProjects(reactProjects)}</div>
      <h2>JavaScript Projects</h2>
      <div className="project-grid">{renderProjects(jsProjects)}</div>
    </>
  );
};

export default DevContent;

// import JSDataContainer from "./JSDataContainer";
// import ReactDataContainer from "./ReactDataContainer";
// import IMG from "../assets/PigGame.PNG";
// import IMG2 from "../assets/GuessMyNumber.PNG";
// import IMG3 from "../assets/DefiningReactDevelopment.PNG";
// import IMG4 from "../assets/PlacePicker.PNG";
// import IMG5 from "../assets/Refs and Portals.PNG";
// import IMG6 from "../assets/Tic-Tac-Toe.PNG";
// function DevContent() {
//   return (
//     <>
//       <h2>React Projects</h2>
//       <div className="project-images">
//         <a
//           href="https://jafechter.github.io/Explaining_React_with_React/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={IMG3} alt="Explaining React with React" />
//         </a>
//         <a
//           href="https://jafechter.github.io/Tic_Tac_Toe/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={IMG6} alt="Tic-Tac-Toe" />
//         </a>
//         <a
//           href="https://jafechter.github.io/HTTP_Request_Locations/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={IMG4} alt="HTTP Request Place Picker" />
//         </a>
//         <a
//           href="https://jafechter.github.io/Refs_and_Portals/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={IMG5} alt="Countdown Game" />
//         </a>
//       </div>
//       <ReactDataContainer />
//       <h2>JavaScript Projects</h2>
//       <div className="project-images">
//         <a
//           href="https://jafechter.github.io/JavaScript-PigGame-Project/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={IMG} alt="Pig Game" />
//         </a>
//         <a
//           href="https://jafechter.github.io/JavaScript-GuessMyNumber/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={IMG2} alt="Guess My Number" />
//         </a>
//       </div>
//       <JSDataContainer />
//     </>
//   );
// }

// export default DevContent;
