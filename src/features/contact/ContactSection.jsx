import { useSelector } from 'react-redux';

export default function ContactSection() {
  const contact = useSelector(state => state.contact);

  return (
    <section id="contact" className="bg-white py-12">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">{contact.message}</p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full border p-3 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
