import React from "react";
import Card from 'react-bootstrap/Card';
import image from './flatouburpies.jpeg';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import photo from './highplankleglift.jpeg';
import knees from './kneepushups.jpeg';
import jumps from './runtasticjumps.jpeg';

function Exercises() {
  return ( 
  <div>
<h1 className="workout_text_header">ARE SHORT WORKOUTS REALLY EFFECTIVE?</h1>
<h2 className="workout_text">Yes, short workouts, 
such as 7-minute and 10-minute full-body workouts, 
can be considered a minimum effective dose of exercise. 
But the more active minutes you include in your day, 
the better you will feel!</h2>
    <Row>
    <Col md={3}>
    <Card border="success" bg="success"  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image}/>
  <Card.Body>
    <Card.Title>Flat Out Burpies</Card.Title>
    <Card.Text>
    Burpees are the go-to exercise for a quick, intense workout They require the whole body to work together in a functional way.
    </Card.Text>
    <a  class="link-light" href="https://www.youtube.com/watch?v=HA6xpfVO9K8">Let's get moving!</a>
  </Card.Body>  
</Card></Col><br/>
<Col md={3}>
<Card border="success" bg="success"  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={photo}/>
  <Card.Body>
    <Card.Title>High Plank Leg Lifts</Card.Title>
    <Card.Text>
    The 180 jump squat is a plyometric move that fully engages your lower body and your core and helps build strength, speed, and increases aerobic fitness. 
    </Card.Text>
    <a className="link-light" href="https://www.youtube.com/watch?v=aWyo34mLLw0">Let's get moving!</a>
  </Card.Body>
</Card>
</Col>
</Row><br/>
<Row>
<Col md={3}>
<Card border="success" bg="success"  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={knees}/>
  <Card.Body>
    <Card.Title>Knee Push Ups</Card.Title>
    <Card.Text>
    Knee push-ups are a legit upper-body exercise. They're the perfect intro to standard push-ups.
    </Card.Text>
    <a className="link-light" href="https://www.youtube.com/watch?v=xc0GYALoFyA">Let's get moving!</a>
  </Card.Body>
</Card>
</Col>
<Col md={3}>
<Card border="success" bg="success" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={jumps}/>
  <Card.Body>
    <Card.Title>Flat Out Burpies</Card.Title>
    <Card.Text>
    Knee push-ups are a legit upper-body exercise. They're the perfect intro to standard push-ups.
    </Card.Text>
    <a className="link-light" href="https://www.youtube.com/watch?v=HA6xpfVO9K8">Let's get moving!</a>
  </Card.Body>
</Card>
</Col>
</Row>
    </div>

  )
}

export default Exercises;