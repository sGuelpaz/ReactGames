import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sonic from '../../assets/images/sonic.jpg';

function CardsGames() {
  return (
    <Card
          bg='dark'
          key='dark'
          text='light'
          style={{ width: '18rem' }}
          className="m-4"
        >
      <Card.Img variant="top" src={Sonic} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

  );
}

export default CardsGames;
