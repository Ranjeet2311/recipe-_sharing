import React from "react";
import MealItem from "./meal-item";

export default function MealsDisplay({ meals }) {
  return (
    <>
      <h2 className="text-center my-4 pb-4 pt-2">Meals display</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {meals &&
          meals.map((meal) => {
            return (
              <div key={meal.title}>
                <MealItem {...meal} />
              </div>
            );
          })}
      </div>
    </>
  );
}
