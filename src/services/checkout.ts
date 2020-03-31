import { CheckoutData } from '../types/checkout';
import { Product } from '../types/product';

export const makePurchase = (checkoutData: CheckoutData, puchasedProducts: Product[]) => {
  // NOTE: this is a stub service - there would be an external API call here
  return Promise.resolve({ checkoutData, puchasedProducts });
};