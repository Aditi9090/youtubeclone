import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from "../../Pages/Home/Home";

function Loginto() {
  return (
    <>
    <div className="registor1">

        <form>
        <div className="ce1">Login  Form</div>
      
      <div className="design1">Email:
        <input type="text" />
      </div>
      <div className="design1">Password:
        <input type="text" />
      </div>
      <NavLink to="/">
      <button type='submit'>Login</button>
      </NavLink>
    </form>
    </div>
        
    </>
      )
}

export default Loginto