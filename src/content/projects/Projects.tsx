import { LinkButton, Card, Tag } from "../../components";
import {
  BookClub,
  CareerCache,
  ComingSoon,
  DogWalking,
  FlyVaders,
  LaravelReactCrud,
  Placeholder
} from "../../assets";
import projectsData from "./projects.json";
import styles from "./projects.module.css";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  tags?: string[];
  codeButtonLink: string;
  demoButtonLink: string;
};

const projects: Project[] = projectsData;

const projectImageMap: Record<string, string> = {
  BookClub,
  CareerCache,
  ComingSoon,
  DogWalking,
  FlyVaders,
  LaravelReactCrud,
  Placeholder,
};

function Projects() {
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectCardsContainer}>
        {projects.map((project) => (
          <div className={styles.cardItem} key={project.id}>
            <Card>
              <div className={styles.projectContents}>
                <section className={styles.projectInfo}>
                  <img src={projectImageMap[project.image] ?? Placeholder} alt={project.imageAlt} />
                  <h4>{project.title}</h4>
                  {project.tags && project.tags.length > 0 && (
                    <div className={styles.tagsContainer}>
                      {project.tags.map((tag) => (
                        <Tag key={tag} tagText={tag} />
                      ))}
                    </div>
                  )}
                  <p>{project.description}</p>
                </section>
                <div className={styles.linksContainer}>
                  <LinkButton buttonText="View Code" colorVariant="primary" href={project.codeButtonLink} />
                  {project.demoButtonLink ? (
                    <LinkButton buttonText="View Demo" colorVariant="secondary" href={project.demoButtonLink} />
                  ) : (
                    <LinkButton buttonText="View Demo" colorVariant="secondary" href="#" disabled />
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects