import styles from './index.less';

import Home from 'app1/Home';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Home />
    </div>
  );
}
