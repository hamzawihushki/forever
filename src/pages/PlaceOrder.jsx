import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

export default function PlaceOrder() {
  const { navigate } = useContext(ShopContext);
  const [method, setMethod] = useState("cod")
  return <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">
    {/* Order left side */}
    <div className="flex flex-col gap-4 w-full sm:max-w-[480px] ">
      <div className=" text-xl sm:text-2xl my-3">
        <Title text1={"delivery"} text2={"information"} />
      </div>
      <div className=" flex gap-3">
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First Name" name="" id="" />
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last Name" name="" id="" />
      </div>
      <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email Address" name="" id="" />
      <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" name="" id="" />
      <div className=" flex gap-3">
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" name="" id="" />
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" name="" id="" />
      </div>
      <div className=" flex gap-3">
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode" name="" id="" />
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" name="" id="" />
      </div>
      <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone number" name="" id="" />
    </div>
    {/* Order right side */}
    <div className="mt-8">
      <div className="mt-8 min-w-80">
        <CartTotal />
      </div>
      <div className="mt-12">
        <Title text1={"Payment"} text2={"Method"} />
        <div className="flex gap-3 flex-col lg:flex-row">
          <div onClick={() => setMethod("stripe")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-lime-500" : ""}`}></p>
            <img className="h-5 mx-4 " src={assets.stripe_logo} alt="" />
          </div>
          <div onClick={() => setMethod("raz")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "raz" ? "bg-lime-500" : ""}`}></p>
            <img className="h-5 mx-4 " src={assets.razorpay_logo} alt="" />
          </div>
          <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-lime-500" : ""}`}></p>
            <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
          </div>
        </div>
        <div className="w-full text-end mt-8">
          <button onClick={() => navigate('/orders')} className="bg-black mt-10 text-white py-2 px-8  hover:bg-slate-900 transition-all">PLACE ORDER</button>
        </div>
      </div>

    </div>
  </div >;
}
