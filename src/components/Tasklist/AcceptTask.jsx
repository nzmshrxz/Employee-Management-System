import React from 'react'

const AcceptTask = ({data}) => {
  // console.log(data)
  return (
    <div className='h-full p-5 flex-shrink-0 w-[300px] bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-500 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-2'>
       {data.description}
      </p>
      <div className='flex justify-between mt-4'></div>
      <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
      <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
      </div>
  )
}

export default AcceptTask
