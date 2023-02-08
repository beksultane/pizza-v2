import styles from "./Pizza.module.css";
import { Ingredient } from "./Ingredient/Ingredient";

export const Pizza = ({ ings }) => {
  const ingList = [];

  Object.keys(ings).forEach((type) => {
    if (ings[type].count) {
      ingList.push(<Ingredient key={type} type={type} />);
    }
  });

  return <div className={styles.pizza}>{ingList}</div>;
};
