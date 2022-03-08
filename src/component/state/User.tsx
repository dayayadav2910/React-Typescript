import { type } from 'os'
import React, {useState} from 'react'

type Authuser = {
    name : string,
    email : string
}
function User() {
    // Without using type assertion with usesatate
    // const [user, setuser] = useState <Authuser | null>(null)

    // Using type assertion
    const [user, setuser] = useState <Authuser>({} as Authuser)
    const Handlelogin=()=> {
        setuser({
            name : "Daya",
            email : "daya@gmail.com",
        })
    }

  return (
    <div>
        <h2>Displaying user name and email if the user is loggedin</h2>
        <button onClick={Handlelogin}>Login</button>
        {/* <button onClick={Handleout}>Logout</button> */}
        <h2>User name is {user.name}</h2>
        <h2>User email is {user.email} </h2>
    </div>
  )
}

export default User