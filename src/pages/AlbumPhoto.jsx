//取得上方id的hook
import { useParams } from "react-router-dom";
//axios重新取得圖片
import axios from "axios";
import { useEffect, useState } from "react";
const api = "https://api.unsplash.com/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumPhoto() {
  const { id } = useParams();
  const [photo, setPhoto] = useState({});

  // 使用 useEffect 觸發，裡面加入立即函式，後面[]要使用id，當id改變時會重新取得遠端資料
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${api}/${id}?client_id=${accessId}`);
      console.log(res);
      setPhoto(res.data);
    })();
  }, [id]);
  return (
    <>
      這是單張圖片{id}
      <p>{photo.description}</p>
      <img src={photo?.urls?.regular} alt="" className="img-fluid" />
    </>
  );
}
