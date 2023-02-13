import { Ingredient } from './Ingredient/Ingredient';
import styles from './Pizza.module.css';

export const Pizza = ({ ings }) => {
  let ingList = [];

  Object.keys(ings).forEach((type) => {
    if (ings[type].count) {
      ingList.push(<Ingredient key={type} type={type} />);
    }
  });

  if (!ingList.length)
    ingList = <h1 className={styles.title}>Добавить ингредиенты</h1>;

  return <div className={styles.pizza}>{ingList}</div>;
};
