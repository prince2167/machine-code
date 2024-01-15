import { products } from "@/constants/data";
import React from "react";
import CartCard from "./CartCard";

const Cart = () => {
  return (
    <div className="max-w-[1680px] w-full  mt-4 flex justify-center items-center">
      <div className="flex items-start gap-6 flex-wrap">
        <div className=" w-[850px] ">
          <div className=" flex flex-wrap justify-between items-center p-3  border border-gray-300 bg-white rounded-sm">
            <p className="text-sm">From Saved Addresses</p>
            <button className="text-[#2874f0] text-sm font-semibold px-3 py-2 border border-gray-300 bg-white rounded-md">
              Enter Delivery Pincode
            </button>
          </div>

          <div className="mt-4">
            {products.map((product) => (
              <CartCard key={product.id} product={product} />
            ))}
          </div>

          <div className=" sticky bottom-0 w-full  h-[80px] bg-white z-10 flex flex-col justify-center items-end pr-10">
            <button className="bg-orange-500 w-[250px] h-[50px]  text-white font-semibold ">
              PLACE ORDER
            </button>
          </div>
        </div>

        <div className="bg-red-500 w-[400px]">Checkout</div>
      </div>
    </div>
  );
};

export default Cart;
