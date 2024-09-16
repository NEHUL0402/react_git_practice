"use client"
import React from 'react'
import axios from 'axios'
import { useState } from 'react'


 const page = () => {
 
  const [name, setName] = useState('')
  const display = async()=>{

    const data = await axios.get("https://picsum.photos/v2/list");
    setName(JSON.stringify(data));
  }
  return (
    <>
    <button onClick={display} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">click</button>
 <div className='mt-5 p-4 bg-slate-500 text-black'>{name}</div>  
    </>
  )
}

export default page
