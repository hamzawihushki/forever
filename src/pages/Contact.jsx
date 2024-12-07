import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

export default function Contact() {
  return <div className="pt-14 border-t">
    <div className="text-2xl mb-3 text-center">
      <Title text1={"about"} text2={"us"} />
    </div>
    <div className="flex md:flex-row justify-center flex-col gap-10 my-10 mb-28  ">
      <img className="w-full md:max-w-[480px]  " src={assets.contact_img} alt="" />
      <div className="flex flex-col gap-5 justify-center items-start ">
        <p className="text-xl text-gray-700">Our Store</p>
        <p className="text-gray-500"> 54709 Willms Station <br /> suite 350, Washington</p>
        <p className="text-gray-500"> Tel : (+962 77 275 6325) <br /> Email: hushkihamza9@gmail.com</p>
        <p className="text-xl text-gray-700">Career at Forever</p>
        <p className=" text-gray-500">Learn more about our teams and job openings.</p>
        <button className="border border-black px-8 py-4 text-sm text-gray-800 hover:bg-slate-800 hover:text-white transition-all duration-500">Explore Jobs</button>


      </div>
    </div>
    <NewsLetterBox />
  </div>;
}
