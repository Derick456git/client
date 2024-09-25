import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Register from './register';

function Navbarpg() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand >
          <h1>Visit Your Places!</h1>
        </Navbar.Brand>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link onClick={handleShow}>Register</Nav.Link>
            <Nav.Link href="/Aboutpage">About us</Nav.Link>
            <Nav.Link href="#features">Contact us</Nav.Link>
          </Nav>
        </Container>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Here !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      </Navbar>
    </>
  );
}

export default Navbarpg;