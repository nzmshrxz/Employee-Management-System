import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Authprovider'

const Header = (props) => {
  
  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const userName = useContext(AuthContext)
  
  

  const handleLogout = ()=>{
    localStorage.setItem('loggedInUser', '')
    // window.location.reload()
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-medium font-'>nazam👋</span></h1>
      <button onClick={handleLogout} className='bg-red-600 text-white px-3 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
