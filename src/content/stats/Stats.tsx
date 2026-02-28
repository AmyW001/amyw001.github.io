import { Bar, Card, CardInner, SkillBar } from "../../components";
import { Book, Bouldering, CSS, Docker, Game, Gym, Hiking, Knitting, Piano, HTML, Javascript, Jest, Laravel, MySQL, Next, PHP, Plant, React, Sass, Tailwind } from "../../assets";
import PlayerCard from "./playerCard/PlayerCard";
import styles from "./stats.module.css";

type Technology = {
  key: string;
  label: string;
  icon: string;
};

const technologies: Technology[] = [
  { key: "javascript", label: "Javascript", icon: Javascript },
  { key: "react", label: "React", icon: React },
  { key: "jest", label: "Jest", icon: Jest },
  { key: "php", label: "PHP", icon: PHP },
  { key: "laravel", label: "Laravel", icon: Laravel },
  { key: "css", label: "CSS", icon: CSS },
  { key: "sass", label: "Sass", icon: Sass },
  { key: "mysql", label: "MySQL", icon: MySQL },
  { key: "html", label: "HTML", icon: HTML },
  { key: "tailwind", label: "Tailwind", icon: Tailwind },
  { key: "docker", label: "Docker", icon: Docker },
  { key: "next", label: "Next.js", icon: Next },
];

function Stats() {
  return (
    <div className={styles.stats}>
      <div className={styles.playerCardColumn}>
        <PlayerCard />
      </div>
      <div className={styles.abilitiesCard}>
        <Card>
          <CardInner>
            <h2>Abilities</h2>
            <section className={styles.professionalAbilities}>
              <div className={styles.listContainer}>
                <h3>Professional</h3>
                <Bar />
                <ul>
                  {technologies.map((tech) => (
                    <li key={tech.key}>
                      <img src={tech.icon} alt={tech.label} />
                      {tech.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.listContainer} >
                <h3>Hobbies</h3>
                <Bar />
                <div className={styles.hobbiesContainer}>
                  <SkillBar iconSrc={Hiking} iconAlt="Hiking" tooltip="Hiking" value={7} />
                  <SkillBar iconSrc={Knitting} iconAlt="Knitting" tooltip="Knitting" value={6} />
                  <SkillBar iconSrc={Bouldering} iconAlt="Bouldering" tooltip="Bouldering" value={3} />
                  {/* <SkillBar iconSrc={Book} iconAlt="Reading" tooltip="Reading" value={9} /> */}
                  {/* <SkillBar iconSrc={Gym} iconAlt="Gym" tooltip="Gym" value={2} /> */}
                  <SkillBar iconSrc={Piano} iconAlt="Piano" tooltip="Piano" value={8} />
                  <SkillBar iconSrc={Plant} iconAlt="Plant care" tooltip="Plant care" value={6} />
                  <SkillBar iconSrc={Game} iconAlt="Gaming" tooltip="Gaming" value={4} />
                </div>
              </div>
            </section>
          </CardInner>
        </Card>
      </div>
    </div>
  );
}

export default Stats