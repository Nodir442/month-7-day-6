import React from "react";
import { useSelector } from "react-redux";
export const Header = () => {
  const { totalCount } = useSelector((state) => state.product);
  return (
    <div className="mx-auto my-10 flex w-[1250px] items-end justify-between text-white">
      <h1 className="text-5xl font-bold">Header</h1>
      <p className="text-xl">Types of goods: {totalCount}</p>
    </div>
  );
};
