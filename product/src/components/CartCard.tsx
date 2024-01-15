/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const CartCard = ({ product }: any) => {
  return (
    <div className="border border-gray-300 px-8 py-6 flex justify-between">
      <div className="flex gap-4  ">
        <div className="flex flex-col justify-center ">
          <img src={product.image} alt="product" className="w-[90px]" />
          <div className="mt-4 flex gap-2 items-center">
            <span className="border border-gray-300 rounded-full px-2 text-[18px] flex justify-center items-center">
              -
            </span>
            <span className="border border-gray-300 rounded-sm px-4 flex justify-center items-center">
              1
            </span>
            <span className="border border-gray-300 rounded-full px-2 text-[18px]  flex justify-center items-center">
              +
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className=" ">
            <p className="hover:text-[#2874f0]">{product.name}</p>
            <p className="text-gray-400 mt-1">Size: {product.size}</p>
          </div>
          <p>Seller: {product.sellerName}</p>
          <div className="flex gap-2">
            <span className="text-gray-500 line-through">₹{product.mrp}</span>
            <p className="font-semibold">₹{product.price}</p>
            <span className="text-green-600 ">
              {product.discountPercentage}% off
            </span>
            <span className="text-green-600   font-[500]">
              {product.offer} offer available{" "}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[18px] text-gray-900 font-[500] ">
            <p>Save For Later</p>
            <p>Remove</p>
          </div>
        </div>
      </div>

      <p className="text-[14px] mr-10">
        Delivery by {product.date} |
        <span className="text-green-600"> Free</span>
      </p>
    </div>
  );
};

export default CartCard;
