const jsonReactData = [
  {
    title: "Explaining React with React",
    description:
      "This page provides information around the building blocks of a React application. This includes components, JSX, props, and state management",
    link: "https://jafechter.github.io/Explaining_React_with_React/",
    source:
      "https://github.com/jafechter/Explaining_React_with_React/tree/master",
  },
  {
    title: "Place Picker",

    description:
      "This application is an example of how to build out HTTP requests via a Node.js Backend. It provides a list of places you may want to visit as a vision board for desired travel.",
    link: "https://jafechter.github.io/HTTP_Request_Locations/",
    source: "https://github.com/jafechter/HTTP_Request_Locations/tree/master",
  },
  {
    title: "Countdown Game",

    description: "Choose your challenge level and get as close as you can.",
    link: "https://jafechter.github.io/Refs_and_Portals/",
    source: "https://github.com/jafechter/Refs_and_Portals/tree/master",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "Tic-tac-toe is a two-player game where players take turns marking a 3x3 grid with X's or O's, aiming to align three in a row to win.",
    link: "https://jafechter.github.io/Tic_Tac_Toe/",
    source: "https://github.com/jafechter/Tic_Tac_Toe/tree/master",
  },
];

const ReactDataContainer = () => {
  return (
    <div>
      {jsonReactData.map((item, index) => (
        <div key={index} className="item">
          <a href={item.link}>
            <h2>{item.title}</h2>
          </a>
          <p>{item.description}</p>
          <a href={item.source} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
      ))}
    </div>
  );
};

export default ReactDataContainer;
