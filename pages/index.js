import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXT List | Home</title>
        <meta name="keywords" content="vercel" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          laudantium voluptas ipsa eaque dignissimos sunt deleniti quo vero quod
          pariatur. Explicabo neque quasi tempora voluptate in, accusantium
          vitae quia quibusdam.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          laudantium voluptas ipsa eaque dignissimos sunt deleniti quo vero quod
          pariatur. Explicabo neque quasi tempora voluptate in, accusantium
          vitae quia quibusdam.
        </p>
        <Link href="/list">
          <a className={styles.btn}>See NEXT list</a>
        </Link>
      </div>
    </>
  );
}
