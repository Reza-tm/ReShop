import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsCard from "../../components/mainAppComponents/Products/ProductsCard/ProductsCard";
import ProductsSkeleton from "../../components/mainAppComponents/Products/ProductsSkeleton";
import { motion, AnimatePresence } from "framer-motion";
import { getProductByCategory } from "../../services/Firebase/FirebaseProducts/getProductByCategory";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const emoji = {
    sneakers: "👟",
    hats: "👒",
    jackets: "🧥",
    women: "👱‍♀️",
    men: "🤵‍♂️",
  };
  const params = useParams();

  useEffect(() => {
    getProductByCategory(params.id).then((res) => setProducts(res));
  }, []);

  return (
    <div>
      <h1 className="font-semibold  uppercase text-3xl text-white my-1">
        {params.id} {emoji[params.id]}
      </h1>
      <div
        style={{ scrollSnapType: "x mandatory" }}
        className="h-[520px] overflow-scroll space-x-4 w-full border-4 flex items-center rounded-lg p-5 border-teal-900/20"
      >
        <AnimatePresence>
          {products.length !== 0 &&
            products.map(({ imgUrl, name, price }, index) => (
              <ProductsCard key={index} imgUrl={imgUrl} name={name} price={price} />
            ))}
        </AnimatePresence>
        <AnimatePresence>
          {products.length == 0 && (
            <>
              <ProductsSkeleton />
              <ProductsSkeleton />
              <ProductsSkeleton />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CategoryPage;
