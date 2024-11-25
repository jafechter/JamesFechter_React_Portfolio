import JSDataContainer from "./JSDataContainer";
import ReactDataContainer from "./ReactDataContainer";
import IMG from "../../public/PigGame.PNG";
import IMG2 from "../../public/GuessMyNumber.PNG";
import IMG3 from "../../public/DefiningReactDevelopment.PNG";
import IMG4 from "../../public/PlacePicker.PNG";
import IMG5 from "../../public/Refs and Portals.PNG";
import IMG6 from "../../public/Tic-Tac-Toe.PNG";
function DevContent() {
  return (
    <>
      <h2>React Projects</h2>
      <div className="project-images">
        <a href="https://jafechter.github.io/Explaining_React_with_React/">
          <img src={IMG3} alt="Explaining React with React" />
        </a>
        <a href="https://jafechter.github.io/HTTP_Request_Locations/">
          <img src={IMG4} alt="HTTP Request Place Picker" />
        </a>
        <a href="https://jafechter.github.io/Refs_and_Portals/">
          <img src={IMG5} alt="Countdown Game" />
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
        <a href="https://jafechter.github.io/Tic_Tac_Toe/">
          <img src={IMG6} alt="Tic-Tac-Toe" />
        </a>
      </div>
      <JSDataContainer />
    </>
  );
}

export default DevContent;
