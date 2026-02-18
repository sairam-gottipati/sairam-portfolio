import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const SERVICE_ID = "service_gx6r4el";
const TEMPLATE_ID = "template_ffdcgvb";
const PUBLIC_KEY = "XxxOqOMQnWaRE2d0H";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const payload = {
      ...form,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY)
      .then(() => {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <h2>📬 Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Your Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Your Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Subject
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>
      {status && (
        <div className={`custom-alert ${status.type}`}>{status.message}</div>
      )}
    </>
  );
};

export default Contact;
