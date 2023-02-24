import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function RightSidebar() {
  return (
    <>
      <Card className="reddit-right-sidebar" style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>Recommended Communities</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
        <Card.Link href="#">r/technology</Card.Link>
        </ListGroupItem>
        <ListGroupItem>
        <Card.Link href="#">r/science</Card.Link>
        </ListGroupItem>
        <ListGroupItem>
        <Card.Link href="#">r/programming</Card.Link>
        </ListGroupItem>
        <ListGroupItem>
        <Card.Link href="#">r/gaming</Card.Link>
        </ListGroupItem>
      </ListGroup>
    </Card>
    </>
  );
}

export default RightSidebar