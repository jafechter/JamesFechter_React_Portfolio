// import DataCarousel from "./DataCarousel";
import JSDataContainer from "./JSDataContainer";
import ReactDataContainer from "./ReactDataContainer";
// import DataContainer from "./DataContainer";
import IMG from "../../public/PigGame.PNG";
import IMG2 from "../../public/GuessMyNumber.PNG";

function DevContent() {
  return (
    <>
      <h2>React Projects</h2>

      <ReactDataContainer />
      <h2>JavaScript Projects</h2>
      <div className="project-images">
        <img src={IMG} alt="Pig Game" />
        <img src={IMG2} alt="Pig Game" />
      </div>
      <JSDataContainer />
    </>
  );
}

export default DevContent;
