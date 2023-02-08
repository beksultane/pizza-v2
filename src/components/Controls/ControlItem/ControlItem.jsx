import styles from "./ControlItem.module.css";

export const ControlItem = ({ type, title, count, add, remove }) => {
  return (
    <div className={styles.controlItem} onClick={add}>
      <img className={styles.image} src={`img/${type}-icon.png`} alt={title} />
      <h4 className={styles.title}>{title}</h4>
      {count > 0 && (
        <div onClick={remove} className={styles.count}>
          {count}
        </div>
      )}
    </div>
  );
};
