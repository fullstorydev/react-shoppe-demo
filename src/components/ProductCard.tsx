import React from 'react';
import {
  Card,
  Button,
} from 'react-bootstrap';
import { Product } from "../types/product";

type Props = {
  product: Product
};

const ProductCard = ({ product }: Props) => {  
  return(
    <Card>
      <div style={{backgroundImage: `url(${product.image})`}} className="product-image"></div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <span className='price'>${product.price} {product.unit}</span>
        <Button className='cart-button' variant="outline-primary" onClick={() => {}}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;