import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul>
      {meals.map((meal) => (
        <div key={meal.id}>
          <MealItem {...meal} />
        </div>
      ))}
    </ul>
  );
}
