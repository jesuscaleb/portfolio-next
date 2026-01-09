import { Component } from 'react';
import styles from "./Slogan.module.css";

class Slogan extends Component {
  render() {
    return (
      <div className={styles.layout}>
        <h1 className={styles.title}>
          Estudio de Desarrollo Web y Diseño del Mañana
        </h1>
        
        <div className={styles.sloganLayout}>
          <button className={styles.primaryButton}>
            Descubre nuestro trabajo
          </button>
          <button className={styles.secondaryButton}>
            Ver Servicios
          </button>
        </div>
      </div>
    );
  }
}

export default Slogan;