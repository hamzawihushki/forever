import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm border-t pt-7'>
                <div className=''>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero molestias consectetur aliquid rerum, assumenda unde tempora dolorum perspiciatis maxime! Molestias architecto dignissimos soluta facere ducimus perferendis delectus? Ad, delectus?</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li> privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+962 7 7275 6325</li>
                        <li>hushkihamza@gmail.com</li>
                    </ul>
                </div>

            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center '>
                    Copyright 2023 Hushkihamza. All rights reserved.

                </p>
            </div>
        </div>
    )
}
