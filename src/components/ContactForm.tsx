'use client';

import { FaEnvelope } from 'react-icons/fa';
import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formError, setFormError] = useState<string>('');

  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
      .trim();
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = sanitizeInput(formData.get('name') as string);
    const email = sanitizeInput(formData.get('email') as string);
    const message = sanitizeInput(formData.get('message') as string);

    if (!validateEmail(email)) {
      setFormError('Please enter a valid email address');
      return;
    }

    if (name.length < 2) {
      setFormError('Name must be at least 2 characters long');
      return;
    }

    if (message.length < 10) {
      setFormError('Message must be at least 10 characters long');
      return;
    }

    setFormError('');
    const mailtoLink = `mailto:ShivDDesai@live.com?subject=Portfolio Contact: ${encodeURIComponent(name)}&body=From: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border border-gray-300 focus:border-forest focus:ring-1 focus:ring-forest outline-none transition duration-200"
          required
          minLength={2}
          maxLength={50}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-300 focus:border-forest focus:ring-1 focus:ring-forest outline-none transition duration-200"
          required
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 focus:border-forest focus:ring-1 focus:ring-forest outline-none transition duration-200 resize-none"
          required
          minLength={10}
          maxLength={1000}
        ></textarea>
      </div>
      {formError && (
        <div className="text-red-500 text-sm">{formError}</div>
      )}
      <div>
        <button
          type="submit"
          className="btn btn-primary flex items-center gap-2 px-6 py-2"
        >
          <FaEnvelope className="text-lg" />
          <span>Send Message</span>
        </button>
      </div>
    </form>
  );
} 