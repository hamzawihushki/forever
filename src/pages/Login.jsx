import React, { useState } from "react";

export default function Login() {
  const [currentState, setCurrentstate] = useState("SignUp");
  const onSubmitHandler = async (e) => {
    e.preventDefault()

  }
  console.log(currentState)
  return <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
    <div className="inline-flex items-center gap-2 mb-2 mt-10">
      <p className="prata-regular text-3xl">{currentState}</p>
      <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
    </div>
    {currentState === "Login" ? "" : <input className={`w-full px-3 py-2 border border-gray-800 `} placeholder="Name" type="text" name="" id="" />}
    <input className="w-full px-3 py-2 border border-gray-800 " placeholder="Email" type="email" name="" id="" />
    <input className="w-full px-3 py-2 border border-gray-800 " placeholder="Password" type="password" name="" id="" />
    <div className="flex justify-between w-full text-sm mt-[-8px]">
      <p className="cursor-pointer">
        Forgot Your Password ?
      </p>
      {
        currentState === "SignUp" ?
          <p onClick={() => setCurrentstate("Login")} className="cursor-pointer" >Login Here</p> :
          <p onClick={() => setCurrentstate("SignUp")} className="cursor-pointer" >Create account</p>
      }
    </div>
    <button className="w-full m-auto text-white bg-gray-800 py-2 hover:bg-gray-700 transition-all  " >
      {currentState}</button>
  </form >;
}
