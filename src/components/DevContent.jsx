import JSDataContainer from "./JSDataContainer";
import ReactDataContainer from "./ReactDataContainer";
import IMG from "../assets/PigGame.PNG";
import IMG2 from "../assets/GuessMyNumber.PNG";
import IMG3 from "../assets/DefiningReactDevelopment.PNG";
import IMG4 from "../assets/PlacePicker.PNG";
import IMG5 from "../assets/Refs and Portals.PNG";
import IMG6 from "../assets/Tic-Tac-Toe.PNG";
function DevContent() {
  return (
    <>
      <h2>React Projects</h2>
      <div className="project-images">
        <a
          href="https://jafechter.github.io/Explaining_React_with_React/"
          target="_blank"
        >
          <img src={IMG3} alt="Explaining React with React" />
        </a>
        <a href="https://jafechter.github.io/Tic_Tac_Toe/" target="_blank">
          <img src={IMG6} alt="Tic-Tac-Toe" />
        </a>
        <a
          href="https://jafechter.github.io/HTTP_Request_Locations/"
          target="_blank"
        >
          <img src={IMG4} alt="HTTP Request Place Picker" />
        </a>
        <a href="https://jafechter.github.io/Refs_and_Portals/" target="_blank">
          <img src={IMG5} alt="Countdown Game" />
        </a>
      </div>
      <ReactDataContainer />
      <h2>JavaScript Projects</h2>
      <div className="project-images">
        <a
          href="https://jafechter.github.io/JavaScript-PigGame-Project/"
          target="_blank"
        >
          <img src={IMG} alt="Pig Game" />
        </a>
        <a
          href="https://jafechter.github.io/JavaScript-GuessMyNumber/"
          target="_blank"
        >
          <img src={IMG2} alt="Guess My Number" />
        </a>
      </div>
      <JSDataContainer />
    </>
  );
}

export default DevContent;
