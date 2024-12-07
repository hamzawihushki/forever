import React from 'react'

export default function NewsLetterBox() {
    function submitHandler(event) {
        console.log("canceled")
        event.preventDefault()
    }
    return (
        <div>
            <div className='flex flex-col text-center justify-center  '>
                <p className='text-gray-700 text-medium text-3xl'>Subscribe now & get 20% off</p>
                <p className='text-gray-500 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <form onSubmit={submitHandler} className='flex flex-1  items-center mx-auto my-6   pl-3 w-full sm:w-1/2 '>
                <input type='email' className='border-2  p-3 w-full outline-none' placeholder='Your email address' />
                <button type='submit' className=' text-white bg-gray-800 text-xs px-10 py-4 hover:bg-gray-600 transition'>Subscribe</button>
            </form >
        </div >
    )
}
