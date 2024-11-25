import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='h-full p-5 flex-shrink-0 w-[300px] bg-slate-800 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-500 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-2'>
        {data.description}
      </p>
      <div className='mt-4'>
        <button className='bg-blue-500 py-1 px-2 text-sm'>Accept Task</button>
      </div>
      </div>
  )
}

export default NewTask
