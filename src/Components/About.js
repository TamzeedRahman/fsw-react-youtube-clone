import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import "./About.css";
const About = () => { //make sure to edit spacing for readability, especially when collaborating.
  return (
    <div>
      <div className="about">
        <div className="youtube-about">
          <h2>Project Description</h2>
          <br />
          <p>
            Full stack Project of a basic Youtube clone using React and node.js
          </p>
        </div>
        <div className="Grace bio">
          <h3>Grace Bong</h3>

          {/* good job using materialUI */}

          <GitHubIcon onClick={() => window.open('https://github.com/bongster91')} /> 
          <br />
          <p>
            "Be proactive, not just reactive." -Me Creative, aspiring software
            engineer currently attending Pursuit, an intensive 12 month,
            project-based software engineering fellowship. As a diligent,
            adaptable, perfectionist and team player I want to use technology as
            a platform to create software and products with innovative outcomes.
            Fast learner, problem solver and going above and beyond are words my
            peers use to describe me. I thrive and am always looking for
            supportive environments that allow me to create to my heart's
            content and are willing to invest in my growth. I am always open to
            geek about video games, animals, coffee and good food. Also open to
            ranting about inefficient systems and inefficiency in general. Open
            to adopting a dragon. DM me if you have a dragon egg.
          </p>
        </div>
        <div className="Talia bio">
          <h3>Talía Picardo</h3> <br />
          <GitHubIcon onClick={() => window.open('https://github.com/Tpichardo')} />
          <br />
          <p>
            As a rising fsw developer, I'm enjoying a new path to
            self-expression at Pursuit, an intensive 12 - month software
            engineering fellowship with a 9% acceptance rate. I love the process
            of creating clean code and discovering different ways to get the
            same result. I have learned through pair programming that the beauty
            of coding lies in the spaces it creates for collaboration. We all
            think differently, and software development encourages these
            differences and makes them work together to create amazing outcomes.
            Looking forward to the future keeps me motivated to constantly
            improve upon my skills and learn new ones. I'm currently proficient
            in Javascript, HTML, CSS, Node, and GitHub. I aspire to work with an
            organization that shares my values to motivate and entertain my
            community. As a developer, I want to be able to merge this drive
            into my initiatives to create code that inspires the community to do
            what they love. When I'm not coding you can find me spending time
            with family and friends, dancing to EVERYTHING, and bike riding.
          </p>
        </div>
        <div className="Alvi bio">
          <h3>Tamzeed Rahman (Alvi)</h3> <br />
          <GitHubIcon onClick={() => window.open('https://github.com/TamzeedRahman')} />
          <br />
          <p>
            I'm a full-stack developer studying at Pursuit, an intensive
            12-month software engineering fellowship with a 9% acceptance rate.
            Proficient in Javascript, HTML, CSS, Node, PostgreSQL, Redux.js,
            React.js, Git, and Github. My passion for improving tomorrow's
            technology was sparked by my first computer build from scratch,
            which led me to look for the next challenge. I eventually created my
            own projects and assembled circuitry hardware, created ad blockers
            with raspberry pi, and created bad-USB mods with ducky scripting
            language. This ability to pursue my passions resulting in a tangible
            final product keeps me learning and creating. I'm currently making
            artisan keycaps and keyboards. For the future, I look forward to
            working on something that challenges me and constantly keeps me on
            my mental toes. Just like how one's body needs exercise to live a
            long fulfilling life, I believe that mental exercise is also
            important. In the work setting, people describe me as dedicated,
            reliable, and results-driven.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
