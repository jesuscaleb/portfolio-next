import { Component } from 'react'
import styles from "./Portfolio.module.css";
import locales from "./locales/es.json"

class Portfolio extends Component {
  // TODO: Agregar fuentes de texto para el titulo
  render() {
    return (
      <div className={styles.layout}>
        <div className="grid xl:grid-cols-4 xl:gap-4">
          <div className="grid grid-cols-subgrid gap-4 col-span-4">
            <div className="col-start-2 col-end-4 my-4 mx-4">
              <div className={styles.content}>
                <section>
                  <h1 className={styles.title}>{locales.portfolioTitle}</h1>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;