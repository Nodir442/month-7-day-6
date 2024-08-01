import React from "react";
import { useDispatch } from "react-redux";
import { toggleAmount, removeProduct } from "../redux/product/product-reducer";
export const Card = ({ userPrice, img, name, id, count, userCount }) => {
  const dispatch = useDispatch();
  const changeProductPrice = (type) => {
    dispatch(toggleAmount({ id, type }));
  };
  return (
    <div className="mt-2 w-full cursor-pointer rounded-xl border-[2px] border-white bg-white p-2 transition-all duration-500 hover:bg-black hover:text-white">
      <img className="w-full rounded-xl bg-white" src={img} alt="ProductImg" />
      <h1>{name}</h1>
      <strong>{userPrice} $</strong>
      <p className="text-right">Count:{count}</p>
      <div className="flex justify-between items-center">
        <button
          className="mt-2 rounded-xl border-[2px] border-white bg-black px-4 py-2 text-white transition-all duration-300 hover:border-black hover:bg-white hover:text-black"
          onClick={() => changeProductPrice("add")}
        >
          +
        </button>
        <span className="font-semibold text-xl" >{userCount}</span>
        {userCount > 1 ? (
          <button
            className="mt-2 rounded-xl border-[2px] border-white bg-black px-4 py-2 text-white transition-all duration-300 hover:border-black hover:bg-white hover:text-black"
            onClick={() => changeProductPrice("remove")}
          >
            -
          </button>
        ) : (
          <button
            className="mt-2 rounded-xl border-[2px] border-white bg-black px-4 py-2 text-white transition-all duration-300 hover:border-black hover:bg-white hover:text-black"
            onClick={() => dispatch(removeProduct(id))}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
