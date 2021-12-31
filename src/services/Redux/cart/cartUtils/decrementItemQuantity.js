export const decrementItemQuantity = (currentItems, itemToIncrease) => {
  const decrementedItem = currentItems.map((item) =>
    item.id === itemToIncrease.id ? { ...item, quantity: item.quantity - 1 } : item
  );
  return decrementedItem;
};
