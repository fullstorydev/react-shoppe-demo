import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from './Cart';
import Checkout from './Checkout';
import Products from './Products';
import Navigation from './Navigation';
import ThankYou from './ThankYou';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/thankyou">
          <ThankYou />
        </Route>
        <Route path="/">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
