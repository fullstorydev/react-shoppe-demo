import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg='dark' expand='lg' fixed='top'>
      <Navbar.Brand><Link to='/' className='header-link'>The Fruit Shoppe</Link></Navbar.Brand>
      <Nav className='mr-auto'></Nav>
      <Nav>
      <Link to='/cart'>Cart</Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;