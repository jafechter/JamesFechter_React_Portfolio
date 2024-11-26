import fechterPortfolioLogo from "../assets/Fechter_Coding_Portfolio.PNG";

const AboutMe = `
Hi, I'm James Fechter. With over twelve years of experience in Project and Product Management, I've successfully led cross-functional teams, streamlined workflows, and delivered high-impact technical projects. Over the past year, I've transitioned my focus towards web development, bringing my strong foundation in managing complex projects to my new passion for coding and development.

I'm currently building my skills in web technologies like React, JavaScript, HTML, CSS, SQL, and more. My background in project management has given me a deep understanding of the development lifecycle, and I apply that knowledge to write clean, efficient code, while also focusing on creating seamless and intuitive user experiences.

Having worked with diverse teams and product lines, I bring a unique perspective to development. One that emphasizes both the technical and strategic aspects of building robust web applications. With certifications in ScrumMaster and PMP, I am committed to delivering solutions that meet business objectives while maintaining a user-first approach.

I'm excited to continue my journey as a web developer and welcome opportunities to collaborate on impactful projects.`;

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
      <div id="about-me">
        <br />
      </div>
      <h1>About Me</h1>
      <div className="about-me">{AboutMe}</div>
    </div>
  );
}

export default Header;
