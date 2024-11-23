import JSDataContainer from "./JSDataContainer";
import ReactDataContainer from "./ReactDataContainer";
import IMG from "../../public/PigGame.PNG";
import IMG2 from "../../public/GuessMyNumber.PNG";
import IMG3 from "../../public/DefiningReactDevelopment.PNG";
function DevContent() {
  return (
    <>
      <h2>React Projects</h2>
      <div className="project-images">
        <a href="https://jafechter.github.io/Explaining_React_with_React/">
          <img src={IMG3} alt="Explaining React with React" />
        </a>
        <a href="https://jafechter.github.io/JavaScript-GuessMyNumber/">
          <img src={IMG2} alt="Guess My Number" />
        </a>
      </div>
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
