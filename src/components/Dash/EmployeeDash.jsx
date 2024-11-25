import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDash = (props) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser = {props.changeUser} data = {props.data} userData = {props.userData}/>
      <TaskListNumber data = {props.data}/>
      <Tasklist data = {props.data}/>
    </div>
  )
}

export default EmployeeDash
