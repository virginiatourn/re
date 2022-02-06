import { useState, useEffect } from "react";
import Item from "./item";

export default function App() {
  const [ItemInfo, setItemInfo] = useState({});

  useEffect(() => {
    setTimeout(() => {
      fetch("")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results[0]);
          setItemInfo(data.results[0]);
        });
    }, 1000);
  }, []);

  return (
    <div className="App">
      <>Catalogo:{ItemInfo.id}</>
      <>{ItemInfo.title}</>
      <>{ItemInfo.price}</>
      <>{ItemInfo.stock}</>

      
    </div>
  );
}