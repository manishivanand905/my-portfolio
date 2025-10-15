import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight } from "react-icons/fa";
import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  ErrorMessage,
} from "./ContactForm.styles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Mani Shivanand", // You can change this in your EmailJS template
      message: formData.message,
    };

    emailjs
      .send(
        "service_lia8hcs",
        "template_yqbpdkj",
        templateParams,
        "n9QScOQCbSuEjs2SP"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitting(false);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitted(false), 3000);
        },
        (err) => {
          console.log("FAILED...", err);
          setIsSubmitting(false);
          // Optionally, show an error message to the user
        }
      );
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormInput
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <FormLabel>Message</FormLabel>
          <FormTextarea
            name="message"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </FormGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Sending..."
            : submitted
            ? "✓ Message Sent!"
            : "Send Message"}
          {!isSubmitting && !submitted && <FaArrowRight />}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
