import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import React, { useEffect, useState } from 'react'
import axios from "axios"

function Book_Details() {
    const [books , setBooks ]=useState("")
    const {id}=useParams()
    useEffect(()=>{
        const apikey="MnjGnhUOKLOCiSAf3Gs6Sv1bjtJKVb93"
        const url=`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apikey}`
        axios.get(url)
        .then((res)=>{
            console.log(res.data.results.books[id]);
  
            setBooks(res.data.results.books[id])
        }).catch(function (error) {
            console.log(error);
          })
  
    },[])


  return (
    <div>
        <NavBar/>
        <div className="flex flex-col items-center p-20">
        <h1 className="text-[#4051e1] text-3xl font-bold">Book Details for {books.title}</h1>
       
        
        
       
       
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={books.book_image}
      alt="Book-img" 
      />

  </figure>
  <div className="card-body">
    <h2 className="card-title"> {books.title}</h2>
    <p>{books.author}</p>
<a href={`${books.amazon_product_url}`} className="btn bg-[#dbdd80]">Purchase</a>
  </div>
</div>

</div>
    </div>
  )
}

export default Book_Details