import styles from "./Home.module.scss";
import Navigation from "../../components/navigation";
export default function Home() {
  return (
    <div className={styles.home}>
      <Navigation></Navigation>
      Home
    </div>
  );
}
