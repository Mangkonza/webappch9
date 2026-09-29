function FoodItem({ item, index, deleteItem, mode }) {
  return (
    <li>
      {item.name} - {item.price} baht
      {item.isBestSeller && " 🎖️"}
      {" "}
      {mode === 'admin' && (
        <button onClick={() => deleteItem(index)}>Del</button>
      )}
    </li>
  );
}

export default FoodItem;