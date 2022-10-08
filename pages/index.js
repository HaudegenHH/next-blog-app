import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium
        voluptas ipsa eaque dignissimos sunt deleniti quo vero quod pariatur.
        Explicabo neque quasi tempora voluptate in, accusantium vitae quia
        quibusdam.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium
        voluptas ipsa eaque dignissimos sunt deleniti quo vero quod pariatur.
        Explicabo neque quasi tempora voluptate in, accusantium vitae quia
        quibusdam.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See ninja listing</a>
      </Link>
    </div>
  );
}
