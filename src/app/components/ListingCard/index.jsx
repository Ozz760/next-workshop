import styles from "./style.module.css";

const ListingCard = () => {
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src="./assets/item2.jpg"></img>
      <p className={styles.card_title}>Stolen Treasure</p>
      <p className={styles.card_price}>$100</p>
      <button className={styles.card_button}>Claim Body</button>
    </div>
  );
};

export default ListingCard;
