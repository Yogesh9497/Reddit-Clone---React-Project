import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function LeftSidebar() {
  return (
    <>
      <Card className="reddit-sidebar" style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>Feeds</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
        <Card.Link href="#">Home</Card.Link>
        </ListGroupItem>
        <ListGroupItem>
        <Card.Link href="#">Popular</Card.Link>
        </ListGroupItem>
      </ListGroup>


      <Card.Body>
        <Card.Title>Recent</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
        <Card.Link href="#">r/India</Card.Link>
        </ListGroupItem>
        <ListGroupItem>
        <Card.Link href="#">r/React.js</Card.Link>
        </ListGroupItem>
        <ListGroupItem>
        <Card.Link href="#">r/developersIndia</Card.Link>
        </ListGroupItem>
      </ListGroup>
      
      <Card.Body>
        <Card.Title>Topics</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
        <Card.Link href="#">Gaming</Card.Link>
        </ListGroupItem>
        <ListGroupItem>
        <Card.Link href="#">Sports</Card.Link>
        </ListGroupItem>
        <ListGroupItem>
        <Card.Link href="#">Business & Economics</Card.Link>
        </ListGroupItem>
        <ListGroupItem>
        <Card.Link href="#">Television</Card.Link>
        </ListGroupItem>
      </ListGroup>
    </Card>
    </>
  );
}

export default LeftSidebar