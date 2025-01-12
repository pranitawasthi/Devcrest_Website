import React from 'react'
import { Link } from 'react-router-dom'
import '../login.css'

export const Login = () => {
  return (
    <> 

    <div className="login">
      <h1 className="txtgr">Login</h1>

      <div className="form">
      <form action="">
        <input type="text" name='username' /> <br />
        <input type="text" name='password' /> <br />
        <input type="submit" />
    </form>
      </div>

      <div className="signb">
      <Link to="/signup">Signup</Link>

      </div>
    
    

    </div>
    
    
    </>
  )
}
