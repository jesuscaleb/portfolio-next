import { Component } from 'react';
import styles from "./Welcome.module.css";
import locales from "./locales/es.json";

class Welcome extends Component {
  render() {
    return (
      <div className={styles.layout}>
        <div className={styles.textSection}>
          <div className={styles.content}>
            <section>
              <p className="">{locales.welcomeDescription}</p>
            </section>
          </div>
        </div>
        <div className={styles.imageSection}>
        </div>
      </div>
    )
    ;
  }
}


export default Welcome;
