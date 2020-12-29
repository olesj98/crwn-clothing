export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if(existingCartItem) {
    return cartItems.map(cartItem => (
      cartItem.id === itemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    ))
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }]
};

export const removeItemFromCart = (cartItems, itemToRemove) => cartItems
  .filter(cartItem => cartItem.id !== itemToRemove.id);

export const decreaseItem = (cartItems, itemToDecrease) => {
  if (itemToDecrease.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToDecrease.id);
  }

  return cartItems.map(item => (item.id === itemToDecrease.id)
    ? { ...item, quantity: item.quantity - 1 }
    : item
    );
};
