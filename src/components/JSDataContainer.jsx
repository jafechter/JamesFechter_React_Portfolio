const jsonJSData = [
  {
    title: "Pig Game",
    description:
      "Utilizing a random number generator from 1 to 6, roll a die and the first to 20 wins the game! If you get a 1 before you hold your points, you will lose all of them and forfeit your turn.",
    link: "https://jafechter.github.io/JavaScript-PigGame-Project/",
    source: "https://github.com/jafechter/JavaScript-PigGame-Project",
  },
  {
    title: "Guess my Number",
    description:
      "Guess a number between 1 and 20, guess correctly and get the highest score you can (20)! With each wrong answer, you lose a point. Don't worry there are hints to help you get the highest score possible!",
    link: "https://jafechter.github.io/JavaScript-GuessMyNumber/",
    source: "https://github.com/jafechter/JavaScript-GuessMyNumber",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "Tic-tac-toe is a two-player game where players take turns marking a 3x3 grid with X's or O's, aiming to align three in a row to win.",
    link: "https://jafechter.github.io/Tic_Tac_Toe/",
    source: "https://github.com/jafechter/Tic_Tac_Toe/tree/master",
  },
];

const JSDataContainer = () => {
  return (
    <div>
      {jsonJSData.map((item, index) => (
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

export default JSDataContainer;
