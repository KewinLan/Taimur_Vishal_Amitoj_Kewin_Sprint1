import styles from './LeftSection.module.css';

export function LeftSection() {
  return (
    <div className={styles.VerticalLine}>
      <div className={styles.MainText}>
        <p>
          Select a service here, <br/><br/>then a professional (optional)&nbsp;&nbsp;&nbsp;<br/><br/>
        </p>
      </div>
      <div className={styles.Service1}>
        <p>
          Barber<br/><br/>
        </p>
      </div>
      <div className={styles.Service2}>
        <p>
          Nail Salon<br/><br/>
        </p>
      </div>
      <div className={styles.Service3}>
        <p>
          Fitness Training<br/><br/>
        </p>
      </div>
    </div>
  );
}