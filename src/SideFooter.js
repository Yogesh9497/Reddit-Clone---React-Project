import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function SideFooter() {
  return (
    <Card style={{ width: '18rem' }} className="my-5">
        <Card.Text className="mx-4 mt-2">
        reddit is an American social news aggregation, content rating, and discussion website.
        </Card.Text>
      <ListGroup variant="flush">
        <ListGroup.Item>User Agreement</ListGroup.Item>
        <ListGroup.Item>Privacy Policy</ListGroup.Item>
        <ListGroup.Item>Content Policy</ListGroup.Item>
      </ListGroup>
      <Card.Text className='p-2'>Reddit Inc © 2023. All rights reserved</Card.Text>
    </Card>
  );
}

export default SideFooter;