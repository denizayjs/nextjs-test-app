import styles from "./modal.module.scss";
import Link from "next/link";

export default function Modal({ titel, description, linkName, linkHref }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalTitle}>
        <p>{titel}</p>
      </div>
      <div className={styles.modalDescription}>
        <p>{description}</p>
      </div>
      <div className={styles.modalButton}>
        <Link href={linkHref}>{linkName}</Link>
      </div>
    </div>
  );
}
