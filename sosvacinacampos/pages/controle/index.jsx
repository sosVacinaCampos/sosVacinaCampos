import { useState, useEffect } from 'react';
import Head from 'next/head';
import api from '../../configs/axios';
import styles from '../../styles/Home.module.css';
import db from '../../configs/firebase';

const Controle = () => {
  const [vaccined, setVaccined] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get('controle');
      setVaccined(data);
    };
    getData();
  }, []);
  db.collection('vacinacao').onSnapshot((querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      const doc = {
        id: change.doc.id,
        ...change.doc.data(),
      };

      const vaccinedChanged = vaccined.find((old) => old.id === change.doc.id);

      if (!vaccinedChanged) {
        const newVaccined = [...vaccined, doc];
        newVaccined.sort((a, b) => a.data - b.data);
        setVaccined(newVaccined);
      }
    });
  });

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
              {vaccined
                .sort((a, b) => a.data - b.data)
                .map((item) => (
                  <tr key={item.id}>
                    <th scope="row" style={{ textAlign: 'center' }}>
                      {item.data &&
                        new Date(
                          item.data._seconds * 1000,
                        ).toLocaleDateString()}
                    </th>
                    <td style={{ textAlign: 'center' }}>
                      {item.qtd_planejado}
                    </td>
                    <td style={{ textAlign: 'center' }}>{item.qtd_vacinado}</td>
                  </tr>
                ))}
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
};

export default Controle;
