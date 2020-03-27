import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../store';

const CartButton = () => {
 
  const products = useSelector((state: AppState) => state.cartState.products);

  return(
    <Link to="/cart">
      <Button>My Cart {products.length} <span className='fa fa-shopping-cart'></span></Button>
    </Link>
  );
};

export default CartButton;
