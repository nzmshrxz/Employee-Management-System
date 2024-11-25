import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')


  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
    
  }

  const abc = (e)=>{
    setEmail(e.target.value)
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>

      <div className='border-2 border-emerald-600 p-20 rounded-xl'>

      <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>

        <input required value={email} onChange={abc}  className='border-2 text-white outline-none bg-transparent border-emerald-600 py-3 placeholder:text-gray-500 px-5 text-xl rounded-full ' type="email" placeholder='Enter Your Email' />

        <input required value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }}  className='border-2 text-white outline-none bg-transparent border-emerald-600 py-3 placeholder:text-gray-500 px-5 text-xl rounded-full mt-3' type="password" placeholder='Enter Your Password' />

        <button type='submit' className='border-2 text-white outline-none bg-emerald-600 border-none py-3 mt-5 placeholder:text-white px-10 text-xl rounded-full '>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login
