import FoodItem from './FoodItem';

function FoodList({ food, deleteItem, mode }) {
  return (
    <div>
      <ul>
        {food.map((item, index) => (
          <FoodItem 
            key={index} 
            item={item} 
            index={index} 
            deleteItem={deleteItem}
            mode={mode}
          />
        ))}
      </ul>
    </div>
  );
}

export default FoodList;