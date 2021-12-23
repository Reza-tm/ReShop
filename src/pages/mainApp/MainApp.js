import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CategoryItem from "../../components/mainAppComponents/Categories/CategoryItem";
import CategorySkeleton from "../../components/mainAppComponents/Categories/CategorySkeleton";
import { getCategoriesData } from "../../services/Firebase/FirebaseCategories/FirebaseCategories";

const MainApp = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    getCategoriesData().then((res) => setCategories(res));
  }, []);
  console.log(categories);
  return (
    <div className="flex items-center justify-center h-full">
      <header className="relative w-32">
        <Header />
      </header>
      <main className="w-full">
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
      </main>
    </div>
  );
};

export default MainApp;
