import { ControlItem } from "./ControlItem/ControlItem";
import styles from "./Controls.module.css";

export const Controls = ({ ings, price, add, remove }) => {
  return (
    <div>
      <h2 className={styles.title}>Выберите ингредиенты</h2>
      <div className={styles.controls}>
        {Object.keys(ings).map((type) => {
          return (
            <ControlItem
              key={type}
              type={type}
              title={ings[type].name}
              count={ings[type].count}
              add={() => add(type)}
              remove={(event) => remove(type, event)}
            />
          );
        })}
      </div>

      <div className={styles.price}>
        Общая стоимость: <span>{price}</span> сом
      </div>
    </div>
  );
};
