import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Landing = () => {
  return (
    <section className={`${styles.containerLanding} containerBackground`}>
      <div className="footprints"></div>
      <div className={styles.containerInfo}>
        <img src="../../src/assets/perrito-landing.png" alt="dog"  className={styles.imgDog}/>
        <div className={styles.contentInfo}>
          <h1 className={styles.title}>Welcome PI Dogs </h1>
          <p className={styles.text}>
            In PI Dogs you can see the different breeds of dogs that exist, and
            you can also create your own breed of dog.
          </p>
          <Link to="/home" className={styles.btnStart}>
            START HOME
          </Link>
          <div className={styles.contactInfo}>
              <span className={styles.contactName}>Keny Espinoza Luis</span>
              <a
                href="https://github.com/KEspinozaLuis"
                target="_blank"
                className={styles.contact}
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/keny-espinoza-luis-45b8b5193/"
                target="_blank"
                className={styles.contact}
              >
                <BsLinkedin />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
