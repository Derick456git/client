import Carousel from 'react-bootstrap/Carousel';
import Pictureframe from './pictureframe';
import bg1 from './images/bg1.jpg'
import bg2 from './images/bg2.jpg'
import bg3 from './images/bg3.jpg'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Pictureframe imageUrl={bg1}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

        <Carousel.Item interval={1000}>
        <Pictureframe imageUrl={bg2}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item interval={1000}>
      <Pictureframe imageUrl={bg3}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;