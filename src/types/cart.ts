export enum CartTypes {
  AddToCart = 'ADD_TO_CART',
  RemoveFromCart = 'REMOVE_FROM_CART',
};

// https://patrickdesjardins.com/blog/how-to-set-and-read-bitwise-enum-values-in-typescript
export enum CartViewModifier {
  NONE = 0,
  DELETE = 1 << 0,
};