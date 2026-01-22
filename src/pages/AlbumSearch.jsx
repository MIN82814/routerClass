import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const api = "https://api.unsplash.com/search/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumSearch() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("animal");
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${api}?client_id=${accessId}&query=${search}`,
      );

      const { results } = res.data;
      setList(results);
    })();
  }, [search]);

  return (
    <>
      這是搜尋頁面{search}
      {/*不會直接寫入，所以會用defaultValue不是Value*/}
      {/*onKeyUp觸發*/}
      <input
        type="text"
        className="form-control"
        defaultValue={search}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            setSearch(e.target.value);
          }
        }}
      />
      {list.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`/album/${item.id}`}>{item.id}</Link>
          </li>
        );
      })}
    </>
  );
}
