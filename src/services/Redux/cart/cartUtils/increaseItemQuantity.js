export const increaseItemQuantity = (currentItems, itemToIncrease) => {
  const increasedItem = currentItems.map((item) =>
    item.id == itemToIncrease.id ? { ...item, quantity: item.quantity + 1 } : item
  );
  return increasedItem;
};
