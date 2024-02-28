import React, {useState} from "react";
import "./Navbar.css";
import logo from "./logo.ico";
import { useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import LoginPage from "./LoginPage";

import {RiVideoAddLine} from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GoogleLogin } from "react-google-login";
//import { GoogleOAuthProvider , GoogleLogin } from '@react-oauth/google';

import {FcGoogle} from "react-icons/fc";
import { Link } from "react-router-dom";
import {gapi} from "gapi-script";
import {useDispatch,useSelector} from "react-redux";
import { login } from "../../actions/auth";

import Auth from "../../Pages/Auth/Auth";

function Navbar({toggleDrawer,setEditCreateChanelBtn}) {
  const [AuthBtn, setAuthBtn] = useState(false)
  const CurrentUser=useSelector(state=>state.currentUserReducer)  


  //const CurrentUser=null;
  // const CurrentUser={
  //   result:{
  //     email: "aryanmali438@gmail.com",
  //     joinedOn: "2222-07-15T09:57:23.489Z",
    // },
  // }
  //const CurrentUser=useSelector(state=>state.currentUserReducer) 
  console.log(CurrentUser)
  useEffect(() => {
        function start() {
          gapi.client.init({
            clientId:
              "98120884588-5h0m4garre683idogcr1ckdg70jqp8fo.apps.googleusercontent.com",
            scope: "email",
          });
        }
        gapi.load("client: auth2", start);
      },[]);
      const dispatch=useDispatch();
  const onSuccess=(response)=>{
    const Email= response?.profileObj.email; 
    console.log(Email);
    dispatch(login({email: Email}));
  }
  const onFailure=(response)=>{
    console.log("Failed",response);
    };
  return (
    <>
    <div className="Container_Navbar">
      <div className="Burger_Logo_Navbar">
        <div className="burger" onClick={()=>toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link  to={'/'} className="logo_div_Navbar">
          <img src ={logo} alt="" />
          <p className="logo_title_navbar">YouTube</p>
        </Link>

      </div>
      <SearchBar />
      <LoginPage />
      <RiVideoAddLine size={22} 
      className={"vid_bell_Navbar"}/>
      <div className="apps_Box">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>

      </div>
      <IoMdAddCircleOutline size={22} 
      className="vid_bell_Navbar" />
      <div className="Auth_cont_Navbar">
        {CurrentUser ? (
          <>
          <div className="Chanel_logo_App" 
          onClick={()=>setAuthBtn(true)}>
            <p className="fstChar_logo_App">
              {CurrentUser?.result.name ?(<>
                  {CurrentUser?.result.name.charAt(0).toUpperCase()}
                  </>
                ):(<>
                  { CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                  )
              }
            </p>
          </div>
          </>
          ):(
          <>
          <GoogleLogin
          clientId="98120884588-5h0m4garre683idogcr1ckdg70jqp8fo.apps.googleusercontent.com"
          onSuccess={onSuccess}
          onFailure={onFailure}
          render={(renderProps) =>(
            <p onClick={renderProps.onClick} 
            className="Auth_Btn">
            <FcGoogle size={22} />
            <b>Sign in</b>
            </p>
          )}
          />
          

          </>
        )}
        
      </div>    
    </div>
    {
      AuthBtn &&
      <Auth
      setEditCreateChanelBtn={setEditCreateChanelBtn}
      setAuthBtn={setAuthBtn}
      User={CurrentUser}

      />
    }
    </>
  );
}

export default Navbar; 

