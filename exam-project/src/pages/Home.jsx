import { Link } from "react-router-dom"
import bookhome from "../assets/bookhome.svg"
import NavBar from "../components/NavBar"
import Footer from "../components/footer"
function Home() {
  return (
    <div>        <NavBar/>

    <div className="flex items-center justify-center p-40">
        <div className="flex flex-wrap justify-center items-center">
       <div className="text-center">
        <h1 className="text-5xl text-[#4051e1] font-bold  mb-10">Welcome to our library</h1>
        <Link to="/login"> <button className="btn rounded-badge bg-[#dbdd80] text-xl pl-7 pr-7">Log In</button>
        </Link>
        <Link to="/signup"><button className="btn rounded-badge bg-[#dbdd80] text-xl pl-7 pr-7">Sgin Up</button>
        </Link>

        </div>
        <div>
    <img
    className=""
    src={bookhome}
    />
</div>
</div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home