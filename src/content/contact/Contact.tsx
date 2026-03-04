import { Button, Card, CardInner } from "../../components";
import { AvatarLaptop } from "../../assets";
import styles from "./contact.module.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <section className={styles.contactInfo}>
        <Card>
          <CardInner>
            <div className={styles.cvDownload}>
              <div className={styles.avatarContainer}>
                <img src={AvatarLaptop} alt="Avatar" className={styles.avatar} />
              </div>
              <Button buttonText="Download CV" buttonType="button" colorVariant="tertiary" onClick={() => window.open("/public/assets/Amy-CV.pdf", "_blank")} />
            </div>
          </CardInner>
        </Card>
      </section>

      <section className={styles.contactForm}>
        <Card>
          <CardInner>
            <ContactForm />
          </CardInner>
        </Card>
      </section>
    </div>
  );
}
