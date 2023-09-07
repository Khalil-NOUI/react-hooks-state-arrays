import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodList = [...foods, newFood]
    console.log(newFood);
    setFoods((foodlist) => newFoodList)
  }

  function handleRemove(deleted) {
    const newFoodList = foods.filter((food) => food.id !== deleted)
    return (
      setFoods((foodlist) => newFoodList)
    )}

  function handleHeat (updated, increment) {
    const newFoodList = foods.map((food) => {
      if (food.id === updated) {
        return (

          {...food, heatLevel: increment  }
        )}
        else {
          return (
            {...food}
          )
        }
      })
      setFoods((foodList) => newFoodList)
    }
  
  function filterer(cuccina) {
    const filtred = foods.filter((food) => food.cuisine === cuccina)
    return(setFoods(filtred))
  }
  





  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine} 
    
    <button style={{ margin: '10px' }} onClick={() => handleRemove(food.id)}> remove </button>
    
    <label htmlFor="HeatLevel"> HeatLevel :<input style={{height:"10px", width:"100px"  }} id="HeatLevel" type="range" name="HeatLevel"
     onChange={(e) => handleHeat(food.id, parseInt(e.target.value))}
     value={food.heatLevel} min={0} max={10} step={1} /> </label>
    </li>
    
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <label htmlFor="filter"> Choose a cuisine: <select name="filter" id="filter" onChange={(e) => filterer(e.target.value)}>
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>
    </select> </label>
    </div>
  );
}

export default SpicyFoodList;
