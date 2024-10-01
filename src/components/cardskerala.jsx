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
import { useContext } from 'react';
import componentContext from "./componentprovider";



// function Cardskerala() {
//     return (
//         <>
//         <h1 style={{paddingTop:"20px", color:"green"}}><center>! Explore Your Favourite Spot !</center></h1>
//             <Container className="mt-5">
//                 <Row>
//                     <Col lg={3}>
//                         <Card style={{ width: '18rem' }}>
//                             <Card.Img variant="top" src={kochi} />
//                             <Card.Body align="center">
//                                 <Card.Title className="text-danger">Kochi</Card.Title>
//                                 <Card.Text>
//                                     Kochi, also known as Cochin, is a vibrant port city in Kerala, India. Famous for its rich history and cultural diversity, it blends colonial architecture, ancient churches, and modernity. Key attractions include Fort Kochi, Chinese fishing nets, Mattancherry Palace, and diverse cuisine, reflecting its historic trade links.
//                                 </Card.Text>
//                                 <Button variant="success">View Details</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>

//                     <Col lg={3}>
//                         <Card style={{ width: '18rem' }}>
//                             <Card.Img variant="top" height="360px" src={alappuzha} />
//                             <Card.Body align="center">
//                                 <Card.Title className="text-danger">Alappuzha</Card.Title>
//                                 <Card.Text>
//                                     Alappuzha, or Alleppey, is a picturesque town in Kerala, India, known for its serene backwaters, houseboat cruises, and network of canals. Often called the "Venice of the East," it's famous for its lush paddy fields, beaches, coir industry, and the annual Nehru Trophy Boat Race held on Punnamada Lake.
//                                 </Card.Text>
//                                 <Button variant="success">View Details</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>

//                     <Col lg={3}>
//                         <Card style={{ width: '18rem' }}>
//                             <Card.Img variant="top" height="360px" src={munnar} />
//                             <Card.Body align="center">
//                                 <Card.Title className="text-danger">Munnar</Card.Title>
//                                 <Card.Text>
//                                 Munnar, a scenic hill station in Kerala, India, is nestled in the Western Ghats. Known for its sprawling tea plantations, misty mountains, and pleasant climate, it offers attractions like Eravikulam National Park, Anamudi Peak, and Attukal Waterfalls. Munnar's rich biodiversity and tranquil ambiance make it a nature lover's paradise.
//                                 </Card.Text>
//                                 <Button variant="success">View Details</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>

//                     <Col lg={3}>
//                         <Card style={{ width: '18rem' }}>
//                             <Card.Img variant="top" height="360px" src={silentvalley} />

//                             <Card.Body align="center">
//                                 <Card.Title className="text-danger">Silent Valley</Card.Title>
//                                 <Card.Text>
//                                 Silent Valley, located in Kerala, India, is a pristine tropical rainforest within the Western Ghats. As part of the Silent Valley National Park, it boasts rich biodiversity, housing endangered species like the lion-tailed macaque. Its dense forests, crystal-clear river (Kunthi), and tranquil atmosphere make it an ecological treasure.
//                                 </Card.Text>
//                                 <Button variant="success">View Details</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>

//                     <Col lg={3}>
//                         <Card style={{ width: '18rem' ,marginTop:'50px' ,marginBottom:'50px' }}>
//                             <Card.Img variant="top" height="360px" src={varkala} />

//                             <Card.Body align="center">
//                                 <Card.Title className="text-danger">Varkala</Card.Title>
//                                 <Card.Text>
//                                 Varkala is a coastal town in Kerala, India, known for its stunning cliffs overlooking the Arabian Sea. It's famous for its pristine beaches, like Varkala Beach and Papanasam Beach, natural springs, and 2,000-year-old Janardanaswamy Temple. Varkala also offers Ayurvedic treatments, water sports, and a vibrant local culture.
//                                 </Card.Text>
//                                 <Button variant="success">View Details</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>

//         </>
//     );
// }

// export default Cardskerala;


