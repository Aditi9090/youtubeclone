import React from "react";

import Home from "../Pages/Home/Home";
 import{
    Routes,
    Route
    } from "react-router-dom";
import Library from "../Pages/Library/Library";
import YourVideo from "../Pages/YourVideo/YourVideo";
import WatchHistory from "../Pages/WatchHistory/WatchHistory";
import Watchlater from "../Pages/Watchlater/Watchlater";
import LikedVideos from "../Pages/LikedVideos/LikedVideos";
import VideoPage from "../Pages/VideoPage/VideoPage";
import Chanel from "../Pages/Chanel/Chanel";
import Search from "../Pages/Search/Search";
import Loginto from "../Pages/Loginto/Loginto";

function AllRoutes({ setEditCreateChanelBtn,setVidUploadPage }) {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/yourvideos" element={<YourVideo/>}/>
        <Route path="/History" element={<WatchHistory/>}/>
        <Route path="/Watchlater" element={<Watchlater/>}/>
        <Route path="/LikedVideos" element={<LikedVideos/>}/>
        <Route path="/VideoPage/:vid" element={<VideoPage/>}/>
        <Route path="/seacrh/:searchQuery" element={<Search />} />
        <Route path="/login" element={<Loginto/>}/>

        <Route
        path="/chanel/:Cid"
        element={<Chanel 
          setEditCreateChanelBtn={setEditCreateChanelBtn}
          setVidUploadPage={setVidUploadPage}
           />}
      />
    </Routes>
  );
}

export default AllRoutes
