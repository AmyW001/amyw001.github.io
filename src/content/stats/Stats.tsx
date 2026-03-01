import { Bar, Card, CardInner, SkillBar } from "../../components";
import { Bouldering, CSS, Docker, Game, Hiking, Knitting, Piano, Javascript, Jest, Laravel, MySQL, Next, PHP, Plant, React, Sass, Tailwind, Vitest } from "../../assets";
import PlayerCard from "./playerCard/PlayerCard";
import useIsMobile from "../../hooks/useIsMobile";
import styles from "./stats.module.css";

type Technology = {
  id: number;
  key: string;
  label: string;
  icon: string;
};

const technologies: Technology[] = [
  { id: 1, key: "javascript", label: "Javascript", icon: Javascript },
  { id: 2, key: "react", label: "React", icon: React },
  { id: 3, key: "jest", label: "Jest", icon: Jest },
  { id: 9, key: "vitest", label: "Vitest", icon: Vitest },
  { id: 4, key: "php", label: "PHP", icon: PHP },
  { id: 5, key: "laravel", label: "Laravel", icon: Laravel },
  { id: 7, key: "sass", label: "Sass", icon: Sass },
  { id: 6, key: "css", label: "CSS", icon: CSS },
  { id: 8, key: "mysql", label: "MySQL", icon: MySQL },
  { id: 10, key: "tailwind", label: "Tailwind", icon: Tailwind },
  { id: 11, key: "docker", label: "Docker", icon: Docker },
  { id: 12, key: "next", label: "Next.js", icon: Next },
];

function Stats() {
  const isMobile = useIsMobile();
  const mid = Math.ceil(technologies.length / 2);
  const leftTechs = technologies.slice(0, mid);
  const rightTechs = technologies.slice(mid);

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
                <div className={isMobile ? styles.twoColumnTechnologies : ""}>
                  <ul className={styles.leftColumn}>
                    {leftTechs.map((tech) => (
                      <li key={tech.key}>
                        <img src={tech.icon} alt={tech.label} />
                        {tech.label}
                      </li>
                    ))}
                  </ul>
                  {isMobile && (
                    <ul className={styles.rightColumn}>
                      {rightTechs.map((tech) => (
                        <li key={tech.key}>
                          {tech.label}
                          <img src={tech.icon} alt={tech.label} />
                        </li>
                      ))}
                    </ul>
                  )}
                  {!isMobile && (
                    <ul>
                      {rightTechs.map((tech) => (
                        <li key={tech.key}>
                          <img src={tech.icon} alt={tech.label} />
                          {tech.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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