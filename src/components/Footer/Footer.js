import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <p>
        &copy; <a href="https://spacejelly.dev">J-Beauty</a>, {new Date().getFullYear()} &amp; Images via <a href="https://www.canva.com/">Canva</a>
      </p>
    </footer>
  )
}

export default Footer;