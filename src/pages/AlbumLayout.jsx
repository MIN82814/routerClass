{/*Outlet才可以透過路由來切換內容*/}
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AlbumLayout() {
    const [list,setList]=useState([]);
    useEffect(()=>{},[])
  return (
    <div className="row">
      <div className="col-4">左側選單列表</div>
      <div className="col-8">
        <Outlet />
      </div>
    </div>
  );
}
