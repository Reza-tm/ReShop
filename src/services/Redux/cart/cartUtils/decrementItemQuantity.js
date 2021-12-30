export const decrementItemQuantity = (currentItems, itemToIncrease) => {
  const decrementedItem = currentItems.map((item) =>
    item.id == itemToIncrease.id ? { ...item, quantity: item.quantity - 1 } : item
  );
  localStorage.setItem("cartItems", JSON.stringify(decrementedItem));
  return decrementedItem;
};
