import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';

function SearchPage({data,error,loading}) {

  const[book,setBook]=useState("");
  console.log(book);

const submition=(e)=>{

  e.preventDefault();

}

  return (
    <>
    <div >
      <h1 align="center">Book Name</h1>
      <form action={`${book}`}  style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <input type="text" style={{borderRadius:'7px'}} onChange={(e)=>setBook(e.target.value)} />
      <button className='btn btn-secondary mt-2' onSubmit={submition}>Search</button>
      </form>
    </div>
    </>
  )
}

export default SearchPage
