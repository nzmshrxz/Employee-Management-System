import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDash from './components/Dash/EmployeeDash'
import AdminDash from './components/Dash/AdminDash'
import { AuthContext } from './context/Authprovider'

const App = () => {
  const [user, setUser] = useState(null)
  const [userLoggedInData, setuserLoggedInData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  // Check localStorage on initial load and update state accordingly
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser)
      setUser(parsedUser.role)  // Set user state to "admin" or "employee"
      
      // If it's an employee, set the userLoggedInData state as well
      if (parsedUser.role === "employee" && parsedUser.data) {
        setuserLoggedInData(parsedUser.data)
      }
    }
  }, [])  // Runs only once on initial mount

  const handleLogin = (email, password) => {
    // Check for admin login
    if (email === "admin@me.com" && password === "123") {
      setUser("admin")
      localStorage.setItem('loggedInUser', JSON.stringify({ role: "admin" }))
      // console.log("hai bhai hai")  // Log this after successful admin login
    } else if (userData) {
      // Check for employee login
      const employee = userData.find((e) => email === e.email && e.password === password)
      if (employee) {
        setUser("employee")
        setuserLoggedInData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: "employee", data: employee }))
        // console.log("hai bhai hai")  // Log this after successful employee login
      } else {
        alert("Invalid Credentials")
      }
    } else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDash changeUser={setUser} /> : (user === "employee" ? <EmployeeDash changeUser={setUser}  data={userLoggedInData} /> : null)}
    </>
  )
}

export default App
