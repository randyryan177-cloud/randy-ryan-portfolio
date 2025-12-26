import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light text-dark">
      <Container>
        <h2 className="text-center mb-5">About Me</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="lead">
              I'm Randy Ryan, a 22-year-old MERN Full-Stack Developer with a unique blend of tech passion and athletic drive. 
              I hold a <strong>Bachelor of Education (Arts) in Maths/Geography with IT</strong> and a{" "}
              <strong>Diploma in Computer Science</strong>.
            </p>
            <p>
              Coding is my true love — I live for building scalable systems that solve real problems. 
              When I'm not writing clean, efficient code, you'll find me on the football pitch, where I bring the same energy, strategy, and teamwork.
            </p>
            <ul className="list-unstyled mt-4">
              <li>🌍 Based in Western Kenya</li>
              <li>💻 100% Self-taught & obsessed with learning</li>
              <li>⚽ Proud footballer & team player</li>
              <li>🚀 Ready to build something epic with you</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;