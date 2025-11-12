import React, { useState } from "react";
import { send } from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (!form.fullName || !form.email || !form.message) {
      setStatus({
        sending: false,
        ok: false,
        msg: "Please fill required fields.",
      });
      return;
    }

    setStatus({ sending: true, ok: null, msg: "" });

    const templateParams = {
      from_name: form.fullName,
      from_email: form.email,
      to_email: "edermoros3@gmail.com", 
      subject: form.subject || "Contact from portfolio",
      message: form.message,
    };

    try {
      await send(serviceId, templateId, templateParams, publicKey);
      setStatus({ sending: false, ok: true, msg: "Message sent. Thank you!" });
      setForm({ fullName: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        sending: false,
        ok: false,
        msg: "Failed to send message. Try again later.",
      });
    }
  };

  return (
    <section className="flex justify-center items-center py-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full p-6 rounded-lg bg-white/5 backdrop-blur-sm shadow-md"
        aria-label="Contact form"
      >
        <h2 className="text-2xl font-bold mb-4">Contact</h2>

        <label className="block mb-3">
          <span className="text-sm">Full Name *</span>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 bg-gray-900 border border-gray-700"
            placeholder="Enter your name"
            required
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm">Email Address *</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 bg-gray-900 border border-gray-700"
            placeholder="Enter your email"
            required
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm">Subject</span>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 bg-gray-900 border border-gray-700"
            placeholder="Subject (optional)"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Your Message *</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 h-36 bg-gray-900 border border-gray-700 resize-vertical"
            placeholder="Enter your message"
            required
          />
        </label>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status.sending}
            className="px-4 py-2 rounded-md bg-linear-to-r from-[#fad4d8] to-[#fc440f] text-black font-semibold disabled:opacity-60"
          >
            {status.sending ? "Sending..." : "Send message"}
          </button>
          <span
            role="status"
            className={`text-sm ${status.ok === true ? "text-green-400" : ""} ${
              status.ok === false ? "text-red-400" : "text-gray-300"
            }`}
          >
            {status.msg}
          </span>
        </div>
      </form>
    </section>
  );
}
