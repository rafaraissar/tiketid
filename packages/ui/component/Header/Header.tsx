import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerleft}>
        <Link className={styles.logocontainer} href="/">
          <Image
            src="/logo/logo.png"
            width="0"
            height="0"
            sizes="100vw"
            className={styles.logo}
            alt="logo"
            priority
          />
        </Link>
        <div>
          <form className={styles.searchcontainer}>
            <div className={styles.search}>Cari event disini...</div>
          </form>
        </div>
      </div>
      <div className={styles.headerright}>
        <Link href="/help">Pusat Bantuan</Link>
        <Link href="/id">Syarat dan Ketentuan</Link>
        <Link href="#about">Login/Register</Link>
        <Link href="#about" className={styles.createetiket}>
          Create etiket
        </Link>
      </div>
    </div>
  );
};
