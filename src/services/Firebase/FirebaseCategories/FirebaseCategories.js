import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export const getCategoriesData = async () => {
  let categories = [];
  const categoriesQuery = await getDocs(collection(db, "categories"));
  categoriesQuery.forEach((doc) => {
    categories.push(doc.data());
  });
  return categories;
};
