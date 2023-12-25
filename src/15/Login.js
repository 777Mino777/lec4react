import LoginForm from "./LoginForm"
import Logout from "./Logout"
import { useState, useEffect } from "react"

const Login = () => {
const [user, setUser] = useState(null);

useEffect(() => {
    localStorage.setItem("user", "minho@busan.ac.kr") ;
    localStorage.setItem("pwd", "1234") ;

    setUser(localStorage.getItem("user"))
}, [])
  return (
    <main className="container">
      { user ? <Logout user={user} setUser={setUser}/>
             : <LoginForm setUser={setUser}/>
  }
    </main>
  )
}

export default Login
