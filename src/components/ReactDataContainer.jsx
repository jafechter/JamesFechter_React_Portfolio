import IMG from "../../public/PigGame.PNG";
import IMG2 from "../../public/GuessMyNumber.PNG";

const jsonReactData = [
  {
    title: "Pig Game",
    image: { IMG },
    description:
      "Utilizing a random number generator from 1 to 6, roll a die and the first to 20 wins the game! If you get a 1 before you hold your points, you will lose all of them and forfeit your turn.",
    link: "https://jafechter.github.io/JavaScript-PigGame-Project/",
    source: "https://github.com/jafechter/JavaScript-PigGame-Project",
  },
  {
    title: "Guess my Number",
    image: { IMG2 },
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
          <h2>{item.title}</h2>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "500px", height: "250px" }}
            />
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
