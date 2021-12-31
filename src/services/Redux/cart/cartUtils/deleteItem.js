export const deleteItem = (currentItems, itemToDelete) => {
  const deletedItem = currentItems.filter((item) => item.id !== itemToDelete.id);
  return deletedItem;
};
