import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand><Link to="/" className="header-link">Reactshoppe</Link></Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Nav>
        <CartButton />
      </Nav>
    </Navbar>
  );
};

export default Navigation;