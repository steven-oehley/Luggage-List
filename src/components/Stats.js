function Stats({ items }) {
  // derived state from items
  // update in items state in APP causes a re-render of App
  // APP will call Stats again, with a new prop for items
  // derived state will be re-calculated
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percPacked = +((packedItems / totalItems) * 100).toFixed(0);

  const message =
    totalItems === 0
      ? "You have no items on your list"
      : `You have ${totalItems} item${
          totalItems > 1 ? "s" : ""
        } on your list, you have packed ${packedItems} item${
          packedItems === 1 ? "" : "s"
        } on your list (${percPacked}%)`;
  return <footer className="stats">{message}</footer>;
}
export default Stats;
