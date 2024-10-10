import { useContext, useState } from "react"
import { UserContext } from "../usercontext/UserContext"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

function Login() {
    const {setUser}=useContext(UserContext)
    const nevigate = useNavigate()

    const [formLogin,setFormLogin]=useState({
        username:"",
        password:""
    })

    const usernameinput=(e)=>{
        setFormLogin({
            ...formLogin,
            username:e.target.value

        })
    }

    const passwordinput=(e)=>{
        setFormLogin({
            ...formLogin,
            password:e.target.value

        })
    }
const handleSubmit =(e)=>{
    e.preventDefault()
    const url="https://66e7e69bb17821a9d9da6eb2.mockapi.io/login"

    axios.get(url)
    .then((res)=>{
        console.log(res.data);
        const user =res.data.find((user)=>
            user.username === formLogin.username  && user.password === formLogin.password

        )
        if(user){
            alert("wellcom")
            setUser(user.username)
            nevigate("/")
        }else{
alert("invild")
        }
        
    }).catch(function (error) {
        console.log(error);
      })

}


  return (
    <div>
        <form onSubmit={handleSubmit}>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Username" onChange={usernameinput} value={formLogin.username} required/>
</label>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow"  onChange={passwordinput} value={formLogin.password} required/>
</label>
<button type="submit">Log in</button>
</form>
<span>new account</span>
<Link to="/signup"><button type="button">signUp</button></Link>
    </div>
  )
}

export default Login