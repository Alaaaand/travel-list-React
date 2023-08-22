export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ">
        <em>start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const perecentage = Math.round((itemPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {" "}
        {perecentage === 100
          ? `you got everything! ready to go ✈️`
          : `👜 you have ${numItems} items in your list, and you already packed ${itemPacked} (${perecentage}%)`}
      </em>
    </footer>
  );
}
