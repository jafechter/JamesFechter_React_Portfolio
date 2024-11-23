import fechterPortfolioLogo from "../../public/Fechter_Coding_Portfolio.PNG";

function Header() {
  return (
    <div>
      <a href="https://jafechter.github.io/html-resume/" target="_blank">
        <img
          src={fechterPortfolioLogo}
          className="logo"
          alt="FechterDev logo"
        />
      </a>

      <h1>Development Projects</h1>
    </div>
  );
}

export default Header;
