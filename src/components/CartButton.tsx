import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { Product } from '../types/product';

const CartButton = () => {
 
  const products = useSelector<AppState, Product[]>(state => state.cartState.products);

  return(
    <Button onClick={() => {}}>My Cart {products.length} <span className='fa fa-shopping-cart'></span></Button>
  );
};

export default CartButton;
