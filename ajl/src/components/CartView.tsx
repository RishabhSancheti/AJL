"use client"

import Image from "../../node_modules/next/image";

const CartView = () => {
  
    const cartItems = true;
  
    return (
    <div className="absolute w-max p-4 rounded-md shadow-[0_5px_12px_rgb(0,0,0,0.2)] z-10 bg-white top-12 right-0 flex flex-col gap-6">
      {!cartItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
        {/* LIST */}
        <div className="flex gap-4">
            <Image src="/Hero1.jpeg" alt="" width={72} height={96} className="object-cover rounded-md"></Image>
            <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div className="">
                    {/* Title */}
                    <div className="flex items-center justify-between gap-8">
                        <h3 className="font-semibold">Crazy Dress</h3>
                        <div className="p-2 bg-gray-50 rounded-sm">8000 Rs</div>
                    </div>
                    {/* Description */}
                    <div className="text-sm text-gray-500"> Available</div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty: 2</span>
                    <span className="text-blue-500 cursor-pointer">Delete</span>
                </div>
            </div>
        </div>
        {/* BOTTOM */}
        <div className="">
            <div className="flex items-center justify-between font-semibold">
                <span className="">SubTotal</span>
                <span className="">16000 Rs</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">Taxes and Delivery Cost calculated at checkout.</p>
            <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-3 ring-1 ring-gray-300">View Cart</button>
                <button className="rounded-md py-3 px-3 bg-black text-white">Checkout</button>
            </div>
        </div>
        </>)}
    </div>
  )
}

export default CartView
