import React from "react";
import Title from "../components/Title"
import NewsLetterBox from "../components/NewsLetterBox"
import { assets } from "../assets/assets";
export default function About() {
  return <div className="border-t pt-14 ">
    <div className="text-2xl mb-3 text-center">
      <Title text1={"about"} text2={"us"} />
    </div>
    <div className=" flex lg:flex-row justify-center gap-5 p-5 flex-col md:items-start items-center">
      <img className="w-full lg:w-1/3  " src={assets.about_img} alt="" />
      <div className="text-gray-700 flex flex-col gap-5 pr-4">
        <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
        <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
        <b>Our Mission</b>
        <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
      </div>
    </div>
    <div className="text-2xl m-5 ">
      <Title text1={"why"} text2={"choose us"} />
    </div>
    <div className="flex flex-col md:flex-row text-sm mb-20 p-5">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance:</b>
        <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience:</b>
        <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service:</b>
        <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
      </div>
    </div>
    <NewsLetterBox />
  </div>;
}
