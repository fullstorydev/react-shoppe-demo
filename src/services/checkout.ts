import { CheckoutData } from '../types/checkout';

export const makePurchase = (checkoutData: CheckoutData) => {
  // NOTE: this is a stub service - there would be an external API call here
  return Promise.resolve(checkoutData);
};