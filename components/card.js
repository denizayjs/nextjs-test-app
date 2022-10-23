import styles from "./card.module.scss";
import Image from "next/image";
export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <div className={styles.cardInfoImg}>
          <Image
            src="/img/cover.svg"
            alt="cover"
            width={36}
            height={36}
          ></Image>
        </div>
        <div>
          <div className={styles.cardInfoTitle}>Phasellus et sem eget</div>
          <div className={styles.cardInfoDesc}>
            Lorem ipsum dolor sit amet consectetur
          </div>
        </div>
      </div>
      <div className={styles.cardScor}>+500</div>
    </div>
  );
}
