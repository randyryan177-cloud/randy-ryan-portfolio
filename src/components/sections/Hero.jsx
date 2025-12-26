// components/sections/Hero.jsx
import { Button, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-vh-100 d-flex align-items-center hero-genz">
      <Container>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="display-3 fw-bold mb-3"
            >
              Hey, I'm Randy Ryan
            </motion.h1>
            <h2 className="display-5 text-primary mb-4">22 | MERN Full-Stack Developer & Footballer</h2>
            <p className="lead mb-5">
              Turning ideas into scalable, high-performance web apps with React, Node.js, MongoDB & more. 
              <br />By day I build systems. By night (and weekends) I dominate on the pitch ⚽
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Button variant="primary" size="lg" href="#projects">View My Work</Button>
              <Button variant="outline-light" size="lg" href="#contact">Let's Chat</Button>
            </div>
          </div>
          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1.2 }}
              src="./ryan177.jpg"
              alt="Randy Ryan"
              className="rounded-circle img-fluid shadow-lg"
              style={{ maxWidth: '350px', border: '8px solid #198754' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Hero;