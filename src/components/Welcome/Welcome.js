import { Component } from 'react';
import styles from "./Welcome.module.css";
import locales from "./locales/es.json";

class Welcome extends Component {
  render() {
    return (
      <div className={styles.layout}>
        <div className="grid xl:grid-cols-4 xl:gap-4">
          <div className="grid grid-cols-subgrid gap-4 col-span-4">
            <div className="col-start-2 col-end-4 my-4 mx-4">
                <div className={styles.content}>
                    <section>
                      <p className="">{locales.welcomeDescription}</p>
                    </section>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
    ;
  }
}


export default Welcome;
