import React, { useEffect, useState } from 'react'
import axios from "axios"
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'


function Book() {
    const [books , setBooks ]=useState([])

    useEffect(()=>{
        const apikey="MnjGnhUOKLOCiSAf3Gs6Sv1bjtJKVb93"
        const url=`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apikey}`
        axios.get(url)
        .then((res)=>{
            console.log(res.data.results.books);

            setBooks(res.data.results.books)
        }).catch(function (error) {
            console.log(error);
          })

    },[])

  return (
    <div>

<NavBar/>
 {books.map((book,index)=>{ 
    return( 
<div className="card bg-base-100 w-96 shadow-xl" key={index}>
  <figure>
    <Link to={`/bookdetails/${index}`}>
    <img
      src={book.book_image}
      alt="Book" />
      </Link>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{book.title}</h2>
    <p>{book.author}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
     )
})}


    </div>
  )
}

export default Book