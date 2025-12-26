// src/components/common/Footer.jsx
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <Container className="text-center">
        <div className="mb-3">
          <a href="https://github.com/randyryan177-cloud" target="_blank" rel="noopener noreferrer" className="text-white mx-3 fs-4">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/randyryan" target="_blank" rel="noopener noreferrer" className="text-white mx-3 fs-4">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-white mx-3 fs-4">
            <FaTwitter />
          </a>
          <a href="https://wa.me/254745360161" target="_blank" rel="noopener noreferrer" className="text-white mx-3 fs-4">
            <FaWhatsapp />
          </a>
        </div>
        <p className="mb-0">
          © {new Date().getFullYear()} Randy Ryan | Made with ❤️ & MERN
        </p>
      </Container>
    </footer>
  );
};

export default Footer;