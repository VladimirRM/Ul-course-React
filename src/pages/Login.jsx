import React,{useContext} from 'react'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../Router/context'

const Login = () => {
     const {isAuth,setIsAuth} = useContext(AuthContext)
    const login = event =>{
        event.preventDefault()
        setIsAuth(true)
    }
  return (
    <div>
         <h1>Page for the Login</h1>
         <form onSubmit={login}>
            <MyInput type="text"
            placeholder='Enter login'
            />
            <MyInput type="password"
            placeholder='Enter password'
            />
            <button>Enter</button>
         </form>
    </div>
  )
}

   export default Login
