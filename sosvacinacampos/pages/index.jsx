import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SOS Vacina Campos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SOS Vacina</h1>
        <img src="/campos.png" alt="Campos dos Goytacazes" />

        <p className={styles.description}>
          Saiba aqui maiores informações sobre a vacinação
        </p>

        <div className={[styles.grid, 'table-responsive']}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Dia</th>
                <th scope="col">Planejado</th>
                <th scope="col">Vacinados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Default</th>
                <td>XXX</td>
                <td>XXX</td>
              </tr>
              <tr className="table-success">
                <th scope="row">Success</th>
                <td>XXX</td>
                <td>XXX</td>
              </tr>
              <tr className="table-danger">
                <th scope="row">Danger</th>
                <td>XXX</td>
                <td>XXX</td>
              </tr>
              <tr className="table-warning">
                <th scope="row">Warning</th>
                <td>XXX</td>
                <td>XXX</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
