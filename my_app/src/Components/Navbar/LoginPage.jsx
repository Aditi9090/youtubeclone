
import React from "react";
import { MdEmail } from "react-icons/md";
import "./loginPage.css";

function LoginPage() {
  const [status,setStatus]=React.useState(false);
  return (
    <> 
    {!status ?(
    <div className="Auth_Btn">
      
      <MdEmail size={22} />
            <button onClick={()=>setStatus(true)}>Sign in</button>
      </div>
    ):(
      <div className="f">
        {
        status?<h1>login</h1>:null
      }
      </div>
    )}
      </>
  );
}

export default LoginPage;