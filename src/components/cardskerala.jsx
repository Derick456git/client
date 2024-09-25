import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import kochi from './images/image1.jpg';
import alappuzha from './images/img2.jpg';
import munnar from './images/img3.jpg';
import silentvalley from './images/img4.jpg';
import varkala from './images/img5.jpg';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cardskerala() {
    return (
        <>
        <h1 style={{paddingTop:"20px", color:"green"}}><center>! Explore Your Favourite Spot !</center></h1>
            <Container className="mt-5">
                <Row>
                    <Col lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={kochi} />
                            <Card.Body align="center">
                                <Card.Title className="text-danger">Kochi</Card.Title>
                                <Card.Text>
                                    Kochi, also known as Cochin, is a vibrant port city in Kerala, India. Famous for its rich history and cultural diversity, it blends colonial architecture, ancient churches, and modernity. Key attractions include Fort Kochi, Chinese fishing nets, Mattancherry Palace, and diverse cuisine, reflecting its historic trade links.
                                </Card.Text>
                                <Button variant="success">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" height="360px" src={alappuzha} />
                            <Card.Body align="center">
                                <Card.Title className="text-danger">Alappuzha</Card.Title>
                                <Card.Text>
                                    Alappuzha, or Alleppey, is a picturesque town in Kerala, India, known for its serene backwaters, houseboat cruises, and network of canals. Often called the "Venice of the East," it's famous for its lush paddy fields, beaches, coir industry, and the annual Nehru Trophy Boat Race held on Punnamada Lake.
                                </Card.Text>
                                <Button variant="success">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" height="360px" src={munnar} />
                            <Card.Body align="center">
                                <Card.Title className="text-danger">Munnar</Card.Title>
                                <Card.Text>
                                Munnar, a scenic hill station in Kerala, India, is nestled in the Western Ghats. Known for its sprawling tea plantations, misty mountains, and pleasant climate, it offers attractions like Eravikulam National Park, Anamudi Peak, and Attukal Waterfalls. Munnar's rich biodiversity and tranquil ambiance make it a nature lover's paradise.
                                </Card.Text>
                                <Button variant="success">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" height="360px" src={silentvalley} />

                            <Card.Body align="center">
                                <Card.Title className="text-danger">Silent Valley</Card.Title>
                                <Card.Text>
                                Silent Valley, located in Kerala, India, is a pristine tropical rainforest within the Western Ghats. As part of the Silent Valley National Park, it boasts rich biodiversity, housing endangered species like the lion-tailed macaque. Its dense forests, crystal-clear river (Kunthi), and tranquil atmosphere make it an ecological treasure.
                                </Card.Text>
                                <Button variant="success">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3}>
                        <Card style={{ width: '18rem' ,marginTop:'50px' ,marginBottom:'50px' }}>
                            <Card.Img variant="top" height="360px" src={varkala} />

                            <Card.Body align="center">
                                <Card.Title className="text-danger">Varkala</Card.Title>
                                <Card.Text>
                                Varkala is a coastal town in Kerala, India, known for its stunning cliffs overlooking the Arabian Sea. It's famous for its pristine beaches, like Varkala Beach and Papanasam Beach, natural springs, and 2,000-year-old Janardanaswamy Temple. Varkala also offers Ayurvedic treatments, water sports, and a vibrant local culture.
                                </Card.Text>
                                <Button variant="success">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Cardskerala;