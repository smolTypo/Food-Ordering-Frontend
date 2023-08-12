import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Ocean Delight Medley",
    description:
      "A tantalizing blend of sustainably sourced salmon, tender shrimp, and delicate whitefish, all gently poached in a savory seafood broth. Served with a touch of nutrient-rich seaweed and a drizzle of omega-3 rich fish oil, this dish offers a delectable fusion of flavors straight from the ocean depths.",
    price: 29.99,
  },
  {
    id: "m2",
    name: "Poultry Paradise Pâté",
    description:
      "Indulge your feline friend with this luxurious pâté crafted from the finest free-range chicken, succulent turkey, and velvety duck. Slow-cooked to perfection, each bite offers a harmonious blend of premium poultry flavors, enriched with organic chicken liver and a dash of aromatic catnip for added allure.",
    price: 26.99,
  },
  {
    id: "m3",
    name: "Tenderloin Tango",
    description:
      "A masterpiece of culinary excellence, this dish features tender bites of grass-fed beef tenderloin seared to perfection. Paired with garden-fresh spinach, organic sweet potatoes, and a sprinkle of powdered eggshell for natural calcium, Tenderloin Tango provides a high-protein, nutrient-rich dining experience.",
    price: 32.99,
  },
  {
    id: "m4",
    name: "Exotic Explorer Feast",
    description:
      "Embark on a gastronomic adventure with the Exotic Explorer Feast, featuring an enticing combination of lean duck meat, flaky Alaskan cod, and exotic quail eggs. Paired with a dash of spirulina for a burst of color and essential nutrients, this dish transports your feline companion to a world of diverse and delectable flavors.",
    price: 28.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
