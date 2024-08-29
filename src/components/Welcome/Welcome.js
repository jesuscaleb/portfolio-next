import { Component } from 'react';
import styles from "./Welcome.module.css";

class Welcome extends Component {
  render() {
    return (
      <div className={styles.layout}>
        <div className="grid xl:grid-cols-4 xl:gap-4">
          <div className="grid grid-cols-subgrid gap-4 col-span-4">
            <div className="col-start-2 col-end-4 my-4 mx-4">
              <div className={styles.content}>
                <div className="rounded-xl shadow-xl overflow-hidden my-auto bg-white py-4 px-4 animate-fade-up animate-once animate-duration-[1200ms] animate-delay-200">
                    <section>
                      <p className="">Hola, soy Jesús. Soy un desarrollador web con más de 4 años de experiencia en desarrollo front y back-end. Me encanta la programación y me considero un autodidacta, gracias a esto siempre estoy aprendiendo cosas nuevas y manteniéndome actualizado. Busco un puesto donde pueda aplicar mis habilidades de desarrollo full-stack, mantener y crear aplicaciones web</p>
                    </section>
                </div>
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
