// import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import { logout } from './redux/reducer/auth';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaUser} from "react-icons/fa";

function RedditNavbar() {
    // const location = useLocation();
    // const [url, setUrl] = useState(null);
    const dispatch = useDispatch()
    // const {name,pic} = useSelector((state)=>state.reddit_auth)

    // useEffect(() => {
    //   setUrl(location.pathname);
    // }, [location]);
  return (
    <Navbar bg="warning" expand="lg">
      <Container fluid >
      <Image className='ms-5' width="7%" src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-md-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link className="ms-2" href="#action1">Home</Nav.Link> */}
          </Nav>
          <Form className="d-flex me-md-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <NavDropdown className='me-md-5' title={<FaUser style={{fontSize: 16}}/>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="" onClick={() => dispatch(logout())}>Log Out</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RedditNavbar;