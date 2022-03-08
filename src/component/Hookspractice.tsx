import React,{useState,useEffect} from 'react'


function Hookspractice() {

  let [first, setfirst] = useState(0)
  
  return (
    <div>
        <h1> {first} </h1>
        <button className='btn btn-primary' onClick={()=>setfirst(first+10)}>Add</button>
        <button className='btn btn-primary mx-2' onClick={()=>setfirst(first-10)}>Minus</button>
    </div>
  )
}
export default Hookspractice 
