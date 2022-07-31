import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

import { useSnipcart } from "use-snipcart";

import Container from "@components/Container";

import styles from "./Header.module.scss";

const Header = () => {
  const { cart = {} } = useSnipcart();
  console.log(cart);

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            <a>J-Beauty</a>
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <Link href="#">
              <a>Link</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Link</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Link</a>
            </Link>
          </li>
        </ul>
        <p className={styles.headerCart}>
          <button className="snipcart-checkout">
            <FaShoppingCart />
            <span>${cart.subtotal?.toFixed(2)}</span>
          </button>
        </p>
        <ul className={styles.headerLocales}>
          <li>
            <Link href="#">
              <a>ES</a>
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
