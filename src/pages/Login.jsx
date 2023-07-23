import React from 'react'
import MyInput from '../components/UI/input/MyInput'

const Login = () => {

    const login = (e)=>{
        e.preventDefault()
    }
  return (
    <div>
         <h1>Page for the Login</h1>
         <form onSubmit={submit}>
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
