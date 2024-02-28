import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
//import Home from "../../Pages/Home/Home";

function LoginandRegistor({setRegistortoLogin}) {
  return (
    <>
    <div className="registor">
    <form>
        <div className="ce">Registor  Form</div>
      <div className="design">Name:
        <input type="text" />
      </div>
      <div className="design">Email:
        <input type="text" />
      </div>
      <div className="design">Password:
        <input type="text" />
      </div>
      <button type='submit'>Registor</button>
    </form>
    <NavLink to="login" className="LOGIN">Login</NavLink>
     </div>
     
     </>      
  );
}

export default LoginandRegistor