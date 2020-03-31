import { BillingInfo } from '../types/checkout';
import { Product } from '../types/product';

export const makePurchase = (billingInfo: BillingInfo, puchasedProducts: Product[]) => {
  // NOTE: this is a stub service - there would be an external API call here
  return Promise.resolve({ billingInfo, puchasedProducts });
};