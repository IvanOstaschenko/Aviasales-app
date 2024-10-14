import styles from './Header.module.scss';
export default function Header() {
  return (
    <header>
      <img
        className={styles.logo}
        src="/Logo.svg"
        alt="avia sales logo"
        width="60"
        height="60"
        loading="lazy"
      />
    </header>
  );
}
