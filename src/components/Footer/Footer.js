import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      Images via&nbsp;<a href="https://twitter.com/arcaneshow">@arcaneshow</a>
    </footer>
  )
}

export default Footer;