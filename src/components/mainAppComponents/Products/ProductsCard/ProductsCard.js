import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";

const ProductsCard = ({ name, price, imgUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, display: "none" }}
      animate={{ opacity: 1, display: "flex" }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
      style={{ scrollSnapAlign: "center", zIndex: -1 }}
      className="h-full flex-shrink-0  flex-col justify-between w-72 bg-red-50/10 rounded-lg p-2"
    >
      <Tilt className="Tilt" options={{ max: 20 }} style={{ height: "50%", width: "100%" }}>
        <div className="w-full h-full rounded-lg border-2 overflow-hidden">
          <img src={imgUrl} className="w-full h-full  object-cover" />
        </div>
      </Tilt>
      <div>
        <h2 className="text-white font-semibold capitalize text-xl overflow-ellipsis whitespace-nowrap my-4">{name}</h2>
        <p className="text-white/80 overflow-line text-sm overflow-ellipsis mb-4 w-full whitespace-pre-line">
          Eu exercitation ullamco id Lorem eiusmod qui in proident nisi occaecat. Cupidatat in eiusmod laboris do sit fugiat ad
          exercitation ullamco eiusmod Lorem. Cupidatat deserunt ullamco dolor proident voluptate. Reprehenderit qui ipsum eu
          nostrud consequat do non do ea et officia in sunt. Excepteur excepteur adipisicing enim consectetur labore cillum do ex
          mollit. Eu culpa elit eiusmod irure enim amet est
        </p>
      </div>
      <div className="flex w-full space-x-2">
        <motion.button className="text-white font-bold px-3 py-2 w-2/3 bg-emerald-300/30 rounded-md">Add To Cart</motion.button>
        <div className="px-3 py-2 w-1/3 font-bold text-center rounded-lg bg-white/80">{price} $</div>
      </div>
    </motion.div>
  );
};

export default ProductsCard;
