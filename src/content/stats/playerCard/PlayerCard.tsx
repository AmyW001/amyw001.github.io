import { Card, CardInner } from "../../../components";
import { Avatar, Medal, Star } from "../../../assets";
import styles from "./playerCard.module.css";

function PlayerCard() {
  return (
    <Card>
      <CardInner>
        <div className={styles.cardContentsContainer}>
          <section className={styles.avatarContainer}>
            <img src={Avatar} alt="Avatar" className={styles.avatar} />
          </section>
          <div className={styles.ratingContainer}>
            <div className={styles.starContainer}>
              <img src={Star} alt="Star" className={styles.star} />
              <img src={Star} alt="Star" className={styles.star} />
              <img src={Star} alt="Star" className={styles.star} />
              <img src={Star} alt="Star" className={styles.star} />
              <img src={Star} alt="Star" className={styles.star} />
            </div>
            <h3>Amy Welch</h3>
            <h4>Fullstack developer</h4>
          </div>
          <section className={styles.skills}>
            <h3>Skills</h3>
            <ul>
              <li>
                <img src={Medal} alt="Medal" className={styles.medal} />
                Meticulous attention to detail
              </li>
              <li>
                <img src={Medal} alt="Medal" className={styles.medal} />
                Great soft skills
              </li>
              <li>
                <img src={Medal} alt="Medal" className={styles.medal} />
                Creative thinker
              </li>
              <li>
                <img src={Medal} alt="Medal" className={styles.medal} />
                Fast learner
              </li>
            </ul>
          </section>
        </div>
      </CardInner>
    </Card>
  );
}

export default PlayerCard;
