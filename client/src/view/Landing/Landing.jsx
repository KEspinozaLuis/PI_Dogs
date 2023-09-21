import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Welcome PI Dogs </h1>
        <p>
          In PI Dogs you can see the different breeds of dogs that exist, and
          you can also create your own breed of dog.
        </p>
        <Link to="/home" className={styles.btnStart}>
          START HOME
        </Link>
        <div className={styles.contactInfo}>
          <span className={styles.contactName}>Keny Espinoza</span>
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
  );
};

export default Landing;
