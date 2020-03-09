import React from 'react';
import Products from './Products';
import Checkout from './Checkout';
import Cart from './Cart';
import ThankYou from './ThankYou';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/thankyou'>
          <ThankYou />
        </Route>
        <Route path='/'>
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
