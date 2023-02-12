import styles from "./Home.module.css";
import Mainbanner from "./mainbanner";
import Upcooming from "./upcooming";

export default function Home() {
  return (
    <div className={styles.contenthome}>
      <div className={styles.contentitem}>
        <Mainbanner />
      </div>
      <div className={styles.contentitem}>
        <Upcooming />
      </div>
    </div>
  );
}
export const config = {
  unstable_runtimeJS: false,
};
