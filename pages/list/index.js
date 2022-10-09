import Head from 'next/head';
import styles from '../../styles/List.module.css';

export const getStaticProps = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await response.json();
  return {
    props: { users: data },
  };
};

const NinjaList = ({ users }) => {
  return (
    <>
      <Head>
        <title>NEXT List | ListPage</title>
        <meta name="keywords" content="nextjs" />
      </Head>
      <div>
        <h1>NEXT List</h1>
        {users &&
          users.map((user) => (
            <div key={user.id}>
              <a className={styles.single}>
                <h3>{user.name}</h3>
              </a>
            </div>
          ))}
      </div>
    </>
  );
};

export default NinjaList;
