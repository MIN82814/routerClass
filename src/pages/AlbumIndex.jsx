import { useOutletContext } from "react-router-dom";

{
  /*加入上方hook可以把資料從layout頁面傳進來，seOutletContext是一個方法*/
  /*把list資料取入會，把layout那段渲染貼回來*/
}
export default function AlbumIndex() {
  const list = useOutletContext();

  return (
    <div>
      相簿的首頁
      {list.map((item) => {
        return <li key={item.id}> {item.id}</li>;
      })}
    </div>
  );
}
