import { useState } from "react";
import { Item } from "./Item"

let id = 0;
const newItem = () => ({ id: ++id, value: "a" });

export const Items = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({})
  return <>
    <div>
      <button
        onClick={() => setItem(newItem())}
      >new</button>

      <Item item={item} setItem={setItem} />

      <button
        onClick={() => setItems(its => [...its, item])}
      >add</button>

      <ul>{items.map(i =>
        <li key={i.id}>{`${i.id} ${i.value}`}</li>)}
      </ul>
    </div>
  </>
}

