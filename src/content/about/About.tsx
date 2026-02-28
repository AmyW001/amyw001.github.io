import { Card, CardInner, LinkButton } from "../../components";
import PlayerCard from "../stats/playerCard/PlayerCard";
import { Email, GitHub, LinkedIn } from "../../assets";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContentsContainer}>
        <div className={styles.playerCardColumn}>
          <PlayerCard />
        </div>
        <section className={styles.aboutRightContentsContainer}>
          <div className={styles.aboutRightCardWrapper}>
            <Card>
              <CardInner>
                <p className={styles.aboutText}>
                  I'm a fullstack web developer interested in building scalable, easy-to-read code, with experience bridging multi-stack teams post-merger. I
                  have a passion for problem solving, and love using the creativity and communication skills learned from my previous career as a freelance,
                  classical musician for problem solving and collaborative work in a development environment. I enjoy constantly expanding my technical
                  knowledge and I'm currently interested in deepening and extending my knowledge of backend Javascript development.
                </p>
              </CardInner>
            </Card>
          </div>
        </section>
      </div>
      <div className={styles.buttonRow}>
        <LinkButton
          href="https://www.linkedin.com/in/amy-welch-1a9b4b1b3/"
          buttonText="LinkedIn"
          icon={LinkedIn}
          iconAlt="LinkedIn"
          colorVariant="primary"
        />
        <LinkButton
          href="https://github.com/amywelch"
          buttonText="GitHub"
          icon={GitHub}
          iconAlt="GitHub"
          colorVariant="secondary"
        />
        <LinkButton
          href="mailto:amzwelch@gmail.com ?subject=Contact%20from%20portfolio"
          buttonText="Email"
          icon={Email}
          iconAlt="Email"
          colorVariant="tertiary"
        />
      </div>
    </div>
  );
}

export default About;
