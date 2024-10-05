import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

export default function BestSaller() {
  const { products } = useContext(ShopContext);
  const [bestSaller, setBestSaller] = useState([]);

  useEffect(() => {
    setBestSaller(products.filter((product) => product.bestseller));
  }, []);
  console.log(bestSaller);
  return (
    <div>
      <div className="py-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={"BEST"} text2={"SALLERS"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur eum eaque alias accusamus iusto perspiciatis
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6 justify-center ">
          {bestSaller.map((item, index) => {
            return (
              <ProductItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
