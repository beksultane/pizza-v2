import { useState } from "react";
import { Controls } from "../../components/Controls/Controls";
import { Pizza } from "../../components/Pizza/Pizza";

import styles from "./PizzaBuilder.module.css";

const PizzaBuilder = () => {
  const [ings, setIngs] = useState({
    cheese: { name: "Сыр", price: 15, count: 0 },
    olives: { name: "Оливки", price: 25, count: 0 },
    sausage: { name: "Колбаса", price: 35, count: 0 },
    mushrooms: { name: "Грибы", price: 20, count: 0 },
  });

  const [price, setPrice] = useState(100);

  const addIngredient = (type) => {
    setIngs((ings) => {
      const ing = { ...ings[type] };
      ing.count++;

      return {
        ...ings,
        [type]: { ...ing },
      };
    });
    setPrice((price) => price + ings[type].price);
  };

  const removeIngredient = (type, event) => {
    event.stopPropagation();

    setIngs((ings) => {
      const ing = { ...ings[type] };
      ing.count--;

      return {
        ...ings,
        [type]: { ...ing },
      };
    });
    setPrice((price) => price - ings[type].price);
  };

  return (
    <div className={styles.pizzaWrap}>
      <Pizza ings={ings} />
      <Controls
        ings={ings}
        price={price}
        add={addIngredient}
        remove={removeIngredient}
      />
    </div>
  );
};

export default PizzaBuilder;
