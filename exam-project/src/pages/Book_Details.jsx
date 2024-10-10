import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

function Book_Details() {
    const {id}=useParams()
    console.log(id.books)
  return (
    <div>
        <NavBar/>
        <div>
        Book_Details
{id

}
        </div>


    </div>
  )
}

export default Book_Details