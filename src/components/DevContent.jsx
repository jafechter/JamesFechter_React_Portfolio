import JSDataContainer from "./JSDataContainer";
import ReactDataContainer from "./ReactDataContainer";
import IMG from "../../public/PigGame.PNG";
import IMG2 from "../../public/GuessMyNumber.PNG";

function DevContent() {
  return (
    <>
      <h2>React Projects</h2>

      <ReactDataContainer />
      <h2>JavaScript Projects</h2>
      <div className="project-images">
        <a href="https://jafechter.github.io/JavaScript-PigGame-Project/">
          <img src={IMG} alt="Pig Game" />
        </a>
        <a href="https://jafechter.github.io/JavaScript-GuessMyNumber/">
          <img src={IMG2} alt="Guess My Number" />
        </a>
      </div>
      <JSDataContainer />
    </>
  );
}

export default DevContent;
