import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export const getProductByCategory = async (category) => {
  // let products = [];
  // const productsCollection = collection(db, "products");
  // const q = query(productsCollection, where("category", "==", category));
  // const querySnapshot = getDocs(q)
  //   .then((res) => res.forEach((doc) => products.push(doc.data())))
  //   .then((res) => products);
  let products = [];
  const productsCollection = collection(db, "products");
  const q = query(productsCollection, where("category", "==", category));
  const querySnapshot = getDocs(q)
    .then((res) => res.forEach((doc) => products.push(doc.data())))
    .then((res) => products);
  return querySnapshot;
};
