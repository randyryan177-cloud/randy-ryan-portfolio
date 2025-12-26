// src/components/common/FloatingCTA.jsx
import { Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

const FloatingCTA = () => {
  return (
    <Button
      variant="success"
      size="lg"
      as={Link}
      to="contact"
      smooth={true}
      duration={800}
      className="position-fixed bottom-0 end-0 m-4 rounded-circle shadow-lg d-flex align-items-center justify-content-center"
      style={{ width: '70px', height: '70px', zIndex: 1000 }}
    >
      Hire Me
    </Button>
  );
};

export default FloatingCTA;