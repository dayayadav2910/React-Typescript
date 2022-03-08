import React, {useState} from 'react'

function Isloggedin() {

    const [isloggedin, setisloggedin] = useState(false)

    const HandleLogin = ()=>{
        setisloggedin(true)
    }

    const HandleLogout = ()=>{
        setisloggedin(false)
    }
  return (
    <div>
        <h1> UseState Hook </h1>
         <button onClick={HandleLogin}> LogIn</button>
         <button onClick={HandleLogout}>LogOut</button>
         <h4>{isloggedin== true ? "user Is Logedin " : "user is loged out" }</h4>
    </div>
  )
}

export default Isloggedin