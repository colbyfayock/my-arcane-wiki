import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <img src="/images/logo.jpg" alt="Arcane" />
        </p>
      </Container>
    </header>
  )
}

export default Header;