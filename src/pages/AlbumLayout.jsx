{
  /*Outlet才可以透過路由來切換內容*/
}
{
  /*先安裝axios套件再引入axios*/
}
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AlbumLayout() {
  {
    /*定義資料狀態，把資料存在列表裡面*/
  }
  const [list, setList] = useState([]);
  const api = "https://api.unsplash.com/search/photos";
  const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;
  {
    /*照著文件路徑取資料，目前沒有要加page，使用&query=office取得預設頁面，前方要加入，要使用立即函式執行*/
    /*解構方式取出results*/
  }
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${api}?client_id=${accessId}&query=animal;`);

      const { results } = res.data;
      setList(results);
    })();
  }, []);
  return (
    <div className="row">
      <div className="col-4">
        左側選單列表
        {list.map((item) => {
          return <li key={item.id}> {item.id}</li>;
        })}
      </div>
      <div className="col-8">
        {/*Outlet 可使用context帶入資料，要去檔案裏面匯入hook*/}
        <Outlet context={list} />
      </div>
    </div>
  );
}
