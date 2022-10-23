import styles from "./navigation.module.scss";
import Image from "next/image";
export default function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.navLogo}>
        <Image
          src="/img/TestCaseAPP.svg"
          alt="logo"
          width={146}
          height={24}
        ></Image>
      </div>
      <div className={styles.navScor}>
        <p>
          Points: <span>29,850</span>
        </p>
      </div>
    </div>
  );
}
