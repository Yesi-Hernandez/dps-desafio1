import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Bienvenido a mi sitio web</h1>
        <p>
          Este es un ejemplo de una página web creada con Next.js. Puedes
          personalizar el contenido y el estilo según tus necesidades.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <Image
              src="/icon1.svg"
              alt="Icono 1"
              width={50}
              height={50}
              priority
            />
            <h3>Característica 1</h3>
            <p>Descripción de la característica 1.</p>
          </div>
          <div className={styles.feature}>
            <Image
              src="/icon2.svg"
              alt="Icono 2"
              width={50}
              height={50}
              priority
            />
            <h3>Característica 2</h3>
            <p>Descripción de la característica 2.</p>
          </div>
          <div className={styles.feature}>
            <Image
              src="/icon3.svg"
              alt="Icono 3"
              width={50}
              height={50}
              priority
            />
            <h3>Característica 3</h3>
            <p>Descripción de la característica 3.</p>
          </div>
        </div>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Botón de acción principal
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Botón de acción secundario
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Mi Sitio Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
