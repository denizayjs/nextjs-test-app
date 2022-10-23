import Image from "next/image";
import styles from "./Intro.module.scss";
import Modal from "../../components/modal";
export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.introHeader}>
        <Image
          src="/img/TestCaseAPP.svg"
          alt="intro logo"
          width={234}
          height={40}
        ></Image>
        <div className={styles.introHeaderTitle}>
          <p>&quot;Pixel Perfect&quot;</p>
        </div>
      </div>
      <div>
        <Image
          src="/img/cover.svg"
          alt="cover"
          width={300}
          height={272}
        ></Image>
      </div>
      <div>
        <Modal
          titel="Welcome to the TestCase APP!"
          description="We created this exercise to gain insights about your development skills."
          linkName="Start"
          linkHref="/home/Home"
        ></Modal>
      </div>
    </div>
  );
}
