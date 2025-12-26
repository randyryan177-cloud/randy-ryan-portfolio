import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import confetti from "canvas-confetti";

const fireConfetti = () => {
  confetti({
    particleCount: 30,
    spread: 60,
    origin: { y: 0.15 },
    colors: ["#22c55e", "#38bdf8", "#a855f7", "#f472b6"],
    scalar: 0.8
  });
};

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="shadow-sm bg-dark">
      <Container>
        <Navbar.Brand
          as={Link}
          to="hero"
          smooth
          duration={800}
          onClick={fireConfetti}
          className="fw-bold fs-4 text-primary"
        >
          Randy Ryan
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {["about", "skills", "projects", "contact"].map((item) => (
              <Nav.Link
                key={item}
                as={Link}
                to={item}
                smooth
                duration={800}
                onClick={fireConfetti}
                className="nav-genz"
              >
                {item.toUpperCase()}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;