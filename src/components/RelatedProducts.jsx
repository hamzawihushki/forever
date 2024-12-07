import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from "../components/Title"
import ProductItem from "../components/ProductItem"
export default function RelatedProducts({ category, subCategory }) {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([])
    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter(product => product.category === category && product.subCategory === subCategory)
            setRelated(productsCopy.slice(0, 5))
        }
    }, [products])
    return (
        <div className='mt-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1="Related" text2={"Productss"}></Title>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>{
                related.map((item, index) => {
                    return <ProductItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                    />
                })
            }</div>
        </div>
    )
}
