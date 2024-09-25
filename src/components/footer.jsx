import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <>
        <Container fluid >
            <Row className="bg-info" >
                <Col >
                <div style={{ paddingTop: '20px' ,paddingLeft: '20px'}}>
                <h3>Connect with us</h3><br></br>
                <h6>Ph no: 0484-2451321</h6>
                <h6>Email: kertourism@gmail.com</h6>
                </div>
                </Col>
            </Row>
        </Container>

        


  
  {/* <div class="container pt-4">
    <section class="mb-4">
      <a
        data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i></a>
      <a
        data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i></a>
      <a
        data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i></a>
      <a
        data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"><i class="fab fa-instagram"></i></a>
      <a
        data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i></a>
      <a
        data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"><i class="fab fa-github"></i></a>
    </section>
  </div>
  <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2023 Copyright:
    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div> */}

        </>
    )
}

export default Footer;