import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import HomePage from "../pages/HomePage"
import Book from "../pages/Book"

const  Router= createBrowserRouter([


    {
        path:"/",
        element:<App/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    },
    {
        path:"/home",
        element:<HomePage/>
    },
    {
        path:"/book",
        element:<Book/>
    },
]) 

export default Router