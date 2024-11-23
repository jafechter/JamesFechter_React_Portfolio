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
    title: "Guess my Number",

    description:
      "Guess a number between 1 and 20, guess correctly and get the highest score you can (20)! With each wrong answer, you lose a point. Don't worry there are hints to help you get the highest score possible!",
    link: "https://jafechter.github.io/JavaScript-GuessMyNumber/",
    source: "https://github.com/jafechter/JavaScript-GuessMyNumber",
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
