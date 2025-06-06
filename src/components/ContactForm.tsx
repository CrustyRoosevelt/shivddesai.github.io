'use client';

import { FaEnvelope } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        const mailtoLink = `mailto:ShivDDesai@live.com?subject=Portfolio Contact: ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
        window.location.href = mailtoLink;
      }}
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
        ></textarea>
      </div>
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