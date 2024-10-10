import Footer from "../components/footer"
import NavBar from "../components/NavBar"

function Read_Books() {
  const [books , setBooks ]=useState([])
  // const [favorites,setFavorites]=useState([])

 
  return (
    <div>
      <NavBar/>
      <div className="p-20">
{/* {books}/ */}
      </div>
      <Footer/>
    </div>
  )
}

export default Read_Books