import { type FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

export interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  subject: Yup.string(),
  message: Yup.string().required("Message is required"),
});

export const handleFormSubmit = async (
  values: FormValues,
  { resetForm, setSubmitting }: FormikHelpers<FormValues>
) => {
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

    alert("Message sent successfully!");
    resetForm();
  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  } finally {
    setSubmitting(false);
  }
};
