import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Authprovider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)
  

  const [title, setTitle] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [assign, setAssign] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  const [newtask, setNewTask] = useState({})


  const submitHandler = (e)=>{

    e.preventDefault()

    setNewTask({title, taskDate, category, description, active:false, newTask:true, fail:false, completed:false })

    const data = userData
    
    data.forEach((elem)=>{
      if(assign == elem.firstName){
        elem.tasks.push(newtask)
        elem.taskCount.newTask = elem.taskCount.newTask + 1

        console.log(elem)
      }
    })

    setUserData(data)

    
    
    setTitle("")
    setAssign("")
    setTaskDate("")
    setCategory("")
    setDescription("")
  }

  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full  items-start justify-between'>
        <div className='w-1/2'>
        <div><h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
        <input value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Make a ui desing' /></div>
        <div><h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
        <input value={taskDate} onChange={(e)=>{
          setTaskDate(e.target.value)
        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'  type="Date" /></div>
        <div><h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
        <input value={assign} onChange={(e)=>{
          setAssign(e.target.value)
        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Employee Name' /></div>
        <div><h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
        <input value={category} onChange={(e)=>{
          setCategory(e.target.value)
        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Design,Dev,etc' />
        </div>
        </div>
        <div className='w-2/5 flex flex-col items-start'><h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
        <textarea value={description} onChange={(e)=>{
          setDescription(e.target.value)
        }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" cols={30} rows={10} id=""></textarea>
        
        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
        
      </form>
    </div>
  )
}

export default CreateTask
