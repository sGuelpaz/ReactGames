import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cardo({title, image, text }) {
  return (
    <Card
          bg='dark'
          key='dark'
          text='light'
          style={{ width: '18rem' }}
          className="m-4"
        >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

  );
}

export default Cardo;
