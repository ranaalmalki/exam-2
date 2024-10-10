import React from 'react'
import NavBar from '../components/NavBar'
import { useContext } from "react"
import { UserContext } from "../usercontext/UserContext"
import bookhome from "../assets/bookhome.svg"

function HomePage() {
    const {user}=useContext(UserContext)

  return (
    <div>
        <NavBar/>
        <div className='flex flex-wrap justify-center p-20'>
        <div className=''> 
        <h1 className="text-5xl text-[#4051e1] font-bold  mb-10">Welcome Back {user}</h1>
<img
src={bookhome}
/>
</div>
        </div>
    </div>
  )
}

export default HomePage