import { useState } from "react";
import { Item } from "./Item"
let id = 0;

export default function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(newItem())
  return <>
    <div>
      <button
        onClick={() => {
          setItem(newItem())
        }}
      >
        new
      </button>
      <Item item={item} setItem={setItem} />
      <button
        onClick={() => {
          setItems(its => [...its, item])
        }}
      >
        add
      </button>
      <ul>
        {items.map(i =>
          <li
            key={i.id}
          >{i.value}
          </li>)}
      </ul>
    </div>
  </>
}

function newItem() {
  const ni = { id: ++id, value: "a" };
  return ni;
}