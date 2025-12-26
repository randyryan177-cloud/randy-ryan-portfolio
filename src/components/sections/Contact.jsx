// src/components/sections/Contact.jsx
import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser'; // npm install @emailjs/browser

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formData,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
      setStatus('Message sent successfully! 🚀');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Try again.');
    }
  };

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <Container>
        <h2 className="text-center mb-5">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>
              <Button variant="primary" type="submit" size="lg" className="w-100">
                Send Message
              </Button>
              {status && <p className="mt-3 text-center">{status}</p>}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;