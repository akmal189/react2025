import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function ContactSection() {
  const contact = useSelector(state => state.contact);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    hasError: false,
  });

  function handleNameChange(event) {
    setFormData(prev => ({ 
      ...prev, 
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }
  function handleEmailChange(event) {
    setFormData(prev => ({ 
      ...prev, 
      email: event.target.value,
    }));
  }
  function handleMessageChange(event) {
    setFormData(prev => ({ 
      ...prev, 
      message: event.target.value,
    }));
  }

  return (
    <section id="contact" className="bg-white py-12">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">{contact.message}</p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
          name="name"
          value={formData.name}
          required
          style={{ borderColor: formData.hasError ? 'red' : 'gray' }}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
          name="email"
          value={formData.email}
          onChange={handleEmailChange}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full border p-3 rounded"
          name="message"
          value={formData.message}
          onChange={handleMessageChange}
        />
        <button
          type="submit"
          disabled={formData.hasError || !formData.email || !formData.message}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
