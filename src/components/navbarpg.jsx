import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import React, { useContext} from "react";
import Modal from 'react-bootstrap/Modal';
import Register from './register';
import componentContext from './componentprovider';

// function Navbarpg() {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // return (
    // <Navbar expand="lg" className="bg-success">
    //   <Container fluid>
    //     {/* <Navbar.Brand href="#"><h3>Visit Your Places!</h3></Navbar.Brand> */}
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="/" className='fw-bold text-white'>Home</Nav.Link>
    //         <Nav.Link onClick={handleShow} className='fw-bold text-white'>Register</Nav.Link>
    //         <Nav.Link href="/Aboutpage" className='fw-bold text-white'>About us</Nav.Link>
    //         <NavDropdown title="Link"  id="navbarScrollingDropdown" >
    //           <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Something else here
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <Form className="d-flex">
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button variant="outline-info">Search</Button>
    //       </Form>
    //     </Navbar.Collapse>
    //   </Container>

    function Navbarpg() {
      const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
      const{setComponent}=useContext(componentContext)
    
      //handle search state
      const [handle,setHandle] = useState("")
    
      // let modalFun = () => {
      //   setIsRegister(!isRegister);
      // };
    
      // search function
      let searchFun = (event) => {
        setHandle(event.target.value);
      };
    
      //handle search function
      let handleSearch=()=>{
        setComponent(handle)
      }
    
      return (
        <>
          <Navbar expand="lg" className="bg-success">
            <Container fluid>
              <Navbar.Brand href="#" className="text-white fw-bold fs-3">
                D!scover Kerala
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                  >
                  <Nav.Link href="/" className="fw-bold text-white">
                    Home
                  </Nav.Link>
                  <Nav.Link onClick={handleShow} className="fw-bold text-light">
                    Register
                  </Nav.Link>
                  <NavDropdown title="Deals" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Offers</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Package Details
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Guides</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/aboutpage" className="fw-bold text-white">
                    About Us
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={searchFun}
                  />
                  <Button variant="light" onClick={handleSearch}>Search</Button>
                </Form>
              </Navbar.Collapse>
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

export default Navbarpg