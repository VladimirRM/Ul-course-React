import React from 'react'
import MyInput from '../components/UI/input/MyInput'

const Login = () => {
  return (
    <div>
         <h1>Page for the Login</h1>
         <form>
            <MyInput type="text"
            placeholder='Enter login'
            />
            <MyInput type="password"
            placeholder='Enter password'
            />
         </form>
    </div>
  )
}

   export default Login
