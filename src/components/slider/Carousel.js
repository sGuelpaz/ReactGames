import Carousel from 'react-bootstrap/Carousel';
import Wow from '../../assets/images/wow.jpg';
import Wz from '../../assets/images/warzone.jpg';
import Fh from '../../assets/images/forza.jpg';

function CarouselDark() {
  return (
      <div className='container'>
    <Carousel variant="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Wow}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Mmorpg</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Wz}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Shooter</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Fh}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Race</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
  );
}

export default CarouselDark;