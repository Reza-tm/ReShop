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
  console.log(categories);
  return (
    <>
      {categories ? (
        <div className="flex flex-wrap justify-center">
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
        </div>
      ) : (
        <div className="flex flex-wrap">
          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton />
          <CategorySkeleton lg />
          <CategorySkeleton lg />
        </div>
      )}
    </>
  );
};

export default MainApp;
