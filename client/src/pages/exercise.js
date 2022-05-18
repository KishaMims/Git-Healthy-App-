import React from "react";
import Card from 'react-bootstrap/Card';
import image from './flatouburpies.jpeg';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";


function Exercises() {
  return ( 
  <div>
    <h1>Check out some quick at home exercies!</h1>
    <Row>
    <Col md={3}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image}/>
  <Card.Body>
    <Card.Title>Flat Out Burpies</Card.Title>
    <Card.Text>
    Burpees are the go-to exercise for a quick, intense workout.
    </Card.Text>
    <a href="https://www.youtube.com/watch?v=HA6xpfVO9K8">Let's get moving!</a>
  </Card.Body>
</Card><br/>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image}/>
  <Card.Body>
    <Card.Title>Flat Out Burpies</Card.Title>
    <Card.Text>
    Burpees are the go-to exercise for a quick, intense workout.
    </Card.Text>
    <a href="https://www.youtube.com/watch?v=HA6xpfVO9K8">Let's get moving!</a>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image}/>
  <Card.Body>
    <Card.Title>Flat Out Burpies</Card.Title>
    <Card.Text>
    Burpees are the go-to exercise for a quick, intense workout.
    </Card.Text>
    <a href="https://www.youtube.com/watch?v=HA6xpfVO9K8">Let's get moving!</a>
  </Card.Body>
</Card>
</Col>
</Row>
    </div>

  )
}

export default Exercises;