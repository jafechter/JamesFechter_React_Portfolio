import homeIcon from "../assets/icons8-home.svg";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="logo-container" className="navbar-logo">
          <img src={homeIcon} />
        </a>
        <ul className="navbar-links">
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#react-projects">React Projects</a>
          </li>
          <li>
            <a href="#js-projects">JavaScript Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
