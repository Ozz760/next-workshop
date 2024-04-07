import storeInfo from "./storeInfo";
import styles from "./page.module.css";
import ListingCard from "./components/ListingCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.store_header}>Pirate Marketplace</h1>
      <ListingCard />
    </main>
  );
}
