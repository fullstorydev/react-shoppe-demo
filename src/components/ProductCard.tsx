import React from 'react';
import {
  Card,
  Button,
} from 'react-bootstrap';
import { AppDispatch } from '../actions';
import { addToCart } from '../actions/cart';
import { Product } from '../types/product';
import { useDispatch } from 'react-redux'

type Props = {
  product: Product
};

const ProductCard: React.FC<Props> = ({ product }) => {  
  const dispatch = useDispatch<AppDispatch>();
  return(
    <Card>
      <div style={{backgroundImage: `url(${product.image})`}} className="product-image"></div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <span className="price">${product.price} {product.unit}</span>
        <Button className="cart-button" variant="outline-primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
