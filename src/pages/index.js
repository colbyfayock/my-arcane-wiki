import Head from 'next/head';

import Layout from '@components/Layout';
import Container from '@components/Container';

import characters from '@data/characters.json';

import styles from '@styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Arcane Wiki</title>
        <meta name="description" content="All the characters you love from Arcane!" />
      </Head>

      <Container>
        <h1 className="sr-only">Arcane Wiki</h1>

        <h2 className="sr-only">Characters</h2>

        <ul className={styles.characters}>
          {characters.map(character => {
            return (
              <li key={character.id}>
                <a href={character.link}>
                  <img width="280" src={character.image} alt={character.title} />
                  <p className={styles.characterTitle}>
                    { character.title }
                  </p>
                </a>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}