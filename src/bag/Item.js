export const Item = ({ item, setItem }) => {
  return <input
    defaultValue={item.value}   //bag
    // value={item.value}   //ok
    onChange={e => setItem(() => ({ ...item, value: e.target.value }))}
  />
}