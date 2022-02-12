

export const Item = ({ item, setItem }) => {
    return <input
        value={item.value}
        onChange={e => {
            setItem(i => ({ ...item, value: e.target.value }))
        }}
    />
}