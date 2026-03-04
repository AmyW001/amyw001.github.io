import { useFormik } from "formik";
import { useState } from "react";
import { Button } from "../../components";
import { initialValues, validationSchema, type FormValues } from "./contactFormHelper";
import styles from "./contact.module.css";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await emailjs.send(
          "service_msphns9",
          "template_s8qua3k",
          {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          },
          "GJ22LQ5j3ctgsLx8u",
        );

        setShowSuccess(true);
        resetForm();
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } catch (error) {
        console.error(error);
        alert("Failed to send message.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <h2>Contact</h2>

      {showSuccess ? (
        <div className={styles.successMessage}>
          <h3>✓ Message sent successfully!</h3>
          <p>Thanks for reaching out. I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.formRow}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
          </div>

          <div className={styles.formRow}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
          </div>

          <div className={styles.formRow}>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.subject} />
            {formik.touched.subject && formik.errors.subject && <p>{formik.errors.subject}</p>}
          </div>

          <div className={styles.formRow}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} />
            {formik.touched.message && formik.errors.message && <p>{formik.errors.message}</p>}
          </div>

          <div className={styles.buttonRow}>
            <Button
              buttonText="Download CV"
              buttonType="button"
              colorVariant="tertiary"
              onClick={() => window.open("/public/assets/Amy-CV.pdf", "_blank")}
            />
            <Button buttonText={formik.isSubmitting ? "Sending..." : "Submit"} buttonType="submit" disabled={formik.isSubmitting || !formik.isValid} />
          </div>
        </form>
      )}
    </>
  );
}
