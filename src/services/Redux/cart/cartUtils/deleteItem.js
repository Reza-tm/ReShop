export const deleteItem = (currentItems, itemToDelete) => {
  const deletedItem = currentItems.filter((item) => item.id !== itemToDelete.id);
  localStorage.setItem("cartItems", JSON.stringify(deletedItem));
  return deletedItem;
};
