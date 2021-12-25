import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import CategoryItem from "../../components/mainAppComponents/Categories/CategoryItem";
import CategorySkeleton from "../../components/mainAppComponents/Categories/CategorySkeleton";
import { getCategoriesData } from "../../services/Firebase/FirebaseCategories/FirebaseCategories";

const MainApp = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    getCategoriesData().then((res) => {
      setCategories(res);
    });
  }, []);
  return (
    <>
      <AnimatePresence>
        {categories && (
          <motion.div
            initial={{ opacity: 0, display: "none" }}
            animate={{ opacity: 1, display: "flex" }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center"
          >
            {categories
              .filter((item) => !item.size)
              .map(({ title, imgUrl }) => (
                <CategoryItem image={imgUrl} title={title} />
              ))}
            {categories
              .filter((item) => item.size)
              .map(({ title, imgUrl }) => (
                <CategoryItem image={imgUrl} title={title} lg />
              ))}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!categories && (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-wrap"
          >
            <CategorySkeleton />
            <CategorySkeleton />
            <CategorySkeleton />
            <CategorySkeleton lg />
            <CategorySkeleton lg />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainApp;
