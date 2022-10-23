import styles from "../styles/Home.module.scss";

import Intro from "./intro/Intro";

export default function Home() {
  return (
    <div className={styles.container}>
      <Intro></Intro>
    </div>
  );
}
