import { reactive } from "vue";
import type { Product } from "./products";

export interface CartItem {
  quantity: number;
  product: Product;
}

const cart = reactive([] as CartItem[]);

export function addProductToCart(product: Product, quantity: number = 1) {
  const cartItem = cart.find((item) => item.product.id === product.id);
  if (cartItem) { //if item already in cart, just add to quantity
    cartItem.quantity += quantity;
  } else { //if item not in cart, add it
    cart.push({
      quantity,
      product,
    });
  }
}

export function updateProductQuantity(id: number, quantity: number) {
  const cartItem = cart.find((item) => item.product.id === id);
  if (cartItem) {
    cartItem.quantity = quantity;
    if (cartItem.quantity <= 0) {  // remove item if quantity is 0
      cart.splice(cart.indexOf(cartItem), 1);
    }
  }
}

export default cart;
