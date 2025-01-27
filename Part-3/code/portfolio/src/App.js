import './App.css';
import WelcomeImage from './images/Welcome.webp';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Sai Meghana Sangawar</h1>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#know-me">Know Me Better</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <h2>Welcome</h2>
          <p className="intro">
            Hello! I'm Sai Meghana Sangawar, a Developer Analyst with a passion for building impactful and meaningful solutions. 
            My expertise lies in creating dynamic web applications and performing data analysis to derive actionable insights. 
            I thrive on challenges, enjoy learning new technologies, and constantly seek opportunities to innovate and grow. 
            From coding efficient algorithms to designing visually appealing user interfaces, I ensure quality and excellence in my work. 
            Let's embark on a journey of innovation together!
          </p>
        </div>
        <img src={WelcomeImage} alt="A portrait of Sai Meghana Sangawar" />
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills">
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
          <span className="skill">Python</span>
          <span className="skill">SQL</span>
          <span className="skill">React.js</span>
        </div>
      </section>

      <section id="projects">
        <div className="section-content">
          <div className="section-title">Projects</div>
          <div className="section-desc">
            Here is a collection of my recent projects, showcasing a variety of skills and technologies. Each project is designed to solve real-world problems and demonstrate my expertise.
          </div>
        </div>
        <div className="projects-grid">
          <div className="project">
            <h3>TaskMaster</h3>
            <p>A task management application with an intuitive UI to help users stay organized. It allows task creation, categorization, and progress tracking.</p>
          </div>
          <div className="project">
            <h3>ShopEase</h3>
            <p>An e-commerce platform with integrated payment gateways, product browsing, shopping cart, and user account management features for a seamless shopping experience.</p>
          </div>
          <div className="project">
            <h3>RealTime Insights</h3>
            <p>A data visualization dashboard that displays real-time business metrics, helping users to monitor performance and make data-driven decisions.</p>
          </div>
          <div className="project">
            <h3>QuickChat</h3>
            <p>An instant messaging app that uses WebSocket for real-time communication. Users can chat with others instantly, and it includes group chat functionalities.</p>
          </div>
          <div className="project">
            <h3>MyPortfolio</h3>
            <p>An interactive portfolio website showcasing my skills, projects, and achievements. It includes smooth animations and a responsive design.</p>
          </div>
        </div>
      </section>

      <section id="hobbies">
        <h2>Hobbies</h2>
        <div className="hobby">Coding & Software Development</div>
        <div className="hobby">Reading Books</div>
        <div className="hobby">Playing Chess</div>
        <div className="hobby">Travelling & Exploring New Places</div>
      </section>

      <section id="know-me">
        <h2>Know Me Better</h2>
        <div className="know-me">
          <div className="block">
            <h3>Find Me Online</h3>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            <a href="https://github.com" target="_blank">GitHub</a>
            <a href="https://twitter.com" target="_blank">Twitter</a>
          </div>
          <div className="block">
            <h3>Drop Me a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows="5"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
