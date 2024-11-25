import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Authprovider'


const Alltask = () => {

 


  const [userData, setUserData] = useContext(AuthContext)


  return (
    <div className='bg-[#1C1C1C] p-5 rounded mt-5'>
       <div className='bg-black border-2 border-emerald-500 font-extrabold mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 bg-black'>Employee Name</h2>
        <h3 className='w-1/5 bg-black'>New Tasks</h3>
        <h5 className='w-1/5 bg-black'>Active Tasks</h5>
        <h5 className='w-1/5 bg-black'>Completed Tasks</h5>
        <h5 className='w-1/5 bg-black'>Failed</h5>
      </div>
      <div className='overflow-auto'>
      {userData.map((elem, idx)=>{
      return <div key={idx} className='bg-black border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 text-white'>{elem.firstName}</h2>
        <h3 className='w-1/5 text-blue-600'>{elem.taskCount.newTask}</h3>
        <h5 className='w-1/5 text-yellow-600'>{elem.taskCount.active}</h5>
        <h5 className='w-1/5 text-green-600'>{elem.taskCount.completed}</h5>
        <h5 className='w-1/5 text-red-600'>{elem.taskCount.fail}</h5>
      </div>
      })}
      </div>
    </div>
  )
}

export default Alltask
