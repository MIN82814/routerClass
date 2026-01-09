import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AlbumLayout from "./pages/AlbumLayout";
import AlbumIndex from "./pages/AlbumIndex";

function App() {
  return (
    <>
      <Navbar />
      {/*把Routes加在輸出內容裡面，內層加入Route是對應一個個路徑*/}
      <div className="container mt-3">
        <Routes>
          {/*當進入到path路徑時，element要渲染哪個元件*/}
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/album" element={<AlbumLayout />}>
            {/*path="index"改為index會是子路由預設指定的元件*/}
            <Route index element={<AlbumIndex />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;