function Cardskerala() {

    const {component} = useContext(componentContext)
  
    const data = [
      {
        id: 1,
        title: "kochi",
        description:
          "Kochi, located in Kerala, India, is a vibrant port city known for its rich history and cultural diversity. It features a mix of colonial architecture, traditional spice markets, and modern infrastructure. Key attractions include Fort Kochi, Chinese fishing nets, and the serene backwaters of Kerala.",
        imageUrl: kochi,
      },
      {
        id: 2,
        title: "Alappuzha",
        description:
          "Alappuzha, also known as Alleppey, is a picturesque town in Kerala, India, renowned for its serene backwaters, houseboat cruises, and vast network of canals. Often called the Venice of the East, it is famous for the annual Nehru Trophy Boat Race, lush paddy fields, and beautiful beaches.",
        imageUrl: alappuzha,
      },
      {
        id: 3,
        title: "Munnar",
        description:
          " Munnar, a scenic hill station in Kerala, India, is famous for its lush tea plantations, rolling hills, and cool climate. Located in the Western Ghats, it offers stunning views, wildlife sanctuaries, and trekking opportunities. Key attractions include Eravikulam National Park etc.",
        imageUrl: munnar,
      },
      {
        id: 4,
        title: "Silent Valley",
        description:
          "Thiruvananthapuram, also known as Trivandrum, is the capital of Kerala, India. A coastal city, it's known for its historic landmarks like the Padmanabhaswamy Temple,beaches like Kovalam. Trivandrum is also a hub for art and culture, home to museums, and cultural festivals.",
        imageUrl: silentvalley,
      },
      {
        id: 5,
        title: "Varkala",
        description:
        "Wayanad, a serene district in Kerala, India, is known for its lush green landscapes, misty mountains, and rich wildlife. A popular eco-tourism destination, it offers attractions like Edakkal Caves, Banasura Sagar Dam, and Wayanad Wildlife Sanctuary. It's ideal for trekking, camping, and exploring ancient history and tribal culture.",
      imageUrl: varkala,
    },
    // {
    //   id: 6,
    //   title: "Kovalam",
    //   description:
    //     "Kovalam, a renowned beach town in Kerala, India, is famous for its crescent-shaped coastline, golden sands, and clear blue waters. Known for its iconic Lighthouse Beach, it attracts tourists for sunbathing, swimming, and Ayurvedic treatments. Kovalam is a perfect destination for relaxation, water sports, and scenic sunset views.",
    //   imageUrl: Kovalam,
    // },
    // {
    //   id: 7,
    //   title: "Kozhikode",
    //   description:
    //     "Kozhikode, also known as Calicut, is a historic city in Kerala, India, known for its rich cultural heritage and trading history. Famous as the landing place of Vasco da Gama in 1498, it offers attractions like Kozhikode Beach, the centuries-old Mananchira Square, Famous as the landing place and delicious Malabar cuisine, including the iconic biryani.",
    //   imageUrl: Kozhikode,
    // },
    // {
    //   id: 8,
    //   title: "Varkala",
    //   description:
    //     "Varkala, a coastal town in Kerala, India, is famous for its stunning cliffs overlooking the Arabian Sea and pristine beaches. The Papanasam Beach is popular for its natural spring with believed healing properties. Varkala is also a spiritual destination,Varkala is also destination, home to the ancient Janardanaswamy Temple and peaceful surroundings.",
    //   imageUrl: Varkala,
    // },
  ];

  return (
    <>
      <Container className="mt-4">
    {/* cards */}
    <h1 style={{textAlign:"center", color:"green", fontStyle:"oblique"}}>!Explore Your Favourite Spot!</h1>
        <Row>
          {data.length > 0 && 
            data.filter((sear)=>{
              return(sear.title.toLocaleLowerCase().match(component.toLocaleLowerCase()))
            })
            .map((list) => {
                return (
                  <Col lg={3} className="mb-4 mt-2" key={list.id}>
                      <Card
                        style={{ width: '18rem' ,marginTop:'20px' ,marginBottom:'20px'}}
                        className="border-1 border-success shadow"
                        id="card"
                      >
                        <Card.Img variant="top" height="320px" src={list.imageUrl} />
                        <Card.Body align="center">
                          <Card.Title className="text-success fw-bold">
                            {list.title}
                          </Card.Title>
                          <Card.Text>{list.description}</Card.Text>
                          <Button variant="success">View Details</Button>
                        </Card.Body>
                      </Card>
                  </Col>
                );
              })
            }
        </Row>
      </Container>
    </>
  );
}

export default Cardskerala;