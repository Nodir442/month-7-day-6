import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product/product-reducer";
export const ProductCard = ({ name, price, count, img, id }) => {
  const dispatch = useDispatch();
  const buyProduct = () => {
    dispatch(addProduct({ name, price, count, img, id }));
  };
  return (
    <div className="cursor-pointer rounded-xl border-[2px] border-white bg-white p-4 transition-all duration-500 hover:bg-black hover:text-white">
      <img
        className="w-[230px] rounded-xl bg-white"
        src={img}
        alt="ProductImg"
      />
      <h1 className="mt-3 text-xl font-medium">{name}</h1>
      <strong>{price} $</strong>
      <div className="mt-3 text-right">
        <p className="font-normal">
          Available: <span className="font-bold">{count}</span>
        </p>
        <button
          onClick={buyProduct}
          className="mt-2 rounded-xl border-[2px] border-white bg-black px-4 py-2 text-white transition-all duration-300 hover:border-black hover:bg-white hover:text-black"
        >
          Buy
        </button>
      </div>
    </div>
  );
};
