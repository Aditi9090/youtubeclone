import React from "react";
import "./LeftSidebar.css";
import { AiFillLike, 
    AiFillPlaySquare, 
    AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore, 
    MdOutlineVideoLibrary, 
    MdOutlineWatchLater, 
    MdSubscriptions } from "react-icons/md";
import {FaHistory} from "react-icons/fa";
import shorts from "./shorts.png";
import { NavLink } from "react-router-dom";
function DrawerSidebar({  toggleDrawer,toggleDrawerSidebar}) {
  return (
    <div className="container_DrawerLiftSidebar" style={toggleDrawerSidebar}>
        <div className="container2_DrawerLiftSidebar">
            <div className="Drawer_leftsidebar">
                <NavLink to={'/'} className="icon_sidebar_div">
                    <p>
                        <AiOutlineHome
                        scale={22}
                        className={"icon_sidebar"}
                        style={{margin:"auto 0.7rem"}}

                        />
                        <div className="text_sidebar_icon">Home</div>
                    </p>
                </NavLink>
                <div className="icon_sidebar_div">
                    <p>
                        <MdOutlineExplore
                        scale={22}
                        className={"icon_sidebar"}
                        style={{margin:"auto 0.7rem"}}

                        />
                        <div className="text_sidebar_icon">Explore</div>
                    </p>
                </div>
                <div className="icon_sidebar_div">
                    <p>
                        <img
                        src={shorts}
                        width={22}
                        className={"icon_sidebar"}
                        style={{margin:"auto 0.7rem"}}

                        />
                        <div className="text_sidebar_icon">Shorts</div>
                    </p>
                </div>
                <div className="icon_sidebar_div">
                    <p>
                        <MdSubscriptions
                        scale={22}
                        className={"icon_sidebar"}
                        style={{margin:"auto 0.7rem"}}

                        />
                        <div className="text_sidebar_icon">Subscriptions</div>
                    </p>
                </div>
            </div>
            <div className="libraryBtn_leftsidebar">
                <NavLink to={'/library'} className="icon_sidebar_div">
                    <p>
                        <MdOutlineVideoLibrary
                        scale={22}
                        className={"icon_sidebar"}
                        style={{margin:"auto 0.7rem"}}

                        />
                        <div className="text_sidebar_icon">Library</div>
                    </p>
                </NavLink>
                <NavLink to={'/History'} className="icon_sidebar_div">
                    <p>
                        <FaHistory
                        scale={22}
                        className={"icon_sidebar"}
                        style={{margin:"auto 0.7rem"}}

                        />
                        <div className="text_sidebar_icon">History</div>
                    </p>
                </NavLink>
                
                <NavLink to={'/yourvideos'} className="icon_sidebar_div">
                    <p>
                        <AiFillPlaySquare
                        scale={22}
                        className={"icon_sidebar"}
                        style={{margin:"auto 0.7rem"}}

                        />
                        <div className="text_sidebar_icon">Your Videos</div>
                    </p>
                </NavLink>
                
                <NavLink to={'/Watchlater'} className="icon_sidebar_div">
                    <p>
                        <MdOutlineWatchLater
                        scale={22}
                        className={"icon_sidebar"}
                        style={{margin:"auto 0.7rem"}}

                        />
                        <div className="text_sidebar_icon">Watch Later</div>
                    </p>
                </NavLink>
                <NavLink to={'/LikedVideos'} className="icon_sidebar_div">
                    <p>
                        <AiFillLike
                        scale={22}
                        className={"icon_sidebar"}
                        style={{margin:"auto 0.7rem"}}

                        />
                        <div className="text_sidebar_icon">Liked Videos</div>
                    </p>
                </NavLink>  
            </div>
            <div className="subScriptions_lsdbar">
                <h3>Your Scriptions</h3>
                <div className="chanel_lsdbar">
                    <p>C</p>
                    <div>Chanel</div>
                </div>
                <div className="chanel_lsdbar">
                    <p>C</p>
                    <div>Chanel</div>
                </div>
                <div className="chanel_lsdbar">
                    <p>C</p>
                    <div>Chanel</div>
                </div>
                <div className="chanel_lsdbar">
                    <p>C</p>
                    <div>Chanel</div>
                </div>
            </div>
        </div>
        <div className="container3_DrawaerLeftSidebar"
        onClick={()=>toggleDrawer()}
        ></div>
    </div>
  );
}

export default DrawerSidebar;