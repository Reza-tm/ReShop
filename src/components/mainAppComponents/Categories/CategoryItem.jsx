import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ title, image, lg }) => {
  return (
    <motion.div
      whileHover={{ opacity: 1, scale: 1.01 }}
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`${
        lg ? "w-[45%]" : "w-[31%]"
      } bg-no-repeat flex justify-center items-center bg-cover border-2 opacity-90  border-gray-700 h-[300px] xl:h-[350px] mx-2 mb-4 rounded-lg bg-red-50`}
    >
      <motion.div
        whileHover={{ width: "100%", height: "100%" }}
        transition={{ duration: 0.4 }}
        className="w-44 h-16 bg-black/70 hover:bg-gray-800/70 transition duration-300  border border-white flex rounded-lg justify-center items-center"
      >
        <Link to={`/${title}`} className="block">
          <p className="font-bold uppercase text-white text-xl ">{title}</p>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CategoryItem;
