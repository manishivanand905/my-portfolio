import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../Common/GlassCard';
import { 
  FormContainer, 
  FormGroup, 
  FormLabel, 
  FormInput, 
  FormTextarea, 
  SubmitButton, 
  ErrorMessage 
} from './ContactForm.styles';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', formData);
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <FormContainer>
      <GlassCard
        as={motion.div}
        style={{ padding: '50px' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
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
            {errors.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
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
            {errors.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel>Message</FormLabel>
            <FormTextarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <ErrorMessage>{errors.message}</ErrorMessage>
            )}
          </FormGroup>

          <SubmitButton
            as={motion.button}
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Sending...' : submitted ? '✓ Message Sent!' : 'Send Message'}
          </SubmitButton>
        </form>
      </GlassCard>
    </FormContainer>
  );
};

export default ContactForm;