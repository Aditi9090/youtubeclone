import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineExplore, 
    MdOutlineSubscriptions, 
    MdOutlineVideoLibrary} from "react-icons/md"
import shorts from './shorts.png'

import './LeftSidebar.css'
import {NavLink} from "react-router-dom"
function LeftSidebar() {
  return (
    <div className='container_leftSidebar'>
        <NavLink to ={'/'} className='icon_sidebar_div'>
            <AiOutlineHome size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icons">Home</div>

        </NavLink>
        <div className='icon_sidebar_div'>
            <MdOutlineExplore size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icons">Explore</div>

        </div>
        <div className='icon_sidebar_div'>
            <img src={shorts} width={22} className="icon_sidebar"/>
            <div className="text_sidebar_icons">Shorts</div>

        </div>
        <div className='icon_sidebar_div'>
            <MdOutlineSubscriptions size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icons" style={{fontSize:"12px"}}>Subscriptions</div>

        </div>

        < NavLink to={'/library'} className='icon_sidebar_div'>
            <MdOutlineVideoLibrary size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icons">Library</div>

        </NavLink>

    </div>
  )
}

export default LeftSidebar