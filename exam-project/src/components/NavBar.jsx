import { useContext } from "react"
import { UserContext } from "../usercontext/UserContext"
import { Link } from "react-router-dom"
import Search from "../pages/Search"
import bookhome from "../assets/bookhome.svg"

function NavBar() {
    const {user}=useContext(UserContext)

  return (
    <div>

<div className="navbar bg-[#dbdd80]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <Link to="/book">book</Link>
        
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-[#4051e1]"><img
    
    src={bookhome}
    className="h-9"
    alt="logo"
    />Book Store</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li>
     
          <Link to="/book">book</Link>
    
      </li>
      <li><a>userpage</a></li>
    </ul>
    
  </div>
  <div className="form-control">
<Search/>
 </div>
  <div className="navbar-end">

    {user?(<div>

Wellcom ,{user}
<Link to="/" className="btn bg-[#4051e1] text-white">Logout</Link>

    </div>):(

<Link to="/login"className="btn btn-outline">Login</Link>

    )}
  </div>
</div>
    </div>
  )
}

export default NavBar