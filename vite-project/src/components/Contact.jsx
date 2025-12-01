// Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  // Line 5: State to manage form inputs
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  });

  // Line 13: State to show submission status
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Line 17: Get EmailJS credentials from environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Line 22: Initialize EmailJS on component load
  React.useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
  }, [PUBLIC_KEY]);

  // Line 29: Validate form inputs
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.from_name.trim()) {
      setStatus("❌ Name is required");
      return false;
    }
    if (!emailRegex.test(formData.from_email)) {
      setStatus("❌ Please enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      setStatus("❌ Subject is required");
      return false;
    }
    if (formData.message.trim().length < 10) {
      setStatus("❌ Message must be at least 10 characters");
      return false;
    }
    return true;
  };

  // Line 47: Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Line 55: Handle form submission with EmailJS
  const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }

    setIsSubmitting(true);

    

    // Line 64: Send email using EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData)
      .then(
        (response) => {
          // Line 69: Success
          console.log("SUCCESS!", response.status, response.text);
          setStatus("✅ Message sent successfully! I'll get back to you soon.");
          setFormData({ from_name: "", from_email: "", subject: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          // Line 76: Error
          console.error("FAILED...", error);
          setStatus("❌ Failed to send message. Please try again or email me directly.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="section" id="contact">
      <h2>Contact Me</h2>
      <p className="contact__intro">
        Have a question or want to work together? Feel free to reach out!
      </p>

      {/* Contact info cards */}
      <div className="contact__info">
        <div className="contact__card">
          <svg className="contact__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <h3>Email</h3>
          <a href="mailto:frahbrahim27@hotmail.fr">frahbrahim27@hotmail.fr</a>
        </div>

        <div className="contact__card">
          <svg className="contact__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <h3>Phone</h3>
          <a href="tel:+33775755951">+33 7 75 75 59 51</a>
        </div>

        <div className="contact__card">
          <svg className="contact__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <h3>Location</h3>
          <p>Chassieu, Lyon Area, France</p>
        </div>
      </div>

      {/* Contact form */}
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="form__row">
          <div className="form__group">
            <label htmlFor="from_name">Name *</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              placeholder="Your name"
              disabled={isSubmitting}
              aria-label="Your name"
            />
          </div>

          <div className="form__group">
            <label htmlFor="from_email">Email *</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              disabled={isSubmitting}
              aria-label="Your email address"
            />
          </div>
        </div>

        <div className="form__group">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="What is this about?"
            disabled={isSubmitting}
            aria-label="Message subject"
          />
        </div>

        <div className="form__group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Your message here..."
            disabled={isSubmitting}
            aria-label="Your message"
          />
        </div>

        <button type="submit" className="btn primary" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="form__status" role="status">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;