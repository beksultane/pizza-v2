import { useState } from "react";
import { Pizza } from "../../components/Pizza/Pizza";

import styles from "./PizzaBuilder.module.css";

const PizzaBuilder = () => {
  const [ings, setIngs] = useState({
    cheese: { name: "Сыр", price: 15, count: 1 },
    olives: { name: "Оливки", price: 25, count: 2 },
    sausage: { name: "Колбаса", price: 35, count: 1 },
    mushrooms: { name: "Грибы", price: 20, count: 1 },
  });

  return (
    <div className={styles.pizzaWrap}>
      <Pizza ings={ings} />
      <h2>Controls here</h2>
    </div>
  );
};

export default PizzaBuilder;
