import { Button, Card, CardInner } from "../../components";
import { ContactPic } from "../../assets";
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
                <img src={ContactPic} alt="Avatar" className={styles.avatar} />
              </div>
              <Button buttonText="Download CV" buttonType="button" colorVariant="tertiary" onClick={() => window.open("/assets/Amy-CV.pdf", "_blank")} />
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
