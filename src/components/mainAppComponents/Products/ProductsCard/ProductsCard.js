import React from "react";

const ProductsCard = ({ name, price, imgUrl }) => {
  return (
    <div
      style={{ scrollSnapAlign: "center" }}
      className="h-5/6 flex-shrink-0 flex flex-col justify-between w-72 bg-red-50/10 rounded-lg p-2"
    >
      <div className="w-full h-1/2 rounded-lg border-2 overflow-hidden">
        <img src={imgUrl} className="w-full h-full  object-cover" />
      </div>
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
        <button className="text-white font-bold px-3 py-2 w-2/3 bg-emerald-300/30 rounded-md">Add To Cart</button>
        <div className="px-3 py-2 w-1/3 font-bold text-center rounded-lg bg-white/80">{price} $</div>
      </div>
    </div>
  );
};

export default ProductsCard;
