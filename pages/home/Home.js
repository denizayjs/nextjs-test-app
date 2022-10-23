import styles from "./Home.module.scss";
import Navigation from "../../components/navigation";
import Card from "../../components/card";
export default function Home() {
  return (
    <div>
      <Navigation></Navigation>
      <div className={styles.home}>
        <div className={styles.homeTitle}>
          <p>Actions to be completed</p>
        </div>
        <div>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}
