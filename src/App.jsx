import DevContent from "./components/DevContent";
import Header from "./components/Header";
import NavigationBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Header />
      <div>
        <DevContent />
      </div>
    </>
  );
}

export default App;
