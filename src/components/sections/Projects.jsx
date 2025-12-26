// src/components/sections/Projects.jsx
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const projects = [
  {
    title: "E-Commerce Platform (Kenyan Market)",
    description: "Full MERN stack e-commerce site with M-Pesa integration, product search, cart, admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "M-Pesa API", "Redux"],
    image: "/assets/randy.jpg", // Add your screenshot
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-ecommerce-demo.vercel.app",
  },
  {
    title: "KRA & eCitizen Automation Tool",
    description: "Secure web app for businesses to automate tax filing and government service integrations.",
    tech: ["React", "Express", "MongoDB", "JWT", "KRA API"],
    image: "/assets/randy.jpg",
    github: "https://github.com/yourusername/kra-automation",
  },
  {
    title: "Personal Portfolio (This Site!)",
    description: "Modern responsive portfolio built with React & Bootstrap — fast, dark mode ready.",
    tech: ["React", "Bootstrap", "Framer Motion"],
    image: "/assets/randy.jpg",
    github: "https://github.com/yourusername/personal-portfolio",
    live: "https://randyryan.dev",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">My Projects</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project, idx) => (
            <Col key={idx}>
              <Card className="h-100 shadow-sm border-0 hover-shadow transition-all">
                <Card.Img variant="top" src={project.image} alt={project.title} className="img-fluid" />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.tech.map((t, i) => (
                      <Badge bg="primary" className="me-2" key={i}>{t}</Badge>
                    ))}
                  </div>
                  <div className="d-flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                      GitHub
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        Live Demo
                      </a>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;